import {
  API_CONSTANTS,
  HttpClient
} from "./chunk-R4B7IERY.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZF5FRGBZ.js";

// src/app/services/sedi.service.ts
var SediService = class _SediService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = API_CONSTANTS.BASE_URL;
  }
  /**
   * GET - Get all tessere
   */
  getSedi(body) {
    return this.http.post(`${this.apiUrl}/getDipartimentiServlet`, body);
  }
  getSediList() {
    return this.http.get(`${this.apiUrl}/getDipartimentiServlet`);
  }
  static {
    this.\u0275fac = function SediService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SediService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SediService, factory: _SediService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SediService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SediService
};
//# sourceMappingURL=chunk-EJJ5TXTF.js.map
