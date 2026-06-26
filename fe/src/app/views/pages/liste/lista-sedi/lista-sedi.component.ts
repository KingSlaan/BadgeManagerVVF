import { SediService } from '../../../../services/sedi.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DataGridColumn, DataGridLoadingConfig, DataGridPageEvent, DataGridState, DataGridSearchConfig, DataGridSortingConfig } from '../../../../../interfaces/datagrid';
import { DataGridComponent } from '../../../../../components/data-grid/data-grid.component';
import { DATAGRID_CONSTANTS_NO_PAGINATION } from '../../../../../constants/datagrid.constants';
import { createGridColumn, createSearchConfig, SEDI_SORTING_CONFIG, SEDI_URL_STATE_CONFIG } from './lista-sedi.datagrid';
import { Sede, Sedi } from 'src/interfaces/sedi';
import { ActivatedRoute, Router } from '@angular/router';
import { buildDataGridState, buildUrlQueryParamsFromState } from '@docs-components/data-grid/data-grid-utils';

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
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  datagridLoading = signal(false);

  searchConfig: DataGridSearchConfig = createSearchConfig();
  paginationConfig = DATAGRID_CONSTANTS_NO_PAGINATION;
  sedi = signal<Sedi>([]);

  initialGridState: DataGridState | null = null;

  gridState = signal<DataGridState>({
    filters: [],
    sorting: null,
    pagination: {
      page: 1,
      pageSize: this.paginationConfig.pageSize,
    },
  });

  columns: DataGridColumn<Sede>[] = createGridColumn();

  urlStateConfig = SEDI_URL_STATE_CONFIG;

  ngOnInit(): void {
    this.loadData(this.gridState());
  }

  loadData(state: DataGridState) {
    this.datagridLoading.set(true);
    this.gridState.set(state);

    this.updateUrlFromState(state);

    this.sediService.getSedi(state).subscribe({
      next: (data: any) => {
        this.sedi.set([...(data.data ?? [])]);

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
