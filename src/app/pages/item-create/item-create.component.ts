import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {Category} from '../../models/category.model';
import {CategoryService} from '../../services/category.service';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  title = '';
  description = '';
  type: 'lost' | 'found' = 'lost';
  location = '';
  date = '';
  categoryId?: number;
  categories: Category[] = [];
  error = '';
  loading = false;

  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: cats => this.categories = cats,
      error: () => this.error = 'Kategorien konnten nicht geladen werden.'
    });
  }

  onSubmit() {
    if (!this.categoryId || !this.title || !this.location || !this.date) {
      this.error = 'Bitte alle Pflichtfelder ausfüllen.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.itemService.create({
      title: this.title,
      description: this.description,
      type: this.type,
      location: this.location,
      date: this.date,
      category: { id: this.categoryId, name: '' }
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/items']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Item konnte nicht erstellt werden.';
      }
    });
  }
}
