import {
  FormBuilder,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-GC3J5TWL.js";
import {
  API_CONSTANTS,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  ColComponent,
  CommonModule,
  FormControlDirective,
  FormDirective,
  HttpClient,
  RowComponent
} from "./chunk-EDMDHGX2.js";
import {
  Component,
  Injectable,
  inject,
  setClassMetadata,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZA5ZBDLI.js";
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
function UserSettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function UserSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
var UserSettingsComponent = class _UserSettingsComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.userSettingsService = inject(UserSettingsService);
    this.loading = false;
    this.saving = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.disabled = true;
    this.selectedImage = null;
    this.imagePreview = null;
    this.form = this.fb.group({
      email: ["", []]
    });
  }
  ngOnInit() {
    this.loadUserSettings();
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
        this.errorMessage = "Error loading user settings";
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
    this.errorMessage = "";
    this.successMessage = "";
    const { email } = this.form.getRawValue();
    this.userSettingsService.updateUserSettings(email, this.selectedImage).subscribe({
      next: (user) => {
        this.form.patchValue({
          email: user.email
        });
        this.imagePreview = user.imageUrl ?? this.imagePreview;
        this.selectedImage = null;
        this.successMessage = "User settings updated successfully";
        this.saving = false;
      },
      error: () => {
        this.errorMessage = "Error updating user settings";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSettingsComponent, selectors: [["app-change-user-settings"]], decls: 30, vars: 6, consts: [["xs", "12", "lg", "8"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["cForm", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["cFormControl", "", "disabled", "", "placeholder", "Disabled input", "type", "text"], ["cFormControl", "", "type", "file", "accept", "image/*", 3, "change"], [1, "d-flex", "justify-content-end", "mt-3", "flex-wrap"], ["cButton", "", "color", "success", "type", "submit", 3, "disabled"], ["xs", "12", "lg", "4"], [1, "text-center"], [1, "profile-preview-wrapper"], ["alt", "Profile Preview", 1, "profile-preview", 3, "src"], [1, "text-body-secondary"]], template: function UserSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card")(3, "c-card-body")(4, "h4");
        \u0275\u0275text(5, "User Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, UserSettingsComponent_Conditional_6_Template, 2, 1, "div", 1);
        \u0275\u0275conditionalCreate(7, UserSettingsComponent_Conditional_7_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(8, "form", 3);
        \u0275\u0275listener("ngSubmit", function UserSettingsComponent_Template_form_ngSubmit_8_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
        \u0275\u0275text(11, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 4)(14, "label", 5);
        \u0275\u0275text(15, "Profile Image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 7);
        \u0275\u0275listener("change", function UserSettingsComponent_Template_input_change_16_listener($event) {
          return ctx.onImageSelected($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "c-card-footer")(18, "div", 8)(19, "button", 9);
        \u0275\u0275text(20, " Salva ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "c-col", 10)(22, "c-card")(23, "c-card-body", 11)(24, "h5");
        \u0275\u0275text(25, "Preview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 12);
        \u0275\u0275element(27, "img", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 14);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.errorMessage ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMessage ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.saving);
        \u0275\u0275advance(8);
        \u0275\u0275property("src", ctx.imagePreview || "assets/images/placeholder_icon_user.svg", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx.form.get("email")) == null ? null : tmp_5_0.value, " ");
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      RowComponent,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardFooterComponent,
      FormDirective,
      FormControlDirective,
      ButtonDirective
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
      ButtonDirective
    ], template: `<c-row>\r
  <c-col xs="12" lg="8">\r
    <c-card>\r
      <c-card-body>\r
        <h4>User Settings</h4>\r
\r
        @if (errorMessage) {\r
          <div class="alert alert-danger">\r
            {{ errorMessage }}\r
          </div>\r
        }\r
\r
        @if (successMessage) {\r
          <div class="alert alert-success">\r
            {{ successMessage }}\r
          </div>\r
        }\r
\r
        <form cForm [formGroup]="form" (ngSubmit)="save()">\r
          <div class="mb-3">\r
            <label class="form-label">Email</label>\r
            <input\r
              cFormControl\r
              disabled\r
              placeholder="Disabled input"\r
              type="text"\r
            />\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Profile Image</label>\r
            <input\r
              cFormControl\r
              type="file"\r
              accept="image/*"\r
              (change)="onImageSelected($event)"\r
            />\r
          </div>\r
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
        <h5>Preview</h5>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSettingsComponent, { className: "UserSettingsComponent", filePath: "src/app/views/pages/user-settings/user-settings.component.ts", lineNumber: 38 });
})();
export {
  UserSettingsComponent
};
//# sourceMappingURL=chunk-7QZIYF7Y.js.map
