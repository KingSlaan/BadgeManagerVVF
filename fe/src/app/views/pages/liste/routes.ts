import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Liste`
    },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./liste-home/liste-home.component')
            .then(m => m.ListeHomeComponent),
        data: {
          title: $localize``
        }
      },
      {
        path: 'sedi',
        loadComponent: () =>
          import('./lista-sedi/lista-sedi.component')
            .then(m => m.ListaSediComponent),
        data: {
          title: $localize`Sedi`
        }
      },
      {
        path: 'tessere',
        loadComponent: () =>
          import('./lista-tessere/lista-tessere.component')
            .then(m => m.ListaTessereComponent),
        data: {
          title: $localize`Tessere`
        }
      },
      {
        path: 'utenti',
        loadComponent: () =>
          import('./lista-utenti/lista-utenti.component')
            .then(m => m.ListaUtentiComponent),
        data: {
          title: $localize`Utenti`
        }
      }
    ]
  }
];
