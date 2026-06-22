import "./chunk-WDMUDEB6.js";

// src/app/views/pages/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: $localize`Liste`
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-ILCPSUHP.js").then((m) => m.ListeHomeComponent)
      },
      {
        path: "sedi",
        loadComponent: () => import("./chunk-H4MCN6SA.js").then((m) => m.ListaSediComponent),
        data: {
          title: $localize`Sedi`
        }
      },
      {
        path: "tessere",
        loadComponent: () => import("./chunk-BTMJEAP4.js").then((m) => m.ListaTessereComponent),
        data: {
          title: $localize`Tessere`
        }
      },
      {
        path: "utenti",
        loadComponent: () => import("./chunk-3OH4BUTV.js").then((m) => m.ListaUtentiComponent),
        data: {
          title: $localize`Utenti`
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-KPU7BQSB.js.map
