import { Injectable } from '@angular/core';
import { Book } from './book';
import { BehaviorSubject, Observable } from 'rxjs';

const INITIAL_BOOKS: Book[] = [
    { id: 1, name: 'C catalog', author: 'raja', rating: 2 },
    { id: 2, name: 'C++ catalog', author: 'raja', rating: 0 },
    { id: 3, name: 'Java catalog', author: 'raja', rating: 0 },
    { id: 4, name: '.Net catalog', author: 'raja', rating: 0 },
    { id: 5, name: 'Angular catalog', author: 'raja', rating: 0 }]

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly books$ = new BehaviorSubject<Book[]>([...INITIAL_BOOKS]);

  getList() : Observable<Book[]> {
    return this.books$.asObservable();
  }

  update(book:Book) {

    let index = this.books$.value.findIndex(mBook => mBook.id == book.id);
    this.books$.value[index] = book;
    this.books$.next(this.books$.value);
  }

}
