import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private baseUrl = environment.backendUrl + '/items';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item);
  }
}
