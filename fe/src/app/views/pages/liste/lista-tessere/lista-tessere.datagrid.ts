import { TemplateRef } from '@angular/core';
import {
  DataGridColumn,
  DataGridSearchConfig,
  DataGridSortingConfig,
  DataGridEmptyStateConfig,
  DataGridLoadingConfig,
  DataGridToolbarConfig,
} from '../../../../../interfaces/datagrid';
import { Tessera } from '../../../../../interfaces/tessere';
import { cilAvTimer, cilBan, cilBuilding, cilCloudDownload, cilCloudUpload, cilPlus, cilPrint } from '@coreui/icons';
import { AutocompleteOption } from '../../../../../components/autocomplete-select/autocomplete-select.component';
import { TESSERE_STATUS_MESSAGES } from 'src/constants/tessere-status.constants';

export function createTesseraSearchConfig(sediList: AutocompleteOption[]): DataGridSearchConfig {
  return {
    enabled: true,

    fields: [
      { field: 'idTessera', label: 'ID Tessera', type: 'text', size: '2', operator: 'contains' },
      { field: 'sede', label: 'Sede Tessera', type: 'autocomplete', size: '5', operator: 'in', options: sediList, multiple: true },
      {
        field: 'codTipoTessera',
        label: 'Tipo Tessera',
        type: 'autocomplete',
        operator: 'equals',
        options: [
          {
            label: 'Sostitutiva',
            value: 'S',
          },
          {
            label: 'Dipendente',
            value: 'D',
          },
        ],
        size: '2'
      },
      {
        field: 'stato', label: 'Stato', type: 'autocomplete', size: '3', operator: 'in', options: [
          {
            label: TESSERE_STATUS_MESSAGES.LIBERA_DESC,
            value: TESSERE_STATUS_MESSAGES.LIBERA,
          },
          {
            label: TESSERE_STATUS_MESSAGES.OCCUPATA_DESC,
            value: TESSERE_STATUS_MESSAGES.OCCUPATA,
          },
          {
            label: TESSERE_STATUS_MESSAGES.INDISPONIBILE_DESC,
            value: TESSERE_STATUS_MESSAGES.INDISPONIBILE,
          },
          {
            label: TESSERE_STATUS_MESSAGES.ND_DESC,
            value: TESSERE_STATUS_MESSAGES.ND,
          },
        ], multiple: true
      },
      { field: 'codiceFiscale', label: 'Codice Fiscale', type: 'text', size: '4', operator: 'contains' },
      { field: 'nome', label: 'Nome', type: 'text', operator: 'contains', size: '3' },
      { field: 'cognome', label: 'Cognome', type: 'text', operator: 'contains', size: '3' },
    ]
  }
};

export const TESSERE_SELECTION_SUMMARY_CONFIG = {
  enabled: true,
  label: 'Tessere selezionate',
  displayField: 'idTessera',
  maxHeight: '90px',
  clearButton: true,
};

export const TESSERE_SORTING_CONFIG: DataGridSortingConfig = {
  enabled: false,
  defaultSorting: {
    field: 'idTessera',
    direction: 'desc',
  },
};

export const TESSERE_EMPTY_STATE_CONFIG: DataGridEmptyStateConfig = {
  description: 'Try changing filters',
}

export const TESSERE_LOADING_STATE_CONFIG: DataGridLoadingConfig = {
  text: 'Loading data...',
}

export const TESSERE_URL_STATE_CONFIG = {
  enabled: true,
};

export function createGridToolbar(
  openModalAggiungi: () => void,
  openStampa: (rows: Tessera[]) => void,
  openBulkUpdate: (mode:string) => void,
): DataGridToolbarConfig {
  return {
    enabled: true,
    actions: [
      {
        label: 'Aggiungi Tessere',
        icon: cilPlus,
        color: 'success',
        action: openModalAggiungi
      },
      {
        label: 'Stampa Tessere',
        icon: cilPrint,
        color: 'secondary',
        visible: (ctx) => ctx.selectedRows.filter(item => item.stato === TESSERE_STATUS_MESSAGES.OCCUPATA).length !== 0,
        action: (ctx) => {
          openStampa(ctx.selectedRows);
        },
      },
      {
        label: 'Cambia Sede',
        icon: cilBuilding,
        color: 'info',
        visible: (ctx) => ctx.selectedRows.filter(item => item.stato !== TESSERE_STATUS_MESSAGES.INDISPONIBILE).length !== 0,
        action: (ctx) => {
          openBulkUpdate('cambia-sede');
        },
      },
      {
        label: 'Cambia Validità',
        icon: cilAvTimer,
        color: 'warning',
        visible: (ctx) => ctx.selectedRows.filter(item => item.stato === TESSERE_STATUS_MESSAGES.OCCUPATA).length !== 0,
        action: (ctx) => {
          openBulkUpdate('cambia-validita');
        },
      },
      {
        label: 'Indisponibilità',
        icon: cilBan,
        color: 'danger',
        visible: (ctx) => ctx.selectedRows.length !== 0,
        action: (ctx) => {
          openBulkUpdate('indisponibilita');
        },
      },
    ],
  };
}

export function createGridColumn(actionTemplate: TemplateRef<any>, statusTemplate: TemplateRef<any>): DataGridColumn<Tessera>[] {
  return [
    {
      field: 'idTessera',
      header: 'ID',
      width: '80px',
    },
    {
      field: 'codTipoTessera',
      header: 'Tipo',
      render: (row: any) => row.codTipoTessera === "D" ? "Dipendente" : "Sostitutiva"
    },
    {
      field: 'sede',
      header: 'Sede Tessera',
    },
    {
      field: 'persona',
      header: 'Persona',
      render: (row: any) =>
        row.cognome ? `${row.cognome} ${row.nome} <br/> <small> <strong>${row.codiceFiscale} </strong></small>` : '',
    },
    // {
    //   field: 'codiceFiscale',
    //   header: 'CF',
    // },
    {
      field: 'codiceInterno',
      header: 'Codice Interno',
      render: (row: any) =>
        row.codiceInterno ? `${row.codiceInterno}` : '',
    },
    // {
    //   field: 'dataOraIndisponibilita',
    //   header: 'Data Indisponibilità',
    // },
    {
      field: 'assegnazione',
      header: 'Assegnazione',
      render: (row: any) => `
          <small>
            <strong> Inizio: </strong>
            ${row.dataOraInizioAssegnazione || "-"}
          </small> <br/>
          <small>
            <strong> Fine: </strong>
            ${row.dataOraFineAssegnazione || "-"}
          </small> <br/>
          <small>
            <strong> Indisponibilità: </strong>
            ${row.dataOraIndisponibilita || "-"}
          </small>
        `,
      width: "350px"
    },
    {
      field: 'stato',
      header: 'Stato',
      template: statusTemplate,
    },
    {
      field: 'actions',
      header: '',
      template: actionTemplate,
    }
  ];
}
