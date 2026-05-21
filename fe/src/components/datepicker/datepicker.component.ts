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
    this.value = value;
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

    const [year, month, day] = this.value.split('-');

    return `${day}-${month}-${year}`;
  }

  openPicker(input: HTMLInputElement): void {
    input.showPicker();
  }

  onValueChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    this.onChange(this.value);
    this.onTouched();
  }
}
