import { Component, inject, OnInit } from '@angular/core';
import { DataGridColumn, DataGridRequest, DataGridSearchConfig } from '../../../interfaces/datagrid';
import { DataGridComponent } from '../../../../components/data-grid/data-grid.component';
import { DATAGRID_CONSTANTS } from '../../../../constants/datagrid.constants';
import { DatepickerComponent } from '../../../../components/datepicker/datepicker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-lista-sedi',
  imports: [
    DataGridComponent,
    ReactiveFormsModule,
     DatepickerComponent,
     ColComponent,
     RowComponent,
     ButtonDirective
  ],
  templateUrl: './lista-sedi.component.html',
  styleUrl: './lista-sedi.component.scss',
})
export class ListaSediComponent implements OnInit {

  form = new FormGroup({
    birthDate: new FormControl('2026-05-20'),
  });

  data: any = [
    {
      codSede: "RO",
      descrizione: "Rovigo"
    },
    {
      codSede: "00",
      descrizione: "Uffici Centrali"
    }
  ];

  columns: DataGridColumn<any>[] = [];

  paginationConfig = DATAGRID_CONSTANTS;

  searchConfig: DataGridSearchConfig = {
    enabled: true,

    fields: [
      { field: 'codSede', label: 'Sede', type: 'text' },
      {
        field: 'descrizione',
        label: 'Descrizione',
        type: 'select',
        operator: 'equals',
        options: [
          {
            label: 'RO',
            value: 'Rovigo',
          },
          {
            label: '00',
            value: 'Uffici Centrali',
          },
          {
            label: 'Pending',
            value: 'PENDING',
          },
        ],
      },
    ]
  };

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.columns = [
      {
        field: 'codSede',
        header: 'Sede',
      },
      {
        field: 'descrizione',
        header: 'Descrizione',
      },
      {
        field: 'actions',
        header: 'Actions',
        render: (row: any) => ``,
      }
    ];
  }

  loadData(request: DataGridRequest) {
    console.log("SEARCH", request);
  }
}
