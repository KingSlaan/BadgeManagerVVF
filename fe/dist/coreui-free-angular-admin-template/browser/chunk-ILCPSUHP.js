import {
  cilBuilding,
  cilCreditCard,
  cilUser
} from "./chunk-VFB6BPIL.js";
import {
  IconDirective,
  RouterLink
} from "./chunk-I6TGZBYO.js";
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
} from "./chunk-YYV6A2YU.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/pages/liste-home/liste-home.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function ListeHomeComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", card_r1.route);
    \u0275\u0275advance(2);
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
        icon: cilCreditCard
      },
      {
        title: "Sedi",
        description: "Gestione sedi",
        route: "/liste/sedi",
        icon: cilBuilding
      },
      {
        title: "Utenti",
        description: "Gestione utenti",
        route: "/liste/utenti",
        icon: cilUser
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListeHomeComponent, selectors: [["app-liste-home"]], decls: 3, vars: 0, consts: [[1, "cards-grid"], [1, "menu-card", 3, "routerLink"], [1, "menu-icon-container"], [1, "menu-icon", 3, "cIcon"]], template: function ListeHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ListeHomeComponent_For_2_Template, 7, 4, "div", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.cards());
      }
    }, dependencies: [
      RouterLink,
      IconDirective
    ], styles: ["\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.menu-card[_ngcontent-%COMP%] {\n  min-height: 250px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  background: var(--cui-card-bg, #fff);\n  border: 1px solid var(--cui-border-color);\n  border-radius: 1rem;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.menu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);\n  border-color: var(--cui-primary);\n}\n.menu-icon-container[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--cui-primary) 12%, transparent);\n  overflow: visible;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 82px;\n  height: 82px;\n  color: var(--cui-primary);\n  fill: currentColor;\n  transform: scale(1.9);\n  transform-origin: center;\n  transition: transform 0.2s ease;\n}\n.menu-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: currentColor;\n}\n.menu-card[_ngcontent-%COMP%]:hover   .menu-icon[_ngcontent-%COMP%] {\n  transform: scale(2.1);\n}\n.menu-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: var(--cui-body-color);\n}\n.menu-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--cui-secondary-color);\n}\n/*# sourceMappingURL=liste-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListeHomeComponent, [{
    type: Component,
    args: [{ selector: "app-liste-home", imports: [
      RouterLink,
      IconDirective
    ], template: '<div class="cards-grid">\r\n  @for (card of cards(); track card.route) {\r\n    <div class="menu-card" [routerLink]="card.route">\r\n      <div class="menu-icon-container">\r\n        <svg [cIcon]="card.icon" class="menu-icon"></svg>\r\n      </div>\r\n\r\n      <h4>{{ card.title }}</h4>\r\n\r\n      <p>{{ card.description }}</p>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/views/pages/liste-home/liste-home.component.scss */\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.menu-card {\n  min-height: 250px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  background: var(--cui-card-bg, #fff);\n  border: 1px solid var(--cui-border-color);\n  border-radius: 1rem;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.menu-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);\n  border-color: var(--cui-primary);\n}\n.menu-icon-container {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--cui-primary) 12%, transparent);\n  overflow: visible;\n}\n.menu-icon {\n  width: 82px;\n  height: 82px;\n  color: var(--cui-primary);\n  fill: currentColor;\n  transform: scale(1.9);\n  transform-origin: center;\n  transition: transform 0.2s ease;\n}\n.menu-icon path {\n  fill: currentColor;\n}\n.menu-card:hover .menu-icon {\n  transform: scale(2.1);\n}\n.menu-card h4 {\n  margin: 0 0 0.75rem;\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: var(--cui-body-color);\n}\n.menu-card p {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--cui-secondary-color);\n}\n/*# sourceMappingURL=liste-home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListeHomeComponent, { className: "ListeHomeComponent", filePath: "src/app/views/pages/liste-home/liste-home.component.ts", lineNumber: 16 });
})();
export {
  ListeHomeComponent
};
//# sourceMappingURL=chunk-ILCPSUHP.js.map
