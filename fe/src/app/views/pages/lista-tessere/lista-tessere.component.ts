import { TESSERE_STATUS_COLORS, TESSERE_STATUS_MESSAGES } from './../../../../constants/tessere-status.constants';
import { DATAGRID_CONSTANTS } from './../../../../constants/datagrid.constants';
import { Component, inject, OnInit, AfterViewInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BadgeModule,
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  TooltipDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilPlus, cilDelete, cilPencil, cilSearch, cilActionUndo, cilHistory, cilBan, cilOptions, cilBuilding, cilPrint, cilAvTimer } from '@coreui/icons';
import { DataGridColumn, DataGridContextMenuConfig, DataGridLoadingConfig, DataGridPageEvent, DataGridSearchConfig, DataGridSortingConfig, DataGridState, DataGridToolbarConfig } from '../../../../interfaces/datagrid';
import { TesseraAggiungiComponent } from './../../../../components/modals/tessera-aggiungi/tessera-aggiungi.component';
import { TesseraModalCmpComponent } from './../../../../components/modals/tessera-modal-cmp/tessera-modal-cmp.component';
import { TesseraHistoryComponent } from '../../../../components/modals/tessera-history/tessera-history.component';
import { TesseraUpdateMultiploComponent } from './../../../../components/modals/tessera-update-multiplo/tessera-update-multiplo.component';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { Tessera, tesseraEmpty, Tessere } from '../../../../interfaces/tessere';
import { ACTION_CONSTANTS } from '../../../../constants/action.constants';
import { createGridColumn, createGridToolbar, TESSERE_EMPTY_STATE_CONFIG, TESSERE_LOADING_STATE_CONFIG, createTesseraSearchConfig, TESSERE_URL_STATE_CONFIG, TESSERE_SELECTION_SUMMARY_CONFIG, TESSERE_SORTING_CONFIG } from './lista-tessere.datagrid';
import { TessereService } from '../../../services/tessere.service';
import { UtilsService } from '../../../services/utils.service';
import { Sedi } from './../../../../interfaces/sedi';
import { SediService } from '../../../services/sedi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { buildDataGridState, buildUrlQueryParamsFromState } from '../../../../components/data-grid/data-grid-utils';
import { ToastService } from 'src/app/services/toast.service';
import { TesseraStampaComponent } from '@docs-components/modals/tessera-stampa/tessera-stampa.component';

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
    ListGroupItemDirective,
    TooltipDirective,
    BadgeModule,
    TesseraUpdateMultiploComponent,
    TesseraStampaComponent,
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

  icons = { cilPrint, cilBan, cilPlus, cilDelete, cilPencil, cilActionUndo, cilSearch, cilHistory, cilOptions, cilBuilding, cilAvTimer };

  isModalOpen = false;
  isModalAggiungiOpen = false;
  isModalMulUpdOpen = false;
  isModalStampaOpen = false;
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

  @ViewChild('statusTemplate', {
    static: true,
  })
  statusTemplate!: TemplateRef<any>;

  @ViewChild('selectedBadge', {
    static: true
  })
  selectedBadge!: TemplateRef<any>;

  searchConfig: DataGridSearchConfig = {
    enabled: true,
    fields: [],
  };

  paginationConfig = DATAGRID_CONSTANTS;

  columns: DataGridColumn<Tessera>[] = [];

  contextMenuConfig!: DataGridContextMenuConfig<any>;

  toolbarConfig: DataGridToolbarConfig = createGridToolbar(
    () => this.openModalAggiungi(),
    () => this.importCsv(),
    (rows) => this.openModalStampaUpdate(rows, 'multi'),
    (mode) => this.openBulkUpdate(mode),
  )

  loadingConfig: DataGridLoadingConfig = TESSERE_LOADING_STATE_CONFIG;

  emptyStateConfig = TESSERE_EMPTY_STATE_CONFIG;

  sortingConfig = TESSERE_SORTING_CONFIG;

  tessere = signal<Tessere>([]);
  sedi = signal<Sedi>([]);

  tessereToPrint = signal<Tessera[]>([]);
  tesseraSelected = signal<Tessera>(tesseraEmpty);
  tesseraHistory = signal<any>([]);

  initialGridState: DataGridState | null = null;

  gridState = signal<DataGridState>({
    filters: [],
    sorting: this.sortingConfig.defaultSorting ?? null,
    pagination: {
      page: 1,
      pageSize: this.paginationConfig.pageSize,
    },
  });

  selectionConfig = {
    enabled: true,
    mode: 'multiple',
    rowKey: 'idTessera',
  } as const;

  urlStateConfig = TESSERE_URL_STATE_CONFIG;

  selectionSummaryConfig = {
    ...TESSERE_SELECTION_SUMMARY_CONFIG,
    template: this.selectedBadge,
  };

  selectedTessere = signal<Tessera[]>([]);

  onSelectionChange(event: { selectedRows: Tessera[] }): void {
    this.selectedTessere.set(event.selectedRows);
  }

  openBulkUpdate(mode:string): void {
    this.openModalMultiUpdate(mode);
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
      visibility: (row: Tessera) => row.stato == TESSERE_STATUS_MESSAGES.LIBERA
    },
    {
      name: "cambia-sede",
      do: (row: any) => {
        this.openModal(this.action_const.ASSIGN_SEDE, row.idTessera)
      },
      color: "text-info",
      icon: this.icons.cilBuilding,
      title: "Cambia Sede",
      visibility: (row: Tessera) => row.stato !== TESSERE_STATUS_MESSAGES.INDISPONIBILE
    },
    {
      name: "cambia-validità",
      do: (row: any) => {
        this.openModal(this.action_const.REMOVE, row.idTessera)
      },
      color: "text-warning",
      icon: this.icons.cilAvTimer,
      title: "Cambia Validità",
      visibility: (row: any) => row.stato == TESSERE_STATUS_MESSAGES.OCCUPATA
    },
    {
      name: "disuso",
      do: (row: any) => {
        this.openModal(this.action_const.DISABLED, row.idTessera)
      },
      color: "text-danger",
      icon: this.icons.cilBan,
      title: "Indisponibilità",
      visibility: () => true
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
        this.openModalStampaUpdate([row], 'single')
      },
      color: "text-secondary",
      icon: this.icons.cilPrint,
      title: "Stampa Tessera",
      visibility: (row: any) => row.stato == TESSERE_STATUS_MESSAGES.OCCUPATA
    },
  ];

  exportCsv() {
    return console.log("exportCsv")
  }
  importCsv() {
    return console.log("importCsv")
  }

  ngOnInit(): void {
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
        const initialState = this.getInitialState();

        this.initialGridState = initialState;
        this.gridState.set(initialState);
        this.searchReady.set(true);

        this.loadData(initialState);
      },
      error: (err: any) => {
        console.error('Error loading sedi', err);
      },
    });
  }

  debug(row: any) {
    console.log("FINE ASSEGNAZIUONE", this.utilsService.parseItalianDate(row.dataOraFineAssegnazione))
    console.log("TODAY", this.today)
  }

  ngAfterViewInit() {
    this.columns = createGridColumn(this.actionTemplate, this.statusTemplate);
    this.contextMenuConfig = {
      enabled: true,
      template: this.contextActionTemplate,
    };

    this.selectionSummaryConfig = {
      ...TESSERE_SELECTION_SUMMARY_CONFIG,
      template: this.selectedBadge,
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
    this.loadData(this.gridState())
  }

  loadData(state: DataGridState) {
    this.datagridLoading.set(true);
    this.gridState.set(state);

    this.updateUrlFromState(state);

    this.tessereService.getTessere(state).subscribe({
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

  openModalMultiUpdate(mode:string) {
    this.mode = mode;
    this.isModalMulUpdOpen = true;
  }

  openModalStampaUpdate(rows: Tessera[], mode: 'single' | 'multi') {
    this.mode = mode

    if (mode === 'single') {
      this.tessereService.getTesseraById(rows[0].idTessera).subscribe({
        next: (data: any) => {
          this.isModalStampaOpen = true;

          this.tessereToPrint.set([data.data]);
        },
        error: (err: any) => {
          console.error('Error loading tessere', err);
        },
      });
    } else {
      this.tessereToPrint.set(this.selectedTessere())
      this.isModalStampaOpen = true;
    }
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
      this.loadData(this.gridState());
    }
  }

  private getInitialState(): DataGridState {
    return buildDataGridState(
      this.searchConfig,
      this.gridState(),
      this.route.snapshot.queryParamMap
    );
  }

  private updateUrlFromState(request: DataGridState): void {
    if (!this.urlStateConfig.enabled) {
      return;
    }

    const queryParams = buildUrlQueryParamsFromState(
      this.searchConfig,
      request
    );

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true,
    });
  }

}
