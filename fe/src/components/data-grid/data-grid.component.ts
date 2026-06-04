import {
  DataGridColumn, DataGridEmptyStateConfig, DataGridLoadingConfig, DataGridPageEvent,
  DataGridPaginationConfig, DataGridPersistConfig, DataGridRequest, DataGridSearchConfig, DataGridSorting, DataGridSortingConfig,
  DataGridState,
  DataGridToolbarConfig
} from './../../interfaces/datagrid';
import { DatepickerComponent } from './../datepicker/datepicker.component';

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  input,
  computed,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import {
  TableModule,
  ButtonModule,
  BadgeModule,
  CardComponent,
  CardBodyComponent,
  CardFooterComponent,
  CardHeaderComponent,
  TableDirective,
  ColComponent,
  FormControlDirective,
  FormDirective,
  GutterDirective,
  RowDirective,
  FormSelectDirective,
  SpinnerComponent,
  FormCheckInputDirective,
} from '@coreui/angular';
import { cilSearch, cilFilterX, cilFrown } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    BadgeModule,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    TableDirective,
    FormsModule,
    ColComponent,
    FormControlDirective,
    FormDirective,
    GutterDirective,
    RowDirective,
    IconDirective,
    FormSelectDirective,
    DatepickerComponent,
    SpinnerComponent,
    FormCheckInputDirective
  ],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  changeDetection:
    ChangeDetectionStrategy.OnPush,
})
export class DataGridComponent<T = any> implements OnInit {

  loading = input(false);
  rows = input<T[]>([]);
  columns = input.required<DataGridColumn<T>[]>();

  paginationConfig = input<DataGridPaginationConfig>();
  searchConfig = input<DataGridSearchConfig>();
  sortingConfig = input<DataGridSortingConfig>();
  loadingConfig = input<DataGridLoadingConfig>();
  emptyStateConfig = input<DataGridEmptyStateConfig>();
  toolbarConfig = input<DataGridToolbarConfig<T>>();
  persistConfig = input<DataGridPersistConfig>();

  @Output()
  dataRequest = new EventEmitter<DataGridRequest>();

  icons = { cilSearch, cilFilterX, cilFrown };

  selectedField = '';
  searchValue = '';

  filterValues: Record<string, any> = {};

  // form row (temporary UI state)
  currentField = '';
  currentOperator: 'contains' | 'equals' = 'contains';
  currentValue = '';

  currentSorting: DataGridSorting | null = null;

  ngOnInit() {
    // Init empty object keys first
    this.searchConfig()?.fields.forEach((f: any) => {
      this.filterValues[f.field] ??=
        f.type === 'checkbox'
          ? false
          : '';
    });

    // Then restore persisted values
    this.restoreState();

    // Default sorting only if none persisted
    if (
      this.sortingConfig()?.defaultSorting && !this.currentSorting
    ) {
      const defaultSorting = this.sortingConfig()?.defaultSorting ?? null;

      this.currentSorting = defaultSorting;
    }
  }


  applyFilters(): void {
    const filters = this.buildFilters();

    const request: DataGridRequest = {
      filters,
      sorting: this.currentSorting,
    };

    const pagination = this.paginationConfig();

    if (pagination?.enabled && pagination.serverSide) {
      request.pagination = {
        page: pagination.page,
        pageSize: pagination.pageSize,
      };
    }

    this.dataRequest.emit(request);
    this.saveState();
  }

  clearFilters() {
    Object.keys(this.filterValues).forEach(k => {
      this.filterValues[k] = '';
    });

    this.applyFilters();
  }

  renderCell(row: T, column: DataGridColumn<T>
  ): string {
    if (column.render) {
      return column.render(row, column);
    }

    return String(
      (row as any)[column.field] ?? ''
    );
  }

  get totalPages(): number {
    if (!this.paginationConfig()) {
      return 0;
    }

    return Math.ceil(
      (this.paginationConfig()?.totalItems || 0) /
      (this.paginationConfig()?.pageSize || 0)
    );
  }

  get pages(): number[] {
    return Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }

  displayedRows = computed(() => {
    const rows = this.rows();
    const pagination = this.paginationConfig();

    if (!pagination?.enabled) {
      return rows;
    }

    if (pagination.serverSide) {
      return rows;
    }

    const start = (pagination.page - 1) * pagination.pageSize;
    const end = start + pagination.pageSize;

    return rows.slice(start, end);
  });

  private buildFilters() {
    return this.searchConfig()?.fields.filter((f: any) => {
      const value = this.filterValues[f.field];

      if (f.type === 'checkbox') {
        return value === true;
      }

      return value !== null && value !== undefined && value !== '';
    }).map((f: any) => ({
      field: f.field,
      operator: f.operator ?? 'equals',
      value: this.filterValues[f.field],
    })) ?? [];
  }

  changePage(page: number): void {
    const pagination = this.paginationConfig();

    if (!pagination) {
      return;
    }

    const request: DataGridRequest = {
      filters: this.buildFilters(),
      sorting: this.currentSorting,
      pagination: {
        page,
        pageSize: pagination.pageSize,
      },
    };

    this.dataRequest.emit(request);
  }

  changePageSize(size: number): void {
    const pagination = this.paginationConfig();

    if (!pagination) {
      return;
    }

    const request: DataGridRequest = {
      filters: this.buildFilters(),
      sorting: this.currentSorting,
      pagination: {
        page: 1,
        pageSize: Number(size),
      },
    };

    this.dataRequest.emit(request);
  }

  hasRows = computed(() => this.displayedRows().length > 0);

  sortingEnabled = computed(
    () => this.sortingConfig()?.enabled === true
  );

  sort(
    column: DataGridColumn<T>
  ): void {

    if (
      !this.sortingConfig()?.enabled ||
      !column.sortable
    ) {
      return;
    }

    // NEW COLUMN

    if (
      !this.currentSorting ||
      this.currentSorting.field !==
      column.field
    ) {

      this.currentSorting = {

        field:
          column.field.toString(),

        direction: 'asc',
      };
    }

    // ASC -> DESC

    else if (
      this.currentSorting.direction ===
      'asc'
    ) {

      this.currentSorting = {

        field:
          column.field.toString(),

        direction: 'desc',
      };
    }

    // DESC -> NONE

    else {

      this.currentSorting = null;
    }

    this.applyFilters();
  }

  isSorted(
    column: DataGridColumn<T>
  ): boolean {

    return (
      this.currentSorting?.field ===
      column.field
    );
  }

  getSortIcon(column: DataGridColumn<T>): string {

    if (
      !this.isSorted(column)
    ) {
      return '↕';
    }

    return this.currentSorting?.direction === 'asc' ? '↑' : '↓';
  }

  onFilterKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.applyFilters();
    }
  }

  saveState(): void {

    const persist = this.persistConfig();

    if (!persist?.enabled) {
      return;
    }

    const state: DataGridState = {
      filters: this.filterValues,
      sorting: this.currentSorting,
    };

    localStorage.setItem(
      persist.storageKey,
      JSON.stringify(state)
    );
  }

  restoreState(): void {

    const persist =
      this.persistConfig();

    if (!persist?.enabled) {
      return;
    }

    const savedState = localStorage.getItem(persist.storageKey);

    if (!savedState) {
      return;
    }

    const state: DataGridState = JSON.parse(savedState);

    // FILTERS
    Object.assign(
      this.filterValues,
      state.filters ?? {}
    );

    // SORTING

    this.currentSorting = state.sorting ?? null;
  }

  // handleClick(
  //   column: DataGridColumn<T>,
  //   row: T
  // ): void {
  //   column.onClick?.(row);
  // }
}
