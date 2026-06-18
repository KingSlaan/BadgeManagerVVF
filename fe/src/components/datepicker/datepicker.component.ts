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
import {
  cilCalendar,
  cilClock,
  cilInfinity
} from '@coreui/icons';

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
  @Input() showTodayButton = false;
  @Input() showSpecificDateButton = false;
  @Input() specificDateValue = '31/12/9999 00:00:00';
  @Input() todayButtonLabel = 'Today';
  @Input() specificDateButtonLabel = 'No end date';
  @Input() showTime = true;
  @Input() readonly = false;

  icons = {
    cilCalendar,
    cilClock,
    cilInfinity
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

    const [datePart, timePart] = this.value.split('T');
    const [year, month, day] = datePart.split('-');

    if (!this.showTime) {
      return `${day}/${month}/${year}`;
    }

    return `${day}/${month}/${year} ${timePart}:00`;
  }

  openPicker(input: HTMLInputElement): void {
    if (!this.disabled && input.showPicker) {
      input.showPicker();
    }
  }

  onValueChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    if (!this.showTime) {
      const [year, month, day] = input.value.split('-');

      this.onChange(`${day}/${month}/${year}`);
    } else {
      this.onChange(this.toDisplayFormat(input.value));
    }

    this.onTouched();
  }

  setToday(): void {
    if (this.disabled) {
      return;
    }

    const now = new Date();

    const day = this.pad(now.getDate());
    const month = this.pad(now.getMonth() + 1);
    const year = now.getFullYear();

    const hours = this.pad(now.getHours());
    const minutes = this.pad(now.getMinutes());

    const displayValue = this.showTime ? `${day}/${month}/${year} ${hours}:${minutes}:00` : `${day}/${month}/${year}`;

    this.value = this.toNativeDateTime(displayValue);
    this.onChange(displayValue);
    this.onTouched();
  }

  setSpecificDate(): void {
    if (this.disabled) {
      return;
    }

    this.value = this.toNativeDateTime(this.specificDateValue);
    this.onChange(this.specificDateValue);
    this.onTouched();
  }

  private pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  private toNativeDateTime(value: string): string {
    const [datePart, timePart] = value.split(' ');

    const [day, month, year] = datePart.split('/');

    if (!this.showTime) {
      return `${year}-${month}-${day}`;
    }

    const [hours, minutes] = timePart.split(':');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private toDisplayFormat(value: string): string {
    const [datePart, timePart] = value.split('T');
    const [year, month, day] = datePart.split('-');

    return `${day}/${month}/${year} ${timePart}:00`;
  }

  get computedPlaceholder(): string {
    return this.showTime
      ? 'gg/mm/aaaa hh:mm:ss'
      : 'gg/mm/aaaa';
  }
}
