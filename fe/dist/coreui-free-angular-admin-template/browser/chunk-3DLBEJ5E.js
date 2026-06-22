import {
  API_CONSTANTS
} from "./chunk-OLXJWBKS.js";
import {
  HttpClient,
  Router
} from "./chunk-I6TGZBYO.js";
import {
  Injectable,
  inject,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-YYV6A2YU.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.loggedInSignal = signal(!!localStorage.getItem("token"), ...ngDevMode ? [{ debugName: "loggedInSignal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loggedIn = this.loggedInSignal.asReadonly();
  }
  login(credentials) {
    if (API_CONSTANTS.MOCK_LOGIN) {
      return of({
        token: "mock-jwt-token"
      }).pipe(tap((response) => this.saveToken(response.token)));
    }
    return this.http.post(`${API_CONSTANTS.BASE_URL}/auth/login`, credentials).pipe(tap((response) => this.saveToken(response.token)));
  }
  logout() {
    localStorage.removeItem("token");
    this.loggedInSignal.set(false);
    this.router.navigate(["/login"]);
  }
  isLoggedIn() {
    return this.loggedInSignal();
  }
  getToken() {
    return localStorage.getItem("token");
  }
  saveToken(token) {
    localStorage.setItem("token", token);
    this.loggedInSignal.set(true);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-3DLBEJ5E.js.map
