import {
  DataGridColumn, DataGridEmptyStateConfig, DataGridLoadingConfig, DataGridPageEvent,
  DataGridPaginationConfig, DataGridPersistConfig, DataGridRequest, DataGridSearchConfig, DataGridSorting, DataGridSortingConfig,
  DataGridState,
  DataGridToolbarConfig
} from './../../interfaces/datagrid';
import { DatepickerComponent } from './../datepicker/datepicker.component';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
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
    SpinnerComponent
  ],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  changeDetection:
    ChangeDetectionStrategy.OnPush,
})
export class DataGridComponent<T = any> implements OnInit, OnChanges {

  // LOADING
  @Input()
  loadingConfig?: DataGridLoadingConfig;

  @Input()
  loading = false;
  // END LOADING

  @Input()
  emptyStateConfig?: DataGridEmptyStateConfig;

  // PAGINATION
  @Input()
  paginationConfig?: DataGridPaginationConfig;

  @Output()
  pageChange = new EventEmitter<DataGridPageEvent>();
  // END PAGINATION

  // SEARCH
  @Input() searchConfig?: DataGridSearchConfig;
  // END SEARCH

  // SORTING
  @Input()
  sortingConfig?: DataGridSortingConfig;
  // END SORTING

  @Input()
  persistConfig?: DataGridPersistConfig;

  @Input({ required: true })
  columns: DataGridColumn<T>[] = [];

  @Input({ required: true })
  rows: T[] = [];

  @Input()
  toolbarConfig?: DataGridToolbarConfig<T>;

  @Output()
  dataRequest = new EventEmitter<DataGridRequest>();

  icons = { cilSearch, cilFilterX, cilFrown };

  selectedField = '';
  searchValue = '';

  filterValues: Record<string, string> = {};

  // form row (temporary UI state)
  currentField = '';
  currentOperator: 'contains' | 'equals' = 'contains';
  currentValue = '';

  currentSorting: DataGridSorting | null = null;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Init empty object keys first
    this.searchConfig?.fields.forEach((f: any) => {
      this.filterValues[f.field] ??= '';
    });

    // Then restore persisted values
    this.restoreState();

    // Default sorting only if none persisted
    if (
      this.sortingConfig?.defaultSorting && !this.currentSorting
    ) {
      this.currentSorting = this.sortingConfig.defaultSorting;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    // ROWS CHANGED
    if (changes['rows']) {
      // this.updateDisplayedRows();
      this.cdr.markForCheck();
    }

    // LOADING CHANGED
    if (changes['loading']) {
      this.cdr.markForCheck();
    }
  }


  applyFilters() {
    const filters = this.searchConfig?.fields.filter((f: any) => {
      const value = this.filterValues[f.field];

      return (value !== null && value !== undefined && value !== '');
    }).map((f: any) => ({
      field: f.field,
      operator: f.operator ?? 'contains',
      value: this.filterValues[f.field],
    })) ?? [];

    const request: DataGridRequest = {
      filters,
      sorting: this.currentSorting
    };

    // ADD PAGINATION IF SERVER SIDE

    if (
      this.paginationConfig?.enabled &&
      this.paginationConfig.serverSide
    ) {
      request.pagination = {
        page: this.paginationConfig.page,
        pageSize: this.paginationConfig.pageSize,
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
    if (!this.paginationConfig) {
      return 0;
    }

    return Math.ceil(
      this.paginationConfig.totalItems /
      this.paginationConfig.pageSize
    );
  }

  get pages(): number[] {
    return Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }

  get displayedRows(): T[] {

    if (
      !this.paginationConfig?.enabled
    ) {
      return this.rows;
    }

    // SERVER SIDE:
    // backend already paginated
    if (
      this.paginationConfig.serverSide
    ) {
      return this.rows;
    }

    // FRONTEND PAGINATION

    const start = (this.paginationConfig.page - 1) * this.paginationConfig.pageSize;

    const end = start + this.paginationConfig.pageSize;

    return this.rows.slice(start, end);
  }

  changePage(page: number) {

    if (!this.paginationConfig) {
      return;
    }

    const updatedConfig = {
      ...this.paginationConfig,
      page,
    };

    this.paginationConfig = updatedConfig;

    this.applyFilters();

    this.saveState();
  }

  changePageSize(size: number) {

    if (!this.paginationConfig) {
      return;
    }

    this.paginationConfig = {
      ...this.paginationConfig,
      page: 1,
      pageSize: Number(size),
    };

    this.applyFilters();

    this.saveState();
  }

  get hasRows(): boolean {
    return this.displayedRows.length > 0;
  }

  sort(
    column: DataGridColumn<T>
  ): void {

    if (
      !this.sortingConfig?.enabled ||
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

    if (
      !this.persistConfig?.enabled
    ) {
      return;
    }

    const state: DataGridState = {
      filters: this.filterValues,
      sorting: this.currentSorting,
      pagination:
        this.paginationConfig ? {
          page: this.paginationConfig.page,
          pageSize: this.paginationConfig.pageSize,
        }
          : undefined,
    };

    localStorage.setItem(
      this.persistConfig.storageKey,
      JSON.stringify(state)
    );
  }

  restoreState(): void {

    if (!this.persistConfig?.enabled) {
      return;
    }

    const savedState = localStorage.getItem(this.persistConfig.storageKey);

    if (!savedState) {
      return;
    }

    const state: DataGridState = JSON.parse(savedState);

    // FILTERS
    Object.assign(this.filterValues, state.filters ?? {});

    // SORTING
    this.currentSorting = state.sorting ?? null;

    // PAGINATION
    if (state.pagination && this.paginationConfig) {
      this.paginationConfig = {
        ...this.paginationConfig,
        page: state.pagination.page,
        pageSize: state.pagination.pageSize,
      };
    }
  }

  // handleClick(
  //   column: DataGridColumn<T>,
  //   row: T
  // ): void {
  //   column.onClick?.(row);
  // }
}
