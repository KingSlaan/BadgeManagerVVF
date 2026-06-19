import { LogsViewerComponent } from './views/pages/logs-viewer/logs-viewer.component';
import { loginGuard } from './../guards/login.guard';
import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
    canActivate: [authGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/dashboard/dashboard.component')
            .then(m => m.DashboardComponent),
        data: {
          title: 'Dashboard'
        },
      },
      {
        path: 'liste',
        data: {
          title: 'Liste'
        },
        loadChildren: () =>
          import('./views/pages/routes').then(m => m.routes)
      },
      {
        path: 'user-settings',
        data: {
          title: 'User Settings'
        },
        canActivate: [authGuard],
        loadComponent: () => import('./views/pages/user-settings/user-settings.component').then(m => m.UserSettingsComponent)
      },
      {
        path: 'stampa-documenti',
        data: {
          title: 'Stampa Documenti'
        },
        canActivate: [authGuard],
        loadComponent: () => import('./views/pages/stampa-documenti/stampa-documenti.component').then(m => m.StampaDocumentiComponent)
      },
      {
        path: 'logs',
        data: {
          title: 'Logs'
        },
        canActivate: [authGuard],
        loadComponent: () => import('./views/pages/logs-viewer/logs-viewer.component').then(m => m.LogsViewerComponent)
      }
    ]
  },
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
