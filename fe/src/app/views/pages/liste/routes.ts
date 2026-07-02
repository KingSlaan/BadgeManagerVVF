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
        title: 'LISTE',
        loadComponent: () =>
          import('./liste-home/liste-home.component')
            .then(m => m.ListeHomeComponent),
        data: {
          title: $localize``
        }
      },
      {
        path: 'sedi',
        title: 'Sedi',
        loadComponent: () =>
          import('./lista-sedi/lista-sedi.component')
            .then(m => m.ListaSediComponent),
        data: {
          title: $localize`Sedi`
        }
      },
      {
        path: 'tessere',
        title: 'Tessere',
        loadComponent: () =>
          import('./lista-tessere/lista-tessere.component')
            .then(m => m.ListaTessereComponent),
        data: {
          title: $localize`Tessere`
        }
      },
      {
        path: 'persone',
        title: 'Persone',
        loadComponent: () =>
          import('./lista-persone/lista-persone.component')
            .then(m => m.ListaPersoneComponent),
        data: {
          title: $localize`Persone`
        }
      },
      {
        path: 'utenti',
        title: 'Utenti',
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
