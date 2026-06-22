import {
  TessereService,
  UtilsService
} from "./chunk-CEZL3I2S.js";
import {
  ToastService
} from "./chunk-RY6CYYM7.js";
import {
  TESSERE_STATUS_MESSAGES
} from "./chunk-LXLCWKUT.js";
import {
  SediService
} from "./chunk-7FMZWP2X.js";
import {
  DATAGRID_CONSTANTS,
  DataGridComponent
} from "./chunk-OZ4GC4MU.js";
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VNJM3TLE.js";
import {
  AlertComponent,
  BadgeComponent,
  BadgeModule,
  ButtonDirective,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  RowDirective,
  TableDirective,
  TooltipDirective
} from "./chunk-OLXJWBKS.js";
import "./chunk-7LGTHZSA.js";
import {
  cilActionUndo,
  cilAvTimer,
  cilBan,
  cilBuilding,
  cilCheckAlt,
  cilCloudDownload,
  cilCloudUpload,
  cilDelete,
  cilHistory,
  cilMinus,
  cilOptions,
  cilPencil,
  cilPlus,
  cilPrint,
  cilSearch,
  cilX
} from "./chunk-VFB6BPIL.js";
import {
  ActivatedRoute,
  IconDirective,
  Router,
  TitleCasePipe
} from "./chunk-I6TGZBYO.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YYV6A2YU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/components/modals/tessera-aggiungi/tessera-aggiungi.component.ts
var _forTrack0 = ($index, $item) => $item.idTessera;
function TesseraAggiungiComponent_Conditional_23_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r0.icons.cilCheckAlt);
  }
}
function TesseraAggiungiComponent_Conditional_23_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tessera_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cTooltip", ctx_r0.createErrorMessages(tessera_r2.options.errorMessages));
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r0.icons.cilX);
  }
}
function TesseraAggiungiComponent_Conditional_23_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, TesseraAggiungiComponent_Conditional_23_For_13_Conditional_8_Template, 2, 1, "c-badge", 15)(9, TesseraAggiungiComponent_Conditional_23_For_13_Conditional_9_Template, 2, 2, "c-badge", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tessera_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tessera_r2.idTessera);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tessera_r2.codiceInterno);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(tessera_r2.options.valid ? 8 : 9);
  }
}
function TesseraAggiungiComponent_Conditional_23_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ci sono pi\xF9 codici letti del range di tessere indicate ");
  }
}
function TesseraAggiungiComponent_Conditional_23_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ci sono pi\xF9 tessere dei codici letti ");
  }
}
function TesseraAggiungiComponent_Conditional_23_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-alert", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.beError(), " ");
  }
}
function TesseraAggiungiComponent_Conditional_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-alert", 18);
    \u0275\u0275conditionalCreate(1, TesseraAggiungiComponent_Conditional_23_Conditional_14_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, TesseraAggiungiComponent_Conditional_23_Conditional_14_Conditional_2_Template, 1, 0);
    \u0275\u0275text(3, " : ");
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, TesseraAggiungiComponent_Conditional_23_Conditional_14_Conditional_6_Template, 2, 1, "c-alert", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.badgeListArray == null ? null : ctx_r0.badgeListArray.length) > (ctx_r0.badgeListArrayFinal == null ? null : ctx_r0.badgeListArrayFinal.length) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.badgeListArrayFinal == null ? null : ctx_r0.badgeListArrayFinal.length) > (ctx_r0.badgeListArray == null ? null : ctx_r0.badgeListArray.length) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.badgeListArray == null ? null : ctx_r0.badgeListArray.length, "/", ctx_r0.badgeListArrayFinal == null ? null : ctx_r0.badgeListArrayFinal.length, " (Codici/Tessere) ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.beError().length > 0 ? 6 : -1);
  }
}
function TesseraAggiungiComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 10)(1, "table", 13)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 14);
    \u0275\u0275elementStart(5, "th", 14);
    \u0275\u0275text(6, "Id Tessera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 14);
    \u0275\u0275text(8, "Codice Interno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 14);
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, TesseraAggiungiComponent_Conditional_23_For_13_Template, 10, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, TesseraAggiungiComponent_Conditional_23_Conditional_14_Template, 7, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.badgeListArrayFinal);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.badgeListArray == null ? null : ctx_r0.badgeListArray.length) !== (ctx_r0.badgeListArrayFinal == null ? null : ctx_r0.badgeListArrayFinal.length) ? 14 : -1);
  }
}
var TesseraAggiungiComponent = class _TesseraAggiungiComponent {
  constructor() {
    this.tessereService = inject(TessereService);
    this.toast = inject(ToastService);
    this.visible = false;
    this.visibleChange = new EventEmitter();
    this.saved = new EventEmitter();
    this.beError = signal("", ...ngDevMode ? [{ debugName: "beError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listaBadgeForm = new FormGroup({
      badgeValueStart: new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
      badgeValueEnd: new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
      listaBadgeString: new FormControl("", [Validators.required])
    });
    this.icons = { cilX, cilPlus, cilMinus, cilCheckAlt };
    this.badgeListArray = [];
    this.badgeListArrayFinal = [];
  }
  checkImportDisabled() {
    return false;
  }
  close() {
    this.visibleChange.emit(false);
    this.badgeListArrayFinal = [];
    this.badgeListArray = [];
    this.listaBadgeForm.reset();
  }
  confirm() {
    this.tessereService.createTessere(this.badgeListArrayFinal).subscribe({
      next: (data) => {
        this.toast.success("User saved successfully");
        this.saved.emit();
      },
      error: (err) => {
        console.error("Error loading tessere", err);
        this.beError = err;
      }
    });
  }
  checkTessereValidity() {
    const invalidNum = this.badgeListArrayFinal?.filter((element) => element.options.valid === false);
    return !(this.badgeListArray?.length === this.badgeListArrayFinal?.length) || invalidNum.length > 0 || this.badgeListArrayFinal?.length === 0 || this.listaBadgeForm.invalid;
  }
  checkTesseraValid(codInterno) {
    const regex = /^[0-9]{20}$/;
    let errorMessages = [];
    let valid = true;
    if (!regex.test(codInterno)) {
      valid = false;
      errorMessages.push("Il codice interno deve essere composto di 20 numeri");
    }
    if (this.badgeListArray) {
      if (this.badgeListArray?.filter((item) => item === codInterno).length > 1) {
        valid = false;
        const indexesFound = this.getAllIndexes(this.badgeListArray, codInterno);
        errorMessages.push("Il codice interno \xE8 gi\xE0 presente nella lista, quindi \xE8 duplicato nei seguenti indici: " + indexesFound.join(","));
      }
    }
    return {
      valid,
      errorMessages
    };
  }
  preventNegative(event) {
    const blocked = ["-", "+", "e", "E"];
    if (blocked.includes(event.key)) {
      event.preventDefault();
    }
  }
  getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }
  createErrorMessages(errorMessages) {
    if (errorMessages.length > 0) {
      return "Sono presenti i seguenti errori: " + errorMessages.join(" | ");
    }
    return "";
  }
  createBadgeList() {
    this.badgeListArray = this.listaBadgeForm.controls.listaBadgeString.value?.trim().split(/\n/);
    this.badgeListArrayFinal = [];
    if (this.listaBadgeForm.controls.badgeValueStart.value !== null && this.listaBadgeForm.controls.badgeValueEnd.value !== null) {
      let countIndex = 0;
      for (let index = this.listaBadgeForm.controls.badgeValueStart.value; index <= this.listaBadgeForm.controls.badgeValueEnd.value; index++) {
        let codInterno = this.badgeListArray?.[countIndex] || "";
        this.badgeListArrayFinal.push({
          idTessera: index,
          codiceInterno: codInterno,
          options: this.checkTesseraValid(codInterno)
        });
        countIndex += 1;
      }
    }
  }
  static {
    this.\u0275fac = function TesseraAggiungiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TesseraAggiungiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TesseraAggiungiComponent, selectors: [["app-tessera-aggiungi"]], inputs: { visible: "visible" }, outputs: { visibleChange: "visibleChange", saved: "saved" }, decls: 27, vars: 7, consts: [["backdrop", "static", "size", "lg", 3, "visibleChange", "visible"], [2, "justify-content", "space-between !important"], ["cModalTitle", ""], ["variant", "ghost", "shape", "rounded-pill", "cButton", "", "color", "danger", 3, "click"], ["title", "Aggiungi", 3, "cIcon"], ["cForm", "", "cRow", "", 3, "gutter", "formGroup"], ["xs", "6"], ["cLabel", "", "for", "idTessera", 1, "visually-hidden"], ["cFormControl", "", "formControlName", "badgeValueStart", "id", "idTesseraRangeStart", "placeholder", "Id Tessera Iniziale", "type", "number", "min", "0", 3, "keydown"], ["cFormControl", "", "formControlName", "badgeValueEnd", "id", "idTesseraRangeEnd", "placeholder", "Id Tessera Finale", "type", "number", "min", "0", 3, "keydown"], ["xs", "12"], ["cFormControl", "", "formControlName", "listaBadgeString", "placeholder", "Inserisci lista di codici interni (numerico) suddivisi da invio - (01234567890987654321)"], ["cButton", "", "color", "success", 3, "click", "disabled"], ["cTable", ""], ["scope", "col"], ["color", "success"], ["color", "danger", "cTooltipPlacement", "right", 3, "cTooltip"], ["title", "Valida", 3, "cIcon"], ["color", "danger"]], template: function TesseraAggiungiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-modal", 0);
        \u0275\u0275listener("visibleChange", function TesseraAggiungiComponent_Template_c_modal_visibleChange_0_listener($event) {
          return ctx.visibleChange.emit($event);
        });
        \u0275\u0275elementStart(1, "c-modal-header", 1)(2, "h5", 2);
        \u0275\u0275text(3, "Inserisci Tessere");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function TesseraAggiungiComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(5, "svg", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "c-modal-body")(7, "form", 5)(8, "p");
        \u0275\u0275text(9, " Inserire l'id della prima e l'ultima tessera di cui si vuole leggere il codice interno. Range Iniziale e Finale ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "c-col", 6)(11, "label", 7);
        \u0275\u0275text(12, " Id Tessera Iniziale - (0000012345) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 8);
        \u0275\u0275listener("keydown", function TesseraAggiungiComponent_Template_input_keydown_13_listener($event) {
          return ctx.preventNegative($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "c-col", 6)(15, "label", 7);
        \u0275\u0275text(16, " Id Tessera Finale ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 9);
        \u0275\u0275listener("keydown", function TesseraAggiungiComponent_Template_input_keydown_17_listener($event) {
          return ctx.preventNegative($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "c-col", 10);
        \u0275\u0275element(19, "textarea", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "c-col", 10)(21, "button", 12);
        \u0275\u0275listener("click", function TesseraAggiungiComponent_Template_button_click_21_listener() {
          return ctx.createBadgeList();
        });
        \u0275\u0275text(22, " Importa Tessere ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, TesseraAggiungiComponent_Conditional_23_Template, 15, 1, "c-col", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "c-modal-footer")(25, "button", 12);
        \u0275\u0275listener("click", function TesseraAggiungiComponent_Template_button_click_25_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(26, " Crea Tessere ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.visible);
        \u0275\u0275advance(5);
        \u0275\u0275property("cIcon", ctx.icons.cilX);
        \u0275\u0275advance(2);
        \u0275\u0275property("gutter", 3)("formGroup", ctx.listaBadgeForm);
        \u0275\u0275advance(14);
        \u0275\u0275property("disabled", ctx.checkImportDisabled());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.badgeListArrayFinal.length > 0 ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.checkTessereValidity());
      }
    }, dependencies: [
      ButtonDirective,
      ModalComponent,
      ModalHeaderComponent,
      ModalTitleDirective,
      ModalBodyComponent,
      ModalFooterComponent,
      IconDirective,
      ColComponent,
      FormControlDirective,
      FormDirective,
      FormLabelDirective,
      GutterDirective,
      RowDirective,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinValidator,
      FormGroupDirective,
      FormControlName,
      TableDirective,
      TooltipDirective,
      BadgeComponent,
      AlertComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TesseraAggiungiComponent, [{
    type: Component,
    args: [{ selector: "app-tessera-aggiungi", imports: [
      ButtonDirective,
      ModalComponent,
      ModalHeaderComponent,
      ModalTitleDirective,
      ModalBodyComponent,
      ModalFooterComponent,
      IconDirective,
      ColComponent,
      FormControlDirective,
      FormDirective,
      FormLabelDirective,
      GutterDirective,
      RowDirective,
      ReactiveFormsModule,
      TableDirective,
      TooltipDirective,
      BadgeComponent,
      AlertComponent
    ], template: `<c-modal\r
  [visible]="visible"\r
  backdrop="static"\r
  (visibleChange)="visibleChange.emit($event)"\r
  size="lg"\r
>\r
  <c-modal-header style="justify-content: space-between !important">\r
    <h5 cModalTitle>Inserisci Tessere</h5>\r
\r
    <button\r
      (click)="close()"\r
      variant="ghost"\r
      shape="rounded-pill"\r
      cButton\r
      color="danger"\r
    >\r
      <svg [cIcon]="icons.cilX" title="Aggiungi"></svg>\r
    </button>\r
  </c-modal-header>\r
  <c-modal-body>\r
    <form [gutter]="3" cForm cRow [formGroup]="listaBadgeForm">\r
      <p>\r
        Inserire l'id della prima e l'ultima tessera di cui si vuole leggere il\r
        codice interno. Range Iniziale e Finale\r
      </p>\r
      <c-col xs="6">\r
        <label cLabel class="visually-hidden" for="idTessera">\r
          Id Tessera Iniziale - (0000012345)\r
        </label>\r
        <input\r
          cFormControl\r
          formControlName="badgeValueStart"\r
          id="idTesseraRangeStart"\r
          placeholder="Id Tessera Iniziale"\r
          type="number"\r
          min="0"\r
          (keydown)="preventNegative($event)"\r
        />\r
      </c-col>\r
      <c-col xs="6">\r
        <label cLabel class="visually-hidden" for="idTessera">\r
          Id Tessera Finale\r
        </label>\r
        <input\r
          cFormControl\r
          formControlName="badgeValueEnd"\r
          id="idTesseraRangeEnd"\r
          placeholder="Id Tessera Finale"\r
          type="number"\r
          min="0"\r
          (keydown)="preventNegative($event)"\r
        />\r
      </c-col>\r
      <c-col xs="12">\r
        <textarea\r
          cFormControl\r
          formControlName="listaBadgeString"\r
          placeholder="Inserisci lista di codici interni (numerico) suddivisi da invio - (01234567890987654321)"\r
        ></textarea>\r
      </c-col>\r
      <c-col xs="12">\r
        <button\r
          cButton\r
          color="success"\r
          (click)="createBadgeList()"\r
          [disabled]="checkImportDisabled()"\r
        >\r
          Importa Tessere\r
        </button>\r
      </c-col>\r
      @if (badgeListArrayFinal.length > 0) {\r
        <c-col xs="12">\r
          <table cTable>\r
            <thead>\r
              <tr>\r
                <th scope="col"></th>\r
                <th scope="col">Id Tessera</th>\r
                <th scope="col">Codice Interno</th>\r
                <th scope="col">Status</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (\r
                tessera of badgeListArrayFinal;\r
                track tessera.idTessera;\r
                let i = $index\r
              ) {\r
                <tr>\r
                  <td>{{ $index }}</td>\r
                  <td>{{ tessera.idTessera }}</td>\r
                  <td>{{ tessera.codiceInterno }}</td>\r
                  <td>\r
                    @if (tessera.options.valid) {\r
                      <c-badge color="success">\r
                        <svg [cIcon]="icons.cilCheckAlt" title="Valida"></svg>\r
                      </c-badge>\r
                    } @else {\r
                      <c-badge\r
                        color="danger"\r
                        [cTooltip]="\r
                          createErrorMessages(tessera.options.errorMessages)\r
                        "\r
                        cTooltipPlacement="right"\r
                      >\r
                        <svg [cIcon]="icons.cilX" title="Valida"></svg>\r
                      </c-badge>\r
                    }\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
          @if (badgeListArray?.length! !== badgeListArrayFinal?.length!) {\r
            <c-alert color="danger">\r
              @if (badgeListArray?.length! > badgeListArrayFinal?.length!) {\r
                Ci sono pi\xF9 codici letti del range di tessere indicate\r
              }\r
              @if (badgeListArrayFinal?.length! > badgeListArray?.length!) {\r
                Ci sono pi\xF9 tessere dei codici letti\r
              }\r
              :\r
              <small>\r
                {{ badgeListArray?.length! }}/{{ badgeListArrayFinal?.length! }}\r
                (Codici/Tessere)\r
              </small>\r
            </c-alert>\r
            @if (beError().length > 0) {\r
              <c-alert color="danger"> {{ beError() }} </c-alert>\r
            }\r
          }\r
        </c-col>\r
      }\r
    </form>\r
  </c-modal-body>\r
  <c-modal-footer>\r
    <button\r
      cButton\r
      color="success"\r
      (click)="confirm()"\r
      [disabled]="checkTessereValidity()"\r
    >\r
      Crea Tessere\r
    </button>\r
  </c-modal-footer>\r
</c-modal>\r
` }]
  }], null, { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TesseraAggiungiComponent, { className: "TesseraAggiungiComponent", filePath: "src/components/modals/tessera-aggiungi/tessera-aggiungi.component.ts", lineNumber: 36 });
})();

// src/constants/action.constants.ts
var ACTION_CONSTANTS = {
  ADD: "add",
  ASSIGN: "assign",
  ASSIGN_SEDE: "assign_sede",
  EDIT: "edit",
  CREATE: "create",
  REMOVE: "remove",
  DISABLED: "disabled"
};

// src/interfaces/tessere.ts
var tesseraEmpty = {
  idTessera: "",
  codTipoTessera: "",
  sede: "",
  dataOraIndisponibilita: "",
  dataOraInizioAssegnazione: "",
  dataOraFineAssegnazione: "",
  nome: "",
  cognome: "",
  codiceInterno: "",
  codiceFiscale: "",
  stato: ""
};

// src/constants/messages.constants.ts
var MESSAGES_CONSTANTS = {
  ERRORE_GENERICO_TITLE: "Errore",
  ERRORE_GENERICO_MSG: "Qualcosa \xE8 andato storto",
  SUCCESSO_ASSEGNA_TESSERA: "Tessere Assegnata con successo",
  SUCCESSO_CAMBIO_SEDE_TESSERA: "Cambio Sede Tessera con successo",
  SUCCESSO_REVOCA_TESSERA: "Tessere Revocata con successo",
  SUCCESSO_INVALIDA_TESSERA: "Tessere Invalidata con successo"
};

// src/components/modals/tessera-modal-cmp/tessera-modal-cmp.component.ts
var TesseraModalCmpComponent = class _TesseraModalCmpComponent {
  constructor() {
    this.tessereService = inject(TessereService);
    this.utilsService = inject(UtilsService);
    this.toast = inject(ToastService);
    this.visible = false;
    this.visibleChange = new EventEmitter();
    this.mode = ACTION_CONSTANTS.CREATE;
    this.tesseraSelected = tesseraEmpty;
    this.sediList = [];
    this.saved = new EventEmitter();
    this.formTessera = new FormGroup({
      idTessera: new FormControl(""),
      stato: new FormControl(""),
      codiceInterno: new FormControl(""),
      codiceFiscale: new FormControl(""),
      nome: new FormControl(""),
      cognome: new FormControl(""),
      sede: new FormControl(""),
      codTipoTessera: new FormControl(""),
      dataOraInizioAssegnazione: new FormControl(null),
      dataOraFineAssegnazione: new FormControl(null),
      dataOraIndisponibilita: new FormControl(null)
    });
    this.icons = { cilX };
  }
  ngOnChanges(changes) {
    if (changes["tesseraSelected"] && this.tesseraSelected) {
      this.formTessera.patchValue(this.tesseraSelected);
    }
    this.applyModeRules();
  }
  applyModeRules() {
    const disabledFieldsByMode = {
      disabled: [
        "idTessera",
        "codiceInterno",
        "codiceFiscale",
        "nome",
        "cognome",
        "sede",
        "codTipoTessera",
        "dataOraInizioAssegnazione",
        "dataOraFineAssegnazione"
      ],
      remove: [
        "idTessera",
        "codiceInterno",
        "codiceFiscale",
        "nome",
        "cognome",
        "sede",
        "codTipoTessera",
        "dataOraInizioAssegnazione",
        "dataOraIndisponibilita"
      ],
      edit: [
        "nome",
        "cognome"
      ],
      assign: [
        "idTessera",
        "codiceInterno",
        "nome",
        "cognome",
        // 'sede',
        "dataOraIndisponibilita"
      ],
      assign_sede: [
        "idTessera",
        "codiceInterno",
        "codiceFiscale",
        "nome",
        "cognome",
        "dataOraInizioAssegnazione",
        "dataOraFineAssegnazione",
        "dataOraIndisponibilita"
      ],
      add: []
    };
    Object.keys(this.formTessera.controls).forEach((field) => {
      this.formTessera.get(field)?.enable({ emitEvent: false });
    });
    disabledFieldsByMode[this.mode]?.forEach((field) => {
      this.formTessera.get(field)?.disable({ emitEvent: false });
    });
  }
  getTitle(mode) {
    switch (mode) {
      case ACTION_CONSTANTS.ASSIGN_SEDE:
        return "Cambia Sede";
      case ACTION_CONSTANTS.ASSIGN:
        return "Assegna Tessera";
      case ACTION_CONSTANTS.REMOVE:
        return "Validit\xE0 Tessera";
      case ACTION_CONSTANTS.DISABLED:
        return "Indisponibilit\xE0 Tessera";
      default:
        return "Modifica Tessera";
    }
  }
  getConfirmText(mode) {
    switch (mode) {
      case ACTION_CONSTANTS.ASSIGN_SEDE:
        return "Cambia Sede";
      case ACTION_CONSTANTS.ASSIGN:
        return "Assegna";
      case ACTION_CONSTANTS.REMOVE:
        return "Cambia Validit\xE0";
      case ACTION_CONSTANTS.DISABLED:
        return "Cambia Indisponibilit\xE0";
      default:
        return "Salva";
    }
  }
  checkDisabled(key, mode) {
    const checkFields = {
      idTessera: {
        edit: true,
        remove: false
      },
      codiceInterno: {
        edit: true,
        remove: false
      }
    };
    return checkFields[key]?.[mode] ?? false;
  }
  close() {
    this.visibleChange.emit(false);
  }
  confirm(mode) {
    let request = {};
    switch (mode) {
      case ACTION_CONSTANTS.ASSIGN_SEDE:
        request = {
          idTessera: this.tesseraSelected.idTessera,
          sede: this.formTessera.controls.sede.value,
          codTipoTessera: this.formTessera.controls.codTipoTessera.value
        };
        this.tessereService.cambiaSedeTessera(this.tesseraSelected.idTessera, request).subscribe({
          next: (data) => {
            this.saved.emit();
            this.toast.success(MESSAGES_CONSTANTS.SUCCESSO_CAMBIO_SEDE_TESSERA);
            this.visibleChange.emit(false);
          },
          error: (err) => {
            console.error("Error loading tessere", err);
          }
        });
        break;
      case ACTION_CONSTANTS.ASSIGN:
        request = {
          idTessera: this.tesseraSelected.idTessera,
          codiceFiscale: this.formTessera.controls.codiceFiscale.value,
          sede: this.formTessera.controls.sede.value,
          codTipoTessera: this.formTessera.controls.codTipoTessera.value,
          dataInizioAssegnazione: this.formTessera.controls.dataOraInizioAssegnazione.value,
          dataFineAssegnazione: this.formTessera.controls.dataOraFineAssegnazione.value
        };
        this.tessereService.assegnaTessera(this.tesseraSelected.idTessera, request).subscribe({
          next: (data) => {
            this.saved.emit();
            this.toast.success(MESSAGES_CONSTANTS.SUCCESSO_ASSEGNA_TESSERA);
            this.visibleChange.emit(false);
          },
          error: (err) => {
            console.error("Error loading tessere", err);
          }
        });
        break;
      case ACTION_CONSTANTS.REMOVE:
        request = {
          dataOraFineAssegnazione: this.formTessera.controls.dataOraFineAssegnazione.value
        };
        this.tessereService.revocaTessera(this.tesseraSelected.idTessera, request).subscribe({
          next: (data) => {
            this.saved.emit();
            this.toast.success(MESSAGES_CONSTANTS.SUCCESSO_REVOCA_TESSERA);
            this.visibleChange.emit(false);
          },
          error: (err) => {
            console.error("Error loading tessere", err);
          }
        });
        break;
      case ACTION_CONSTANTS.DISABLED:
        request = {
          dataOraIndisponibilita: this.formTessera.controls.dataOraIndisponibilita.value
        };
        this.tessereService.invalidaTessera(this.tesseraSelected.idTessera, request).subscribe({
          next: (data) => {
            this.saved.emit();
            this.toast.success(MESSAGES_CONSTANTS.SUCCESSO_INVALIDA_TESSERA);
            this.visibleChange.emit(false);
          },
          error: (err) => {
            console.error("Error loading tessere", err);
          }
        });
        break;
      default:
        break;
    }
  }
  static {
    this.\u0275fac = function TesseraModalCmpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TesseraModalCmpComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TesseraModalCmpComponent, selectors: [["app-tessera-modal-cmp"]], inputs: { visible: "visible", mode: "mode", tesseraSelected: "tesseraSelected", sediList: "sediList" }, outputs: { visibleChange: "visibleChange", saved: "saved" }, features: [\u0275\u0275NgOnChangesFeature], decls: 59, vars: 17, consts: [["backdrop", "static", 3, "visibleChange", "visible"], [2, "justify-content", "space-between !important"], ["cModalTitle", ""], ["variant", "ghost", "shape", "rounded-pill", "cButton", "", "color", "danger", 3, "click"], [3, "cIcon"], ["cForm", "", "cRow", "", 3, "formGroup", "gutter"], ["xs", "12"], ["xs", "6"], ["cLabel", "", "for", "idTessera", 1, "visually-hidden"], ["cFormControl", "", "id", "idTessera", "formControlName", "idTessera", "placeholder", "Id Tessera", "type", "text"], ["cLabel", "", "for", "codiceInterno", 1, "visually-hidden"], ["cFormControl", "", "id", "codiceInterno", "formControlName", "codiceInterno", "placeholder", "Codice Interno", "type", "text"], ["cLabel", "", "for", "codiceFiscale", 1, "visually-hidden"], ["cFormControl", "", "id", "codiceFiscale", "formControlName", "codiceFiscale", "placeholder", "Codice Fiscale", "type", "text"], ["cLabel", "", "for", "nome", 1, "visually-hidden"], ["cFormControl", "", "id", "nome", "formControlName", "nome", "placeholder", "Nome", "type", "text"], ["cLabel", "", "for", "cognome", 1, "visually-hidden"], ["cFormControl", "", "id", "cognome", "formControlName", "cognome", "placeholder", "Cognome", "type", "text"], ["cLabel", "", "for", "sede", 1, "visually-hidden"], ["formControlName", "sede", "placeholder", "Select sede", 3, "options"], ["cLabel", "", "for", "tipoTessera", 1, "visually-hidden"], ["cSelect", "", "cFormControl", "", "id", "tipoTessera", "placeholder", "Tipo Tessera", "formControlName", "codTipoTessera"], ["value", "S"], ["value", "D"], ["cLabel", "", "for", "dataInizioAssegnazione", 1, "visually-hidden"], ["cFormControl", "", "id", "dataInizioAssegnazione", "formControlName", "dataOraInizioAssegnazione", "placeholder", "Data Inizio Assegnazione", "min", "1900-01-01", "max", "9999-12-31", "todayButtonLabel", "Oggi", 3, "showTodayButton"], ["cLabel", "", "for", "dataFineAssegnazione", 1, "visually-hidden"], ["cFormControl", "", "id", "dataFineAssegnazione", "formControlName", "dataOraFineAssegnazione", "placeholder", "Data Fine Assegnazione", "min", "1900-01-01", "max", "9999-12-31", "specificDateValue", "31/12/9999 00:00:00", "todayButtonLabel", "Oggi", "specificDateButtonLabel", "Fine validit\xE0", 3, "showTodayButton", "showSpecificDateButton"], ["cLabel", "", "for", "dataInvalidit\xE0", 1, "visually-hidden"], ["cFormControl", "", "id", "dataInvalidita", "formControlName", "dataOraIndisponibilita", "placeholder", "Data Invalidit\xE0", "min", "1900-01-01", "max", "9999-12-31", "specificDateValue", "31/12/9999 00:00:00", "todayButtonLabel", "Oggi", "specificDateButtonLabel", "Fine validit\xE0", 3, "showTodayButton", "showSpecificDateButton"], ["cButton", "", "color", "success", 3, "click"]], template: function TesseraModalCmpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-modal", 0);
        \u0275\u0275listener("visibleChange", function TesseraModalCmpComponent_Template_c_modal_visibleChange_0_listener($event) {
          return ctx.visibleChange.emit($event);
        });
        \u0275\u0275elementStart(1, "c-modal-header", 1)(2, "h5", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function TesseraModalCmpComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(5, "svg", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "c-modal-body")(7, "form", 5)(8, "c-col", 6);
        \u0275\u0275element(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "titlecase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "c-col", 7)(13, "label", 8);
        \u0275\u0275text(14, " Id Tessera ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "c-col", 7)(17, "label", 10);
        \u0275\u0275text(18, " Codice Interno ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "c-col", 6)(21, "label", 12);
        \u0275\u0275text(22, " Codice Fiscale ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "c-col", 7)(25, "label", 14);
        \u0275\u0275text(26, " Nome ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "c-col", 7)(29, "label", 16);
        \u0275\u0275text(30, " Cognome ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "c-col", 6)(33, "label", 18);
        \u0275\u0275text(34, " Sede ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "app-autocomplete-select", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "c-col", 6)(37, "label", 20);
        \u0275\u0275text(38, " Tipo Tessera ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "select", 21)(40, "option", 22);
        \u0275\u0275text(41, "Sostitutiva");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 23);
        \u0275\u0275text(43, "Dipendente");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "c-col", 6)(45, "label", 24);
        \u0275\u0275text(46, " Data Inizio Assegnazione ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "app-datepicker", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "c-col", 6)(49, "label", 26);
        \u0275\u0275text(50, " Data Fine Assegnazione ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "app-datepicker", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "c-col", 6)(53, "label", 28);
        \u0275\u0275text(54, " Data Invalidit\xE0 ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "app-datepicker", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "c-modal-footer")(57, "button", 30);
        \u0275\u0275listener("click", function TesseraModalCmpComponent_Template_button_click_57_listener() {
          return ctx.confirm(ctx.mode);
        });
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.visible);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.getTitle(ctx.mode));
        \u0275\u0275advance(2);
        \u0275\u0275property("cIcon", ctx.icons.cilX);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.formTessera)("gutter", 3);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("status-dot status-dot--" + ctx.utilsService.getStatusColor(ctx.tesseraSelected));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, ctx.formTessera.controls.stato.value), " ");
        \u0275\u0275advance(25);
        \u0275\u0275property("options", ctx.sediList);
        \u0275\u0275advance(12);
        \u0275\u0275property("showTodayButton", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("showTodayButton", true)("showSpecificDateButton", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("showTodayButton", true)("showSpecificDateButton", true);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.getConfirmText(ctx.mode), " ");
      }
    }, dependencies: [
      ButtonDirective,
      ModalComponent,
      ModalHeaderComponent,
      ModalTitleDirective,
      ModalBodyComponent,
      ModalFooterComponent,
      IconDirective,
      ColComponent,
      FormControlDirective,
      FormDirective,
      FormLabelDirective,
      GutterDirective,
      RowDirective,
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
      FormsModule,
      DatepickerComponent,
      FormSelectDirective,
      AutocompleteSelectComponent,
      TitleCasePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TesseraModalCmpComponent, [{
    type: Component,
    args: [{ selector: "app-tessera-modal-cmp", standalone: true, imports: [
      ButtonDirective,
      ModalComponent,
      ModalHeaderComponent,
      ModalTitleDirective,
      ModalBodyComponent,
      ModalFooterComponent,
      IconDirective,
      ColComponent,
      FormControlDirective,
      FormDirective,
      FormLabelDirective,
      GutterDirective,
      RowDirective,
      ReactiveFormsModule,
      FormsModule,
      DatepickerComponent,
      FormSelectDirective,
      AutocompleteSelectComponent,
      TitleCasePipe
    ], template: `<c-modal\r
  [visible]="visible"\r
  backdrop="static"\r
  (visibleChange)="visibleChange.emit($event)"\r
>\r
  <c-modal-header style="justify-content: space-between !important">\r
    <h5 cModalTitle>{{ getTitle(mode) }}</h5>\r
\r
    <button\r
      (click)="close()"\r
      variant="ghost"\r
      shape="rounded-pill"\r
      cButton\r
      color="danger"\r
    >\r
      <svg [cIcon]="icons.cilX"></svg>\r
    </button>\r
  </c-modal-header>\r
  <c-modal-body>\r
    <form [formGroup]="formTessera" [gutter]="3" cForm cRow>\r
      <c-col xs="12">\r
        <span\r
          [class]="\r
            'status-dot status-dot--' +\r
            this.utilsService.getStatusColor(tesseraSelected)\r
          "\r
        ></span>\r
        {{formTessera.controls.stato.value | titlecase }}\r
      </c-col>\r
      <c-col xs="6">\r
        <label cLabel class="visually-hidden" for="idTessera">\r
          Id Tessera\r
        </label>\r
        <input\r
          cFormControl\r
          id="idTessera"\r
          formControlName="idTessera"\r
          placeholder="Id Tessera"\r
          type="text"\r
        />\r
      </c-col>\r
      <c-col xs="6">\r
        <label cLabel class="visually-hidden" for="codiceInterno">\r
          Codice Interno\r
        </label>\r
        <input\r
          cFormControl\r
          id="codiceInterno"\r
          formControlName="codiceInterno"\r
          placeholder="Codice Interno"\r
          type="text"\r
        />\r
      </c-col>\r
      <c-col xs="12">\r
        <label cLabel class="visually-hidden" for="codiceFiscale">\r
          Codice Fiscale\r
        </label>\r
        <input\r
          cFormControl\r
          id="codiceFiscale"\r
          formControlName="codiceFiscale"\r
          placeholder="Codice Fiscale"\r
          type="text"\r
        />\r
      </c-col>\r
      <c-col xs="6">\r
        <label cLabel class="visually-hidden" for="nome"> Nome </label>\r
        <input\r
          cFormControl\r
          id="nome"\r
          formControlName="nome"\r
          placeholder="Nome"\r
          type="text"\r
        />\r
      </c-col>\r
      <c-col xs="6">\r
        <label cLabel class="visually-hidden" for="cognome"> Cognome </label>\r
        <input\r
          cFormControl\r
          id="cognome"\r
          formControlName="cognome"\r
          placeholder="Cognome"\r
          type="text"\r
        />\r
      </c-col>\r
      <c-col xs="12">\r
        <label cLabel class="visually-hidden" for="sede"> Sede </label>\r
        <app-autocomplete-select\r
          formControlName="sede"\r
          [options]="sediList"\r
          placeholder="Select sede"\r
        />\r
      </c-col>\r
      <c-col xs="12">\r
        <label cLabel class="visually-hidden" for="tipoTessera">\r
          Tipo Tessera\r
        </label>\r
        <select\r
          cSelect\r
          cFormControl\r
          id="tipoTessera"\r
          placeholder="Tipo Tessera"\r
          formControlName="codTipoTessera"\r
        >\r
          <option value="S">Sostitutiva</option>\r
          <option value="D">Dipendente</option>\r
        </select>\r
      </c-col>\r
      <c-col xs="12">\r
        <label cLabel class="visually-hidden" for="dataInizioAssegnazione">\r
          Data Inizio Assegnazione\r
        </label>\r
        <app-datepicker\r
          cFormControl\r
          id="dataInizioAssegnazione"\r
          formControlName="dataOraInizioAssegnazione"\r
          placeholder="Data Inizio Assegnazione"\r
          min="1900-01-01"\r
          max="9999-12-31"\r
          [showTodayButton]="true"\r
          todayButtonLabel="Oggi"\r
        />\r
      </c-col>\r
      <c-col xs="12">\r
        <label cLabel class="visually-hidden" for="dataFineAssegnazione">\r
          Data Fine Assegnazione\r
        </label>\r
        <app-datepicker\r
          cFormControl\r
          id="dataFineAssegnazione"\r
          formControlName="dataOraFineAssegnazione"\r
          placeholder="Data Fine Assegnazione"\r
          min="1900-01-01"\r
          max="9999-12-31"\r
          [showTodayButton]="true"\r
          [showSpecificDateButton]="true"\r
          specificDateValue="31/12/9999 00:00:00"\r
          todayButtonLabel="Oggi"\r
          specificDateButtonLabel="Fine validit\xE0"\r
        />\r
      </c-col>\r
      <c-col xs="12">\r
        <label cLabel class="visually-hidden" for="dataInvalidit\xE0">\r
          Data Invalidit\xE0\r
        </label>\r
        <app-datepicker\r
          cFormControl\r
          id="dataInvalidita"\r
          formControlName="dataOraIndisponibilita"\r
          placeholder="Data Invalidit\xE0"\r
          min="1900-01-01"\r
          max="9999-12-31"\r
          [showTodayButton]="true"\r
          [showSpecificDateButton]="true"\r
          specificDateValue="31/12/9999 00:00:00"\r
          todayButtonLabel="Oggi"\r
          specificDateButtonLabel="Fine validit\xE0"\r
        />\r
      </c-col>\r
    </form>\r
  </c-modal-body>\r
  <c-modal-footer>\r
    <button cButton color="success" (click)="confirm(mode)">\r
      {{ getConfirmText(mode) }}\r
    </button>\r
  </c-modal-footer>\r
</c-modal>\r
` }]
  }], () => [], { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], mode: [{
    type: Input
  }], tesseraSelected: [{
    type: Input
  }], sediList: [{
    type: Input
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TesseraModalCmpComponent, { className: "TesseraModalCmpComponent", filePath: "src/components/modals/tessera-modal-cmp/tessera-modal-cmp.component.ts", lineNumber: 56 });
})();

// src/components/modals/tessera-history/tessera-history.component.ts
function TesseraHistoryComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.codFiscale);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.cognome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.dataOraInizioAssegnazione);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.dataOraFineAssegnazione);
  }
}
var TesseraHistoryComponent = class _TesseraHistoryComponent {
  constructor() {
    this.visible = false;
    this.visibleChange = new EventEmitter();
    this.tesseraSelectedHistory = [];
    this.icons = { cilX };
  }
  close() {
    this.visibleChange.emit(false);
  }
  confirm() {
    this.visibleChange.emit(false);
  }
  static {
    this.\u0275fac = function TesseraHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TesseraHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TesseraHistoryComponent, selectors: [["app-tessera-history"]], inputs: { visible: "visible", tesseraSelectedHistory: "tesseraSelectedHistory" }, outputs: { visibleChange: "visibleChange" }, decls: 25, vars: 2, consts: [["backdrop", "static", "size", "lg", 3, "visibleChange", "visible"], [2, "justify-content", "space-between !important"], ["cModalTitle", ""], ["variant", "ghost", "shape", "rounded-pill", "cButton", "", "color", "danger", 3, "click"], [3, "cIcon"], ["cTable", ""]], template: function TesseraHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-modal", 0);
        \u0275\u0275listener("visibleChange", function TesseraHistoryComponent_Template_c_modal_visibleChange_0_listener($event) {
          return ctx.visibleChange.emit($event);
        });
        \u0275\u0275elementStart(1, "c-modal-header", 1)(2, "h5", 2);
        \u0275\u0275text(3, "Cronologia Tessera");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function TesseraHistoryComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(5, "svg", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "c-modal-body")(7, "table", 5)(8, "thead")(9, "tr")(10, "th");
        \u0275\u0275text(11, "Ordine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Codice Fiscale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Cognome");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Nome");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Data Inizio Assegnazione");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Data Fine Assegnazione");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, TesseraHistoryComponent_For_24_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.visible);
        \u0275\u0275advance(5);
        \u0275\u0275property("cIcon", ctx.icons.cilX);
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.tesseraSelectedHistory);
      }
    }, dependencies: [
      ButtonDirective,
      ModalBodyComponent,
      ModalComponent,
      ModalHeaderComponent,
      ModalTitleDirective,
      IconDirective,
      TableDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TesseraHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-tessera-history", imports: [
      ButtonDirective,
      ModalBodyComponent,
      ModalComponent,
      ModalHeaderComponent,
      ModalTitleDirective,
      IconDirective,
      TableDirective
    ], template: '<c-modal\r\n  [visible]="visible"\r\n  backdrop="static"\r\n  (visibleChange)="visibleChange.emit($event)"\r\n  size="lg"\r\n>\r\n  <c-modal-header style="justify-content: space-between !important">\r\n    <h5 cModalTitle>Cronologia Tessera</h5>\r\n\r\n    <button\r\n      (click)="close()"\r\n      variant="ghost"\r\n      shape="rounded-pill"\r\n      cButton\r\n      color="danger"\r\n    >\r\n      <svg [cIcon]="icons.cilX"></svg>\r\n    </button>\r\n  </c-modal-header>\r\n  <c-modal-body>\r\n    <table cTable>\r\n      <thead>\r\n        <tr>\r\n          <th>Ordine</th>\r\n          <th>Codice Fiscale</th>\r\n          <th>Cognome</th>\r\n          <th>Nome</th>\r\n          <th>Data Inizio Assegnazione</th>\r\n          <th>Data Fine Assegnazione</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        @for (row of tesseraSelectedHistory; track $index) {\r\n          <tr>\r\n            <td>{{$index+1}}</td>\r\n            <td>{{row.codFiscale}}</td>\r\n            <td>{{row.cognome}}</td>\r\n            <td>{{row.nome}}</td>\r\n            <td>{{row.dataOraInizioAssegnazione}}</td>\r\n            <td>{{row.dataOraFineAssegnazione}}</td>\r\n          </tr>\r\n        }\r\n      </tbody>\r\n    </table>\r\n  </c-modal-body>\r\n  <!-- <c-modal-footer>\r\n    <button cButton color="danger" (click)="confirm()">Chiudi</button>\r\n  </c-modal-footer> -->\r\n</c-modal>\r\n' }]
  }], null, { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], tesseraSelectedHistory: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TesseraHistoryComponent, { className: "TesseraHistoryComponent", filePath: "src/components/modals/tessera-history/tessera-history.component.ts", lineNumber: 20 });
})();

