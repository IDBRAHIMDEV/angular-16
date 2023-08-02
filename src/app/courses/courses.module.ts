import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './list-courses/list-courses.component';

@NgModule({
  declarations: [ListCoursesComponent],
  imports: [CommonModule],
  exports: [ListCoursesComponent],
})
export class CoursesModule {}
