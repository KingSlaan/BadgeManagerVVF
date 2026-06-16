import {
  AuthService
} from "./chunk-WZNRMLM6.js";
import {
  cilClock
} from "./chunk-Y5M6FWPP.js";
import {
  API_CONSTANTS,
  AvatarComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DatePipe,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FooterComponent,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  HttpClient,
  IconDirective,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  Platform,
  RouterLink,
  RouterOutlet,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  coerceElement,
  coerceNumberProperty,
  isPlatformBrowser
} from "./chunk-EDMDHGX2.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererStyleFlags2,
  Subject,
  Subscription,
  ViewChild,
  animationFrameScheduler,
  auditTime,
  computed,
  debounceTime,
  distinctUntilChanged,
  expand,
  filter,
  finalize,
  fromEvent,
  inject,
  input,
  map,
  merge,
  mergeMap,
  of,
  pairwise,
  setClassMetadata,
  signal,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ZA5ZBDLI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/services/version.service.ts
var VersionService = class _VersionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = API_CONSTANTS.BASE_URL;
  }
  getVersion() {
    return this.http.get("assets/version.json");
  }
  getVersionBE() {
    return this.http.get(`${this.apiUrl}/getVersion`);
  }
  static {
    this.\u0275fac = function VersionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VersionService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VersionService, factory: _VersionService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VersionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/layout/default-layout/default-footer/default-footer.component.ts
function DefaultFooterComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.versionInfo().version, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, ctx_r0.versionInfo().buildDate, "d MMM y"), " ");
  }
}
function DefaultFooterComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.versionInfoBE().version, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, ctx_r0.versionInfoBE().buildDate, "d MMM y"), " ");
  }
}
var DefaultFooterComponent = class _DefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
    this.versionService = inject(VersionService);
    this.versionInfo = signal({
      "version": "0.0.0-Catan",
      "environment": "development",
      "buildDate": ""
    }, ...ngDevMode ? [{ debugName: "versionInfo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.versionInfoBE = signal({
      "appName": "Applicativo Badge VVF",
      "version": "0.0.0",
      "buildDate": ""
    }, ...ngDevMode ? [{ debugName: "versionInfoBE" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngAfterViewInit() {
    this.versionService.getVersion().subscribe((data) => {
      setTimeout(() => {
        this.versionInfo.set(data ?? {});
      });
    });
    this.versionService.getVersionBE().subscribe({
      next: (data) => {
        this.versionInfoBE.set(data.data ?? {});
      },
      error: (err) => {
        console.error("Error loading tessere", err);
      }
    });
  }
  static {
    this.\u0275fac = function DefaultFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultFooterComponent, selectors: [["app-default-footer"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 2, consts: [[1, "footer-container"], [1, "footer-version-section"], [1, "version-card"], [1, "version-title"], [1, "version-number"], ["href", "https://bloob.io/yatch", "target", "_blank"], [1, "version-date"]], template: function DefaultFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
        \u0275\u0275text(5, "Frontend");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(6, DefaultFooterComponent_Conditional_6_Template, 5, 5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "div", 2)(8, "div", 3);
        \u0275\u0275text(9, "Backend");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(10, DefaultFooterComponent_Conditional_10_Template, 5, 5);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(11, "div", 2)(12, "div", 3);
        \u0275\u0275text(13, "Authors");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(14, "div", 4);
        \u0275\u0275text(15, " Powered by ");
        \u0275\u0275domElementStart(16, "a", 5)(17, "span");
        \u0275\u0275text(18, " SN, LG, MT");
        \u0275\u0275domElementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.versionInfo() ? 6 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.versionInfoBE() ? 10 : -1);
      }
    }, dependencies: [DatePipe], styles: ["\n.version-card[_ngcontent-%COMP%] {\n  min-width: 180px;\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--app-border);\n  border-radius: 8px;\n  background-color: var(--app-surface);\n  text-align: center;\n}\n.version-title[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--app-text-muted);\n}\n.version-number[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--app-text);\n}\n.version-date[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--app-text-muted);\n}\n.footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.footer-version-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.footer-container[_ngcontent-%COMP%]    > .version-card[_ngcontent-%COMP%]:last-child {\n  margin-left: auto;\n}\n/*# sourceMappingURL=default-footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultFooterComponent, [{
    type: Component,
    args: [{ selector: "app-default-footer", imports: [DatePipe], template: '<div class="footer-container">\r\n  <div class="footer-container">\r\n    <div class="footer-version-section">\r\n      <div class="version-card">\r\n        <div class="version-title">Frontend</div>\r\n\r\n        @if (versionInfo()) {\r\n          <div class="version-number">\r\n            {{ versionInfo().version }}\r\n          </div>\r\n\r\n          <div class="version-date">\r\n            {{ versionInfo().buildDate | date: "d MMM y" }}\r\n          </div>\r\n        }\r\n      </div>\r\n\r\n      <div class="version-card">\r\n        <div class="version-title">Backend</div>\r\n\r\n        @if (versionInfoBE()) {\r\n          <div class="version-number">\r\n            {{ versionInfoBE().version }}\r\n          </div>\r\n\r\n          <div class="version-date">\r\n            {{ versionInfoBE().buildDate | date: "d MMM y" }}\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n\r\n    <div class="version-card">\r\n      <div class="version-title">Authors</div>\r\n\r\n      <div class="version-number">\r\n        Powered by\r\n        <a href="https://bloob.io/yatch" target="_blank">\r\n          <span> SN, LG, MT</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n', styles: ["/* src/app/layout/default-layout/default-footer/default-footer.component.scss */\n.version-card {\n  min-width: 180px;\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--app-border);\n  border-radius: 8px;\n  background-color: var(--app-surface);\n  text-align: center;\n}\n.version-title {\n  font-size: 0.55rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--app-text-muted);\n}\n.version-number {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--app-text);\n}\n.version-date {\n  font-size: 0.65rem;\n  color: var(--app-text-muted);\n}\n.footer-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.footer-version-section {\n  display: flex;\n  gap: 1rem;\n}\n.footer-container > .version-card:last-child {\n  margin-left: auto;\n}\n/*# sourceMappingURL=default-footer.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultFooterComponent, { className: "DefaultFooterComponent", filePath: "src/app/layout/default-layout/default-footer/default-footer.component.ts", lineNumber: 13 });
})();

// src/assets/version.json
var version_default = {
  version: "1.3.1-Civolution",
  environment: "dev",
  buildDate: "2026-06-16T06:15:25.193Z"
};

// src/app/layout/default-layout/default-header/default-header.component.ts
var _c0 = () => ({ placement: "bottom-start" });
var _forTrack0 = ($index, $item) => $item.name;
function DefaultHeaderComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DefaultHeaderComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DefaultHeaderComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-dropdown", 11)(1, "button", 12);
    \u0275\u0275element(2, "c-avatar", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "h6", 15);
    \u0275\u0275text(6, " Settings ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li", 16)(8, "a", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(9, "svg", 18);
    \u0275\u0275text(10, " Change Avatar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "li")(12, "a", 19);
    \u0275\u0275listener("click", function DefaultHeaderComponent_ng_template_14_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(13, "svg", 20);
    \u0275\u0275text(14, " Logout ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("popperOptions", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
  }
}
function DefaultHeaderComponent_ng_template_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function DefaultHeaderComponent_ng_template_16_For_5_Template_button_click_0_listener() {
      const mode_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.colorMode.set(mode_r4.name));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r1.colorMode() === mode_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("name", mode_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r4.text, " ");
  }
}
function DefaultHeaderComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown", 21)(1, "button", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275repeaterCreate(4, DefaultHeaderComponent_ng_template_16_For_5_Template, 3, 3, "button", 25, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.icons());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.colorModes);
  }
}
var DefaultHeaderComponent = class _DefaultHeaderComponent extends HeaderComponent {
  #colorModeService;
  get envClass() {
    return `env-badge env-${this.version.environment}`;
  }
  get envLabel() {
    switch (this.version.environment) {
      case "production":
      case "prod":
        return "PROD";
      case "test":
        return "TEST";
      default:
        return "DEV";
    }
  }
  constructor() {
    super();
    this.iconsStatic = { cilClock };
    this.authService = inject(AuthService);
    this.#colorModeService = inject(ColorModeService);
    this.colorMode = this.#colorModeService.colorMode;
    this.colorModes = [
      { name: "light", text: "Light", icon: "cilSun" },
      { name: "dark", text: "Dark", icon: "cilMoon" },
      { name: "auto", text: "Auto", icon: "cilContrast" }
    ];
    this.icons = computed(() => {
      const currentMode = this.colorMode();
      return this.colorModes.find((mode) => mode.name === currentMode)?.icon ?? "cilSun";
    }, ...ngDevMode ? [{ debugName: "icons" }] : (
      /* istanbul ignore next */
      []
    ));
    this.version = version_default;
    this.currentTime = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentTime" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sidebarId = input("sidebar1", ...ngDevMode ? [{ debugName: "sidebarId" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentTime.set(/* @__PURE__ */ new Date());
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  get formattedDateTime() {
    return this.currentTime().toLocaleString("it-IT", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.\u0275fac = function DefaultHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultHeaderComponent, selectors: [["app-default-header"]], inputs: { sidebarId: [1, "sidebarId"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 9, consts: [["userDropdown", ""], ["themeDropdown", ""], [1, "border-bottom", "px-4", 3, "fluid"], ["cHeaderToggler", "", "toggle", "visible", "aria-label", "Toggle sidebar navigation", 1, "btn", 2, "margin-inline-start", "-14px", 3, "cSidebarToggle"], ["cIcon", "", "name", "cilMenu", "size", "lg"], [1, "mx-0", "d-flex", "align-items-center", "gap-2"], [3, "ngClass"], [1, "header-clock"], ["size", "sm", "title", "Time", 1, "me-1", 3, "cIcon"], [4, "ngTemplateOutlet"], [1, "px-4", 3, "fluid"], ["variant", "nav-item", 3, "popperOptions"], ["cDropdownToggle", "", "aria-label", "Open user menu", 1, "py-0", "pe-0", 3, "caret"], ["shape", "rounded-1", "size", "md", "src", "./assets/images/placeholder_icon_user.svg", "status", "success", "textColor", "primary", "alt", "User avatar"], ["cDropdownMenu", "", 1, "pt-0", "w-auto"], ["cDropdownHeader", "", 1, "bg-body-secondary", "text-body-secondary", "fw-semibold", "p-2"], [1, "pX-0"], ["cDropdownItem", "", "routerLink", "user-settings"], ["cIcon", "", "name", "cilSettings", 1, "me-2"], ["cDropdownItem", "", 3, "click"], ["cIcon", "", "name", "cilAccountLogout", 1, "me-2"], ["alignment", "end", "variant", "nav-item"], ["cDropdownToggle", "", "aria-label", "Open theme picker", 3, "caret"], ["cIcon", "", "size", "lg", 3, "name"], ["cDropdownMenu", ""], ["cDropdownItem", "", 1, "d-flex", "align-items-center", 3, "active"], ["cDropdownItem", "", 1, "d-flex", "align-items-center", 3, "click", "active"], ["cIcon", "", "size", "lg", 1, "me-2", 3, "name"]], template: function DefaultHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "c-container", 2)(2, "button", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(3, "svg", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(4, "c-header-nav", 5)(5, "span", 6);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(8, "svg", 8);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, DefaultHeaderComponent_ng_container_10_Template, 1, 0, "ng-container", 9)(11, DefaultHeaderComponent_ng_container_11_Template, 1, 0, "ng-container", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "c-container", 10);
        \u0275\u0275element(13, "c-breadcrumb-router");
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(14, DefaultHeaderComponent_ng_template_14_Template, 15, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, DefaultHeaderComponent_ng_template_16_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const userDropdown_r5 = \u0275\u0275reference(15);
        const themeDropdown_r6 = \u0275\u0275reference(17);
        \u0275\u0275advance();
        \u0275\u0275property("fluid", true);
        \u0275\u0275advance();
        \u0275\u0275property("cSidebarToggle", ctx.sidebarId());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.envClass);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.envLabel, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("cIcon", ctx.iconsStatic.cilClock);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.formattedDateTime, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", themeDropdown_r6);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", userDropdown_r5);
        \u0275\u0275advance();
        \u0275\u0275property("fluid", true);
      }
    }, dependencies: [
      AvatarComponent,
      ContainerComponent,
      HeaderTogglerDirective,
      SidebarToggleDirective,
      IconDirective,
      HeaderNavComponent,
      NgTemplateOutlet,
      BreadcrumbRouterComponent,
      DropdownComponent,
      DropdownToggleDirective,
      DropdownMenuDirective,
      DropdownItemDirective,
      RouterLink,
      NgClass
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-default-header", imports: [
      AvatarComponent,
      ContainerComponent,
      HeaderTogglerDirective,
      SidebarToggleDirective,
      IconDirective,
      HeaderNavComponent,
      NgTemplateOutlet,
      BreadcrumbRouterComponent,
      DropdownComponent,
      DropdownToggleDirective,
      DropdownMenuDirective,
      DropdownItemDirective,
      RouterLink,
      NgClass
    ], template: `<!--<c-header class="mb-4 d-print-none" position="sticky">-->\r
<ng-container>\r
  <c-container [fluid]="true" class="border-bottom px-4">\r
    <button\r
      [cSidebarToggle]="sidebarId()"\r
      cHeaderToggler\r
      class="btn"\r
      toggle="visible"\r
      style="margin-inline-start: -14px"\r
      aria-label="Toggle sidebar navigation"\r
    >\r
      <svg cIcon name="cilMenu" size="lg"></svg>\r
    </button>\r
\r
    <c-header-nav class="mx-0 d-flex align-items-center gap-2">\r
      <span [ngClass]="envClass">\r
        {{ envLabel }}\r
      </span>\r
      <span class="header-clock">\r
        <svg [cIcon]="iconsStatic.cilClock" class="me-1" size="sm" title="Time"></svg>\r
        {{ formattedDateTime }}\r
      </span>\r
\r
      <ng-container *ngTemplateOutlet="themeDropdown" />\r
      <ng-container *ngTemplateOutlet="userDropdown" />\r
    </c-header-nav>\r
  </c-container>\r
  <c-container [fluid]="true" class="px-4">\r
    <c-breadcrumb-router />\r
  </c-container>\r
</ng-container>\r
<!--</c-header>-->\r
\r
<ng-template #userDropdown>\r
  <c-dropdown\r
    [popperOptions]="{ placement: 'bottom-start' }"\r
    variant="nav-item"\r
  >\r
    <button\r
      [caret]="false"\r
      cDropdownToggle\r
      class="py-0 pe-0"\r
      aria-label="Open user menu"\r
    >\r
      <c-avatar\r
        shape="rounded-1"\r
        size="md"\r
        src="./assets/images/placeholder_icon_user.svg"\r
        status="success"\r
        textColor="primary"\r
        alt="User avatar"\r
      />\r
    </button>\r
    <ul cDropdownMenu class="pt-0 w-auto">\r
      <li>\r
        <h6\r
          cDropdownHeader\r
          class="bg-body-secondary text-body-secondary fw-semibold p-2"\r
        >\r
          Settings\r
        </h6>\r
      </li>\r
      <li class="pX-0">\r
        <a cDropdownItem routerLink="user-settings">\r
          <svg cIcon class="me-2" name="cilSettings"></svg>\r
          Change Avatar\r
        </a>\r
      </li>\r
      <li>\r
        <a cDropdownItem (click)="logout()">\r
          <svg cIcon class="me-2" name="cilAccountLogout"></svg>\r
          Logout\r
        </a>\r
      </li>\r
    </ul>\r
  </c-dropdown>\r
</ng-template>\r
\r
<ng-template #themeDropdown>\r
  <c-dropdown alignment="end" variant="nav-item">\r
    <button [caret]="false" cDropdownToggle aria-label="Open theme picker">\r
      <svg cIcon [name]="icons()" size="lg"></svg>\r
    </button>\r
    <div cDropdownMenu>\r
      @for (mode of colorModes; track mode.name) {\r
        <button\r
          (click)="colorMode.set(mode.name)"\r
          [active]="colorMode() === mode.name"\r
          cDropdownItem\r
          class="d-flex align-items-center"\r
        >\r
          <svg cIcon class="me-2" [name]="mode.icon" size="lg"></svg>\r
          {{ mode.text }}\r
        </button>\r
      }\r
    </div>\r
  </c-dropdown>\r
</ng-template>\r
` }]
  }], () => [], { sidebarId: [{ type: Input, args: [{ isSignal: true, alias: "sidebarId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultHeaderComponent, { className: "DefaultHeaderComponent", filePath: "src/app/layout/default-layout/default-header/default-header.component.ts", lineNumber: 51 });
})();

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Directionality,
    factory: _Directionality.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  _isInitialized = false;
  _rawDir = "";
  change = new EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule = class _PlatformModule {
  static \u0275fac = function PlatformModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PlatformModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    let currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    let currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  let sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    let dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist * kSampleStepSize;
    let initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS");
var SmoothScrollManager = class _SmoothScrollManager {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance && this._w.performance.now ? this._w.performance.now.bind(this._w.performance) : Date.now;
  }
  constructor(_document, _platform, customDefaultOptions) {
    this._document = _document;
    this._platform = _platform;
    this._onGoingScrolls = /* @__PURE__ */ new Map();
    this._defaultOptions = __spreadValues({
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      }
    }, customDefaultOptions);
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  _getElement(el, parent) {
    if (typeof el === "string") {
      return (parent || this._document).querySelector(el);
    }
    return coerceElement(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  _initSmoothScroll(el) {
    if (this._onGoingScrolls.has(el)) {
      this._onGoingScrolls.get(el).next();
    }
    return this._onGoingScrolls.set(el, new Subject()).get(el);
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context, destroyed, resolve) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    destroyed.next();
    resolve();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted(el, destroyed) {
    return merge(fromEvent(el, "wheel", {
      passive: true,
      capture: true
    }), fromEvent(el, "touchmove", {
      passive: true,
      capture: true
    }), destroyed).pipe(take(1));
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  _destroy(el, destroyed) {
    destroyed.complete();
    this._onGoingScrolls.delete(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.scrollable, context.currentX, context.currentY);
      animationFrameScheduler.schedule(() => subscriber.next(context));
    });
  }
  _applyScrollToOptions(el, options) {
    if (!options.duration) {
      this._scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    const destroyed = this._initSmoothScroll(el);
    const context = {
      scrollable: el,
      startTime: this._now(),
      startX: el.scrollLeft,
      startY: el.scrollTop,
      x: options.left == null ? el.scrollLeft : ~~options.left,
      y: options.top == null ? el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    return new Promise((resolve) => {
      of(null).pipe(expand(() => this._step(context).pipe(takeWhile((currContext) => this._isFinished(currContext, destroyed, resolve)))), takeUntil(this._interrupted(el, destroyed)), finalize(() => this._destroy(el, destroyed))).subscribe();
    });
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    if (isPlatformBrowser(this._platform)) {
      const el = this._getElement(scrollable);
      const isRtl = getComputedStyle(el).direction === "rtl";
      const rtlScrollAxisType2 = getRtlScrollAxisType();
      const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
        // Rewrite start & end offsets as right or left offsets.
        left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
        right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
      });
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      if (isRtl && rtlScrollAxisType2 !== 0) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if (rtlScrollAxisType2 === 2) {
          options.left = options.right;
        } else if (rtlScrollAxisType2 === 1) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      return this._applyScrollToOptions(el, options);
    }
    return Promise.resolve();
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this._getElement(scrollable);
    const targetEl = this._getElement(target, scrollableEl);
    const options = __spreadValues(__spreadValues({}, customOptions), {
      left: targetEl.offsetLeft + (customOptions.left || 0),
      top: targetEl.offsetTop + (customOptions.top || 0)
    });
    return targetEl ? this.scrollTo(scrollableEl, options) : Promise.resolve();
  }
  static {
    this.\u0275fac = function SmoothScrollManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmoothScrollManager)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(SMOOTH_SCROLL_OPTIONS, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SmoothScrollManager,
      factory: _SmoothScrollManager.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScrollManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [SMOOTH_SCROLL_OPTIONS]
      }]
    }];
  }, null);
})();
var SmoothScroll = class _SmoothScroll {
  constructor(element, smoothScroll) {
    this.element = element;
    this.smoothScroll = smoothScroll;
  }
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.element, options);
  }
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.element, target, options);
  }
  static {
    this.\u0275fac = function SmoothScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmoothScroll)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(SmoothScrollManager));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SmoothScroll,
      selectors: [["", "smoothScroll", ""], ["", "smooth-scroll", ""]],
      exportAs: ["smoothScroll"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      selector: "[smoothScroll], [smooth-scroll]",
      exportAs: "smoothScroll",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: SmoothScrollManager
    }];
  }, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs
