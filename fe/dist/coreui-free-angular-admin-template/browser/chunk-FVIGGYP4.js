import {
  SediService
} from "./chunk-7IOXQHQY.js";
import {
  DATAGRID_CONSTANTS_NO_PAGINATION,
  DataGridComponent
} from "./chunk-D35SSEZ4.js";
import "./chunk-CUR4M7JY.js";
import "./chunk-3D2CXWAA.js";
import "./chunk-7NVYWTLR.js";
import "./chunk-7LGTHZSA.js";
import "./chunk-U43FZQ3F.js";
import "./chunk-M5X3AQM3.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-V3VOMCDM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/views/pages/lista-sedi/lista-sedi.datagrid.ts
function createSearchConfig() {
  return {
    enabled: true,
    fields: [
      { field: "codSede", label: "Codice", type: "text" },
      { field: "descrizione", label: "Descrizione", type: "text", size: "4", operator: "contains" }
    ]
  };
}
var SEDI_SORTING_CONFIG = {
  enabled: true,
  defaultSorting: {
    field: "idTessera",
    direction: "desc"
  }
};
function createGridColumn() {
  return [
    {
      field: "codSede",
      header: "Codice"
    },
    {
      field: "descrizione",
      header: "Descrizione"
    }
  ];
}
var SEDI_PERSIST_CONFIG = {
  enabled: true,
  storageKey: "sedi-grid"
};

// src/app/views/pages/lista-sedi/lista-sedi.component.ts
var ListaSediComponent = class _ListaSediComponent {
  constructor() {
    this.sediService = inject(SediService);
    this.datagridLoading = signal(false, ...ngDevMode ? [{ debugName: "datagridLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchConfig = createSearchConfig();
    this.paginationConfig = DATAGRID_CONSTANTS_NO_PAGINATION;
    this.sortingConfig = SEDI_SORTING_CONFIG;
    this.persistConfig = SEDI_PERSIST_CONFIG;
    this.sedi = signal([], ...ngDevMode ? [{ debugName: "sedi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.initialRequest = {
      filters: [],
      pagination: {
        page: 1,
        pageSize: this.paginationConfig.pageSize
      },
      sorting: this.sortingConfig?.defaultSorting ?? null
    };
    this.columns = createGridColumn();
  }
  ngOnInit() {
    this.loadData(this.initialRequest);
  }
  loadData(request) {
    this.datagridLoading.set(true);
    this.sediService.getSedi(request).subscribe({
      next: (data) => {
        this.sedi.set([...data.data ?? []]);
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
    this.\u0275fac = function ListaSediComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaSediComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaSediComponent, selectors: [["app-lista-sedi"]], decls: 1, vars: 6, consts: [[3, "dataRequest", "columns", "rows", "searchConfig", "paginationConfig", "sortingConfig", "loading"]], template: function ListaSediComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-datagrid", 0);
        \u0275\u0275listener("dataRequest", function ListaSediComponent_Template_app_datagrid_dataRequest_0_listener($event) {
          return ctx.loadData($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("columns", ctx.columns)("rows", ctx.sedi())("searchConfig", ctx.searchConfig)("paginationConfig", ctx.paginationConfig)("sortingConfig", ctx.sortingConfig)("loading", ctx.datagridLoading());
      }
    }, dependencies: [DataGridComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaSediComponent, [{
    type: Component,
    args: [{ selector: "app-lista-sedi", imports: [
      DataGridComponent
    ], template: '<app-datagrid\r\n  [columns]="columns"\r\n  [rows]="sedi()"\r\n  [searchConfig]="searchConfig"\r\n  [paginationConfig]="paginationConfig"\r\n  [sortingConfig]="sortingConfig"\r\n  [loading]="datagridLoading()"\r\n  (dataRequest)="loadData($event)"\r\n/>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaSediComponent, { className: "ListaSediComponent", filePath: "src/app/views/pages/lista-sedi/lista-sedi.component.ts", lineNumber: 17 });
})();
export {
  ListaSediComponent
};
//# sourceMappingURL=chunk-FVIGGYP4.js.map
