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
        loadComponent: () =>
          import('./operazioni-home/operazioni-home.component')
            .then(m => m.OperazioniHomeComponent),
        data: {
          title: $localize``
        }
      },
      {
        path: 'assegnazione',
        loadComponent: () =>
          import('./assegnazione/assegnazione.component')
            .then(m => m.AssegnazioneComponent),
        data: {
          title: $localize`Utenti`
        }
      },
      {
        path: 'inserimento',
        loadComponent: () =>
          import('./inserimento/inserimento.component')
            .then(m => m.InserimentoComponent),
        data: {
          title: $localize`Utenti`
        }
      },
      {
        path: 'stampa-documenti',
        loadComponent: () =>
          import('./stampa-documenti/stampa-documenti.component')
            .then(m => m.StampaDocumentiComponent),
        data: {
          title: $localize`Utenti`
        }
      }
    ]
  }
];
