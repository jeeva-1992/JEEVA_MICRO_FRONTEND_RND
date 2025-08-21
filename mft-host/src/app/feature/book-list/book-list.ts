import { Component, Inject, OnInit } from '@angular/core';
import { BookService } from '../../core/book-service';
import { Book } from '../../core/book';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../../shared/star-component/star-component';
import { BooksForm } from '../books-form/books-form';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  standalone: true,
  imports: [CommonModule, StarComponent, BooksForm]
})
export class BookList implements OnInit {
  bookList: Book[] = [];
  currentBook!: Book;
  averageRating!: number;
  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.bookService.getList().subscribe(list => {
      this.bookList = list;
      this.calculateAverageRating(list);
    })
  }

  calculateAverageRating(list: Book[]) {
    let totalCount = list.length;
    let totalRating = list.reduce((a, b) => {
      return a + b.rating
    }, 0)

    this.averageRating = totalRating / totalCount;
  }

  track(index: number, book: Book): number {
    return book.id;
  }

  openBook(book: Book) {
    this.currentBook = { ...book };
  }
}
