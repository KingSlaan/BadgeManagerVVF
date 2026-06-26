import { Component, inject, OnInit, signal } from '@angular/core';
import { DataGridColumn, DataGridLoadingConfig, DataGridPageEvent, DataGridState, DataGridSearchConfig, DataGridSortingConfig } from '../../../../../interfaces/datagrid';
import { DataGridComponent } from '../../../../../components/data-grid/data-grid.component';
import { Persona, Persone } from 'src/interfaces/persone';
import { DATAGRID_CONSTANTS } from 'src/constants/datagrid.constants';
import { createGridColumn, createSearchConfig, PERSONE_URL_STATE_CONFIG } from '../lista-persone/lista-persone.datagrid';
import { PersoneService } from 'src/app/services/persone.service';
import { buildDataGridState, buildUrlQueryParamsFromState } from '@docs-components/data-grid/data-grid-utils';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-persone',
  imports: [
    DataGridComponent
  ],
  templateUrl: './lista-persone.component.html',
  styleUrl: './lista-persone.component.scss',
})
export class ListaPersoneComponent {

  private personeService = inject(PersoneService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  datagridLoading = signal(false);

  searchConfig: DataGridSearchConfig = createSearchConfig();
  paginationConfig = DATAGRID_CONSTANTS;
  persone = signal<Persone>([]);

  initialGridState: DataGridState | null = null;

  gridState = signal<DataGridState>({
    filters: [],
    sorting: null,
    pagination: {
      page: 1,
      pageSize: this.paginationConfig.pageSize,
    },
  });

  columns: DataGridColumn<Persona>[] = createGridColumn();

  urlStateConfig = PERSONE_URL_STATE_CONFIG;

  ngOnInit(): void {
    this.loadData(this.gridState());
    const initialState = this.getInitialState();
    this.initialGridState = initialState;
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
