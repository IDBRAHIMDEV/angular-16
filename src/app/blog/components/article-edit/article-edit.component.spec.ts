import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditComponent } from './article-edit.component';

describe('ArticleEditComponent', () => {
  let component: ArticleEditComponent;
  let fixture: ComponentFixture<ArticleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleEditComponent]
    });
    fixture = TestBed.createComponent(ArticleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