var _c02 = ["scrollbarY"];
var _c1 = ["scrollbarX"];
var _c2 = ["*"];
function NgScrollbar_ng_container_5_scrollbar_x_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-x", null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("scrollable", ctx_r0.state.isHorizontallyScrollable)("fit", ctx_r0.state.verticalUsed);
  }
}
function NgScrollbar_ng_container_5_scrollbar_y_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-y", null, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("scrollable", ctx_r0.state.isVerticallyScrollable)("fit", ctx_r0.state.horizontalUsed);
  }
}
function NgScrollbar_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NgScrollbar_ng_container_5_scrollbar_x_1_Template, 2, 2, "scrollbar-x", 5)(2, NgScrollbar_ng_container_5_scrollbar_y_2_Template, 2, 2, "scrollbar-y", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.horizontalUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.verticalUsed);
  }
}
var NgAttr = class _NgAttr {
  constructor(el) {
    this.el = el;
  }
  set ngAttr(attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      this.el.nativeElement.setAttribute(key, value);
    }
  }
  static {
    this.\u0275fac = function NgAttr_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgAttr)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgAttr,
      selectors: [["", "ngAttr", ""]],
      inputs: {
        ngAttr: "ngAttr"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgAttr, [{
    type: Directive,
    args: [{
      selector: "[ngAttr]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    ngAttr: [{
      type: Input
    }]
  });
})();
function preventSelection(doc) {
  return tap(() => {
    doc.onselectstart = () => false;
  });
}
function enableSelection(doc) {
  return tap(() => {
    doc.onselectstart = null;
  });
}
function stopPropagation() {
  return tap((e) => e.stopPropagation());
}
function isWithinBounds(e, rect) {
  return e.clientX >= rect.left && e.clientX <= rect.left + rect.width && e.clientY >= rect.top && e.clientY <= rect.top + rect.height;
}
var ScrollViewport = class _ScrollViewport {
  // Get viewport size, clientHeight or clientWidth
  get clientHeight() {
    return this.nativeElement.clientHeight;
  }
  get clientWidth() {
    return this.nativeElement.clientWidth;
  }
  get scrollHeight() {
    return this.nativeElement.scrollHeight;
  }
  get scrollWidth() {
    return this.nativeElement.scrollWidth;
  }
  // Get viewport scroll offset, scrollTop or scrollLeft
  get scrollTop() {
    return this.nativeElement.scrollTop;
  }
  get scrollLeft() {
    return this.nativeElement.scrollLeft;
  }
  // Get the available scrollable size
  get scrollMaxX() {
    return this.scrollWidth - this.clientWidth;
  }
  get scrollMaxY() {
    return this.scrollHeight - this.clientHeight;
  }
  get contentHeight() {
    return this.contentWrapperElement?.clientHeight || 0;
  }
  get contentWidth() {
    return this.contentWrapperElement?.clientWidth || 0;
  }
  constructor(viewPort) {
    this.viewPort = viewPort;
    this.nativeElement = viewPort.nativeElement;
  }
  /**
   * Activate viewport pointer events such as 'hovered' and 'clicked' events
   */
  activatePointerEvents(propagate, destroyed) {
    this.hovered = new Observable((subscriber) => {
      const mouseMoveStream = fromEvent(this.nativeElement, "mousemove", {
        passive: true
      });
      const mouseMove = propagate ? mouseMoveStream : mouseMoveStream.pipe(stopPropagation());
      const mouseLeave = fromEvent(this.nativeElement, "mouseleave", {
        passive: true
      }).pipe(map(() => false));
      merge(mouseMove, mouseLeave).pipe(tap((e) => subscriber.next(e)), takeUntil(destroyed)).subscribe();
    });
    this.clicked = new Observable((subscriber) => {
      const mouseDown = fromEvent(this.nativeElement, "mousedown", {
        passive: true
      }).pipe(tap((e) => subscriber.next(e)));
      const mouseUp = fromEvent(this.nativeElement, "mouseup", {
        passive: true
      }).pipe(tap(() => subscriber.next(false)));
      mouseDown.pipe(switchMap(() => mouseUp), takeUntil(destroyed)).subscribe();
    });
  }
  /**
   * Set this directive as a non-functional wrapper, called when a custom viewport is used
   */
  setAsWrapper() {
    this.nativeElement.className = "ng-native-scrollbar-hider ng-scroll-layer";
    if (this.nativeElement.firstElementChild) {
      this.nativeElement.firstElementChild.className = "ng-scroll-layer";
    }
  }
  /**
   * Set this directive as  the viewport, called when no custom viewport is used
   */
  setAsViewport(customClassName) {
    this.nativeElement.className += ` ng-native-scrollbar-hider ng-scroll-viewport ${customClassName}`;
    if (this.nativeElement.firstElementChild) {
      this.contentWrapperElement = this.nativeElement.firstElementChild;
      this.contentWrapperElement.classList.add("ng-scroll-content");
    }
  }
  /**
   * Scroll viewport vertically
   */
  scrollYTo(value) {
    this.nativeElement.scrollTop = value;
  }
  /**
   * Scroll viewport horizontally
   */
  scrollXTo(value) {
    this.nativeElement.scrollLeft = value;
  }
  static {
    this.\u0275fac = function ScrollViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollViewport)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _ScrollViewport,
      selectors: [["", "scrollViewport", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewport, [{
    type: Directive,
    args: [{
      selector: "[scrollViewport]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var NgScrollbarBase = class _NgScrollbarBase {
  static {
    this.\u0275fac = function NgScrollbarBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgScrollbarBase)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgScrollbarBase,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarBase, [{
    type: Directive
  }], null, null);
})();
var TrackAdapter = class _TrackAdapter {
  // Stream that emits when the track element is clicked
  get clicked() {
    const mouseDown = fromEvent(this.trackElement, "mousedown", {
      passive: true
    }).pipe(stopPropagation(), preventSelection(this.document));
    const mouseup = fromEvent(this.document, "mouseup", {
      passive: true
    }).pipe(stopPropagation(), enableSelection(this.document), switchMap(() => EMPTY));
    return merge(mouseDown, mouseup);
  }
  // Get track client rect
  get clientRect() {
    return this.trackElement.getBoundingClientRect();
  }
  constructor(cmp, trackElement, document2) {
    this.cmp = cmp;
    this.trackElement = trackElement;
    this.document = document2;
  }
  /**
   * Stream that emits when scrollbar track is clicked
   */
  onTrackClicked(e, thumbSize, scrollSize) {
    return of(e).pipe(
      map((e2) => e2[this.pageProperty]),
      // Calculate scrollTo position
      map((pageOffset) => {
        const clickOffset = pageOffset - this.offset;
        const offset = clickOffset - thumbSize / 2;
        const ratio = offset / this.size;
        return ratio * scrollSize;
      }),
      // Smooth scroll to position
      tap((value) => {
        this.cmp.scrollTo(__spreadProps(__spreadValues({}, this.mapToScrollToOption(value)), {
          duration: coerceNumberProperty(this.cmp.trackClickScrollDuration)
        }));
      })
    );
  }
  static {
    this.\u0275fac = function TrackAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrackAdapter)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(Document));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _TrackAdapter,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackAdapter, [{
    type: Directive
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, null);
})();
var TrackXDirective = class _TrackXDirective extends TrackAdapter {
  get pageProperty() {
    return "pageX";
  }
  get offset() {
    return this.clientRect.left;
  }
  get size() {
    return this.trackElement.clientWidth;
  }
  constructor(cmp, trackElement, document2) {
    super(cmp, trackElement.nativeElement, document2);
    this.cmp = cmp;
    this.document = document2;
  }
  mapToScrollToOption(value) {
    return {
      left: value
    };
  }
  static {
    this.\u0275fac = function TrackXDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrackXDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _TrackXDirective,
      selectors: [["", "scrollbarTrackX", ""]],
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackXDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarTrackX]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var TrackYDirective = class _TrackYDirective extends TrackAdapter {
  get pageProperty() {
    return "pageY";
  }
  get offset() {
    return this.clientRect.top;
  }
  get size() {
    return this.trackElement.clientHeight;
  }
  constructor(cmp, trackElement, document2) {
    super(cmp, trackElement.nativeElement, document2);
    this.cmp = cmp;
    this.document = document2;
  }
  mapToScrollToOption(value) {
    return {
      top: value
    };
  }
  static {
    this.\u0275fac = function TrackYDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrackYDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _TrackYDirective,
      selectors: [["", "scrollbarTrackY", ""]],
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackYDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarTrackY]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var ThumbAdapter = class _ThumbAdapter {
  get trackMax() {
    return this.track.size - this.size;
  }
  // Get thumb client rect
  get clientRect() {
    return this.thumbElement.getBoundingClientRect();
  }
  // Stream that emits when scrollbar thumb is clicked
  get clicked() {
    return fromEvent(this.thumbElement, "mousedown", {
      passive: true
    }).pipe(stopPropagation());
  }
  constructor(cmp, track, thumbElement, document2) {
    this.cmp = cmp;
    this.track = track;
    this.thumbElement = thumbElement;
    this.document = document2;
    this._dragging = new Subject();
    this.dragging = this._dragging.pipe(distinctUntilChanged());
  }
  // Calculate and update thumb position and size
  update() {
    const size = calculateThumbSize(this.track.size, this.viewportScrollSize, this.cmp.minThumbSize);
    const position = calculateThumbPosition(this.viewportScrollOffset, this.viewportScrollMax, this.trackMax);
    animationFrameScheduler.schedule(() => this.updateStyles(this.handleDirection(position, this.trackMax), size));
  }
  /**
   * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
   * This function is called by thumb drag event using viewport or scrollbar pointer events
   */
  dragged(event) {
    let trackMaxStart;
    let scrollMaxStart;
    const dragStart = of(event).pipe(preventSelection(this.document), tap(() => {
      trackMaxStart = this.trackMax;
      scrollMaxStart = this.viewportScrollMax;
      this.setDragging(true);
    }));
    const dragging = fromEvent(this.document, "mousemove", {
      capture: true,
      passive: true
    }).pipe(stopPropagation());
    const dragEnd = fromEvent(this.document, "mouseup", {
      capture: true
    }).pipe(stopPropagation(), enableSelection(this.document), tap(() => this.setDragging(false)));
    return dragStart.pipe(map((e) => e[this.pageProperty]), map((pageOffset) => pageOffset - this.dragStartOffset), mergeMap((mouseDownOffset) => dragging.pipe(
      map((e) => e[this.clientProperty]),
      // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
      map((mouseOffset) => mouseOffset - this.track.offset),
      map((offset) => scrollMaxStart * (offset - mouseDownOffset) / trackMaxStart),
      map((position) => this.handleDrag(position, scrollMaxStart)),
      tap((position) => this.scrollTo(position)),
      takeUntil(dragEnd)
    )));
  }
  static {
    this.\u0275fac = function ThumbAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThumbAdapter)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackAdapter), \u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(Document));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _ThumbAdapter,
      outputs: {
        dragging: "dragging"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbAdapter, [{
    type: Directive
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackAdapter
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, {
    dragging: [{
      type: Output
    }]
  });
})();
function calculateThumbSize(trackSize, contentSize, minThumbSize) {
  const scrollbarRatio = trackSize / contentSize;
  const thumbSize = scrollbarRatio * trackSize;
  return Math.max(~~thumbSize, minThumbSize);
}
function calculateThumbPosition(scrollPosition, scrollMax, trackMax) {
  return scrollPosition * trackMax / scrollMax;
}
var ThumbXDirective = class _ThumbXDirective extends ThumbAdapter {
  get clientProperty() {
    return "clientX";
  }
  get pageProperty() {
    return "pageX";
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollLeft;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxX;
  }
  get dragStartOffset() {
    return this.clientRect.left + this.document.defaultView.pageXOffset || 0;
  }
  get size() {
    return this.thumbElement.clientWidth;
  }
  constructor(cmp, track, element, document2, dir) {
    super(cmp, track, element.nativeElement, document2);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document2;
    this.dir = dir;
  }
  updateStyles(position, size) {
    this.thumbElement.style.width = `${size}px`;
    this.thumbElement.style.transform = `translate3d(${position}px, 0, 0)`;
  }
  handleDrag(position, scrollMax) {
    if (this.dir.value === "rtl") {
      if (this.cmp.manager.rtlScrollAxisType === 1) {
        return position - scrollMax;
      }
      if (this.cmp.manager.rtlScrollAxisType === 2) {
        return scrollMax - position;
      }
    }
    return position;
  }
  handleDirection(position, trackMax) {
    if (this.dir.value === "rtl") {
      if (this.cmp.manager.rtlScrollAxisType === 2) {
        return -position;
      }
      if (this.cmp.manager.rtlScrollAxisType === 0) {
        return position - trackMax;
      }
    }
    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      horizontalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollXTo(position);
  }
  static {
    this.\u0275fac = function ThumbXDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThumbXDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackXDirective), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Directionality));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _ThumbXDirective,
      selectors: [["", "scrollbarThumbX", ""]],
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbXDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarThumbX]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackXDirective
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: Directionality
    }];
  }, null);
})();
var ThumbYDirective = class _ThumbYDirective extends ThumbAdapter {
  get pageProperty() {
    return "pageY";
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollTop;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxY;
  }
  get clientProperty() {
    return "clientY";
  }
  get dragStartOffset() {
    return this.clientRect.top + this.document.defaultView.pageYOffset || 0;
  }
  get size() {
    return this.thumbElement.clientHeight;
  }
  constructor(cmp, track, element, document2) {
    super(cmp, track, element.nativeElement, document2);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document2;
  }
  updateStyles(position, size) {
    this.thumbElement.style.height = `${size}px`;
    this.thumbElement.style.transform = `translate3d(0px, ${position}px, 0)`;
  }
  handleDrag(position) {
    return position;
  }
  handleDirection(position) {
    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      verticalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollYTo(position);
  }
  static {
    this.\u0275fac = function ThumbYDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThumbYDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackYDirective), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _ThumbYDirective,
      selectors: [["", "scrollbarThumbY", ""]],
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbYDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarThumbY]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackYDirective
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var Scrollbar = class _Scrollbar {
  constructor(el, cmp, platform, document2, zone) {
    this.el = el;
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
    this.destroyed = new Subject();
  }
  /**
   * Activate scrollbar pointer events
   */
  activatePointerEvents() {
    let thumbDragEvent;
    let trackClickEvent;
    let trackHoveredEvent;
    if (this.cmp.pointerEventsMethod === "viewport") {
      this.viewportTrackClicked = new Subject();
      this.viewportThumbClicked = new Subject();
      this.cmp.viewport.activatePointerEvents(this.cmp.viewportPropagateMouseMove, this.destroyed);
      thumbDragEvent = this.viewportThumbClicked;
      trackClickEvent = this.viewportTrackClicked;
      trackHoveredEvent = this.cmp.viewport.hovered.pipe(
        // Check if track is hovered
        map((e) => e ? isWithinBounds(e, this.el.getBoundingClientRect()) : false),
        distinctUntilChanged(),
        // Enable / disable text selection
        tap((hovered) => this.document.onselectstart = hovered ? () => false : null)
      );
      this.cmp.viewport.clicked.pipe(tap((e) => {
        if (e) {
          if (isWithinBounds(e, this.thumb.clientRect)) {
            this.viewportThumbClicked.next(e);
          } else if (isWithinBounds(e, this.track.clientRect)) {
            this.cmp.setClicked(true);
            this.viewportTrackClicked.next(e);
          }
        } else {
          this.cmp.setClicked(false);
        }
      }), takeUntil(this.destroyed)).subscribe();
    } else {
      thumbDragEvent = this.thumb.clicked;
      trackClickEvent = this.track.clicked;
      trackHoveredEvent = this.hovered;
    }
    return merge(
      // Activate scrollbar hovered event
      trackHoveredEvent.pipe(tap((e) => this.setHovered(e))),
      // Activate scrollbar thumb drag event
      thumbDragEvent.pipe(switchMap((e) => this.thumb.dragged(e))),
      // Activate scrollbar track click event
      trackClickEvent.pipe(switchMap((e) => this.track.onTrackClicked(e, this.thumb.size, this.viewportScrollSize)))
    );
  }
  // Stream that emits when the track element is hovered
  get hovered() {
    const mouseEnter = fromEvent(this.el, "mouseenter", {
      passive: true
    }).pipe(stopPropagation(), map(() => true));
    const mouseLeave = fromEvent(this.el, "mouseleave", {
      passive: true
    }).pipe(stopPropagation(), map(() => false));
    return merge(mouseEnter, mouseLeave);
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      if (!(this.platform.IOS || this.platform.ANDROID) && !this.cmp.pointerEventsDisabled) {
        this.activatePointerEvents().pipe(takeUntil(this.destroyed)).subscribe();
      }
      merge(this.cmp.scrolled, this.cmp.updated).pipe(tap(() => this.thumb?.update()), takeUntil(this.destroyed)).subscribe();
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    if (this.viewportThumbClicked && this.viewportTrackClicked) {
      this.viewportTrackClicked.complete();
      this.viewportThumbClicked.complete();
    }
  }
  static {
    this.\u0275fac = function Scrollbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Scrollbar)(\u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(Document), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _Scrollbar,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scrollbar, [{
    type: Directive
  }], function() {
    return [{
      type: HTMLElement
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document
    }, {
      type: NgZone
    }];
  }, null);
})();
var ScrollbarY = class _ScrollbarY extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  constructor(el, cmp, platform, document2, zone) {
    super(el.nativeElement, cmp, platform, document2, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      verticalHovered: value
    });
  }
  static {
    this.\u0275fac = function ScrollbarY_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollbarY)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ScrollbarY,
      selectors: [["scrollbar-y"]],
      viewQuery: function ScrollbarY_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(TrackYDirective, 7)(ThumbYDirective, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.track = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumb = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ScrollbarY_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("scrollbar-control", true);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 6,
      consts: [["scrollbarTrackY", ""], ["scrollbarThumbY", ""]],
      template: function ScrollbarY_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275element(1, "div", 1);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-track ", ctx.cmp.trackClass));
          \u0275\u0275advance();
          \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass));
        }
      },
      dependencies: [TrackYDirective, ThumbYDirective],
      styles: [".ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}  .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarY, [{
    type: Component,
    args: [{
      selector: "scrollbar-y",
      host: {
        "[class.scrollbar-control]": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackY class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbY class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      standalone: true,
      imports: [TrackYDirective, ThumbYDirective],
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}::ng-deep .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: NgZone
    }];
  }, {
    track: [{
      type: ViewChild,
      args: [TrackYDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbYDirective, {
        static: true
      }]
    }]
  });
})();
var ScrollbarX = class _ScrollbarX extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  constructor(el, cmp, platform, document2, zone) {
    super(el.nativeElement, cmp, platform, document2, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      horizontalHovered: value
    });
  }
  static {
    this.\u0275fac = function ScrollbarX_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollbarX)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ScrollbarX,
      selectors: [["scrollbar-x"]],
      viewQuery: function ScrollbarX_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(TrackXDirective, 7)(ThumbXDirective, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.track = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumb = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ScrollbarX_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("scrollbar-control", true);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 6,
      consts: [["scrollbarTrackX", ""], ["scrollbarThumbX", ""]],
      template: function ScrollbarX_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275element(1, "div", 1);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-track ", ctx.cmp.trackClass));
          \u0275\u0275advance();
          \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass));
        }
      },
      dependencies: [TrackXDirective, ThumbXDirective],
      styles: [".ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}  .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}  .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarX, [{
    type: Component,
    args: [{
      selector: "scrollbar-x",
      host: {
        "[class.scrollbar-control]": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackX class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbX class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      standalone: true,
      imports: [TrackXDirective, ThumbXDirective],
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}::ng-deep .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: NgZone
    }];
  }, {
    track: [{
      type: ViewChild,
      args: [TrackXDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbXDirective, {
        static: true
      }]
    }]
  });
})();
var NG_SCROLLBAR_OPTIONS = new InjectionToken("NG_SCROLLBAR_OPTIONS");
var defaultOptions = {
  viewClass: "",
  trackClass: "",
  thumbClass: "",
  track: "vertical",
  appearance: "compact",
  visibility: "native",
  position: "native",
  pointerEventsMethod: "viewport",
  trackClickScrollDuration: 300,
  minThumbSize: 20,
  windowResizeDebounce: 0,
  sensorDebounce: 0,
  scrollAuditTime: 0,
  viewportPropagateMouseMove: true,
  autoHeightDisabled: true,
  autoWidthDisabled: true,
  sensorDisabled: false,
  pointerEventsDisabled: false
};
var ScrollbarManager = class _ScrollbarManager {
  constructor(options) {
    this.globalOptions = options ? __spreadValues(__spreadValues({}, defaultOptions), options) : defaultOptions;
    this.rtlScrollAxisType = getRtlScrollAxisType();
  }
  static {
    this.\u0275fac = function ScrollbarManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollbarManager)(\u0275\u0275inject(NG_SCROLLBAR_OPTIONS, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ScrollbarManager,
      factory: _ScrollbarManager.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NG_SCROLLBAR_OPTIONS]
      }]
    }];
  }, null);
})();
var NativeScrollbarSizeFactory = class _NativeScrollbarSizeFactory {
  constructor(document2, manager, platform) {
    this.document = document2;
    this.manager = manager;
    this.platform = platform;
    this._scrollbarSize = new BehaviorSubject(this.getNativeScrollbarSize());
    this.scrollbarSize = this._scrollbarSize.asObservable();
    if (platform.isBrowser) {
      fromEvent(this.document.defaultView, "resize", {
        passive: true
      }).pipe(debounceTime(this.manager.globalOptions.windowResizeDebounce), map(() => this.getNativeScrollbarSize()), distinctUntilChanged(), tap((size) => this._scrollbarSize.next(size))).subscribe();
    }
  }
  /**
   * Get native scrollbar size
   */
  getNativeScrollbarSize() {
    if (!this.platform.isBrowser) {
      return 0;
    }
    if (this.platform.IOS) {
      return 6;
    }
    const box = this.document.createElement("div");
    box.className = "ng-scrollbar-measure";
    box.style.left = "0px";
    box.style.overflow = "scroll";
    box.style.position = "fixed";
    box.style.top = "-9999px";
    this.document.body.appendChild(box);
    const size = box.getBoundingClientRect().right;
    this.document.body.removeChild(box);
    return size;
  }
  static {
    this.\u0275fac = function NativeScrollbarSizeFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeScrollbarSizeFactory)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(ScrollbarManager), \u0275\u0275inject(Platform));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NativeScrollbarSizeFactory,
      factory: _NativeScrollbarSizeFactory.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeScrollbarSizeFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ScrollbarManager
    }, {
      type: Platform
    }];
  }, null);
})();
var HideNativeScrollbar = class _HideNativeScrollbar {
  constructor(el, renderer, hideNativeScrollbar) {
    this.renderer = renderer;
    this.hideNativeScrollbar = hideNativeScrollbar;
    this._subscriber = Subscription.EMPTY;
    this._subscriber = hideNativeScrollbar.scrollbarSize.subscribe((size) => {
      this.renderer.setStyle(el.nativeElement, "--native-scrollbar-size", `-${size}px`, RendererStyleFlags2.DashCase);
    });
  }
  ngOnDestroy() {
    this._subscriber.unsubscribe();
  }
  static {
    this.\u0275fac = function HideNativeScrollbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HideNativeScrollbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NativeScrollbarSizeFactory));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _HideNativeScrollbar,
      selectors: [["", "hideNativeScrollbar", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HideNativeScrollbar, [{
    type: Directive,
    args: [{
      selector: "[hideNativeScrollbar]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NativeScrollbarSizeFactory
    }];
  }, null);
})();
var ResizeSensor = class _ResizeSensor {
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  /** Whether ResizeObserver is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  constructor(zone, platform, scrollbar) {
    this.zone = zone;
    this.platform = platform;
    this.scrollbar = scrollbar;
    this._disabled = false;
    this._currentSubscription = null;
    this.event = new EventEmitter();
    if (!scrollbar) {
      throw new Error("[NgScrollbar Resize Sensor Directive]: Host element must be an NgScrollbar component.");
    }
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this._disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (this.platform.isBrowser) {
      const stream = new Observable((observer) => {
        this._resizeObserver = new ResizeObserver((e) => observer.next(e));
        this._resizeObserver.observe(this.scrollbar.viewport.nativeElement);
        if (this.scrollbar.viewport.contentWrapperElement) {
          this._resizeObserver.observe(this.scrollbar.viewport.contentWrapperElement);
        }
      });
      this.zone.runOutsideAngular(() => {
        this._currentSubscription = (this._debounce ? stream.pipe(debounceTime(this._debounce)) : stream).subscribe(this.event);
      });
    }
  }
  _unsubscribe() {
    this._resizeObserver?.disconnect();
    this._currentSubscription?.unsubscribe();
  }
  static {
    this.\u0275fac = function ResizeSensor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResizeSensor)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NgScrollbarBase));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _ResizeSensor,
      selectors: [["", "resizeSensor", ""]],
      inputs: {
        debounce: [0, "sensorDebounce", "debounce"],
        disabled: [0, "sensorDisabled", "disabled"]
      },
      outputs: {
        event: "resizeSensor"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensor, [{
    type: Directive,
    args: [{
      selector: "[resizeSensor]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Platform
    }, {
      type: NgScrollbarBase
    }];
  }, {
    debounce: [{
      type: Input,
      args: ["sensorDebounce"]
    }],
    disabled: [{
      type: Input,
      args: ["sensorDisabled"]
    }],
    event: [{
      type: Output,
      args: ["resizeSensor"]
    }]
  });
})();
var NgScrollbar = class _NgScrollbar {
  /** Disable custom scrollbar and switch back to native scrollbar */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = coerceBooleanProperty(disabled);
  }
  /** Whether ResizeObserver is disabled */
  get sensorDisabled() {
    return this._sensorDisabled;
  }
  set sensorDisabled(disabled) {
    this._sensorDisabled = coerceBooleanProperty(disabled);
  }
  /** A flag used to enable/disable the scrollbar thumb dragged event */
  get pointerEventsDisabled() {
    return this._pointerEventsDisabled;
  }
  set pointerEventsDisabled(disabled) {
    this._pointerEventsDisabled = coerceBooleanProperty(disabled);
  }
  /** Enable viewport mousemove event propagation (only when pointerEventsMethod="viewport") */
  get viewportPropagateMouseMove() {
    return this._viewportPropagateMouseMove;
  }
  set viewportPropagateMouseMove(disabled) {
    this._viewportPropagateMouseMove = coerceBooleanProperty(disabled);
  }
  /** Disable auto-height */
  get autoHeightDisabled() {
    return this._autoHeightDisabled;
  }
  set autoHeightDisabled(disabled) {
    this._autoHeightDisabled = coerceBooleanProperty(disabled);
  }
  /** Disable auto-width */
  get autoWidthDisabled() {
    return this._autoWidthDisabled;
  }
  set autoWidthDisabled(disabled) {
    this._autoWidthDisabled = coerceBooleanProperty(disabled);
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  constructor(el, zone, changeDetectorRef, dir, smoothScroll, manager) {
    this.el = el;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.dir = dir;
    this.smoothScroll = smoothScroll;
    this.manager = manager;
    this._disabled = false;
    this._sensorDisabled = this.manager.globalOptions.sensorDisabled;
    this._pointerEventsDisabled = this.manager.globalOptions.pointerEventsDisabled;
    this._autoHeightDisabled = this.manager.globalOptions.autoHeightDisabled;
    this._autoWidthDisabled = this.manager.globalOptions.autoWidthDisabled;
    this._viewportPropagateMouseMove = this.manager.globalOptions.viewportPropagateMouseMove;
    this.viewClass = this.manager.globalOptions.viewClass;
    this.trackClass = this.manager.globalOptions.trackClass;
    this.thumbClass = this.manager.globalOptions.thumbClass;
    this.minThumbSize = this.manager.globalOptions.minThumbSize;
    this.trackClickScrollDuration = this.manager.globalOptions.trackClickScrollDuration;
    this.pointerEventsMethod = this.manager.globalOptions.pointerEventsMethod;
    this.track = this.manager.globalOptions.track;
    this.visibility = this.manager.globalOptions.visibility;
    this.appearance = this.manager.globalOptions.appearance;
    this.position = this.manager.globalOptions.position;
    this.sensorDebounce = this.manager.globalOptions.sensorDebounce;
    this.scrollAuditTime = this.manager.globalOptions.scrollAuditTime;
    this.updated = new EventEmitter();
    this.state = {};
    this.destroyed = new Subject();
  }
  /**
   * Update local state with each change detection
   */
  updateState() {
    let verticalUsed = false;
    let horizontalUsed = false;
    let isVerticallyScrollable = false;
    let isHorizontallyScrollable = false;
    if (this.track === "all" || this.track === "vertical") {
      isVerticallyScrollable = this.viewport.scrollHeight > this.viewport.clientHeight;
      verticalUsed = this.visibility === "always" || isVerticallyScrollable;
    }
    if (this.track === "all" || this.track === "horizontal") {
      isHorizontallyScrollable = this.viewport.scrollWidth > this.viewport.clientWidth;
      horizontalUsed = this.visibility === "always" || isHorizontallyScrollable;
    }
    this.setState({
      position: this.position,
      track: this.track,
      appearance: this.appearance,
      visibility: this.visibility,
      deactivated: this.disabled,
      dir: this.dir.value,
      pointerEventsMethod: this.pointerEventsMethod,
      verticalUsed,
      horizontalUsed,
      isVerticallyScrollable,
      isHorizontallyScrollable
    });
  }
  setState(state) {
    this.state = __spreadValues(__spreadValues({}, this.state), state);
    this.changeDetectorRef.detectChanges();
  }
  getScrolledByDirection(property) {
    let event;
    return this.scrolled.pipe(tap((e) => event = e), map((e) => e.target[property]), pairwise(), filter(([prev, curr]) => prev !== curr), map(() => event));
  }
  /**
   * Set hovered state if a scrollbar is being hovered
   */
  setHovered(hovered) {
    this.zone.run(() => this.setState(__spreadValues({}, hovered)));
  }
  /**
   * Set dragging state if a scrollbar is being dragged
   */
  setDragging(dragging) {
    this.zone.run(() => this.setState(__spreadValues({}, dragging)));
  }
  /**
   * Set clicked state if a scrollbar track is being clicked
   */
  setClicked(scrollbarClicked) {
    this.zone.run(() => this.setState({
      scrollbarClicked
    }));
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      if (this.customViewPort) {
        this.viewport = this.customViewPort;
        this.defaultViewPort.setAsWrapper();
      } else {
        this.viewport = this.defaultViewPort;
      }
      this.viewport.setAsViewport(this.viewClass);
      let scrollStream = fromEvent(this.viewport.nativeElement, "scroll", {
        passive: true
      });
      scrollStream = this.scrollAuditTime ? scrollStream.pipe(auditTime(this.scrollAuditTime)) : scrollStream;
      this.scrolled = scrollStream.pipe(takeUntil(this.destroyed));
      this.verticalScrolled = this.getScrolledByDirection("scrollTop");
      this.horizontalScrolled = this.getScrolledByDirection("scrollLeft");
    });
  }
  ngOnChanges(changes) {
    if (this.viewport) {
      this.update();
    }
  }
  ngAfterViewInit() {
    this.update();
    this.dir.change.pipe(tap(() => this.update()), takeUntil(this.destroyed)).subscribe();
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  /**
   * Update local state and the internal scrollbar controls
   */
  update() {
    if (!this.autoHeightDisabled) {
      this.updateHeight();
    }
    if (!this.autoWidthDisabled) {
      this.updateWidth();
    }
    this.updateState();
    this.updated.next();
  }
  /**
   * Smooth scroll functions
   */
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.viewport.nativeElement, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
  }
  updateHeight() {
    if (this.appearance === "standard" && this.scrollbarX) {
      this.nativeElement.style.height = `${this.viewport.contentHeight + this.scrollbarX.nativeElement.clientHeight}px`;
    } else {
      this.nativeElement.style.height = `${this.viewport.contentHeight}px`;
    }
  }
  updateWidth() {
    if (this.appearance === "standard" && this.scrollbarY) {
      this.nativeElement.style.width = `${this.viewport.contentWidth + this.scrollbarY.nativeElement.clientWidth}px`;
    } else {
      this.nativeElement.style.width = `${this.viewport.contentWidth}px`;
    }
  }
  static {
    this.\u0275fac = function NgScrollbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgScrollbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality), \u0275\u0275directiveInject(SmoothScrollManager), \u0275\u0275directiveInject(ScrollbarManager));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgScrollbar,
      selectors: [["ng-scrollbar"]],
      contentQueries: function NgScrollbar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, ScrollViewport, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customViewPort = _t.first);
        }
      },
      viewQuery: function NgScrollbar_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c02, 5, ElementRef)(_c1, 5, ElementRef)(ScrollViewport, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollbarY = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollbarX = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultViewPort = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NgScrollbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-scrollbar", true);
        }
      },
      inputs: {
        disabled: "disabled",
        sensorDisabled: "sensorDisabled",
        pointerEventsDisabled: "pointerEventsDisabled",
        viewportPropagateMouseMove: "viewportPropagateMouseMove",
        autoHeightDisabled: "autoHeightDisabled",
        autoWidthDisabled: "autoWidthDisabled",
        viewClass: "viewClass",
        trackClass: "trackClass",
        thumbClass: "thumbClass",
        minThumbSize: "minThumbSize",
        trackClickScrollDuration: "trackClickScrollDuration",
        pointerEventsMethod: "pointerEventsMethod",
        track: "track",
        visibility: "visibility",
        appearance: "appearance",
        position: "position",
        sensorDebounce: "sensorDebounce",
        scrollAuditTime: "scrollAuditTime"
      },
      outputs: {
        updated: "updated"
      },
      exportAs: ["ngScrollbar"],
      features: [\u0275\u0275ProvidersFeature([{
        provide: NgScrollbarBase,
        useExisting: _NgScrollbar
      }]), \u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c2,
      decls: 6,
      vars: 4,
      consts: [["scrollbarX", ""], ["scrollbarY", ""], [1, "ng-scrollbar-wrapper", 3, "ngAttr"], [1, "ng-scroll-viewport-wrapper", 3, "resizeSensor", "sensorDebounce", "sensorDisabled"], ["scrollViewport", "", "hideNativeScrollbar", ""], [4, "ngIf"]],
      template: function NgScrollbar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
          \u0275\u0275listener("resizeSensor", function NgScrollbar_Template_div_resizeSensor_1_listener() {
            return ctx.update();
          });
          \u0275\u0275elementStart(2, "div", 4)(3, "div");
          \u0275\u0275projection(4);
          \u0275\u0275elementEnd()()();
          \u0275\u0275template(5, NgScrollbar_ng_container_5_Template, 3, 2, "ng-container", 5);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("ngAttr", ctx.state);
          \u0275\u0275advance();
          \u0275\u0275property("sensorDebounce", ctx.sensorDebounce)("sensorDisabled", ctx.sensorDisabled);
          \u0275\u0275advance(4);
          \u0275\u0275property("ngIf", !ctx.disabled);
        }
      },
      dependencies: [NgIf, NgAttr, ResizeSensor, ScrollViewport, HideNativeScrollbar, ScrollbarX, ScrollbarY],
      styles: [".ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}  .ng-scrollbar-measure::-webkit-scrollbar{display:none}[_nghost-%COMP%]{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}[_nghost-%COMP%] > .ng-scrollbar-wrapper[_ngcontent-%COMP%]{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalDragging=true][_ngcontent-%COMP%]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalDragging=true][_ngcontent-%COMP%]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:0;bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:var(--scrollbar-total-size);bottom:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport::-webkit-scrollbar{display:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%] > .scrollbar-control[_ngcontent-%COMP%]{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:hover > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:active > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:focus > .scrollbar-control[_ngcontent-%COMP%]{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{overflow:hidden}.ng-scroll-viewport[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}  .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper[_ngcontent-%COMP%], .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], .ng-scroll-layer[_ngcontent-%COMP%],   .ng-scroll-viewport{position:absolute;inset:0}", ".ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}  .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}  .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}  .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}  .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}  .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbar, [{
    type: Component,
    args: [{
      selector: "ng-scrollbar",
      exportAs: "ngScrollbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ng-scrollbar]": "true"
      },
      providers: [{
        provide: NgScrollbarBase,
        useExisting: NgScrollbar
      }],
      standalone: true,
      imports: [NgIf, NgAttr, ResizeSensor, ScrollViewport, HideNativeScrollbar, ScrollbarX, ScrollbarY],
      template: '<div class="ng-scrollbar-wrapper" [ngAttr]="state">\r\n  <div class="ng-scroll-viewport-wrapper"\r\n       (resizeSensor)="update()"\r\n       [sensorDebounce]="sensorDebounce"\r\n       [sensorDisabled]="sensorDisabled">\r\n    <div scrollViewport\r\n         hideNativeScrollbar>\r\n      <div>\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf="!disabled">\r\n    <scrollbar-x #scrollbarX\r\n                 *ngIf="state.horizontalUsed"\r\n                 [attr.scrollable]="state.isHorizontallyScrollable"\r\n                 [attr.fit]="state.verticalUsed">\r\n    </scrollbar-x>\r\n    <scrollbar-y #scrollbarY\r\n                 *ngIf="state.verticalUsed"\r\n                 [attr.scrollable]="state.isVerticallyScrollable"\r\n                 [attr.fit]="state.horizontalUsed">\r\n    </scrollbar-y>\r\n  </ng-container>\r\n</div>\r\n\r\n',
      styles: ["::ng-deep .ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}::ng-deep .ng-scrollbar-measure::-webkit-scrollbar{display:none}:host{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}:host>.ng-scrollbar-wrapper{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}:host>.ng-scrollbar-wrapper[verticalHovered=true],:host>.ng-scrollbar-wrapper[verticalDragging=true]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[horizontalHovered=true],:host>.ng-scrollbar-wrapper[horizontalDragging=true]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:0;bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:var(--scrollbar-total-size);bottom:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport::-webkit-scrollbar,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none}:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]>.scrollbar-control{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:hover>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:active>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:focus>.scrollbar-control{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper{overflow:hidden}.ng-scroll-viewport{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}::ng-deep .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper,.ng-scroll-viewport-wrapper,.ng-scroll-layer,::ng-deep .ng-scroll-viewport{position:absolute;inset:0}\n", "::ng-deep .ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}::ng-deep .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}::ng-deep .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Directionality
    }, {
      type: SmoothScrollManager
    }, {
      type: ScrollbarManager
    }];
  }, {
    disabled: [{
      type: Input
    }],
    sensorDisabled: [{
      type: Input
    }],
    pointerEventsDisabled: [{
      type: Input
    }],
    viewportPropagateMouseMove: [{
      type: Input
    }],
    autoHeightDisabled: [{
      type: Input
    }],
    autoWidthDisabled: [{
      type: Input
    }],
    viewClass: [{
      type: Input
    }],
    trackClass: [{
      type: Input
    }],
    thumbClass: [{
      type: Input
    }],
    minThumbSize: [{
      type: Input
    }],
    trackClickScrollDuration: [{
      type: Input
    }],
    pointerEventsMethod: [{
      type: Input
    }],
    track: [{
      type: Input
    }],
    visibility: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    sensorDebounce: [{
      type: Input
    }],
    scrollAuditTime: [{
      type: Input
    }],
    updated: [{
      type: Output
    }],
    scrollbarY: [{
      type: ViewChild,
      args: ["scrollbarY", {
        read: ElementRef
      }]
    }],
    scrollbarX: [{
      type: ViewChild,
      args: ["scrollbarX", {
        read: ElementRef
      }]
    }],
    defaultViewPort: [{
      type: ViewChild,
      args: [ScrollViewport, {
        static: true
      }]
    }],
    customViewPort: [{
      type: ContentChild,
      args: [ScrollViewport, {
        static: true
      }]
    }]
  });
})();
var NgScrollbarModule = class _NgScrollbarModule {
  static {
    this.\u0275fac = function NgScrollbarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgScrollbarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgScrollbarModule,
      imports: [NgScrollbar, ScrollViewport],
      exports: [NgScrollbar, ScrollViewport]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgScrollbar, ScrollViewport],
      exports: [NgScrollbar, ScrollViewport]
    }]
  }], null, null);
})();

