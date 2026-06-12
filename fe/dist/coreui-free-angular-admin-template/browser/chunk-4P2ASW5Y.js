import "./chunk-WDMUDEB6.js";

// src/app/views/pages/routes.ts
var routes = [
  {
    path: "sedi",
    loadComponent: () => import("./chunk-UH3CXE3Q.js").then((m) => m.ListaSediComponent),
    data: {
      title: $localize`Sedi`
    }
  },
  {
    path: "tessere",
    loadComponent: () => import("./chunk-6LWOQQLA.js").then((m) => m.ListaTessereComponent),
    data: {
      title: $localize`Gestione Tessere`
    }
  },
  {
    path: "utenti",
    loadComponent: () => import("./chunk-JW4IXMFR.js").then((m) => m.ListaUtentiComponent),
    data: {
      title: $localize`Utenti`
    }
  },
  {
    path: "stampa-documenti",
    loadComponent: () => import("./chunk-AOMU65DS.js").then((m) => m.StampaDocumentiComponent),
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
//# sourceMappingURL=chunk-4P2ASW5Y.js.map
