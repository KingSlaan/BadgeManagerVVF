import { Component } from '@angular/core';
import { HomeMenuCard } from 'src/interfaces/home-menu-card';
import { HomeMenuComponent } from '@docs-components/home-menu/home-menu.component';
import { cilNoteAdd, cilPlus, cilPrint } from '@coreui/icons';

@Component({
  selector: 'app-operazioni-home',
  imports: [
    HomeMenuComponent
  ],
  templateUrl: './operazioni-home.component.html',
  styleUrl: './operazioni-home.component.scss',
})
export class OperazioniHomeComponent {

  cards: HomeMenuCard[] = [
    {
      title: 'Inserimento',
      description: 'Inserimento nuove tessere',
      route: '/operazioni/inserimento',
      icon: cilPlus
    },
    {
      title: 'Assegnazione',
      description: 'Assegnazione tessere',
      route: '/operazioni/assegnazione',
      icon: cilNoteAdd
    },
    {
      title: 'Stampa Documenti',
      description: 'Stampa documenti di risposta',
      route: '/operazioni/stampa-documenti',
      icon: cilPrint
    },
  ];
}
