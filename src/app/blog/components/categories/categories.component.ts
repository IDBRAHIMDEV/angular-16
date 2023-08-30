import { Component, OnInit, inject, signal } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  id = signal<number>(0);
  mode = signal<string>('');
  index = signal<number>(-1);
  label = signal<string>('');
  categories = signal<Category[]>([]);

  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((res) => this.categories.set(res));
  }

  createOrUpdate() {
    const category: Category = {
      label: this.label(),
    };

    if (this.id()) {
      this.update(category);
    } else {
      this.store(category);
    }
  }

  store(category: Category) {
    this.categoryService.persist(category).subscribe((res) => {
      this.label.set('');
      this.categories.mutate((data) => data.push(res));
    });
  }

  update(data: Category) {
    this.mode.set('update');
    data.id = this.id();

    this.categoryService.update(data.id, data).subscribe((res) => {
      this.categories.update((categories) =>
        categories.map((category) =>
          category.id === this.id() ? data : category
        )
      );
      this.label.set('');
      this.id.set(0);
    });
  }

  edit(category: Category) {
    this.mode.set('edit');
    let { id, label } = category;

    if (id) {
      this.id.set(id);
    }
    this.label.set(label);
  }

  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.delete(id).subscribe((res) => {
          this.categories.update((categories) =>
            categories.filter((category) => category.id !== id)
          );

          Swal.fire({
            title: 'Deleted!',
            text: 'Category has been deleted.',
            icon: 'success',
            timer: 4000,
            timerProgressBar: true,
          });
        });
      }
    });
  }

  selected(i: number) {
    this.index.set(i);
  }
}