// src/components/modals/tessera-update-multiplo/tessera-update-multiplo.component.ts
function TesseraUpdateMultiploComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 6)(1, "label", 8);
    \u0275\u0275text(2, " Sede ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-autocomplete-select", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r0.sediList);
  }
}
function TesseraUpdateMultiploComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 6)(1, "label", 10);
    \u0275\u0275text(2, " Data Inizio Assegnazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-datepicker", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "c-col", 6)(5, "label", 12);
    \u0275\u0275text(6, " Data Fine Assegnazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-datepicker", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("showTodayButton", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("showTodayButton", true)("showSpecificDateButton", true);
  }
}
function TesseraUpdateMultiploComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 6)(1, "label", 14);
    \u0275\u0275text(2, " Data Invalidit\xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-datepicker", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("showTodayButton", true)("showSpecificDateButton", true);
  }
}
var TesseraUpdateMultiploComponent = class _TesseraUpdateMultiploComponent {
  constructor() {
    this.visible = false;
    this.visibleChange = new EventEmitter();
    this.tesseraSelectedHistory = [];
    this.sediList = [];
    this.saved = new EventEmitter();
    this._mode = "";
    this.form = new FormGroup({
      sede: new FormControl(""),
      codTipoTessera: new FormControl(""),
      dataOraInizioAssegnazione: new FormControl(null),
      dataOraFineAssegnazione: new FormControl(null),
      dataOraIndisponibilita: new FormControl(null)
    });
    this.icons = { cilX };
  }
  set mode(value) {
    this._mode = value;
    this.updateValidatorsByMode();
  }
  get mode() {
    return this._mode;
  }
  getTitle(mode) {
    switch (mode) {
      case "cambia-sede":
        return "Cambia Sede Massivo";
      case "cambia-validita":
        return "Cambia Validit\xE0 Massivo";
      case "indisponibilita":
        return "Indisponibilit\xE0 Tessera Massiva";
      default:
        return "Modifica Tessere";
    }
  }
  updateValidatorsByMode() {
    const sede = this.form.controls.sede;
    const dataInizio = this.form.controls.dataOraInizioAssegnazione;
    const dataFine = this.form.controls.dataOraFineAssegnazione;
    const dataIndisponibilita = this.form.controls.dataOraIndisponibilita;
    sede.clearValidators();
    dataInizio.clearValidators();
    dataFine.clearValidators();
    dataIndisponibilita.clearValidators();
    if (this.mode === "cambia-sede") {
      sede.setValidators([Validators.required]);
    }
    if (this.mode === "cambia-validita") {
      dataInizio.setValidators([Validators.required]);
      dataFine.setValidators([Validators.required]);
    }
    if (this.mode === "indisponibilita") {
      dataIndisponibilita.setValidators([Validators.required]);
    }
    sede.updateValueAndValidity({ emitEvent: false });
    dataInizio.updateValueAndValidity({ emitEvent: false });
    dataFine.updateValueAndValidity({ emitEvent: false });
    dataIndisponibilita.updateValueAndValidity({ emitEvent: false });
  }
  close() {
    this.form.reset();
    this.visibleChange.emit(false);
  }
  confirm() {
    this.updateValidatorsByMode();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saved.emit();
    this.visibleChange.emit(false);
  }
  static {
    this.\u0275fac = function TesseraUpdateMultiploComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TesseraUpdateMultiploComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TesseraUpdateMultiploComponent, selectors: [["app-tessera-update-multiplo"]], inputs: { visible: "visible", tesseraSelectedHistory: "tesseraSelectedHistory", sediList: "sediList", mode: "mode" }, outputs: { visibleChange: "visibleChange", saved: "saved" }, decls: 14, vars: 9, consts: [["backdrop", "static", "size", "lg", 3, "visibleChange", "visible"], [2, "justify-content", "space-between !important"], ["cModalTitle", ""], ["variant", "ghost", "shape", "rounded-pill", "cButton", "", "color", "danger", 3, "click"], [3, "cIcon"], ["cForm", "", "cRow", "", 3, "formGroup", "gutter"], ["xs", "12"], ["cButton", "", "color", "success", 3, "click", "disabled"], ["cLabel", "", "for", "sede", 1, "visually-hidden"], ["formControlName", "sede", "placeholder", "Select sede", 3, "options"], ["cLabel", "", "for", "dataInizioAssegnazione", 1, "visually-hidden"], ["cFormControl", "", "id", "dataInizioAssegnazione", "formControlName", "dataOraInizioAssegnazione", "placeholder", "Data Inizio Assegnazione", "min", "1900-01-01", "max", "9999-12-31", "todayButtonLabel", "Oggi", 3, "showTodayButton"], ["cLabel", "", "for", "dataFineAssegnazione", 1, "visually-hidden"], ["cFormControl", "", "id", "dataFineAssegnazione", "formControlName", "dataOraFineAssegnazione", "placeholder", "Data Fine Assegnazione", "min", "1900-01-01", "max", "9999-12-31", "specificDateValue", "31/12/9999 00:00:00", "todayButtonLabel", "Oggi", "specificDateButtonLabel", "Fine validit\xE0", 3, "showTodayButton", "showSpecificDateButton"], ["cLabel", "", "for", "dataInvalidit\xE0", 1, "visually-hidden"], ["cFormControl", "", "id", "dataInvalidita", "formControlName", "dataOraIndisponibilita", "placeholder", "Data Invalidit\xE0", "min", "1900-01-01", "max", "9999-12-31", "specificDateValue", "31/12/9999 00:00:00", "todayButtonLabel", "Oggi", "specificDateButtonLabel", "Fine validit\xE0", 3, "showTodayButton", "showSpecificDateButton"]], template: function TesseraUpdateMultiploComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-modal", 0);
        \u0275\u0275listener("visibleChange", function TesseraUpdateMultiploComponent_Template_c_modal_visibleChange_0_listener($event) {
          return ctx.visibleChange.emit($event);
        });
        \u0275\u0275elementStart(1, "c-modal-header", 1)(2, "h5", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function TesseraUpdateMultiploComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(5, "svg", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "c-modal-body")(7, "form", 5);
        \u0275\u0275conditionalCreate(8, TesseraUpdateMultiploComponent_Conditional_8_Template, 4, 1, "c-col", 6);
        \u0275\u0275conditionalCreate(9, TesseraUpdateMultiploComponent_Conditional_9_Template, 8, 3);
        \u0275\u0275conditionalCreate(10, TesseraUpdateMultiploComponent_Conditional_10_Template, 4, 2, "c-col", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "c-modal-footer")(12, "button", 7);
        \u0275\u0275listener("click", function TesseraUpdateMultiploComponent_Template_button_click_12_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(13, " Aggiorna Massivo ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.visible);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.getTitle(ctx.mode));
        \u0275\u0275advance(2);
        \u0275\u0275property("cIcon", ctx.icons.cilX);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form)("gutter", 3);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode == "cambia-sede" ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode == "cambia-validita" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode == "indisponibilita" ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.form.valid);
      }
    }, dependencies: [
      ButtonDirective,
      ModalBodyComponent,
      ModalComponent,
      ModalHeaderComponent,
      ModalFooterComponent,
      ModalTitleDirective,
      IconDirective,
      AutocompleteSelectComponent,
      GutterDirective,
      RowDirective,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormsModule,
      DatepickerComponent,
      ColComponent,
      FormDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TesseraUpdateMultiploComponent, [{
    type: Component,
    args: [{ selector: "app-tessera-update-multiplo", imports: [
      ButtonDirective,
      ModalBodyComponent,
      ModalComponent,
      ModalHeaderComponent,
      ModalFooterComponent,
      ModalTitleDirective,
      IconDirective,
      AutocompleteSelectComponent,
      GutterDirective,
      RowDirective,
      ReactiveFormsModule,
      FormsModule,
      DatepickerComponent,
      ColComponent,
      FormDirective
    ], template: '<c-modal\r\n  [visible]="visible"\r\n  backdrop="static"\r\n  (visibleChange)="visibleChange.emit($event)"\r\n  size="lg"\r\n>\r\n  <c-modal-header style="justify-content: space-between !important">\r\n    <h5 cModalTitle>{{ getTitle(mode) }}</h5>\r\n\r\n    <button\r\n      (click)="close()"\r\n      variant="ghost"\r\n      shape="rounded-pill"\r\n      cButton\r\n      color="danger"\r\n    >\r\n      <svg [cIcon]="icons.cilX"></svg>\r\n    </button>\r\n  </c-modal-header>\r\n  <c-modal-body>\r\n    <form [formGroup]="form" [gutter]="3" cForm cRow>\r\n      @if (mode == "cambia-sede") {\r\n        <c-col xs="12">\r\n          <label cLabel class="visually-hidden" for="sede"> Sede </label>\r\n          <app-autocomplete-select\r\n            formControlName="sede"\r\n            [options]="sediList"\r\n            placeholder="Select sede"\r\n          />\r\n        </c-col>\r\n      }\r\n      @if (mode == "cambia-validita") {\r\n        <c-col xs="12">\r\n          <label cLabel class="visually-hidden" for="dataInizioAssegnazione">\r\n            Data Inizio Assegnazione\r\n          </label>\r\n          <app-datepicker\r\n            cFormControl\r\n            id="dataInizioAssegnazione"\r\n            formControlName="dataOraInizioAssegnazione"\r\n            placeholder="Data Inizio Assegnazione"\r\n            min="1900-01-01"\r\n            max="9999-12-31"\r\n            [showTodayButton]="true"\r\n            todayButtonLabel="Oggi"\r\n          />\r\n        </c-col>\r\n        <c-col xs="12">\r\n          <label cLabel class="visually-hidden" for="dataFineAssegnazione">\r\n            Data Fine Assegnazione\r\n          </label>\r\n          <app-datepicker\r\n            cFormControl\r\n            id="dataFineAssegnazione"\r\n            formControlName="dataOraFineAssegnazione"\r\n            placeholder="Data Fine Assegnazione"\r\n            min="1900-01-01"\r\n            max="9999-12-31"\r\n            [showTodayButton]="true"\r\n            [showSpecificDateButton]="true"\r\n            specificDateValue="31/12/9999 00:00:00"\r\n            todayButtonLabel="Oggi"\r\n            specificDateButtonLabel="Fine validit\xE0"\r\n          />\r\n        </c-col>\r\n      }\r\n      @if (mode == "indisponibilita") {\r\n        <c-col xs="12">\r\n          <label cLabel class="visually-hidden" for="dataInvalidit\xE0">\r\n            Data Invalidit\xE0\r\n          </label>\r\n          <app-datepicker\r\n            cFormControl\r\n            id="dataInvalidita"\r\n            formControlName="dataOraIndisponibilita"\r\n            placeholder="Data Invalidit\xE0"\r\n            min="1900-01-01"\r\n            max="9999-12-31"\r\n            [showTodayButton]="true"\r\n            [showSpecificDateButton]="true"\r\n            specificDateValue="31/12/9999 00:00:00"\r\n            todayButtonLabel="Oggi"\r\n            specificDateButtonLabel="Fine validit\xE0"\r\n          />\r\n        </c-col>\r\n      }\r\n    </form>\r\n  </c-modal-body>\r\n  <c-modal-footer>\r\n    <button cButton color="success" (click)="confirm()" [disabled]="!form.valid">\r\n      Aggiorna Massivo\r\n    </button>\r\n  </c-modal-footer>\r\n</c-modal>\r\n' }]
  }], null, { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], tesseraSelectedHistory: [{
    type: Input
  }], sediList: [{
    type: Input
  }], saved: [{
    type: Output
  }], mode: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TesseraUpdateMultiploComponent, { className: "TesseraUpdateMultiploComponent", filePath: "src/components/modals/tessera-update-multiplo/tessera-update-multiplo.component.ts", lineNumber: 31 });
})();

