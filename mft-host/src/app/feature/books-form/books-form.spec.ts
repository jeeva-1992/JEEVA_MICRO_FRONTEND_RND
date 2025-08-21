import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksForm } from './books-form';

describe('BooksForm', () => {
  let component: BooksForm;
  let fixture: ComponentFixture<BooksForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
