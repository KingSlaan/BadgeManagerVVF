import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Operazioni`
    },
    children: [
      {
        path: '',
        title: 'OPERAZIONI',
        loadComponent: () =>
          import('./operazioni-home/operazioni-home.component')
            .then(m => m.OperazioniHomeComponent),
        data: {
          title: $localize``
        }
      },
      {
        path: 'assegnazione',
        title: 'Assegnazione',
        loadComponent: () =>
          import('./assegnazione/assegnazione.component')
            .then(m => m.AssegnazioneComponent),
        data: {
          title: $localize`Assegnazione`
        }
      },
      {
        path: 'inserimento',
        title: 'Inserimento',
        loadComponent: () =>
          import('./inserimento/inserimento.component')
            .then(m => m.InserimentoComponent),
        data: {
          title: $localize`Inserimento`
        }
      },
      {
        path: 'stampa-documenti',
        title: 'Stampa Risposta',
        loadComponent: () =>
          import('./stampa-documenti/stampa-documenti.component')
            .then(m => m.StampaDocumentiComponent),
        data: {
          title: $localize`Stampa Risposta`
        }
      }
    ]
  }
];
