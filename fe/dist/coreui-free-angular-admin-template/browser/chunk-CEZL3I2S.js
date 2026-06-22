import {
  TESSERE_STATUS_COLORS,
  TESSERE_STATUS_MESSAGES
} from "./chunk-LXLCWKUT.js";
import {
  API_CONSTANTS
} from "./chunk-OLXJWBKS.js";
import {
  HttpClient
} from "./chunk-I6TGZBYO.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YYV6A2YU.js";

// src/app/services/tessere.service.ts
var TessereService = class _TessereService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = API_CONSTANTS.BASE_URL;
  }
  getTessere(body) {
    return this.http.post(`${this.apiUrl}/getTessereListByFiltersServlet`, body);
  }
  getTesseraById(id) {
    return this.http.get(`${this.apiUrl}/getTesseraByIdTesseraServlet?idTessera=${id}`);
  }
  getTessereHistory(id) {
    return this.http.get(`${this.apiUrl}/tesseraCronology/${id}`);
  }
  createTessere(tessere) {
    return this.http.post(`${this.apiUrl}/inserimentoTessereServlet`, tessere);
  }
  assegnaTessera(id, tessere) {
    return this.http.post(`${this.apiUrl}/assegnaTesseraServlet`, tessere);
  }
  cambiaSedeTessera(id, tessere) {
    return this.http.post(`${this.apiUrl}/cambiaSedeServlet`, tessere);
  }
  updateTessera(id, tessera) {
    return this.http.put(`${this.apiUrl}/${id}`, tessera);
  }
  revocaTessera(id, tessera) {
    return this.http.put(`${this.apiUrl}/revocaTessera/${id}`, tessera);
  }
  invalidaTessera(id, tessera) {
    return this.http.put(`${this.apiUrl}/invalidaTessera/${id}`, tessera);
  }
  stampaTessere(dipendentiSelezionati, formato) {
    const payload = dipendentiSelezionati.map((d) => ({
      nome: d.nome,
      cognome: d.cognome
    }));
    return this.http.post(`${this.apiUrl}/stampaBadgeServlet?formato=${formato}`, payload, {
      observe: "response",
      responseType: "blob"
    });
  }
  static {
    this.\u0275fac = function TessereService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TessereService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TessereService, factory: _TessereService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TessereService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/utils.service.ts
var UtilsService = class _UtilsService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = API_CONSTANTS.BASE_URL;
  }
  getStampaWord(body) {
    return this.http.post(`${this.apiUrl}/generaDocumentoBadgeServlet`, body, {
      observe: "response",
      responseType: "blob"
    });
  }
  getStampaPDF(body) {
    return this.http.post(`${this.apiUrl}/generaPdfBadgeServlet`, body, {
      observe: "response",
      responseType: "blob"
    });
  }
  formatDateString(dateString) {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "";
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  getCurrentDateTime() {
    const now = /* @__PURE__ */ new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  parseItalianDate(value) {
    if (!value?.trim()) {
      return null;
    }
    try {
      const [datePart, timePart = "00:00:00"] = value.split(" ");
      const [day, month, year] = datePart.split("/").map(Number);
      const [hours, minutes, seconds] = timePart.split(":").map(Number);
      if (!day || !month || !year || Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) {
        return null;
      }
      return new Date(year, month - 1, day, hours || 0, minutes || 0, seconds || 0);
    } catch (e) {
      return null;
    }
  }
  getStatusColor(row) {
    if (row) {
      switch (row.stato) {
        case TESSERE_STATUS_MESSAGES.INDISPONIBILE:
          return TESSERE_STATUS_COLORS.INDISPONIBILE;
        case TESSERE_STATUS_MESSAGES.OCCUPATA:
          return TESSERE_STATUS_COLORS.OCCUPATA;
        case TESSERE_STATUS_MESSAGES.LIBERA:
          return TESSERE_STATUS_COLORS.LIBERA;
        default:
          return TESSERE_STATUS_COLORS.ND;
      }
    }
    return TESSERE_STATUS_COLORS.ND;
  }
  getStatusTooltip(row) {
    if (row) {
      switch (row.stato) {
        case TESSERE_STATUS_MESSAGES.INDISPONIBILE:
          return TESSERE_STATUS_MESSAGES.INDISPONIBILE_DESC;
        case TESSERE_STATUS_MESSAGES.OCCUPATA:
          return TESSERE_STATUS_MESSAGES.OCCUPATA_DESC;
        case TESSERE_STATUS_MESSAGES.LIBERA:
          return TESSERE_STATUS_MESSAGES.LIBERA_DESC;
        default:
          return TESSERE_STATUS_MESSAGES.ND_DESC;
      }
    }
    return TESSERE_STATUS_COLORS.ND;
  }
  static {
    this.\u0275fac = function UtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtilsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilsService, factory: _UtilsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TessereService,
  UtilsService
};
//# sourceMappingURL=chunk-CEZL3I2S.js.map