// src/app/views/pages/lista-tessere/lista-tessere.datagrid.ts
function createTesseraSearchConfig(sediList) {
  return {
    enabled: true,
    fields: [
      { field: "idTessera", label: "ID Tessera", type: "text", size: "2", operator: "contains" },
      { field: "sede", label: "Sede Tessera", type: "autocomplete", size: "5", operator: "in", options: sediList, multiple: true },
      {
        field: "codTipoTessera",
        label: "Tipo Tessera",
        type: "autocomplete",
        operator: "equals",
        options: [
          {
            label: "Sostitutiva",
            value: "S"
          },
          {
            label: "Dipendente",
            value: "D"
          }
        ],
        size: "2"
      },
      {
        field: "stato",
        label: "Stato",
        type: "autocomplete",
        size: "3",
        operator: "in",
        options: [
          {
            label: TESSERE_STATUS_MESSAGES.LIBERA_DESC,
            value: TESSERE_STATUS_MESSAGES.LIBERA
          },
          {
            label: TESSERE_STATUS_MESSAGES.OCCUPATA_DESC,
            value: TESSERE_STATUS_MESSAGES.OCCUPATA
          },
          {
            label: TESSERE_STATUS_MESSAGES.INDISPONIBILE_DESC,
            value: TESSERE_STATUS_MESSAGES.INDISPONIBILE
          },
          {
            label: TESSERE_STATUS_MESSAGES.ND_DESC,
            value: TESSERE_STATUS_MESSAGES.ND
          }
        ],
        multiple: true
      },
      { field: "codiceFiscale", label: "Codice Fiscale", type: "text", size: "4", operator: "contains" },
      { field: "nome", label: "Nome", type: "text", operator: "contains", size: "3" },
      { field: "cognome", label: "Cognome", type: "text", operator: "contains", size: "3" }
    ]
  };
}
var TESSERE_SELECTION_SUMMARY_CONFIG = {
  enabled: true,
  label: "Tessere selezionate",
  displayField: "idTessera",
  maxHeight: "90px",
  clearButton: true
};
var TESSERE_SORTING_CONFIG = {
  enabled: false,
  defaultSorting: {
    field: "idTessera",
    direction: "desc"
  }
};
var TESSERE_EMPTY_STATE_CONFIG = {
  description: "Try changing filters"
};
var TESSERE_LOADING_STATE_CONFIG = {
  text: "Loading data..."
};
var TESSERE_URL_STATE_CONFIG = {
  enabled: true
};
function createGridToolbar(openModalAggiungi, exportCsv, importCsv, openStampa, openBulkUpdate) {
  return {
    enabled: true,
    actions: [
      {
        label: "Aggiungi Tessere",
        icon: cilPlus,
        color: "success",
        action: openModalAggiungi
      },
      {
        label: "Export CSV",
        icon: cilCloudDownload,
        color: "primary",
        action: exportCsv,
        disabled: () => true
      },
      {
        label: "Import CSV",
        icon: cilCloudUpload,
        color: "primary",
        action: importCsv,
        disabled: () => true
      },
      {
        label: "Stampa Tessere",
        icon: cilPrint,
        color: "secondary",
        visible: (ctx) => ctx.selectedRows.filter((item) => item.stato === TESSERE_STATUS_MESSAGES.OCCUPATA).length !== 0,
        action: (ctx) => {
          openStampa(ctx.selectedRows);
        }
      },
      {
        label: "Cambia Sede",
        icon: cilBuilding,
        color: "info",
        visible: (ctx) => ctx.selectedRows.filter((item) => item.stato !== TESSERE_STATUS_MESSAGES.INDISPONIBILE).length !== 0,
        action: (ctx) => {
          openBulkUpdate("cambia-sede");
        }
      },
      {
        label: "Cambia Validit\xE0",
        icon: cilAvTimer,
        color: "warning",
        visible: (ctx) => ctx.selectedRows.filter((item) => item.stato === TESSERE_STATUS_MESSAGES.OCCUPATA).length !== 0,
        action: (ctx) => {
          openBulkUpdate("cambia-validita");
        }
      },
      {
        label: "Indisponibilit\xE0",
        icon: cilBan,
        color: "danger",
        visible: (ctx) => ctx.selectedRows.length !== 0,
        action: (ctx) => {
          openBulkUpdate("indisponibilita");
        }
      }
    ]
  };
}
function createGridColumn(actionTemplate, statusTemplate) {
  return [
    {
      field: "idTessera",
      header: "ID",
      width: "80px"
    },
    {
      field: "codTipoTessera",
      header: "Tipo",
      render: (row) => row.codTipoTessera === "D" ? "Dipendente" : "Sostitutiva"
    },
    {
      field: "sede",
      header: "Sede Tessera"
    },
    {
      field: "persona",
      header: "Persona",
      render: (row) => row.cognome ? `${row.cognome} ${row.nome} <br/> <small> <strong>${row.codiceFiscale} </strong></small>` : ""
    },
    // {
    //   field: 'codiceFiscale',
    //   header: 'CF',
    // },
    {
      field: "codiceInterno",
      header: "Codice Interno",
      render: (row) => row.codiceInterno ? `${row.codiceInterno}` : ""
    },
    // {
    //   field: 'dataOraIndisponibilita',
    //   header: 'Data Indisponibilità',
    // },
    {
      field: "assegnazione",
      header: "Assegnazione",
      render: (row) => `
          <small>
            <strong> Inizio: </strong>
            ${row.dataOraInizioAssegnazione || "-"}
          </small> <br/>
          <small>
            <strong> Fine: </strong>
            ${row.dataOraFineAssegnazione || "-"}
          </small> <br/>
          <small>
            <strong> Indisponibilit\xE0: </strong>
            ${row.dataOraIndisponibilita || "-"}
          </small>
        `,
      width: "350px"
    },
    {
      field: "stato",
      header: "Stato",
      template: statusTemplate
    },
    {
      field: "actions",
      header: "",
      template: actionTemplate
    }
  ];
}

