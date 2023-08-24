import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleShowComponent } from './components/article-show/article-show.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    ArticleShowComponent,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class BlogModule {}
