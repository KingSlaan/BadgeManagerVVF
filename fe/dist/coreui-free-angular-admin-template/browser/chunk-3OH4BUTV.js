import {
  DATAGRID_CONSTANTS_NO_PAGINATION,
  DataGridComponent
} from "./chunk-OZ4GC4MU.js";
import "./chunk-27CSNAXY.js";
import "./chunk-VNJM3TLE.js";
import {
  API_CONSTANTS,
  ButtonDirective
} from "./chunk-OLXJWBKS.js";
import "./chunk-7LGTHZSA.js";
import {
  cilPencil
} from "./chunk-VFB6BPIL.js";
import {
  HttpClient,
  IconDirective
} from "./chunk-I6TGZBYO.js";
import {
  Component,
  Injectable,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-YYV6A2YU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/services/utenti.service.ts
var UtentiService = class _UtentiService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = API_CONSTANTS.BASE_URL;
  }
  /**
   * GET - Get all tessere
   */
  getUtenti(body) {
    return this.http.post(`${this.apiUrl}`, body);
  }
  static {
    this.\u0275fac = function UtentiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtentiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtentiService, factory: _UtentiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtentiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/views/pages/lista-utenti/lista-utenti.datagrid.ts
function createSearchConfig() {
  return {
    enabled: true,
    fields: [
      { field: "email", label: "Email", type: "text", size: "2", operator: "contains" },
      {
        field: "ruolo",
        label: "Ruolo",
        type: "select",
        operator: "equals",
        size: "2",
        options: [
          {
            label: "Admin",
            value: "admin"
          },
          {
            label: "Operatore",
            value: "operatore"
          },
          {
            label: "Visualizzatore",
            value: "visualizzatore"
          }
        ]
      }
    ]
  };
}
function createGridColumn(actionTemplate) {
  return [
    {
      field: "id",
      header: "Id"
    },
    {
      field: "email",
      header: "Email"
    },
    {
      field: "ruolo",
      header: "Ruolo"
    },
    {
      field: "actions",
      header: "Azioni",
      template: actionTemplate
    }
  ];
}
var UTENTI_SORTING_CONFIG = {
  enabled: false,
  defaultSorting: {
    field: "idTessera",
    direction: "desc"
  }
};

// src/app/views/pages/lista-utenti/lista-utenti.component.ts
var _c0 = ["actionTemplate"];
function ListaUtentiComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r0.icons.cilPencil);
  }
}
var ListaUtentiComponent = class _ListaUtentiComponent {
  constructor() {
    this.utentiService = inject(UtentiService);
    this.icons = { cilPencil };
    this.datagridLoading = signal(false, ...ngDevMode ? [{ debugName: "datagridLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchConfig = createSearchConfig();
    this.paginationConfig = DATAGRID_CONSTANTS_NO_PAGINATION;
    this.sortingConfig = UTENTI_SORTING_CONFIG;
    this.utenti = signal([], ...ngDevMode ? [{ debugName: "utenti" }] : (
      /* istanbul ignore next */
      []
    ));
    this.initialGridState = null;
    this.gridState = signal({
      filters: [],
      sorting: this.sortingConfig.defaultSorting ?? null,
      pagination: {
        page: 1,
        pageSize: this.paginationConfig.pageSize
      }
    }, ...ngDevMode ? [{ debugName: "gridState" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columns = createGridColumn(this.actionTemplate);
  }
  ngOnInit() {
    this.loadData(this.gridState());
  }
  loadData(request) {
    this.datagridLoading.set(true);
    this.utentiService.getUtenti(request).subscribe({
      next: (data) => {
        this.utenti.set([...data.data ?? []]);
        this.paginationConfig = __spreadValues(__spreadValues({}, this.paginationConfig), data.pagination);
        this.datagridLoading.set(false);
      },
      error: (err) => {
        console.error("Error loading tessere", err);
        this.datagridLoading.set(false);
      }
    });
  }
  onPageChange(event) {
    this.paginationConfig = __spreadProps(__spreadValues({}, this.paginationConfig), {
      page: event.page,
      pageSize: event.pageSize
    });
  }
  static {
    this.\u0275fac = function ListaUtentiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaUtentiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaUtentiComponent, selectors: [["app-lista-utenti"]], viewQuery: function ListaUtentiComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionTemplate = _t.first);
      }
    }, decls: 3, vars: 6, consts: [["actionTemplate", ""], [3, "stateChange", "columns", "rows", "searchConfig", "paginationConfig", "loading", "initialState"], ["cButton", "", "color", "primary", "variant", "ghost", "shape", "rounded-pill"], ["title", "Modifica", 3, "cIcon"]], template: function ListaUtentiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-datagrid", 1);
        \u0275\u0275listener("stateChange", function ListaUtentiComponent_Template_app_datagrid_stateChange_0_listener($event) {
          return ctx.loadData($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(1, ListaUtentiComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("columns", ctx.columns)("rows", ctx.utenti())("searchConfig", ctx.searchConfig)("paginationConfig", ctx.paginationConfig)("loading", ctx.datagridLoading())("initialState", ctx.gridState());
      }
    }, dependencies: [
      DataGridComponent,
      ButtonDirective,
      IconDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaUtentiComponent, [{
    type: Component,
    args: [{ selector: "app-lista-utenti", imports: [
      DataGridComponent,
      ButtonDirective,
      IconDirective
    ], template: '<app-datagrid\r\n  [columns]="columns"\r\n  [rows]="utenti()"\r\n  [searchConfig]="searchConfig"\r\n  [paginationConfig]="paginationConfig"\r\n  [loading]="datagridLoading()"\r\n  [initialState]="gridState()"\r\n  (stateChange)="loadData($event)"\r\n/>\r\n\r\n<ng-template #actionTemplate let-row>\r\n  <button cButton color="primary" variant="ghost" shape="rounded-pill">\r\n    <svg [cIcon]="icons.cilPencil" title="Modifica"></svg>\r\n  </button>\r\n</ng-template>\r\n' }]
  }], null, { actionTemplate: [{
    type: ViewChild,
    args: ["actionTemplate", {
      static: true
    }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaUtentiComponent, { className: "ListaUtentiComponent", filePath: "src/app/views/pages/lista-utenti/lista-utenti.component.ts", lineNumber: 24 });
})();
export {
  ListaUtentiComponent
};
//# sourceMappingURL=chunk-3OH4BUTV.js.map
