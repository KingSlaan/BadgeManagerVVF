import "./chunk-WDMUDEB6.js";

// src/app/views/pages/routes.ts
var routes = [
  {
    path: "sedi",
    loadComponent: () => import("./chunk-N6KH3EUK.js").then((m) => m.ListaSediComponent),
    data: {
      title: $localize`Sedi`
    }
  },
  {
    path: "tessere",
    loadComponent: () => import("./chunk-RYG5IGIA.js").then((m) => m.ListaTessereComponent),
    data: {
      title: $localize`Gestione Tessere`
    }
  },
  {
    path: "utenti",
    loadComponent: () => import("./chunk-NMAJCCOY.js").then((m) => m.ListaUtentiComponent),
    data: {
      title: $localize`Utenti`
    }
  },
  {
    path: "stampa-documenti",
    loadComponent: () => import("./chunk-2GZNEHHX.js").then((m) => m.StampaDocumentiComponent),
    data: {
      title: $localize`Utenti`
    }
  }
  // {
  //   path: 'user-settings',
  //   loadComponent: () =>
  //     import('./user-settings/user-settings.component').then(m => m.UserSettingsComponent),
  //   data: {
  //     title: $localize`User Settings`
  //   }
  // }
];
export {
  routes
};
//# sourceMappingURL=chunk-VAGX3ZHQ.js.map
