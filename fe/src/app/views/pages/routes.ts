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
  // {
  //   path: '404',
  //   loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
  //   data: {
  //     title: 'Register Page'
  //   }
  // }
];
