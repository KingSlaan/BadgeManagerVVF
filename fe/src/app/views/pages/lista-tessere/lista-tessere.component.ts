import { DATAGRID_CONSTANTS } from './../../../../constants/datagrid.constants';
import { Component, inject, OnInit, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilPlus, cilDelete, cilPencil, cilSearch, cilActionUndo, cilCloudUpload, cilCloudDownload, cilHistory } from '@coreui/icons';
import { DataGridColumn, DataGridPageEvent, DataGridRequest, DataGridSearchConfig } from '../../../interfaces/datagrid';
import { TesseraAggiungiComponent } from './../../../../components/modals/tessera-aggiungi/tessera-aggiungi.component';
import { TesseraModalCmpComponent } from './../../../../components/modals/tessera-modal-cmp/tessera-modal-cmp.component';
import { TesseraHistoryComponent } from '@docs-components/modals/tessera-history/tessera-history/tessera-history.component';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { Tessera, Tessere } from '../../../interfaces/tessere';
import { LoadingService } from '../../../services/loading.service';
import { ACTION_CONSTANTS } from 'src/constants/action.constants';

@Component({
  selector: 'app-lista-tessere',
  imports: [
    ButtonDirective,
    IconDirective,
    ReactiveFormsModule,
    TesseraModalCmpComponent,
    TesseraAggiungiComponent,
    DataGridComponent,
    TesseraHistoryComponent
  ],
  templateUrl: './lista-tessere.component.html',
  styleUrl: './lista-tessere.component.scss',
})
export class ListaTessereComponent implements OnInit, AfterViewInit {

  private loading = inject(LoadingService);

  icons = { cilPlus, cilDelete, cilPencil, cilActionUndo, cilSearch, cilHistory };

  isModalOpen = false;
  isModalAggiungiOpen = false;
  isModalHistoryOpen = false;
  mode = ACTION_CONSTANTS.ADD;

  @ViewChild('actionTemplate', {
    static: true,
  })
  actionTemplate!: TemplateRef<any>;

  tessere: Tessere = [
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
      disuso: false
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
      disuso: false
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
      disuso: true
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
      disuso: false
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
      disuso: false
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
      disuso: false
    },
  ];

  searchConfig: DataGridSearchConfig = {
    enabled: true,

    fields: [
      { field: 'idTessera', label: 'Id Tessera', type: 'text', size:'3' },
      { field: 'codiceFiscale', label: 'Codice Fiscale', type: 'text', size:'3' },
      { field: 'nome', label: 'Nome', type: 'text' },
      { field: 'cognome', label: 'Cognome', type: 'text' },
      {
        field: 'status',
        label: 'Status',
        type: 'select',
        operator: 'equals',
        options: [
          {
            label: 'Active',
            value: 'ACTIVE',
          },
          {
            label: 'Inactive',
            value: 'INACTIVE',
          },
          {
            label: 'Pending',
            value: 'PENDING',
          },
        ],
      },
      { field: 'dataIndisponibilità', label: 'Data Indisponibilità', type: 'date', size:'3' },
      { field: 'dataOraInizioAssegnazione', label: 'Inizio Assegnazione', type: 'date', size:'3' },
      { field: 'dataOraFineAssegnazione', label: 'Fine Assegnazione', type: 'date', size:'3' },

    ]
  };

  paginationConfig = DATAGRID_CONSTANTS;

  columns: DataGridColumn<Tessera>[] = [];

  toolbarConfig = {
    enabled: true,
    actions: [
      {
        label: 'Aggiungi Tessere',
        icon: cilPlus,
        color: 'success',
        action: () => {
          this.openModalAggiungi();
        },
      },
      {
        label: 'Export CSV',
        icon: cilCloudDownload,
        color: 'primary',
        action: () => {
          this.exportCsv();
        },
      },
      {
        label: 'Import CSV',
        icon: cilCloudUpload,
        color: 'primary',
        action: () => {
          this.importCsv();
        },
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

  exportCsv() {
    return console.log("exportCsv")
  }
  importCsv() {
    return console.log("importCsv")
  }

  ngOnInit(): void {
    this.loading.show();

    setTimeout(() => {
      this.loading.hide();
    }, 1000)
  }

  ngAfterViewInit() {
    this.columns = [
      {
        field: 'idTessera',
        header: 'ID',
        width: '80px',
      },
      {
        field: 'codTipoTessera',
        header: 'Tipo',
      },
      {
        field: 'nominativo',
        header: 'Nominativo',
        render: (row: any) =>
          `${row.cognome} ${row.nome}`,
      },
      {
        field: 'codiceFiscale',
        header: 'CF',
      },
      {
        field: 'dataOraIndisponibilita',
        header: 'Data Indisponibilità',
      },
      {
        field: 'assegnazione',
        header: 'Assegnazione',
        render: (row: any) => `
          <small>
            <strong> Inizio: </strong>
            ${row.dataOraInizioAssegnazione} <br />
          </small>
          <small>
            <strong> Fine: </strong>
            ${row.dataOraFineAssegnazione}
          </small>
        `
      },
      {
        field: 'codiceInterno',
        header: 'Codice Interno',
        render: (row: any) =>
          `${row.codiceInterno}`,
      },

      {
        field: 'actions',
        header: 'Actions',
        template: this.actionTemplate,
      }
    ];
  }

  onPageChange(event: DataGridPageEvent) {
    this.paginationConfig = {
      ...this.paginationConfig,
      page: event.page,
      pageSize: event.pageSize,
    };
  }

  editUser(row: Tessera) {
    console.log("AW", row);
  }

  loadData(request: DataGridRequest) {

    console.log("SEARCH", request);
    // this.apiService
    //   .search(request)
    //   .subscribe(res => {

    //     this.rows = res.items;

    //     this.paginationConfig = {
    //       ...this.paginationConfig,

    //       totalItems: res.totalItems,
    //     };

    //     this.loading = false;
    //   });
  }

  openModal(mode: string) {
    this.isModalOpen = true;
    this.mode = mode
  }

  openModalAggiungi() {
    this.isModalAggiungiOpen = true;
  }

  openHistoryModal() {
    this.isModalHistoryOpen = true;
  }

}
