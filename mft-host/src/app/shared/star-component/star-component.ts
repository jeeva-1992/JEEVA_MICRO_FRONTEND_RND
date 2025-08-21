import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.html',
  imports:[CommonModule],
  styleUrl: './star-component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StarComponent),
    multi: true
  }]
})
export class StarComponent implements ControlValueAccessor{

  onChange = (data:any) => {
    console.log('onchange..',data)
  };
  onTouched = (data: any) => {
    console.log('onTouched..',data)
  };

  writeValue(obj: any): void {
    this.rating = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  @Input() starCount = 5;
  @Input() rating: number = 0;
  @Input() disabled : boolean = false;

  get stars() {
    return Array(this.starCount);
  }

  setRating(rating: number) {
    if(this.disabled) return;
    this.rating = rating;

    this.onChange(this.rating);
    this.onTouched(this.rating);
  }
}