import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiUrl = 'http://localhost:3000/articles';

  http = inject(HttpClient);

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getOne(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  persist(data: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, data);
  }

  update(id: number, data: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.apiUrl}/${id}`);
  }
}
