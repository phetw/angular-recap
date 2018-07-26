import { Component, OnInit } from '@angular/core'
import { BookService } from '../book/book.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [BookService]
})
export class AboutComponent implements OnInit {
  book: Book
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.fetchBookDetail()
  }

  fetchBookDetail() {
    this.bookService.getDetail().subscribe((data: any) => {
      this.book = { ...data }
    })
  }
}

export interface Book {
  id: string
  title: string
  body: string
}
