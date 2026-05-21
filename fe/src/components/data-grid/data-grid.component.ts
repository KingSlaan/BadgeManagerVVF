import { DataGridColumn, DataGridFilter, DataGridFilterRequest, DataGridPageEvent, DataGridPaginationConfig, DataGridRequest, DataGridSearchConfig, DataGridToolbarConfig } from './../../app/interfaces/datagrid';
import { DatepickerComponent } from './../datepicker/datepicker.component';

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
} from '@coreui/angular';
import { cilSearch, cilFilterX } from '@coreui/icons';
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
    DatepickerComponent
  ],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  changeDetection:
    ChangeDetectionStrategy.OnPush,
})
export class DataGridComponent<T = any> implements OnInit {

  @Input()
  paginationConfig?: DataGridPaginationConfig;

  @Output()
  pageChange =
    new EventEmitter<DataGridPageEvent>();

  @Input() searchConfig?: DataGridSearchConfig;

  @Input({ required: true })
  columns: DataGridColumn<T>[] = [];

  @Input({ required: true })
  rows: T[] = [];

  @Input()
  toolbarConfig?: DataGridToolbarConfig<T>;

  @Output()
  dataRequest = new EventEmitter<DataGridRequest>();

  icons = { cilSearch, cilFilterX };

  selectedField = '';
  searchValue = '';

  /**
     * field -> value map
     */
  filterValues: Record<string, string> = {};

  // form row (temporary UI state)
  currentField = '';
  currentOperator: 'contains' | 'equals' = 'contains';
  currentValue = '';

  ngOnInit() {
    this.searchConfig?.fields.forEach(f => {
      this.filterValues[f.field] = '';
    });
  }

  applyFilters() {

    const filters =
      this.searchConfig?.fields
        .filter(f => {

          const value =
            this.filterValues[f.field];

          return (
            value !== null &&
            value !== undefined &&
            value !== ''
          );
        })
        .map(f => ({
          field: f.field,

          operator:
            f.operator ?? 'contains',

          value:
            this.filterValues[f.field],
        })) ?? [];

    const request: DataGridRequest = {
      filters,
    };

    // ADD PAGINATION IF SERVER SIDE

    if (
      this.paginationConfig?.enabled &&
      this.paginationConfig.serverSide
    ) {

      request.pagination = {

        page:
          this.paginationConfig.page,

        pageSize:
          this.paginationConfig.pageSize,
      };
    }

    this.dataRequest.emit(request);
  }

  clearFilters() {
    Object.keys(this.filterValues).forEach(k => {
      this.filterValues[k] = '';
    });

    this.applyFilters();
  }

  renderCell(
    row: T,
    column: DataGridColumn<T>
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

    const start =
      (this.paginationConfig.page - 1) *
      this.paginationConfig.pageSize;

    const end =
      start +
      this.paginationConfig.pageSize;

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
  }

  // handleClick(
  //   column: DataGridColumn<T>,
  //   row: T
  // ): void {
  //   column.onClick?.(row);
  // }
}
