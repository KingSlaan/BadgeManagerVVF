import {
  Component,
  ElementRef,
  HostListener,
  input,
  signal,
  computed,
  forwardRef,
  OnInit,
  OnDestroy,
  TemplateRef
} from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Observable, Subject, switchMap, debounceTime, distinctUntilChanged, of, tap, catchError } from 'rxjs';

export interface AutocompleteOption<T = any> {
  label: string;
  value: T;
  data?: any;
}

@Component({
  selector: 'app-autocomplete-select',
  standalone: true,
  imports: [CommonModule, FormsModule, NgTemplateOutlet],
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
export class AutocompleteSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {
  options = input<AutocompleteOption[]>([]);

  itemTemplate = input<TemplateRef<any> | null>(null);
  selectedItemTemplate = input<TemplateRef<any> | null>(null);
  emptyTemplate = input<TemplateRef<any> | null>(null);

  placeholder = input('Select...');
  disabledInput = input<boolean>(false);
  clearable = input<boolean>(true);
  multiple = input<boolean>(false);
  optionKeyFn = input<(option: AutocompleteOption) => any>(
    option => option.value
  );

  search = signal('');
  selectedValue = signal<any>(null);
  selectedValues = signal<any[]>([]);
  selectedOptions = signal<AutocompleteOption[]>([]);

  isOpen = signal(false);
  disabled = signal(false);

  serverSearchFn = input<((term: string) => Observable<AutocompleteOption[]>) | null>(null);
  debounceMs = input<number>(300);
  minSearchLength = input<number>(0);

  loadOnOpen = input<boolean>(false);

  serverOptions = signal<AutocompleteOption[]>([]);
  loading = signal(false);

  private searchSubject = new Subject<string>();


  filteredOptions = computed(() => {
    const sourceOptions = this.serverSearchFn()
      ? this.serverOptions()
      : this.options();

    const term = this.search().toLowerCase().trim();

    if (this.serverSearchFn()) {
      return sourceOptions;
    }

    if (!term) {
      return sourceOptions;
    }

    return sourceOptions.filter(option =>
      option.label.toLowerCase().includes(term)
    );
  });

  constructor(private elementRef: ElementRef) { }

  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(value: any): void {
    if (this.multiple()) {
      const options = Array.isArray(value) ? value : [];

      this.selectedOptions.set(options);
      this.selectedValues.set(options.map(option => option.value));
      this.search.set('');

      return;
    }

    this.selectedValue.set(value);

    const selected = this.getAllOptions().find(
      opt => opt.value === value
    );

    this.search.set(selected?.label ?? '');
  }

  isSelected(option: AutocompleteOption): boolean {
    if (this.multiple()) {
      return this.hasSelectedOption(option);
    }

    return option.value === this.selectedValue();
  }

  selectOption(option: AutocompleteOption): void {
    if (this.multiple()) {
      const exists = this.hasSelectedOption(option);

      if (exists) {
        this.search.set('');
        this.isOpen.set(true);
        return;
      }

      const nextOptions = [...this.selectedOptions(), option];

      this.selectedOptions.set(nextOptions);
      this.selectedValues.set(nextOptions.map(opt => opt.value));

      this.onChange(nextOptions);

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
    const nextOptions = this.selectedOptions().filter(
      opt => opt.value !== value
    );

    this.selectedOptions.set(nextOptions);

    const nextValues = nextOptions.map(opt => opt.value);
    this.selectedValues.set(nextValues);

    this.onChange(nextOptions);
  }

  getAllOptions(): AutocompleteOption[] {
    return this.serverSearchFn()
      ? this.serverOptions()
      : this.options();
  }

  getSelectedOptions(): AutocompleteOption[] {
    return this.multiple()
      ? this.selectedOptions()
      : this.getAllOptions().filter(opt => opt.value === this.selectedValue());
  }

  clear(): void {
    if (this.multiple()) {
      this.selectedOptions.set([]);
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

    if (
      this.serverSearchFn() &&
      this.loadOnOpen() &&
      this.serverOptions().length === 0
    ) {
      this.loadServerOptions('');
    }
  }

  private loadServerOptions(term: string): void {
    const fn = this.serverSearchFn();

    if (!fn) return;

    if (term.trim().length < this.minSearchLength()) {
      this.serverOptions.set([]);
      return;
    }

    this.loading.set(true);

    fn(term)
      .pipe(
        catchError(error => {
          console.error('AUTOCOMPLETE LOAD ERROR:', error);
          return of([]);
        }),
        tap(() => this.loading.set(false))
      )
      .subscribe(options => {
        this.serverOptions.set(options);
      });
  }

  onSearchChange(value: string): void {
    this.search.set(value);

    if (!this.multiple()) {
      this.selectedValue.set(null);
      this.onChange(null);
    }

    if (this.serverSearchFn()) {
      this.searchSubject.next(value);
    }

    this.isOpen.set(true);
  }

  private getOptionKey(option: AutocompleteOption): any {
    return this.optionKeyFn()(option);
  }

  private hasSelectedOption(option: AutocompleteOption): boolean {
    const key = this.getOptionKey(option);

    return this.selectedOptions().some(
      selected => this.getOptionKey(selected) === key
    );
  }

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(this.debounceMs()),
        distinctUntilChanged(),
        switchMap(term => {
          const fn = this.serverSearchFn();

          if (!fn) {
            return of([]);
          }

          if (term.trim().length < this.minSearchLength()) {
            this.serverOptions.set([]);
            return of([]);
          }

          this.loading.set(true);

          return fn(term).pipe(
            catchError(() => of([])),
            tap(() => this.loading.set(false))
          );
        })
      )
      .subscribe(options => {
        this.serverOptions.set(options);
      });
  }

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
      this.onTouched();
    }
  }
}
