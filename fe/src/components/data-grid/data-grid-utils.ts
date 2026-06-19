import {
  DataGridRequest,
  DataGridSearchConfig,
  DataGridFilter,
  DataGridSorting,
} from '../../interfaces/datagrid';

export function buildDataGridRequestFromState(
  searchConfig: DataGridSearchConfig,
  initialRequest: DataGridRequest,
  storageKey: string,
  queryParamMap: {
    keys: string[];
    has: (name: string) => boolean;
    get: (name: string) => string | null;
  }
): DataGridRequest {

  const hasUrlParams =
    queryParamMap.keys.length > 0;

  if (hasUrlParams) {
    return {
      filters:
        buildFiltersFromUrl(
          searchConfig,
          queryParamMap
        ),

      pagination:
        initialRequest.pagination,

      sorting:
        initialRequest.sorting,
    };
  }

  const saved =
    localStorage.getItem(storageKey);

  if (!saved) {
    return initialRequest;
  }

  const state = JSON.parse(saved) as {
    filters?: Record<string, any>;
    sorting?: DataGridSorting | null;
  };

  return {
    filters:
      buildFiltersFromStoredState(
        searchConfig,
        state.filters ?? {}
      ),

    pagination:
      initialRequest.pagination,

    sorting:
      state.sorting ?? initialRequest.sorting,
  };
}

function buildFiltersFromUrl(
  searchConfig: DataGridSearchConfig,
  queryParamMap: {
    has: (name: string) => boolean;
    get: (name: string) => string | null;
  }
): DataGridFilter[] {

  return searchConfig.fields
    .filter(field =>
      queryParamMap.has(field.field)
    )
    .map(field => {

      let value: any =
        queryParamMap.get(field.field);

      if (field.type === 'checkbox') {
        value = value === 'true';
      }

      if (
        field.multiple &&
        typeof value === 'string'
      ) {
        value =
          value
            .split(',')
            .filter(Boolean);
      }

      return {
        field: field.field,
        operator:
          field.operator ?? 'contains',
        value,
      };
    });
}

function buildFiltersFromStoredState(
  searchConfig: DataGridSearchConfig,
  storedFilters: Record<string, any>
): DataGridFilter[] {

  return searchConfig.fields
    .filter(field => {
      const value =
        storedFilters[field.field];

      if (Array.isArray(value)) {
        return value.length > 0;
      }

      if (field.type === 'checkbox') {
        return value === true;
      }

      return (
        value !== null &&
        value !== undefined &&
        value !== ''
      );
    })
    .map(field => ({
      field: field.field,
      operator:
        field.operator ?? 'contains',
      value:
        storedFilters[field.field],
    }));
}

export function buildUrlQueryParamsFromRequest(
  searchConfig: DataGridSearchConfig,
  request: DataGridRequest
): Record<string, any> {
  const queryParams: Record<string, any> = {};

  searchConfig.fields.forEach(field => {
    const filter = request.filters.find(f => f.field === field.field);

    if (!filter) {
      return;
    }

    const value = filter.value;

    if (Array.isArray(value)) {
      if (value.length > 0) {
        queryParams[field.field] = value.join(',');
      }

      return;
    }

    if (field.type === 'checkbox') {
      queryParams[field.field] = value === true ? true : null;
      return;
    }

    if (value !== null && value !== undefined && value !== '') {
      queryParams[field.field] = value;
    }
  });

  return queryParams;
}
