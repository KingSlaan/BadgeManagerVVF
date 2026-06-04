import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sedi',
    loadComponent: () => import('./lista-sedi/lista-sedi.component').then(m => m.ListaSediComponent),
    data: {
      title: $localize`Sedi`
    }
  },
  {
    path: 'tessere',
    loadComponent: () => import('./lista-tessere/lista-tessere.component').then(m => m.ListaTessereComponent),
    data: {
      title: $localize`Gestione Tessere`
    }
  },
  {
    path: 'qualifiche',
    loadComponent: () => import('./lista-qualifiche/lista-qualifiche.component').then(m => m.ListaQualificheComponent),
    data: {
      title: $localize`Qualifiche`
    }
  },
  {
    path: 'utenti',
    loadComponent: () => import('./lista-utenti/lista-utenti.component').then(m => m.ListaUtentiComponent),
    data: {
      title: $localize`Utenti`
    }
  },
  // {
  //   path: 'user-settings',
  //   loadComponent: () =>
  //     import('./user-settings/user-settings.component').then(m => m.UserSettingsComponent),
  //   data: {
  //     title: $localize`User Settings`
  //   }
  // }
];
