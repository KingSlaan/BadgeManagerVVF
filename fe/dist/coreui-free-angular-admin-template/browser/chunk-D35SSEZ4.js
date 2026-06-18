import {
  AutocompleteSelectComponent,
  DatepickerComponent
} from "./chunk-CUR4M7JY.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3D2CXWAA.js";
import {
  BadgeModule,
  ButtonDirective,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckInputDirective,
  FormControlDirective,
  FormDirective,
  FormSelectDirective,
  GutterDirective,
  RowDirective,
  SpinnerComponent,
  TableDirective,
  TableModule
} from "./chunk-7NVYWTLR.js";
import {
  cilFilterX,
  cilFrown,
  cilSearch
} from "./chunk-U43FZQ3F.js";
import {
  CommonModule,
  IconDirective,
  NgTemplateOutlet
} from "./chunk-M5X3AQM3.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  computed,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-V3VOMCDM.js";

// src/components/data-grid/data-grid.component.ts
var _c0 = () => [];
var _c1 = (a0, a1, a2) => ({ $implicit: a0, row: a1, selectedRows: a2 });
var _c2 = () => [5, 10, 25, 50];
var _c3 = (a0, a1, a2) => ({ $implicit: a0, row: a1, close: a2 });
var _forTrack0 = ($index, $item) => $item.field;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.label;
function _forTrack3($index, $item) {
  return this.getRowKey($item);
}
function DataGridComponent_Conditional_2_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function DataGridComponent_Conditional_2_For_2_Conditional_1_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.filterValues[f_r3.field], $event) || (ctx_r3.filterValues[f_r3.field] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function DataGridComponent_Conditional_2_For_2_Conditional_1_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onFilterKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r3.field);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterValues[f_r3.field]);
    \u0275\u0275property("placeholder", f_r3.label);
  }
}
function DataGridComponent_Conditional_2_For_2_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    \u0275\u0275property("value", o_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r6.label, " ");
  }
}
function DataGridComponent_Conditional_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function DataGridComponent_Conditional_2_For_2_Conditional_2_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.filterValues[f_r3.field], $event) || (ctx_r3.filterValues[f_r3.field] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DataGridComponent_Conditional_2_For_2_Conditional_2_For_4_Template, 2, 2, "option", 22, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r3.field);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterValues[f_r3.field]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(f_r3.options);
  }
}
function DataGridComponent_Conditional_2_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-datepicker", 23);
    \u0275\u0275twoWayListener("ngModelChange", function DataGridComponent_Conditional_2_For_2_Conditional_3_Template_app_datepicker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.filterValues[f_r3.field], $event) || (ctx_r3.filterValues[f_r3.field] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function DataGridComponent_Conditional_2_For_2_Conditional_3_Template_app_datepicker_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onFilterKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r3.field);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterValues[f_r3.field]);
    \u0275\u0275property("placeholder", f_r3.label);
  }
}
function DataGridComponent_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function DataGridComponent_Conditional_2_For_2_Conditional_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.filterValues[f_r3.field], $event) || (ctx_r3.filterValues[f_r3.field] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", f_r3.field);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterValues[f_r3.field]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r3.label, " ");
  }
}
function DataGridComponent_Conditional_2_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-autocomplete-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function DataGridComponent_Conditional_2_For_2_Conditional_5_Template_app_autocomplete_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.filterValues[f_r3.field], $event) || (ctx_r3.filterValues[f_r3.field] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r3.field);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterValues[f_r3.field]);
    \u0275\u0275property("placeholder", f_r3.label)("options", f_r3.options ?? \u0275\u0275pureFunction0(5, _c0))("multiple", f_r3.multiple ?? false);
  }
}
function DataGridComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 7);
    \u0275\u0275conditionalCreate(1, DataGridComponent_Conditional_2_For_2_Conditional_1_Template, 1, 3, "input", 14);
    \u0275\u0275conditionalCreate(2, DataGridComponent_Conditional_2_For_2_Conditional_2_Template, 5, 2, "select", 15);
    \u0275\u0275conditionalCreate(3, DataGridComponent_Conditional_2_For_2_Conditional_3_Template, 1, 3, "app-datepicker", 16);
    \u0275\u0275conditionalCreate(4, DataGridComponent_Conditional_2_For_2_Conditional_4_Template, 4, 3, "div", 17);
    \u0275\u0275conditionalCreate(5, DataGridComponent_Conditional_2_For_2_Conditional_5_Template, 1, 6, "app-autocomplete-select", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275property("xs", f_r3.size || "2");
    \u0275\u0275advance();
    \u0275\u0275conditional(!f_r3.type || f_r3.type === "text" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r3.type === "select" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r3.type === "date" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r3.type === "checkbox" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r3.type === "autocomplete" ? 5 : -1);
  }
}
function DataGridComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275repeaterCreate(1, DataGridComponent_Conditional_2_For_2_Template, 6, 6, "c-col", 7, _forTrack0);
    \u0275\u0275elementStart(3, "c-col", 8)(4, "div", 9)(5, "button", 10);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.applyFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(8, "svg", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("gutter", 3);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = ctx_r3.searchConfig()) == null ? null : tmp_2_0.fields);
    \u0275\u0275advance(5);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilFilterX);
  }
}
function DataGridComponent_Conditional_3_For_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const action_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("cIcon", action_r11.icon);
  }
}
function DataGridComponent_Conditional_3_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_3_For_3_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const action_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(action_r11.action(ctx_r3.toolbarContext()));
    });
    \u0275\u0275conditionalCreate(1, DataGridComponent_Conditional_3_For_3_Conditional_0_Conditional_1_Template, 1, 1, ":svg:svg", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", action_r11.color || "primary")("disabled", action_r11.disabled == null ? null : action_r11.disabled(ctx_r3.toolbarContext()));
    \u0275\u0275advance();
    \u0275\u0275conditional(action_r11.icon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r11.label, " ");
  }
}
function DataGridComponent_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DataGridComponent_Conditional_3_For_3_Conditional_0_Template, 3, 4, "button", 28);
  }
  if (rf & 2) {
    const action_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!action_r11.visible || action_r11.visible(ctx_r3.toolbarContext()) ? 0 : -1);
  }
}
function DataGridComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr");
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275repeaterCreate(2, DataGridComponent_Conditional_3_For_3_Template, 1, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_1_0 = ctx_r3.toolbarConfig()) == null ? null : tmp_1_0.actions);
  }
}
function DataGridComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 30);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilFrown);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx_r3.emptyStateConfig()) == null ? null : tmp_2_0.title) || "No data found", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r3.emptyStateConfig()) == null ? null : tmp_3_0.description) || "Try changing filters", " ");
  }
}
function DataGridComponent_Conditional_6_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 37);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_6_Conditional_3_Conditional_1_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleAllRows($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("checked", ctx_r3.areAllRowsSelected());
  }
}
function DataGridComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275conditionalCreate(1, DataGridComponent_Conditional_6_Conditional_3_Conditional_1_Template, 1, 1, "input", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r3.selectionConfig()) == null ? null : tmp_2_0.mode) === "multiple" ? 1 : -1);
  }
}
function DataGridComponent_Conditional_6_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getSortIcon(column_r14), " ");
  }
}
function DataGridComponent_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_6_For_5_Template_th_click_0_listener() {
      const column_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sort(column_r14));
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, DataGridComponent_Conditional_6_For_5_Conditional_3_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", column_r14.width);
    \u0275\u0275classProp("sortable", column_r14.sortable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", column_r14.header, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.sortingEnabled() && column_r14.sortable ? 3 : -1);
  }
}
function DataGridComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "c-spinner", 41);
    \u0275\u0275elementStart(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx_r3.loadingConfig()) == null ? null : tmp_2_0.text) || "Loading...", " ");
  }
}
function DataGridComponent_Conditional_6_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 37);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_6_For_9_Conditional_1_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const row_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRowSelection($event, row_r16));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.isSelected(row_r16));
  }
}
function DataGridComponent_Conditional_6_For_9_For_3_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataGridComponent_Conditional_6_For_9_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataGridComponent_Conditional_6_For_9_For_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 46);
  }
  if (rf & 2) {
    const column_r18 = \u0275\u0275nextContext().$implicit;
    const row_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", column_r18.template)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c1, row_r16, row_r16, ctx_r3.selectedRows()));
  }
}
function DataGridComponent_Conditional_6_For_9_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
  if (rf & 2) {
    const column_r18 = \u0275\u0275nextContext().$implicit;
    const row_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r3.renderCell(row_r16, column_r18), \u0275\u0275sanitizeHtml);
  }
}
function DataGridComponent_Conditional_6_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, DataGridComponent_Conditional_6_For_9_For_3_Conditional_1_Template, 1, 6, "ng-container")(2, DataGridComponent_Conditional_6_For_9_For_3_Conditional_2_Template, 1, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r18 = ctx.$implicit;
    \u0275\u0275classMap(column_r18.className);
    \u0275\u0275advance();
    \u0275\u0275conditional(column_r18.template ? 1 : 2);
  }
}
function DataGridComponent_Conditional_6_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43);
    \u0275\u0275listener("contextmenu", function DataGridComponent_Conditional_6_For_9_Template_tr_contextmenu_0_listener($event) {
      const row_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openContextMenu($event, row_r16));
    })("click", function DataGridComponent_Conditional_6_For_9_Template_tr_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeContextMenu());
    });
    \u0275\u0275conditionalCreate(1, DataGridComponent_Conditional_6_For_9_Conditional_1_Template, 2, 1, "td");
    \u0275\u0275repeaterCreate(2, DataGridComponent_Conditional_6_For_9_For_3_Template, 3, 3, "td", 44, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const \u0275$index_109_r19 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("datagrid-row-even", \u0275$index_109_r19 % 2 === 0)("datagrid-row-odd", \u0275$index_109_r19 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r3.selectionConfig()) == null ? null : tmp_13_0.enabled) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.columns());
  }
}
function DataGridComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 3)(1, "thead")(2, "tr");
    \u0275\u0275conditionalCreate(3, DataGridComponent_Conditional_6_Conditional_3_Template, 2, 1, "th", 32);
    \u0275\u0275repeaterCreate(4, DataGridComponent_Conditional_6_For_5_Template, 4, 6, "th", 33, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275conditionalCreate(7, DataGridComponent_Conditional_6_Conditional_7_Template, 4, 1, "div", 34);
    \u0275\u0275repeaterCreate(8, DataGridComponent_Conditional_6_For_9_Template, 4, 5, "tr", 35, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r3.selectionConfig()) == null ? null : tmp_1_0.enabled) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.columns());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.loading() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.displayedRows());
  }
}
function DataGridComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_8_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearSelection());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function DataGridComponent_Conditional_8_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 53);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_8_For_7_Template_button_click_2_listener() {
      const row_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeSelectedRow(row_r22));
    });
    \u0275\u0275text(3, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getSelectionLabel(row_r22), " ");
  }
}
function DataGridComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DataGridComponent_Conditional_8_Conditional_4_Template, 2, 0, "button", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 50);
    \u0275\u0275repeaterCreate(6, DataGridComponent_Conditional_8_For_7_Template, 4, 1, "span", 51, _forTrack3, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("max-height", ((tmp_1_0 = ctx_r3.selectionSummaryConfig()) == null ? null : tmp_1_0.maxHeight) || "90px");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ((tmp_2_0 = ctx_r3.selectionSummaryConfig()) == null ? null : tmp_2_0.label) || "Selected", " (", ctx_r3.selectedRows().length, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r3.selectionSummaryConfig()) == null ? null : tmp_3_0.clearButton) !== false ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.selectedRows());
  }
}
function DataGridComponent_Conditional_9_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r25 = ctx.$implicit;
    \u0275\u0275property("value", size_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r25, " ");
  }
}
function DataGridComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "span");
    \u0275\u0275text(2, "Righe per pagina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 57);
    \u0275\u0275listener("change", function DataGridComponent_Conditional_9_Conditional_1_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePageSize($event.target.value));
    });
    \u0275\u0275repeaterCreate(4, DataGridComponent_Conditional_9_Conditional_1_For_5_Template, 2, 2, "option", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_2_0 = ctx_r3.paginationConfig()) == null ? null : tmp_2_0.pageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(((tmp_3_0 = ctx_r3.paginationConfig()) == null ? null : tmp_3_0.pageSizes) ?? \u0275\u0275pureFunction0(1, _c2));
  }
}
function DataGridComponent_Conditional_9_For_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function DataGridComponent_Conditional_9_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_9_For_17_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const p_r27 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(p_r27));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", p_r27 === ctx_r3.paginationConfig().page ? "primary" : "secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r27, " ");
  }
}
function DataGridComponent_Conditional_9_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DataGridComponent_Conditional_9_For_17_Conditional_0_Template, 2, 0, "span", 58)(1, DataGridComponent_Conditional_9_For_17_Conditional_1_Template, 2, 2, "button", 59);
  }
  if (rf & 2) {
    const p_r27 = ctx.$implicit;
    \u0275\u0275conditional(p_r27 === "ellipsis" ? 0 : 1);
  }
}
function DataGridComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, DataGridComponent_Conditional_9_Conditional_1_Template, 6, 2, "div", 39);
    \u0275\u0275elementStart(2, "div", 54);
    \u0275\u0275text(3, " Mostra ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " - ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " di ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " items ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 55)(14, "button", 56);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changePage(ctx_r3.paginationConfig().page - 1));
    });
    \u0275\u0275text(15, " Indietro ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, DataGridComponent_Conditional_9_For_17_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(18, "button", 56);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_9_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changePage(ctx_r3.paginationConfig().page + 1));
    });
    \u0275\u0275text(19, " Avanti ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r3.paginationConfig()) == null ? null : tmp_1_0.showPageSizeSelector) ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.pageStart());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.pageEnd());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.totalItems());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.paginationConfig().page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.paginationPages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.paginationConfig().page === ctx_r3.totalPages);
  }
}
function DataGridComponent_Conditional_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataGridComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function DataGridComponent_Conditional_10_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(1, DataGridComponent_Conditional_10_ng_container_1_Template, 1, 0, "ng-container", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r3.contextMenuX(), "px")("top", ctx_r3.contextMenuY(), "px");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.contextMenuConfig().template)("ngTemplateOutletContext", \u0275\u0275pureFunction3(6, _c3, ctx_r3.contextMenuRow(), ctx_r3.contextMenuRow(), ctx_r3.closeContextMenu.bind(ctx_r3)));
  }
}
var DataGridComponent = class _DataGridComponent {
  constructor() {
    this.loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = input([], ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columns = input.required(...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paginationConfig = input(...ngDevMode ? [void 0, { debugName: "paginationConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchConfig = input(...ngDevMode ? [void 0, { debugName: "searchConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortingConfig = input(...ngDevMode ? [void 0, { debugName: "sortingConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loadingConfig = input(...ngDevMode ? [void 0, { debugName: "loadingConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyStateConfig = input(...ngDevMode ? [void 0, { debugName: "emptyStateConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toolbarConfig = input(...ngDevMode ? [void 0, { debugName: "toolbarConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.persistConfig = input(...ngDevMode ? [void 0, { debugName: "persistConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectionSummaryConfig = input(...ngDevMode ? [void 0, { debugName: "selectionSummaryConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contextMenuConfig = input(...ngDevMode ? [void 0, { debugName: "contextMenuConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contextMenuRow = signal(null, ...ngDevMode ? [{ debugName: "contextMenuRow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contextMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "contextMenuOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contextMenuX = signal(0, ...ngDevMode ? [{ debugName: "contextMenuX" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contextMenuY = signal(0, ...ngDevMode ? [{ debugName: "contextMenuY" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectionConfig = input(...ngDevMode ? [void 0, { debugName: "selectionConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectionChange = new EventEmitter();
    this.selectedRows = signal([], ...ngDevMode ? [{ debugName: "selectedRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dataRequest = new EventEmitter();
    this.icons = { cilSearch, cilFilterX, cilFrown };
    this.selectedField = "";
    this.searchValue = "";
    this.filterValues = {};
    this.currentField = "";
    this.currentOperator = "contains";
    this.currentValue = "";
    this.currentSorting = null;
    this.displayedRows = computed(() => {
      const rows = this.rows();
      const pagination = this.paginationConfig();
      if (!pagination?.enabled) {
        return rows;
      }
      if (pagination.serverSide) {
        return rows;
      }
      const start = (pagination.page - 1) * pagination.pageSize;
      const end = start + pagination.pageSize;
      return rows.slice(start, end);
    }, ...ngDevMode ? [{ debugName: "displayedRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hasRows = computed(() => this.displayedRows().length > 0, ...ngDevMode ? [{ debugName: "hasRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageItemsCount = computed(() => this.displayedRows().length, ...ngDevMode ? [{ debugName: "pageItemsCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalItems = computed(() => this.paginationConfig()?.totalItems ?? this.rows().length, ...ngDevMode ? [{ debugName: "totalItems" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageStart = computed(() => {
      const pagination = this.paginationConfig();
      if (!pagination?.enabled) {
        return 0;
      }
      return (pagination.page - 1) * pagination.pageSize + 1;
    }, ...ngDevMode ? [{ debugName: "pageStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageEnd = computed(() => {
      const pagination = this.paginationConfig();
      if (!pagination?.enabled) {
        return this.displayedRows().length;
      }
      return Math.min(this.pageStart() + this.displayedRows().length - 1, this.totalItems());
    }, ...ngDevMode ? [{ debugName: "pageEnd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paginationPages = computed(() => {
      const pagination = this.paginationConfig();
      if (!pagination) {
        return [];
      }
      const current = pagination.page;
      const total = this.totalPages;
      const pages = [];
      const start = Math.max(1, current - 2);
      const end = Math.min(total, current + 2);
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push("ellipsis");
        }
      }
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (end < total) {
        if (end < total - 1) {
          pages.push("ellipsis");
        }
        pages.push(total);
      }
      return pages;
    }, ...ngDevMode ? [{ debugName: "paginationPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortingEnabled = computed(() => this.sortingConfig()?.enabled === true, ...ngDevMode ? [{ debugName: "sortingEnabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toolbarContext = computed(() => ({
      selectedRows: this.selectedRows()
    }), ...ngDevMode ? [{ debugName: "toolbarContext" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  onDocumentClick() {
    this.closeContextMenu();
  }
  ngOnInit() {
    this.searchConfig()?.fields.forEach((f) => {
      if (f.type === "checkbox") {
        this.filterValues[f.field] ??= false;
      } else if (f.type === "autocomplete" && f.multiple) {
        this.filterValues[f.field] ??= [];
      } else {
        this.filterValues[f.field] ??= "";
      }
    });
    this.restoreState();
    if (this.sortingConfig()?.defaultSorting && !this.currentSorting) {
      const defaultSorting = this.sortingConfig()?.defaultSorting ?? null;
      this.currentSorting = defaultSorting;
    }
  }
  applyFilters() {
    const filters = this.buildFilters();
    const request = {
      filters,
      sorting: this.currentSorting
    };
    const pagination = this.paginationConfig();
    if (pagination?.enabled && pagination.serverSide) {
      request.pagination = {
        page: 1,
        pageSize: pagination.pageSize
      };
    }
    this.dataRequest.emit(request);
    this.saveState();
  }
  clearFilters() {
    this.searchConfig()?.fields.forEach((f) => {
      if (f.type === "checkbox") {
        this.filterValues[f.field] = false;
      } else if (f.type === "autocomplete" && f.multiple) {
        this.filterValues[f.field] = [];
      } else {
        this.filterValues[f.field] = "";
      }
    });
    this.applyFilters();
  }
  renderCell(row, column) {
    if (column.render) {
      return column.render(row, column);
    }
    return String(row[column.field] ?? "");
  }
  get totalPages() {
    if (!this.paginationConfig()) {
      return 0;
    }
    return Math.ceil((this.paginationConfig()?.totalItems || 0) / (this.paginationConfig()?.pageSize || 0));
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  buildFilters() {
    return this.searchConfig()?.fields.filter((f) => {
      const value = this.filterValues[f.field];
      if (f.type === "checkbox") {
        return value === true;
      }
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value !== null && value !== void 0 && value !== "";
    }).map((f) => ({
      field: f.field,
      operator: f.operator ?? "equals",
      value: this.filterValues[f.field]
    })) ?? [];
  }
  changePage(page) {
    const pagination = this.paginationConfig();
    if (!pagination) {
      return;
    }
    const request = {
      filters: this.buildFilters(),
      sorting: this.currentSorting,
      pagination: {
        page,
        pageSize: pagination.pageSize
      }
    };
    this.dataRequest.emit(request);
  }
  changePageSize(size) {
    const pagination = this.paginationConfig();
    if (!pagination) {
      return;
    }
    const request = {
      filters: this.buildFilters(),
      sorting: this.currentSorting,
      pagination: {
        page: 1,
        pageSize: Number(size)
      }
    };
    this.dataRequest.emit(request);
  }
  sort(column) {
    if (!this.sortingConfig()?.enabled || !column.sortable) {
      return;
    }
    if (!this.currentSorting || this.currentSorting.field !== column.field) {
      this.currentSorting = {
        field: column.field.toString(),
        direction: "asc"
      };
    } else if (this.currentSorting.direction === "asc") {
      this.currentSorting = {
        field: column.field.toString(),
        direction: "desc"
      };
    } else {
      this.currentSorting = null;
    }
    this.applyFilters();
  }
  isSorted(column) {
    return this.currentSorting?.field === column.field;
  }
  getSortIcon(column) {
    if (!this.isSorted(column)) {
      return "\u2195";
    }
    return this.currentSorting?.direction === "asc" ? "\u2191" : "\u2193";
  }
  onFilterKeydown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.applyFilters();
    }
  }
  saveState() {
    const persist = this.persistConfig();
    if (!persist?.enabled) {
      return;
    }
    const state = {
      filters: this.filterValues,
      sorting: this.currentSorting
    };
    localStorage.setItem(persist.storageKey, JSON.stringify(state));
  }
  restoreState() {
    const persist = this.persistConfig();
    if (!persist?.enabled) {
      return;
    }
    const savedState = localStorage.getItem(persist.storageKey);
    if (!savedState) {
      return;
    }
    const state = JSON.parse(savedState);
    Object.assign(this.filterValues, state.filters ?? {});
    this.currentSorting = state.sorting ?? null;
  }
  openContextMenu(event, row) {
    const config = this.contextMenuConfig();
    if (!config?.enabled) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.contextMenuRow.set(row);
    this.contextMenuX.set(event.clientX);
    this.contextMenuY.set(event.clientY);
    this.contextMenuOpen.set(true);
  }
  closeContextMenu() {
    this.contextMenuOpen.set(false);
    this.contextMenuRow.set(null);
  }
  getRowKey(row) {
    const key = this.selectionConfig()?.rowKey;
    return key ? row[key] : row;
  }
  isSelected(row) {
    const rowKey = this.getRowKey(row);
    return this.selectedRows().some((selected) => this.getRowKey(selected) === rowKey);
  }
  toggleRowSelection(event, row) {
    event.stopPropagation();
    const config = this.selectionConfig();
    if (!config?.enabled) {
      return;
    }
    if (config.mode === "single") {
      this.selectedRows.set(this.isSelected(row) ? [] : [row]);
    } else {
      this.selectedRows.update((rows) => this.isSelected(row) ? rows.filter((selected) => this.getRowKey(selected) !== this.getRowKey(row)) : [...rows, row]);
    }
    this.emitSelection();
  }
  toggleAllRows(event) {
    event.stopPropagation();
    const config = this.selectionConfig();
    if (!config?.enabled || config.mode !== "multiple") {
      return;
    }
    this.selectedRows.set(this.areAllRowsSelected() ? [] : [...this.displayedRows()]);
    this.emitSelection();
  }
  areAllRowsSelected() {
    const rows = this.displayedRows();
    return rows.length > 0 && rows.every((row) => this.isSelected(row));
  }
  emitSelection() {
    this.selectionChange.emit({
      selectedRows: this.selectedRows()
    });
  }
  getSelectionLabel(row) {
    const field = this.selectionSummaryConfig()?.displayField;
    if (!field) {
      return "";
    }
    return String(row[field] ?? "");
  }
  removeSelectedRow(row) {
    this.selectedRows.update((rows) => rows.filter((selected) => this.getRowKey(selected) !== this.getRowKey(row)));
    this.emitSelection();
  }
  clearSelection() {
    this.selectedRows.set([]);
    this.emitSelection();
  }
  static {
    this.\u0275fac = function DataGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataGridComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataGridComponent, selectors: [["app-datagrid"]], hostBindings: function DataGridComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DataGridComponent_click_HostBindingHandler() {
          return ctx.onDocumentClick();
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { loading: [1, "loading"], rows: [1, "rows"], columns: [1, "columns"], paginationConfig: [1, "paginationConfig"], searchConfig: [1, "searchConfig"], sortingConfig: [1, "sortingConfig"], loadingConfig: [1, "loadingConfig"], emptyStateConfig: [1, "emptyStateConfig"], toolbarConfig: [1, "toolbarConfig"], persistConfig: [1, "persistConfig"], selectionSummaryConfig: [1, "selectionSummaryConfig"], contextMenuConfig: [1, "contextMenuConfig"], selectionConfig: [1, "selectionConfig"] }, outputs: { selectionChange: "selectionChange", dataRequest: "dataRequest" }, decls: 11, vars: 6, consts: [[1, "my-4"], ["cForm", "", "cRow", "", 3, "gutter"], [1, "datagrid-empty-state"], ["cTable", ""], [1, "datagrid-selection-summary", "mb-3", 3, "max-height"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap"], [1, "datagrid-context-menu", 3, "left", "top"], [3, "xs"], ["xs", "2"], [1, "d-flex", "gap-2", "flex-wrap"], ["cButton", "", "color", "primary", "variant", "ghost", "shape", "rounded-pill", 3, "click"], ["title", "Ricerca", 3, "cIcon"], ["cButton", "", "color", "danger", "variant", "ghost", "shape", "rounded-pill", 3, "click"], ["title", "Pulisci Filtri", 3, "cIcon"], ["cFormControl", "", "type", "text", 3, "name", "ngModel", "placeholder"], ["cSelect", "", 3, "name", "ngModel"], ["min", "1900-01-01", "max", "2100-12-31", 3, "name", "ngModel", "placeholder"], [1, "form-check", "mt-2"], [3, "name", "ngModel", "placeholder", "options", "multiple"], ["cFormControl", "", "type", "text", 3, "ngModelChange", "keydown", "name", "ngModel", "placeholder"], ["cSelect", "", 3, "ngModelChange", "name", "ngModel"], ["value", ""], [3, "value"], ["min", "1900-01-01", "max", "2100-12-31", 3, "ngModelChange", "keydown", "name", "ngModel", "placeholder"], ["cFormCheckInput", "", "type", "checkbox", 3, "ngModelChange", "name", "ngModel"], [1, "form-check-label"], [3, "ngModelChange", "name", "ngModel", "placeholder", "options", "multiple"], [1, "d-flex", "gap-2", "mb-3", "flex-wrap", "justify-content-end"], ["cButton", "", "variant", "ghost", "shape", "rounded-pill", "size", "sm", 3, "color", "disabled"], ["cButton", "", "variant", "ghost", "shape", "rounded-pill", "size", "sm", 3, "click", "color", "disabled"], ["title", "Pulisci Filtri", "size", "3xl", 1, "mb-3", "text-medium-emphasis", 3, "cIcon"], [1, "text-medium-emphasis"], [2, "width", "48px"], [3, "width", "sortable"], [1, "datagrid-loading-overlay"], [3, "datagrid-row-even", "datagrid-row-odd"], ["cFormCheckInput", "", "type", "checkbox", 3, "checked"], ["cFormCheckInput", "", "type", "checkbox", 3, "click", "checked"], [3, "click"], [1, "d-flex", "align-items-center", "gap-2"], [1, "sort-icon"], ["size", "sm"], [1, "ms-2"], [3, "contextmenu", "click"], [3, "class"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datagrid-selection-summary", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["cButton", "", "size", "sm", "color", "secondary", "variant", "ghost"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "datagrid-selection-chip"], ["cButton", "", "size", "sm", "color", "secondary", "variant", "ghost", 3, "click"], ["type", "button", 1, "datagrid-selection-chip-close", 3, "click"], [1, "d-flex", "gap-1", "align-items-center", "text-body-secondary", "small"], [1, "d-flex", "gap-1", "align-items-center"], ["cButton", "", "color", "secondary", "size", "sm", "variant", "ghost", 3, "click", "disabled"], ["cSelect", "", 2, "width", "120px", 3, "change", "value"], [1, "px-2", "text-body-secondary"], ["cButton", "", "size", "sm", "variant", "ghost", 3, "color"], ["cButton", "", "size", "sm", "variant", "ghost", 3, "click", "color"], [1, "datagrid-context-menu", 3, "click"]], template: function DataGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-card", 0)(1, "c-card-header");
        \u0275\u0275conditionalCreate(2, DataGridComponent_Conditional_2_Template, 9, 3, "form", 1);
        \u0275\u0275conditionalCreate(3, DataGridComponent_Conditional_3_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "c-card-body");
        \u0275\u0275conditionalCreate(5, DataGridComponent_Conditional_5_Template, 6, 3, "div", 2)(6, DataGridComponent_Conditional_6_Template, 10, 2, "table", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "c-card-footer");
        \u0275\u0275conditionalCreate(8, DataGridComponent_Conditional_8_Template, 8, 5, "div", 4);
        \u0275\u0275conditionalCreate(9, DataGridComponent_Conditional_9_Template, 20, 6, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, DataGridComponent_Conditional_10_Template, 2, 10, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_0_0 = ctx.searchConfig()) == null ? null : tmp_0_0.enabled) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_1_0 = ctx.toolbarConfig()) == null ? null : tmp_1_0.enabled) ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() && !ctx.hasRows() ? 5 : 6);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_3_0 = ctx.selectionSummaryConfig()) == null ? null : tmp_3_0.enabled) && ctx.selectedRows().length > 0 ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_4_0 = ctx.paginationConfig()) == null ? null : tmp_4_0.enabled) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.contextMenuOpen() && ctx.contextMenuRow() ? 10 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgTemplateOutlet,
      TableModule,
      TableDirective,
      ButtonModule,
      ButtonDirective,
      BadgeModule,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      CardHeaderComponent,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      ColComponent,
      FormControlDirective,
      FormDirective,
      GutterDirective,
      RowDirective,
      IconDirective,
      FormSelectDirective,
      DatepickerComponent,
      SpinnerComponent,
      FormCheckInputDirective,
      AutocompleteSelectComponent
    ], styles: ["\n.datagrid-loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  background: color-mix(in srgb, var(--cui-body-bg) 85%, transparent);\n  color: var(--cui-body-color);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 10;\n}\nc-card-body[_ngcontent-%COMP%] {\n  position: relative;\n}\n.datagrid-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  border-radius: 0.5rem;\n  min-height: 250px;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    color 0.2s ease;\n  background-color: var(--cui-body-bg);\n  border: 1px solid var(--cui-border-color);\n  color: var(--cui-body-color);\n}\n.datagrid-empty-state[_ngcontent-%COMP%]   c-icon[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.datagrid-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--cui-secondary-color);\n}\n.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.15s ease;\n}\n.sortable[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\n[data-coreui-theme=dark][_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\ntable[cTable][_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-right: 1px dotted color-mix(in srgb, var(--cui-border-color) 20%, transparent);\n}\ntable[cTable][_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\ntable[cTable][_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.datagrid-row-even[_ngcontent-%COMP%] {\n  --cui-table-bg: color-mix( in srgb, var(--cui-secondary) 12%, var(--cui-body-bg) );\n}\ntable[cTable][_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  --cui-table-bg: color-mix( in srgb, var(--cui-secondary) 18%, var(--cui-body-bg) );\n}\n[_nghost-%COMP%]     table.table tbody tr.datagrid-row-even > td {\n  background-color: color-mix(in srgb, var(--cui-secondary) 12%, var(--app-surface)) !important;\n}\n[_nghost-%COMP%]     table.table tbody tr:hover > td {\n  background-color: color-mix(in srgb, var(--cui-secondary) 18%, var(--app-surface)) !important;\n}\n.datagrid-context-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1050;\n  min-width: 180px;\n  padding: 0.5rem;\n  border: 1px solid var(--cui-border-color);\n  border-radius: 0.5rem;\n  background: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  box-shadow: var(--cui-box-shadow-lg);\n}\n.datagrid-context-menu[_ngcontent-%COMP%] {\n  background: var(--cui-body-bg);\n  box-shadow: var(--cui-box-shadow-lg);\n  border: none;\n  border-radius: 0;\n  padding: 0;\n}\n.datagrid-selection-summary[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 0.75rem;\n  border: 1px solid var(--cui-border-color);\n  border-radius: 0.5rem;\n  background: var(--cui-tertiary-bg);\n}\n.datagrid-selection-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.25rem 0.55rem;\n  border-radius: 999px;\n  background: var(--cui-secondary);\n  color: white;\n  border: 1px solid var(--cui-primary-border);\n  font-size: 0.8rem;\n}\n.datagrid-selection-chip-close[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: inherit;\n  cursor: pointer;\n  font-weight: bold;\n  line-height: 1;\n}\n/*# sourceMappingURL=data-grid.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataGridComponent, [{
    type: Component,
    args: [{ selector: "app-datagrid", standalone: true, imports: [
      CommonModule,
      TableModule,
      ButtonModule,
      BadgeModule,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      CardHeaderComponent,
      TableDirective,
      FormsModule,
      ColComponent,
      FormControlDirective,
      FormDirective,
      GutterDirective,
      RowDirective,
      IconDirective,
      FormSelectDirective,
      DatepickerComponent,
      SpinnerComponent,
      FormCheckInputDirective,
      AutocompleteSelectComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<c-card class="my-4">\r
  <!-- HEADER -->\r
  <c-card-header>\r
    @if (searchConfig()?.enabled) {\r
      <form [gutter]="3" cForm cRow>\r
        @for (f of searchConfig()?.fields; track f.field) {\r
          <c-col [xs]="f.size || '2'">\r
            @if (!f.type || f.type === "text") {\r
              <input\r
                cFormControl\r
                type="text"\r
                [name]="f.field"\r
                [(ngModel)]="filterValues[f.field]"\r
                [placeholder]="f.label"\r
                (keydown)="onFilterKeydown($event)"\r
              />\r
            }\r
            @if (f.type === "select") {\r
              <select\r
                cSelect\r
                [name]="f.field"\r
                [(ngModel)]="filterValues[f.field]"\r
              >\r
                <option value="">-</option>\r
                @for (o of f.options; track o.value) {\r
                  <option [value]="o.value">\r
                    {{ o.label }}\r
                  </option>\r
                }\r
              </select>\r
            }\r
            @if (f.type === "date") {\r
              <app-datepicker\r
                [name]="f.field"\r
                [(ngModel)]="filterValues[f.field]"\r
                [placeholder]="f.label"\r
                min="1900-01-01"\r
                max="2100-12-31"\r
                (keydown)="onFilterKeydown($event)"\r
              />\r
            }\r
            @if (f.type === "checkbox") {\r
              <div class="form-check mt-2">\r
                <input\r
                  cFormCheckInput\r
                  type="checkbox"\r
                  [name]="f.field"\r
                  [(ngModel)]="filterValues[f.field]"\r
                />\r
\r
                <label class="form-check-label">\r
                  {{ f.label }}\r
                </label>\r
              </div>\r
            }\r
            @if (f.type === "autocomplete") {\r
              <app-autocomplete-select\r
                [name]="f.field"\r
                [(ngModel)]="filterValues[f.field]"\r
                [placeholder]="f.label"\r
                [options]="f.options ?? []"\r
                [multiple]="f.multiple ?? false"\r
              />\r
            }\r
          </c-col>\r
        }\r
        <c-col xs="2">\r
          <div class="d-flex gap-2 flex-wrap">\r
            <button\r
              cButton\r
              color="primary"\r
              variant="ghost"\r
              shape="rounded-pill"\r
              (click)="applyFilters()"\r
            >\r
              <svg [cIcon]="icons.cilSearch" title="Ricerca"></svg>\r
            </button>\r
            <button\r
              cButton\r
              color="danger"\r
              variant="ghost"\r
              shape="rounded-pill"\r
              (click)="clearFilters()"\r
            >\r
              <svg [cIcon]="icons.cilFilterX" title="Pulisci Filtri"></svg>\r
            </button>\r
          </div>\r
        </c-col>\r
      </form>\r
    }\r
    @if (toolbarConfig()?.enabled) {\r
      <hr />\r
      <div class="d-flex gap-2 mb-3 flex-wrap justify-content-end">\r
        @for (action of toolbarConfig()?.actions; track action.label) {\r
          @if (!action.visible || action.visible(toolbarContext())) {\r
            <button\r
              cButton\r
              [color]="action.color || 'primary'"\r
              variant="ghost"\r
              shape="rounded-pill"\r
              [disabled]="action.disabled?.(toolbarContext())"\r
              (click)="action.action(toolbarContext())"\r
              size="sm"\r
            >\r
              <!-- ICON -->\r
              @if (action.icon) {\r
                <svg [cIcon]="action.icon" title="Pulisci Filtri"></svg>\r
              }\r
              {{ action.label }}\r
            </button>\r
          }\r
        }\r
      </div>\r
    }\r
  </c-card-header>\r
\r
  <!-- BODY -->\r
  <c-card-body>\r
    @if (!loading() && !hasRows()) {\r
      <div class="datagrid-empty-state">\r
        <!-- ICON -->\r
        <svg\r
          [cIcon]="icons.cilFrown"\r
          title="Pulisci Filtri"\r
          size="3xl"\r
          class="mb-3 text-medium-emphasis"\r
        ></svg>\r
\r
        <!-- TITLE -->\r
        <h5>\r
          {{ emptyStateConfig()?.title || "No data found" }}\r
        </h5>\r
\r
        <!-- DESCRIPTION -->\r
        <p class="text-medium-emphasis">\r
          {{ emptyStateConfig()?.description || "Try changing filters" }}\r
        </p>\r
      </div>\r
    } @else {\r
      <table cTable>\r
        <thead>\r
          <tr>\r
            @if (selectionConfig()?.enabled) {\r
              <th style="width: 48px">\r
                @if (selectionConfig()?.mode === "multiple") {\r
                  <input\r
                    cFormCheckInput\r
                    type="checkbox"\r
                    [checked]="areAllRowsSelected()"\r
                    (click)="toggleAllRows($event)"\r
                  />\r
                }\r
              </th>\r
            }\r
            @for (column of columns(); track column.field) {\r
              <!-- <th [style.width]="column.width" [class]="column.className">\r
                {{ column.header }}\r
              </th> -->\r
              <th\r
                [style.width]="column.width"\r
                (click)="sort(column)"\r
                [class.sortable]="column.sortable"\r
              >\r
                <div class="d-flex align-items-center gap-2">\r
                  {{ column.header }}\r
\r
                  @if (sortingEnabled() && column.sortable) {\r
                    <span class="sort-icon">\r
                      {{ getSortIcon(column) }}\r
                    </span>\r
                  }\r
                </div>\r
              </th>\r
            }\r
          </tr>\r
        </thead>\r
\r
        <tbody>\r
          @if (loading()) {\r
            <div class="datagrid-loading-overlay">\r
              <c-spinner size="sm"></c-spinner>\r
\r
              <span class="ms-2">\r
                {{ loadingConfig()?.text || "Loading..." }}\r
              </span>\r
            </div>\r
          }\r
\r
          @for (row of displayedRows(); track $index) {\r
            <tr\r
              [class.datagrid-row-even]="$even"\r
              [class.datagrid-row-odd]="$odd"\r
              (contextmenu)="openContextMenu($event, row)"\r
              (click)="closeContextMenu()"\r
            >\r
              @if (selectionConfig()?.enabled) {\r
                <td>\r
                  <input\r
                    cFormCheckInput\r
                    type="checkbox"\r
                    [checked]="isSelected(row)"\r
                    (click)="toggleRowSelection($event, row)"\r
                  />\r
                </td>\r
              }\r
              @for (column of columns(); track column.field) {\r
                <td [class]="column.className">\r
                  <!-- TEMPLATE MODE -->\r
                  @if (column.template) {\r
                    <ng-container\r
                      *ngTemplateOutlet="\r
                        column.template;\r
                        context: {\r
                          $implicit: row,\r
                          row: row,\r
                          selectedRows: selectedRows(),\r
                        }\r
                      "\r
                    />\r
                  }\r
                  <!-- STRING RENDER MODE -->\r
                  @else {\r
                    <span [innerHTML]="renderCell(row, column)"></span>\r
                  }\r
                </td>\r
              }\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    }\r
  </c-card-body>\r
\r
  <!-- FOOTER -->\r
  <c-card-footer>\r
    @if (selectionSummaryConfig()?.enabled && selectedRows().length > 0) {\r
      <div\r
        class="datagrid-selection-summary mb-3"\r
        [style.max-height]="selectionSummaryConfig()?.maxHeight || '90px'"\r
      >\r
        <div class="d-flex justify-content-between align-items-center mb-2">\r
          <strong>\r
            {{ selectionSummaryConfig()?.label || "Selected" }}\r
            ({{ selectedRows().length }})\r
          </strong>\r
\r
          @if (selectionSummaryConfig()?.clearButton !== false) {\r
            <button\r
              cButton\r
              size="sm"\r
              color="secondary"\r
              variant="ghost"\r
              (click)="clearSelection()"\r
            >\r
              Clear\r
            </button>\r
          }\r
        </div>\r
\r
        <div class="d-flex flex-wrap gap-2">\r
          @for (row of selectedRows(); track getRowKey(row)) {\r
            <span class="datagrid-selection-chip">\r
              {{ getSelectionLabel(row) }}\r
\r
              <button\r
                type="button"\r
                class="datagrid-selection-chip-close"\r
                (click)="removeSelectedRow(row)"\r
              >\r
                \xD7\r
              </button>\r
            </span>\r
          }\r
        </div>\r
      </div>\r
    }\r
    @if (paginationConfig()?.enabled) {\r
      <div\r
        class="d-flex align-items-center justify-content-between gap-3 flex-wrap"\r
      >\r
        @if (paginationConfig()?.showPageSizeSelector) {\r
          <div class="d-flex align-items-center gap-2">\r
            <span>Righe per pagina</span>\r
\r
            <select\r
              cSelect\r
              style="width: 120px"\r
              [value]="paginationConfig()?.pageSize"\r
              (change)="changePageSize($any($event.target).value)"\r
            >\r
              @for (\r
                size of paginationConfig()?.pageSizes ?? [5, 10, 25, 50];\r
                track size\r
              ) {\r
                <option [value]="size">\r
                  {{ size }}\r
                </option>\r
              }\r
            </select>\r
          </div>\r
        }\r
\r
        <div class="d-flex gap-1 align-items-center text-body-secondary small">\r
          Mostra\r
          <strong>{{ pageStart() }}</strong>\r
          -\r
          <strong>{{ pageEnd() }}</strong>\r
          di\r
          <strong>{{ totalItems() }}</strong>\r
          items\r
        </div>\r
\r
        <div class="d-flex gap-1 align-items-center">\r
          <button\r
            cButton\r
            color="secondary"\r
            size="sm"\r
            variant="ghost"\r
            [disabled]="paginationConfig()!.page === 1"\r
            (click)="changePage(paginationConfig()!.page - 1)"\r
          >\r
            Indietro\r
          </button>\r
\r
          @for (p of paginationPages(); track $index) {\r
            @if (p === "ellipsis") {\r
              <span class="px-2 text-body-secondary">...</span>\r
            } @else {\r
              <button\r
                cButton\r
                size="sm"\r
                variant="ghost"\r
                [color]="\r
                  p === paginationConfig()!.page ? 'primary' : 'secondary'\r
                "\r
                (click)="changePage(p)"\r
              >\r
                {{ p }}\r
              </button>\r
            }\r
          }\r
\r
          <button\r
            cButton\r
            color="secondary"\r
            size="sm"\r
            variant="ghost"\r
            [disabled]="paginationConfig()!.page === totalPages"\r
            (click)="changePage(paginationConfig()!.page + 1)"\r
          >\r
            Avanti\r
          </button>\r
        </div>\r
      </div>\r
    }\r
  </c-card-footer>\r
  @if (contextMenuOpen() && contextMenuRow()) {\r
    <div\r
      class="datagrid-context-menu"\r
      [style.left.px]="contextMenuX()"\r
      [style.top.px]="contextMenuY()"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <ng-container\r
        *ngTemplateOutlet="\r
          contextMenuConfig()!.template;\r
          context: {\r
            $implicit: contextMenuRow(),\r
            row: contextMenuRow(),\r
            close: closeContextMenu.bind(this),\r
          }\r
        "\r
      />\r
    </div>\r
  }\r
</c-card>\r
`, styles: ["/* src/components/data-grid/data-grid.component.scss */\n.datagrid-loading-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  background: color-mix(in srgb, var(--cui-body-bg) 85%, transparent);\n  color: var(--cui-body-color);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 10;\n}\nc-card-body {\n  position: relative;\n}\n.datagrid-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  border-radius: 0.5rem;\n  min-height: 250px;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    color 0.2s ease;\n  background-color: var(--cui-body-bg);\n  border: 1px solid var(--cui-border-color);\n  color: var(--cui-body-color);\n}\n.datagrid-empty-state c-icon {\n  opacity: 0.7;\n}\n.datagrid-empty-state p {\n  margin-top: 0.5rem;\n  color: var(--cui-secondary-color);\n}\n.sortable {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.15s ease;\n}\n.sortable:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.sort-icon {\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\n[data-coreui-theme=dark] .sortable:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\ntable[cTable] tbody td {\n  border-right: 1px dotted color-mix(in srgb, var(--cui-border-color) 20%, transparent);\n}\ntable[cTable] tbody td:last-child {\n  border-right: none;\n}\ntable[cTable] tbody tr.datagrid-row-even {\n  --cui-table-bg: color-mix( in srgb, var(--cui-secondary) 12%, var(--cui-body-bg) );\n}\ntable[cTable] tbody tr:hover {\n  --cui-table-bg: color-mix( in srgb, var(--cui-secondary) 18%, var(--cui-body-bg) );\n}\n:host ::ng-deep table.table tbody tr.datagrid-row-even > td {\n  background-color: color-mix(in srgb, var(--cui-secondary) 12%, var(--app-surface)) !important;\n}\n:host ::ng-deep table.table tbody tr:hover > td {\n  background-color: color-mix(in srgb, var(--cui-secondary) 18%, var(--app-surface)) !important;\n}\n.datagrid-context-menu {\n  position: fixed;\n  z-index: 1050;\n  min-width: 180px;\n  padding: 0.5rem;\n  border: 1px solid var(--cui-border-color);\n  border-radius: 0.5rem;\n  background: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  box-shadow: var(--cui-box-shadow-lg);\n}\n.datagrid-context-menu {\n  background: var(--cui-body-bg);\n  box-shadow: var(--cui-box-shadow-lg);\n  border: none;\n  border-radius: 0;\n  padding: 0;\n}\n.datagrid-selection-summary {\n  overflow-y: auto;\n  padding: 0.75rem;\n  border: 1px solid var(--cui-border-color);\n  border-radius: 0.5rem;\n  background: var(--cui-tertiary-bg);\n}\n.datagrid-selection-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.25rem 0.55rem;\n  border-radius: 999px;\n  background: var(--cui-secondary);\n  color: white;\n  border: 1px solid var(--cui-primary-border);\n  font-size: 0.8rem;\n}\n.datagrid-selection-chip-close {\n  border: 0;\n  background: transparent;\n  color: inherit;\n  cursor: pointer;\n  font-weight: bold;\n  line-height: 1;\n}\n/*# sourceMappingURL=data-grid.component.css.map */\n"] }]
  }], null, { loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: true }] }], paginationConfig: [{ type: Input, args: [{ isSignal: true, alias: "paginationConfig", required: false }] }], searchConfig: [{ type: Input, args: [{ isSignal: true, alias: "searchConfig", required: false }] }], sortingConfig: [{ type: Input, args: [{ isSignal: true, alias: "sortingConfig", required: false }] }], loadingConfig: [{ type: Input, args: [{ isSignal: true, alias: "loadingConfig", required: false }] }], emptyStateConfig: [{ type: Input, args: [{ isSignal: true, alias: "emptyStateConfig", required: false }] }], toolbarConfig: [{ type: Input, args: [{ isSignal: true, alias: "toolbarConfig", required: false }] }], persistConfig: [{ type: Input, args: [{ isSignal: true, alias: "persistConfig", required: false }] }], selectionSummaryConfig: [{ type: Input, args: [{ isSignal: true, alias: "selectionSummaryConfig", required: false }] }], contextMenuConfig: [{ type: Input, args: [{ isSignal: true, alias: "contextMenuConfig", required: false }] }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }], selectionConfig: [{ type: Input, args: [{ isSignal: true, alias: "selectionConfig", required: false }] }], selectionChange: [{
    type: Output
  }], dataRequest: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataGridComponent, { className: "DataGridComponent", filePath: "src/components/data-grid/data-grid.component.ts", lineNumber: 77 });
})();

// src/constants/datagrid.constants.ts
var DATAGRID_CONSTANTS = {
  enabled: true,
  page: 1,
  pageSize: 5,
  totalItems: 10,
  pageSizes: [5, 10, 25, 50],
  showPageNumbers: true,
  showPageSizeSelector: true,
  serverSide: true
};
var DATAGRID_CONSTANTS_NO_PAGINATION = {
  enabled: false,
  page: 1,
  pageSize: 999,
  totalItems: 999,
  pageSizes: [5, 10, 25, 50],
  showPageNumbers: true,
  showPageSizeSelector: true,
  serverSide: true
};

export {
  DataGridComponent,
  DATAGRID_CONSTANTS,
  DATAGRID_CONSTANTS_NO_PAGINATION
};
//# sourceMappingURL=chunk-D35SSEZ4.js.map
