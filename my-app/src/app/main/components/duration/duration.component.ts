import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ],
})
export class DurationComponent implements ControlValueAccessor, Validator {

  public form: FormGroup = new FormGroup({
    length: new FormControl('')
  });

  @Input() public errorMatcher: any;

  constructor() { }
  
  onTouched: () => void;
  onChanged: (value) => any;

  writeValue(value: any): void {
    this.form.patchValue({ length: value }, {
      onlySelf: true,
      emitEvent: false
    });
  }

  registerOnChange(fn: (value: any) => void): void {
    this.form.valueChanges.subscribe((value) => fn(value.length));
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable()
      : this.form.enable();
  }

  validate(): ValidationErrors | null {
    return !this.form.value.length || Number.isInteger(+this.form.value.length)
      ? null
      : { notInteger: true };
  }

  registerOnValidatorChange(fn: () => void): void {
    this.form.statusChanges.subscribe(fn);
  }
}
