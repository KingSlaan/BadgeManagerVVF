import { HomeMenuComponent } from '@docs-components/home-menu/home-menu.component';
import { HomeMenuSection } from './../../../../interfaces/home-menu-card';
import { cilBuilding, cilChart, cilColumns, cilCreditCard, cilNoteAdd, cilNotes, cilPeople, cilPlus, cilPrint, cilUser, cilWarning, cilXCircle } from '@coreui/icons';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { HomeStatisticheWidgetComponent } from '@docs-components/home-statistiche-widget/home-statistiche-widget.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeMenuComponent,
    HomeStatisticheWidgetComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {

  private cdr = inject(ChangeDetectorRef);

  @ViewChild('statsTemplate')
  statsTemplate!: TemplateRef<unknown>;

  ngAfterViewInit(): void {
    this.sections = this.sections.map((section, index) =>
      index === 0
        ? { ...section, contentTemplate: this.statsTemplate }
        : section
    );

    this.cdr.detectChanges();
  }

  sections: HomeMenuSection[] = [
    {
      title: 'STATISTICHE',
      description: 'Panoramica Utilizzo Badge, Timbrature Anomale, ecc.',
      icon: cilChart,
      route: '/statistiche',
      children: [],
    },
    {
      title: 'LISTE',
      description: 'Visualizza e modifica le anagrafiche',
      icon: cilNotes,
      route: '/liste',
      children: [
        { title: 'Tessere', icon: cilCreditCard, route: '/liste/tessere' },
        { title: 'Sedi', icon: cilBuilding, route: '/liste/sedi' },
        { title: 'Persone', icon: cilPeople, route: '/liste/persone' },
        { title: 'Utenti', icon: cilUser, route: '/liste/utenti' },
      ],
    },
    {
      title: 'OPERAZIONI',
      description: 'Avvia procedure e sanzioni',
      route: '/operazioni',
      icon: cilColumns,
      children: [
        { title: 'Inserimento', icon: cilPlus, route: '/operazioni/inserimento' },
        { title: 'Assegnazione', icon: cilNoteAdd, route: '/operazioni/assegnazione' },
        { title: 'Stampa Risposte', icon: cilPrint, route: '/operazioni/stampa-documenti' },
      ],
    },
  ];
}
