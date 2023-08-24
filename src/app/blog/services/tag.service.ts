import { Injectable, inject } from '@angular/core';
import { Tag } from '../models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  apiUrl = 'http://localhost:3000/tags';

  http = inject(HttpClient);

  getAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl);
  }

  getOne(id: number): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiUrl}/${id}`);
  }

  persist(data: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.apiUrl, data);
  }

  update(id: number, data: Tag): Observable<Tag> {
    return this.http.put<Tag>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.apiUrl}/${id}`);
  }
}
