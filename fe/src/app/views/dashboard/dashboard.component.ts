import { SediStateService } from 'src/states/sedi-state.service';
import { UtilsService } from 'src/app/services/utils.service';
import { TESSERE_STATUS_MESSAGES } from '../../../constants/tessere-status.constants';
import { DashboardService } from './../../services/dashboard.service';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, ProgressComponent, RowComponent, TemplateIdDirective, WidgetStatCComponent } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { cilGroup, cilLowVision, cilTrash, cilUser, cilUserFollow } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ChartData, ChartOptions } from 'chart.js';
import { Statistiche } from '../../../interfaces/statistiche';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [
    RowComponent,
    ColComponent,
    WidgetStatCComponent,
    TemplateIdDirective,
    IconDirective,
    ProgressComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ChartjsComponent
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  private statisticheService = inject(DashboardService);
  private utilsService = inject(UtilsService);
  private sediState = inject(SediStateService);
  private router = inject(Router);
  public tessereStatusMsg = TESSERE_STATUS_MESSAGES;

  sediOptions = this.sediState.sediOptions;

  icons = { cilTrash, cilUser, cilUserFollow, cilLowVision, cilGroup };

  private themeObserver = new MutationObserver(() => {
    this.updateChartTheme();
  });

  private cssVar(name: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  }

  private updateChartTheme(): void {
    this.chartBarTessereData.update(chart => ({
      ...chart,
      datasets: chart.datasets.map(ds => ({
        ...ds,
        backgroundColor: this.cssVar('--app-primary'),
        borderColor: this.cssVar('--app-primary'),
        hoverBackgroundColor: this.cssVar('--app-info')
      }))
    }));

    this.options = {
      ...this.options,
      plugins: {
        legend: {
          labels: {
            color: this.cssVar('--app-text')
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: this.cssVar('--app-text')
          },
          grid: {
            color: this.cssVar('--app-border')
          }
        },
        y: {
          ticks: {
            color: this.cssVar('--app-text'),
            autoSkip: false,
            font: {
              size: 11
            }
          },
          grid: {
            color: this.cssVar('--app-border')
          },
          afterFit(scale: any) {
            scale.width = 300;
          }
        }
      }
    };
  }

  get chartHeight(): number {
    const labels = this.chartBarTessereData().labels ?? [];
    return Math.max(900, labels.length * 35);
  }

  statistiche = signal<Statistiche>(
    {
      generale: {
        totali: 0,
        libere: 0,
        occupate: 0,
        indisponibili: 0,
        nd: 0,
      }
    });

  options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    onClick: (_event, elements) => {
      if (!elements.length) {
        return;
      }

      const sediOptions = this.sediOptions();

      if (!sediOptions.length) {
        return;
      }

      const index = elements[0].index;
      const sede = this.chartBarTessereData().labels?.[index];

      if (!sede) {
        return;
      }

      const codSede = this.utilsService.getCodiceFromSedeDesc(
        sediOptions,
        sede
      );

      if (!codSede) {
        return;
      }

      this.goTo('/liste/tessere', { sede: codSede });
    },

    layout: {
      padding: {
        left: 20
      }
    },

    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 11
          }
        },
        afterFit(scale: any) {
          scale.width = 300;
        }
      }
    }
  };

  chartBarTessereData = signal<ChartData<'bar', number[], string>>({
    labels: [],
    datasets: [
      {
        label: '# Badge',
        backgroundColor: this.cssVar('--app-primary'),
        borderColor: this.cssVar('--app-primary'),
        data: []
      }
    ],
  });

  ngOnInit(): void {
    this.sediState.loadSedi();

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
              backgroundColor: this.cssVar('--app-primary'),
              borderColor: this.cssVar('--app-primary'),
              data: data.data.values
            }
          ]
        });
        this.updateChartTheme();
      },
      error: (err: any) => {
        console.error('Error loading statistiche sede', err);
      },
    });

    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-coreui-theme']
    });

  }

  ngOnDestroy(): void {
    this.themeObserver.disconnect();
  }

  calPerc(actual: number, tot: number): number {
    return (actual / tot) * 100;
  }

  goTo(route: string, queryParams?: Record<string, any>): void {
    this.router.navigate([route], {
      queryParams
    });
  }

}
