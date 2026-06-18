import {
  cilCalculator,
  cilNotes,
  cilUser
} from "./chunk-U43FZQ3F.js";
import {
  IconDirective,
  RouterLink
} from "./chunk-M5X3AQM3.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-V3VOMCDM.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/pages/liste-home/liste-home.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function ListeHomeComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 2);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", card_r1.route);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", card_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.description);
  }
}
var ListeHomeComponent = class _ListeHomeComponent {
  constructor() {
    this.cards = signal([
      {
        title: "Tessere",
        description: "Gestione badge",
        route: "/liste/tessere",
        icon: cilCalculator
      },
      {
        title: "Utenti",
        description: "Gestione utenti",
        route: "/liste/utenti",
        icon: cilUser
      },
      {
        title: "Sedi",
        description: "Gestione sedi",
        route: "/liste/sedi",
        icon: cilNotes
      }
    ], ...ngDevMode ? [{ debugName: "cards" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function ListeHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListeHomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListeHomeComponent, selectors: [["app-liste-home"]], decls: 3, vars: 0, consts: [[1, "cards-grid"], [1, "menu-card", 3, "routerLink"], ["size", "lg", 3, "cIcon"]], template: function ListeHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ListeHomeComponent_For_2_Template, 6, 4, "div", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.cards());
      }
    }, dependencies: [
      RouterLink,
      IconDirective
    ], styles: ["\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.menu-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 2rem;\n  border-radius: 0.75rem;\n  background: var(--cui-body-bg);\n  border: 1px solid var(--cui-border-color);\n  transition: 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.menu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-color: var(--cui-primary);\n}\n.menu-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  color: var(--cui-primary);\n  margin-bottom: 1rem;\n  transition: 0.2s ease;\n}\n.menu-card[_ngcontent-%COMP%]:hover   .menu-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=liste-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListeHomeComponent, [{
    type: Component,
    args: [{ selector: "app-liste-home", imports: [
      RouterLink,
      IconDirective
    ], template: '<div class="cards-grid">\r\n  @for (card of cards(); track card.route) {\r\n    <div class="menu-card" [routerLink]="card.route">\r\n      <svg [cIcon]="card.icon" size="lg"></svg>\r\n\r\n      <h4>{{ card.title }}</h4>\r\n\r\n      <p>{{ card.description }}</p>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/views/pages/liste-home/liste-home.component.scss */\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.menu-card {\n  cursor: pointer;\n  padding: 2rem;\n  border-radius: 0.75rem;\n  background: var(--cui-body-bg);\n  border: 1px solid var(--cui-border-color);\n  transition: 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.menu-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-color: var(--cui-primary);\n}\n.menu-card {\n  padding: 2rem;\n  text-align: center;\n}\n.menu-icon {\n  width: 80px;\n  height: 80px;\n  color: var(--cui-primary);\n  margin-bottom: 1rem;\n  transition: 0.2s ease;\n}\n.menu-card:hover .menu-icon {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=liste-home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListeHomeComponent, { className: "ListeHomeComponent", filePath: "src/app/views/pages/liste-home/liste-home.component.ts", lineNumber: 16 });
})();
export {
  ListeHomeComponent
};
//# sourceMappingURL=chunk-ERZCNIUV.js.map
