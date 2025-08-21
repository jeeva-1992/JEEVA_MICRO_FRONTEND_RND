import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../core/book';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../../shared/star-component/star-component';
import { BookService } from '../../core/book-service';

@Component({
  selector: 'app-books-form',
  imports: [ReactiveFormsModule,CommonModule,StarComponent],
  templateUrl: './books-form.html',
  styleUrl: './books-form.css'
})
export class BooksForm {
  bookFormGroup!: FormGroup;
  formData!: Book;
  submitted : boolean = false;
  @Input() set mFormData(value:Book){
    this.submitted = false;
    this.formData = value;
    if(value){
      this.createFormGroup(value)
    }
  }

  constructor(private fb: FormBuilder,private bookService:BookService){
    this.submitted = false;
  }
  createFormGroup(formData:Book){
    this.bookFormGroup = new FormGroup(
      {
        bookName : new FormControl(formData.name),
        bookAuthor : new FormControl(formData.author),
        bookRating : new FormControl(formData.rating,[this.requireRating,Validators.min(1),Validators.max(5)])
      }
    )
  }

  requireRating(control:AbstractControl) {
    return control.value && control.value > 0 ? null : { required : true};
  }

  submit(){
    this.submitted = true;
    console.log(this.bookFormGroup);
    this.formData.rating = this.bookFormGroup.getRawValue().bookRating;
    if(this.bookFormGroup.valid){
     this.bookService.update(this.formData);
    }
  }
}
