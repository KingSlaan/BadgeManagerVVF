import { TemplateRef } from '@angular/core';
import {
  DataGridColumn,
  DataGridSearchConfig,
  DataGridSortingConfig,
  DataGridEmptyStateConfig,
  DataGridLoadingConfig,
  DataGridToolbarConfig,
} from '../../../../interfaces/datagrid';
import { Tessera, Tessere } from '../../../../interfaces/tessere';
import { cilCloudDownload, cilCloudUpload, cilPlus, cilPrint } from '@coreui/icons';
import { AutocompleteOption } from '../../../../components/autocomplete-select/autocomplete-select.component';

export function createTesseraSearchConfig(sediList: AutocompleteOption[]): DataGridSearchConfig {
  return {
    enabled: true,

    fields: [
      { field: 'idTessera', label: 'Id Tessera', type: 'text', size: '3', operator: 'contains' },
      { field: 'codiceFiscale', label: 'Codice Fiscale', type: 'text', size: '3', operator: 'contains' },
      { field: 'nome', label: 'Nome', type: 'text', operator: 'contains', size: '3' },
      { field: 'cognome', label: 'Cognome', type: 'text', operator: 'contains', size: '3' },
      { field: 'sede', label: 'Sede Tessera', type: 'autocomplete', size: '4', operator: 'in', options: sediList, multiple: true },
      {
        field: 'codTipoTessera',
        label: 'Codice Tipo Tessera',
        type: 'select',
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
      },
      {
        field: 'soloNonAssegnate', label: 'Solo non Assegnate', type: 'checkbox', operator: 'equals', size: '3'
      }
      // { field: 'dataIndisponibilità', label: 'Data Indisponibilità', type: 'date', size: '3' },
      // { field: 'dataOraInizioAssegnazione', label: 'Inizio Assegnazione', type: 'date', size: '3' },
      // { field: 'dataOraFineAssegnazione', label: 'Fine Assegnazione', type: 'date', size: '3' },

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

export const TESSERE_PERSIST_CONFIG = {
  enabled: true,
  storageKey: 'tessere-grid',
};

export const TESSERE_URL_STATE_CONFIG = {
  enabled: true,
};

export function createGridToolbar(
  openModalAggiungi: () => void,
  exportCsv: () => void,
  importCsv: () => void,
  bulkPrint: (rows: Tessera[]) => void
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
        label: 'Export CSV',
        icon: cilCloudDownload,
        color: 'primary',
        action: exportCsv,
        disabled: () => true
      },
      {
        label: 'Import CSV',
        icon: cilCloudUpload,
        color: 'primary',
        action: importCsv,
        disabled: () => true
      },
      {
        label: 'Stampa Tessere',
        icon: cilPrint,
        color: 'info',
        disabled: (ctx) => ctx.selectedRows.length === 0,
        action: (ctx) => {
          bulkPrint(ctx.selectedRows);
        },
      }
      // {
      //   label: 'Delete Selected',
      //   icon: cilPlus,
      //   color: 'danger',
      //   visible: () => {
      //     return true;
      //   },
      //   disabled: () => {
      //     return this.loading.isLoading;
      //   },
      //   action: () => {
      //     this.importCsv();
      //   },
      // },
    ],
  };
}

export function createGridColumn(actionTemplate: TemplateRef<any>,statusTemplate: TemplateRef<any>): DataGridColumn<Tessera>[] {
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
      field: 'status',
      header: '',
      template: statusTemplate,
    },
    {
      field: 'actions',
      header: '',
      template: actionTemplate,
    }
  ];
}

export const TESSERE_MOCK: Tessere = [
  {
    idTessera: "0000090801",
    codTipoTessera: "D",
    sede: "RO",
    dataOraIndisponibilita: "10/11/1994 23:59:59",
    nome: "Luca",
    cognome: "Cropoli",
    codiceFiscale: "CRPLCU00L19A783Q",
    codiceInterno: "0005121205",
    dataOraInizioAssegnazione: "19/06/2024 06:00:00",
    dataOraFineAssegnazione: "31/12/9999 23:59:59",
  },
  {
    idTessera: "0000090802",
    codTipoTessera: "D",
    sede: "001",
    dataOraIndisponibilita: "10/11/1994 23:59:59",
    nome: "Pluto",
    cognome: "ABC",
    codiceFiscale: "ABCD",
    codiceInterno: "ABCD",
    dataOraInizioAssegnazione: "10/11/1994",
    dataOraFineAssegnazione: "31/12/9999 23:59:59",
  },
  {
    idTessera: "0000090803",
    codTipoTessera: "D",
    sede: "001",
    dataOraIndisponibilita: "10/11/1994 23:59:59",
    nome: "Pluto",
    cognome: "ABC",
    codiceFiscale: "ABCD",
    codiceInterno: "ABCD",
    dataOraInizioAssegnazione: "10/11/1994",
    dataOraFineAssegnazione: "31/12/9999 23:59:59",
  },
  {
    idTessera: "0000090804",
    codTipoTessera: "",
    sede: "",
    dataOraIndisponibilita: "10/11/1994 23:59:59",
    nome: "",
    cognome: "",
    codiceFiscale: "",
    codiceInterno: "ABCD",
    dataOraInizioAssegnazione: "",
    dataOraFineAssegnazione: "",
  },
  {
    idTessera: "0000090805",
    codTipoTessera: "",
    sede: "",
    dataOraIndisponibilita: "10/11/1994 23:59:59",
    nome: "",
    cognome: "",
    codiceFiscale: "",
    codiceInterno: "ABCD",
    dataOraInizioAssegnazione: "",
    dataOraFineAssegnazione: "",
  },
  {
    idTessera: "0000090806",
    codTipoTessera: "",
    sede: "",
    dataOraIndisponibilita: "10/11/1994 23:59:59",
    nome: "",
    cognome: "",
    codiceFiscale: "",
    codiceInterno: "ABCD",
    dataOraInizioAssegnazione: "",
    dataOraFineAssegnazione: "",
  },
];
