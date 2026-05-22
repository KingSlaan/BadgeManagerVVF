import { Component, OnInit } from '@angular/core';
import { DataGridColumn, DataGridRequest, DataGridSearchConfig } from '../../../../interfaces/datagrid';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { DATAGRID_CONSTANTS } from '../../../../constants/datagrid.constants';
import { createGridColumn, SEDI_MOCK, SEDI_SEARCH_CONFIG } from './lista-sedi.datagrid';

@Component({
  selector: 'app-lista-sedi',
  imports: [
    DataGridComponent
  ],
  templateUrl: './lista-sedi.component.html',
  styleUrl: './lista-sedi.component.scss',
})
export class ListaSediComponent implements OnInit {

  data = SEDI_MOCK;

  columns: DataGridColumn<any>[] = [];

  paginationConfig = DATAGRID_CONSTANTS;

  searchConfig: DataGridSearchConfig = SEDI_SEARCH_CONFIG;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.columns = createGridColumn();
  }

  loadData(request: DataGridRequest) {
    console.log("SEARCH", request);
  }
}
