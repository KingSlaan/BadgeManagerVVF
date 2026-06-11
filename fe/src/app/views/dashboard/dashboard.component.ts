import { DashboardService } from './../../services/dashboard.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, ContainerComponent, ProgressComponent, RowComponent, TemplateIdDirective, WidgetStatCComponent } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { cilTrash, cilUser, cilUserFollow, cilUserUnfollow } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ChartData } from 'chart.js';
import { Statistiche, StatisticheSedeChart } from '../../../interfaces/statistiche';

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

  private statisticheService = inject(DashboardService);

  icons = { cilTrash, cilUser, cilUserFollow, cilUserUnfollow };

  statistiche = signal<Statistiche>(
    {
      generale: {
        totali: 0,
        assegnati: 0,
        nonAssegnati: 0,
        inutilizzabili: 0,
      }
    });

  options = {
    responsive: true,
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
  };

  chartBarTessereData = signal<ChartData>({
    labels: [],
    datasets: [
      {
        label: '# Badge',
        backgroundColor: '#7C2D12',
        data: []
      }
    ],
  });

  ngOnInit(): void {
    this.statisticheService.getStatistiche().subscribe({
      next: (data: any) => {
        this.statistiche.set(data.data ?? {});
      },
      error: (err: any) => {
        console.error('Error loading statistiche generali', err);
      },
    });

    this.statisticheService.getStatisticheSede().subscribe({
      next: (data: any) => {
        this.chartBarTessereData.set({
          labels: data.data.labels,
          datasets: [
            {
              label: '# Badge',
              backgroundColor: '#7C2D12',
              data: data.data.values
            }
          ]
        });
      },
      error: (err: any) => {
        console.error('Error loading statistiche sede', err);
      },
    });

  }

  calPerc(actual: number, tot: number): number {
    return (actual / tot) * 100;
  }

}
