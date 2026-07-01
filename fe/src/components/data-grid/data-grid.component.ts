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

  selectedField = '';
  searchValue = '';

  filterValues: Record<string, any> = {};

  // form row (temporary UI state)
  currentField = '';
  currentOperator: 'contains' | 'equals' = 'contains';
  currentValue = '';

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
    this.searchConfig()?.fields.forEach((f: any) => {
      if (f.type === 'checkbox') {
        this.filterValues[f.field] ??= false;
      } else if (f.type === 'autocomplete' && f.multiple) {
        this.filterValues[f.field] ??= [];
      } else {
        this.filterValues[f.field] ??= '';
      }
    });


    this.applyInitialState();

    if (this.sortingConfig()?.defaultSorting && !this.currentSorting) {
      this.currentSorting = this.sortingConfig()?.defaultSorting ?? null;
    }
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

    const request: DataGridState = {
      filters: this.buildFilters(),
      sorting: this.currentSorting,
    };

    if (pagination?.enabled && pagination.serverSide) {
      request.pagination = {
        page: page ?? 1,
        pageSize: pageSize ?? pagination.pageSize,
      };
    }

    return request;
  }

  applyFilters(): void {
    this.stateChange.emit(this.buildGridState(1));
  }

  clearFilters(): void {
    this.searchConfig()?.fields.forEach((f: any) => {
      if (f.type === 'checkbox') {
        this.filterValues[f.field] = false;
      } else if (f.type === 'autocomplete' && f.multiple) {
        this.filterValues[f.field] = [];
      } else {
        this.filterValues[f.field] = '';
      }
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

    this.stateChange.emit(
      this.buildGridState(
        page,
        pagination.pageSize
      )
    );
  }

  changePageSize(size: number): void {
    this.stateChange.emit(
      this.buildGridState(
        1,
        Number(size)
      )
    );
  }

  hasRows = computed(() => this.displayedRows().length > 0);

  pageItemsCount = computed(
    () => this.displayedRows().length
  );

  totalItems = computed(
    () => this.paginationConfig()?.totalItems ?? this.rows().length
  );

  pageStart = computed(() => {

    const pagination =
      this.paginationConfig();

    if (!pagination?.enabled) {
      return 0;
    }

    return (
      (pagination.page - 1)
      * pagination.pageSize
    ) + 1;
  });

  pageEnd = computed(() => {

    const pagination = this.paginationConfig();

    if (!pagination?.enabled) {
      return this.displayedRows().length;
    }

    return Math.min(this.pageStart() + this.displayedRows().length - 1,
      this.totalItems()
    );
  });

  paginationPages = computed(() => {
    const pagination = this.paginationConfig();

    if (!pagination) {
      return [];
    }

    const current = pagination.page;
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
    const refreshedSelectedRows = this.selectedRows()
      .map(selected => {
        const selectedKey = this.getRowKey(selected);

        return rows.find(row =>
          this.getRowKey(row) === selectedKey
        );
      })
      .filter((row): row is T => !!row);

    const changed =
      refreshedSelectedRows.length !== this.selectedRows().length ||
      refreshedSelectedRows.some((row, index) =>
        row !== this.selectedRows()[index]
      );

    if (!changed) {
      return;
    }

    this.selectedRows.set(refreshedSelectedRows);
    this.emitSelection();
  }

}
