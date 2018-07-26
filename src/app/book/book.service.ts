import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getDetail() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
