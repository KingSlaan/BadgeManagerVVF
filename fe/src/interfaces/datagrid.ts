import { TemplateRef } from '@angular/core';

export interface DataGridPersistConfig {
  enabled: boolean;
  storageKey: string;
}

export interface DataGridState {
  filters: Record<string, any>;
  sorting: DataGridSorting | null;
  pagination?: {
    page: number;
    pageSize: number;
  };
}

export type DataGridSortDirection =
  | 'asc'
  | 'desc';

export interface DataGridSorting {
  field: string;
  direction: DataGridSortDirection;
}

export interface DataGridSortingConfig {
  enabled: boolean;
  defaultSorting?: DataGridSorting;
}

export interface DataGridEmptyStateConfig {
  title?: string;
  description?: string;
}

export interface DataGridLoadingConfig {
  text?: string;
}

export interface DataGridPaginationConfig {
  enabled: boolean;
  page: number;
  pageSize: number;
  totalItems: number;
  pageSizes?: number[];
  showPageNumbers?: boolean;
  showPageSizeSelector?: boolean;
  serverSide?: boolean;
}

export interface DataGridPageEvent {
  page: number;
  pageSize: number;
}

export interface DataGridToolbarAction<T = any> {
  label: string;
  icon?: any;
  color?: string;
  variant?: 'button' | 'outline';
  visible?: () => boolean;
  disabled?: () => boolean;
  action: () => void;
}

export interface DataGridToolbarConfig<T = any> {
  enabled: boolean;
  actions: DataGridToolbarAction<T>[];
}

export interface DataGridFilter {
  field: string;
  operator: 'contains' | 'equals';
  value: string;
}

export interface DataGridFilterRequest {
  filters: DataGridFilter[];
}

export interface DataGridSelectOption {
  label: string;
  value: any;
}

export interface DataGridSearchField {
  field: string;
  label: string;
  size?: string;
  type?: 'text' | 'select' | 'date';
  operator?: 'contains' | 'equals';
  options?: DataGridSelectOption[];
}

export interface DataGridSearchConfig {
  enabled: boolean;
  fields: DataGridSearchField[];
}

export interface DataGridColumn<T = any> {
  field: keyof T | string;
  header: string;
  width?: string;
  sortable?: boolean;
  className?: string;
  render?: (
    row: T,
    column: DataGridColumn<T>
  ) => string;
  template?: TemplateRef<any>;
}

export interface DataGridRequest {
  filters: DataGridFilter[];
  pagination?: {
    page: number;
    pageSize: number;
  };
  sorting?: DataGridSorting | null;
}
