import { Sedi, Sede } from '../../../../../interfaces/sedi';
import { TemplateRef } from '@angular/core';
import { DataGridColumn, DataGridEmptyStateConfig, DataGridSortingConfig } from '../../../../../interfaces/datagrid';
import { DataGridSearchConfig } from '../../../../../interfaces/datagrid';

export function createSearchConfig(): DataGridSearchConfig {
  return {
    enabled: true,
    fields: [
      { field: 'nome', label: 'Nome', type: 'text', operator: 'contains' },
      { field: 'cognome', label: 'Cognome', type: 'text', operator: 'contains' },
      { field: 'codFiscale', label: 'Codice Fiscale', size: "3", type: 'text', operator: 'contains' },
    ]
  };

}

export function createGridColumn(): DataGridColumn<Sede>[] {
  return [
    {
      field: 'nome',
      header: 'Nome',
    },
    {
      field: 'cognome',
      header: 'Cognome',
    },
    {
      field: 'codFiscale',
      header: 'Codice Fiscale',
    },
  ];
}

export const PERSONE_URL_STATE_CONFIG = {
  enabled: true,
};

