import { LogsViewerComponent } from './views/pages/logs-viewer/logs-viewer.component';
import { loginGuard } from './../guards/login.guard';
import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
    canActivate: [authGuard],
    title: 'Home',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        title: 'Dashboard',
        loadComponent: () =>
          import('./views/dashboard/dashboard.component')
            .then(m => m.DashboardComponent),
        data: {
          title: 'Dashboard'
        },
      },
      {
        path: 'liste',
        title: 'Liste',
        data: {
          title: 'Liste'
        },
        loadChildren: () =>
          import('./views/pages/liste/routes').then(m => m.routes)
      },
      {
        path: 'operazioni',
        title: 'Operazioni',
        data: {
          title: 'Operazioni'
        },
        loadChildren: () =>
          import('./views/pages/operazioni/routes').then(m => m.routes)
      },
      {
        path: 'user-settings',
        title: 'User Settings',
        data: {
          title: 'User Settings'
        },
        canActivate: [authGuard],
        loadComponent: () => import('./views/pages/user-settings/user-settings.component').then(m => m.UserSettingsComponent)
      },
      {
        path: 'logs',
        title: 'Logs',
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
    title: 'Login',
    canActivate: [loginGuard],
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
