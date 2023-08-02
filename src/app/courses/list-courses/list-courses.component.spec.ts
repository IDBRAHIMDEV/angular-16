import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursesComponent } from './list-courses.component';

describe('ListCoursesComponent', () => {
  let component: ListCoursesComponent;
  let fixture: ComponentFixture<ListCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCoursesComponent]
    });
    fixture = TestBed.createComponent(ListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
