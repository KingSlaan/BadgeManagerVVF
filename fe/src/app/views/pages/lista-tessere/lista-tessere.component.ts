import { DATAGRID_CONSTANTS } from './../../../../constants/datagrid.constants';
import { Component, inject, OnInit, AfterViewInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilPlus, cilDelete, cilPencil, cilSearch, cilActionUndo, cilCloudUpload, cilCloudDownload, cilHistory, cilInbox, cilBan, cilOptions } from '@coreui/icons';
import { DataGridColumn, DataGridLoadingConfig, DataGridPageEvent, DataGridRequest, DataGridSearchConfig, DataGridSortingConfig, DataGridToolbarConfig } from '../../../../interfaces/datagrid';
import { TesseraAggiungiComponent } from './../../../../components/modals/tessera-aggiungi/tessera-aggiungi.component';
import { TesseraModalCmpComponent } from './../../../../components/modals/tessera-modal-cmp/tessera-modal-cmp.component';
import { TesseraHistoryComponent } from './../../../../components/modals/tessera-history/tessera-history/tessera-history.component';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { Tessera, tesseraEmpty, Tessere } from '../../../../interfaces/tessere';
import { ACTION_CONSTANTS } from '../../../../constants/action.constants';
import { createGridColumn, createGridToolbar, TESSERE_EMPTY_STATE_CONFIG, TESSERE_LOADING_STATE_CONFIG, TESSERE_MOCK, TESSERE_PERSIST_CONFIG, TESSERE_SEARCH_CONFIG } from './lista-tessere.datagrid';
import { TessereService } from '../../../services/tessere.service';
import { UtilsService } from '../../../services/utils.service';
import { Sedi } from 'src/interfaces/sedi';
import { SediService } from 'src/app/services/sedi.service';

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
  standalone: true
})
export class ListaTessereComponent implements OnInit, AfterViewInit {

  private tessereService = inject(TessereService);
  private sediService = inject(SediService);
  public utilsService = inject(UtilsService);

  icons = { cilBan, cilPlus, cilDelete, cilPencil, cilActionUndo, cilSearch, cilHistory, cilOptions };

  isModalOpen = false;
  isModalAggiungiOpen = false;
  isModalHistoryOpen = false;
  mode = ACTION_CONSTANTS.ADD;
  datagridLoading = signal(false);

  today: Date = new Date();

  @ViewChild('actionTemplate', {
    static: true,
  })
  actionTemplate!: TemplateRef<any>;

  searchConfig: DataGridSearchConfig = TESSERE_SEARCH_CONFIG;

  paginationConfig = DATAGRID_CONSTANTS;

  columns: DataGridColumn<Tessera>[] = [];

  toolbarConfig: DataGridToolbarConfig = createGridToolbar(
    () => this.openModalAggiungi(),
    () => this.exportCsv(),
    () => this.importCsv()
  )

  loadingConfig: DataGridLoadingConfig = TESSERE_LOADING_STATE_CONFIG;

  emptyStateConfig = TESSERE_EMPTY_STATE_CONFIG;

  sortingConfig: DataGridSortingConfig = {
    enabled: true,
    defaultSorting: {
      field: 'idTessera',
      direction: 'desc',
    },
  };

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

  exportCsv() {
    return console.log("exportCsv")
  }
  importCsv() {
    return console.log("importCsv")
  }

  ngOnInit(): void {
    this.loadData(this.initialRequest);
    this.getSedi();
  }

  getSedi() {
    this.sediService.getSediList().subscribe({
      next: (data: any) => {
        this.sedi.set([...(data.data ?? [])])
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
    this.columns = createGridColumn(this.actionTemplate)
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

}
