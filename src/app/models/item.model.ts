import { Category } from './category.model';

export interface Item {
  id?: number;
  title: string;
  description: string;
  type: 'lost' | 'found';
  location: string;
  date: string; // ISO-String
  category: Category;
}
