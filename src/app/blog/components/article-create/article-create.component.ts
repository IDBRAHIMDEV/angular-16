import { Component, OnInit, inject, signal } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { TagService } from '../../services/tag.service';
import { Category } from '../../models/category';
import { Tag } from '../../models/tag';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
})
export class ArticleCreateComponent implements OnInit {
  categoryService = inject(CategoryService);
  tagService = inject(TagService);

  categories = signal<Category[]>([]);
  tags = signal<Tag[]>([]);

  ngOnInit(): void {
    this.getCategories();
    this.getTags();
  }

  getCategories() {
    this.categoryService.getAll().subscribe((res) => this.categories.set(res));
  }

  getTags() {
    this.tagService.getAll().subscribe((res) => this.tags.set(res));
  }

  save(articleForm: NgForm) {
    console.log(articleForm);
  }
}
