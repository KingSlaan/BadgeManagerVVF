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
  multiple = input<boolean>(false);

  search = signal('');
  selectedValue = signal<any>(null);
  selectedValues = signal<any[]>([]);
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

  constructor(private elementRef: ElementRef) { }

  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(value: any): void {
    if (this.multiple()) {
      this.selectedValues.set(Array.isArray(value) ? value : []);
      this.search.set('');
      return;
    }

    this.selectedValue.set(value);

    const selected = this.options().find(opt => opt.value === value);
    this.search.set(selected?.label ?? '');
  }

  isSelected(option: AutocompleteOption): boolean {
    return this.multiple()
      ? this.selectedValues().includes(option.value)
      : option.value === this.selectedValue();
  }

  selectOption(option: AutocompleteOption): void {
    if (this.multiple()) {
      const current = this.selectedValues();

      const next = current.includes(option.value)
        ? current.filter(v => v !== option.value)
        : [...current, option.value];

      this.selectedValues.set(next);
      this.onChange(next);
      this.search.set('');
      this.isOpen.set(true);
      return;
    }

    this.selectedValue.set(option.value);
    this.search.set(option.label);
    this.onChange(option.value);
    this.onTouched();
    this.isOpen.set(false);
  }

  removeSelected(value: any): void {
    const next = this.selectedValues().filter(v => v !== value);
    this.selectedValues.set(next);
    this.onChange(next);
  }

  getSelectedOptions(): AutocompleteOption[] {
    return this.options().filter(opt =>
      this.selectedValues().includes(opt.value)
    );
  }

  clear(): void {
    if (this.multiple()) {
      this.selectedValues.set([]);
      this.search.set('');
      this.onChange([]);
    } else {
      this.selectedValue.set(null);
      this.search.set('');
      this.onChange(null);
    }

    this.onTouched();
    this.isOpen.set(false);
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

    if (!this.multiple()) {
      this.selectedValue.set(null);
      this.onChange(null);
    }

    this.isOpen.set(true);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
      this.onTouched();
    }
  }
}
