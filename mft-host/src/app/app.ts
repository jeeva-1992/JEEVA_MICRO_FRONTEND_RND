import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarComponent } from './shared/star-component/star-component';
import { BookList } from './feature/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [BookList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mft-host');
}