// src/app/layout/default-layout/_nav.ts
var navItems = [
  {
    name: "Home",
    url: "/",
    iconComponent: { name: "cil-home" },
    linkProps: {
      routerLinkActiveOptions: {
        exact: true
      }
    }
  },
  {
    name: "Gestione Tessere",
    url: "/liste/tessere",
    iconComponent: { name: "cil-calculator" }
  },
  {
    name: "Sedi",
    url: "/liste/sedi",
    iconComponent: { name: "cil-notes" }
  },
  {
    name: "Utenti",
    url: "/liste/utenti",
    iconComponent: { name: "cil-user" }
  },
  {
    name: "Stampa Documenti",
    url: "/stampa-documenti",
    iconComponent: { name: "cil-cursor" }
  }
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'headings' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  // {
  //   name: 'Components',
  //   title: true
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/base/accordion',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Breadcrumbs',
  //       url: '/base/breadcrumbs',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Calendar',
  //       url: 'https://coreui.io/angular/docs/components/calendar/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Carousel',
  //       url: '/base/carousel',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Collapse',
  //       url: '/base/collapse',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'List Group',
  //       url: '/base/list-group',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Navs & Tabs',
  //       url: '/base/navs',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/pagination',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Placeholder',
  //       url: '/base/placeholder',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Smart Table',
  //       url: 'https://coreui.io/angular/docs/components/smart-table/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Smart Pagination',
  //       url: 'https://coreui.io/angular/docs/components/smart-pagination/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Spinners',
  //       url: '/base/spinners',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Loading Button',
  //       url: 'https://coreui.io/angular/docs/components/loading-button/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     }
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Autocomplete',
  //       url: 'https://coreui.io/angular/docs/forms/autocomplete/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Date Picker',
  //       url: 'https://coreui.io/angular/docs/forms/date-picker/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Date Range Picker',
  //       url: 'https://coreui.io/angular/docs/forms/date-range-picker/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Multi Select',
  //       url: 'https://coreui.io/angular/docs/forms/multi-select/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'OTP Input',
  //       url: 'https://coreui.io/angular/docs/forms/otp/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Password Input',
  //       url: 'https://coreui.io/angular/docs/forms/password-input/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Range Slider',
  //       url: 'https://coreui.io/angular/docs/forms/range-slider/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Rating',
  //       url: 'https://coreui.io/angular/docs/forms/rating/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Stepper',
  //       url: 'https://coreui.io/angular/docs/forms/stepper/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Time Picker',
  //       url: 'https://coreui.io/angular/docs/forms/time-picker/',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO'
  //       },
  //       attributes: { target: '_blank' }
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   iconComponent: { name: 'cil-chart-pie' },
  //   url: '/charts'
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // }
];

