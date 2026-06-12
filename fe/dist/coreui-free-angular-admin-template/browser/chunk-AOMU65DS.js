import {
  SediService
} from "./chunk-EJJ5TXTF.js";
import {
  AutocompleteSelectComponent,
  DatepickerComponent
} from "./chunk-FHEW5I55.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-KIY36XLL.js";
import "./chunk-ZIQEJ4ZV.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
  RowComponent,
  RowDirective
} from "./chunk-R4B7IERY.js";
import {
  Component,
  Injectable,
  computed,
  finalize,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-ZF5FRGBZ.js";
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
      value: sede.codice
    })), ...ngDevMode ? [{ debugName: "sediOptions" }] : (
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
function StampaDocumentiComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 6)(1, "label", 18);
    \u0275\u0275text(2, " Quantit\xE0 Badge ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 19);
    \u0275\u0275elementEnd();
  }
}
var StampaDocumentiComponent = class _StampaDocumentiComponent {
  constructor() {
    this.sediState = inject(SediStateService);
    this.sediOptions = this.sediState.sediOptions;
    this.form = new FormGroup({
      oggetto: new FormControl(""),
      numProtocollo: new FormControl(""),
      dataProtocollo: new FormControl(""),
      sede: new FormControl(""),
      tipoTemplate: new FormControl(""),
      qntBadge: new FormControl(null)
    });
  }
  ngOnInit() {
    this.sediState.loadSedi();
  }
  creaFileRisposta() {
  }
  static {
    this.\u0275fac = function StampaDocumentiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StampaDocumentiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StampaDocumentiComponent, selectors: [["app-stampa-documenti"]], decls: 33, vars: 7, consts: [["cForm", "", "cRow", "", 3, "ngSubmit", "formGroup", "gutter"], ["xs", "6", "lg", "6"], ["cLabel", "", "for", "oggetto", 1, "visually-hidden"], ["cFormControl", "", "id", "oggetto", "formControlName", "oggetto", "placeholder", "Oggetto", "type", "text"], ["cLabel", "", "for", "onumProtocolloggetto", 1, "visually-hidden"], ["cFormControl", "", "id", "numProtocollo", "formControlName", "numProtocollo", "placeholder", "# Protocollo", "type", "text"], ["xs", "4", "lg", "4"], ["cLabel", "", "for", "dataProtocollo", 1, "visually-hidden"], ["cFormControl", "", "id", "dataProtocollo", "formControlName", "dataProtocollo", "placeholder", "Data Protocollo", "min", "1900-01-01", "max", "9999-12-31", "todayButtonLabel", "Oggi", 3, "showTodayButton", "showTime"], ["xs", "8", "lg", "8"], ["cLabel", "", "for", "sede", 1, "visually-hidden"], ["formControlName", "sede", "placeholder", "Select sede", 3, "options"], ["cLabel", "", "for", "tipoTemplate", 1, "visually-hidden"], ["cSelect", "", "cFormControl", "", "id", "tipoTemplate", "placeholder", "Tipo Template", "formControlName", "tipoTemplate"], ["value", "singolo"], ["value", "multiplo"], [1, "d-flex", "justify-content-end", "mt-3", "flex-wrap"], ["cButton", "", "color", "success", "type", "submit", 3, "disabled"], ["cLabel", "", "for", "qntBadge", 1, "visually-hidden"], ["cFormControl", "", "id", "qntBadge", "formControlName", "qntBadge", "placeholder", "Quantit\xE0 Badge", "type", "text"]], template: function StampaDocumentiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "br");
        \u0275\u0275elementStart(1, "c-card")(2, "c-card-body")(3, "form", 0);
        \u0275\u0275listener("ngSubmit", function StampaDocumentiComponent_Template_form_ngSubmit_3_listener() {
          return ctx.creaFileRisposta();
        });
        \u0275\u0275elementStart(4, "c-col", 1)(5, "label", 2);
        \u0275\u0275text(6, " Oggetto ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "c-col", 1)(9, "label", 4);
        \u0275\u0275text(10, " # Protocollo ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "c-col", 6)(13, "label", 7);
        \u0275\u0275text(14, " Data Protocollo ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "app-datepicker", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "c-col", 9)(17, "label", 10);
        \u0275\u0275text(18, " Sede ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "app-autocomplete-select", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "c-col", 6)(21, "label", 12);
        \u0275\u0275text(22, " Tipo Template ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "select", 13)(24, "option", 14);
        \u0275\u0275text(25, "Singolo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 15);
        \u0275\u0275text(27, "Multiplo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(28, StampaDocumentiComponent_Conditional_28_Template, 4, 0, "c-col", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "c-card-footer")(30, "div", 16)(31, "button", 17);
        \u0275\u0275text(32, " Crea Risposta ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form)("gutter", 3);
        \u0275\u0275advance(12);
        \u0275\u0275property("showTodayButton", true)("showTime", false);
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.sediOptions());
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.form.controls.tipoTemplate.value === "multiplo" ? 28 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", false);
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
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
      FormSelectDirective,
      AutocompleteSelectComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StampaDocumentiComponent, [{
    type: Component,
    args: [{ selector: "app-stampa-documenti", imports: [
      ReactiveFormsModule,
      RowComponent,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      CardHeaderComponent,
      FormControlDirective,
      FormDirective,
      FormLabelDirective,
      ButtonDirective,
      GutterDirective,
      RowDirective,
      FormsModule,
      DatepickerComponent,
      FormSelectDirective,
      AutocompleteSelectComponent
    ], template: '<br/>\r\n    <c-card>\r\n      <c-card-body>\r\n        <form\r\n          cForm\r\n          [formGroup]="form"\r\n          (ngSubmit)="creaFileRisposta()"\r\n          [gutter]="3"\r\n          cRow\r\n        >\r\n          <c-col xs="6" lg="6">\r\n            <label cLabel class="visually-hidden" for="oggetto">\r\n              Oggetto\r\n            </label>\r\n            <input\r\n              cFormControl\r\n              id="oggetto"\r\n              formControlName="oggetto"\r\n              placeholder="Oggetto"\r\n              type="text"\r\n            />\r\n          </c-col>\r\n          <c-col xs="6" lg="6">\r\n            <label cLabel class="visually-hidden" for="onumProtocolloggetto">\r\n              # Protocollo\r\n            </label>\r\n            <input\r\n              cFormControl\r\n              id="numProtocollo"\r\n              formControlName="numProtocollo"\r\n              placeholder="# Protocollo"\r\n              type="text"\r\n            />\r\n          </c-col>\r\n          <c-col xs="4" lg="4">\r\n            <label cLabel class="visually-hidden" for="dataProtocollo">\r\n              Data Protocollo\r\n            </label>\r\n            <app-datepicker\r\n              cFormControl\r\n              id="dataProtocollo"\r\n              formControlName="dataProtocollo"\r\n              placeholder="Data Protocollo"\r\n              min="1900-01-01"\r\n              max="9999-12-31"\r\n              [showTodayButton]="true"\r\n              todayButtonLabel="Oggi"\r\n              [showTime]="false"\r\n            />\r\n          </c-col>\r\n          <c-col xs="8" lg="8">\r\n            <label cLabel class="visually-hidden" for="sede"> Sede </label>\r\n            <app-autocomplete-select\r\n              formControlName="sede"\r\n              [options]="sediOptions()"\r\n              placeholder="Select sede"\r\n            />\r\n          </c-col>\r\n          <c-col xs="4" lg="4">\r\n            <label cLabel class="visually-hidden" for="tipoTemplate">\r\n              Tipo Template\r\n            </label>\r\n            <select\r\n              cSelect\r\n              cFormControl\r\n              id="tipoTemplate"\r\n              placeholder="Tipo Template"\r\n              formControlName="tipoTemplate"\r\n            >\r\n              <option value="singolo">Singolo</option>\r\n              <option value="multiplo">Multiplo</option>\r\n            </select>\r\n          </c-col>\r\n          @if (form.controls.tipoTemplate.value === "multiplo") {\r\n            <c-col xs="4" lg="4">\r\n              <label cLabel class="visually-hidden" for="qntBadge">\r\n                Quantit\xE0 Badge\r\n              </label>\r\n              <input\r\n                cFormControl\r\n                id="qntBadge"\r\n                formControlName="qntBadge"\r\n                placeholder="Quantit\xE0 Badge"\r\n                type="text"\r\n              />\r\n            </c-col>\r\n          }\r\n        </form>\r\n      </c-card-body>\r\n      <c-card-footer>\r\n        <div class="d-flex justify-content-end mt-3 flex-wrap">\r\n          <button cButton color="success" type="submit" [disabled]="false">\r\n            Crea Risposta\r\n          </button>\r\n        </div>\r\n      </c-card-footer>\r\n    </c-card>\r\n\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StampaDocumentiComponent, { className: "StampaDocumentiComponent", filePath: "src/app/views/pages/stampa-documenti/stampa-documenti.component.ts", lineNumber: 31 });
})();
export {
  StampaDocumentiComponent
};
//# sourceMappingURL=chunk-AOMU65DS.js.map
