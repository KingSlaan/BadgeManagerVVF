import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-3D2CXWAA.js";
import {
  API_CONSTANTS,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  GutterDirective,
  RowComponent,
  RowDirective
} from "./chunk-7NVYWTLR.js";
import "./chunk-7LGTHZSA.js";
import {
  CommonModule,
  HttpClient
} from "./chunk-M5X3AQM3.js";
import {
  Component,
  Injectable,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-V3VOMCDM.js";
import "./chunk-WDMUDEB6.js";

// src/app/services/user-settings.service.ts
var UserSettingsService = class _UserSettingsService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getUserSettings() {
    return this.http.get(`${API_CONSTANTS.BASE_URL}/user/settings`);
  }
  updateUserSettings(email, image) {
    const formData = new FormData();
    formData.append("email", email);
    if (image) {
      formData.append("image", image);
    }
    return this.http.put(`${API_CONSTANTS.BASE_URL}/user/settings`, formData);
  }
  static {
    this.\u0275fac = function UserSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserSettingsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserSettingsService, factory: _UserSettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/views/pages/user-settings/user-settings.component.ts
var UserSettingsComponent = class _UserSettingsComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.userSettingsService = inject(UserSettingsService);
    this.loading = false;
    this.saving = false;
    this.disabled = true;
    this.selectedImage = null;
    this.imagePreview = null;
    this.form = this.fb.group({
      email: ["", []],
      ruolo: ["", []],
      dataCreazione: ["", []]
    });
  }
  ngOnInit() {
    this.loadUserSettings();
    this.form.controls.email.disable({ emitEvent: false });
    this.form.controls.ruolo.disable({ emitEvent: false });
    this.form.controls.dataCreazione.disable({ emitEvent: false });
  }
  loadUserSettings() {
    this.loading = true;
    this.userSettingsService.getUserSettings().subscribe({
      next: (user) => {
        this.form.patchValue({
          email: user.email
        });
        this.imagePreview = user.imageUrl ?? null;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onImageSelected(event) {
    const input = event.target;
    if (!input.files?.length) {
      return;
    }
    this.selectedImage = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedImage);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    const { email } = this.form.getRawValue();
    this.userSettingsService.updateUserSettings(email, this.selectedImage).subscribe({
      next: (user) => {
        this.form.patchValue({
          email: user.email
        });
        this.imagePreview = user.imageUrl ?? this.imagePreview;
        this.selectedImage = null;
        this.saving = false;
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  static {
    this.\u0275fac = function UserSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSettingsComponent, selectors: [["app-change-user-settings"]], decls: 36, vars: 5, consts: [["xs", "12", "lg", "8"], ["cForm", "", "cRow", "", 3, "ngSubmit", "formGroup", "gutter"], ["xs", "6"], [1, "form-label"], ["cFormControl", "", "formControlName", "email", "placeholder", "Email", "type", "text"], ["cFormControl", "", "formControlName", "ruolo", "placeholder", "Ruolo", "type", "text"], ["cFormControl", "", "formControlName", "dataCreazione", "placeholder", "Data Creazione", "type", "text"], ["xs", "12"], ["cFormControl", "", "type", "file", "accept", "image/*", 3, "change"], [1, "d-flex", "justify-content-end", "mt-3", "flex-wrap"], ["cButton", "", "color", "success", "type", "submit", 3, "disabled"], ["xs", "12", "lg", "4"], [1, "text-center"], [1, "profile-preview-wrapper"], ["alt", "Profile Preview", 1, "profile-preview", 3, "src"], [1, "text-body-secondary"]], template: function UserSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card")(3, "c-card-body")(4, "h4");
        \u0275\u0275text(5, "User Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form", 1);
        \u0275\u0275listener("ngSubmit", function UserSettingsComponent_Template_form_ngSubmit_6_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(7, "c-col", 2)(8, "label", 3);
        \u0275\u0275text(9, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "c-col", 2)(12, "label", 3);
        \u0275\u0275text(13, "Ruolo");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "c-col", 2)(16, "label", 3);
        \u0275\u0275text(17, "Data Creazione");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "c-col", 7)(20, "label", 3);
        \u0275\u0275text(21, "Profile Image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 8);
        \u0275\u0275listener("change", function UserSettingsComponent_Template_input_change_22_listener($event) {
          return ctx.onImageSelected($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "c-card-footer")(24, "div", 9)(25, "button", 10);
        \u0275\u0275text(26, " Salva ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(27, "c-col", 11)(28, "c-card")(29, "c-card-body", 12)(30, "h5");
        \u0275\u0275text(31, "Profile Image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 13);
        \u0275\u0275element(33, "img", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 15);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.form)("gutter", 3);
        \u0275\u0275advance(19);
        \u0275\u0275property("disabled", ctx.saving);
        \u0275\u0275advance(8);
        \u0275\u0275property("src", ctx.imagePreview || "assets/images/placeholder_icon_user.svg", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.value, " ");
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      RowComponent,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      FormDirective,
      FormControlDirective,
      ButtonDirective,
      GutterDirective,
      RowDirective
    ], styles: ["\n.profile-preview-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  margin: 0 auto;\n}\n.profile-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1/1;\n  display: block;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid var(--cui-border-color);\n}\n/*# sourceMappingURL=user-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-change-user-settings", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RowComponent,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      FormDirective,
      FormControlDirective,
      ButtonDirective,
      GutterDirective,
      RowDirective
    ], template: `<c-row>\r
  <c-col xs="12" lg="8">\r
    <c-card>\r
      <c-card-body>\r
        <h4>User Settings</h4>\r
\r
        <form cForm [formGroup]="form" (ngSubmit)="save()" cRow [gutter]="3">\r
          <c-col xs="6">\r
            <label class="form-label">Email</label>\r
            <input\r
              cFormControl\r
              formControlName="email"\r
              placeholder="Email"\r
              type="text"\r
            />\r
          </c-col>\r
          <c-col xs="6">\r
            <label class="form-label">Ruolo</label>\r
            <input\r
              cFormControl\r
              formControlName="ruolo"\r
              placeholder="Ruolo"\r
              type="text"\r
            />\r
          </c-col>\r
          <c-col xs="6">\r
            <label class="form-label">Data Creazione</label>\r
            <input\r
              cFormControl\r
              formControlName="dataCreazione"\r
              placeholder="Data Creazione"\r
              type="text"\r
            />\r
          </c-col>\r
          <c-col xs="12">\r
            <label class="form-label">Profile Image</label>\r
            <input\r
              cFormControl\r
              type="file"\r
              accept="image/*"\r
              (change)="onImageSelected($event)"\r
            />\r
          </c-col>\r
        </form>\r
      </c-card-body>\r
      <c-card-footer>\r
        <div class="d-flex justify-content-end mt-3 flex-wrap">\r
          <button cButton color="success" type="submit" [disabled]="saving">\r
            Salva\r
          </button>\r
        </div>\r
      </c-card-footer>\r
    </c-card>\r
  </c-col>\r
\r
  <c-col xs="12" lg="4">\r
    <c-card>\r
      <c-card-body class="text-center">\r
        <h5>Profile Image</h5>\r
\r
        <div class="profile-preview-wrapper">\r
          <img\r
            [src]="imagePreview || 'assets/images/placeholder_icon_user.svg'"\r
            class="profile-preview"\r
            alt="Profile Preview"\r
          />\r
        </div>\r
\r
        <div class="text-body-secondary">\r
          {{ form.get("email")?.value }}\r
        </div>\r
      </c-card-body>\r
    </c-card>\r
  </c-col>\r
</c-row>\r
`, styles: ["/* src/app/views/pages/user-settings/user-settings.component.scss */\n.profile-preview-wrapper {\n  width: 100%;\n  max-width: 260px;\n  margin: 0 auto;\n}\n.profile-preview {\n  width: 100%;\n  aspect-ratio: 1/1;\n  display: block;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid var(--cui-border-color);\n}\n/*# sourceMappingURL=user-settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSettingsComponent, { className: "UserSettingsComponent", filePath: "src/app/views/pages/user-settings/user-settings.component.ts", lineNumber: 42 });
})();
export {
  UserSettingsComponent
};
//# sourceMappingURL=chunk-4S7T6SX6.js.map
