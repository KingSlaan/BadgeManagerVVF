import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-3UK4NGU6.js";
import {
  cilCalendar,
  cilClock,
  cilInfinity
} from "./chunk-Y5M6FWPP.js";
import {
  CommonModule,
  IconDirective,
  IconModule,
  NgTemplateOutlet
} from "./chunk-ICNVWBIK.js";
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Subject,
  catchError,
  computed,
  debounceTime,
  distinctUntilChanged,
  forwardRef,
  input,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-V3VOMCDM.js";

// src/components/datepicker/datepicker.component.ts
function DatepickerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function DatepickerComponent_Conditional_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.setToday();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.disabled)("title", ctx_r3.todayButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilClock);
  }
}
function DatepickerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function DatepickerComponent_Conditional_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.setSpecificDate();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.disabled)("title", ctx_r3.specificDateButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilInfinity);
  }
}
var DatepickerComponent = class _DatepickerComponent {
  constructor() {
    this.label = "Select date";
    this.disabled = false;
    this.invalid = false;
    this.placeholder = "Select a date";
    this.showTodayButton = false;
    this.showSpecificDateButton = false;
    this.specificDateValue = "31/12/9999 00:00:00";
    this.todayButtonLabel = "Today";
    this.specificDateButtonLabel = "No end date";
    this.showTime = true;
    this.icons = {
      cilCalendar,
      cilClock,
      cilInfinity
    };
    this.value = null;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  writeValue(value) {
    if (!value) {
      this.value = null;
      return;
    }
    this.value = this.toNativeDateTime(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  get displayValue() {
    if (!this.value) {
      return "";
    }
    const [datePart, timePart] = this.value.split("T");
    const [year, month, day] = datePart.split("-");
    if (!this.showTime) {
      return `${day}/${month}/${year}`;
    }
    return `${day}/${month}/${year} ${timePart}:00`;
  }
  openPicker(input2) {
    if (!this.disabled && input2.showPicker) {
      input2.showPicker();
    }
  }
  onValueChange(event) {
    const input2 = event.target;
    this.value = input2.value;
    if (!this.showTime) {
      const [year, month, day] = input2.value.split("-");
      this.onChange(`${day}/${month}/${year}`);
    } else {
      this.onChange(this.toDisplayFormat(input2.value));
    }
    this.onTouched();
  }
  setToday() {
    if (this.disabled) {
      return;
    }
    const now = /* @__PURE__ */ new Date();
    const day = this.pad(now.getDate());
    const month = this.pad(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = this.pad(now.getHours());
    const minutes = this.pad(now.getMinutes());
    const displayValue = this.showTime ? `${day}/${month}/${year} ${hours}:${minutes}:00` : `${day}/${month}/${year}`;
    this.value = this.toNativeDateTime(displayValue);
    this.onChange(displayValue);
    this.onTouched();
  }
  setSpecificDate() {
    if (this.disabled) {
      return;
    }
    this.value = this.toNativeDateTime(this.specificDateValue);
    this.onChange(this.specificDateValue);
    this.onTouched();
  }
  pad(value) {
    return value.toString().padStart(2, "0");
  }
  toNativeDateTime(value) {
    const [datePart, timePart] = value.split(" ");
    const [day, month, year] = datePart.split("/");
    if (!this.showTime) {
      return `${year}-${month}-${day}`;
    }
    const [hours, minutes] = timePart.split(":");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  toDisplayFormat(value) {
    const [datePart, timePart] = value.split("T");
    const [year, month, day] = datePart.split("-");
    return `${day}/${month}/${year} ${timePart}:00`;
  }
  get computedPlaceholder() {
    return this.showTime ? "gg/mm/aaaa hh:mm:ss" : "gg/mm/aaaa";
  }
  static {
    this.\u0275fac = function DatepickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatepickerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatepickerComponent, selectors: [["app-datepicker"]], inputs: { label: "label", min: "min", max: "max", disabled: "disabled", invalid: "invalid", helperText: "helperText", placeholder: "placeholder", showTodayButton: "showTodayButton", showSpecificDateButton: "showSpecificDateButton", specificDateValue: "specificDateValue", todayButtonLabel: "todayButtonLabel", specificDateButtonLabel: "specificDateButtonLabel", showTime: "showTime" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DatepickerComponent),
        multi: true
      }
    ])], decls: 10, vars: 16, consts: [["dateInput", ""], [1, "cui-datepicker"], [1, "cui-input-wrapper"], [1, "native-date-input", 3, "change", "type", "value", "min", "max", "disabled"], ["type", "text", "readonly", "", 1, "cui-input", "custom-datepicker-input", 3, "click", "value", "placeholder", "disabled"], [1, "input-actions"], ["type", "button", "title", "Select date", 1, "action-icon", 3, "click", "disabled"], [3, "cIcon"], ["type", "button", 1, "action-icon", 3, "disabled", "title"], ["type", "button", 1, "action-icon", 3, "click", "disabled", "title"]], template: function DatepickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "input", 3, 0);
        \u0275\u0275listener("change", function DatepickerComponent_Template_input_change_2_listener($event) {
          return ctx.onValueChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 4);
        \u0275\u0275listener("click", function DatepickerComponent_Template_input_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          const dateInput_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(ctx.openPicker(dateInput_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
        \u0275\u0275listener("click", function DatepickerComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          const dateInput_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(ctx.openPicker(dateInput_r2));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(7, "svg", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, DatepickerComponent_Conditional_8_Template, 2, 3, "button", 8);
        \u0275\u0275conditionalCreate(9, DatepickerComponent_Conditional_9_Template, 2, 3, "button", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("invalid", ctx.invalid)("disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("type", ctx.showTime ? "datetime-local" : "date")("value", ctx.value || "")("min", ctx.min)("max", ctx.max)("disabled", ctx.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.displayValue)("placeholder", ctx.placeholder || ctx.computedPlaceholder)("disabled", ctx.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("cIcon", ctx.icons.cilCalendar);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTodayButton ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSpecificDateButton ? 9 : -1);
      }
    }, dependencies: [IconModule, IconDirective], styles: ["\n.cui-datepicker[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cui-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 46px;\n  background: var(--cui-body-bg);\n  border: 1px solid var(--cui-border-color);\n  border-radius: 6px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease,\n    opacity 0.2s ease;\n}\n.cui-input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--cui-primary);\n  box-shadow: 0 0 0 3px rgba(var(--cui-primary-rgb), 0.2);\n}\n.cui-input-wrapper.invalid[_ngcontent-%COMP%] {\n  border-color: var(--cui-danger);\n}\n.cui-input-wrapper.disabled[_ngcontent-%COMP%] {\n  background: var(--cui-secondary-bg);\n  border-color: var(--cui-border-color);\n  opacity: 0.75;\n  cursor: not-allowed;\n}\n.cui-input-wrapper.disabled[_ngcontent-%COMP%]   .cui-input[_ngcontent-%COMP%] {\n  color: var(--cui-secondary-color);\n  cursor: not-allowed;\n}\n.cui-input-wrapper.disabled[_ngcontent-%COMP%]   .calendar-icon[_ngcontent-%COMP%] {\n  color: var(--cui-secondary-color);\n  opacity: 0.8;\n}\n.native-date-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.cui-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0 110px 0 16px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--cui-body-color);\n  cursor: pointer;\n}\n.cui-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--cui-secondary-color);\n}\n.cui-input[_ngcontent-%COMP%]:disabled {\n  color: var(--cui-secondary-color);\n  -webkit-text-fill-color: var(--cui-secondary-color);\n}\n.calendar-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--cui-secondary-color);\n  pointer-events: none;\n}\n.calendar-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.helper-text[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  font-size: 0.85rem;\n  color: var(--cui-secondary-color);\n}\n.datepicker-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n}\n.datepicker-action-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--cui-border-color);\n  border-radius: 6px;\n  background: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  padding: 6px 10px;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.datepicker-action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--cui-tertiary-bg);\n  border-color: var(--cui-primary);\n  color: var(--cui-primary);\n}\n.datepicker-action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.input-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  z-index: 2;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  color: var(--cui-secondary-color);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-icon[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--cui-tertiary-bg);\n  color: var(--cui-primary);\n}\n.action-icon[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n[data-coreui-theme=light][_nghost-%COMP%]   .custom-datepicker-input[_ngcontent-%COMP%]:disabled, [data-coreui-theme=light]   [_nghost-%COMP%]   .custom-datepicker-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8fafc !important;\n  color: #6c757d !important;\n  border-color: transparent !important;\n}\n[data-coreui-theme=dark][_nghost-%COMP%]   .custom-datepicker-input[_ngcontent-%COMP%]:disabled, [data-coreui-theme=dark]   [_nghost-%COMP%]   .custom-datepicker-input[_ngcontent-%COMP%]:disabled {\n  background-color: #0f172a !important;\n  color: #94a3b8 !important;\n  border-color: transparent !important;\n}\n/*# sourceMappingURL=datepicker.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatepickerComponent, [{
    type: Component,
    args: [{ selector: "app-datepicker", standalone: true, imports: [
      IconModule
    ], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatepickerComponent),
        multi: true
      }
    ], template: `<div class="cui-datepicker">\r
  <div\r
    class="cui-input-wrapper"\r
    [class.invalid]="invalid"\r
    [class.disabled]="disabled"\r
  >\r
    <input\r
      #dateInput\r
      [type]="showTime ? 'datetime-local' : 'date'"\r
      class="native-date-input"\r
      [value]="value || ''"\r
      [min]="min"\r
      [max]="max"\r
      [disabled]="disabled"\r
      (change)="onValueChange($event)"\r
    />\r
\r
    <input\r
      type="text"\r
      class="cui-input custom-datepicker-input"\r
      [value]="displayValue"\r
      [placeholder]="placeholder || computedPlaceholder"\r
      [disabled]="disabled"\r
      readonly\r
      (click)="openPicker(dateInput)"\r
    />\r
\r
    <div class="input-actions">\r
      <button\r
        type="button"\r
        class="action-icon"\r
        [disabled]="disabled"\r
        title="Select date"\r
        (click)="openPicker(dateInput)"\r
      >\r
        <svg [cIcon]="icons.cilCalendar"></svg>\r
      </button>\r
\r
      @if (showTodayButton) {\r
        <button\r
          type="button"\r
          class="action-icon"\r
          [disabled]="disabled"\r
          [title]="todayButtonLabel"\r
          (click)="setToday(); $event.stopPropagation()"\r
        >\r
          <svg [cIcon]="icons.cilClock"></svg>\r
        </button>\r
      }\r
\r
      @if (showSpecificDateButton) {\r
        <button\r
          type="button"\r
          class="action-icon"\r
          [disabled]="disabled"\r
          [title]="specificDateButtonLabel"\r
          (click)="setSpecificDate(); $event.stopPropagation()"\r
        >\r
          <svg [cIcon]="icons.cilInfinity"></svg>\r
        </button>\r
      }\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/components/datepicker/datepicker.component.scss */\n.cui-datepicker {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cui-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 46px;\n  background: var(--cui-body-bg);\n  border: 1px solid var(--cui-border-color);\n  border-radius: 6px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease,\n    opacity 0.2s ease;\n}\n.cui-input-wrapper:focus-within {\n  border-color: var(--cui-primary);\n  box-shadow: 0 0 0 3px rgba(var(--cui-primary-rgb), 0.2);\n}\n.cui-input-wrapper.invalid {\n  border-color: var(--cui-danger);\n}\n.cui-input-wrapper.disabled {\n  background: var(--cui-secondary-bg);\n  border-color: var(--cui-border-color);\n  opacity: 0.75;\n  cursor: not-allowed;\n}\n.cui-input-wrapper.disabled .cui-input {\n  color: var(--cui-secondary-color);\n  cursor: not-allowed;\n}\n.cui-input-wrapper.disabled .calendar-icon {\n  color: var(--cui-secondary-color);\n  opacity: 0.8;\n}\n.native-date-input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.cui-input {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0 110px 0 16px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--cui-body-color);\n  cursor: pointer;\n}\n.cui-input::placeholder {\n  color: var(--cui-secondary-color);\n}\n.cui-input:disabled {\n  color: var(--cui-secondary-color);\n  -webkit-text-fill-color: var(--cui-secondary-color);\n}\n.calendar-icon {\n  position: absolute;\n  right: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--cui-secondary-color);\n  pointer-events: none;\n}\n.calendar-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.helper-text {\n  padding-left: 4px;\n  font-size: 0.85rem;\n  color: var(--cui-secondary-color);\n}\n.datepicker-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n}\n.datepicker-action-btn {\n  border: 1px solid var(--cui-border-color);\n  border-radius: 6px;\n  background: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  padding: 6px 10px;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.datepicker-action-btn:hover:not(:disabled) {\n  background: var(--cui-tertiary-bg);\n  border-color: var(--cui-primary);\n  color: var(--cui-primary);\n}\n.datepicker-action-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.input-actions {\n  position: absolute;\n  right: 8px;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  z-index: 2;\n}\n.action-icon {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  color: var(--cui-secondary-color);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-icon:hover:not(:disabled) {\n  background: var(--cui-tertiary-bg);\n  color: var(--cui-primary);\n}\n.action-icon:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.action-icon svg {\n  width: 16px;\n  height: 16px;\n}\n:host-context([data-coreui-theme=light]) .custom-datepicker-input:disabled {\n  background-color: #f8fafc !important;\n  color: #6c757d !important;\n  border-color: transparent !important;\n}\n:host-context([data-coreui-theme=dark]) .custom-datepicker-input:disabled {\n  background-color: #0f172a !important;\n  color: #94a3b8 !important;\n  border-color: transparent !important;\n}\n/*# sourceMappingURL=datepicker.component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], min: [{
    type: Input
  }], max: [{
    type: Input
  }], disabled: [{
    type: Input
  }], invalid: [{
    type: Input
  }], helperText: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], showTodayButton: [{
    type: Input
  }], showSpecificDateButton: [{
    type: Input
  }], specificDateValue: [{
    type: Input
  }], todayButtonLabel: [{
    type: Input
  }], specificDateButtonLabel: [{
    type: Input
  }], showTime: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatepickerComponent, { className: "DatepickerComponent", filePath: "src/components/datepicker/datepicker.component.ts", lineNumber: 34 });
})();

// src/components/autocomplete-select/autocomplete-select.component.ts
var _c0 = (a0, a1) => ({ $implicit: a0, option: a1 });
var _c1 = (a0, a1, a2) => ({ $implicit: a0, option: a1, selected: a2 });
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.value + "-" + $index;
function AutocompleteSelectComponent_Conditional_2_For_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteSelectComponent_Conditional_2_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutocompleteSelectComponent_Conditional_2_For_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.selectedItemTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, option_r3, option_r3));
  }
}
function AutocompleteSelectComponent_Conditional_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", option_r3.label, " ");
  }
}
function AutocompleteSelectComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275conditionalCreate(1, AutocompleteSelectComponent_Conditional_2_For_2_Conditional_1_Template, 1, 5, "ng-container")(2, AutocompleteSelectComponent_Conditional_2_For_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function AutocompleteSelectComponent_Conditional_2_For_2_Template_button_click_3_listener($event) {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.removeSelected(option_r3.value);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(4, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedItemTemplate() ? 1 : 2);
  }
}
function AutocompleteSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AutocompleteSelectComponent_Conditional_2_For_2_Template, 5, 1, "span", 6, _forTrack0);
    \u0275\u0275elementStart(3, "input", 7);
    \u0275\u0275listener("ngModelChange", function AutocompleteSelectComponent_Conditional_2_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSearchChange($event));
    })("focus", function AutocompleteSelectComponent_Conditional_2_Template_input_focus_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.open());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.getSelectedOptions());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", ctx_r3.selectedValues().length === 0 ? ctx_r3.placeholder() : "")("ngModel", ctx_r3.search())("disabled", ctx_r3.disabled() || ctx_r3.disabledInput());
  }
}
function AutocompleteSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 10);
    \u0275\u0275listener("ngModelChange", function AutocompleteSelectComponent_Conditional_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSearchChange($event));
    })("focus", function AutocompleteSelectComponent_Conditional_3_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.open());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r3.placeholder())("ngModel", ctx_r3.search())("disabled", ctx_r3.disabled() || ctx_r3.disabledInput());
  }
}
function AutocompleteSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function AutocompleteSelectComponent_Conditional_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.clear();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, " \xD7 ");
    \u0275\u0275elementEnd();
  }
}
function AutocompleteSelectComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function AutocompleteSelectComponent_Conditional_5_For_3_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteSelectComponent_Conditional_5_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutocompleteSelectComponent_Conditional_5_For_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const option_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.itemTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c1, option_r8, option_r8, ctx_r3.isSelected(option_r8)));
  }
}
function AutocompleteSelectComponent_Conditional_5_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const option_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", option_r8.label, " ");
  }
}
function AutocompleteSelectComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function AutocompleteSelectComponent_Conditional_5_For_3_Template_button_click_0_listener() {
      const option_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectOption(option_r8));
    });
    \u0275\u0275conditionalCreate(1, AutocompleteSelectComponent_Conditional_5_For_3_Conditional_1_Template, 1, 6, "ng-container")(2, AutocompleteSelectComponent_Conditional_5_For_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r3.isSelected(option_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.itemTemplate() ? 1 : 2);
  }
}
function AutocompleteSelectComponent_Conditional_5_Conditional_4_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteSelectComponent_Conditional_5_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutocompleteSelectComponent_Conditional_5_Conditional_4_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.emptyTemplate());
  }
}
function AutocompleteSelectComponent_Conditional_5_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No results found ");
  }
}
function AutocompleteSelectComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, AutocompleteSelectComponent_Conditional_5_Conditional_4_Conditional_1_Template, 1, 1, "ng-container")(2, AutocompleteSelectComponent_Conditional_5_Conditional_4_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.emptyTemplate() ? 1 : 2);
  }
}
function AutocompleteSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, AutocompleteSelectComponent_Conditional_5_Conditional_1_Template, 2, 0, "div", 12);
    \u0275\u0275repeaterCreate(2, AutocompleteSelectComponent_Conditional_5_For_3_Template, 3, 3, "button", 13, _forTrack1);
    \u0275\u0275conditionalCreate(4, AutocompleteSelectComponent_Conditional_5_Conditional_4_Template, 3, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.loading() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredOptions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.loading() && ctx_r3.filteredOptions().length === 0 ? 4 : -1);
  }
}
var AutocompleteSelectComponent = class _AutocompleteSelectComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.itemTemplate = input(null, ...ngDevMode ? [{ debugName: "itemTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedItemTemplate = input(null, ...ngDevMode ? [{ debugName: "selectedItemTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyTemplate = input(null, ...ngDevMode ? [{ debugName: "emptyTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.placeholder = input("Select...", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabledInput = input(false, ...ngDevMode ? [{ debugName: "disabledInput" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearable = input(true, ...ngDevMode ? [{ debugName: "clearable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.multiple = input(false, ...ngDevMode ? [{ debugName: "multiple" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedValue = signal(null, ...ngDevMode ? [{ debugName: "selectedValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedValues = signal([], ...ngDevMode ? [{ debugName: "selectedValues" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.serverSearchFn = input(null, ...ngDevMode ? [{ debugName: "serverSearchFn" }] : (
      /* istanbul ignore next */
      []
    ));
    this.debounceMs = input(300, ...ngDevMode ? [{ debugName: "debounceMs" }] : (
      /* istanbul ignore next */
      []
    ));
    this.minSearchLength = input(0, ...ngDevMode ? [{ debugName: "minSearchLength" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loadOnOpen = input(false, ...ngDevMode ? [{ debugName: "loadOnOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.serverOptions = signal([], ...ngDevMode ? [{ debugName: "serverOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchSubject = new Subject();
    this.filteredOptions = computed(() => {
      const sourceOptions = this.serverSearchFn() ? this.serverOptions() : this.options();
      const term = this.search().toLowerCase().trim();
      if (this.serverSearchFn()) {
        return sourceOptions;
      }
      if (!term) {
        return sourceOptions;
      }
      return sourceOptions.filter((option) => option.label.toLowerCase().includes(term));
    }, ...ngDevMode ? [{ debugName: "filteredOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  writeValue(value) {
    if (this.multiple()) {
      this.selectedValues.set(Array.isArray(value) ? value : []);
      this.search.set("");
      return;
    }
    this.selectedValue.set(value);
    const selected = this.getAllOptions().find((opt) => opt.value === value);
    this.search.set(selected?.label ?? "");
  }
  isSelected(option) {
    return this.multiple() ? this.selectedValues().includes(option.value) : option.value === this.selectedValue();
  }
  selectOption(option) {
    if (this.multiple()) {
      const current = this.selectedValues();
      const next = current.includes(option.value) ? current.filter((v) => v !== option.value) : [...current, option.value];
      this.selectedValues.set(next);
      this.onChange(next);
      this.search.set("");
      this.isOpen.set(true);
      return;
    }
    this.selectedValue.set(option.value);
    this.search.set(option.label);
    this.onChange(option.value);
    this.onTouched();
    this.isOpen.set(false);
  }
  removeSelected(value) {
    const next = this.selectedValues().filter((v) => v !== value);
    this.selectedValues.set(next);
    this.onChange(next);
  }
  getAllOptions() {
    return this.serverSearchFn() ? this.serverOptions() : this.options();
  }
  getSelectedOptions() {
    return this.getAllOptions().filter((opt) => this.selectedValues().includes(opt.value));
  }
  clear() {
    if (this.multiple()) {
      this.selectedValues.set([]);
      this.search.set("");
      this.onChange([]);
    } else {
      this.selectedValue.set(null);
      this.search.set("");
      this.onChange(null);
    }
    this.onTouched();
    this.isOpen.set(false);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  open() {
    if (this.disabled() || this.disabledInput())
      return;
    this.isOpen.set(true);
    if (this.serverSearchFn() && this.loadOnOpen() && this.serverOptions().length === 0) {
      this.loadServerOptions("");
    }
  }
  loadServerOptions(term) {
    const fn = this.serverSearchFn();
    if (!fn)
      return;
    if (term.trim().length < this.minSearchLength()) {
      this.serverOptions.set([]);
      return;
    }
    this.loading.set(true);
    fn(term).pipe(catchError((error) => {
      console.error("AUTOCOMPLETE LOAD ERROR:", error);
      return of([]);
    }), tap(() => this.loading.set(false))).subscribe((options) => {
      this.serverOptions.set(options);
    });
  }
  onSearchChange(value) {
    this.search.set(value);
    if (!this.multiple()) {
      this.selectedValue.set(null);
      this.onChange(null);
    }
    if (this.serverSearchFn()) {
      this.searchSubject.next(value);
    }
    this.isOpen.set(true);
  }
  ngOnInit() {
    this.searchSubject.pipe(debounceTime(this.debounceMs()), distinctUntilChanged(), switchMap((term) => {
      const fn = this.serverSearchFn();
      if (!fn) {
        return of([]);
      }
      if (term.trim().length < this.minSearchLength()) {
        this.serverOptions.set([]);
        return of([]);
      }
      this.loading.set(true);
      return fn(term).pipe(catchError(() => of([])), tap(() => this.loading.set(false)));
    })).subscribe((options) => {
      this.serverOptions.set(options);
    });
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }
  clickOutside(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
      this.onTouched();
    }
  }
  static {
    this.\u0275fac = function AutocompleteSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutocompleteSelectComponent)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutocompleteSelectComponent, selectors: [["app-autocomplete-select"]], hostBindings: function AutocompleteSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AutocompleteSelectComponent_click_HostBindingHandler($event) {
          return ctx.clickOutside($event);
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { options: [1, "options"], itemTemplate: [1, "itemTemplate"], selectedItemTemplate: [1, "selectedItemTemplate"], emptyTemplate: [1, "emptyTemplate"], placeholder: [1, "placeholder"], disabledInput: [1, "disabledInput"], clearable: [1, "clearable"], multiple: [1, "multiple"], serverSearchFn: [1, "serverSearchFn"], debounceMs: [1, "debounceMs"], minSearchLength: [1, "minSearchLength"], loadOnOpen: [1, "loadOnOpen"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _AutocompleteSelectComponent),
        multi: true
      }
    ])], decls: 6, vars: 3, consts: [[1, "autocomplete-select"], [1, "autocomplete-input-wrapper", 3, "click"], [1, "selected-tags"], ["type", "text", 1, "form-control", "autocomplete-input", 3, "placeholder", "ngModel", "disabled"], ["type", "button", "title", "Clear", 1, "clear-btn"], [1, "autocomplete-dropdown"], [1, "selected-tag"], ["type", "text", 1, "tag-input", 3, "ngModelChange", "focus", "placeholder", "ngModel", "disabled"], ["type", "button", 1, "tag-remove", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", 1, "form-control", "autocomplete-input", 3, "ngModelChange", "focus", "placeholder", "ngModel", "disabled"], ["type", "button", "title", "Clear", 1, "clear-btn", 3, "click"], [1, "autocomplete-empty"], ["type", "button", 1, "autocomplete-option", 3, "selected"], ["type", "button", 1, "autocomplete-option", 3, "click"], [4, "ngTemplateOutlet"]], template: function AutocompleteSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function AutocompleteSelectComponent_Template_div_click_1_listener() {
          return ctx.open();
        });
        \u0275\u0275conditionalCreate(2, AutocompleteSelectComponent_Conditional_2_Template, 4, 3, "div", 2)(3, AutocompleteSelectComponent_Conditional_3_Template, 1, 3, "input", 3);
        \u0275\u0275conditionalCreate(4, AutocompleteSelectComponent_Conditional_4_Template, 2, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AutocompleteSelectComponent_Conditional_5_Template, 5, 2, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.multiple() ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.clearable() && (ctx.search() || ctx.selectedValues().length > 0) && !ctx.disabled() && !ctx.disabledInput() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isOpen() ? 5 : -1);
      }
    }, dependencies: [CommonModule, NgTemplateOutlet, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.autocomplete-select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.autocomplete-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.autocomplete-input[_ngcontent-%COMP%] {\n  padding-right: 2.25rem;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0.75rem;\n  transform: translateY(-50%);\n  border: 0;\n  background: transparent;\n  font-size: 1.25rem;\n  line-height: 1;\n  color: var(--cui-secondary-color);\n  cursor: pointer;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  color: var(--cui-body-color);\n}\n.autocomplete-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 0.25rem;\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid var(--cui-border-color);\n  border-radius: var(--cui-border-radius);\n  background-color: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  box-shadow: var(--cui-box-shadow);\n}\n.autocomplete-option[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border: 0;\n  text-align: left;\n  background: transparent;\n  color: var(--cui-body-color);\n  cursor: pointer;\n}\n.autocomplete-option[_ngcontent-%COMP%]:hover {\n  background-color: var(--cui-tertiary-bg);\n}\n.autocomplete-option.selected[_ngcontent-%COMP%] {\n  background-color: var(--cui-primary);\n  color: #fff;\n}\n.autocomplete-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  color: var(--cui-secondary-color);\n}\n[data-coreui-theme=dark][_nghost-%COMP%]   .autocomplete-dropdown[_ngcontent-%COMP%], [data-coreui-theme=dark]   [_nghost-%COMP%]   .autocomplete-dropdown[_ngcontent-%COMP%] {\n  background-color: var(--cui-dark-bg-subtle);\n  border-color: var(--cui-border-color);\n}\n[data-coreui-theme=dark][_nghost-%COMP%]   .autocomplete-option[_ngcontent-%COMP%]:hover, [data-coreui-theme=dark]   [_nghost-%COMP%]   .autocomplete-option[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.08);\n}\n.selected-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  min-height: 38px;\n  padding: 0.25rem 2.25rem 0.25rem 0.5rem;\n  border: 1px solid var(--cui-border-color);\n  border-radius: var(--cui-border-radius);\n  background-color: var(--cui-body-bg);\n  color: var(--cui-body-color);\n}\n.selected-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  background-color: var(--cui-tertiary-bg);\n  color: var(--cui-body-color);\n}\n.tag-remove[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: inherit;\n  cursor: pointer;\n}\n.tag-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: var(--cui-body-color);\n}\n/*# sourceMappingURL=autocomplete-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteSelectComponent, [{
    type: Component,
    args: [{ selector: "app-autocomplete-select", standalone: true, imports: [CommonModule, FormsModule, NgTemplateOutlet], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutocompleteSelectComponent),
        multi: true
      }
    ], template: `<div class="autocomplete-select">\r
  <div class="autocomplete-input-wrapper" (click)="open()">\r
    @if (multiple()) {\r
      <div class="selected-tags">\r
        @for (option of getSelectedOptions(); track option.value) {\r
          <span class="selected-tag">\r
            @if (selectedItemTemplate()) {\r
              <ng-container\r
                *ngTemplateOutlet="\r
                  selectedItemTemplate();\r
                  context: {\r
                    $implicit: option,\r
                    option: option,\r
                  }\r
                "\r
              />\r
            } @else {\r
              {{ option.label }}\r
            }\r
\r
            <button\r
              type="button"\r
              class="tag-remove"\r
              (click)="removeSelected(option.value); $event.stopPropagation()"\r
            >\r
              \xD7\r
            </button>\r
          </span>\r
        }\r
\r
        <input\r
          type="text"\r
          class="tag-input"\r
          [placeholder]="selectedValues().length === 0 ? placeholder() : ''"\r
          [ngModel]="search()"\r
          [disabled]="disabled() || disabledInput()"\r
          (ngModelChange)="onSearchChange($event)"\r
          (focus)="open()"\r
        />\r
      </div>\r
    } @else {\r
      <input\r
        type="text"\r
        class="form-control autocomplete-input"\r
        [placeholder]="placeholder()"\r
        [ngModel]="search()"\r
        [disabled]="disabled() || disabledInput()"\r
        (ngModelChange)="onSearchChange($event)"\r
        (focus)="open()"\r
      />\r
    }\r
\r
    @if (\r
      clearable() &&\r
      (search() || selectedValues().length > 0) &&\r
      !disabled() &&\r
      !disabledInput()\r
    ) {\r
      <button\r
        type="button"\r
        class="clear-btn"\r
        title="Clear"\r
        (click)="clear(); $event.stopPropagation()"\r
      >\r
        \xD7\r
      </button>\r
    }\r
  </div>\r
\r
  @if (isOpen()) {\r
    <div class="autocomplete-dropdown">\r
      @if (loading()) {\r
        <div class="autocomplete-empty">Loading...</div>\r
      }\r
      @for (option of filteredOptions(); track option.value + "-" + $index) {\r
        <button\r
          type="button"\r
          class="autocomplete-option"\r
          [class.selected]="isSelected(option)"\r
          (click)="selectOption(option)"\r
        >\r
          @if (itemTemplate()) {\r
            <ng-container\r
              *ngTemplateOutlet="\r
                itemTemplate();\r
                context: {\r
                  $implicit: option,\r
                  option: option,\r
                  selected: isSelected(option),\r
                }\r
              "\r
            />\r
          } @else {\r
            {{ option.label }}\r
          }\r
        </button>\r
      }\r
\r
      @if (!loading() && filteredOptions().length === 0) {\r
        <div class="autocomplete-empty">\r
          @if (emptyTemplate()) {\r
            <ng-container *ngTemplateOutlet="emptyTemplate()" />\r
          } @else {\r
            No results found\r
          }\r
        </div>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/components/autocomplete-select/autocomplete-select.component.scss */\n.autocomplete-select {\n  position: relative;\n  width: 100%;\n}\n.autocomplete-input-wrapper {\n  position: relative;\n}\n.autocomplete-input {\n  padding-right: 2.25rem;\n}\n.clear-btn {\n  position: absolute;\n  top: 50%;\n  right: 0.75rem;\n  transform: translateY(-50%);\n  border: 0;\n  background: transparent;\n  font-size: 1.25rem;\n  line-height: 1;\n  color: var(--cui-secondary-color);\n  cursor: pointer;\n}\n.clear-btn:hover {\n  color: var(--cui-body-color);\n}\n.autocomplete-dropdown {\n  position: absolute;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 0.25rem;\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid var(--cui-border-color);\n  border-radius: var(--cui-border-radius);\n  background-color: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  box-shadow: var(--cui-box-shadow);\n}\n.autocomplete-option {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border: 0;\n  text-align: left;\n  background: transparent;\n  color: var(--cui-body-color);\n  cursor: pointer;\n}\n.autocomplete-option:hover {\n  background-color: var(--cui-tertiary-bg);\n}\n.autocomplete-option.selected {\n  background-color: var(--cui-primary);\n  color: #fff;\n}\n.autocomplete-empty {\n  padding: 0.75rem;\n  color: var(--cui-secondary-color);\n}\n:host-context([data-coreui-theme=dark]) .autocomplete-dropdown {\n  background-color: var(--cui-dark-bg-subtle);\n  border-color: var(--cui-border-color);\n}\n:host-context([data-coreui-theme=dark]) .autocomplete-option:hover {\n  background-color: rgba(255, 255, 255, 0.08);\n}\n.selected-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  min-height: 38px;\n  padding: 0.25rem 2.25rem 0.25rem 0.5rem;\n  border: 1px solid var(--cui-border-color);\n  border-radius: var(--cui-border-radius);\n  background-color: var(--cui-body-bg);\n  color: var(--cui-body-color);\n}\n.selected-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 999px;\n  background-color: var(--cui-tertiary-bg);\n  color: var(--cui-body-color);\n}\n.tag-remove {\n  border: 0;\n  background: transparent;\n  color: inherit;\n  cursor: pointer;\n}\n.tag-input {\n  flex: 1;\n  min-width: 120px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: var(--cui-body-color);\n}\n/*# sourceMappingURL=autocomplete-select.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], itemTemplate: [{ type: Input, args: [{ isSignal: true, alias: "itemTemplate", required: false }] }], selectedItemTemplate: [{ type: Input, args: [{ isSignal: true, alias: "selectedItemTemplate", required: false }] }], emptyTemplate: [{ type: Input, args: [{ isSignal: true, alias: "emptyTemplate", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], disabledInput: [{ type: Input, args: [{ isSignal: true, alias: "disabledInput", required: false }] }], clearable: [{ type: Input, args: [{ isSignal: true, alias: "clearable", required: false }] }], multiple: [{ type: Input, args: [{ isSignal: true, alias: "multiple", required: false }] }], serverSearchFn: [{ type: Input, args: [{ isSignal: true, alias: "serverSearchFn", required: false }] }], debounceMs: [{ type: Input, args: [{ isSignal: true, alias: "debounceMs", required: false }] }], minSearchLength: [{ type: Input, args: [{ isSignal: true, alias: "minSearchLength", required: false }] }], loadOnOpen: [{ type: Input, args: [{ isSignal: true, alias: "loadOnOpen", required: false }] }], clickOutside: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutocompleteSelectComponent, { className: "AutocompleteSelectComponent", filePath: "src/components/autocomplete-select/autocomplete-select.component.ts", lineNumber: 41 });
})();

export {
  DatepickerComponent,
  AutocompleteSelectComponent
};
//# sourceMappingURL=chunk-IPNKABNZ.js.map
