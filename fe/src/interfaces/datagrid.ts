import { TemplateRef } from '@angular/core';

export interface DataGridSelectionSummaryConfig<T = any> {
  enabled: boolean;
  label?: string;
  displayField: keyof T | string;
  maxHeight?: string;
  clearButton?: boolean;
}

export type DataGridFilterValue =
  | string
  | boolean
  | string[]
  | number
  | null;

export type DataGridFilterOperator =
  | 'contains'
  | 'equals'
  | 'starts'
  | 'in';
export interface DataGridUrlStateConfig {
  enabled: boolean;
}
export interface DataGridSelectionConfig {
  enabled: boolean;
  mode: 'single' | 'multiple';
  rowKey: string;
}

export interface DataGridSelectionEvent<T = any> {
  selectedRows: T[];
}

export interface DataGridContextMenuConfig<T = any> {
  enabled: boolean;
  template: TemplateRef<any>;
}

export interface DataGridPersistConfig {
  enabled: boolean;
  storageKey: string;
}

export interface DataGridToolbarContext<T = any> {
  selectedRows: T[];
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
  visible?: (context: DataGridToolbarContext<T>) => boolean;
  disabled?: (context: DataGridToolbarContext<T>) => boolean;
  action: (context: DataGridToolbarContext<T>) => void;
}

export interface DataGridToolbarConfig<T = any> {
  enabled: boolean;
  actions: DataGridToolbarAction<T>[];
}

export interface DataGridFilter {
  field: string;
  operator: DataGridFilterOperator;
  value: DataGridFilterValue;
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
  type?: 'text' | 'select' | 'date' | 'checkbox' | 'autocomplete';
  operator?: DataGridFilterOperator;
  size?: string;
  multiple?: boolean;
  options?: {
    label: string;
    value: any;
  }[];
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
