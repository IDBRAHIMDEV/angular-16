import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleShowComponent } from './components/article-show/article-show.component';
import { HttpClientModule } from '@angular/common/http';
import { TagsComponent } from './components/tags/tags.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    ArticleShowComponent,
    TagsComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [CategoriesComponent, TagsComponent, ArticleCreateComponent],
})
export class BlogModule {}
