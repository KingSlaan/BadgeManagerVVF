export const DATAGRID_CONSTANTS = {
  enabled: true,
  page: 1,
  pageSize: 10,
  totalItems: 10,
  pageSizes: [10, 25, 50,100],
  showPageNumbers: true,
  showPageSizeSelector: true,
  serverSide: true,
};

export const DATAGRID_CONSTANTS_NO_SERVER = {
  enabled: true,
  page: 1,
  pageSize: 10,
  totalItems: 10,
  pageSizes: [10, 25, 50,100],
  showPageNumbers: true,
  showPageSizeSelector: true,
  serverSide: false,
};

export const DATAGRID_CONSTANTS_NO_PAGINATION = {
  enabled: false,
  page: 1,
  pageSize: 999,
  totalItems: 999,
  pageSizes: [10, 25, 50, 100],
  showPageNumbers: true,
  showPageSizeSelector: true,
  serverSide: true,
};
