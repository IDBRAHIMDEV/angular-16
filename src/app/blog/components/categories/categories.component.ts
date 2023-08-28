import { Component, OnInit, inject, signal } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  label = signal<string>('');
  categories = signal<Category[]>([]);

  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((res) => this.categories.set(res));
  }

  add() {
    const category: Category = {
      label: this.label(),
    };

    this.categoryService.persist(category).subscribe((res) => {
      this.label.set('');
      this.categories.mutate((data) => data.push(res));
    });
  }
}
