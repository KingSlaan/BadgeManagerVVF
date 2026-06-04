import { SediService } from './../../../services/sedi.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DataGridColumn, DataGridLoadingConfig, DataGridPageEvent, DataGridRequest, DataGridSearchConfig, DataGridSortingConfig } from '../../../../interfaces/datagrid';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { DATAGRID_CONSTANTS, DATAGRID_CONSTANTS_NO_PAGINATION } from '../../../../constants/datagrid.constants';
import { createGridColumn, createSearchConfig, SEDI_MOCK, SEDI_PERSIST_CONFIG, SEDI_SORTING_CONFIG } from './lista-sedi.datagrid';
import { Sede, Sedi } from 'src/interfaces/sedi';

@Component({
  selector: 'app-lista-sedi',
  imports: [
    DataGridComponent
  ],
  templateUrl: './lista-sedi.component.html',
  styleUrl: './lista-sedi.component.scss',
})
export class ListaSediComponent implements OnInit {

  private sediService = inject(SediService);

  datagridLoading = signal(false);

  searchConfig: DataGridSearchConfig = createSearchConfig();
  paginationConfig = DATAGRID_CONSTANTS_NO_PAGINATION;
  sortingConfig: DataGridSortingConfig = SEDI_SORTING_CONFIG;
  persistConfig = SEDI_PERSIST_CONFIG;
  sedi = signal<Sedi>([]);

  initialRequest: DataGridRequest = {
    filters: [],
    pagination: {
      page: 1,
      pageSize: this.paginationConfig.pageSize,
    },
    sorting: this.sortingConfig?.defaultSorting ?? null,
  };

  columns: DataGridColumn<Sede>[] = [];

  ngOnInit(): void {
    this.loadData(this.initialRequest);
  }

  ngAfterViewInit() {
    this.columns = createGridColumn();
  }

  loadData(request: DataGridRequest) {
    this.datagridLoading.set(true);

    this.sediService.getSedi(request).subscribe({
      next: (data: any) => {
        this.sedi.set([...(data.data ?? [])]);

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

  onPageChange(event: DataGridPageEvent) {
    this.paginationConfig = {
      ...this.paginationConfig,
      page: event.page,
      pageSize: event.pageSize,
    };
  }

}
