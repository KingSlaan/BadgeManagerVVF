import { DATAGRID_CONSTANTS } from './../../../../constants/datagrid.constants';
import { Component, inject, OnInit, AfterViewInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ListGroupDirective,
  ListGroupItemDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilPlus, cilDelete, cilPencil, cilSearch, cilActionUndo, cilHistory, cilBan, cilOptions, cilBuilding, cilPrint } from '@coreui/icons';
import { DataGridColumn, DataGridContextMenuConfig, DataGridFilter, DataGridLoadingConfig, DataGridPageEvent, DataGridRequest, DataGridSearchConfig, DataGridSortingConfig, DataGridToolbarConfig } from '../../../../interfaces/datagrid';
import { TesseraAggiungiComponent } from './../../../../components/modals/tessera-aggiungi/tessera-aggiungi.component';
import { TesseraModalCmpComponent } from './../../../../components/modals/tessera-modal-cmp/tessera-modal-cmp.component';
import { TesseraHistoryComponent } from './../../../../components/modals/tessera-history/tessera-history/tessera-history.component';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { Tessera, tesseraEmpty, Tessere } from '../../../../interfaces/tessere';
import { ACTION_CONSTANTS } from '../../../../constants/action.constants';
import { createGridColumn, createGridToolbar, TESSERE_EMPTY_STATE_CONFIG, TESSERE_LOADING_STATE_CONFIG, TESSERE_PERSIST_CONFIG, createTesseraSearchConfig, TESSERE_URL_STATE_CONFIG, TESSERE_SELECTION_SUMMARY_CONFIG, TESSERE_SORTING_CONFIG } from './lista-tessere.datagrid';
import { TessereService } from '../../../services/tessere.service';
import { UtilsService } from '../../../services/utils.service';
import { Sedi } from './../../../../interfaces/sedi';
import { SediService } from '../../../services/sedi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { buildDataGridRequestFromState } from '../../../../components/data-grid/data-grid-utils';

@Component({
  selector: 'app-lista-tessere',
  imports: [
    ButtonDirective,
    IconDirective,
    ReactiveFormsModule,
    TesseraModalCmpComponent,
    TesseraAggiungiComponent,
    DataGridComponent,
    TesseraHistoryComponent,
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    ListGroupDirective,
    ListGroupItemDirective
  ],
  templateUrl: './lista-tessere.component.html',
  styleUrl: './lista-tessere.component.scss',
  standalone: true
})
export class ListaTessereComponent implements OnInit, AfterViewInit {

  private tessereService = inject(TessereService);
  private sediService = inject(SediService);
  public utilsService = inject(UtilsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  icons = { cilPrint, cilBan, cilPlus, cilDelete, cilPencil, cilActionUndo, cilSearch, cilHistory, cilOptions, cilBuilding };

  isModalOpen = false;
  isModalAggiungiOpen = false;
  isModalHistoryOpen = false;
  mode = ACTION_CONSTANTS.ADD;
  datagridLoading = signal(false);
  action_const = ACTION_CONSTANTS;

  searchReady = signal(false);

  today: Date = new Date();

  @ViewChild('actionTemplate', {
    static: true,
  })
  actionTemplate!: TemplateRef<any>;

  @ViewChild('contextActionTemplate', {
    static: true,
  })
  contextActionTemplate!: TemplateRef<any>;

  searchConfig: DataGridSearchConfig = {
    enabled: true,
    fields: [],
  };

  paginationConfig = DATAGRID_CONSTANTS;

  columns: DataGridColumn<Tessera>[] = [];

  contextMenuConfig!: DataGridContextMenuConfig<any>;

  toolbarConfig: DataGridToolbarConfig = createGridToolbar(
    () => this.openModalAggiungi(),
    () => this.exportCsv(),
    () => this.importCsv(),
    (rows) => this.bulkPrint(rows)
  )

  loadingConfig: DataGridLoadingConfig = TESSERE_LOADING_STATE_CONFIG;

  emptyStateConfig = TESSERE_EMPTY_STATE_CONFIG;

  sortingConfig = TESSERE_SORTING_CONFIG;

  persistConfig = TESSERE_PERSIST_CONFIG;

  tessere = signal<Tessere>([]);
  sedi = signal<Sedi>([]);

  tesseraSelected = signal<Tessera>(tesseraEmpty);
  tesseraHistory = signal<any>([]);

  initialRequest: DataGridRequest = {
    filters: [],
    pagination: {
      page: 1,
      pageSize: this.paginationConfig.pageSize,
    },
    sorting: this.sortingConfig?.defaultSorting ?? null,
  };

  requestSearch = signal(this.initialRequest);

  selectionConfig = {
    enabled: true,
    mode: 'multiple',
    rowKey: 'idTessera',
  } as const;

  urlStateConfig = TESSERE_URL_STATE_CONFIG;

  selectionSummaryConfig = TESSERE_SELECTION_SUMMARY_CONFIG;

  selectedTessere = signal<Tessera[]>([]);

  onSelectionChange(event: { selectedRows: Tessera[] }): void {
    this.selectedTessere.set(event.selectedRows);
  }

  bulkPrint(rows: Tessera[]): void {
    this.tessereService.stampaTessere(rows, 'WORD').subscribe({
      next: response => {
        const blob = response.body!;

        let fileName = 'DocumentoRisposta.docx';

        const disposition = response.headers.get('Content-Disposition');
        if (disposition) {
          const match = disposition.match(/filename="?([^"]+)"?/);
          if (match) {
            fileName = match[1];
          }
        }

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        window.URL.revokeObjectURL(url);
      }
    });
  }