// src/app/layout/default-layout/default-layout.component.ts
var _c03 = () => [];
function DefaultLayoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-sidebar-footer", 7);
    \u0275\u0275element(1, "button", 12);
    \u0275\u0275elementEnd();
  }
}
var DefaultLayoutComponent = class _DefaultLayoutComponent {
  constructor() {
    this.navItems = [...navItems];
  }
  logoPath() {
    let theme = document.documentElement.getAttribute("data-coreui-theme");
    return theme === "light" ? "../../../assets/images/BannerDEFINITIVO_NewVersion.svg" : "../../../assets/images/BannerDEFINITIVO_NewVersion_White.svg";
  }
  static {
    this.\u0275fac = function DefaultLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultLayoutComponent, selectors: [["app-dashboard"]], decls: 14, vars: 6, consts: [["sidebar1", "cSidebar"], ["colorScheme", "light", "id", "sidebar1", "visible", "", 1, "d-print-none", "sidebar", "sidebar-fixed", "border-end"], [1, "border-bottom"], [3, "routerLink"], ["alt", "Logo", "width", "220", 3, "src"], ["pointerEventsMethod", "scrollbar", "visibility", "hover"], ["dropdownMode", "close", "compact", "", 3, "navItems"], ["cSidebarToggle", "sidebar1", "toggle", "unfoldable", 1, "border-top", "d-none", "d-lg-flex", 2, "cursor", "pointer"], [1, "wrapper", "d-flex", "flex-column", "min-vh-100"], ["position", "sticky", "sidebarId", "sidebar1", 1, "mb-4", "d-print-none", "header", "header-sticky", "p-0", "shadow-sm", 3, "cShadowOnScroll"], [1, "body", "flex-grow-1"], ["breakpoint", "lg", 1, "h-auto", "px-4"], ["cSidebarToggler", "", "aria-label", "Toggle sidebar fold"]], template: function DefaultLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-sidebar", 1, 0)(2, "c-sidebar-header", 2)(3, "c-sidebar-brand", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "ng-scrollbar", 5);
        \u0275\u0275element(6, "c-sidebar-nav", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, DefaultLayoutComponent_Conditional_7_Template, 2, 0, "c-sidebar-footer", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8);
        \u0275\u0275element(9, "app-default-header", 9);
        \u0275\u0275elementStart(10, "div", 10)(11, "c-container", 11);
        \u0275\u0275element(12, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "app-default-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const sidebar1_r1 = \u0275\u0275reference(1);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c03));
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.logoPath(), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("navItems", ctx.navItems);
        \u0275\u0275advance();
        \u0275\u0275conditional(!sidebar1_r1.narrow ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("cShadowOnScroll", "sm");
      }
    }, dependencies: [
      SidebarComponent,
      SidebarHeaderComponent,
      SidebarBrandComponent,
      SidebarNavComponent,
      SidebarFooterComponent,
      SidebarToggleDirective,
      SidebarTogglerDirective,
      ContainerComponent,
      DefaultFooterComponent,
      DefaultHeaderComponent,
      NgScrollbar,
      RouterOutlet,
      RouterLink,
      ShadowOnScrollDirective
    ], styles: ["\n[_nghost-%COMP%]  .ng-scrollbar {\n  --scrollbar-padding: 1px;\n  --scrollbar-size: 5px;\n  --scrollbar-thumb-color: var(--cui-gray-500, #aab3c5);\n  --scrollbar-thumb-hover-color: var(--cui-gray-400, #cfd4de);\n  --scrollbar-hover-size: calc(var(--scrollbar-size) * 1.5);\n  --scrollbar-border-radius: 5px;\n}\n[_nghost-%COMP%]  .ng-scroll-content {\n  display: flex;\n  min-height: 100%;\n}\n/*# sourceMappingURL=default-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [
      SidebarComponent,
      SidebarHeaderComponent,
      SidebarBrandComponent,
      SidebarNavComponent,
      SidebarFooterComponent,
      SidebarToggleDirective,
      SidebarTogglerDirective,
      ContainerComponent,
      DefaultFooterComponent,
      DefaultHeaderComponent,
      NgScrollbar,
      RouterOutlet,
      RouterLink,
      ShadowOnScrollDirective
    ], template: `<!--sidebar-->\r
<c-sidebar\r
  #sidebar1="cSidebar"\r
  class="d-print-none sidebar sidebar-fixed border-end"\r
  colorScheme="light"\r
  id="sidebar1"\r
  visible\r
>\r
  <c-sidebar-header class="border-bottom">\r
    <c-sidebar-brand [routerLink]="[]">\r
      <img [src]="logoPath()" alt="Logo" width="220">\r
      <!-- <svg [class]="{icon: false}" cIcon class="sidebar-brand-full" height="32" name="logo" title="CoreUI Logo"></svg> -->\r
      <!-- <svg cIcon class="sidebar-brand-narrow" height="32" name="signet" title="CoreUI Logo"></svg> -->\r
    </c-sidebar-brand>\r
  </c-sidebar-header>\r
\r
  <ng-scrollbar pointerEventsMethod="scrollbar" visibility="hover">\r
    <c-sidebar-nav [navItems]="navItems" dropdownMode="close" compact />\r
  </ng-scrollbar>\r
\r
  @if (!sidebar1.narrow) {\r
    <c-sidebar-footer\r
      cSidebarToggle="sidebar1"\r
      class="border-top d-none d-lg-flex"\r
      toggle="unfoldable"\r
      style="cursor: pointer"\r
    >\r
      <button cSidebarToggler aria-label="Toggle sidebar fold"></button>\r
    </c-sidebar-footer>\r
  }\r
</c-sidebar>\r
\r
<!--main-->\r
<div class="wrapper d-flex flex-column min-vh-100">\r
  <!--app-header-->\r
  <app-default-header\r
    [cShadowOnScroll]="'sm'"\r
    class="mb-4 d-print-none header header-sticky p-0 shadow-sm"\r
    position="sticky"\r
    sidebarId="sidebar1"\r
  />\r
  <!--app-body-->\r
  <div class="body flex-grow-1">\r
    <c-container breakpoint="lg" class="h-auto px-4">\r
      <router-outlet />\r
    </c-container>\r
  </div>\r
  <!--app footer-->\r
  <app-default-footer />\r
</div>\r
`, styles: ["/* src/app/layout/default-layout/default-layout.component.scss */\n:host::ng-deep .ng-scrollbar {\n  --scrollbar-padding: 1px;\n  --scrollbar-size: 5px;\n  --scrollbar-thumb-color: var(--cui-gray-500, #aab3c5);\n  --scrollbar-thumb-hover-color: var(--cui-gray-400, #cfd4de);\n  --scrollbar-hover-size: calc(var(--scrollbar-size) * 1.5);\n  --scrollbar-border-radius: 5px;\n}\n:host::ng-deep .ng-scroll-content {\n  display: flex;\n  min-height: 100%;\n}\n/*# sourceMappingURL=default-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultLayoutComponent, { className: "DefaultLayoutComponent", filePath: "src/app/layout/default-layout/default-layout.component.ts", lineNumber: 47 });
})();
export {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
};
//# sourceMappingURL=chunk-CAMYGPX6.js.map
