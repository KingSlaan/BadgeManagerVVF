import { Sedi, Sede } from '../../../../../interfaces/sedi';
import { TemplateRef } from '@angular/core';
import { DataGridColumn, DataGridToolbarConfig } from '../../../../../interfaces/datagrid';
import { DataGridSearchConfig } from '../../../../../interfaces/datagrid';
import { AutocompleteOption } from '@docs-components/autocomplete-select/autocomplete-select.component';
import { cilPrint } from '@coreui/icons';
import { Persona } from 'src/interfaces/persone';

export function createSearchConfig(sediList: AutocompleteOption[]): DataGridSearchConfig {
  return {
    enabled: true,
    fields: [
      { field: 'cognome', label: 'Cognome', type: 'text', operator: 'contains' },
      { field: 'nome', label: 'Nome', type: 'text', operator: 'contains' },
      { field: 'codFiscale', label: 'Codice Fiscale', size: "3", type: 'text', operator: 'contains' },
      { field: 'idSede', label: 'Codice Sede', type: 'autocomplete', operator: 'contains', size: '3', options: sediList },
    ]
  };

}

export function createGridColumn(actionTemplate: TemplateRef<any>, sedi: AutocompleteOption[]): DataGridColumn<Sede>[] {
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
      render: (row: any) => {
        let sede = sedi.find(item => item.value === row.idSede);
        return sede ? sede.label : row.idSede
      }
    },
    {
      field: 'actions',
      header: '',
      template: actionTemplate,
    }
  ];
}

export function createGridToolbar(
  openStampa: (rows: Persona[]) => void,
): DataGridToolbarConfig {
  return {
    enabled: true,
    actions: [
      {
        label: 'Stampa Tessere',
        icon: cilPrint,
        color: 'secondary',
        visible: (ctx) => ctx.selectedRows.length !== 0,
        action: (ctx) => {
          openStampa(ctx.selectedRows);
        },
      }
    ],
  };
}

export const PERSONE_URL_STATE_CONFIG = {
  enabled: true,
};

export const PERSONE_SELECTION_SUMMARY_CONFIG = {
  enabled: true,
  label: 'Persone selezionate',
  displayField: 'codFiscale',
  maxHeight: '90px',
  clearButton: true,
};

