import { Component, OnInit } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, ContainerComponent, ProgressComponent, RowComponent, TemplateIdDirective, WidgetStatCComponent } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { cilTrash, cilUser, cilUserFollow, cilUserUnfollow } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ChartData } from 'chart.js';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [
    RowComponent,
    ColComponent,
    WidgetStatCComponent,
    TemplateIdDirective,
    IconDirective,
    ContainerComponent,
    ProgressComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ChartjsComponent
  ]
})
export class DashboardComponent implements OnInit {

  icons = { cilTrash, cilUser, cilUserFollow, cilUserUnfollow };

  options = {
    maintainAspectRatio: false,
  };

  chartBarData: ChartData = {
    labels: ['Uffici Centrali', 'Salerno', 'Catanzaro', 'Venezia', 'Milano'],
    datasets: [
      {
        label: 'Badge totali',
        backgroundColor: '#3634a3',
        data: [40, 20, 12, 11, 25]
      },
      {
        label: 'Badge assegnati',
        backgroundColor: '#1b9e3e',
        data: [10, 10, 22, 39, 10]
      },
      {
        label: 'Badge non assegnati',
        backgroundColor: '#e55353',
        data: [30, 15, 5, 9, 10]
      }
    ],

  };

  ngOnInit(): void {

  }

}
