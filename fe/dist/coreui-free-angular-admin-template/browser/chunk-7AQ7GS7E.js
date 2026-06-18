import {
  AuthService
} from "./chunk-J4T4EQQU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-3UK4NGU6.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  IconDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  Router,
  RowComponent
} from "./chunk-ICNVWBIK.js";
import "./chunk-7LGTHZSA.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-V3VOMCDM.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/pages/login/login.component.ts
function LoginComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.loading = false;
    this.errorMessage = "";
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/"]);
      },
      error: () => {
        this.loading = false;
        this.errorMessage = "Invalid username or password";
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 23, vars: 4, consts: [[1, "login-background", "min-vh-100", "d-flex", "justify-content-center", "align-items-center"], ["breakpoint", "md"], [1, "justify-content-center"], ["xs", "11", "sm", "9", "md", "7", "lg", "5", "xl", "4"], [1, "p-4"], ["cForm", "", 3, "ngSubmit", "formGroup"], [1, "alert", "alert-danger"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["autoComplete", "username", "cFormControl", "", "placeholder", "Username", "formControlName", "username"], [1, "mb-4"], ["cIcon", "", "name", "cilLockLocked"], ["autoComplete", "current-password", "cFormControl", "", "placeholder", "Password", "type", "password", "formControlName", "password"], [1, "d-grid", "mt-4"], ["cButton", "", "color", "primary", "type", "submit", "size", "lg", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "c-container", 1)(2, "c-row", 2)(3, "c-col", 3)(4, "c-card-group")(5, "c-card", 4)(6, "c-card-body")(7, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
          return ctx.login();
        });
        \u0275\u0275elementStart(8, "h1");
        \u0275\u0275text(9, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "br");
        \u0275\u0275conditionalCreate(11, LoginComponent_Conditional_11_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(12, "c-input-group", 7)(13, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(14, "svg", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(15, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "c-input-group", 11)(17, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(18, "svg", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(19, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 14)(21, "button", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMessage ? 11 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", ctx.loading || ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Logging in..." : "Login", " ");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardGroupComponent,
      CardComponent,
      CardBodyComponent,
      FormDirective,
      InputGroupComponent,
      InputGroupTextDirective,
      IconDirective,
      FormControlDirective,
      ButtonDirective
    ], styles: ['\n.login-background[_ngcontent-%COMP%] {\n  position: relative;\n  background-image: url(/assets/images/SplashTessere2.png);\n  background-size: cover;\n  background-position: center;\n}\nc-card[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.92);\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n}\n[data-coreui-theme=dark][_ngcontent-%COMP%]   c-card[_ngcontent-%COMP%] {\n  background: rgba(33, 37, 41, 0.92);\n}\n.login-background[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n}\n.login-background[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      ReactiveFormsModule,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardGroupComponent,
      CardComponent,
      CardBodyComponent,
      FormDirective,
      InputGroupComponent,
      InputGroupTextDirective,
      IconDirective,
      FormControlDirective,
      ButtonDirective
    ], template: '<div\r\n  class="login-background min-vh-100 d-flex justify-content-center align-items-center"\r\n>\r\n  <c-container breakpoint="md">\r\n    <c-row class="justify-content-center">\r\n      <c-col xs="11" sm="9" md="7" lg="5" xl="4">\r\n        <c-card-group>\r\n          <c-card class="p-4">\r\n            <c-card-body>\r\n              <form cForm [formGroup]="form" (ngSubmit)="login()">\r\n                <h1>Login</h1>\r\n                <br />\r\n\r\n                @if (errorMessage) {\r\n                  <div class="alert alert-danger">\r\n                    {{ errorMessage }}\r\n                  </div>\r\n                }\r\n\r\n                <c-input-group class="mb-3">\r\n                  <span cInputGroupText>\r\n                    <svg cIcon name="cilUser"></svg>\r\n                  </span>\r\n                  <input\r\n                    autoComplete="username"\r\n                    cFormControl\r\n                    placeholder="Username"\r\n                    formControlName="username"\r\n                  />\r\n                </c-input-group>\r\n\r\n                <c-input-group class="mb-4">\r\n                  <span cInputGroupText>\r\n                    <svg cIcon name="cilLockLocked"></svg>\r\n                  </span>\r\n                  <input\r\n                    autoComplete="current-password"\r\n                    cFormControl\r\n                    placeholder="Password"\r\n                    type="password"\r\n                    formControlName="password"\r\n                  />\r\n                </c-input-group>\r\n\r\n                <div class="d-grid mt-4">\r\n                  <button\r\n                    cButton\r\n                    color="primary"\r\n                    type="submit"\r\n                    size="lg"\r\n                    [disabled]="loading || form.invalid"\r\n                  >\r\n                    {{ loading ? "Logging in..." : "Login" }}\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </c-card-body>\r\n          </c-card>\r\n        </c-card-group>\r\n      </c-col>\r\n    </c-row>\r\n  </c-container>\r\n</div>\r\n', styles: ['/* src/app/views/pages/login/login.component.scss */\n.login-background {\n  position: relative;\n  background-image: url(/assets/images/SplashTessere2.png);\n  background-size: cover;\n  background-position: center;\n}\nc-card {\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.92);\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n}\n[data-coreui-theme=dark] c-card {\n  background: rgba(33, 37, 41, 0.92);\n}\n.login-background::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n}\n.login-background > * {\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/views/pages/login/login.component.ts", lineNumber: 40 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-7AQ7GS7E.js.map
