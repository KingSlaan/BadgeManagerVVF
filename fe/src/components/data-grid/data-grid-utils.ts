import {
  DataGridState,
  DataGridSearchConfig,
  DataGridFilter,
} from '../../interfaces/datagrid';

export function buildDataGridState(
  searchConfig: DataGridSearchConfig,
  initialState: DataGridState,
  queryParamMap: {
    keys: string[];
    has: (name: string) => boolean;
    get: (name: string) => string | null;
  }
): DataGridState {
  const hasUrlParams =
    searchConfig.fields.some(field =>
      queryParamMap.has(field.field)
    );

  if (hasUrlParams) {
    return {
      filters: buildFiltersFromUrl(
        searchConfig,
        queryParamMap
      ),
      sorting: initialState.sorting ?? null,
      pagination: initialState.pagination,
    };
  }

  return initialState;
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

export function buildUrlQueryParamsFromState(
  searchConfig: DataGridSearchConfig,
  request: DataGridState
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
