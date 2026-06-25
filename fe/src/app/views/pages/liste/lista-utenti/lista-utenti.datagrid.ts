import { Utente, Utenti } from '../../../../../interfaces/utenti';
import { Sedi, Sede } from '../../../../../interfaces/sedi';
import { TemplateRef } from '@angular/core';
import { DataGridColumn, DataGridSortingConfig } from '../../../../../interfaces/datagrid';
import { DataGridSearchConfig } from '../../../../../interfaces/datagrid';

export function createSearchConfig(): DataGridSearchConfig {
  return {
    enabled: true,
    fields: [
      { field: 'email', label: 'Email', type: 'text', size: '2', operator: 'contains' },
      {
        field: 'ruolo',
        label: 'Ruolo',
        type: 'select',
        operator: 'equals',
        size: '2',
        options: [
          {
            label: 'Admin',
            value: 'admin',
          },
          {
            label: 'Operatore',
            value: 'operatore',
          },
          {
            label: 'Visualizzatore',
            value: 'visualizzatore',
          },

        ],
      },
    ]
  };

}

export function createGridColumn(actionTemplate: TemplateRef<any>): DataGridColumn<Utente>[] {
  return [
    {
      field: 'id',
      header: 'Id',
    },
    {
      field: 'email',
      header: 'Email',
    },
    {
      field: 'ruolo',
      header: 'Ruolo',
    },
    {
      field: 'actions',
      header: 'Azioni',
      template: actionTemplate,
    }
  ];
}

export const UTENTI_MOCK: Utenti = [
  {
    id: 1,
    email: "stefano.nasto@vigilfuoco.it",
    ruolo: "Admin",
  },
  {
    id: 1,
    email: "mattia.battaglini@vigilfuoco.it",
    ruolo: "Admin",
  },
  {
    id: 1,
    email: "luigi.riggi@vigilfuoco.it",
    ruolo: "Admin",
  },
  {
    id: 1,
    email: "rodolfo.morandi@vigilfuoco.it",
    ruolo: "Visualizzatore",
  },

];

export const UTENTI_SORTING_CONFIG: DataGridSortingConfig = {
  enabled: false,
  defaultSorting: {
    field: 'idTessera',
    direction: 'desc',
  },
}
