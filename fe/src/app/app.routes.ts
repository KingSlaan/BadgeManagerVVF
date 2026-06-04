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
      },
      {
        path: 'liste',
        loadChildren: () =>
          import('./views/pages/routes')
            .then(m => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/routes')
            .then(m => m.routes)
      },
      {
        path: 'user-settings',
        canActivate: [authGuard],
        loadComponent: () => import('./views/pages/user-settings/user-settings.component').then(m => m.UserSettingsComponent)
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
