import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class Article {
  content: string;
}

@Injectable()
export class ArticlesService {
 
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getArticle(id: number) : Observable<Article> {
    return this.http.get<Article>('/api/blog/' + id);
  }
}
