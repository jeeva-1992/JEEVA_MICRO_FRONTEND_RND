import { Routes } from '@angular/router';
import { BookList } from './feature/book-list/book-list';

export const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },   // default route
  { path: 'books', component: BookList },
  { path: '**', redirectTo: 'books' } // wildcard/fallback
];
