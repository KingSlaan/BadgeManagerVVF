import {
  TessereService,
  UtilsService
} from "./chunk-CEZL3I2S.js";
import "./chunk-LXLCWKUT.js";
import {
  SediService
} from "./chunk-7FMZWP2X.js";
import {
  AutocompleteSelectComponent,
  DatepickerComponent
} from "./chunk-27CSNAXY.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-VNJM3TLE.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GutterDirective,
  RowDirective
} from "./chunk-OLXJWBKS.js";
import "./chunk-7LGTHZSA.js";
import "./chunk-VFB6BPIL.js";
import "./chunk-I6TGZBYO.js";
import {
  Component,
  Injectable,
  computed,
  finalize,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YYV6A2YU.js";
import "./chunk-WDMUDEB6.js";

// src/states/sedi-state.service.ts
var SediStateService = class _SediStateService {
  constructor() {
    this.sediService = inject(SediService);
    this._sedi = signal([], ...ngDevMode ? [{ debugName: "_sedi" }] : (
      /* istanbul ignore next */
      []
    ));
    this._loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this._loaded = signal(false, ...ngDevMode ? [{ debugName: "_loaded" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sedi = this._sedi.asReadonly();
    this.loading = this._loading.asReadonly();
    this.loaded = this._loaded.asReadonly();
    this.sediOptions = computed(() => this._sedi().map((sede) => ({
      label: sede.descrizione,
      value: sede.codSede
    })), ...ngDevMode ? [{ debugName: "sediOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sediOptionsValue = computed(() => this._sedi().map((sede) => ({
      label: sede.descrizione,
      value: sede.descrizione
    })), ...ngDevMode ? [{ debugName: "sediOptionsValue" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  loadSedi(forceReload = false) {
    if (this._loaded() && !forceReload) {
      return;
    }
    this._loading.set(true);
    this.sediService.getSediList().pipe(finalize(() => this._loading.set(false))).subscribe({
      next: (response) => {
        this._sedi.set(response.data ?? []);
        this._loaded.set(true);
      },
      error: () => {
        this._sedi.set([]);
        this._loaded.set(false);
      }
    });
  }
  loadSediDescValue(forceReload = false) {
    if (this._loaded() && !forceReload) {
      return;
    }
    this._loading.set(true);
    this.sediService.getSediList().pipe(finalize(() => this._loading.set(false))).subscribe({
      next: (response) => {
        this._sedi.set(response.data ?? []);
        this._loaded.set(true);
      },
      error: () => {
        this._sedi.set([]);
        this._loaded.set(false);
      }
    });
  }
  refreshSedi() {
    this.loadSedi(true);
  }
  clearSedi() {
    this._sedi.set([]);
    this._loaded.set(false);
  }
  static {
    this.\u0275fac = function SediStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SediStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SediStateService, factory: _SediStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SediStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/views/pages/stampa-documenti/stampa-documenti.component.ts
function StampaDocumentiComponent_ng_template_30_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Selected");
    \u0275\u0275elementEnd();
  }
}
function StampaDocumentiComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div")(2, "div", 21);
    \u0275\u0275element(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small")(6, "strong");
    \u0275\u0275text(7, "CF");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "Sede");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "Tessera");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, ": ");
    \u0275\u0275elementStart(15, "i");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(17, StampaDocumentiComponent_ng_template_30_Conditional_17_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const selected_r2 = ctx.selected;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("status-dot status-dot--" + ctx_r2.utilsService.getStatusColor(option_r1.data));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", option_r1.data.cognome, " ", option_r1.data.nome, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(": ", option_r1.data.codiceFiscale, " | ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(": ", option_r1.data.sede, " | ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(option_r1.data.idTessera);
    \u0275\u0275advance();
    \u0275\u0275conditional(selected_r2 ? 17 : -1);
  }
}
function StampaDocumentiComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", option_r4.data.cognome, " ", option_r4.data.nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", option_r4.data.idTessera, ")");
  }
}
var StampaDocumentiComponent = class _StampaDocumentiComponent {
  constructor() {
    this.sediState = inject(SediStateService);
    this.tessereService = inject(TessereService);
    this.utilsService = inject(UtilsService);
    this.sediOptions = this.sediState.sediOptionsValue;
    this.form = new FormGroup({
      oggetto: new FormControl(""),
      numProtocollo: new FormControl(""),
      dataProtocollo: new FormControl(""),
      sede: new FormControl(""),
      utenti: new FormControl([])
    });
    this.searchTessere = (term) => {
      const request = {
        filters: [
          {
            field: "cognome",
            operator: "contains",
            value: term || ""
          }
        ],
        pagination: {
          page: 1,
          pageSize: 50
        },
        sorting: null
      };
      return this.tessereService.getTessere(request).pipe(
        // tap(tessere => console.log('SEDI API RESULT:', tessere.data)),
        map((tessere) => tessere.data.map((tessera) => ({
          label: `${tessera.cognome} ${tessera.nome}`,
          value: tessera.idTessera,
          // optional, useful for template
          data: tessera
        })))
      );
    };
  }
  ngOnInit() {
    this.sediState.loadSediDescValue();
  }
  createBodyForDownload() {
    return {
      descrizioneSede: this.form.controls.sede.value,
      oggettoMail: this.form.controls.oggetto.value,
      nrProtocollo: this.form.controls.numProtocollo.value,
      data: this.form.controls.dataProtocollo.value,
      nominativi: this.form.controls.utenti.value?.map((utente) => ({
        cognome: utente.cognome,
        nome: utente.nome,
        codFis: utente.codiceFiscale
      }))
    };
  }
  creaFileRispostaWord() {
    let request = this.createBodyForDownload();
    this.utilsService.getStampaWord(request).subscribe({
      next: (response) => {
        const blob = response.body;
        let fileName = "DocumentoRisposta.docx";
        const disposition = response.headers.get("Content-Disposition");
        if (disposition) {
          const match = disposition.match(/filename="?([^"]+)"?/);
          if (match) {
            fileName = match[1];
          }
        }
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  }
  creaFileRispostaPDF() {
    let request = this.createBodyForDownload();
    this.utilsService.getStampaPDF(request).subscribe({
      next: (response) => {
        const blob = response.body;
        const contentDisposition = response.headers.get("Content-Disposition");
        let fileName = "DocumentoRisposta.pdf";
        if (contentDisposition) {
          const match = /filename="?([^"]+)"?/.exec(contentDisposition);
          if (match) {
            fileName = match[1];
          }
        }
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  }
  static {
    this.\u0275fac = function StampaDocumentiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StampaDocumentiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StampaDocumentiComponent, selectors: [["app-stampa-documenti"]], decls: 34, vars: 13, consts: [["utenteItem", ""], ["utenteChip", ""], ["cForm", "", "cRow", "", 3, "formGroup", "gutter"], ["xs", "6", "lg", "6"], ["cLabel", "", "for", "oggetto", 1, "visually-hidden"], ["cFormControl", "", "id", "oggetto", "formControlName", "oggetto", "placeholder", "Oggetto", "type", "text"], ["cLabel", "", "for", "onumProtocolloggetto", 1, "visually-hidden"], ["cFormControl", "", "id", "numProtocollo", "formControlName", "numProtocollo", "placeholder", "# Protocollo", "type", "text"], ["xs", "4", "lg", "4"], ["cLabel", "", "for", "dataProtocollo", 1, "visually-hidden"], ["cFormControl", "", "id", "dataProtocollo", "formControlName", "dataProtocollo", "placeholder", "Data Protocollo", "min", "1900-01-01", "max", "9999-12-31", "todayButtonLabel", "Oggi", 3, "showTodayButton", "showTime"], ["xs", "8", "lg", "8"], ["cLabel", "", "for", "sede", 1, "visually-hidden"], ["formControlName", "sede", "placeholder", "Seleziona Sede", 3, "options"], ["xs", "12", "lg", "12"], ["cLabel", "", "for", "tipoTemplate", 1, "visually-hidden"], ["formControlName", "utenti", "placeholder", "Seleziona Utenti", 3, "multiple", "minSearchLength", "debounceMs", "serverSearchFn", "loadOnOpen", "itemTemplate", "selectedItemTemplate"], [1, "d-flex", "justify-content-end", "mt-3", "flex-wrap", "gap-3"], ["cButton", "", "color", "danger", "type", "submit", 3, "click"], ["cButton", "", "color", "info", "type", "submit", 3, "click", "disabled"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "fw-semibold"], [1, "badge", "bg-success"], [1, "d-inline-flex", "align-items-center", "gap-1"]], template: function StampaDocumentiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "br");
        \u0275\u0275elementStart(1, "c-card")(2, "c-card-body")(3, "form", 2)(4, "c-col", 3)(5, "label", 4);
        \u0275\u0275text(6, " Oggetto ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "c-col", 3)(9, "label", 6);
        \u0275\u0275text(10, " # Protocollo ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "c-col", 8)(13, "label", 9);
        \u0275\u0275text(14, " Data Protocollo ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "app-datepicker", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "c-col", 11)(17, "label", 12);
        \u0275\u0275text(18, " Sede ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "app-autocomplete-select", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "c-col", 14)(21, "label", 15);
        \u0275\u0275text(22, " Utenti Selezionati ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "app-autocomplete-select", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "c-card-footer")(25, "div", 17)(26, "button", 18);
        \u0275\u0275listener("click", function StampaDocumentiComponent_Template_button_click_26_listener() {
          return ctx.creaFileRispostaPDF();
        });
        \u0275\u0275text(27, " Crea Risposta PDF ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 19);
        \u0275\u0275listener("click", function StampaDocumentiComponent_Template_button_click_28_listener() {
          return ctx.creaFileRispostaWord();
        });
        \u0275\u0275text(29, " Crea Risposta Word ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(30, StampaDocumentiComponent_ng_template_30_Template, 18, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, StampaDocumentiComponent_ng_template_32_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const utenteItem_r5 = \u0275\u0275reference(31);
        const utenteChip_r6 = \u0275\u0275reference(33);
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form)("gutter", 3);
        \u0275\u0275advance(12);
        \u0275\u0275property("showTodayButton", true)("showTime", false);
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.sediOptions());
        \u0275\u0275advance(4);
        \u0275\u0275property("multiple", true)("minSearchLength", 0)("debounceMs", 500)("serverSearchFn", ctx.searchTessere)("loadOnOpen", true)("itemTemplate", utenteItem_r5)("selectedItemTemplate", utenteChip_r6);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", false);
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      FormControlDirective,
      FormDirective,
      FormLabelDirective,
      ButtonDirective,
      GutterDirective,
      RowDirective,
      FormsModule,
      DatepickerComponent,
      AutocompleteSelectComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StampaDocumentiComponent, [{
    type: Component,
    args: [{ selector: "app-stampa-documenti", imports: [
      ReactiveFormsModule,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      FormControlDirective,
      FormDirective,
      FormLabelDirective,
      ButtonDirective,
      GutterDirective,
      RowDirective,
      FormsModule,
      DatepickerComponent,
      AutocompleteSelectComponent
    ], template: `<br />\r
<c-card>\r
  <c-card-body>\r
    <form cForm [formGroup]="form" [gutter]="3" cRow>\r
      <c-col xs="6" lg="6">\r
        <label cLabel class="visually-hidden" for="oggetto"> Oggetto </label>\r
        <input\r
          cFormControl\r
          id="oggetto"\r
          formControlName="oggetto"\r
          placeholder="Oggetto"\r
          type="text"\r
        />\r
      </c-col>\r
      <c-col xs="6" lg="6">\r
        <label cLabel class="visually-hidden" for="onumProtocolloggetto">\r
          # Protocollo\r
        </label>\r
        <input\r
          cFormControl\r
          id="numProtocollo"\r
          formControlName="numProtocollo"\r
          placeholder="# Protocollo"\r
          type="text"\r
        />\r
      </c-col>\r
      <c-col xs="4" lg="4">\r
        <label cLabel class="visually-hidden" for="dataProtocollo">\r
          Data Protocollo\r
        </label>\r
        <app-datepicker\r
          cFormControl\r
          id="dataProtocollo"\r
          formControlName="dataProtocollo"\r
          placeholder="Data Protocollo"\r
          min="1900-01-01"\r
          max="9999-12-31"\r
          [showTodayButton]="true"\r
          todayButtonLabel="Oggi"\r
          [showTime]="false"\r
        />\r
      </c-col>\r
      <c-col xs="8" lg="8">\r
        <label cLabel class="visually-hidden" for="sede"> Sede </label>\r
        <app-autocomplete-select\r
          formControlName="sede"\r
          [options]="sediOptions()"\r
          placeholder="Seleziona Sede"\r
        />\r
      </c-col>\r
      <c-col xs="12" lg="12">\r
        <label cLabel class="visually-hidden" for="tipoTemplate">\r
          Utenti Selezionati\r
        </label>\r
        <app-autocomplete-select\r
          formControlName="utenti"\r
          placeholder="Seleziona Utenti"\r
          [multiple]="true"\r
          [minSearchLength]="0"\r
          [debounceMs]="500"\r
          [serverSearchFn]="searchTessere"\r
          [loadOnOpen]="true"\r
          [itemTemplate]="utenteItem"\r
          [selectedItemTemplate]="utenteChip"\r
        />\r
      </c-col>\r
    </form>\r
  </c-card-body>\r
  <c-card-footer>\r
    <div class="d-flex justify-content-end mt-3 flex-wrap gap-3">\r
      <button\r
        cButton\r
        color="danger"\r
        type="submit"\r
        (click)="creaFileRispostaPDF()"\r
      >\r
        Crea Risposta PDF\r
      </button>\r
      <button\r
        cButton\r
        color="info"\r
        type="submit"\r
        [disabled]="false"\r
        (click)="creaFileRispostaWord()"\r
      >\r
        Crea Risposta Word\r
      </button>\r
    </div>\r
  </c-card-footer>\r
</c-card>\r
\r
<ng-template #utenteItem let-option let-selected="selected">\r
  <div class="d-flex justify-content-between align-items-center w-100">\r
    <div>\r
      <div class="fw-semibold">\r
        <span\r
          [class]="\r
            'status-dot status-dot--' +\r
            this.utilsService.getStatusColor(option.data)\r
          "\r
        ></span>\r
\r
        {{ option.data.cognome }} {{ option.data.nome }}\r
      </div>\r
\r
      <small>\r
        <strong>CF</strong>: {{ option.data.codiceFiscale }} | <strong>Sede</strong>: {{ option.data.sede }} |\r
        <strong>Tessera</strong>: <i>{{ option.data.idTessera }}</i>\r
      </small>\r
    </div>\r
\r
    @if (selected) {\r
      <span class="badge bg-success">Selected</span>\r
    }\r
  </div>\r
</ng-template>\r
\r
<ng-template #utenteChip let-option>\r
  <span class="d-inline-flex align-items-center gap-1">\r
    <small>\r
      {{ option.data.cognome }} {{ option.data.nome }}\r
      <i>({{ option.data.idTessera }})</i>\r
    </small>\r
  </span>\r
</ng-template>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StampaDocumentiComponent, { className: "StampaDocumentiComponent", filePath: "src/app/views/pages/stampa-documenti/stampa-documenti.component.ts", lineNumber: 32 });
})();
export {
  StampaDocumentiComponent
};
//# sourceMappingURL=chunk-X6EBHHGY.js.map
