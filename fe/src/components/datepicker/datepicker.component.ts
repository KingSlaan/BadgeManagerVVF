import {
  Component,
  Input,
  forwardRef,
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { cilCalendar } from '@coreui/icons';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  imports: [
    IconModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
})
export class DatepickerComponent implements ControlValueAccessor {
  @Input() label = 'Select date';
  @Input() min?: string;
  @Input() max?: string;
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() helperText?: string;
  @Input() placeholder = 'Select a date';

  icons = {
    cilCalendar,
  };

  value: string | null = null;

  private onChange: (value: string | null) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: string | null): void {
    if (!value) {
      this.value = null;
      return;
    }

    this.value = this.toNativeDateTime(value);
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get displayValue(): string {
    if (!this.value) {
      return '';
    }

    return this.toDisplayFormat(this.value);
  }

  openPicker(input: HTMLInputElement): void {
    if (!this.disabled && input.showPicker) {
      input.showPicker();
    }
  }

  onValueChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    const formatted = this.toDisplayFormat(this.value);

    this.onChange(formatted);
    this.onTouched();
  }

  private toNativeDateTime(value: string): string {
    // 27/05/2026 14:04:00
    // -> 2026-05-27T14:04

    const [datePart, timePart] = value.split(' ');

    const [day, month, year] = datePart.split('/');

    const [hours, minutes] = timePart.split(':');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private toDisplayFormat(value: string): string {
    // 2026-05-27T14:04
    // -> 27/05/2026 14:04:00

    const [datePart, timePart] = value.split('T');

    const [year, month, day] = datePart.split('-');

    return `${day}/${month}/${year} ${timePart}:00`;
  }
}
