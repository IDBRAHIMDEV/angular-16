import { Course } from './../course';
import { Component } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent {
  editable: boolean = false;
  etatForm: boolean = false;

  myCourse: Course = {
    title: '',
    price: 0,
  };

  courses: Course[] = [
    {
      id: '1',
      title: 'Learn React',
      price: 20,
    },
    {
      id: '2',
      title: 'Learn Angular 16',
      price: 30,
    },
    {
      id: '3',
      title: 'Learn Vue',
      price: 25,
    },
  ];

  toggleForm() {
    this.initCourse();
    this.editable = false;
    this.etatForm = !this.etatForm;
  }

  deleteCourse(myCourse: Course) {
    // const index = this.courses.indexOf(course);
    // this.courses.splice(index, 1);

    if (!confirm(`Are you sure to delete this course ${myCourse.title} ?`)) {
      return;
    }
    this.courses = this.courses.filter((course) => course.id !== myCourse.id);
  }

  addCourse() {
    const course = {
      ...this.myCourse,
      id: uuidv4(),
    };

    this.courses = [course, ...this.courses];
    console.log(this.courses);
    this.initCourse();
  }

  initCourse() {
    this.myCourse = {
      title: '',
      price: 0,
    };
  }

  editCourse(course: Course) {
    this.etatForm = true;
    this.editable = true;
    this.myCourse = course;
  }

  updateCourse() {
    this.etatForm = false;
    this.editable = false;
    this.initCourse();
  }
}
