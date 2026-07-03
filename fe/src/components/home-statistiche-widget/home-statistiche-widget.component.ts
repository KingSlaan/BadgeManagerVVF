import { TESSERE_STATUS_MESSAGES } from 'src/constants/tessere-status.constants';
import { DashboardService } from './../../app/services/dashboard.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  ColComponent,
  ProgressComponent,
  RowComponent,
  TemplateIdDirective,
  WidgetStatCComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { Router } from '@angular/router';
import { Statistiche } from '../../interfaces/statistiche';

@Component({
  selector: 'app-home-statistiche-widget',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    WidgetStatCComponent,
    TemplateIdDirective,
    IconDirective,
    ProgressComponent,
  ],
  templateUrl: './home-statistiche-widget.component.html',
  styleUrl: './home-statistiche-widget.component.scss',
})
export class HomeStatisticheWidgetComponent implements OnInit {
  private statisticheService = inject(DashboardService);
  private router = inject(Router);

  tessereStatusMsg = TESSERE_STATUS_MESSAGES;

  statistiche = signal<Statistiche>({
    generale: {
      totali: 0,
      libere: 0,
      occupate: 0,
      indisponibili: 0,
      nd: 0,
    },
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

  }

  calPerc(actual: number, tot: number): number {
    return tot > 0 ? (actual / tot) * 100 : 0;
  }

  goTo(route: string, queryParams?: Record<string, any>): void {
    this.router.navigate([route], { queryParams });
  }
}
