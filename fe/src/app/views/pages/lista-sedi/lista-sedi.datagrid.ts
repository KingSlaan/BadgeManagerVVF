import { Sedi, Sede } from './../../../../interfaces/sedi';
import { TemplateRef } from '@angular/core';
import { DataGridColumn, DataGridEmptyStateConfig, DataGridSortingConfig } from '../../../../interfaces/datagrid';
import { DataGridSearchConfig } from './../../../../interfaces/datagrid';

export const SEDI_SEARCH_CONFIG: DataGridSearchConfig = {
  enabled: true,

  fields: [
    { field: 'codSede', label: 'Sede', type: 'text' },
    {
      field: 'descrizione',
      label: 'Descrizione',
      type: 'select',
      operator: 'equals',
      options: [
        {
          label: 'RO',
          value: 'Rovigo',
        },
        {
          label: '00',
          value: 'Uffici Centrali',
        },
        {
          label: 'Pending',
          value: 'PENDING',
        },
      ],
    },
  ]
};

export const SEDI_SORTING_CONFIG: DataGridSortingConfig = {
  enabled: true,
  defaultSorting: {
    field: 'idTessera',
    direction: 'desc',
  },
}

export function createGridColumn(): DataGridColumn<Sede>[] {
  return [
    {
      field: 'codice',
      header: 'Sede',
    },
    {
      field: 'descrizione',
      header: 'Descrizione',
    },
    {
      field: 'actions',
      header: 'Actions',
      render: (row: any) => ``,
    }
  ];
}
export const SEDI_MOCK: Sedi = [
  {
    codice: "RO",
    descrizione: "Rovigo"
  },
  {
    codice: "00",
    descrizione: "Uffici Centrali"
  }
];
