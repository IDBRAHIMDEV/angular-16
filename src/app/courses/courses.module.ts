import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListCoursesComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListCoursesComponent],
})
export class CoursesModule {}
