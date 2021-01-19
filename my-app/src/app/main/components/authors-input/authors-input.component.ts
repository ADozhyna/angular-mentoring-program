import { Component, forwardRef, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CourseAuthor } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true
    }
  ],
})
export class AuthorsInputComponent implements OnChanges, ControlValueAccessor, Validator {
  
  @Input() public authors: CourseAuthor[];
  @Input() public errorMatcher: any;

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  public selectedAuthors: Observable<CourseAuthor[]>;

  public form: FormGroup = new FormGroup({
    authors: new FormArray([]),
    selectedAuthor: new FormControl(''),
  });

  public input = new FormControl();

  public ngOnChanges(): void {
    if(this.authors) {
      this.selectedAuthors = this.input.valueChanges.pipe(
        startWith(null),
        map((author: string | null) => this.filter(author)));
    }
  }

  public onTouched: () => void;
  public onChanged: (value) => any;

  public writeValue(values: CourseAuthor[]): void {
    if (values) {
      values.forEach((value) => {
        this.createArrayControl(value);
      });
    }
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.form.valueChanges.subscribe((value) => fn(value.authors));
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public validate(): ValidationErrors | null {
    return this.form.value.authors.length >= 1
      ? null
      : { minLength : true };
  }

  public selectAuthor(event: MatAutocompleteSelectedEvent) {
    const fullName = event.option.value.split(' ');
    this.createArrayControl({ name: fullName[0], lastName: fullName[1] });
    this.input.setValue('');
    this.authorInput.nativeElement.value = '';
  }

  public removeAuthor(index: number): void {
    const authorsControl = this.form.controls['authors'] as FormArray;
    authorsControl.removeAt(index);
  }

  private createArrayControl({ name, lastName }: CourseAuthor): void {
    const authorsControl = this.form.controls['authors'] as FormArray;
    authorsControl.push(new FormGroup({
      name: new FormControl(name),
      lastName: new FormControl(lastName)
    }));
  }

  private filter(value: string): CourseAuthor[] {
    return value
      ? this.authors
          .filter(
            (author) => `${author.name.toLowerCase()} ${author.lastName.toLowerCase()}`
              .includes(value.toLowerCase()) && !this.isAuthorSelected(author)
          )
      : this.authors
          .filter(
            (author) => !this.isAuthorSelected(author)
          );
  }

  private isAuthorSelected(author: CourseAuthor): boolean {
    return !!this.form.value.authors
      .find(
        ({ name, lastName }) => author.name === name && author.lastName === lastName
      );
  }
}
