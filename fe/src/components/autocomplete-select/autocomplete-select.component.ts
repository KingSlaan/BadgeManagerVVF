import {
  Component,
  ElementRef,
  HostListener,
  input,
  signal,
  computed,
  forwardRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

export interface AutocompleteOption<T = any> {
  label: string;
  value: T;
}

@Component({
  selector: 'app-autocomplete-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autocomplete-select.component.html',
  styleUrl: './autocomplete-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteSelectComponent),
      multi: true
    }
  ]
})
export class AutocompleteSelectComponent implements ControlValueAccessor {
  options = input<AutocompleteOption[]>([]);
  placeholder = input<string>('Select...');
  disabledInput = input<boolean>(false);
  clearable = input<boolean>(true);

  search = signal('');
  selectedValue = signal<any>(null);
  isOpen = signal(false);
  disabled = signal(false);

  filteredOptions = computed(() => {
    const term = this.search().toLowerCase().trim();

    if (!term) {
      return this.options();
    }

    return this.options().filter(option =>
      option.label.toLowerCase().includes(term)
    );
  });

  constructor(private elementRef: ElementRef) {}

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.selectedValue.set(value);

    const selected = this.options().find(opt => opt.value === value);
    this.search.set(selected?.label ?? '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  open(): void {
    if (this.disabled() || this.disabledInput()) return;
    this.isOpen.set(true);
  }

  onSearchChange(value: string): void {
    this.search.set(value);
    this.selectedValue.set(null);
    this.onChange(null);
    this.isOpen.set(true);
  }

  selectOption(option: AutocompleteOption): void {
    this.selectedValue.set(option.value);
    this.search.set(option.label);
    this.onChange(option.value);
    this.onTouched();
    this.isOpen.set(false);
  }

  clear(): void {
    this.selectedValue.set(null);
    this.search.set('');
    this.onChange(null);
    this.onTouched();
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
      this.onTouched();
    }
  }
}
