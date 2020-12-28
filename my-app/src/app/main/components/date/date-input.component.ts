import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ],
})
export class DateInputComponent implements ControlValueAccessor, Validator {

  public form: FormGroup = new FormGroup({
    date: new FormControl('')
  });

  @Input() public errorMatcher: any;

  constructor() { }

  onTouched: () => void;
  onChanged: (value) => any;

  writeValue(value: any): void {
    this.form.patchValue({ date: value }, {
      onlySelf: true,
      emitEvent: false
    });
  }

  registerOnChange(fn: (value: any) => void): void {
    this.form.valueChanges.subscribe((value) => fn(value.date));
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable()
      : this.form.enable();
  }

  validate(): ValidationErrors | null {
    return !this.form.value.length || this.form.value.date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
      ? null
      : { noRequiredFormat: true }; //не могу понять почему здесь всегда null, даже если матчится строка, в итоге использовала Validators.pattern
  }

  registerOnValidatorChange(fn: () => void): void {
    this.form.statusChanges.subscribe(fn);
  }

}
