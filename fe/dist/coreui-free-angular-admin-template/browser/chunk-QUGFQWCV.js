import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZA5ZBDLI.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.counter = 0;
    this.toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  show(toast) {
    const id = ++this.counter;
    this.toasts.update((current) => [
      ...current,
      __spreadValues({
        id,
        delay: 5e3,
        color: "info"
      }, toast)
    ]);
  }
  remove(id) {
    this.toasts.update((current) => current.filter((t) => t.id !== id));
  }
  success(message, title = "Success") {
    this.show({
      title,
      message,
      color: "success"
    });
  }
  error(message, title = "Error") {
    this.show({
      title,
      message,
      color: "danger"
    });
  }
  warning(message, title = "Warning") {
    this.show({
      title,
      message,
      color: "warning"
    });
  }
  info(message, title = "Info") {
    this.show({
      title,
      message,
      color: "info"
    });
  }
  httpError(status, message) {
    switch (status) {
      case 0:
        this.error("Cannot connect to server", "Network Error");
        break;
      case 400:
        this.error(message || "Bad request", "400 Error");
        break;
      case 401:
        this.error(message || "Unauthorized", "401 Error");
        break;
      case 403:
        this.error(message || "Access denied", "403 Error");
        break;
      case 404:
        this.error(message || "Resource not found", "404 Error");
        break;
      case 500:
        this.error(message || "Internal server error", "500 Error");
        break;
      default:
        this.error(message || "Unexpected error occurred", `Error ${status}`);
    }
  }
  static {
    this.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-QUGFQWCV.js.map
