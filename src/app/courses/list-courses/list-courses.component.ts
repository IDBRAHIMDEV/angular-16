import { Course } from './../course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent {
  etatForm: boolean = false;

  myCourse: Course = {
    title: 'Learn to learn',
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
}
