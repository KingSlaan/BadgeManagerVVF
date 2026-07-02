import {
  DataGridColumn, DataGridContextMenuConfig, DataGridEmptyStateConfig, DataGridLoadingConfig, DataGridSelectionSummaryConfig,
  DataGridPaginationConfig, DataGridSearchConfig, DataGridSelectionConfig, DataGridSelectionEvent, DataGridSorting, DataGridSortingConfig,
  DataGridToolbarConfig,
  DataGridToolbarContext,
  DataGridState
} from './../../interfaces/datagrid';
import { DatepickerComponent } from './../datepicker/datepicker.component';
import { AutocompleteSelectComponent } from '../autocomplete-select/autocomplete-select.component';

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  input,
  computed,
  signal,
  HostListener,
  effect
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
    FormCheckInputDirective,
    AutocompleteSelectComponent
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
  initialState = input<DataGridState | null>(null);

  localPage = signal(1);
  localPageSize = signal<number | null>(null);

  selectionSummaryConfig = input<DataGridSelectionSummaryConfig<T>>();

  // CONTEXT MENU
  contextMenuConfig = input<DataGridContextMenuConfig<T>>();

  contextMenuRow = signal<T | null>(null);
  contextMenuOpen = signal(false);
  contextMenuX = signal(0);
  contextMenuY = signal(0);

  @HostListener('document:click')
  onDocumentClick(): void {
    this.closeContextMenu();
  }
  // END CONTEXT MENU

  // ROW SELECTION
  selectionConfig = input<DataGridSelectionConfig>();

  @Output()
  selectionChange = new EventEmitter<DataGridSelectionEvent<T>>();

  selectedRows = signal<T[]>([]);
  // END ROW SELECTION

  @Output()
  stateChange = new EventEmitter<DataGridState>();

  icons = { cilSearch, cilFilterX, cilFrown };

  filterValues: Record<string, any> = {};

  private filterVersion = signal(0);

  currentSorting: DataGridSorting | null = null;

  constructor() {
    effect(() => {
      const rows = this.rows();

      if (!this.selectionConfig()?.enabled) {
        return;
      }

      if (this.selectedRows().length === 0) {
        return;
      }

      this.syncSelectedRowsWithRows(rows);
    });
  }

  ngOnInit() {
    this.initializeFilterValues();
    this.applyInitialState();
    this.initializeSorting();
  }

  private markFiltersChanged(): void {
    this.filterVersion.update(value => value + 1);
  }

  private initializeFilterValues(): void {
    this.searchConfig()?.fields.forEach((field: any) => {
      if (field.type === 'checkbox') {
        this.filterValues[field.field] ??= false;
      } else if (field.type === 'autocomplete' && field.multiple) {
        this.filterValues[field.field] ??= [];
      } else {
        this.filterValues[field.field] ??= '';
      }
    });
  }

  private initializeSorting(): void {
    if (this.sortingConfig()?.defaultSorting && !this.currentSorting) {
      this.currentSorting = this.sortingConfig()?.defaultSorting ?? null;
    }
  }

  private getDefaultFilterValue(field: any): any {
    if (field.type === 'checkbox') {
      return false;
    }

    if (field.type === 'autocomplete' && field.multiple) {
      return [];
    }

    return '';
  }

  private applyInitialState(): void {
    const state = this.initialState();

    if (!state) {
      return;
    }

    state.filters.forEach(filter => {
      this.filterValues[filter.field] = filter.value;
    });

    this.currentSorting = state.sorting ?? this.currentSorting;
  }

  private buildGridState(
    page?: number,
    pageSize?: number
  ): DataGridState {
    const pagination = this.paginationConfig();

    const state: DataGridState = {
      filters: this.buildFilters(),
      sorting: this.currentSorting,
    };

    if (pagination?.enabled && pagination.serverSide) {
      state.pagination = {
        page: page ?? 1,
        pageSize: pageSize ?? pagination.pageSize,
      };
    }

    return state;
  }

  applyFilters(): void {
    this.localPage.set(1);
    this.markFiltersChanged();

    const pagination = this.paginationConfig();

    if (!pagination?.serverSide) {
      return;
    }

    this.stateChange.emit(this.buildGridState(1));
  }

  clearFilters(): void {
    this.searchConfig()?.fields.forEach((field: any) => {
      this.filterValues[field.field] = this.getDefaultFilterValue(field);
    });

    this.currentSorting = null;
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
    const pageSize = this.currentPageSize();

    if (!pageSize) {
      return 0;
    }

    return Math.ceil(this.totalItems() / pageSize);
  }

  filteredRows = computed(() => {
    this.filterVersion();

    const rows = this.rows();
    const pagination = this.paginationConfig();

    if (pagination?.serverSide) {
      return rows;
    }

    return this.applyLocalSorting(
      this.applyLocalFilters(rows)
    );
  });

  displayedRows = computed(() => {
    const rows = this.filteredRows();
    const pagination = this.paginationConfig();

    if (!pagination?.enabled) {
      return rows;
    }

    if (pagination.serverSide) {
      return rows;
    }

    const start = (this.currentPage() - 1) * this.currentPageSize();
    const end = start + this.currentPageSize();

    return rows.slice(start, end);
  });

  private applyLocalFilters(rows: T[]): T[] {
    const filters = this.buildFilters();

    if (filters.length === 0) {
      return rows;
    }

    return rows.filter(row =>
      filters.every(filter => {
        const rowValue = String((row as any)[filter.field] ?? '').toLowerCase();

        if (Array.isArray(filter.value)) {
          return filter.value.some(value =>
            rowValue === String(value).toLowerCase()
          );
        }

        const filterValue = String(filter.value ?? '').toLowerCase();

        if (filter.operator === 'contains') {
          return rowValue.includes(filterValue);
        }

        if (filter.operator === 'starts') {
          return rowValue.startsWith(filterValue);
        }

        return rowValue === filterValue;
      })
    );
  }

  private applyLocalSorting(rows: T[]): T[] {
    if (!this.currentSorting) {
      return rows;
    }

    const { field, direction } = this.currentSorting;

    return [...rows].sort((a, b) => {
      const aValue = (a as any)[field];
      const bValue = (b as any)[field];

      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      const result = String(aValue).localeCompare(
        String(bValue),
        undefined,
        { numeric: true, sensitivity: 'base' }
      );

      return direction === 'asc' ? result : -result;
    });
  }

  private buildFilters() {
    return this.searchConfig()?.fields.filter((f: any) => {
      const value = this.filterValues[f.field];

      if (f.type === 'checkbox') {
        return value === true;
      }

      if (Array.isArray(value)) {
        return value.length > 0;
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

    if (!pagination.serverSide) {
      this.localPage.set(page);
      return;
    }

    this.stateChange.emit(
      this.buildGridState(page, pagination.pageSize)
    );
  }

  changePageSize(size: number): void {
    const pagination = this.paginationConfig();

    if (!pagination) {
      return;
    }

    if (!pagination.serverSide) {
      this.localPageSize.set(Number(size));
      this.localPage.set(1);
      return;
    }

    this.stateChange.emit(
      this.buildGridState(1, Number(size))
    );
  }

  hasRows = computed(() => this.displayedRows().length > 0);

  pageItemsCount = computed(
    () => this.displayedRows().length
  );

  totalItems = computed(() => {
    const pagination = this.paginationConfig();

    return pagination?.serverSide
      ? pagination.totalItems ?? this.rows().length
      : this.filteredRows().length;
  });

  pageStart = computed(() => {
    const pagination = this.paginationConfig();

    if (!pagination?.enabled || this.totalItems() === 0) {
      return 0;
    }

    return ((this.currentPage() - 1) * this.currentPageSize()) + 1;
  });

  pageEnd = computed(() => {
    const pagination = this.paginationConfig();

    if (!pagination?.enabled) {
      return this.displayedRows().length;
    }

    return Math.min(
      this.pageStart() + this.displayedRows().length - 1,
      this.totalItems()
    );
  });

  paginationPages = computed(() => {
    const pagination = this.paginationConfig();

    if (!pagination) {
      return [];
    }

    const current = this.currentPage();
    const total = this.totalPages;

    const pages: Array<number | 'ellipsis'> = [];

    const start = Math.max(1, current - 2);
    const end = Math.min(total, current + 2);

    if (start > 1) {
      pages.push(1);

      if (start > 2) {
        pages.push('ellipsis');
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < total) {
      if (end < total - 1) {
        pages.push('ellipsis');
      }

      pages.push(total);
    }

    return pages;
  });

  currentPage = computed(() => {
    const pagination = this.paginationConfig();

    if (!pagination) {
      return 1;
    }

    return pagination.serverSide
      ? pagination.page
      : this.localPage();
  });

  currentPageSize = computed(() => {
    const pagination = this.paginationConfig();

    return this.localPageSize() ?? pagination?.pageSize ?? 10;
  });

  sortingEnabled = computed(
    () => this.sortingConfig()?.enabled === true
  );

  sort(column: DataGridColumn<T>): void {

    if (!this.sortingConfig()?.enabled || !column.sortable) {
      return;
    }

    // NEW COLUMN

    if (!this.currentSorting || this.currentSorting.field !== column.field) {

      this.currentSorting = {
        field: column.field.toString(),
        direction: 'asc',
      };
    }

    // ASC -> DESC

    else if (this.currentSorting.direction === 'asc') {

      this.currentSorting = {
        field: column.field.toString(),
        direction: 'desc',
      };
    }

    // DESC -> NONE

    else {
      this.currentSorting = null;
    }

    this.applyFilters();
  }

  isSorted(column: DataGridColumn<T>): boolean {

    return (
      this.currentSorting?.field ===
      column.field
    );
  }

  getSortIcon(column: DataGridColumn<T>): string {

    if (!this.isSorted(column)) {
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

  openContextMenu(event: MouseEvent, row: T): void {
    const config = this.contextMenuConfig();

    if (!config?.enabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.contextMenuRow.set(row);
    this.contextMenuX.set(event.clientX);
    this.contextMenuY.set(event.clientY);
    this.contextMenuOpen.set(true);
  }

  closeContextMenu(): void {
    this.contextMenuOpen.set(false);
    this.contextMenuRow.set(null);
  }

  getRowKey(row: T): any {
    const key = this.selectionConfig()?.rowKey;

    return key
      ? (row as any)[key]
      : row;
  }

  isSelected(row: T): boolean {
    const rowKey = this.getRowKey(row);

    return this.selectedRows().some(
      selected => this.getRowKey(selected) === rowKey
    );
  }

  toggleRowSelection(event: Event, row: T): void {
    event.stopPropagation();

    const config = this.selectionConfig();

    if (!config?.enabled) {
      return;
    }

    if (config.mode === 'single') {
      this.selectedRows.set(
        this.isSelected(row) ? [] : [row]
      );
    } else {
      this.selectedRows.update(rows =>
        this.isSelected(row)
          ? rows.filter(
            selected =>
              this.getRowKey(selected) !== this.getRowKey(row)
          )
          : [...rows, row]
      );
    }

    this.emitSelection();
  }

  toggleAllRows(event: Event): void {
    event.stopPropagation();

    const config = this.selectionConfig();

    if (!config?.enabled || config.mode !== 'multiple') {
      return;
    }

    const displayedRows = this.displayedRows();

    if (this.areAllRowsSelected()) {
      // deselect only displayed rows
      this.selectedRows.update(selected =>
        selected.filter(
          selectedRow =>
            !displayedRows.some(
              displayedRow =>
                this.getRowKey(displayedRow) ===
                this.getRowKey(selectedRow)
            )
        )
      );
    } else {
      // add displayed rows, keeping selections from other pages
      this.selectedRows.update(selected => {
        const newRows = displayedRows.filter(
          displayedRow =>
            !selected.some(
              selectedRow =>
                this.getRowKey(selectedRow) ===
                this.getRowKey(displayedRow)
            )
        );

        return [
          ...selected,
          ...newRows,
        ];
      });
    }

    this.emitSelection();
  }

  areAllRowsSelected(): boolean {
    const rows = this.displayedRows();

    return (
      rows.length > 0 &&
      rows.every(row => this.isSelected(row))
    );
  }

  private emitSelection(): void {
    this.selectionChange.emit({
      selectedRows: this.selectedRows(),
    });
  }

  toolbarContext = computed<DataGridToolbarContext<T>>(() => ({
    selectedRows: this.selectedRows(),
  }));

  getSelectionLabel(row: T): string {
    const field = this.selectionSummaryConfig()?.displayField;

    if (!field) {
      return '';
    }

    return String((row as any)[field] ?? '');
  }

  removeSelectedRow(row: T): void {
    this.selectedRows.update(rows =>
      rows.filter(
        selected =>
          this.getRowKey(selected) !== this.getRowKey(row)
      )
    );

    this.emitSelection();
  }

  clearSelection(): void {
    this.selectedRows.set([]);
    this.emitSelection();
  }

  private syncSelectedRowsWithRows(rows: T[]): void {
    const currentSelectedRows = this.selectedRows();

    const nextSelectedRows = currentSelectedRows.map(selected => {
      const selectedKey = this.getRowKey(selected);

      const refreshedRow = rows.find(row =>
        this.getRowKey(row) === selectedKey
      );

      // If refreshed row exists, replace only that row.
      // If not, keep the old selected row.
      return refreshedRow ?? selected;
    });

    const changed = nextSelectedRows.some(
      (row, index) => row !== currentSelectedRows[index]
    );

    if (!changed) {
      return;
    }

    this.selectedRows.set(nextSelectedRows);
    this.emitSelection();
  }

}
