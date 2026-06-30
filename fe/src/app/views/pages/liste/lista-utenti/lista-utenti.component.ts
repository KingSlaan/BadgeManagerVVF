import { Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { UtentiService } from 'src/app/services/utenti.service';
import { DataGridColumn, DataGridPageEvent, DataGridState, DataGridSearchConfig, DataGridSortingConfig } from 'src/interfaces/datagrid';
import {
  createGridColumn, createSearchConfig,
  UTENTI_SORTING_CONFIG
} from './lista-utenti.datagrid';
import { DATAGRID_CONSTANTS_NO_PAGINATION } from 'src/constants/datagrid.constants';
import { Utente, Utenti } from 'src/interfaces/utenti';
import { DataGridComponent } from '@docs-components/data-grid/data-grid.component';
import { cilPencil } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ButtonDirective } from '@coreui/angular';
@Component({
  selector: 'app-lista-utenti',
  imports: [
    DataGridComponent,
    ButtonDirective,
    IconDirective,
  ],
  templateUrl: './lista-utenti.component.html',
  styleUrl: './lista-utenti.component.scss',
})
export class ListaUtentiComponent {

  private utentiService = inject(UtentiService);

  icons = { cilPencil };

  datagridLoading = signal(false);

  searchConfig: DataGridSearchConfig = createSearchConfig();

  paginationConfig = DATAGRID_CONSTANTS_NO_PAGINATION;
  sortingConfig: DataGridSortingConfig = UTENTI_SORTING_CONFIG;


  utenti = signal<Utenti>([]);

  initialGridState: DataGridState | null = null;

  gridState = signal<DataGridState>({
    filters: [],
    sorting: this.sortingConfig.defaultSorting ?? null,
    pagination: {
      page: 1,
      pageSize: this.paginationConfig.pageSize,
    },
  });

  @ViewChild('actionTemplate', {
    static: true,
  })
  actionTemplate!: TemplateRef<any>;

  columns = createGridColumn(this.actionTemplate);

  ngOnInit(): void {
    this.loadData(this.gridState());
  }

  loadData(request: DataGridState) {
    this.datagridLoading.set(true);

    // this.utentiService.getUtenti(request).subscribe({
    //   next: (data: any) => {
    //     this.utenti.set([...(data.data ?? [])]);

    //     this.paginationConfig = {
    //       ...this.paginationConfig,
    //       ...data.pagination,
    //     };

        this.datagridLoading.set(false);
    //   },
    //   error: (err: any) => {
    //     console.error('Error loading tessere', err);
    //     this.datagridLoading.set(false);
    //   },
    // });

  }

  onPageChange(event: DataGridPageEvent) {
    this.paginationConfig = {
      ...this.paginationConfig,
      page: event.page,
      pageSize: event.pageSize,
    };
  }
}
