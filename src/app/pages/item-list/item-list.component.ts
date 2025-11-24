import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Item} from '../../models/item.model';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  loading = false;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loading = true;
    this.itemService.getAll().subscribe({
      next: items => {
        this.items = items;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