// src/components/data-grid/data-grid-utils.ts
function buildDataGridState(searchConfig, initialState, queryParamMap) {
  const hasUrlParams = searchConfig.fields.some((field) => queryParamMap.has(field.field));
  if (hasUrlParams) {
    return {
      filters: buildFiltersFromUrl(searchConfig, queryParamMap),
      sorting: initialState.sorting ?? null,
      pagination: initialState.pagination
    };
  }
  return initialState;
}
function buildFiltersFromUrl(searchConfig, queryParamMap) {
  return searchConfig.fields.filter((field) => queryParamMap.has(field.field)).map((field) => {
    let value = queryParamMap.get(field.field);
    if (field.type === "checkbox") {
      value = value === "true";
    }
    if (field.multiple && typeof value === "string") {
      value = value.split(",").filter(Boolean);
    }
    return {
      field: field.field,
      operator: field.operator ?? "contains",
      value
    };
  });
}
function buildUrlQueryParamsFromState(searchConfig, request) {
  const queryParams = {};
  searchConfig.fields.forEach((field) => {
    const filter = request.filters.find((f) => f.field === field.field);
    if (!filter) {
      return;
    }
    const value = filter.value;
    if (Array.isArray(value)) {
      if (value.length > 0) {
        queryParams[field.field] = value.join(",");
      }
      return;
    }
    if (field.type === "checkbox") {
      queryParams[field.field] = value === true ? true : null;
      return;
    }
    if (value !== null && value !== void 0 && value !== "") {
      queryParams[field.field] = value;
    }
  });
  return queryParams;
}

