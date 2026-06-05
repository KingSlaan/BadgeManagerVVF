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
import { cilCloudDownload, cilCloudUpload, cilPlus } from '@coreui/icons';

export const TESSERE_SEARCH_CONFIG: DataGridSearchConfig = {
  enabled: true,

  fields: [
    { field: 'idTessera', label: 'Id Tessera', type: 'text', size: '3' },
    { field: 'codiceFiscale', label: 'Codice Fiscale', type: 'text', size: '3', operator:'contains' },
    { field: 'nome', label: 'Nome', type: 'text', operator:'contains' },
    { field: 'cognome', label: 'Cognome', type: 'text', operator:'contains' },
    { field: 'sede', label: 'Sede', type: 'text', size: '2', operator:'contains' },
    {
      field: 'status',
      label: 'Status',
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
};

export const TESSERE_SORTING_CONFIG: DataGridSortingConfig = {
  enabled: true,
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

export function createGridToolbar(
  openModalAggiungi: () => void,
  exportCsv: () => void,
  importCsv: () => void
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
      },
      {
        label: 'Import CSV',
        icon: cilCloudUpload,
        color: 'primary',
        action: importCsv
      },
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

export function createGridColumn(actionTemplate: TemplateRef<any>): DataGridColumn<Tessera>[] {
  return [
    {
      field: 'idTessera',
      header: 'ID',
      width: '80px',
      sortable: true,
    },
    {
      field: 'codTipoTessera',
      header: 'Tipo',
      render: (row: any) => row.codTipoTessera === "D" ? "Dipendente" : "Sostitutiva"
    },
    {
      field: 'sede',
      header: 'Sede',
    },
    {
      field: 'persona',
      header: 'Persona',
      render: (row: any) =>
        `${row.cognome} ${row.nome} <br/> <small> <strong>${row.codiceFiscale} </strong></small>`,
    },
    // {
    //   field: 'codiceFiscale',
    //   header: 'CF',
    // },
    {
      field: 'codiceInterno',
      header: 'Codice Interno',
      render: (row: any) =>
        `${row.codiceInterno}`,
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
      field: 'actions',
      header: 'Azioni',
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
