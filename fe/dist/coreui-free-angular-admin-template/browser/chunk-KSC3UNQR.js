import "./chunk-WDMUDEB6.js";

// src/app/views/pages/routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-ERZCNIUV.js").then((m) => m.ListeHomeComponent)
  },
  {
    path: "sedi",
    loadComponent: () => import("./chunk-FVIGGYP4.js").then((m) => m.ListaSediComponent),
    data: {
      title: $localize`Sedi`
    }
  },
  {
    path: "tessere",
    loadComponent: () => import("./chunk-ZYF4URQR.js").then((m) => m.ListaTessereComponent),
    data: {
      title: $localize`Gestione Tessere`
    }
  },
  {
    path: "utenti",
    loadComponent: () => import("./chunk-SGOUUMKJ.js").then((m) => m.ListaUtentiComponent),
    data: {
      title: $localize`Utenti`
    }
  },
  {
    path: "stampa-documenti",
    loadComponent: () => import("./chunk-SKXQE3NJ.js").then((m) => m.StampaDocumentiComponent),
    data: {
      title: $localize`Utenti`
    }
  },
  {
    path: "logs",
    loadComponent: () => import("./chunk-7JJDJMKV.js").then((m) => m.LogsViewerComponent),
    data: {
      title: $localize`Logs`
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
//# sourceMappingURL=chunk-KSC3UNQR.js.map