// src/components/modals/tessera-stampa/tessera-stampa.component.ts
var arrowFn0 = (ctx, view) => (item) => item.idTessera;
var TesseraStampaComponent = class _TesseraStampaComponent {
  constructor() {
    this.tessereService = inject(TessereService);
    this.toast = inject(ToastService);
    this.visible = false;
    this.visibleChange = new EventEmitter();
    this.tessereToPrint = [];
    this.mode = [];
    this.icons = { cilX };
    this.form = new FormGroup({
      tipoStampa: new FormControl("", [Validators.required])
    });
  }
  bulkPrint(rows) {
    let indispArr = rows.filter((item) => item.stato == TESSERE_STATUS_MESSAGES.INDISPONIBILE);
    let indispArrId = indispArr.map((item) => item.idTessera);
    let libereArr = rows.filter((item) => item.stato == TESSERE_STATUS_MESSAGES.LIBERA);
    let libereArrId = libereArr.map((item) => item.idTessera);
    if (indispArr.length > 0 || libereArr.length > 0) {
      let tessereIndStr = indispArr.length > 0 ? "<br/><strong> Tessere indisponibili: " + indispArrId.join(" , ") + "</strong>" : "";
      let tessereLibStr = libereArr.length > 0 ? "<br/><strong> Tessere libere: " + libereArrId.join(" , ") + "</strong>" : "";
      this.toast.error(`Nella lista sono presenti tessere indisponibili o libere. ${tessereIndStr} ${tessereLibStr}`);
      return;
    }
    this.tessereService.stampaTessere(rows, this.form.controls.tipoStampa.value || "pdf").subscribe({
      next: (response) => {
        const blob = response.body;
        let fileName = "DocumentoRisposta.pdf";
        const disposition = response.headers.get("Content-Disposition");
        if (disposition) {
          const match = disposition.match(/filename="?([^"]+)"?/);
          if (match) {
            fileName = match[1];
          }
        }
        const url = window.URL.createObjectURL(blob);
        window.open(url, "_blank", "noopener,noreferrer");
        window.URL.revokeObjectURL(url);
      }
    });
    this.visibleChange.emit(false);
  }
  close() {
    this.form.reset();
    this.visibleChange.emit(false);
  }
  static {
    this.\u0275fac = function TesseraStampaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TesseraStampaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TesseraStampaComponent, selectors: [["app-tessera-stampa"]], inputs: { visible: "visible", tessereToPrint: "tessereToPrint", mode: "mode" }, outputs: { visibleChange: "visibleChange" }, decls: 21, vars: 7, consts: [["backdrop", "static", "size", "lg", 3, "visibleChange", "visible"], [2, "justify-content", "space-between !important"], ["cModalTitle", ""], ["variant", "ghost", "shape", "rounded-pill", "cButton", "", "color", "danger", 3, "click"], [3, "cIcon"], ["cForm", "", "cRow", "", 3, "formGroup", "gutter"], ["xs", "12"], ["cLabel", "", "for", "tipoStampa", 1, "visually-hidden"], ["cSelect", "", "cFormControl", "", "id", "tipoStampa", "placeholder", "Tipo Stampa", "formControlName", "tipoStampa"], ["value", "pdf"], ["value", "docx"], ["cButton", "", "color", "success", 3, "click", "disabled"]], template: function TesseraStampaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-modal", 0);
        \u0275\u0275listener("visibleChange", function TesseraStampaComponent_Template_c_modal_visibleChange_0_listener($event) {
          return ctx.visibleChange.emit($event);
        });
        \u0275\u0275elementStart(1, "c-modal-header", 1)(2, "h5", 2);
        \u0275\u0275text(3, "Stampa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function TesseraStampaComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(5, "svg", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "c-modal-body")(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 5)(10, "c-col", 6)(11, "label", 7);
        \u0275\u0275text(12, " Tipo Stampa ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 8)(14, "option", 9);
        \u0275\u0275text(15, "PDF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 10);
        \u0275\u0275text(17, "Word");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "c-modal-footer")(19, "button", 11);
        \u0275\u0275listener("click", function TesseraStampaComponent_Template_button_click_19_listener() {
          return ctx.bulkPrint(ctx.tessereToPrint);
        });
        \u0275\u0275text(20, " Stampa ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.visible);
        \u0275\u0275advance(5);
        \u0275\u0275property("cIcon", ctx.icons.cilX);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Le seguenti tessere saranno mandate in stampa: ", ctx.tessereToPrint.map(\u0275\u0275arrowFunction(6, arrowFn0, ctx)).join(","));
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form)("gutter", 3);
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", !ctx.form.valid);
      }
    }, dependencies: [
      ButtonDirective,
      ModalBodyComponent,
      ModalComponent,
      ModalHeaderComponent,
      ModalFooterComponent,
      ModalTitleDirective,
      IconDirective,
      FormSelectDirective,
      GutterDirective,
      RowDirective,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormsModule,
      ColComponent,
      FormDirective,
      FormLabelDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TesseraStampaComponent, [{
    type: Component,
    args: [{ selector: "app-tessera-stampa", imports: [
      ButtonDirective,
      ModalBodyComponent,
      ModalComponent,
      ModalHeaderComponent,
      ModalFooterComponent,
      ModalTitleDirective,
      IconDirective,
      FormSelectDirective,
      GutterDirective,
      RowDirective,
      ReactiveFormsModule,
      FormsModule,
      ColComponent,
      FormDirective,
      FormLabelDirective
    ], template: `<c-modal\r
  [visible]="visible"\r
  backdrop="static"\r
  (visibleChange)="visibleChange.emit($event)"\r
  size="lg"\r
>\r
  <c-modal-header style="justify-content: space-between !important">\r
    <h5 cModalTitle>Stampa</h5>\r
\r
    <button\r
      (click)="close()"\r
      variant="ghost"\r
      shape="rounded-pill"\r
      cButton\r
      color="danger"\r
    >\r
      <svg [cIcon]="icons.cilX"></svg>\r
    </button>\r
  </c-modal-header>\r
  <c-modal-body>\r
    <p>Le seguenti tessere saranno mandate in stampa: {{tessereToPrint.map(item => item.idTessera).join(',')}}</p>\r
    <form [formGroup]="form" [gutter]="3" cForm cRow>\r
      <c-col xs="12">\r
        <label cLabel class="visually-hidden" for="tipoStampa">\r
          Tipo Stampa\r
        </label>\r
        <select\r
          cSelect\r
          cFormControl\r
          id="tipoStampa"\r
          placeholder="Tipo Stampa"\r
          formControlName="tipoStampa"\r
        >\r
          <option value="pdf">PDF</option>\r
          <option value="docx">Word</option>\r
        </select>\r
      </c-col>\r
    </form>\r
  </c-modal-body>\r
  <c-modal-footer>\r
    <button cButton color="success" (click)="bulkPrint(tessereToPrint)" [disabled]="!form.valid">\r
      Stampa\r
    </button>\r
  </c-modal-footer>\r
</c-modal>\r
` }]
  }], null, { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], tessereToPrint: [{
    type: Input
  }], mode: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TesseraStampaComponent, { className: "TesseraStampaComponent", filePath: "src/components/modals/tessera-stampa/tessera-stampa.component.ts", lineNumber: 33 });
})();

