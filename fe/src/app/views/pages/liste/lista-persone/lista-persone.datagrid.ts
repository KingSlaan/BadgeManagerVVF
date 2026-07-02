import { Sedi, Sede } from '../../../../../interfaces/sedi';
import { TemplateRef } from '@angular/core';
import { DataGridColumn} from '../../../../../interfaces/datagrid';
import { DataGridSearchConfig } from '../../../../../interfaces/datagrid';
import { AutocompleteOption } from '@docs-components/autocomplete-select/autocomplete-select.component';

export function createSearchConfig(sediList: AutocompleteOption[]): DataGridSearchConfig {
  return {
    enabled: true,
    fields: [
      { field: 'cognome', label: 'Cognome', type: 'text', operator: 'contains' },
      { field: 'nome', label: 'Nome', type: 'text', operator: 'contains' },
      { field: 'codFiscale', label: 'Codice Fiscale', size: "3", type: 'text', operator: 'contains' },
      { field: 'idSede', label: 'Codice Sede', type: 'autocomplete', operator: 'contains', size:'3', options: sediList },
    ]
  };

}

export function createGridColumn(): DataGridColumn<Sede>[] {
  return [
    {
      field: 'cognome',
      header: 'Cognome',
    },
    {
      field: 'nome',
      header: 'Nome',
    },
    {
      field: 'codFiscale',
      header: 'Codice Fiscale',
    },
    {
      field: 'dataNascita',
      header: 'Data Nascita',
    },
    {
      field: 'sesso',
      header: 'Sesso',
    },
    {
      field: 'idSede',
      header: 'Codice Sede',
    },
  ];
}

export const PERSONE_URL_STATE_CONFIG = {
  enabled: true,
};

