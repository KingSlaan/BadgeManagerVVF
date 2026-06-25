import { Sedi, Sede } from '../../../../../interfaces/sedi';
import { TemplateRef } from '@angular/core';
import { DataGridColumn, DataGridEmptyStateConfig, DataGridSortingConfig } from '../../../../../interfaces/datagrid';
import { DataGridSearchConfig } from '../../../../../interfaces/datagrid';

export function createSearchConfig(): DataGridSearchConfig {
  return {
    enabled: true,
    fields: [
      { field: 'codSede', label: 'Codice', type: 'text' },
      { field: 'descrizione', label: 'Descrizione', type: 'text',size: '4', operator: 'contains' },
    ]
  };

}

export const SEDI_SORTING_CONFIG: DataGridSortingConfig = {
  enabled: false,
  defaultSorting: {
    field: 'idTessera',
    direction: 'desc',
  },
}

export function createGridColumn(): DataGridColumn<Sede>[] {
  return [
    {
      field: 'codSede',
      header: 'Codice',
    },
    {
      field: 'descrizione',
      header: 'Descrizione',
    }
  ];
}


export const SEDI_MOCK: Sedi = [
  {
    codSede: "RO",
    descrizione: "Rovigo"
  },
  {
    codSede: "00",
    descrizione: "Uffici Centrali"
  }

];