// src/app/views/pages/lista-tessere/lista-tessere.component.ts
var _c0 = ["actionTemplate"];
var _c1 = ["contextActionTemplate"];
var _c2 = ["statusTemplate"];
var _c3 = ["selectedBadge"];
var _forTrack02 = ($index, $item) => $item.name;
function ListaTessereComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-datagrid", 10);
    \u0275\u0275listener("stateChange", function ListaTessereComponent_Conditional_0_Template_app_datagrid_stateChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadData($event));
    })("selectionChange", function ListaTessereComponent_Conditional_0_Template_app_datagrid_selectionChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelectionChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("columns", ctx_r2.columns)("rows", ctx_r2.tessere())("searchConfig", ctx_r2.searchConfig)("toolbarConfig", ctx_r2.toolbarConfig)("paginationConfig", ctx_r2.paginationConfig)("sortingConfig", ctx_r2.sortingConfig)("loadingConfig", ctx_r2.loadingConfig)("loading", ctx_r2.datagridLoading())("emptyStateConfig", ctx_r2.emptyStateConfig)("initialState", ctx_r2.gridState())("contextMenuConfig", ctx_r2.contextMenuConfig)("selectionConfig", ctx_r2.selectionConfig)("selectionSummaryConfig", ctx_r2.selectionSummaryConfig);
  }
}
function ListaTessereComponent_ng_template_6_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275listener("click", function ListaTessereComponent_ng_template_6_For_5_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const action_r5 = \u0275\u0275nextContext().$implicit;
      const row_r6 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(action_r5.do(row_r6));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(action_r5.color);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", action_r5.icon)("title", action_r5.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r5.title, " ");
  }
}
function ListaTessereComponent_ng_template_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ListaTessereComponent_ng_template_6_For_5_Conditional_0_Template, 4, 5, "li", 14);
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(action_r5.visibility(row_r6) ? 0 : -1);
  }
}
function ListaTessereComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown")(1, "button", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "ul", 13);
    \u0275\u0275repeaterCreate(4, ListaTessereComponent_ng_template_6_For_5_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilOptions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.actionsArray);
  }
}
function ListaTessereComponent_ng_template_8_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("click", function ListaTessereComponent_ng_template_8_For_2_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const action_r8 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(action_r8.do(row_r9));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(action_r8.color);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", action_r8.icon)("title", action_r8.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r8.title, " ");
  }
}
function ListaTessereComponent_ng_template_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ListaTessereComponent_ng_template_8_For_2_Conditional_0_Template, 4, 5, "li", 18);
  }
  if (rf & 2) {
    const action_r8 = ctx.$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(action_r8.visibility(row_r9) ? 0 : -1);
  }
}
function ListaTessereComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275repeaterCreate(1, ListaTessereComponent_ng_template_8_For_2_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.actionsArray);
  }
}
function ListaTessereComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("cTooltip", ctx_r2.utilsService.getStatusTooltip(row_r10));
    \u0275\u0275advance();
    \u0275\u0275classMap("status-dot status-dot--" + ctx_r2.utilsService.getStatusColor(row_r10));
  }
}
function ListaTessereComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-badge", 21)(1, "div", 22)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function ListaTessereComponent_ng_template_12_Template_button_click_6_listener() {
      const ctx_r11 = \u0275\u0275restoreView(_r11);
      const row_r13 = ctx_r11.$implicit;
      const remove_r14 = ctx_r11.remove;
      return \u0275\u0275resetView(remove_r14(row_r13));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r13.idTessera);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r13.sede, " ");
  }
}
var ListaTessereComponent = class _ListaTessereComponent {
  constructor() {
    this.tessereService = inject(TessereService);
    this.sediService = inject(SediService);
    this.utilsService = inject(UtilsService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.icons = { cilPrint, cilBan, cilPlus, cilDelete, cilPencil, cilActionUndo, cilSearch, cilHistory, cilOptions, cilBuilding, cilAvTimer };
    this.isModalOpen = false;
    this.isModalAggiungiOpen = false;
    this.isModalMulUpdOpen = false;
    this.isModalStampaOpen = false;
    this.isModalHistoryOpen = false;
    this.mode = ACTION_CONSTANTS.ADD;
    this.datagridLoading = signal(false, ...ngDevMode ? [{ debugName: "datagridLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.action_const = ACTION_CONSTANTS;
    this.searchReady = signal(false, ...ngDevMode ? [{ debugName: "searchReady" }] : (
      /* istanbul ignore next */
      []
    ));
    this.today = /* @__PURE__ */ new Date();
    this.searchConfig = {
      enabled: true,
      fields: []
    };
    this.paginationConfig = DATAGRID_CONSTANTS;
    this.columns = [];
    this.toolbarConfig = createGridToolbar(() => this.openModalAggiungi(), () => this.exportCsv(), () => this.importCsv(), (rows) => this.openModalStampaUpdate(rows, "multi"), (mode) => this.openBulkUpdate(mode));
    this.loadingConfig = TESSERE_LOADING_STATE_CONFIG;
    this.emptyStateConfig = TESSERE_EMPTY_STATE_CONFIG;
    this.sortingConfig = TESSERE_SORTING_CONFIG;
    this.tessere = signal([], ...ngDevMode ? [{ debugName: "tessere" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sedi = signal([], ...ngDevMode ? [{ debugName: "sedi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tessereToPrint = signal([], ...ngDevMode ? [{ debugName: "tessereToPrint" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tesseraSelected = signal(tesseraEmpty, ...ngDevMode ? [{ debugName: "tesseraSelected" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tesseraHistory = signal([], ...ngDevMode ? [{ debugName: "tesseraHistory" }] : (
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
    this.selectionConfig = {
      enabled: true,
      mode: "multiple",
      rowKey: "idTessera"
    };
    this.urlStateConfig = TESSERE_URL_STATE_CONFIG;
    this.selectionSummaryConfig = __spreadProps(__spreadValues({}, TESSERE_SELECTION_SUMMARY_CONFIG), {
      template: this.selectedBadge
    });
    this.selectedTessere = signal([], ...ngDevMode ? [{ debugName: "selectedTessere" }] : (
      /* istanbul ignore next */
      []
    ));
    this.actionsArray = [
      {
        name: "assegna-dipendente",
        do: (row) => {
          this.openModal(this.action_const.ASSIGN, row.idTessera);
        },
        color: "text-info",
        icon: this.icons.cilActionUndo,
        title: "Assegna Dipendente",
        visibility: (row) => row.stato == TESSERE_STATUS_MESSAGES.LIBERA
      },
      {
        name: "cambia-sede",
        do: (row) => {
          this.openModal(this.action_const.ASSIGN_SEDE, row.idTessera);
        },
        color: "text-info",
        icon: this.icons.cilBuilding,
        title: "Cambia Sede",
        visibility: (row) => row.stato !== TESSERE_STATUS_MESSAGES.INDISPONIBILE
      },
      {
        name: "cambia-validit\xE0",
        do: (row) => {
          this.openModal(this.action_const.REMOVE, row.idTessera);
        },
        color: "text-warning",
        icon: this.icons.cilAvTimer,
        title: "Cambia Validit\xE0",
        visibility: (row) => row.stato == TESSERE_STATUS_MESSAGES.OCCUPATA
      },
      {
        name: "disuso",
        do: (row) => {
          this.openModal(this.action_const.DISABLED, row.idTessera);
        },
        color: "text-danger",
        icon: this.icons.cilBan,
        title: "Indisponibilit\xE0",
        visibility: () => true
      },
      {
        name: "cronologia",
        do: (row) => {
          this.openHistoryModal(row.idTessera);
        },
        color: "text-secondary",
        icon: this.icons.cilHistory,
        title: "Cronologia",
        visibility: () => true
      },
      {
        name: "stampa-tessera",
        do: (row) => {
          this.openModalStampaUpdate([row], "single");
        },
        color: "text-secondary",
        icon: this.icons.cilPrint,
        title: "Stampa Tessera",
        visibility: (row) => row.stato == TESSERE_STATUS_MESSAGES.OCCUPATA
      }
    ];
  }
  onSelectionChange(event) {
    this.selectedTessere.set(event.selectedRows);
  }
  openBulkUpdate(mode) {
    this.openModalMultiUpdate(mode);
  }
  exportCsv() {
    return console.log("exportCsv");
  }
  importCsv() {
    return console.log("importCsv");
  }
  ngOnInit() {
    this.getSedi();
  }
  getSedi() {
    this.sediService.getSediList().subscribe({
      next: (data) => {
        const options = data.data.map((sede) => ({
          label: sede.descrizione,
          value: sede.codSede
        }));
        this.sedi.set([...options ?? []]);
        this.searchConfig = createTesseraSearchConfig(options);
        const initialState = this.getInitialState();
        this.initialGridState = initialState;
        this.gridState.set(initialState);
        this.searchReady.set(true);
        this.loadData(initialState);
      },
      error: (err) => {
        console.error("Error loading sedi", err);
      }
    });
  }
  debug(row) {
    console.log("FINE ASSEGNAZIUONE", this.utilsService.parseItalianDate(row.dataOraFineAssegnazione));
    console.log("TODAY", this.today);
  }
  ngAfterViewInit() {
    this.columns = createGridColumn(this.actionTemplate, this.statusTemplate);
    this.contextMenuConfig = {
      enabled: true,
      template: this.contextActionTemplate
    };
    this.selectionSummaryConfig = __spreadProps(__spreadValues({}, TESSERE_SELECTION_SUMMARY_CONFIG), {
      template: this.selectedBadge
    });
  }
  onPageChange(event) {
    this.paginationConfig = __spreadProps(__spreadValues({}, this.paginationConfig), {
      page: event.page,
      pageSize: event.pageSize
    });
  }
  editUser(row) {
    console.log("AW", row);
  }
  refresh() {
    this.loadData(this.gridState());
  }
  loadData(state) {
    this.datagridLoading.set(true);
    this.gridState.set(state);
    this.updateUrlFromState(state);
    this.tessereService.getTessere(state).subscribe({
      next: (data) => {
        this.tessere.set([...data.data ?? []]);
        this.paginationConfig = __spreadValues(__spreadValues({}, this.paginationConfig), data.pagination);
        this.datagridLoading.set(false);
      },
      error: (err) => {
        console.error("Error loading tessere", err);
        this.datagridLoading.set(false);
      }
    });
  }
  openModal(mode, idTessera) {
    this.tessereService.getTesseraById(idTessera).subscribe({
      next: (data) => {
        this.isModalOpen = true;
        this.mode = mode;
        this.tesseraSelected.set(data.data ?? tesseraEmpty);
      },
      error: (err) => {
        console.error("Error loading tessere", err);
      }
    });
  }
  openModalAggiungi() {
    this.isModalAggiungiOpen = true;
  }
  openModalMultiUpdate(mode) {
    this.mode = mode;
    this.isModalMulUpdOpen = true;
  }
  openModalStampaUpdate(rows, mode) {
    this.mode = mode;
    if (mode === "single") {
      this.tessereService.getTesseraById(rows[0].idTessera).subscribe({
        next: (data) => {
          this.isModalStampaOpen = true;
          this.tessereToPrint.set([data.data]);
        },
        error: (err) => {
          console.error("Error loading tessere", err);
        }
      });
    } else {
      this.tessereToPrint.set(this.selectedTessere());
      this.isModalStampaOpen = true;
    }
  }
  openHistoryModal(idTessera) {
    this.tessereService.getTessereHistory(idTessera).subscribe({
      next: (data) => {
        this.isModalHistoryOpen = true;
        this.tesseraHistory.set(data.data ?? []);
      },
      error: (err) => {
        console.error("Error loading tessere", err);
      }
    });
  }
  onTesseraModalVisibleChange(visible) {
    this.isModalOpen = visible;
    if (!visible) {
      this.loadData(this.gridState());
    }
  }
  getInitialState() {
    return buildDataGridState(this.searchConfig, this.gridState(), this.route.snapshot.queryParamMap);
  }
  updateUrlFromState(request) {
    if (!this.urlStateConfig.enabled) {
      return;
    }
    const queryParams = buildUrlQueryParamsFromState(this.searchConfig, request);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true
    });
  }
  static {
    this.\u0275fac = function ListaTessereComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTessereComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTessereComponent, selectors: [["app-lista-tessere"]], viewQuery: function ListaTessereComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7)(_c1, 7)(_c2, 7)(_c3, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextActionTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.statusTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectedBadge = _t.first);
      }
    }, decls: 14, vars: 14, consts: [["actionTemplate", ""], ["contextActionTemplate", ""], ["statusTemplate", ""], ["selectedBadge", ""], [3, "columns", "rows", "searchConfig", "toolbarConfig", "paginationConfig", "sortingConfig", "loadingConfig", "loading", "emptyStateConfig", "initialState", "contextMenuConfig", "selectionConfig", "selectionSummaryConfig"], [3, "visibleChange", "saved", "visible", "mode", "tesseraSelected", "sediList"], [3, "visibleChange", "saved", "visible"], [3, "visibleChange", "visible", "tesseraSelectedHistory"], [3, "visibleChange", "saved", "visible", "mode", "sediList"], [3, "visibleChange", "visible", "mode", "tessereToPrint"], [3, "stateChange", "selectionChange", "columns", "rows", "searchConfig", "toolbarConfig", "paginationConfig", "sortingConfig", "loadingConfig", "loading", "emptyStateConfig", "initialState", "contextMenuConfig", "selectionConfig", "selectionSummaryConfig"], ["cButton", "", "color", "secondary", "variant", "ghost", "shape", "rounded-pill", "cDropdownToggle", "", "direction", "dropend"], ["title", "Opzioni", 3, "cIcon"], ["cDropdownMenu", ""], ["cDropdownItem", ""], ["cDropdownItem", "", 3, "click"], [3, "cIcon", "title"], ["cListGroup", "", 1, "context-menu-list"], ["cListGroupItem", "", "action", "", 1, "context-menu-item"], ["cListGroupItem", "", "action", "", 1, "context-menu-item", 3, "click"], ["cTooltipPlacement", "top", 1, "status-container", 3, "cTooltip"], ["color", "secondary", "shape", "rounded-pill", 1, "d-inline-flex", "align-items-center"], [1, "d-flex", "flex-column", "align-items-center", "text-center", "px-1"], [1, "opacity-75"], ["type", "button", 1, "btn-close", "btn-close-white", "ms-2", 3, "click"]], template: function ListaTessereComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275conditionalCreate(0, ListaTessereComponent_Conditional_0_Template, 1, 13, "app-datagrid", 4);
        \u0275\u0275elementStart(1, "app-tessera-modal-cmp", 5);
        \u0275\u0275twoWayListener("visibleChange", function ListaTessereComponent_Template_app_tessera_modal_cmp_visibleChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isModalOpen, $event) || (ctx.isModalOpen = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("saved", function ListaTessereComponent_Template_app_tessera_modal_cmp_saved_1_listener() {
          return ctx.refresh();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "app-tessera-aggiungi", 6);
        \u0275\u0275twoWayListener("visibleChange", function ListaTessereComponent_Template_app_tessera_aggiungi_visibleChange_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isModalAggiungiOpen, $event) || (ctx.isModalAggiungiOpen = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("saved", function ListaTessereComponent_Template_app_tessera_aggiungi_saved_2_listener() {
          return ctx.refresh();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "app-tessera-history", 7);
        \u0275\u0275twoWayListener("visibleChange", function ListaTessereComponent_Template_app_tessera_history_visibleChange_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isModalHistoryOpen, $event) || (ctx.isModalHistoryOpen = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-tessera-update-multiplo", 8);
        \u0275\u0275twoWayListener("visibleChange", function ListaTessereComponent_Template_app_tessera_update_multiplo_visibleChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isModalMulUpdOpen, $event) || (ctx.isModalMulUpdOpen = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("saved", function ListaTessereComponent_Template_app_tessera_update_multiplo_saved_4_listener() {
          return ctx.refresh();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "app-tessera-stampa", 9);
        \u0275\u0275twoWayListener("visibleChange", function ListaTessereComponent_Template_app_tessera_stampa_visibleChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isModalStampaOpen, $event) || (ctx.isModalStampaOpen = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ListaTessereComponent_ng_template_6_Template, 6, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, ListaTessereComponent_ng_template_8_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, ListaTessereComponent_ng_template_10_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(12, ListaTessereComponent_ng_template_12_Template, 7, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.searchReady() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("visible", ctx.isModalOpen);
        \u0275\u0275property("mode", ctx.mode)("tesseraSelected", ctx.tesseraSelected())("sediList", ctx.sedi());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("visible", ctx.isModalAggiungiOpen);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("visible", ctx.isModalHistoryOpen);
        \u0275\u0275property("tesseraSelectedHistory", ctx.tesseraHistory());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("visible", ctx.isModalMulUpdOpen);
        \u0275\u0275property("mode", ctx.mode)("sediList", ctx.sedi());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("visible", ctx.isModalStampaOpen);
        \u0275\u0275property("mode", ctx.mode)("tessereToPrint", ctx.tessereToPrint());
      }
    }, dependencies: [
      ButtonDirective,
      IconDirective,
      ReactiveFormsModule,
      TesseraModalCmpComponent,
      TesseraAggiungiComponent,
      DataGridComponent,
      TesseraHistoryComponent,
      DropdownComponent,
      DropdownItemDirective,
      DropdownMenuDirective,
      DropdownToggleDirective,
      ListGroupDirective,
      ListGroupItemDirective,
      TooltipDirective,
      BadgeModule,
      BadgeComponent,
      TesseraUpdateMultiploComponent,
      TesseraStampaComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaTessereComponent, [{
    type: Component,
    args: [{ selector: "app-lista-tessere", imports: [
      ButtonDirective,
      IconDirective,
      ReactiveFormsModule,
      TesseraModalCmpComponent,
      TesseraAggiungiComponent,
      DataGridComponent,
      TesseraHistoryComponent,
      DropdownComponent,
      DropdownItemDirective,
      DropdownMenuDirective,
      DropdownToggleDirective,
      ListGroupDirective,
      ListGroupItemDirective,
      TooltipDirective,
      BadgeModule,
      TesseraUpdateMultiploComponent,
      TesseraStampaComponent
    ], standalone: true, template: `@if (searchReady()) {\r
  <app-datagrid\r
    [columns]="columns"\r
    [rows]="tessere()"\r
    [searchConfig]="searchConfig"\r
    [toolbarConfig]="toolbarConfig"\r
    [paginationConfig]="paginationConfig"\r
    [sortingConfig]="sortingConfig"\r
    [loadingConfig]="loadingConfig"\r
    [loading]="datagridLoading()"\r
    [emptyStateConfig]="emptyStateConfig"\r
    [initialState]="gridState()"\r
    (stateChange)="loadData($event)"\r
    [contextMenuConfig]="contextMenuConfig"\r
    [selectionConfig]="selectionConfig"\r
    (selectionChange)="onSelectionChange($event)"\r
    [selectionSummaryConfig]="selectionSummaryConfig"\r
  />\r
}\r
\r
<!-- MODALI -->\r
<app-tessera-modal-cmp\r
  [(visible)]="isModalOpen"\r
  [mode]="mode"\r
  [tesseraSelected]="tesseraSelected()"\r
  [sediList]="sedi()"\r
  (saved)="refresh()"\r
></app-tessera-modal-cmp>\r
\r
<app-tessera-aggiungi\r
  [(visible)]="isModalAggiungiOpen"\r
  (saved)="refresh()"\r
></app-tessera-aggiungi>\r
\r
<app-tessera-history\r
  [(visible)]="isModalHistoryOpen"\r
  [tesseraSelectedHistory]="tesseraHistory()"\r
></app-tessera-history>\r
\r
<app-tessera-update-multiplo\r
  [(visible)]="isModalMulUpdOpen"\r
  [mode]="mode"\r
  [sediList]="sedi()"\r
  (saved)="refresh()"\r
></app-tessera-update-multiplo>\r
\r
<app-tessera-stampa\r
  [(visible)]="isModalStampaOpen"\r
  [mode]="mode"\r
  [tessereToPrint]="tessereToPrint()"\r
></app-tessera-stampa>\r
<!-- FINE MODALI -->\r
\r
<ng-template #actionTemplate let-row let-selectedRows="selectedRows">\r
  <c-dropdown>\r
    <button\r
      cButton\r
      color="secondary"\r
      variant="ghost"\r
      shape="rounded-pill"\r
      cDropdownToggle\r
      direction="dropend"\r
    >\r
      <svg [cIcon]="icons.cilOptions" title="Opzioni"></svg>\r
    </button>\r
\r
    <ul cDropdownMenu>\r
      @for (action of actionsArray; track action.name) {\r
        @if (action.visibility(row)) {\r
          <li cDropdownItem (click)="action.do(row)">\r
            <span [class]="action.color">\r
              <svg [cIcon]="action.icon" [title]="action.title"></svg>\r
              {{ action.title }}\r
            </span>\r
          </li>\r
        }\r
      }\r
    </ul>\r
  </c-dropdown>\r
</ng-template>\r
\r
<ng-template #contextActionTemplate let-row let-selectedRows="selectedRows">\r
  <ul cListGroup class="context-menu-list">\r
    @for (action of actionsArray; track action.name) {\r
      @if (action.visibility(row)) {\r
        <li\r
          cListGroupItem\r
          action\r
          (click)="action.do(row)"\r
          class="context-menu-item"\r
        >\r
          <span [class]="action.color">\r
            <svg [cIcon]="action.icon" [title]="action.title"></svg>\r
            {{ action.title }}\r
          </span>\r
        </li>\r
      }\r
    }\r
  </ul>\r
</ng-template>\r
\r
<ng-template #statusTemplate let-row>\r
  <div\r
    class="status-container"\r
    [cTooltip]="this.utilsService.getStatusTooltip(row)"\r
    cTooltipPlacement="top"\r
  >\r
    <span\r
      [class]="\r
        'status-dot status-dot--' + this.utilsService.getStatusColor(row)\r
      "\r
    ></span>\r
  </div>\r
</ng-template>\r
\r
<ng-template #selectedBadge let-row let-remove="remove">\r
  <c-badge\r
    color="secondary"\r
    shape="rounded-pill"\r
    class="d-inline-flex align-items-center"\r
  >\r
    <div class="d-flex flex-column align-items-center text-center px-1">\r
      <strong>{{ row.idTessera }}</strong>\r
\r
      <small class="opacity-75">\r
        {{ row.sede }}\r
      </small>\r
    </div>\r
\r
    <button\r
      type="button"\r
      class="btn-close btn-close-white ms-2"\r
      (click)="remove(row)"\r
    ></button>\r
  </c-badge>\r
</ng-template>\r
` }]
  }], null, { actionTemplate: [{
    type: ViewChild,
    args: ["actionTemplate", {
      static: true
    }]
  }], contextActionTemplate: [{
    type: ViewChild,
    args: ["contextActionTemplate", {
      static: true
    }]
  }], statusTemplate: [{
    type: ViewChild,
    args: ["statusTemplate", {
      static: true
    }]
  }], selectedBadge: [{
    type: ViewChild,
    args: ["selectedBadge", {
      static: true
    }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTessereComponent, { className: "ListaTessereComponent", filePath: "src/app/views/pages/lista-tessere/lista-tessere.component.ts", lineNumber: 61 });
})();
export {
  ListaTessereComponent
};
//# sourceMappingURL=chunk-BTMJEAP4.js.map
