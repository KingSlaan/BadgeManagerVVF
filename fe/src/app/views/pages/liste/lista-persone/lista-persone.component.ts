import { AfterViewInit, Component, inject, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { DataGridColumn, DataGridLoadingConfig, DataGridPageEvent, DataGridState, DataGridSearchConfig, DataGridSortingConfig, DataGridContextMenuConfig, DataGridToolbarConfig } from '../../../../../interfaces/datagrid';
import { DataGridComponent } from '../../../../../components/data-grid/data-grid.component';
import { Persona, Persone } from 'src/interfaces/persone';
import { DATAGRID_CONSTANTS_NO_PAGINATION } from 'src/constants/datagrid.constants';
import { createGridColumn, createGridToolbar, createSearchConfig, PERSONE_SELECTION_SUMMARY_CONFIG, PERSONE_URL_STATE_CONFIG } from '../lista-persone/lista-persone.datagrid';
import { PersoneService } from 'src/app/services/persone.service';
import { buildDataGridState, buildUrlQueryParamsFromState } from '@docs-components/data-grid/data-grid-utils';
import { ActivatedRoute, Router } from '@angular/router';
import { SediService } from 'src/app/services/sedi.service';
import { Sedi } from 'src/interfaces/sedi';
import { cilOptions, cilPrint } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { BadgeModule, ButtonDirective, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective, ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';
import { TesseraStampaComponent } from '@docs-components/modals/tessera-stampa/tessera-stampa.component';
import { TessereService } from 'src/app/services/tessere.service';

@Component({
  selector: 'app-lista-persone',
  imports: [
    ButtonDirective,
    DataGridComponent,
    IconDirective,
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    TesseraStampaComponent,
    ListGroupDirective,
    ListGroupItemDirective,
    BadgeModule,
  ],
  templateUrl: './lista-persone.component.html',
  styleUrl: './lista-persone.component.scss',
})
export class ListaPersoneComponent implements OnInit, AfterViewInit {

  @ViewChild('actionTemplate', {
    static: true,
  })
  actionTemplate!: TemplateRef<any>;

  @ViewChild('contextActionTemplate', {
    static: true,
  })
  contextActionTemplate!: TemplateRef<any>;

  @ViewChild('selectedBadge', {
    static: true
  })
  selectedBadge!: TemplateRef<any>;

  private personeService = inject(PersoneService);
  private sediService = inject(SediService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  icons = { cilPrint, cilOptions };

  mode = 'single';
  isModalStampaOpen = false;

  searchReady = signal(false);
  datagridLoading = signal(false);

  searchConfig: DataGridSearchConfig = {
    enabled: true,
    fields: [],
  };

  selectionConfig = {
    enabled: true,
    mode: 'multiple',
    rowKey: 'codFiscale',
  } as const;

  paginationConfig = DATAGRID_CONSTANTS_NO_PAGINATION;
  persone = signal<Persone>([]);
  sedi = signal<Sedi>([]);
  personeToPrint = signal<Persona[]>([]);
  selectedPersone = signal<Persona[]>([]);

  contextMenuConfig!: DataGridContextMenuConfig<any>;

  toolbarConfig: DataGridToolbarConfig = createGridToolbar(
    (rows) => this.openModalStampaUpdate(rows, 'multi'),
  )

  initialGridState: DataGridState | null = null;

  gridState = signal<DataGridState>({
    filters: [],
    sorting: null,
    pagination: {
      page: 1,
      pageSize: this.paginationConfig.pageSize,
    },
  });

  columns: DataGridColumn<Persona>[] = [];

  urlStateConfig = PERSONE_URL_STATE_CONFIG;

  selectionSummaryConfig = {
    ...PERSONE_SELECTION_SUMMARY_CONFIG,
    template: this.selectedBadge,
  };

  onSelectionChange(event: { selectedRows: Persona[] }): void {
    this.selectedPersone.set(event.selectedRows);
  }

  actionsArray = [
    {
      name: "stampa-tessera",
      do: (row: any) => {
        this.openModalStampaUpdate([row], 'single')
      },
      color: "text-secondary",
      icon: this.icons.cilPrint,
      title: "Stampa Tessera",
      visibility: (row: any) => true
    }
  ];

  ngOnInit(): void {
    this.getSedi();
  }

  ngAfterViewInit() {

    this.contextMenuConfig = {
      enabled: true,
      template: this.contextActionTemplate,
    };

    this.selectionSummaryConfig = {
      ...PERSONE_SELECTION_SUMMARY_CONFIG,
      template: this.selectedBadge,
    };
  }

  getSedi() {
    this.sediService.getSediList().subscribe({
      next: (data: any) => {
        const options = data.data.map((sede: any) => ({
          label: sede.descrizione,
          value: sede.codSede
        }));

        this.sedi.set([...(options ?? [])]);
        this.searchConfig = createSearchConfig(options);
        this.columns = createGridColumn(this.actionTemplate, options);

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

  loadData(state: DataGridState) {
    this.datagridLoading.set(true);
    this.gridState.set(state);

    this.updateUrlFromState(state);

    this.personeService.getAnagrafiche(state).subscribe({
      next: (data: any) => {
        this.persone.set([...(data.data ?? [])]);

        this.paginationConfig = {
          ...this.paginationConfig,
          pageSize: 100,
          totalItems: data.data.length,
        };


        this.datagridLoading.set(false);
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
        this.datagridLoading.set(false);
      },
    });
  }

  onPageChange(event: DataGridPageEvent) {
    this.paginationConfig = {
      ...this.paginationConfig,
      page: event.page,
      pageSize: event.pageSize,
    };
  }

  openModalStampaUpdate(rows: Persona[], mode: 'single' | 'multi') {
    this.mode = mode

    this.isModalStampaOpen = true;
    this.personeToPrint.set(rows);
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