  actionsArray = [
    {
      name: "assegna-dipendente",
      do: (row: any) => {
        this.openModal(this.action_const.ASSIGN, row.idTessera)
      },
      color: "text-info",
      icon: this.icons.cilActionUndo,
      title: "Assegna Dipendente",
      visibility: () => true
    },
    {
      name: "cambia-sede",
      do: (row: any) => {
        this.openModal(this.action_const.ASSIGN_SEDE, row.idTessera)
      },
      color: "text-info",
      icon: this.icons.cilBuilding,
      title: "Cambia Sede",
      visibility: () => true
    },
    {
      name: "cambia-validità",
      do: (row: any) => {
        this.openModal(this.action_const.DISABLED, row.idTessera)
      },
      color: "text-danger",
      icon: this.icons.cilBan,
      title: "Cambia Validità",
      visibility: () => true
    },
    {
      name: "disuso",
      do: (row: any) => {
        this.openModal(this.action_const.REMOVE, row.idTessera)
      },
      color: "text-danger",
      icon: this.icons.cilDelete,
      title: "Disuso",
      visibility: (row: any) => !!row.codiceFiscale
    },
    {
      name: "cronologia",
      do: (row: any) => {
        this.openHistoryModal(row.idTessera)
      },
      color: "text-secondary",
      icon: this.icons.cilHistory,
      title: "Cronologia",
      visibility: () => true
    },
    {
      name: "stampa-tessera",
      do: (row: any) => {
        this.bulkPrint([row])
      },
      color: "text-secondary",
      icon: this.icons.cilPrint,
      title: "Stampa Tessera",
      visibility: (row: any) => !!row.codiceFiscale
    },
  ];

  exportCsv() {
    return console.log("exportCsv")
  }
  importCsv() {
    return console.log("importCsv")
  }

  ngOnInit(): void {
    // this.loadData(this.getInitialRequest());
    this.getSedi();
  }

  getSedi() {
    this.sediService.getSediList().subscribe({
      next: (data: any) => {
        const options = data.data.map((sede: any) => ({
          label: sede.descrizione,
          value: sede.codSede
        }));
        this.sedi.set([...(options ?? [])]);

        this.searchConfig = createTesseraSearchConfig(options);

        this.searchReady.set(true);
        this.loadData(this.getInitialRequest());
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
      },
    });
  }

  debug(row: any) {
    console.log("FINE ASSEGNAZIUONE", this.utilsService.parseItalianDate(row.dataOraFineAssegnazione))
    console.log("TODAY", this.today)
  }

  ngAfterViewInit() {
    this.columns = createGridColumn(this.actionTemplate);
    this.contextMenuConfig = {
      enabled: true,
      template: this.contextActionTemplate,
    };
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

  refresh() {
    this.loadData(this.requestSearch())
  }

  loadData(request: DataGridRequest) {
    this.datagridLoading.set(true);
    this.requestSearch.set(request);

    this.updateUrlFromRequest(request);

    this.tessereService.getTessere(request).subscribe({
      next: (data: any) => {
        this.tessere.set([...(data.data ?? [])]);

        this.paginationConfig = {
          ...this.paginationConfig,
          ...data.pagination,
        };

        this.datagridLoading.set(false);
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
        this.datagridLoading.set(false);
      },
    });
  }

  openModal(mode: string, idTessera: string) {
    this.tessereService.getTesseraById(idTessera).subscribe({
      next: (data: any) => {
        this.isModalOpen = true;
        this.mode = mode

        this.tesseraSelected.set(data.data ?? tesseraEmpty);
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
      },
    });

  }

  openModalAggiungi() {
    this.isModalAggiungiOpen = true;
  }

  openHistoryModal(idTessera: string) {
    this.tessereService.getTessereHistory(idTessera).subscribe({
      next: (data: any) => {
        this.isModalHistoryOpen = true;

        this.tesseraHistory.set(data.data ?? []);
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
      },
    });

  }

  onTesseraModalVisibleChange(visible: boolean): void {
    this.isModalOpen = visible;

    if (!visible) {
      this.loadData(this.initialRequest);
    }
  }

  private getInitialRequest(): DataGridRequest {
    return buildDataGridRequestFromState(
      this.searchConfig,
      this.initialRequest,
      this.persistConfig.storageKey,
      this.route.snapshot.queryParamMap
    );
  }

  private updateUrlFromRequest(request: DataGridRequest): void {
    if (!this.urlStateConfig.enabled) {
      return;
    }

    const queryParams: Record<string, any> = {};

    this.searchConfig.fields.forEach(field => {
      const filter = request.filters.find(
        f => f.field === field.field
      );

      if (!filter) {
        return;
      }

      const value = filter.value;

      if (Array.isArray(value)) {
        if (value.length) {
          queryParams[field.field] = value.join(',');
        }

        return;
      }

      if (field.type === 'checkbox') {
        queryParams[field.field] =
          value ? true : null;

        return;
      }

      if (value !== null && value !== undefined && value !== '') {
        queryParams[field.field] = value;
      }
    });

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true,
    });
  }

}
