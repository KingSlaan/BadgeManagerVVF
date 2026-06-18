import {
  animate,
  animateChild,
  animation,
  group,
  query,
  sequence,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-7LGTHZSA.js";
import {
  ActivatedRoute,
  DomSanitizer,
  IconDirective,
  NavigationEnd,
  NgTemplateOutlet,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-M5X3AQM3.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Pipe,
  QueryList,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  RuntimeError,
  SecurityContext,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterEveryRender,
  afterNextRender,
  afterRenderEffect,
  assertInInjectionContext,
  assertNotInReactiveContext,
  booleanAttribute,
  combineLatest,
  computed,
  concat,
  contentChild,
  contentChildren,
  createComponent,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  finalize,
  forwardRef,
  fromEvent,
  inject,
  input,
  isSignal,
  linkedSignal,
  map,
  merge,
  model,
  numberAttribute,
  of,
  output,
  runInInjectionContext,
  setClassMetadata,
  signal,
  skip,
  startWith,
  take,
  takeUntil,
  takeWhile,
  tap,
  untracked,
  viewChild,
  withLatestFrom,
  zipWith,
  ɵɵHostDirectivesFeature,
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
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementContainer,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-V3VOMCDM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
/**
 * @license Angular v21.2.12
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn2) {
    this._listen("done", fn2);
  }
  onStart(fn2) {
    this._listen("start", fn2);
  }
  onDestroy(fn2) {
    this._listen("destroy", fn2);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v21.2.12
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state2;
  if (options?.requireSync) {
    state2 = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state2 = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state2.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state2.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state2().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state2();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state2 = _ref.state;
  Object.keys(state2.elements).forEach(function(name) {
    var style2 = state2.styles[name] || {};
    var attributes = state2.attributes[name] || {};
    var element = state2.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style2);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state2 = _ref2.state;
  var initialStyles = {
    popper: {
      position: state2.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state2.elements.popper.style, initialStyles.popper);
  state2.styles = initialStyles;
  if (state2.elements.arrow) {
    Object.assign(state2.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state2.elements).forEach(function(name) {
      var element = state2.elements[name];
      var attributes = state2.attributes[name] || {};
      var styleProperties = Object.keys(state2.styles.hasOwnProperty(name) ? state2.styles[name] : initialStyles[name]);
      var style2 = styleProperties.reduce(function(style3, property) {
        style3[property] = "";
        return style3;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state2) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state2 = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state2.elements.arrow;
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state2.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state2);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state2.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
  var state2 = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state2.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state2.elements.popper, arrowElement)) {
    return;
  }
  state2.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state2 = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state2.placement),
    variation: getVariation(state2.placement),
    popper: state2.elements.popper,
    popperRect: state2.rects.popper,
    gpuAcceleration,
    isFixed: state2.options.strategy === "fixed"
  };
  if (state2.modifiersData.popperOffsets != null) {
    state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.popperOffsets,
      position: state2.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state2.modifiersData.arrow != null) {
    state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-placement": state2.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect4(_ref) {
  var state2 = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state2.elements.popper);
  var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect4,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state2.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state2.rects.popper;
  var element = state2.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state2.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state2.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state2 = _ref.state, options = _ref.options, name = _ref.name;
  if (state2.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state2.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state2, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state2.placement !== firstFittingPlacement) {
    state2.modifiersData[name]._skip = true;
    state2.placement = firstFittingPlacement;
    state2.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state2 = _ref.state, name = _ref.name;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var preventedOffsets = state2.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state2, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state2, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state2.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state2.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state2.modifiersData.popperOffsets != null) {
    state2.modifiersData.popperOffsets.x += x;
    state2.modifiersData.popperOffsets.y += y;
  }
  state2.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state2 = _ref.state, name = _ref.name;
  state2.modifiersData[name] = computeOffsets({
    reference: state2.rects.reference,
    element: state2.rects.popper,
    strategy: "absolute",
    placement: state2.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state2 = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state2, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state2.placement);
  var variation = getVariation(state2.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state2.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state2.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map2 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state2,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state2.options) : setOptionsAction;
        cleanupModifierEffects();
        state2.options = Object.assign({}, defaultOptions, state2.options, options2);
        state2.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state2.options.modifiers)));
        state2.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state2.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state2.reset = false;
        state2.placement = state2.options.placement;
        state2.orderedModifiers.forEach(function(modifier) {
          return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state2.orderedModifiers.length; index++) {
          if (state2.reset === true) {
            state2.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state2.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state2 = fn2({
              state: state2,
              options: _options,
              name,
              instance
            }) || state2;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state2);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state3) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state3);
      }
    });
    function runModifierEffects() {
      state2.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state: state2,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/_keycodes-chunk.mjs
var TAB = 9;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var END = 35;
var HOME = 36;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var ZERO = 48;
var NINE = 57;
var A = 65;
var Z = 90;
var META = 91;
var MAC_META = 224;

// node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}

// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch (e) {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  constructor() {
  }
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Platform,
    factory: _Platform.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_passive-listeners-chunk.mjs
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_focus-monitor-chunk.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = {
  passive: true,
  capture: true
};
var InputModalityDetector = class _InputModalityDetector {
  _platform = inject(Platform);
  _listenerCleanups;
  modalityDetected;
  modalityChanged;
  get mostRecentModality() {
    return this._modality.value;
  }
  _mostRecentTarget = null;
  _modality = new BehaviorSubject(null);
  _options;
  _lastTouchMs = 0;
  _onKeydown = (event) => {
    if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
      return;
    }
    this._modality.next("keyboard");
    this._mostRecentTarget = _getEventTarget(event);
  };
  _onMousedown = (event) => {
    if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
      return;
    }
    this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
    this._mostRecentTarget = _getEventTarget(event);
  };
  _onTouchstart = (event) => {
    if (isFakeTouchstartFromScreenReader(event)) {
      this._modality.next("keyboard");
      return;
    }
    this._lastTouchMs = Date.now();
    this._modality.next("touch");
    this._mostRecentTarget = _getEventTarget(event);
  };
  constructor() {
    const ngZone = inject(NgZone);
    const document2 = inject(DOCUMENT);
    const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, {
      optional: true
    });
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (this._platform.isBrowser) {
      const renderer = inject(RendererFactory2).createRenderer(null, null);
      this._listenerCleanups = ngZone.runOutsideAngular(() => {
        return [renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions), renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions), renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)];
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  static \u0275fac = function InputModalityDetector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputModalityDetector)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputModalityDetector,
    factory: _InputModalityDetector.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var FocusMonitor = class _FocusMonitor {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _inputModalityDetector = inject(InputModalityDetector);
  _origin = null;
  _lastFocusOrigin = null;
  _windowFocused = false;
  _windowFocusTimeoutId;
  _originTimeoutId;
  _originFromTouchInteraction = false;
  _elementInfo = /* @__PURE__ */ new Map();
  _monitoredElementCount = 0;
  _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
  _detectionMode;
  _windowFocusListener = () => {
    this._windowFocused = true;
    this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
  };
  _document = inject(DOCUMENT);
  _stopInputModalityDetector = new Subject();
  constructor() {
    const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  _rootNodeFocusAndBlurListener = (event) => {
    const target = _getEventTarget(event);
    for (let element = target; element; element = element.parentElement) {
      if (event.type === "focus") {
        this._onFocus(event, element);
      } else {
        this._onBlur(event, element);
      }
    }
  };
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._document;
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._document.activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(modality, true);
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
  static \u0275fac = function FocusMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FocusMonitor,
    factory: _FocusMonitor.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkMonitorFocus = class _CdkMonitorFocus {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _monitorSubscription;
  _focusOrigin = null;
  cdkFocusChange = new EventEmitter();
  constructor() {
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._monitorSubscription?.unsubscribe();
  }
  static \u0275fac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMonitorFocus)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMonitorFocus,
    selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
    outputs: {
      cdkFocusChange: "cdkFocusChange"
    },
    exportAs: ["cdkMonitorFocus"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus"
    }]
  }], () => [], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();

// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/private.mjs
var _VisuallyHiddenLoader = class __VisuallyHiddenLoader {
  static \u0275fac = function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __VisuallyHiddenLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __VisuallyHiddenLoader,
    selectors: [["ng-component"]],
    exportAs: ["cdkVisuallyHidden"],
    decls: 0,
    vars: 0,
    template: function _VisuallyHiddenLoader_Template(rf, ctx) {
    },
    styles: [".cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl] .cdk-visually-hidden {\n  left: auto;\n  right: 0;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_VisuallyHiddenLoader, [{
    type: Component,
    args: [{
      exportAs: "cdkVisuallyHidden",
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl] .cdk-visually-hidden {\n  left: auto;\n  right: 0;\n}\n"]
    }]
  }], null, null);
})();
var policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function _setInnerHtml(element, html, sanitizer) {
  const cleanHtml = sanitizer.sanitize(SecurityContext.HTML, html);
  if (cleanHtml === null && (typeof ngDevMode === "undefined" || ngDevMode)) {
    throw new Error(`Could not sanitize HTML: ${html}`);
  }
  element.innerHTML = trustedHTMLFromString(cleanHtml || "");
}

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/_breakpoints-observer-chunk.mjs
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var MediaMatcher = class _MediaMatcher {
  _platform = inject(Platform);
  _nonce = inject(CSP_NONCE, {
    optional: true
  });
  _matchMedia;
  constructor() {
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
  }
  matchMedia(query2) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query2, this._nonce);
    }
    return this._matchMedia(query2);
  }
  static \u0275fac = function MediaMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MediaMatcher,
    factory: _MediaMatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function createEmptyStyleRule(query2, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query2)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query2} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query2);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query2) {
  return {
    matches: query2 === "all" || query2 === "",
    media: query2,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var BreakpointObserver = class _BreakpointObserver {
  _mediaMatcher = inject(MediaMatcher);
  _zone = inject(NgZone);
  _queries = /* @__PURE__ */ new Map();
  _destroySubject = new Subject();
  constructor() {
  }
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query2) => this._registerQuery(query2).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query: query2
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query2] = matches;
      });
      return response;
    }));
  }
  _registerQuery(query2) {
    if (this._queries.has(query2)) {
      return this._queries.get(query2);
    }
    const mql = this._mediaMatcher.matchMedia(query2);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query: query2,
      matches
    })), takeUntil(this._destroySubject));
    const output2 = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query2, output2);
    return output2;
  }
  static \u0275fac = function BreakpointObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreakpointObserver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BreakpointObserver,
    factory: _BreakpointObserver.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function splitQueries(queries) {
  return queries.map((query2) => query2.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query2) => query2.trim());
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
  static \u0275fac = function MutationObserverFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MutationObserverFactory)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MutationObserverFactory,
    factory: _MutationObserverFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ContentObserver = class _ContentObserver {
  _mutationObserverFactory = inject(MutationObserverFactory);
  _observedElements = /* @__PURE__ */ new Map();
  _ngZone = inject(NgZone);
  constructor() {
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
  static \u0275fac = function ContentObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentObserver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContentObserver,
    factory: _ContentObserver.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkObserveContent = class _CdkObserveContent {
  _contentObserver = inject(ContentObserver);
  _elementRef = inject(ElementRef);
  event = new EventEmitter();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  _disabled = false;
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  _debounce;
  _currentSubscription = null;
  constructor() {
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static \u0275fac = function CdkObserveContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkObserveContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkObserveContent,
    selectors: [["", "cdkObserveContent", ""]],
    inputs: {
      disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
      debounce: "debounce"
    },
    outputs: {
      event: "cdkObserveContent"
    },
    exportAs: ["cdkObserveContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent"
    }]
  }], () => [], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var ObserversModule = class _ObserversModule {
  static \u0275fac = function ObserversModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObserversModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ObserversModule,
    imports: [CdkObserveContent],
    exports: [CdkObserveContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MutationObserverFactory]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_a11y-module-chunk.mjs
var InteractivityChecker = class _InteractivityChecker {
  _platform = inject(Platform);
  constructor() {
  }
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow2(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
  static \u0275fac = function InteractivityChecker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InteractivityChecker)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InteractivityChecker,
    factory: _InteractivityChecker.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch (e) {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow2(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  _element;
  _checker;
  _ngZone;
  _document;
  _injector;
  _startAnchor = null;
  _endAnchor = null;
  _hasAttached = false;
  startAnchorListener = () => this.focusLastTabbableElement();
  endAnchorListener = () => this.focusFirstTabbableElement();
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  _enabled = true;
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  hasAttached() {
    return this._hasAttached;
  }
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  _executeOnStable(fn2) {
    if (this._injector) {
      afterNextRender(fn2, {
        injector: this._injector
      });
    } else {
      setTimeout(fn2);
    }
  }
};
var FocusTrapFactory = class _FocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
  static \u0275fac = function FocusTrapFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapFactory)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FocusTrapFactory,
    factory: _FocusTrapFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkTrapFocus = class _CdkTrapFocus {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  focusTrap = void 0;
  _previouslyFocusedElement = null;
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  autoCapture = false;
  constructor() {
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
  static \u0275fac = function CdkTrapFocus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTrapFocus)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTrapFocus,
    selectors: [["", "cdkTrapFocus", ""]],
    inputs: {
      enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
      autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
    },
    exportAs: ["cdkTrapFocus"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus"
    }]
  }], () => [], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: () => null
});
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var LiveAnnouncer = class _LiveAnnouncer {
  _ngZone = inject(NgZone);
  _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
    optional: true
  });
  _liveElement;
  _document = inject(DOCUMENT);
  _sanitizer = inject(DomSanitizer);
  _previousTimeout;
  _currentPromise;
  _currentResolve;
  constructor() {
    const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, {
      optional: true
    });
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        if (!message || typeof message === "string") {
          this._liveElement.textContent = message;
        } else {
          _setInnerHtml(this._liveElement, message, this._sanitizer);
        }
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  static \u0275fac = function LiveAnnouncer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveAnnouncer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LiveAnnouncer,
    factory: _LiveAnnouncer.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkAriaLive = class _CdkAriaLive {
  _elementRef = inject(ElementRef);
  _liveAnnouncer = inject(LiveAnnouncer);
  _contentObserver = inject(ContentObserver);
  _ngZone = inject(NgZone);
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = void 0;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  _politeness = "polite";
  duration;
  _previousAnnouncedText;
  _subscription;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }
  static \u0275fac = function CdkAriaLive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAriaLive)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAriaLive,
    selectors: [["", "cdkAriaLive", ""]],
    inputs: {
      politeness: [0, "cdkAriaLive", "politeness"],
      duration: [0, "cdkAriaLiveDuration", "duration"]
    },
    exportAs: ["cdkAriaLive"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive"
    }]
  }], () => [], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var HighContrastModeDetector = class _HighContrastModeDetector {
  _platform = inject(Platform);
  _hasCheckedHighContrastMode = false;
  _document = inject(DOCUMENT);
  _breakpointSubscription;
  constructor() {
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
  static \u0275fac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighContrastModeDetector)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HighContrastModeDetector,
    factory: _HighContrastModeDetector.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var A11yModule = class _A11yModule {
  constructor() {
    inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
  }
  static \u0275fac = function A11yModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _A11yModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _A11yModule,
    imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
    exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ObserversModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_typeahead-chunk.mjs
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
var Typeahead = class {
  _letterKeyStream = new Subject();
  _items = [];
  _selectedItemIndex = -1;
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = new Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
      throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
};

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/_list-key-manager-chunk.mjs
var ListKeyManager = class {
  _items;
  _activeItemIndex = signal(-1, ...ngDevMode ? [{
    debugName: "_activeItemIndex"
  }] : []);
  _activeItem = signal(null, ...ngDevMode ? [{
    debugName: "_activeItem"
  }] : []);
  _wrap = false;
  _typeaheadSubscription = Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal = null;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  _skipPredicateFn = (item) => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    if (_items instanceof QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isSignal(_items)) {
      if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new Error("ListKeyManager constructed with a signal must receive an injector");
      }
      this._effectRef = effect(() => this._itemsChanged(_items()), __spreadProps(__spreadValues({}, ngDevMode ? {
        debugName: "_effectRef"
      } : {}), {
        injector
      }));
    }
  }
  tabOut = new Subject();
  change = new Subject();
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const items2 = this._getItemsArray();
      if (items2.length > 0 && items2.some((item) => typeof item.getLabel !== "function")) {
        throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new Typeahead(items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.setActiveItem(item);
    });
    return this;
  }
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex());
    }
  }
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
    const isModifierAllowed = modifiers.every((modifier) => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;
      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
          this._typeahead?.handleKey(event);
        }
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  get activeItemIndex() {
    return this._activeItemIndex();
  }
  get activeItem() {
    return this._activeItem();
  }
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  setNextItemActive() {
    this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  setPreviousItemActive() {
    this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === "number" ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex.set(index);
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
  }
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  _getItemsArray() {
    if (isSignal(this._items)) {
      return this._items();
    }
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
        this._activeItemIndex.set(newIndex);
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
};

// node_modules/@angular/cdk/fesm2022/_focus-key-manager-chunk.mjs
var FocusKeyManager = class extends ListKeyManager {
  _origin = "program";
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
};

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var AriaDescriber = class _AriaDescriber {
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  _messageRegistry = /* @__PURE__ */ new Map();
  _messagesContainer = null;
  _id = `${nextId++}`;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (!this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
  static \u0275fac = function AriaDescriber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AriaDescriber)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AriaDescriber,
    factory: _AriaDescriber.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ConfigurableFocusTrap = class extends FocusTrap {
  _focusTrapManager;
  _inertStrategy;
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var EventListenerFocusTrapInertStrategy = class {
  _listener = null;
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var FocusTrapManager = class _FocusTrapManager {
  _focusTrapStack = [];
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
  static \u0275fac = function FocusTrapManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapManager)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FocusTrapManager,
    factory: _FocusTrapManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusTrapManager = inject(FocusTrapManager);
  _document = inject(DOCUMENT);
  _inertStrategy;
  _injector = inject(Injector);
  constructor() {
    const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, {
      optional: true
    });
    this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
  static \u0275fac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigurableFocusTrapFactory)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfigurableFocusTrapFactory,
    factory: _ConfigurableFocusTrapFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule = class _LayoutModule {
  static \u0275fac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _LayoutModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/@coreui/angular/fesm2022/coreui-angular.mjs
var _c0 = ["*"];
var _c1 = () => ({
  display: "none"
});
var _c2 = ["*", "*"];
function AccordionItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccordionItemComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccordionItemComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccordionItemComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function AccordionItemComponent_ng_template_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem());
    });
    \u0275\u0275template(1, AccordionItemComponent_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultAccordionHeaderContentTemplate_r3 = \u0275\u0275reference(9);
    const tmpl_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("collapsed", !ctx_r1.itemVisible());
    \u0275\u0275attribute("aria-controls", ctx_r1.contentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tmpl_r4["accordionHeader"] || defaultAccordionHeaderContentTemplate_r3)("ngTemplateOutletContext", ctx_r1.itemContext);
  }
}
function AccordionItemComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function AccordionItemComponent_ng_template_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AccordionItemComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, AccordionItemComponent_ng_template_10_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultAccordionBodyContentTemplate_r5 = \u0275\u0275reference(13);
    const tmpl_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tmpl_r4["accordionBody"] || defaultAccordionBodyContentTemplate_r5)("ngTemplateOutletContext", ctx_r1.itemContext);
  }
}
function AccordionItemComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function AlertComponent_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AlertComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AlertComponent_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    const defaultAlertButtonCloseTemplate_r2 = \u0275\u0275reference(2);
    \u0275\u0275property("ngTemplateOutlet", ((tmp_3_0 = ctx_r0.templates()) == null ? null : tmp_3_0["alertButtonCloseTemplate"]) || defaultAlertButtonCloseTemplate_r2);
  }
}
function AlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AlertComponent_Conditional_0_Conditional_0_Template, 1, 1, "ng-container");
    \u0275\u0275projection(1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.dismissible ? 0 : -1);
  }
}
function AlertComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function AlertComponent_ng_template_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.visible = false);
    });
    \u0275\u0275elementEnd();
  }
}
function AvatarComponent_ProjectionFallback_0_Conditional_0_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275domProperty("src", \u0275\u0275interpolate(ctx_r0.src() ?? ""), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275interpolate(ctx_r0.alt()));
  }
}
function AvatarComponent_ProjectionFallback_0_Conditional_0_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "rect", 3);
    \u0275\u0275domElementEnd();
  }
}
function AvatarComponent_ProjectionFallback_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domTemplate(0, AvatarComponent_ProjectionFallback_0_Conditional_0_Defer_0_Template, 1, 4)(1, AvatarComponent_ProjectionFallback_0_Conditional_0_DeferPlaceholder_1_Template, 2, 0);
    \u0275\u0275defer(2, 0, null, null, 1);
    \u0275\u0275deferPrefetchOnIdle();
    \u0275\u0275deferOnIdle();
  }
}
function AvatarComponent_ProjectionFallback_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AvatarComponent_ProjectionFallback_0_Conditional_0_Template, 4, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.src() ? 0 : -1);
  }
}
function AvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.statusClass());
  }
}
var _c3 = () => ({});
function BreadcrumbItemComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BreadcrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275template(1, BreadcrumbItemComponent_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultBreadcrumbItemContentTemplate_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("routerLink", ctx_r0.url())("cHtmlAttr", ctx_r0.attribs() ?? \u0275\u0275pureFunction0(11, _c3))("target", (tmp_4_0 = ctx_r0.attribs()) == null ? null : tmp_4_0["target"])("queryParams", ((tmp_5_0 = ctx_r0.linkProps()) == null ? null : tmp_5_0.queryParams) ?? null)("fragment", (tmp_6_0 = ctx_r0.linkProps()) == null ? null : tmp_6_0.fragment)("queryParamsHandling", ((tmp_7_0 = ctx_r0.linkProps()) == null ? null : tmp_7_0.queryParamsHandling) ?? null)("preserveFragment", ((tmp_8_0 = ctx_r0.linkProps()) == null ? null : tmp_8_0.preserveFragment) ?? false)("skipLocationChange", ((tmp_9_0 = ctx_r0.linkProps()) == null ? null : tmp_9_0.skipLocationChange) ?? false)("replaceUrl", ((tmp_10_0 = ctx_r0.linkProps()) == null ? null : tmp_10_0.replaceUrl) ?? false)("state", ((tmp_11_0 = ctx_r0.linkProps()) == null ? null : tmp_11_0.state) ?? \u0275\u0275pureFunction0(12, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", defaultBreadcrumbItemContentTemplate_r2);
  }
}
function BreadcrumbItemComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BreadcrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, BreadcrumbItemComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultBreadcrumbItemContentTemplate_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("cHtmlAttr", ctx_r0.attribs() ?? \u0275\u0275pureFunction0(2, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", defaultBreadcrumbItemContentTemplate_r2);
  }
}
function BreadcrumbItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function BreadcrumbRouterComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-breadcrumb-item", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const breadcrumb_r2 = ctx_r0.$implicit;
    const \u0275$index_3_r3 = ctx_r0.$index;
    const \u0275$count_3_r4 = ctx_r0.$count;
    \u0275\u0275property("active", \u0275$index_3_r3 === \u0275$count_3_r4 - 1)("url", breadcrumb_r2 == null ? null : breadcrumb_r2.url)("attribs", breadcrumb_r2 == null ? null : breadcrumb_r2.attributes)("linkProps", breadcrumb_r2 == null ? null : breadcrumb_r2.linkProps);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", breadcrumb_r2 == null ? null : breadcrumb_r2.label, " ");
  }
}
function BreadcrumbRouterComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BreadcrumbRouterComponent_For_2_Conditional_0_Template, 2, 5, "c-breadcrumb-item", 1);
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    const \u0275$index_3_r3 = ctx.$index;
    const \u0275$count_3_r4 = ctx.$count;
    \u0275\u0275conditional((breadcrumb_r2 == null ? null : breadcrumb_r2.label) && ((breadcrumb_r2 == null ? null : breadcrumb_r2.url == null ? null : breadcrumb_r2.url.slice(-1)) === "/" || \u0275$index_3_r3 === \u0275$count_3_r4 - 1) ? 0 : -1);
  }
}
function CarouselControlComponent_ProjectionFallback_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span");
    \u0275\u0275domElementStart(1, "span", 0);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.carouselControlIconClass());
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.caption());
  }
}
var _c4 = (a0, a1) => ({
  $implicit: a0,
  active: a1
});
var _c5 = (a0) => ({
  active: a0
});
function CarouselIndicatorsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CarouselIndicatorsComponent_ng_template_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function CarouselIndicatorsComponent_ng_template_1_For_1_Template_button_click_0_listener() {
      const \u0275$index_8_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClick(\u0275$index_8_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_8_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275pureFunction1(4, _c5, ctx_r2.active === \u0275$index_8_r2));
    \u0275\u0275attribute("data-coreui-target", \u0275$index_8_r2)("aria-current", ctx_r2.active === \u0275$index_8_r2);
  }
}
function CarouselIndicatorsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CarouselIndicatorsComponent_ng_template_1_For_1_Template, 1, 6, "button", 2, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.items);
  }
}
function CarouselItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function HeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275projection(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.headerClasses());
  }
}
function HeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function NavbarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NavbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.containerClass());
  }
}
function NavbarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var _c6 = ["modalContentRef"];
var _c7 = "[_nghost-%COMP%]{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}";
var _c8 = ["popoverTemplate"];
function ProgressComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProgressComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const defaultContent_r1 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", defaultContent_r1);
  }
}
function ProgressComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-progress-bar", 1);
    \u0275\u0275template(1, ProgressComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultContent_r1 = \u0275\u0275reference(3);
    const pbd_r3 = ctx_r1.progressBarDirective;
    \u0275\u0275property("animated", pbd_r3 == null ? null : pbd_r3.animated())("variant", pbd_r3 == null ? null : pbd_r3.variant())("color", pbd_r3 == null ? null : pbd_r3.color())("value", ctx_r1.barValue());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", defaultContent_r1);
  }
}
function ProgressComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function SidebarBrandComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("sidebar-brand-full");
    \u0275\u0275property("cHtmlAttr", ctx_r0.brandFull());
  }
}
function SidebarBrandComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("sidebar-brand-narrow");
    \u0275\u0275property("cHtmlAttr", ctx_r0.brandNarrow());
  }
}
function SidebarBrandComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0);
    \u0275\u0275conditionalCreate(1, SidebarBrandComponent_Conditional_0_Conditional_1_Template, 1, 3, "img", 1);
    \u0275\u0275conditionalCreate(2, SidebarBrandComponent_Conditional_0_Conditional_2_Template, 1, 3, "img", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routerLink());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.brandFull() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.brandNarrow() ? 2 : -1);
  }
}
function SidebarBrandComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function SidebarNavLinkContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275domElementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const itemLinkContent_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((itemLinkContent_r1 == null ? null : itemLinkContent_r1.name) ?? "");
  }
}
var _c9 = (a0) => ({
  $implicit: a0
});
var _c10 = () => ({
  exact: false
});
function SidebarNavLinkComponent_Case_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "cSidebarNavBadge");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const linkItem_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, linkItem_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(linkItem_r1.badge == null ? null : linkItem_r1.badge.text);
  }
}
function SidebarNavLinkComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275pipe(1, "cSidebarNavLink");
    \u0275\u0275template(2, SidebarNavLinkComponent_Case_1_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275element(3, "c-sidebar-nav-link-content", 6);
    \u0275\u0275conditionalCreate(4, SidebarNavLinkComponent_Case_1_Conditional_4_Template, 3, 5, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const iconTemplate_r2 = \u0275\u0275reference(5);
    const linkItem_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 7, linkItem_r1));
    \u0275\u0275property("cHtmlAttr", linkItem_r1.attributes ?? \u0275\u0275pureFunction0(9, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", iconTemplate_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c9, linkItem_r1));
    \u0275\u0275advance();
    \u0275\u0275property("item", linkItem_r1);
    \u0275\u0275advance();
    \u0275\u0275conditional(linkItem_r1.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_Case_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "cSidebarNavBadge");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const linkItem_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, linkItem_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(linkItem_r1.badge == null ? null : linkItem_r1.badge.text);
  }
}
function SidebarNavLinkComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275pipe(1, "cSidebarNavLink");
    \u0275\u0275listener("click", function SidebarNavLinkComponent_Case_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.linkClicked());
    });
    \u0275\u0275template(2, SidebarNavLinkComponent_Case_2_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275element(3, "c-sidebar-nav-link-content", 6);
    \u0275\u0275conditionalCreate(4, SidebarNavLinkComponent_Case_2_Conditional_4_Template, 3, 5, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const iconTemplate_r2 = \u0275\u0275reference(5);
    const linkItem_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 8, linkItem_r1));
    \u0275\u0275property("cHtmlAttr", linkItem_r1.attributes ?? \u0275\u0275pureFunction0(10, _c3))("href", ctx_r3.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", iconTemplate_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c9, linkItem_r1));
    \u0275\u0275advance();
    \u0275\u0275property("item", linkItem_r1);
    \u0275\u0275advance();
    \u0275\u0275conditional(linkItem_r1.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_Case_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "cSidebarNavBadge");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const linkItem_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, linkItem_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(linkItem_r1.badge == null ? null : linkItem_r1.badge.text);
  }
}
function SidebarNavLinkComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275pipe(1, "cSidebarNavLink");
    \u0275\u0275listener("click", function SidebarNavLinkComponent_Case_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.linkClicked());
    });
    \u0275\u0275template(2, SidebarNavLinkComponent_Case_3_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275element(3, "c-sidebar-nav-link-content", 6);
    \u0275\u0275conditionalCreate(4, SidebarNavLinkComponent_Case_3_Conditional_4_Template, 3, 5, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const iconTemplate_r2 = \u0275\u0275reference(5);
    const linkItem_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 17, linkItem_r1));
    \u0275\u0275property("cHtmlAttr", linkItem_r1.attributes ?? \u0275\u0275pureFunction0(19, _c3))("fragment", linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.fragment)("preserveFragment", (linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.preserveFragment) ?? false)("queryParamsHandling", linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.queryParamsHandling)("queryParams", (linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.queryParams) ?? null)("replaceUrl", (linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.replaceUrl) ?? false)("routerLinkActiveOptions", (linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.routerLinkActiveOptions) ?? \u0275\u0275pureFunction0(20, _c10))("routerLink", linkItem_r1.url)("skipLocationChange", (linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.skipLocationChange) ?? false)("state", (linkItem_r1.linkProps == null ? null : linkItem_r1.linkProps.state) ?? \u0275\u0275pureFunction0(21, _c3))("target", linkItem_r1.attributes == null ? null : linkItem_r1.attributes["target"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", iconTemplate_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(22, _c9, linkItem_r1));
    \u0275\u0275advance();
    \u0275\u0275property("item", linkItem_r1);
    \u0275\u0275advance();
    \u0275\u0275conditional(linkItem_r1.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r6.icon ?? "");
  }
}
function SidebarNavLinkComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
    \u0275\u0275pipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cIcon", item_r6.iconComponent == null ? null : item_r6.iconComponent.content)("customClasses", \u0275\u0275pipeBind1(1, 3, item_r6))("name", item_r6.iconComponent == null ? null : item_r6.iconComponent.name);
  }
}
function SidebarNavLinkComponent_ng_template_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
    \u0275\u0275pipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, item_r6));
  }
}
function SidebarNavLinkComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarNavLinkComponent_ng_template_4_Conditional_0_Template, 2, 2, "span", 10);
    \u0275\u0275conditionalCreate(1, SidebarNavLinkComponent_ng_template_4_Conditional_1_Template, 2, 5, ":svg:svg", 11);
    \u0275\u0275conditionalCreate(2, SidebarNavLinkComponent_ng_template_4_Conditional_2_Template, 2, 4, "span", 7);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275conditional((item_r6 == null ? null : item_r6.icon) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r6 == null ? null : item_r6.iconComponent) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(item_r6 == null ? null : item_r6.icon) && !(item_r6 == null ? null : item_r6.iconComponent) ? 2 : -1);
  }
}
function SidebarNavLabelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.labelIconClass());
  }
}
function SidebarNavLabelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "cSidebarNavBadge");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const labelItem_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, labelItem_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((labelItem_r2.badge == null ? null : labelItem_r2.badge.text) ?? "");
  }
}
function SidebarNavGroupComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SidebarNavGroupComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "cSidebarNavBadge");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const grpItem_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, grpItem_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grpItem_r1 == null ? null : grpItem_r1.badge == null ? null : grpItem_r1.badge.text);
  }
}
function SidebarNavGroupComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r2.icon ?? "");
  }
}
function SidebarNavGroupComponent_ng_template_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 6);
    \u0275\u0275pipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cIcon", item_r2.iconComponent == null ? null : item_r2.iconComponent.content)("customClasses", \u0275\u0275pipeBind1(1, 3, item_r2))("name", item_r2.iconComponent == null ? null : item_r2.iconComponent.name);
  }
}
function SidebarNavGroupComponent_ng_template_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
    \u0275\u0275pipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, item_r2));
  }
}
function SidebarNavGroupComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarNavGroupComponent_ng_template_7_Conditional_0_Template, 2, 2, "span", 5);
    \u0275\u0275conditionalCreate(1, SidebarNavGroupComponent_ng_template_7_Conditional_1_Template, 2, 5, ":svg:svg", 6);
    \u0275\u0275conditionalCreate(2, SidebarNavGroupComponent_ng_template_7_Conditional_2_Template, 2, 4, "span", 3);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional((item_r2 == null ? null : item_r2.icon) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r2 == null ? null : item_r2.iconComponent) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(item_r2 == null ? null : item_r2.icon) && !(item_r2 == null ? null : item_r2.iconComponent) ? 2 : -1);
  }
}
var _c11 = () => ({
  exact: true
});
function SidebarNavComponent_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-sidebar-nav-group", 4, 0);
    \u0275\u0275pipe(2, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const nItem_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 6, nItem_r1));
    \u0275\u0275property("dropdownMode", ctx_r1.dropdownMode())("item", nItem_r1)("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c11))("compact", ctx_r1.compact());
  }
}
function SidebarNavComponent_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-sidebar-nav-divider", 5);
    \u0275\u0275pipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const nItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 4, nItem_r1));
    \u0275\u0275property("cHtmlAttr", nItem_r1.attributes ?? \u0275\u0275pureFunction0(6, _c3))("item", nItem_r1);
  }
}
function SidebarNavComponent_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-sidebar-nav-title", 5);
    \u0275\u0275pipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const nItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 4, nItem_r1));
    \u0275\u0275property("cHtmlAttr", nItem_r1.attributes ?? \u0275\u0275pureFunction0(6, _c3))("item", nItem_r1);
  }
}
function SidebarNavComponent_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-sidebar-nav-label", 6);
    \u0275\u0275pipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const nItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, nItem_r1));
    \u0275\u0275property("item", nItem_r1);
  }
}
function SidebarNavComponent_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SidebarNavComponent_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-sidebar-nav-link", 7);
    \u0275\u0275pipe(1, "cSidebarNavItemClass");
    \u0275\u0275listener("linkClick", function SidebarNavComponent_For_1_Case_5_Template_c_sidebar_nav_link_linkClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hideMobile());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, nItem_r1));
    \u0275\u0275property("item", nItem_r1);
  }
}
function SidebarNavComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarNavComponent_For_1_Case_0_Template, 3, 9, "c-sidebar-nav-group", 1)(1, SidebarNavComponent_For_1_Case_1_Template, 2, 7, "c-sidebar-nav-divider", 2)(2, SidebarNavComponent_For_1_Case_2_Template, 2, 7, "c-sidebar-nav-title", 2)(3, SidebarNavComponent_For_1_Case_3_Template, 2, 5, "c-sidebar-nav-label", 3)(4, SidebarNavComponent_For_1_Case_4_Template, 1, 0, "ng-container")(5, SidebarNavComponent_For_1_Case_5_Template, 2, 5, "c-sidebar-nav-link", 3);
  }
  if (rf & 2) {
    let tmp_10_0;
    const nItem_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.helper.itemType(nItem_r1)) === "group" ? 0 : tmp_10_0 === "divider" ? 1 : tmp_10_0 === "title" ? 2 : tmp_10_0 === "label" ? 3 : tmp_10_0 === "empty" ? 4 : 5);
  }
}
function SpinnerComponent_ProjectionFallback_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
var _c12 = () => ({
  outline: 0
});
function ToastHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "button", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c12));
    \u0275\u0275property("cToastClose", ctx_r0.toast());
  }
}
function ToasterComponent_ng_template_0_Template(rf, ctx) {
}
var _c13 = ["tooltipTemplate"];
var _c14 = [[["", 8, "chart-wrapper"]], "*"];
var _c15 = [".chart-wrapper", "*"];
function WidgetStatAComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatAComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, WidgetStatAComponent_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultWidgetValueTemplate_r2 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates["widgetValueTemplate"]) || defaultWidgetValueTemplate_r2);
  }
}
function WidgetStatAComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatAComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, WidgetStatAComponent_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultWidgetTitleTemplate_r3 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates["widgetTitleTemplate"]) || defaultWidgetTitleTemplate_r3);
  }
}
function WidgetStatAComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatAComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatAComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), "\n");
  }
}
function WidgetStatAComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.value(), "\n");
  }
}
function WidgetStatAComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function WidgetStatAComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function WidgetStatBComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.value());
  }
}
function WidgetStatBComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function WidgetStatBComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.inverse() ? "text-white text-opacity-75" : "text-body-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.text(), " ");
  }
}
function WidgetStatCComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatCComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, WidgetStatCComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultWidgetIconTemplate_r2 = \u0275\u0275reference(6);
    \u0275\u0275classMap(ctx_r0.iconClasses());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates["widgetIconTemplate"]) || defaultWidgetIconTemplate_r2);
  }
}
function WidgetStatCComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.valueClasses());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.value(), " ");
  }
}
function WidgetStatCComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.titleClasses());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
  }
}
function WidgetStatCComponent_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatCComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, WidgetStatCComponent_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultWidgetProgressTemplate_r3 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates["widgetProgressTemplate"]) || defaultWidgetProgressTemplate_r3);
  }
}
function WidgetStatCComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.icon(), "\n");
  }
}
function WidgetStatCComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function WidgetStatDComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
}
function WidgetStatDComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, WidgetStatDComponent_For_4_Conditional_0_Template, 1, 0, "div", 1);
    \u0275\u0275elementStart(1, "c-col")(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_6_r2 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_6_r2 % 2 !== 0 ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
  }
}
function WidgetStatEComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.titleClasses());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function WidgetStatEComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.value());
  }
}
function WidgetStatFComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatFComponent_Conditional_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function WidgetStatFComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-card-footer");
    \u0275\u0275template(1, WidgetStatFComponent_Conditional_9_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultFooterIconTemplate_r2 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates["widgetFooterTemplate"]) || defaultFooterIconTemplate_r2);
  }
}
function WidgetStatFComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.icon());
  }
}
function WidgetStatFComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.footer());
  }
}
var BreakpointInfix;
(function(BreakpointInfix2) {
  BreakpointInfix2["xs"] = "xs";
  BreakpointInfix2["sm"] = "sm";
  BreakpointInfix2["md"] = "md";
  BreakpointInfix2["lg"] = "lg";
  BreakpointInfix2["xl"] = "xl";
  BreakpointInfix2["xxl"] = "xxl";
})(BreakpointInfix || (BreakpointInfix = {}));
var ElementRefDirective = class _ElementRefDirective {
  elementRef = inject(ElementRef);
  static \u0275fac = function ElementRefDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ElementRefDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ElementRefDirective,
    selectors: [["", "cElementRef", ""]],
    exportAs: ["cElementRef"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementRefDirective, [{
    type: Directive,
    args: [{
      selector: "[cElementRef]",
      exportAs: "cElementRef"
    }]
  }], null, null);
})();
var HtmlAttributesDirective = class _HtmlAttributesDirective {
  cHtmlAttr = input(...ngDevMode ? [void 0, {
    debugName: "cHtmlAttr"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #renderer = inject(Renderer2);
  #elementRef = inject(ElementRef);
  #attrEffect = effect(() => {
    const attribs = this.cHtmlAttr();
    for (const attr in attribs) {
      if (attr === "style" && typeof attribs[attr] === "object") {
        this.setStyle(attribs[attr]);
      } else if (attr === "class") {
        this.addClass(attribs[attr]);
      } else {
        this.setAttrib(attr, attribs[attr]);
      }
    }
  }, ...ngDevMode ? [{
    debugName: "#attrEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  setStyle(styles) {
    for (const style2 in styles) {
      if (style2) {
        this.#renderer.setStyle(this.#elementRef.nativeElement, style2, styles[style2]);
      }
    }
  }
  addClass(classes) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.#renderer.addClass(this.#elementRef.nativeElement, element);
    });
  }
  setAttrib(key, value) {
    value !== null ? this.#renderer.setAttribute(this.#elementRef.nativeElement, key, value) : this.#renderer.removeAttribute(this.#elementRef.nativeElement, key);
  }
  static \u0275fac = function HtmlAttributesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HtmlAttributesDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _HtmlAttributesDirective,
    selectors: [["", "cHtmlAttr", ""]],
    inputs: {
      cHtmlAttr: [1, "cHtmlAttr"]
    },
    exportAs: ["cHtmlAttr"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlAttributesDirective, [{
    type: Directive,
    args: [{
      selector: "[cHtmlAttr]",
      exportAs: "cHtmlAttr"
    }]
  }], null, {
    cHtmlAttr: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cHtmlAttr",
        required: false
      }]
    }]
  });
})();
var TemplateIdDirective = class _TemplateIdDirective {
  templateRef = inject(TemplateRef);
  cTemplateId = input.required(...ngDevMode ? [{
    debugName: "cTemplateId"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get id() {
    return this.cTemplateId();
  }
  static \u0275fac = function TemplateIdDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemplateIdDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TemplateIdDirective,
    selectors: [["", "cTemplateId", ""]],
    inputs: {
      cTemplateId: [1, "cTemplateId"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateIdDirective, [{
    type: Directive,
    args: [{
      selector: "[cTemplateId]"
    }]
  }], null, {
    cTemplateId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTemplateId",
        required: true
      }]
    }]
  });
})();
var ThemeDirective = class _ThemeDirective {
  #hostElement = inject(ElementRef);
  #renderer = inject(Renderer2);
  /**
   * Add dark theme attribute.
   * @return 'dark' | 'light' | undefined
   */
  colorScheme = input(...ngDevMode ? [void 0, {
    debugName: "colorScheme"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #colorSchemeChange = effect(() => {
    const colorScheme = this.colorScheme();
    colorScheme ? this.setTheme(colorScheme) : this.unsetTheme();
  }, ...ngDevMode ? [{
    debugName: "#colorSchemeChange"
  }] : (
    /* istanbul ignore next */
    []
  ));
  dark = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "dark"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  #darkChange = effect(() => {
    const darkTheme = this.dark() || untracked(this.colorScheme) === "dark";
    darkTheme ? this.setTheme("dark") : this.unsetTheme();
  }, ...ngDevMode ? [{
    debugName: "#darkChange"
  }] : (
    /* istanbul ignore next */
    []
  ));
  setTheme(theme) {
    if (theme) {
      this.#renderer.setAttribute(this.#hostElement.nativeElement, "data-coreui-theme", theme);
    }
  }
  unsetTheme() {
    this.#renderer.removeAttribute(this.#hostElement.nativeElement, "data-coreui-theme");
  }
  static \u0275fac = function ThemeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ThemeDirective,
    selectors: [["", "cTheme", ""]],
    inputs: {
      colorScheme: [1, "colorScheme"],
      dark: [1, "dark"]
    },
    exportAs: ["cTheme"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeDirective, [{
    type: Directive,
    args: [{
      selector: "[cTheme]",
      exportAs: "cTheme"
    }]
  }], null, {
    colorScheme: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "colorScheme",
        required: false
      }]
    }],
    dark: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dark",
        required: false
      }]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static forRoot() {
    return {
      ngModule: _SharedModule
    };
  }
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SharedModule,
    imports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective],
    exports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective],
      exports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective]
    }]
  }], null, null);
})();
var AccordionButtonDirective = class _AccordionButtonDirective {
  /**
   * Toggles an accordion button collapsed state. Use in accordionHeaderTemplate. [docs]
   * @type boolean
   */
  collapsed = input(void 0, ...ngDevMode ? [{
    debugName: "collapsed"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default type for cAccordionButton. [docs]
   * @type string
   * @default 'button'
   */
  type = input("button", ...ngDevMode ? [{
    debugName: "type"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return {
      "accordion-button": true,
      collapsed: this.collapsed()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaExpanded = computed(() => !this.collapsed(), ...ngDevMode ? [{
    debugName: "ariaExpanded"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AccordionButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AccordionButtonDirective,
    selectors: [["", "cAccordionButton", ""]],
    hostVars: 4,
    hostBindings: function AccordionButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("type", ctx.type())("aria-expanded", ctx.ariaExpanded());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      collapsed: [1, "collapsed"],
      type: [1, "type"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[cAccordionButton]",
      host: {
        "[class]": "hostClasses()",
        "[attr.type]": "type()",
        "[attr.aria-expanded]": "ariaExpanded()"
      }
    }]
  }], null, {
    collapsed: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "collapsed",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }]
  });
})();
var AccordionService = class _AccordionService {
  items = [];
  alwaysOpen = false;
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  toggleItem(item) {
    item.itemVisible.update((value) => !value);
    this.closeOtherItems(item);
  }
  closeOtherItems(openItem) {
    if (!this.alwaysOpen) {
      this.items.forEach((item) => {
        if (item !== openItem) {
          item.itemVisible.set(false);
        }
      });
    }
  }
  static \u0275fac = function AccordionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AccordionService,
    factory: _AccordionService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionService, [{
    type: Injectable
  }], null, null);
})();
var AccordionComponent = class _AccordionComponent {
  #accordionService = inject(AccordionService);
  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   * @type boolean
   */
  flush = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "flush"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Make accordion items stay open when another item is opened
   * @type boolean
   */
  alwaysOpen = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "alwaysOpen"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  #alwaysOpenEffect = effect(() => {
    this.#accordionService.alwaysOpen = this.alwaysOpen();
  }, ...ngDevMode ? [{
    debugName: "#alwaysOpenEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => ({
    accordion: true,
    "accordion-flush": this.flush()
  }), ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AccordionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionComponent,
    selectors: [["c-accordion"]],
    hostVars: 2,
    hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      flush: [1, "flush"],
      alwaysOpen: [1, "alwaysOpen"]
    },
    exportAs: ["cAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([AccordionService])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionComponent, [{
    type: Component,
    args: [{
      selector: "c-accordion",
      template: "<ng-content />",
      exportAs: "cAccordionItem",
      providers: [AccordionService],
      host: {
        "[class]": "hostClasses()"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    flush: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "flush",
        required: false
      }]
    }],
    alwaysOpen: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alwaysOpen",
        required: false
      }]
    }]
  });
})();
var expandAnimation = animation([animate("{{ time }} {{ easing }}")]);
var collapseAnimation = animation([style({
  height: "*",
  minHeight: "*"
}), animate("{{ time }} {{ easing }}", style({
  height: 0,
  minHeight: 0
}))]);
var expandHorizontalAnimation = animation([animate("{{ time }} {{ easing }}")]);
var collapseHorizontalAnimation = animation([animate("{{ time }} {{ easing }}")]);
var CollapseDirective = class _CollapseDirective {
  #animationBuilder = inject(AnimationBuilder);
  #hostElement = inject(ElementRef);
  #renderer = inject(Renderer2);
  #player = void 0;
  constructor() {
    afterNextRender({
      read: () => {
        this.#initialized.set(true);
      }
    });
  }
  /**
   * @ignore
   */
  animateInput = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "animateInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "animate"
  }));
  animate = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "animate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.animateInput,
    computation: (value) => value
  }));
  /**
   * Set horizontal collapsing to transition the width instead of height.
   * @type boolean
   * @default false
   */
  horizontal = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "horizontal"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Toggle the visibility of collapsible element.
   * @type boolean
   * @default false
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  visibleChange = output();
  visible = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.visibleInput,
    computation: (value) => value
  }));
  #initialized = signal(false, ...ngDevMode ? [{
    debugName: "#initialized"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #visibleEffect = effect(() => {
    const visible = this.visible();
    if (this.#initialized()) {
      this.createPlayer(visible);
    }
  }, ...ngDevMode ? [{
    debugName: "#visibleEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
   * @type boolean
   * @default false
   */
  navbar = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "navbar"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * @ignore
   */
  duration = input("350ms", ...ngDevMode ? [{
    debugName: "duration"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * @ignore
   */
  transition = input("ease", ...ngDevMode ? [{
    debugName: "transition"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Event emitted on visibility change. [docs]
   * @type string
   */
  collapseChange = output();
  hostClasses = computed(() => {
    return {
      "navbar-collapse": this.navbar(),
      "collapse-horizontal": this.horizontal()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnDestroy() {
    this.destroyPlayer();
  }
  toggle(visible = !this.visible()) {
    this.visible.set(visible);
  }
  destroyPlayer() {
    this.#player?.destroy();
    this.#player = void 0;
  }
  createPlayer(visible = this.visible()) {
    if (this.#player?.hasStarted()) {
      this.destroyPlayer();
    }
    const host = this.#hostElement.nativeElement;
    if (visible) {
      this.#renderer.removeStyle(host, "display");
    }
    const duration = this.animate() ? this.duration() : "0ms";
    const expand = this.horizontal() ? expandHorizontalAnimation : expandAnimation;
    const collapse = this.horizontal() ? collapseHorizontalAnimation : collapseAnimation;
    const dimension = this.horizontal() ? "width" : "height";
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    const animationFactory = this.#animationBuilder?.build(useAnimation(visible ? expand : collapse, {
      params: {
        time: duration,
        easing: this.transition()
      }
    }));
    this.#player = animationFactory.create(host);
    !visible && host.offsetHeight && host.style[dimension] && host.scrollHeight;
    this.#renderer.setStyle(host, dimension, visible ? 0 : `${host.getBoundingClientRect()[dimension]}px`);
    this.#player.onStart(() => {
      this.setMaxSize();
      this.#renderer.removeClass(host, "collapse");
      this.#renderer.addClass(host, "collapsing");
      this.#renderer.removeClass(host, "show");
      this.#renderer.setStyle(host, dimension, visible ? `${host[scrollSize]}px` : "");
      if (this.#player) {
        this.collapseChange?.emit(visible ? "opening" : "collapsing");
      }
    });
    this.#player.onDone(() => {
      this.#renderer.removeClass(host, "collapsing");
      this.#renderer.addClass(host, "collapse");
      if (visible) {
        this.#renderer.addClass(host, "show");
        this.#renderer.setStyle(host, dimension, "");
      } else {
        this.#renderer.removeClass(host, "show");
      }
      if (this.#player) {
        this.collapseChange?.emit(visible ? "open" : "collapsed");
        this.visibleChange?.emit(visible);
      }
      this.destroyPlayer();
    });
    this.#player?.play();
  }
  setMaxSize() {
    const host = this.#hostElement.nativeElement;
    if (this.horizontal()) {
      host.scrollWidth > 0 && this.#renderer.setStyle(host, "maxWidth", `${host.scrollWidth}px`);
    }
  }
  static \u0275fac = function CollapseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollapseDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CollapseDirective,
    selectors: [["", "cCollapse", ""]],
    hostVars: 5,
    hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c1));
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      animateInput: [1, "animate", "animateInput"],
      horizontal: [1, "horizontal"],
      visibleInput: [1, "visible", "visibleInput"],
      navbar: [1, "navbar"],
      duration: [1, "duration"],
      transition: [1, "transition"]
    },
    outputs: {
      visibleChange: "visibleChange",
      collapseChange: "collapseChange"
    },
    exportAs: ["cCollapse"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseDirective, [{
    type: Directive,
    args: [{
      selector: "[cCollapse]",
      exportAs: "cCollapse",
      host: {
        "[class]": "hostClasses()",
        "[style]": '{ display: "none" }'
      }
    }]
  }], () => [], {
    animateInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "animate",
        required: false
      }]
    }],
    horizontal: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "horizontal",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }],
    navbar: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "navbar",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "duration",
        required: false
      }]
    }],
    transition: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transition",
        required: false
      }]
    }],
    collapseChange: [{
      type: Output,
      args: ["collapseChange"]
    }]
  });
})();
var CollapseModule = class _CollapseModule {
  static forRoot() {
    return {
      ngModule: _CollapseModule,
      providers: []
    };
  }
  static \u0275fac = function CollapseModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollapseModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CollapseModule,
    imports: [CollapseDirective],
    exports: [CollapseDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseModule, [{
    type: NgModule,
    args: [{
      exports: [CollapseDirective],
      imports: [CollapseDirective]
    }]
  }], null, null);
})();
var nextId$2 = 0;
var AccordionItemComponent = class _AccordionItemComponent {
  #accordionService = inject(AccordionService);
  /**
   * Toggle an accordion item programmatically
   * @return boolean
   * @default false
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  itemVisible = signal(false, ...ngDevMode ? [{
    debugName: "itemVisible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #visibleInputChange = effect(() => {
    this.visible = this.visibleInput();
  }, ...ngDevMode ? [{
    debugName: "#visibleInputChange"
  }] : (
    /* istanbul ignore next */
    []
  ));
  set visible(value) {
    this.itemVisible.set(value);
  }
  get visible() {
    return this.itemVisible();
  }
  contentId = `accordion-item-${nextId$2++}`;
  get itemContext() {
    return {
      $implicit: this.itemVisible()
    };
  }
  contentTemplates = contentChildren(TemplateIdDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentTemplates"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: true
  }));
  templates = computed(() => {
    return this.contentTemplates().reduce((acc, child) => {
      acc[child.id] = child.templateRef;
      return acc;
    }, {});
  }, ...ngDevMode ? [{
    debugName: "templates"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.#accordionService.addItem(this);
  }
  ngOnDestroy() {
    this.#accordionService.removeItem(this);
  }
  toggleItem() {
    this.#accordionService.toggleItem(this);
  }
  static \u0275fac = function AccordionItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionItemComponent,
    selectors: [["c-accordion-item"]],
    contentQueries: function AccordionItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplates, TemplateIdDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "accordion-item"],
    inputs: {
      visibleInput: [1, "visible", "visibleInput"]
    },
    exportAs: ["cAccordionItem"],
    ngContentSelectors: _c2,
    decls: 14,
    vars: 8,
    consts: [["defaultAccordionHeaderTemplate", ""], ["defaultAccordionHeaderContentTemplate", ""], ["defaultAccordionBodyTemplate", ""], ["defaultAccordionBodyContentTemplate", ""], [1, "accordion-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cCollapse", "", 1, "accordion-collapse", 3, "visible", "id"], ["cAccordionButton", "", 3, "click", "collapsed"], [1, "accordion-body"]],
    template: function AccordionItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275declareLet(0);
        \u0275\u0275elementContainerStart(1);
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275template(3, AccordionItemComponent_ng_container_3_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 6);
        \u0275\u0275template(5, AccordionItemComponent_ng_container_5_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(6, AccordionItemComponent_ng_template_6_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, AccordionItemComponent_ng_template_8_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, AccordionItemComponent_ng_template_10_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(12, AccordionItemComponent_ng_template_12_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const defaultAccordionHeaderTemplate_r6 = \u0275\u0275reference(7);
        const defaultAccordionBodyTemplate_r7 = \u0275\u0275reference(11);
        const tmpl_r8 = \u0275\u0275storeLet(ctx.templates());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", tmpl_r8["accordionHeaderTemplate"] || defaultAccordionHeaderTemplate_r6)("ngTemplateOutletContext", ctx.itemContext);
        \u0275\u0275advance();
        \u0275\u0275property("visible", ctx.itemVisible())("id", ctx.contentId);
        \u0275\u0275attribute("aria-expanded", ctx.itemVisible());
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", tmpl_r8["accordionBodyTemplate"] || defaultAccordionBodyTemplate_r7)("ngTemplateOutletContext", ctx.itemContext);
      }
    },
    dependencies: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective],
    styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionItemComponent, [{
    type: Component,
    args: [{
      selector: "c-accordion-item",
      exportAs: "cAccordionItem",
      imports: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective],
      host: {
        class: "accordion-item"
      },
      template: `@let tmpl = templates();
<ng-container>
  <div class="accordion-header">
    <ng-container *ngTemplateOutlet="tmpl['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext" />
  </div>
  <div class="accordion-collapse" cCollapse [visible]="itemVisible()" [attr.aria-expanded]="itemVisible()" [id]="contentId">
    <ng-container *ngTemplateOutlet="tmpl['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext" />
  </div>
</ng-container>

<ng-template #defaultAccordionHeaderTemplate>
  <button cAccordionButton [collapsed]="!itemVisible()" [attr.aria-controls]="contentId" (click)="toggleItem()">
    <ng-container *ngTemplateOutlet="tmpl['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext" />
  </button>
</ng-template>

<ng-template #defaultAccordionHeaderContentTemplate>
  <ng-content />
</ng-template>

<ng-template #defaultAccordionBodyTemplate>
  <div class="accordion-body">
    <ng-container *ngTemplateOutlet="tmpl['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext" />
  </div>
</ng-template>

<ng-template #defaultAccordionBodyContentTemplate>
  <ng-content />
</ng-template>
`,
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], null, {
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [forwardRef(() => TemplateIdDirective), __spreadProps(__spreadValues({}, {
        descendants: true
      }), {
        isSignal: true
      })]
    }]
  });
})();
var AccordionModule = class _AccordionModule {
  static \u0275fac = function AccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AccordionModule,
    imports: [AccordionButtonDirective, AccordionComponent, AccordionItemComponent],
    exports: [AccordionComponent, AccordionButtonDirective, AccordionItemComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [AccordionService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [AccordionButtonDirective, AccordionComponent, AccordionItemComponent],
      exports: [AccordionComponent, AccordionButtonDirective, AccordionItemComponent],
      providers: [AccordionService]
    }]
  }], null, null);
})();
var AlertHeadingDirective = class _AlertHeadingDirective {
  static \u0275fac = function AlertHeadingDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertHeadingDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AlertHeadingDirective,
    selectors: [["", "cAlertHeading", ""]],
    hostAttrs: [1, "alert-heading"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertHeadingDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlertHeading]",
      host: {
        class: "alert-heading"
      }
    }]
  }], null, null);
})();
var AlertLinkDirective = class _AlertLinkDirective {
  static \u0275fac = function AlertLinkDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertLinkDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AlertLinkDirective,
    selectors: [["", "cAlertLink", ""]],
    hostAttrs: [1, "alert-link"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlertLink]",
      host: {
        class: "alert-link"
      }
    }]
  }], null, null);
})();
var ButtonDirective = class _ButtonDirective {
  static ngAcceptInputType_active;
  static ngAcceptInputType_disabled;
  /**
   * Toggle the active state for the component. [docs]
   * @type InputSignalWithTransform<boolean, unknown>
   */
  active = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "active"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   * @type InputSignal<Colors>
   */
  color = input("primary", ...ngDevMode ? [{
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Toggle the disabled state for the component.
   * @type InputSignalWithTransform<boolean, unknown>
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Select the shape of the component.
   * @return Shapes
   */
  shape = input(...ngDevMode ? [void 0, {
    debugName: "shape"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Size the component small or large.
   * @return  sm' | 'lg' | ''
   */
  size = input("", ...ngDevMode ? [{
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
   */
  tabindex = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabindex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Specifies the type of button. Always specify the type attribute for the `<button>` element.
   * Different browsers may use different default types for the `<button>` element.
   * @type InputSignal<ButtonType>
   * @default 'button'
   */
  type = input("button", ...ngDevMode ? [{
    debugName: "type"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set the button variant to an outlined button or a ghost button.
   * @type InputSignal<'ghost' | 'outline' | undefined>
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const color = this.color();
    const variant = this.variant();
    const size = this.size();
    const shape = this.shape();
    return {
      btn: true,
      [`btn-${color}`]: !!color && !variant,
      [`btn-${variant}`]: !!variant && !color,
      [`btn-${variant}-${color}`]: !!variant && !!color,
      [`btn-${size}`]: !!size,
      [`${shape}`]: !!shape,
      active: this.active(),
      disabled: this._disabled()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _disabled = computed(() => this.disabled(), ...ngDevMode ? [{
    debugName: "_disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaDisabled = computed(() => {
    return this._disabled() ? true : null;
  }, ...ngDevMode ? [{
    debugName: "ariaDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrDisabled = computed(() => {
    return this._disabled() ? "" : null;
  }, ...ngDevMode ? [{
    debugName: "attrDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  tabIndex = computed(() => {
    return this._disabled() ? "-1" : this.tabindex() ?? null;
  }, ...ngDevMode ? [{
    debugName: "tabIndex"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isActive = computed(() => {
    return this.active() || null;
  }, ...ngDevMode ? [{
    debugName: "isActive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonDirective,
    selectors: [["", "cButton", ""]],
    hostAttrs: [1, "btn"],
    hostVars: 7,
    hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.ariaDisabled())("aria-pressed", ctx.isActive())("disabled", ctx.attrDisabled())("tabindex", ctx.tabIndex())("type", ctx.type());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      active: [1, "active"],
      color: [1, "color"],
      disabled: [1, "disabled"],
      shape: [1, "shape"],
      size: [1, "size"],
      tabindex: [1, "tabindex"],
      type: [1, "type"],
      variant: [1, "variant"]
    },
    exportAs: ["cButton"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[cButton]",
      exportAs: "cButton",
      host: {
        class: "btn",
        "[class]": "hostClasses()",
        "[attr.aria-disabled]": "ariaDisabled()",
        "[attr.aria-pressed]": "isActive()",
        "[attr.disabled]": "attrDisabled()",
        "[attr.tabindex]": "tabIndex()",
        "[attr.type]": "type()"
      }
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }],
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    shape: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "shape",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }]
  });
})();
var ButtonCloseDirective = class _ButtonCloseDirective extends ButtonDirective {
  /**
   * Change the default color to white.
   * @type boolean
   * @deprecated 5.0.0. Use `cButtonClose.dark` instead.
   */
  white = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "white"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    const size = this.size();
    return {
      btn: true,
      "btn-close": true,
      "btn-close-white": this.white(),
      [`btn-${size}`]: !!size,
      active: this.active(),
      disabled: this._disabled()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonCloseDirective_BaseFactory;
    return function ButtonCloseDirective_Factory(__ngFactoryType__) {
      return (\u0275ButtonCloseDirective_BaseFactory || (\u0275ButtonCloseDirective_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonCloseDirective)))(__ngFactoryType__ || _ButtonCloseDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonCloseDirective,
    selectors: [["", "cButtonClose", ""]],
    hostAttrs: [1, "btn", "btn-close"],
    hostVars: 7,
    hostBindings: function ButtonCloseDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.ariaDisabled())("aria-pressed", ctx.isActive())("disabled", ctx.attrDisabled())("tabindex", ctx.tabIndex())("type", ctx.type());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      white: [1, "white"]
    },
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: ThemeDirective,
      inputs: ["dark", "dark"]
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cButtonClose]",
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        class: "btn btn-close",
        "[class]": "hostClasses()",
        "[attr.aria-disabled]": "ariaDisabled()",
        "[attr.aria-pressed]": "isActive()",
        "[attr.disabled]": "attrDisabled()",
        "[attr.tabindex]": "tabIndex()",
        "[attr.type]": "type()"
      }
    }]
  }], null, {
    white: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "white",
        required: false
      }]
    }]
  });
})();
var ButtonModule = class _ButtonModule {
  static \u0275fac = function ButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonModule,
    imports: [ButtonDirective, ButtonCloseDirective],
    exports: [ButtonDirective, ButtonCloseDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonDirective, ButtonCloseDirective],
      exports: [ButtonDirective, ButtonCloseDirective]
    }]
  }], null, null);
})();
var AlertComponent = class _AlertComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @return Colors
   * @default 'primary'
   */
  color = input("primary", ...ngDevMode ? [{
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default role for alert. [docs]
   * @return string
   * @default 'alert'
   */
  role = input("alert", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set the alert variant to a solid.
   * @return string
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Optionally adds a close button to alert and allow it to self dismiss.
   * @return boolean
   * @default false
   */
  dismissibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "dismissibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "dismissible"
  }));
  #dismissible = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "#dismissible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.dismissibleInput,
    computation: (value) => {
      return value;
    }
  }));
  set dismissible(value) {
    this.#dismissible.set(value);
  }
  get dismissible() {
    return this.#dismissible();
  }
  /**
   * Adds animation for dismissible alert.
   * @return boolean
   */
  fade = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fade"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Toggle the visibility of alert component.
   * @return boolean
   */
  visibleInput = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  #visible = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "#visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.visibleInput,
    computation: (value) => {
      return value;
    }
  }));
  set visible(value) {
    if (this.#visible() !== value) {
      this.#visible.set(value);
      this.visibleChange?.emit(value);
    }
  }
  get visible() {
    return this.#visible();
  }
  hide = signal(false, ...ngDevMode ? [{
    debugName: "hide"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Event triggered on the alert dismiss.
   */
  visibleChange = output();
  contentTemplates = contentChildren(TemplateIdDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentTemplates"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: true
  }));
  templates = computed(() => {
    return this.contentTemplates().reduce((acc, child) => {
      acc[child.id] = child.templateRef;
      return acc;
    }, {});
  }, ...ngDevMode ? [{
    debugName: "templates"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get animateType() {
    return this.visible ? "show" : "hide";
  }
  hostClasses = computed(() => {
    const color = this.color();
    const variant = this.variant();
    return {
      alert: true,
      "alert-dismissible": this.dismissible,
      fade: this.fade(),
      show: !this.hide(),
      [`alert-${color}`]: !!color && variant !== "solid",
      [`bg-${color}`]: !!color && variant === "solid",
      "text-white": !!color && variant === "solid"
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onAnimationStart($event) {
    this.onAnimationEvent($event);
  }
  onAnimationDone($event) {
    this.onAnimationEvent($event);
  }
  onAnimationEvent(event) {
    this.hide.set(event.phaseName === "start" && event.toState === "show");
    if (event.phaseName === "done") {
      this.hide.set(event.toState === "hide" || event.toState === "void");
      if (event.toState === "show") {
        this.hide.set(false);
      }
    }
  }
  static \u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AlertComponent,
    selectors: [["c-alert"]],
    contentQueries: function AlertComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplates, TemplateIdDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 5,
    hostBindings: function AlertComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275syntheticHostListener("@fadeInOut.start", function AlertComponent_animation_fadeInOut_start_HostBindingHandler($event) {
          return ctx.onAnimationStart($event);
        })("@fadeInOut.done", function AlertComponent_animation_fadeInOut_done_HostBindingHandler($event) {
          return ctx.onAnimationDone($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@.disabled", !ctx.fade())("@fadeInOut", ctx.animateType);
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "color"],
      role: [1, "role"],
      variant: [1, "variant"],
      dismissibleInput: [1, "dismissible", "dismissibleInput"],
      fade: [1, "fade"],
      visibleInput: [1, "visible", "visibleInput"]
    },
    outputs: {
      visibleChange: "visibleChange"
    },
    exportAs: ["cAlert"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [["defaultAlertButtonCloseTemplate", ""], [4, "ngTemplateOutlet"], ["aria-label", "Close", "cButtonClose", "", 3, "click"]],
    template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, AlertComponent_Conditional_0_Template, 2, 1);
        \u0275\u0275template(1, AlertComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.visible || !ctx.hide() ? 0 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, ButtonCloseDirective],
    styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"],
    data: {
      animation: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate(".3s ease-out")]), transition("hide => show", [animate(".3s ease-in")]), transition("show => void", [animate(".3s ease-out")]), transition("void => show", [animate(".3s ease-in")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{
      selector: "c-alert",
      exportAs: "cAlert",
      imports: [NgTemplateOutlet, ButtonCloseDirective],
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate(".3s ease-out")]), transition("hide => show", [animate(".3s ease-in")]), transition("show => void", [animate(".3s ease-out")]), transition("void => show", [animate(".3s ease-in")])])],
      host: {
        "[@.disabled]": "!fade()",
        "[@fadeInOut]": "animateType",
        "[attr.role]": "role()",
        "[class]": "hostClasses()",
        "(@fadeInOut.start)": "onAnimationStart($event)",
        "(@fadeInOut.done)": "onAnimationDone($event)"
      },
      template: `@if (visible || !hide()) {
  @if (dismissible) {
    <ng-container *ngTemplateOutlet="templates()?.['alertButtonCloseTemplate'] || defaultAlertButtonCloseTemplate" />
  }
  <ng-content />
}
<ng-template #defaultAlertButtonCloseTemplate>
  <button (click)="visible=false" aria-label="Close" cButtonClose></button>
</ng-template>
`,
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    dismissibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dismissible",
        required: false
      }]
    }],
    fade: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fade",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [forwardRef(() => TemplateIdDirective), __spreadProps(__spreadValues({}, {
        descendants: true
      }), {
        isSignal: true
      })]
    }]
  });
})();
var AlertModule = class _AlertModule {
  static \u0275fac = function AlertModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AlertModule,
    imports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective],
    exports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertModule, [{
    type: NgModule,
    args: [{
      imports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective],
      exports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective]
    }]
  }], null, null);
})();
var AlignDirective = class _AlignDirective {
  /**
   * Set vertical alignment of inline, inline-block, inline-table, and table cell elements
   * @return Alignment
   */
  align = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "align"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cAlign"
  }));
  hostClasses = computed(() => {
    const align = this.align();
    return {
      [`align-${align}`]: !!align
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AlignDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlignDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AlignDirective,
    selectors: [["", "cAlign", ""]],
    hostVars: 2,
    hostBindings: function AlignDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      align: [1, "cAlign", "align"]
    },
    exportAs: ["cAlign"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlign]",
      exportAs: "cAlign",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    align: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cAlign",
        required: false
      }]
    }]
  });
})();
var BgColorDirective = class _BgColorDirective {
  /**
   * Set the background of an element to any contextual class
   */
  cBgColor = input("", ...ngDevMode ? [{
    debugName: "cBgColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Add linear gradient as background image to the backgrounds.
   * @return boolean
   */
  gradient = input(...ngDevMode ? [void 0, {
    debugName: "gradient"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const color = this.cBgColor();
    return {
      [`bg-${color}`]: !!color,
      "bg-gradient": this.gradient()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BgColorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BgColorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BgColorDirective,
    selectors: [["", "cBgColor", ""]],
    hostVars: 2,
    hostBindings: function BgColorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      cBgColor: [1, "cBgColor"],
      gradient: [1, "gradient"]
    },
    exportAs: ["cBgColor"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BgColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cBgColor]",
      exportAs: "cBgColor",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    cBgColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cBgColor",
        required: false
      }]
    }],
    gradient: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "gradient",
        required: false
      }]
    }]
  });
})();
var BorderDirective = class _BorderDirective {
  /**
   * Add or remove an element’s borders
   * @return Border
   */
  cBorder = input(true, ...ngDevMode ? [{
    debugName: "cBorder"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const border = this.cBorder();
    if (typeof border === "boolean") {
      return {
        border
      };
    }
    if (typeof border === "number" || typeof border === "string") {
      return {
        border: true,
        [`border-${border}`]: true
      };
    }
    if (typeof border === "object") {
      const borderObj = __spreadValues({
        top: void 0,
        end: void 0,
        bottom: void 0,
        start: void 0,
        color: void 0
      }, border);
      const keys = Object.keys(borderObj).filter((key) => borderObj[key] !== void 0);
      const classes = {};
      keys.forEach((key) => {
        const val = borderObj[key];
        if (typeof val === "boolean") {
          classes[`border-${key}`] = true;
        } else if (typeof val === "number" || typeof val === "string") {
          classes[`border-${key}-${val}`] = true;
        } else if (typeof val === "object") {
          if ("color" in val) {
            classes[`border-${key}-${val.color}`] = true;
          }
          if ("width" in val) {
            classes[`border-${key}-${val.width}`] = true;
          }
        }
      });
      return Object.entries(classes).length === 0 ? {
        border: false
      } : classes;
    }
    return {
      border: false
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BorderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BorderDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BorderDirective,
    selectors: [["", "cBorder", ""]],
    hostVars: 2,
    hostBindings: function BorderDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      cBorder: [1, "cBorder"]
    },
    exportAs: ["cBorder"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BorderDirective, [{
    type: Directive,
    args: [{
      selector: "[cBorder]",
      exportAs: "cBorder",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    cBorder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cBorder",
        required: false
      }]
    }]
  });
})();
var RoundedDirective = class _RoundedDirective {
  /**
   * Set border radius variant and radius size
   * @type Rounded
   */
  cRounded = input(true, ...ngDevMode ? [{
    debugName: "cRounded"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const rounded = this.cRounded();
    if (typeof rounded === "boolean") {
      return {
        rounded
      };
    }
    if (typeof rounded === "number" || typeof rounded === "string") {
      return {
        [`rounded-${rounded}`]: true
      };
    }
    if (typeof rounded === "object") {
      const roundedObj = __spreadValues({
        top: void 0,
        end: void 0,
        bottom: void 0,
        start: void 0,
        circle: void 0,
        pill: void 0,
        size: void 0
      }, rounded);
      const keys = Object.keys(roundedObj).filter((key) => roundedObj[key] !== void 0);
      const classes = {};
      keys.forEach((key) => {
        const val = roundedObj[key];
        if (typeof val === "boolean") {
          classes[`rounded-${key}`] = val;
        } else {
          classes[`rounded-${val}`] = true;
        }
      });
      return Object.entries(classes).length === 0 ? {
        rounded: false
      } : classes;
    }
    return {
      rounded: false
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function RoundedDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoundedDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RoundedDirective,
    selectors: [["", "cRounded", ""]],
    hostVars: 2,
    hostBindings: function RoundedDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      cRounded: [1, "cRounded"]
    },
    exportAs: ["cRounded"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoundedDirective, [{
    type: Directive,
    args: [{
      selector: "[cRounded]",
      exportAs: "cRounded",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    cRounded: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cRounded",
        required: false
      }]
    }]
  });
})();
var ShadowOnScrollDirective = class _ShadowOnScrollDirective {
  #destroyRef = inject(DestroyRef);
  #document = inject(DOCUMENT);
  #elementRef = inject(ElementRef);
  #scrolled = signal(false, ...ngDevMode ? [{
    debugName: "#scrolled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #scrollEffect = effect(() => {
    this.#elementRef.nativeElement.classList.toggle(this.#shadowClass, this.#scrolled());
  }, ...ngDevMode ? [{
    debugName: "#scrollEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #observable;
  #shadowClass = "shadow-sm";
  constructor() {
    this.#destroyRef.onDestroy(() => {
      this.#scrollEffect?.destroy();
    });
  }
  cShadowOnScroll = input(true, ...ngDevMode ? [{
    debugName: "cShadowOnScroll"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #shadowOnScrollEffect = effect(() => {
    const value = this.cShadowOnScroll();
    untracked(() => {
      this.#scrolled.set(false);
      if (value) {
        this.#shadowClass = value === true ? "shadow" : `shadow-${value}`;
        this.#observable = fromEvent(this.#document, "scroll").pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((scrolled) => {
          this.#scrolled.set(this.#document.documentElement.scrollTop > 0);
        });
      } else {
        this.#observable?.unsubscribe();
      }
    });
  }, ...ngDevMode ? [{
    debugName: "#shadowOnScrollEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ShadowOnScrollDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShadowOnScrollDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ShadowOnScrollDirective,
    selectors: [["", "cShadowOnScroll", ""]],
    inputs: {
      cShadowOnScroll: [1, "cShadowOnScroll"]
    },
    exportAs: ["cShadowOnScroll"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShadowOnScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[cShadowOnScroll]",
      exportAs: "cShadowOnScroll"
    }]
  }], () => [], {
    cShadowOnScroll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cShadowOnScroll",
        required: false
      }]
    }]
  });
})();
var TextColorDirective = class _TextColorDirective {
  /**
   * Set text-color of element
   * @type TextColors
   */
  color = input("", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "color"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTextColor"
  }));
  hostClasses = computed(() => {
    const color = this.color();
    return {
      [`text-${color}`]: !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function TextColorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextColorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextColorDirective,
    selectors: [["", "cTextColor", ""]],
    hostVars: 2,
    hostBindings: function TextColorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "cTextColor", "color"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTextColor]",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTextColor",
        required: false
      }]
    }]
  });
})();
var TextBgColorDirective = class _TextBgColorDirective {
  /**
   * Set text-bg-color of element
   * @type Colors
   */
  textBgColor = input("", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "textBgColor"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTextBgColor"
  }));
  hostClasses = computed(() => {
    const color = this.textBgColor();
    return {
      [`text-bg-${color}`]: !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function TextBgColorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextBgColorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextBgColorDirective,
    selectors: [["", "cTextBgColor", ""]],
    hostVars: 2,
    hostBindings: function TextBgColorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      textBgColor: [1, "cTextBgColor", "textBgColor"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBgColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTextBgColor]",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    textBgColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTextBgColor",
        required: false
      }]
    }]
  });
})();
var UTILITY_DIRECTIVES = [AlignDirective, BgColorDirective, BorderDirective, RoundedDirective, ShadowOnScrollDirective, TextColorDirective, TextBgColorDirective];
var UtilitiesModule = class _UtilitiesModule {
  static \u0275fac = function UtilitiesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilitiesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _UtilitiesModule,
    imports: [AlignDirective, BgColorDirective, BorderDirective, RoundedDirective, ShadowOnScrollDirective, TextColorDirective, TextBgColorDirective],
    exports: [AlignDirective, BgColorDirective, BorderDirective, RoundedDirective, ShadowOnScrollDirective, TextColorDirective, TextBgColorDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilitiesModule, [{
    type: NgModule,
    args: [{
      imports: [...UTILITY_DIRECTIVES],
      exports: [...UTILITY_DIRECTIVES]
    }]
  }], null, null);
})();
var AvatarComponent = class _AvatarComponent {
  /**
   * Sets the background color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Select the shape of the component.
   * @type Shapes
   */
  shape = input(...ngDevMode ? [void 0, {
    debugName: "shape"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Size the component small, large, or extra large.
   * @default 'md'
   */
  size = input("", ...ngDevMode ? [{
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The alt attribute for the img element alternate text.
   * @type string
   */
  alt = input("", ...ngDevMode ? [{
    debugName: "alt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The src attribute for the img element.
   * @type string
   */
  src = input(...ngDevMode ? [void 0, {
    debugName: "src"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the color context of the status indicator to one of CoreUI’s themed colors.
   * @type Colors
   */
  status = input(...ngDevMode ? [void 0, {
    debugName: "status"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  textColor = input(...ngDevMode ? [void 0, {
    debugName: "textColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  statusClass = computed(() => {
    return {
      "avatar-status": true,
      [`bg-${this.status()}`]: !!this.status()
    };
  }, ...ngDevMode ? [{
    debugName: "statusClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const size = this.size();
    const color = this.color();
    const shape = this.shape();
    return {
      avatar: true,
      [`avatar-${size}`]: !!size,
      [`bg-${color}`]: !!color,
      [`${shape}`]: !!shape
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AvatarComponent,
    selectors: [["c-avatar"]],
    hostAttrs: [1, "avatar"],
    hostVars: 2,
    hostBindings: function AvatarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "color"],
      shape: [1, "shape"],
      size: [1, "size"],
      alt: [1, "alt"],
      src: [1, "src"],
      status: [1, "status"],
      textColor: [1, "textColor"]
    },
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: TextColorDirective,
      inputs: ["cTextColor", "textColor"]
    }])],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [[3, "class"], [1, "avatar-img", 3, "src", "alt"], ["aria-label", "Avatar placeholder", "focusable", "false", "preserveAspectRatio", "xMidYMid slice", "role", "img", "xmlns", "http://www.w3.org/2000/svg", 1, "avatar-img", 2, "position", "absolute", "width", "100%", "height", "100%", "inset", "0"], ["fill", "#868e96", "height", "100%", "width", "100%"]],
    template: function AvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0, 0, null, AvatarComponent_ProjectionFallback_0_Template, 1, 1);
        \u0275\u0275conditionalCreate(2, AvatarComponent_Conditional_2_Template, 1, 2, "span", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!!ctx.status() ? 2 : -1);
      }
    },
    styles: ["[_nghost-%COMP%]   .avatar-img[_ngcontent-%COMP%]{object-fit:cover}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      selector: "c-avatar",
      hostDirectives: [{
        directive: TextColorDirective,
        inputs: ["cTextColor: textColor"]
      }],
      host: {
        class: "avatar",
        "[class]": "hostClasses()"
      },
      template: `<ng-content>
  @if (src()) {
    @defer (prefetch on idle) {
      <img src="{{src() ?? ''}}" class="avatar-img" alt="{{alt()}}" />
    } @placeholder () {
      <svg aria-label="Avatar placeholder"
           focusable="false"
           preserveAspectRatio="xMidYMid slice"
           role="img"
           xmlns="http://www.w3.org/2000/svg"
           class="avatar-img"
           style="position: absolute; width: 100%; height: 100%; inset: 0;">
        <rect fill="#868e96" height="100%" width="100%"></rect>
      </svg>
    }
  }
</ng-content>
@if (!!status()) {
  <span [class]="statusClass()"></span>
}

`,
      styles: [":host .avatar-img{object-fit:cover}\n"]
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    shape: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "shape",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    alt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alt",
        required: false
      }]
    }],
    src: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "src",
        required: false
      }]
    }],
    status: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "status",
        required: false
      }]
    }],
    textColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "textColor",
        required: false
      }]
    }]
  });
})();
var AvatarModule = class _AvatarModule {
  static \u0275fac = function AvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AvatarModule,
    imports: [AvatarComponent],
    exports: [AvatarComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [AvatarComponent],
      exports: [AvatarComponent]
    }]
  }], null, null);
})();
var BadgeComponent = class _BadgeComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Position badge in one of the corners of a link or button.
   * @type BadgePositions
   */
  position = input(...ngDevMode ? [void 0, {
    debugName: "position"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Select the shape of the component.
   * @type Shapes
   */
  shape = input(...ngDevMode ? [void 0, {
    debugName: "shape"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Size the component small.
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  textColor = input(...ngDevMode ? [void 0, {
    debugName: "textColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility.
   * via TextBgColorDirective
   * @type Colors
   * @since 5.0.0
   */
  textBgColor = input(...ngDevMode ? [void 0, {
    debugName: "textBgColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const position = this.position();
    const positionClasses = {
      "position-absolute": !!position,
      "translate-middle": !!position,
      "top-0": position?.includes("top"),
      "top-100": position?.includes("bottom"),
      "start-100": position?.includes("end"),
      "start-0": position?.includes("start")
    };
    const color = this.color();
    const size = this.size();
    const shape = this.shape();
    return Object.assign({
      badge: true,
      [`bg-${color}`]: !!color,
      [`badge-${size}`]: !!size,
      [`${shape}`]: !!shape
    }, !!position ? positionClasses : {});
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BadgeComponent,
    selectors: [["c-badge"]],
    hostAttrs: [1, "badge"],
    hostVars: 2,
    hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "color"],
      position: [1, "position"],
      shape: [1, "shape"],
      size: [1, "size"],
      textColor: [1, "textColor"],
      textBgColor: [1, "textBgColor"]
    },
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: TextColorDirective,
      inputs: ["cTextColor", "textColor"]
    }, {
      directive: TextBgColorDirective,
      inputs: ["cTextBgColor", "textBgColor"]
    }])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "c-badge",
      template: "<ng-content />",
      hostDirectives: [{
        directive: TextColorDirective,
        inputs: ["cTextColor: textColor"]
      }, {
        directive: TextBgColorDirective,
        inputs: ["cTextBgColor: textBgColor"]
      }],
      host: {
        class: "badge",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    shape: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "shape",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    textColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "textColor",
        required: false
      }]
    }],
    textBgColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "textBgColor",
        required: false
      }]
    }]
  });
})();
var BadgeModule = class _BadgeModule {
  static \u0275fac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BadgeModule,
    imports: [BadgeComponent],
    exports: [BadgeComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [BadgeComponent],
      exports: [BadgeComponent]
    }]
  }], null, null);
})();
var BackdropService = class _BackdropService {
  #backdropClick = new Subject();
  backdropClick$ = this.#backdropClick.asObservable();
  #document = inject(DOCUMENT);
  activeBackdrop;
  get #scrollbarWidth() {
    const documentWidth = this.#document.documentElement.clientWidth;
    const scrollbarWidth = Math.abs((this.#document.defaultView?.innerWidth ?? documentWidth) - documentWidth);
    return `${scrollbarWidth}px`;
  }
  scrollbarWidth = this.#scrollbarWidth;
  setBackdrop(type = "modal") {
    const backdropElement = this.#document.createElement("div");
    backdropElement.classList.add(`${type}-backdrop`);
    backdropElement.classList.add("fade");
    this.#document.body.appendChild(backdropElement);
    const clickHandler = () => {
      this.onClickHandler();
    };
    backdropElement.__backdropClickHandler = clickHandler;
    backdropElement.addEventListener("click", clickHandler);
    this.scrollbarWidth = this.#scrollbarWidth;
    setTimeout(() => {
      backdropElement.classList.add("show");
    });
    this.activeBackdrop = backdropElement;
    return backdropElement;
  }
  clearBackdrop(backdropElement) {
    if (backdropElement) {
      const storedHandler = backdropElement.__backdropClickHandler;
      if (storedHandler) {
        backdropElement.removeEventListener("click", storedHandler);
        delete backdropElement.__backdropClickHandler;
      }
      backdropElement.classList.remove("show");
      setTimeout(() => {
        if (this.activeBackdrop === backdropElement) {
          this.resetScrollbar();
        }
        if (backdropElement.parentElement === this.#document.body) {
          this.#document.body.removeChild(backdropElement);
        }
      }, 300);
    }
    return void 0;
  }
  get #isRTL() {
    return [this.#document.documentElement.dir, this.#document.body.dir].includes("rtl");
  }
  get #padding() {
    return `padding-${this.#isRTL ? "left" : "right"}`;
  }
  #scrollBarVisible = true;
  hideScrollbar() {
    if (this.#scrollBarVisible) {
      this.#document.body.style.setProperty("overflow", "hidden");
      this.#document.body.style.setProperty(this.#padding, this.scrollbarWidth);
      this.#scrollBarVisible = false;
    }
  }
  resetScrollbar() {
    this.#document.body.style.removeProperty("overflow");
    this.#document.body.style.removeProperty(this.#padding);
    this.#scrollBarVisible = true;
  }
  onClickHandler() {
    this.#backdropClick.next(true);
  }
  static \u0275fac = function BackdropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BackdropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BackdropService,
    factory: _BackdropService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackdropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BreadcrumbItemComponent = class _BreadcrumbItemComponent {
  /**
   * Toggle the active state for the component. [docs]
   * @return boolean
   */
  active = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "active"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * The `url` prop for the inner `[routerLink]` directive. [docs]
   * @return string
   */
  url = input(...ngDevMode ? [void 0, {
    debugName: "url"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Additional html attributes for link. [docs]
   * @return INavAttributes
   */
  attribs = input(...ngDevMode ? [void 0, {
    debugName: "attribs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _attributes = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_attributes"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "attributes"
  }));
  #attributesEffect = effect(() => {
    if (this._attributes()) {
      console.error("c-breadcrumb-item: [attributes] prop is removed, use [attribs] instead:", this._attributes());
    }
  }, ...ngDevMode ? [{
    debugName: "#attributesEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Some `NavigationExtras` props for the inner `[routerLink]` directive and `routerLinkActiveOptions`. [docs]
   * @return INavLinkProps
   */
  linkProps = input(...ngDevMode ? [void 0, {
    debugName: "linkProps"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaCurrent = computed(() => {
    return this.active() ? "page" : null;
  }, ...ngDevMode ? [{
    debugName: "ariaCurrent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return {
      "breadcrumb-item": true,
      active: this.active()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BreadcrumbItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BreadcrumbItemComponent,
    selectors: [["c-breadcrumb-item"]],
    hostVars: 3,
    hostBindings: function BreadcrumbItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.ariaCurrent());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      active: [1, "active"],
      url: [1, "url"],
      attribs: [1, "attribs"],
      _attributes: [1, "attributes", "_attributes"],
      linkProps: [1, "linkProps"]
    },
    exportAs: ["breadcrumbItem"],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 1,
    consts: [["defaultBreadcrumbItemContentTemplate", ""], [3, "routerLink", "cHtmlAttr", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "cHtmlAttr"], [4, "ngTemplateOutlet"]],
    template: function BreadcrumbItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, BreadcrumbItemComponent_Conditional_0_Template, 2, 13, "a", 1)(1, BreadcrumbItemComponent_Conditional_1_Template, 2, 3, "span", 2);
        \u0275\u0275template(2, BreadcrumbItemComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.active() ? 0 : 1);
      }
    },
    dependencies: [RouterModule, RouterLink, NgTemplateOutlet, HtmlAttributesDirective],
    styles: ["[_nghost-%COMP%]{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbItemComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb-item",
      imports: [RouterModule, NgTemplateOutlet, HtmlAttributesDirective],
      exportAs: "breadcrumbItem",
      host: {
        "[attr.aria-current]": "ariaCurrent()",
        "[class]": "hostClasses()"
      },
      template: `@if (!active()) {
  <a [routerLink]="url()"
     [cHtmlAttr]="attribs() ?? {}"
     [target]="attribs()?.['target']"
     [queryParams]="linkProps()?.queryParams ?? null"
     [fragment]="linkProps()?.fragment"
     [queryParamsHandling]="linkProps()?.queryParamsHandling ?? null"
     [preserveFragment]="linkProps()?.preserveFragment ?? false"
     [skipLocationChange]="linkProps()?.skipLocationChange ?? false"
     [replaceUrl]="linkProps()?.replaceUrl ?? false"
     [state]="linkProps()?.state ?? {}"
  >
    <ng-container *ngTemplateOutlet="defaultBreadcrumbItemContentTemplate" />
  </a>
} @else {
  <span [cHtmlAttr]="attribs() ?? {}">
      <ng-container *ngTemplateOutlet="defaultBreadcrumbItemContentTemplate" />
  </span>
}

<ng-template #defaultBreadcrumbItemContentTemplate>
  <ng-content />
</ng-template>
`,
      styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"]
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }],
    url: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "url",
        required: false
      }]
    }],
    attribs: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "attribs",
        required: false
      }]
    }],
    _attributes: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "attributes",
        required: false
      }]
    }],
    linkProps: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "linkProps",
        required: false
      }]
    }]
  });
})();
var BreadcrumbComponent = class _BreadcrumbComponent {
  /**
   * Default aria-label for breadcrumb. [docs]
   * @return string
   * @default 'breadcrumb'
   */
  ariaLabel = input("breadcrumb", ...ngDevMode ? [{
    debugName: "ariaLabel"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default role for breadcrumb. [docs]
   * @return string
   * @default 'navigation'
   */
  role = input("navigation", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BreadcrumbComponent,
    selectors: [["c-breadcrumb"]],
    hostAttrs: [1, "breadcrumb"],
    hostVars: 2,
    hostBindings: function BreadcrumbComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel())("role", ctx.role());
      }
    },
    inputs: {
      ariaLabel: [1, "ariaLabel"],
      role: [1, "role"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb",
      template: "<ng-content />",
      host: {
        class: "breadcrumb",
        "[attr.aria-label]": "ariaLabel()",
        "[attr.role]": "role()"
      }
    }]
  }], null, {
    ariaLabel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var BreadcrumbRouterService = class _BreadcrumbRouterService {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  outlet = "primary";
  #breadcrumbsBehaviorSubject = new BehaviorSubject(new Array());
  breadcrumbs$ = this.#breadcrumbsBehaviorSubject.asObservable();
  constructor() {
    this.#router.events.pipe(takeUntilDestroyed(), filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const breadcrumbs = [];
      let currentRoute = this.#activatedRoute.root;
      let url = "";
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach((childRoute) => {
          if (childRoute.outlet === this.outlet) {
            const routeSnapshot = childRoute.snapshot;
            url += "/" + routeSnapshot.url.map((segment) => segment.path).join("/");
            breadcrumbs.push({
              label: routeSnapshot.data["title"] ?? routeSnapshot.title ?? "",
              url,
              queryParams: routeSnapshot.queryParams
            });
            currentRoute = childRoute;
          }
        });
      } while (currentRoute);
      this.#breadcrumbsBehaviorSubject.next(Object.assign([], breadcrumbs));
      return breadcrumbs;
    });
  }
  static \u0275fac = function BreadcrumbRouterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbRouterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BreadcrumbRouterService,
    factory: _BreadcrumbRouterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var BreadcrumbRouterComponent = class _BreadcrumbRouterComponent {
  #breadcrumbRouterService = inject(BreadcrumbRouterService);
  /**
   * Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior. [docs]
   * @return IBreadcrumbItem[]
   */
  items = input(...ngDevMode ? [void 0, {
    debugName: "items"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #breadcrumbs = toSignal(this.#breadcrumbRouterService.breadcrumbs$);
  breadcrumbs = computed(() => {
    return this.items() ?? this.#breadcrumbs() ?? [];
  }, ...ngDevMode ? [{
    debugName: "breadcrumbs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BreadcrumbRouterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbRouterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BreadcrumbRouterComponent,
    selectors: [["c-breadcrumb-router"], ["", "cBreadcrumbRouter", ""]],
    inputs: {
      items: [1, "items"]
    },
    decls: 3,
    vars: 0,
    consts: [[1, "m-0"], [3, "active", "url", "attribs", "linkProps"]],
    template: function BreadcrumbRouterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "c-breadcrumb", 0);
        \u0275\u0275repeaterCreate(1, BreadcrumbRouterComponent_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.breadcrumbs());
      }
    },
    dependencies: [BreadcrumbComponent, BreadcrumbItemComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouterComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb-router, [cBreadcrumbRouter]",
      imports: [BreadcrumbComponent, BreadcrumbItemComponent],
      template: `<c-breadcrumb class="m-0">
  @for (breadcrumb of breadcrumbs(); track breadcrumb; let last = $last) {
    @if (breadcrumb?.label && (breadcrumb?.url?.slice(-1) === '/' || last)) {
      <c-breadcrumb-item
        [active]="last"
        [url]="breadcrumb?.url"
        [attribs]="breadcrumb?.attributes"
        [linkProps]="breadcrumb?.linkProps"
      >
        {{ breadcrumb?.label }}
      </c-breadcrumb-item>
    }
  }
</c-breadcrumb>
`
    }]
  }], null, {
    items: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "items",
        required: false
      }]
    }]
  });
})();
var BreadcrumbModule = class _BreadcrumbModule {
  static \u0275fac = function BreadcrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BreadcrumbModule,
    imports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
    exports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [BreadcrumbRouterService],
    imports: [BreadcrumbItemComponent, BreadcrumbRouterComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
      exports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
      providers: [BreadcrumbRouterService]
    }]
  }], null, null);
})();
var ButtonGroupComponent = class _ButtonGroupComponent {
  /**
   * Size the component small or large.
   * @return { 'sm' | 'lg' }
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
   * @type boolean
   */
  vertical = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "vertical"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Default role attr for ButtonGroup. [docs]
   * @return string
   * @default 'group'
   */
  role = input("group", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const size = this.size();
    const vertical = this.vertical();
    return {
      "btn-group": !vertical,
      "btn-group-vertical": vertical,
      [`btn-group-${size}`]: !!size
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ButtonGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ButtonGroupComponent,
    selectors: [["c-button-group"]],
    hostVars: 3,
    hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      size: [1, "size"],
      vertical: [1, "vertical"],
      role: [1, "role"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ButtonGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-button-group",
      template: "<ng-content />",
      host: {
        "[attr.role]": "role()",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "vertical",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var ButtonToolbarComponent = class _ButtonToolbarComponent {
  /**
   * Default role attr for ButtonToolbar. [docs]
   * @type InputSignal<string>
   * @default 'toolbar'
   */
  role = input("toolbar", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ButtonToolbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonToolbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ButtonToolbarComponent,
    selectors: [["c-button-toolbar"]],
    hostAttrs: [1, "btn-toolbar"],
    hostVars: 1,
    hostBindings: function ButtonToolbarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
      }
    },
    inputs: {
      role: [1, "role"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ButtonToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonToolbarComponent, [{
    type: Component,
    args: [{
      selector: "c-button-toolbar",
      template: "<ng-content />",
      host: {
        class: "btn-toolbar",
        "[attr.role]": "role()"
      }
    }]
  }], null, {
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var ButtonGroupModule = class _ButtonGroupModule {
  static \u0275fac = function ButtonGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonGroupModule,
    imports: [ButtonGroupComponent, ButtonToolbarComponent],
    exports: [ButtonGroupComponent, ButtonToolbarComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonGroupComponent, ButtonToolbarComponent],
      exports: [ButtonGroupComponent, ButtonToolbarComponent]
    }]
  }], null, null);
})();
var CalloutComponent = class _CalloutComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const color = this.color();
    return {
      callout: true,
      [`callout-${color}`]: !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function CalloutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalloutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CalloutComponent,
    selectors: [["c-callout"], ["", "cCallout", ""]],
    hostAttrs: [1, "callout"],
    hostVars: 2,
    hostBindings: function CalloutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "color"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CalloutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalloutComponent, [{
    type: Component,
    args: [{
      selector: "c-callout, [cCallout]",
      template: "<ng-content />",
      host: {
        class: "callout",
        "[class]": "hostClasses()"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }]
  });
})();
var CalloutModule = class _CalloutModule {
  static \u0275fac = function CalloutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalloutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CalloutModule,
    imports: [CalloutComponent],
    exports: [CalloutComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalloutModule, [{
    type: NgModule,
    args: [{
      exports: [CalloutComponent],
      imports: [CalloutComponent]
    }]
  }], null, null);
})();
var CardComponent = class _CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the text color context of the component to one of CoreUI’s themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  textColor = input(...ngDevMode ? [void 0, {
    debugName: "textColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility.
   * via TextBgColorDirective
   * @type Colors
   * @since 5.0.0
   */
  textBgColor = input(...ngDevMode ? [void 0, {
    debugName: "textBgColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const color = this.color();
    return {
      card: true,
      [`bg-${color}`]: !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function CardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CardComponent,
    selectors: [["c-card"], ["", "c-card", ""]],
    hostAttrs: [1, "card"],
    hostVars: 2,
    hostBindings: function CardComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "color"],
      textColor: [1, "textColor"],
      textBgColor: [1, "textBgColor"]
    },
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: TextColorDirective,
      inputs: ["cTextColor", "textColor"]
    }, {
      directive: TextBgColorDirective,
      inputs: ["cTextBgColor", "textBgColor"]
    }])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "c-card, [c-card]",
      template: "<ng-content />",
      hostDirectives: [{
        directive: TextColorDirective,
        inputs: ["cTextColor: textColor"]
      }, {
        directive: TextBgColorDirective,
        inputs: ["cTextBgColor: textBgColor"]
      }],
      host: {
        class: "card",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    textColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "textColor",
        required: false
      }]
    }],
    textBgColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "textBgColor",
        required: false
      }]
    }]
  });
})();
var CardBodyComponent = class _CardBodyComponent {
  static \u0275fac = function CardBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardBodyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CardBodyComponent,
    selectors: [["c-card-body"], ["", "c-card-body", ""]],
    hostAttrs: [1, "card-body"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CardBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-card-body, [c-card-body]",
      template: "<ng-content />",
      host: {
        class: "card-body"
      }
    }]
  }], null, null);
})();
var CardFooterComponent = class _CardFooterComponent {
  static \u0275fac = function CardFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardFooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CardFooterComponent,
    selectors: [["c-card-footer"], ["", "c-card-footer", ""]],
    hostAttrs: [1, "card-footer"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CardFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-card-footer, [c-card-footer]",
      template: "<ng-content />",
      host: {
        class: "card-footer"
      }
    }]
  }], null, null);
})();
var CardGroupComponent = class _CardGroupComponent {
  static \u0275fac = function CardGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CardGroupComponent,
    selectors: [["c-card-group"], ["", "c-card-group", ""]],
    hostAttrs: [1, "card-group"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CardGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-card-group, [c-card-group]",
      template: "<ng-content />",
      host: {
        class: "card-group"
      }
    }]
  }], null, null);
})();
var CardHeaderComponent = class _CardHeaderComponent {
  static \u0275fac = function CardHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CardHeaderComponent,
    selectors: [["c-card-header"], ["", "c-card-header", ""]],
    hostAttrs: [1, "card-header"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CardHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-card-header, [c-card-header]",
      template: "<ng-content />",
      host: {
        class: "card-header"
      }
    }]
  }], null, null);
})();
var CardHeaderActionsComponent = class _CardHeaderActionsComponent {
  static \u0275fac = function CardHeaderActionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardHeaderActionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CardHeaderActionsComponent,
    selectors: [["c-card-header-actions"], ["", "c-card-header-actions", ""]],
    hostAttrs: [1, "card-header-actions"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CardHeaderActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderActionsComponent, [{
    type: Component,
    args: [{
      selector: "c-card-header-actions, [c-card-header-actions]",
      template: "<ng-content />",
      host: {
        class: "card-header-actions"
      }
    }]
  }], null, null);
})();
var CardImgDirective = class _CardImgDirective {
  /**
   * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
   * @type {'top | 'bottom'}
   */
  orientation = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "orientation"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cCardImg"
  }));
  hostClasses = computed(() => {
    const orientation = this.orientation();
    const suffix = !!orientation ? `-${orientation}` : "";
    const horizontal = ["start", "end"].includes(orientation ?? "-") ? orientation : void 0;
    return {
      [`card-img${suffix}`]: !horizontal,
      "img-fluid": !!horizontal,
      [`rounded-${horizontal}`]: !!horizontal
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function CardImgDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardImgDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CardImgDirective,
    selectors: [["", "cCardImg", ""]],
    hostVars: 2,
    hostBindings: function CardImgDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      orientation: [1, "cCardImg", "orientation"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardImg]",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    orientation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cCardImg",
        required: false
      }]
    }]
  });
})();
var CardImgOverlayComponent = class _CardImgOverlayComponent {
  static \u0275fac = function CardImgOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardImgOverlayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CardImgOverlayComponent,
    selectors: [["c-card-img-overlay"]],
    hostAttrs: [1, "card-img-overlay"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CardImgOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgOverlayComponent, [{
    type: Component,
    args: [{
      selector: "c-card-img-overlay",
      template: "<ng-content />",
      host: {
        class: "card-img-overlay"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var CardLinkDirective = class _CardLinkDirective {
  static \u0275fac = function CardLinkDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardLinkDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CardLinkDirective,
    selectors: [["", "cCardLink", ""]],
    hostAttrs: [1, "card-link"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardLink]",
      host: {
        class: "card-link"
      }
    }]
  }], null, null);
})();
var CardSubtitleDirective = class _CardSubtitleDirective {
  static \u0275fac = function CardSubtitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardSubtitleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CardSubtitleDirective,
    selectors: [["", "cCardSubtitle", ""]],
    hostAttrs: [1, "card-subtitle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardSubtitle]",
      host: {
        class: "card-subtitle"
      }
    }]
  }], null, null);
})();
var CardTextDirective = class _CardTextDirective {
  static \u0275fac = function CardTextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardTextDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CardTextDirective,
    selectors: [["", "cCardText", ""]],
    hostAttrs: [1, "card-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardText]",
      host: {
        class: "card-text"
      }
    }]
  }], null, null);
})();
var CardTitleDirective = class _CardTitleDirective {
  static \u0275fac = function CardTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardTitleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CardTitleDirective,
    selectors: [["", "cCardTitle", ""]],
    hostAttrs: [1, "card-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardTitle]",
      host: {
        class: "card-title"
      }
    }]
  }], null, null);
})();
var CardModule = class _CardModule {
  static \u0275fac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CardModule,
    imports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective],
    exports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective],
      exports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective]
    }]
  }], null, null);
})();
var IntersectionService = class _IntersectionService {
  platformId = inject(PLATFORM_ID);
  #intersecting = new BehaviorSubject({
    isIntersecting: false
  });
  intersecting$ = this.#intersecting.asObservable();
  defaultObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };
  hostElementRefs = /* @__PURE__ */ new Map();
  createIntersectionObserver(hostElement, observerOptions = this.defaultObserverOptions) {
    if (isPlatformServer(this.platformId)) {
      this.#intersecting.next({
        isIntersecting: true,
        hostElement
      });
      return;
    }
    const options = __spreadValues(__spreadValues({}, this.defaultObserverOptions), observerOptions);
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        this.#intersecting.next({
          isIntersecting: entry.isIntersecting,
          hostElement
        });
      });
    };
    this.hostElementRefs.set(hostElement, new IntersectionObserver(handleIntersect, options));
    this.hostElementRefs.get(hostElement)?.observe(hostElement.nativeElement);
  }
  unobserve(elementRef) {
    this.hostElementRefs.get(elementRef)?.unobserve(elementRef.nativeElement);
    this.hostElementRefs.set(elementRef, null);
    this.hostElementRefs.delete(elementRef);
  }
  ngOnDestroy() {
    this.hostElementRefs.forEach((observer, elementRef) => {
      observer?.unobserve(elementRef.nativeElement);
    });
  }
  static \u0275fac = function IntersectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _IntersectionService,
    factory: _IntersectionService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ListenersService = class _ListenersService {
  renderer = inject(Renderer2);
  listeners = /* @__PURE__ */ new Map();
  setListeners({
    hostElement,
    trigger: trigger2,
    callbackOn,
    callbackOff,
    callbackToggle
  }) {
    const host = hostElement.nativeElement;
    const triggers = Array.isArray(trigger2) ? trigger2 : trigger2?.split(" ") ?? [];
    if (triggers?.includes("click")) {
      typeof callbackToggle === "function" && this.listeners.set("click", this.renderer.listen(host, "click", callbackToggle));
    }
    if (triggers?.includes("focus")) {
      typeof callbackOn === "function" && this.listeners.set("focus", this.renderer.listen(host, "focus", callbackOn));
    }
    if (triggers?.includes("focusin")) {
      typeof callbackOff === "function" && this.listeners.set("focusout", this.renderer.listen(host, "focusout", callbackOff));
      typeof callbackOn === "function" && this.listeners.set("focusin", this.renderer.listen(host, "focusin", callbackOn));
    }
    if (triggers?.includes("click") || triggers?.includes("focus")) {
      typeof callbackOff === "function" && this.listeners.set("blur", this.renderer.listen(host, "blur", callbackOff));
    }
    if (triggers?.includes("hover")) {
      typeof callbackOn === "function" && this.listeners.set("mouseenter", this.renderer.listen(host, "mouseenter", callbackOn));
      typeof callbackOff === "function" && this.listeners.set("mouseleave", this.renderer.listen(host, "mouseleave", callbackOff));
    }
  }
  clearListeners() {
    this.listeners.forEach((unListen, key) => {
      unListen();
    });
    this.listeners.forEach((unListen, key) => {
      this.listeners.set(key, null);
    });
    this.listeners.clear();
  }
  static \u0275fac = function ListenersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListenersService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ListenersService,
    factory: _ListenersService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListenersService, [{
    type: Injectable
  }], null, null);
})();
var ClassToggleService = class _ClassToggleService {
  #document = inject(DOCUMENT);
  #rendererFactory = inject(RendererFactory2);
  #renderer;
  constructor() {
    this.#renderer = this.#rendererFactory.createRenderer(null, null);
  }
  toggle(selector, className) {
    const element = this.#document.querySelector(selector);
    if (element) {
      element.classList.contains(className) ? this.#renderer.removeClass(element, className) : this.#renderer.addClass(element, className);
    }
  }
  static \u0275fac = function ClassToggleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassToggleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ClassToggleService,
    factory: _ClassToggleService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassToggleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var InMemoryStorageService = class _InMemoryStorageService {
  #storage = /* @__PURE__ */ new Map();
  setItem(key, data) {
    this.#storage.set(key, JSON.stringify(data));
  }
  getItem(key) {
    return this.#storage.has(key) ? JSON.parse(this.#storage.get(key) ?? "null") : void 0;
  }
  removeItem(key) {
    this.#storage.delete(key);
  }
  clear() {
    this.#storage.clear();
  }
  get length() {
    return this.#storage.size;
  }
  key(index) {
    return Array.from(this.#storage.keys())[index];
  }
  static \u0275fac = function InMemoryStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InMemoryStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InMemoryStorageService,
    factory: _InMemoryStorageService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemoryStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LocalStorageService = class _LocalStorageService {
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  constructor() {
    this.#localStorage = isPlatformBrowser(this.platformId) && this.document.defaultView ? this.document.defaultView?.localStorage : new InMemoryStorageService();
  }
  #localStorage;
  #data$ = new BehaviorSubject(null);
  data$ = this.#data$.asObservable();
  setItem(key, data) {
    this.#localStorage.setItem(key, JSON.stringify(data));
    this.#data$.next({
      key,
      data
    });
  }
  getItem(key) {
    const data = JSON.parse(this.#localStorage.getItem(key) || "null");
    this.#data$.next({
      key,
      data
    });
    return data;
  }
  removeItem(key) {
    this.#localStorage.removeItem(key);
    this.#data$.next({
      key,
      data: null
    });
  }
  clear() {
    this.#localStorage.clear();
    this.#data$.next(null);
  }
  static \u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LocalStorageService,
    factory: _LocalStorageService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var ColorModeService = class _ColorModeService {
  #destroyRef = inject(DestroyRef);
  #document = inject(DOCUMENT);
  #localStorage = inject(LocalStorageService);
  eventName = signal("ColorSchemeChange", ...ngDevMode ? [{
    debugName: "eventName"
  }] : (
    /* istanbul ignore next */
    []
  ));
  localStorageItemName = signal(void 0, ...ngDevMode ? [{
    debugName: "localStorageItemName"
  }] : (
    /* istanbul ignore next */
    []
  ));
  localStorageItemName$ = toObservable(this.localStorageItemName);
  colorMode = signal(void 0, ...ngDevMode ? [{
    debugName: "colorMode"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #colorModeEffect = effect(() => {
    const colorMode = this.colorMode();
    if (colorMode) {
      const localStorageItemName = this.localStorageItemName();
      localStorageItemName && this.setStoredTheme(localStorageItemName, colorMode);
      this.#setTheme(colorMode);
    }
  }, ...ngDevMode ? [{
    debugName: "#colorModeEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    afterNextRender({
      read: () => {
        this.localStorageItemName$.pipe(tap((params) => {
          this.colorMode.set(this.getDefaultScheme(params));
        }), takeUntilDestroyed(this.#destroyRef)).subscribe();
      }
    });
  }
  getStoredTheme(localStorageItemName) {
    return this.#localStorage.getItem(localStorageItemName);
  }
  setStoredTheme(localStorageItemName, colorMode) {
    return this.#localStorage.setItem(localStorageItemName, colorMode);
  }
  removeStoredTheme(localStorageItemName) {
    this.#localStorage.removeItem(localStorageItemName);
  }
  getDefaultScheme(localStorageItemName) {
    if (this.#document.defaultView === void 0) {
      return this.getDatasetTheme();
    }
    const storedTheme = localStorageItemName && this.getStoredTheme(localStorageItemName);
    return storedTheme ?? this.getDatasetTheme();
  }
  getPrefersColorScheme() {
    return this.#document.defaultView?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : this.#document.defaultView?.matchMedia("(prefers-color-scheme: light)").matches ? "light" : void 0;
  }
  getDatasetTheme() {
    return this.#document.documentElement.dataset["coreuiTheme"];
  }
  #setTheme(colorMode) {
    this.#document.documentElement.dataset["coreuiTheme"] = colorMode === "auto" ? this.getPrefersColorScheme() : colorMode;
    const event = new Event(this.eventName());
    this.#document.documentElement.dispatchEvent(event);
  }
  static \u0275fac = function ColorModeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorModeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorModeService,
    factory: _ColorModeService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorModeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var UIDService = class _UIDService {
  #document = inject(DOCUMENT);
  getUID(prefix = "random-id") {
    let uid = prefix;
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1e6).toString(10)}`;
    } while (this.#document.getElementById(uid));
    return uid;
  }
  static \u0275fac = function UIDService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UIDService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UIDService,
    factory: _UIDService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UIDService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RtlService = class _RtlService {
  #document = inject(DOCUMENT);
  isRTL(element) {
    if (element) {
      return element.closest('[dir="rtl"]') !== null || this.#document.defaultView?.getComputedStyle(element).direction === "rtl";
    }
    return [this.#document?.documentElement?.dir, this.#document?.body?.dir].includes("rtl");
  }
  static \u0275fac = function RtlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RtlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RtlService,
    factory: _RtlService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RtlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CarouselService = class _CarouselService {
  #carouselIndex = new BehaviorSubject({});
  carouselIndex$ = this.#carouselIndex.asObservable();
  setIndex(index) {
    this.#carouselIndex.next(index);
  }
  static \u0275fac = function CarouselService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselService,
    factory: _CarouselService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], null, null);
})();
var CarouselState = class _CarouselState {
  #carouselService = inject(CarouselService);
  #state = {
    activeItemIndex: -1,
    animate: true,
    items: [],
    direction: "next",
    transition: "slide",
    interval: 0
  };
  get state() {
    return this.#state;
  }
  set state(state2) {
    const prevState = __spreadValues({}, this.#state);
    const nextState = __spreadValues(__spreadValues({}, this.#state), state2);
    this.#state = nextState;
    if (prevState.activeItemIndex !== nextState.activeItemIndex) {
      const activeItemIndex = this.state.activeItemIndex || 0;
      const itemInterval = this.state.items && this.state.items[activeItemIndex]?.interval() || -1;
      this.#carouselService.setIndex({
        active: nextState.activeItemIndex,
        interval: itemInterval,
        lastItemIndex: (nextState.items?.length ?? 0) - 1
      });
    }
  }
  setItems(newItems) {
    if (newItems.length) {
      const itemsArray = newItems;
      itemsArray.forEach((item, i) => {
        item.index = i;
      });
      this.state = {
        items: [...itemsArray]
      };
    } else {
      this.reset();
    }
  }
  setNextIndex(nextIndex) {
    this.#carouselService.setIndex(nextIndex);
  }
  direction(direction = "next") {
    this.state = {
      direction
    };
    const {
      activeItemIndex = -1,
      items
    } = this.state;
    const itemsCount = items?.length ?? 0;
    if (itemsCount > 0) {
      return direction === "next" ? activeItemIndex === itemsCount - 1 ? 0 : activeItemIndex + 1 : activeItemIndex === 0 ? itemsCount - 1 : activeItemIndex - 1;
    } else {
      return 0;
    }
  }
  reset() {
    this.state = {
      activeItemIndex: -1,
      animate: true,
      items: [],
      direction: "next",
      transition: "slide",
      interval: 0
    };
  }
  static \u0275fac = function CarouselState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselState,
    factory: _CarouselState.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselState, [{
    type: Injectable
  }], null, null);
})();
var CarouselConfig = class _CarouselConfig {
  /* Animate transition of slides */
  activeIndex = 0;
  /* Animate transition of slides */
  animate = true;
  /* Default direction of auto changing of slides */
  direction = "next";
  /* Default interval of auto changing of slides */
  interval;
  static \u0275fac = function CarouselConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselConfig,
    factory: _CarouselConfig.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CarouselComponent = class _CarouselComponent {
  config = inject(CarouselConfig);
  #hostElement = inject(ElementRef);
  #carouselService = inject(CarouselService);
  #carouselState = inject(CarouselState);
  #intersectionService = inject(IntersectionService);
  #listenersService = inject(ListenersService);
  constructor() {
    this.loadConfig();
  }
  loadConfig() {
    this.activeIndex.update((activeIndex) => this.config?.activeIndex ?? activeIndex);
    this.animate.update((animate2) => this.config?.animate ?? animate2);
    this.direction.update((direction) => this.config?.direction ?? direction);
    this.interval.update((interval) => this.config?.interval ?? interval);
  }
  /**
   * Index of the active item.
   * @return number
   */
  activeIndexInput = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "activeIndexInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "activeIndex",
    transform: numberAttribute
  }));
  activeIndex = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "activeIndex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.activeIndexInput,
    computation: (value) => value
  }));
  /**
   * Carousel automatically starts cycle items.
   * @return boolean
   */
  animateInput = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "animateInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "animate"
  }));
  animate = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "animate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.animateInput,
    computation: (value) => value
  }));
  /**
   * Carousel direction. [docs]
   * @return {'next' | 'prev'}
   */
  directionInput = input("next", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "directionInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "direction"
  }));
  direction = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "direction"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.directionInput,
    computation: (value) => value
  }));
  /**
   * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
   * @return number
   * @default 0
   */
  intervalInput = input(-1, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "intervalInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "interval",
    transform: numberAttribute
  }));
  interval = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "interval"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.intervalInput,
    computation: (value) => value
  }));
  #intervalEffect = effect(() => {
    const interval = this.interval();
    this.#carouselState.state = {
      interval
    };
    interval ? this.setTimer() : this.resetTimer();
  }, ...ngDevMode ? [{
    debugName: "#intervalEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
   * @return {'hover' | 'focus' | 'click'}
   */
  pause = input("hover", ...ngDevMode ? [{
    debugName: "pause"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Support left/right swipe interactions on touchscreen devices.
   * @return boolean
   * @default true
   */
  touch = input(true, ...ngDevMode ? [{
    debugName: "touch"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set type of the transition.
   * @return {'slide' | 'crossfade'}
   * @default 'slide'
   */
  transition = input("slide", ...ngDevMode ? [{
    debugName: "transition"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set whether the carousel should cycle continuously or have hard stops.
   * @return boolean
   * @default true
   */
  wrap = input(true, ...ngDevMode ? [{
    debugName: "wrap"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Event emitted on carousel item change. [docs]
   * @return number
   */
  itemChange = output();
  timerId;
  activeItemInterval = 0;
  swipeSubscription;
  #destroyRef = inject(DestroyRef);
  ngOnInit() {
    this.carouselStateSubscribe();
  }
  ngOnDestroy() {
    this.resetTimer();
    this.clearListeners();
    this.swipeSubscribe(false);
  }
  ngAfterContentInit() {
    this.intersectionServiceSubscribe();
    this.#carouselState.state = {
      activeItemIndex: this.activeIndex(),
      animate: this.animate(),
      interval: this.interval(),
      transition: this.transition()
    };
    this.setListeners();
    this.swipeSubscribe();
  }
  setListeners() {
    const config = {
      hostElement: this.#hostElement,
      trigger: this.pause() || [],
      callbackOff: () => {
        this.setTimer();
      },
      callbackOn: () => {
        this.resetTimer();
      }
    };
    this.#listenersService.setListeners(config);
  }
  clearListeners() {
    this.#listenersService.clearListeners();
  }
  set visible(value) {
    this.#visible = value;
  }
  get visible() {
    return this.#visible;
  }
  #visible = true;
  setTimer() {
    const interval = this.activeItemInterval || this.interval();
    const direction = this.direction();
    this.resetTimer();
    if (interval > 0) {
      this.timerId = setTimeout(() => {
        const nextIndex = this.#carouselState.direction(direction);
        this.#carouselState.state = {
          activeItemIndex: nextIndex
        };
      }, interval);
    }
  }
  resetTimer() {
    clearTimeout(this.timerId);
    this.timerId = void 0;
  }
  carouselStateSubscribe() {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextItem) => {
      if ("active" in nextItem && typeof nextItem.active === "number") {
        this.itemChange?.emit(nextItem.active);
      }
      this.activeItemInterval = typeof nextItem.interval === "number" && nextItem.interval > -1 ? nextItem.interval : this.interval();
      const direction = this.direction();
      const isLastItem = nextItem.active === nextItem.lastItemIndex && direction === "next" || nextItem.active === 0 && direction === "prev";
      !this.wrap() && isLastItem ? this.resetTimer() : this.setTimer();
    });
  }
  intersectionServiceSubscribe() {
    this.#intersectionService.createIntersectionObserver(this.#hostElement);
    this.#intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.#hostElement), finalize(() => {
      this.#intersectionService.unobserve(this.#hostElement);
    }), takeUntilDestroyed(this.#destroyRef)).subscribe((next) => {
      this.visible = next.isIntersecting;
      next.isIntersecting ? this.setTimer() : this.resetTimer();
    });
  }
  swipeSubscribe(subscribe = true) {
    if (this.touch() && subscribe) {
      const carouselElement = this.#hostElement.nativeElement;
      const touchStart$ = fromEvent(carouselElement, "touchstart");
      const touchEnd$ = fromEvent(carouselElement, "touchend");
      const touchMove$ = fromEvent(carouselElement, "touchmove");
      this.swipeSubscription = touchStart$.pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))), takeUntilDestroyed(this.#destroyRef)).subscribe(([touchstart, [touchend, touchmove]]) => {
        touchstart.stopPropagation();
        touchmove.stopPropagation();
        const distanceX = touchstart.touches[0]?.clientX - touchmove.touches[0]?.clientX || 0;
        if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
          const nextIndex = this.#carouselState.direction(distanceX > 0 ? "next" : "prev");
          this.#carouselState.state = {
            activeItemIndex: nextIndex
          };
        }
      });
    } else {
      this.swipeSubscription?.unsubscribe();
    }
  }
  static \u0275fac = function CarouselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselComponent,
    selectors: [["c-carousel"]],
    hostAttrs: [1, "carousel", "slide"],
    hostVars: 2,
    hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("carousel-fade", ctx.transition() === "crossfade" && ctx.animate());
      }
    },
    inputs: {
      activeIndexInput: [1, "activeIndex", "activeIndexInput"],
      animateInput: [1, "animate", "animateInput"],
      directionInput: [1, "direction", "directionInput"],
      intervalInput: [1, "interval", "intervalInput"],
      pause: [1, "pause"],
      touch: [1, "touch"],
      transition: [1, "transition"],
      wrap: [1, "wrap"]
    },
    outputs: {
      itemChange: "itemChange"
    },
    exportAs: ["cCarousel"],
    features: [\u0275\u0275ProvidersFeature([CarouselService, CarouselState, ListenersService]), \u0275\u0275HostDirectivesFeature([{
      directive: ThemeDirective,
      inputs: ["dark", "dark"]
    }])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel",
      template: "<ng-content />",
      providers: [CarouselService, CarouselState, ListenersService],
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      exportAs: "cCarousel",
      host: {
        class: "carousel slide",
        "[class.carousel-fade]": 'transition() === "crossfade" && animate()'
      },
      styles: [":host{display:block}\n"]
    }]
  }], () => [], {
    activeIndexInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "activeIndex",
        required: false
      }]
    }],
    animateInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "animate",
        required: false
      }]
    }],
    directionInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "direction",
        required: false
      }]
    }],
    intervalInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "interval",
        required: false
      }]
    }],
    pause: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pause",
        required: false
      }]
    }],
    touch: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "touch",
        required: false
      }]
    }],
    transition: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transition",
        required: false
      }]
    }],
    wrap: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "wrap",
        required: false
      }]
    }],
    itemChange: [{
      type: Output,
      args: ["itemChange"]
    }]
  });
})();
var CarouselCaptionComponent = class _CarouselCaptionComponent {
  static \u0275fac = function CarouselCaptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselCaptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselCaptionComponent,
    selectors: [["c-carousel-caption"]],
    hostVars: 2,
    hostBindings: function CarouselCaptionComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("carousel-caption", true);
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CarouselCaptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselCaptionComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-caption",
      template: "<ng-content />",
      host: {
        "[class.carousel-caption]": "true"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var CarouselControlComponent = class _CarouselControlComponent {
  #carouselState = inject(CarouselState);
  /**
   * Carousel control caption. [docs]
   * @return string
   */
  captionInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "captionInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "caption"
  }));
  caption = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "caption"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.captionInput,
    computation: (value) => {
      return !!value ? value : this.direction() === "prev" ? "Previous" : "Next";
    }
  }));
  /**
   * Carousel control direction.
   * @return {'next' | 'prev'}
   */
  direction = input("next", ...ngDevMode ? [{
    debugName: "direction"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Carousel control role.
   * @return string
   */
  role = input("button", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return `carousel-control-${this.direction()}`;
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  carouselControlIconClass = computed(() => {
    return `carousel-control-${this.direction()}-icon`;
  }, ...ngDevMode ? [{
    debugName: "carouselControlIconClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onKeyUp($event) {
    if ($event.key === "Enter") {
      this.#play();
    }
    if ($event.key === "ArrowLeft") {
      this.#play("prev");
    }
    if ($event.key === "ArrowRight") {
      this.#play("next");
    }
  }
  onClick($event) {
    this.#play();
  }
  #play(direction = this.direction()) {
    const nextIndex = this.#carouselState.direction(direction);
    this.#carouselState.state = {
      activeItemIndex: nextIndex
    };
  }
  static \u0275fac = function CarouselControlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselControlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselControlComponent,
    selectors: [["c-carousel-control"]],
    hostVars: 3,
    hostBindings: function CarouselControlComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keyup", function CarouselControlComponent_keyup_HostBindingHandler($event) {
          return ctx.onKeyUp($event);
        })("click", function CarouselControlComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      captionInput: [1, "caption", "captionInput"],
      direction: [1, "direction"],
      role: [1, "role"]
    },
    exportAs: ["cCarouselControl"],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "visually-hidden"]],
    template: function CarouselControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0, 0, null, CarouselControlComponent_ProjectionFallback_0_Template, 3, 4);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselControlComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-control",
      exportAs: "cCarouselControl",
      host: {
        "[attr.role]": "role()",
        "[class]": "hostClasses()",
        "(keyup)": "onKeyUp($event)",
        "(click)": "onClick($event)"
      },
      template: '<ng-content>\n  <span [attr.aria-hidden]="true" [class]="carouselControlIconClass()"></span>\n  <span class="visually-hidden">{{ caption() }}</span>\n</ng-content>\n'
    }]
  }], null, {
    captionInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "caption",
        required: false
      }]
    }],
    direction: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "direction",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var CarouselIndicatorsComponent = class _CarouselIndicatorsComponent {
  #destroyRef = inject(DestroyRef);
  #carouselService = inject(CarouselService);
  #carouselState = inject(CarouselState);
  items = [];
  active = 0;
  contentTemplates = contentChildren(TemplateIdDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentTemplates"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: true
  }));
  templates = computed(() => {
    return this.contentTemplates().reduce((acc, child) => {
      acc[child.id] = child.templateRef;
      return acc;
    }, {});
  }, ...ngDevMode ? [{
    debugName: "templates"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextIndex) => {
      this.items = this.#carouselState?.state?.items?.map((item) => item.index) ?? [];
      if ("active" in nextIndex) {
        this.active = nextIndex.active ?? 0;
      }
    });
  }
  onClick(index) {
    if (index !== this.active) {
      const direction = index < this.active ? "prev" : "next";
      this.#carouselState.state = {
        direction,
        activeItemIndex: index
      };
    }
  }
  static \u0275fac = function CarouselIndicatorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselIndicatorsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselIndicatorsComponent,
    selectors: [["c-carousel-indicators"]],
    contentQueries: function CarouselIndicatorsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplates, TemplateIdDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "carousel-indicators"],
    exportAs: ["cCarouselIndicators"],
    decls: 3,
    vars: 5,
    consts: [["defaultCarouselIndicatorsTemplate", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "class"], ["type", "button", 3, "click"]],
    template: function CarouselIndicatorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CarouselIndicatorsComponent_ng_container_0_Template, 1, 0, "ng-container", 1)(1, CarouselIndicatorsComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const defaultCarouselIndicatorsTemplate_r4 = \u0275\u0275reference(2);
        const tmpl_r5 = ctx.templates();
        \u0275\u0275property("ngTemplateOutlet", tmpl_r5["carouselIndicatorsTemplate"] || defaultCarouselIndicatorsTemplate_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c4, ctx.items, ctx.active));
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselIndicatorsComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-indicators",
      exportAs: "cCarouselIndicators",
      imports: [NgTemplateOutlet],
      host: {
        class: "carousel-indicators"
      },
      template: `@let tmpl = templates();
<ng-container *ngTemplateOutlet="tmpl['carouselIndicatorsTemplate'] || defaultCarouselIndicatorsTemplate; context: {$implicit: items, active: active}" />

<ng-template #defaultCarouselIndicatorsTemplate>
  @for (item of items; track item; let i = $index) {
    <button
      [attr.data-coreui-target]="i"
      type="button"
      (click)="onClick(i)"
      [class]="{ active: active === i }"
      [attr.aria-current]="active === i">
    </button>
  }
</ng-template>
`
    }]
  }], null, {
    contentTemplates: [{
      type: ContentChildren,
      args: [forwardRef(() => TemplateIdDirective), __spreadProps(__spreadValues({}, {
        descendants: true
      }), {
        isSignal: true
      })]
    }]
  });
})();
var CarouselItemComponent = class _CarouselItemComponent {
  #destroyRef = inject(DestroyRef);
  #carouselService = inject(CarouselService);
  index;
  /**
   * @ignore
   */
  activeInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "activeInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "active"
  }));
  active = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "active"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.activeInput,
    computation: (value) => {
      return value;
    }
  }));
  /**
   * Time delay before cycling to next item. If -1, uses carousel interval value.
   * @return number
   * @default -1
   */
  interval = input(-1, ...ngDevMode ? [{
    debugName: "interval"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Carousel item role.
   * @return string
   * @default 'group'
   */
  role = input("group", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextIndex) => {
      if ("active" in nextIndex) {
        this.active.set(nextIndex.active === this.index);
      }
    });
  }
  static \u0275fac = function CarouselItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselItemComponent,
    selectors: [["c-carousel-item"]],
    hostAttrs: [1, "carousel-item"],
    hostVars: 3,
    hostBindings: function CarouselItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classProp("active", ctx.active());
      }
    },
    inputs: {
      activeInput: [1, "active", "activeInput"],
      interval: [1, "interval"],
      role: [1, "role"]
    },
    exportAs: ["cCarouselItem"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    template: function CarouselItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, CarouselItemComponent_Conditional_0_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.active() ? 0 : -1);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselItemComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-item",
      exportAs: "cCarouselItem",
      host: {
        class: "carousel-item",
        "[class.active]": "active()",
        "[attr.role]": "role()"
      },
      template: "@if (active()) {\n  <ng-content />\n}\n",
      styles: [":host{display:block}\n"]
    }]
  }], () => [], {
    activeInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }],
    interval: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "interval",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
function toSlideLeft(fromState, toState) {
  return toState.left === true && toState.type === "slide";
}
function toSlideRight(fromState, toState) {
  return toState.left === false && toState.type === "slide";
}
function toFadeLeft(fromState, toState) {
  return toState.left === true && toState.type !== "slide";
}
function toFadeRight(fromState, toState) {
  return toState.left === false && toState.type !== "slide";
}
var slideAnimationLeft = animation(group([query(":leave", [animate("0.6s ease-in-out", style({
  transform: "translateX(-100%)"
}))], {
  optional: true
}), query(":enter", [style({
  transform: "translateX(100%)"
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
})]));
var slideAnimationRight = animation(group([query(":enter", [style({
  transform: "translateX(-100%)"
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
}), query(":leave", [animate("0.6s ease-in-out", style({
  transform: "translateX(100%)"
}))], {
  optional: true
})]));
var fadeAnimationLeft = animation(group([query(":leave", [animate("0.9s ease-in-out", style({
  zIndex: 0,
  opacity: 0
}))], {
  optional: true
}), query(":enter", [style({
  zIndex: 1,
  opacity: 1
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
})]));
var fadeAnimationRight = animation(group([query(":enter", [style({
  zIndex: 1,
  opacity: 1
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
}), query(":leave", [animate("0.9s ease-in-out", style({
  zIndex: 0,
  opacity: 0
}))], {
  optional: true
})]));
var carouselPlay = trigger("carouselPlay", [state("*", style({
  transform: "translateX(0)",
  display: "block",
  opacity: 1
})), transition(toFadeLeft, useAnimation(fadeAnimationLeft)), transition(toFadeRight, useAnimation(fadeAnimationRight)), transition(toSlideLeft, useAnimation(slideAnimationLeft)), transition(toSlideRight, useAnimation(slideAnimationRight))]);
var CarouselInnerComponent = class _CarouselInnerComponent {
  #carouselState = inject(CarouselState);
  activeIndex = signal(void 0, ...ngDevMode ? [{
    debugName: "activeIndex"
  }] : (
    /* istanbul ignore next */
    []
  ));
  animate = signal(true, ...ngDevMode ? [{
    debugName: "animate"
  }] : (
    /* istanbul ignore next */
    []
  ));
  interval = signal(0, ...ngDevMode ? [{
    debugName: "interval"
  }] : (
    /* istanbul ignore next */
    []
  ));
  slide = signal({
    left: true
  }, ...ngDevMode ? [{
    debugName: "slide"
  }] : (
    /* istanbul ignore next */
    []
  ));
  transition = signal("crossfade", ...ngDevMode ? [{
    debugName: "transition"
  }] : (
    /* istanbul ignore next */
    []
  ));
  slideType = computed(() => {
    return {
      left: this.slide().left,
      type: this.transition()
    };
  }, ...ngDevMode ? [{
    debugName: "slideType"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLive = computed(() => {
    return this.interval() ? "off" : "polite";
  }, ...ngDevMode ? [{
    debugName: "ariaLive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  contentItems = contentChildren(CarouselItemComponent, ...ngDevMode ? [{
    debugName: "contentItems"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #prevContentItems = signal([], ...ngDevMode ? [{
    debugName: "#prevContentItems"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngAfterContentInit() {
    this.setItems();
  }
  ngAfterContentChecked() {
    this.setItems();
    const state2 = this.#carouselState?.state;
    const nextIndex = state2?.activeItemIndex;
    const nextDirection = state2?.direction;
    if (this.activeIndex() !== nextIndex) {
      this.animate.set(state2?.animate ?? false);
      this.activeIndex.set(state2?.activeItemIndex);
      this.interval.set(state2?.interval ?? 0);
      this.slide.set({
        left: nextDirection === "next"
      });
      this.transition.set(state2?.transition ?? "slide");
    }
  }
  setItems() {
    const contentItems = this.contentItems();
    if (this.#prevContentItems() !== contentItems) {
      this.#prevContentItems.set([...contentItems]);
      this.#carouselState.setItems(contentItems);
    }
  }
  static \u0275fac = function CarouselInnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselInnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselInnerComponent,
    selectors: [["c-carousel-inner"]],
    contentQueries: function CarouselInnerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentItems, CarouselItemComponent, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "carousel-inner"],
    hostVars: 3,
    hostBindings: function CarouselInnerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@carouselPlay", ctx.slideType())("@.disabled", !ctx.animate());
        \u0275\u0275attribute("aria-live", ctx.ariaLive());
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CarouselInnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"],
    data: {
      animation: [carouselPlay]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselInnerComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-inner",
      animations: [carouselPlay],
      template: "<ng-content />",
      host: {
        class: "carousel-inner",
        "[@carouselPlay]": "slideType()",
        "[@.disabled]": "!animate()",
        "[attr.aria-live]": "ariaLive()"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    contentItems: [{
      type: ContentChildren,
      args: [forwardRef(() => CarouselItemComponent), {
        isSignal: true
      }]
    }]
  });
})();
var CarouselModule = class _CarouselModule {
  static forRoot() {
    return {
      ngModule: _CarouselModule,
      providers: []
    };
  }
  static \u0275fac = function CarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule,
    imports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent],
    exports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [CarouselService, CarouselState, CarouselConfig]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent],
      providers: [CarouselService, CarouselState, CarouselConfig],
      exports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent]
    }]
  }], null, null);
})();
var DropdownDividerDirective = class _DropdownDividerDirective {
  static \u0275fac = function DropdownDividerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownDividerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DropdownDividerDirective,
    selectors: [["", "cDropdownDivider", ""]],
    hostAttrs: [1, "dropdown-divider"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownDividerDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownDivider]",
      host: {
        class: "dropdown-divider"
      }
    }]
  }], null, null);
})();
var DropdownHeaderDirective = class _DropdownHeaderDirective {
  static \u0275fac = function DropdownHeaderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownHeaderDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DropdownHeaderDirective,
    selectors: [["", "cDropdownHeader", ""]],
    hostAttrs: [1, "dropdown-header"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownHeaderDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownHeader]",
      host: {
        class: "dropdown-header"
      }
    }]
  }], null, null);
})();
var DropdownService = class _DropdownService {
  #dropdownState = new BehaviorSubject({});
  dropdownState$ = this.#dropdownState.asObservable();
  toggle(state2) {
    this.#dropdownState.next(state2);
  }
  static \u0275fac = function DropdownService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DropdownService,
    factory: _DropdownService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DropdownMenuDirective = class _DropdownMenuDirective {
  #destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  #dropdownService = inject(DropdownService);
  #focusKeyManager;
  /**
   * Set alignment of dropdown menu.
   * @return 'start' | 'end'
   */
  alignment = input(...ngDevMode ? [void 0, {
    debugName: "alignment"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Toggle the visibility of dropdown menu component.
   * @return boolean
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  visible = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.visibleInput,
    computation: (value) => value
  }));
  hostClasses = computed(() => {
    const alignment = this.alignment();
    const visible = this.visible();
    return {
      "dropdown-menu": true,
      [`dropdown-menu-${alignment}`]: !!alignment,
      show: visible
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostStyles = computed(() => {
    const visible = this.visible();
    return {
      visibility: visible ? null : "",
      display: visible ? null : ""
    };
  }, ...ngDevMode ? [{
    debugName: "hostStyles"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onKeyDown($event) {
    if (!this.visible()) {
      return;
    }
    if (["Space", "ArrowDown"].includes($event.code)) {
      $event.preventDefault();
    }
    this.#focusKeyManager.onKeydown($event);
  }
  onKeyUp($event) {
    if (!this.visible()) {
      return;
    }
    if (["Tab"].includes($event.key)) {
      if (this.#focusKeyManager.activeItem) {
        $event.shiftKey ? this.#focusKeyManager.setPreviousItemActive() : this.#focusKeyManager.setNextItemActive();
      } else {
        this.#focusKeyManager.setFirstItemActive();
      }
    }
  }
  dropdownItemsContent = contentChildren(forwardRef(() => DropdownItemDirective), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "dropdownItemsContent"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: true
  }));
  items$ = toObservable(this.dropdownItemsContent);
  ngAfterContentInit() {
    this.focusKeyManagerInit();
    this.items$.pipe(tap((change) => {
      this.focusKeyManagerInit();
    }), takeUntilDestroyed(this.#destroyRef)).subscribe();
  }
  ngOnInit() {
    this.#dropdownService.dropdownState$.pipe(tap((state2) => {
      if ("visible" in state2) {
        this.visible.update((visible) => state2.visible === "toggle" ? !visible : state2.visible);
        if (!this.visible()) {
          this.#focusKeyManager?.setActiveItem(-1);
        }
      }
    }), takeUntilDestroyed(this.#destroyRef)).subscribe();
  }
  focusKeyManagerInit() {
    this.#focusKeyManager = new FocusKeyManager(this.dropdownItemsContent()).withHomeAndEnd().withPageUpDown().withWrap().skipPredicate((dropdownItem) => dropdownItem.disabled === true);
  }
  static \u0275fac = function DropdownMenuDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownMenuDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DropdownMenuDirective,
    selectors: [["", "cDropdownMenu", ""]],
    contentQueries: function DropdownMenuDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.dropdownItemsContent, DropdownItemDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "dropdown-menu"],
    hostVars: 4,
    hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function DropdownMenuDirective_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("keyup", function DropdownMenuDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyUp($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.hostStyles());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      alignment: [1, "alignment"],
      visibleInput: [1, "visible", "visibleInput"]
    },
    exportAs: ["cDropdownMenu"],
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: ThemeDirective,
      inputs: ["dark", "dark"]
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownMenu]",
      exportAs: "cDropdownMenu",
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        class: "dropdown-menu",
        "[class]": "hostClasses()",
        "[style]": "hostStyles()",
        "(keydown)": "onKeyDown($event)",
        "(keyup)": "onKeyUp($event)"
      }
    }]
  }], null, {
    alignment: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alignment",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    dropdownItemsContent: [{
      type: ContentChildren,
      args: [forwardRef(() => DropdownItemDirective), __spreadProps(__spreadValues({}, {
        descendants: true
      }), {
        isSignal: true
      })]
    }]
  });
})();
var DropdownToken = class {
};
var DropdownToggleDirective = class _DropdownToggleDirective {
  // injections
  #destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  #dropdownService = inject(DropdownService);
  dropdown = inject(DropdownToken, {
    optional: true
  });
  /**
   * Reference to dropdown component.
   * @return DropdownComponent | undefined
   * @default undefined
   */
  dropdownComponent = input(...ngDevMode ? [void 0, {
    debugName: "dropdownComponent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Disables the toggler.
   * @return boolean
   * @default false
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Enables pseudo element caret on toggler.
   * @return boolean
   */
  caret = input(true, ...ngDevMode ? [{
    debugName: "caret"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Create split button dropdowns with virtually the same markup as single button dropdowns,
   * but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
   * @return boolean
   * @default false
   */
  split = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "split"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    return {
      "dropdown-toggle": this.caret(),
      "dropdown-toggle-split": this.split(),
      disabled: this.disabled()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #ariaExpanded = signal(false, ...ngDevMode ? [{
    debugName: "#ariaExpanded"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get ariaExpanded() {
    return this.#ariaExpanded();
  }
  onClick($event) {
    $event.preventDefault();
    !this.disabled() && this.#dropdownService.toggle({
      visible: "toggle",
      dropdown: this.dropdown
    });
  }
  ngAfterViewInit() {
    const dropdownComponent = this.dropdownComponent();
    if (dropdownComponent) {
      this.dropdown = dropdownComponent;
      this.#dropdownService = dropdownComponent?.dropdownService;
    }
    if (this.dropdown) {
      const dropdown = this.dropdown;
      dropdown?.visibleChange?.subscribe((visible) => {
        this.#ariaExpanded.set(visible);
      });
    }
  }
  static \u0275fac = function DropdownToggleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownToggleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DropdownToggleDirective,
    selectors: [["", "cDropdownToggle", ""]],
    hostVars: 3,
    hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DropdownToggleDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-expanded", ctx.ariaExpanded);
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      dropdownComponent: [1, "dropdownComponent"],
      disabled: [1, "disabled"],
      caret: [1, "caret"],
      split: [1, "split"]
    },
    exportAs: ["cDropdownToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: DropdownToken,
      useExisting: forwardRef(() => DropdownComponent)
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownToggle]",
      providers: [{
        provide: DropdownToken,
        useExisting: forwardRef(() => DropdownComponent)
      }],
      exportAs: "cDropdownToggle",
      host: {
        "[class]": "hostClasses()",
        "[attr.aria-expanded]": "ariaExpanded",
        "(click)": "onClick($event)"
      }
    }]
  }], null, {
    dropdownComponent: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dropdownComponent",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    caret: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "caret",
        required: false
      }]
    }],
    split: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "split",
        required: false
      }]
    }]
  });
})();
var DropdownComponent = class _DropdownComponent {
  #destroyRef = inject(DestroyRef);
  #document = inject(DOCUMENT);
  #elementRef = inject(ElementRef);
  #renderer = inject(Renderer2);
  #ngZone = inject(NgZone);
  #changeDetectorRef = inject(ChangeDetectorRef);
  dropdownService = inject(DropdownService);
  constructor() {
    this.dropdownStateSubscribe();
  }
  /**
   * Set alignment of dropdown menu.
   * @return {'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}}
   */
  alignment = input(...ngDevMode ? [void 0, {
    debugName: "alignment"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Automatically close dropdown when clicking outside the dropdown menu.
   */
  autoClose = input(true, ...ngDevMode ? [{
    debugName: "autoClose"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets a specified  direction and location of the dropdown menu.
   * @return 'dropup' | 'dropend' | 'dropstart'
   */
  direction = input(...ngDevMode ? [void 0, {
    debugName: "direction"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers
   * that may have flipped or altered the originally provided placement property.
   * @return Placement
   */
  placement = input("bottom-start", ...ngDevMode ? [{
    debugName: "placement"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * If you want to disable dynamic positioning set this property to `false`.
   * @return boolean
   * @default true
   */
  popper = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "popper"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Optional popper Options object, placement prop takes precedence over
   * @return Partial<Options>
   */
  popperOptionsInput = input({}, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "popperOptionsInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "popperOptions"
  }));
  #popperOptionsEffect = effect(() => {
    this.popperOptions = __spreadValues(__spreadValues({}, untracked(this.#popperOptions)), this.popperOptionsInput());
  }, ...ngDevMode ? [{
    debugName: "#popperOptionsEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  set popperOptions(value) {
    this.#popperOptions.update((popperOptions) => __spreadValues(__spreadValues({}, popperOptions), value));
  }
  get popperOptions() {
    let placement = this.placement();
    switch (this.direction()) {
      case "dropup": {
        placement = "top-start";
        break;
      }
      case "dropend": {
        placement = "right-start";
        break;
      }
      case "dropstart": {
        placement = "left-start";
        break;
      }
      case "center": {
        placement = "bottom";
        break;
      }
      case "dropup-center": {
        placement = "top";
        break;
      }
    }
    if (this.alignment() === "end") {
      placement = "bottom-end";
    }
    this.#popperOptions.update((value) => __spreadProps(__spreadValues({}, value), {
      placement
    }));
    return this.#popperOptions();
  }
  #popperOptions = signal({
    placement: this.placement(),
    modifiers: [],
    strategy: "absolute"
  }, ...ngDevMode ? [{
    debugName: "#popperOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set the dropdown variant to a btn-group, dropdown, input-group, and nav-item.
   */
  variant = input("dropdown", ...ngDevMode ? [{
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Toggle the visibility of dropdown menu component.
   * @return boolean
   * @default false
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  visible = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.visibleInput,
    computation: (value) => value
  }));
  #visibleEffect = effect(() => {
    const visible = this.visible();
    untracked(() => {
      this.activeTrap = visible;
      visible ? this.createPopperInstance() : this.destroyPopperInstance();
      this.setVisibleState(visible);
      this.visibleChange?.emit(visible);
    });
  }, ...ngDevMode ? [{
    debugName: "#visibleEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  visibleChange = output();
  dropdownContext = {
    $implicit: this.visible()
  };
  _toggler = contentChild(DropdownToggleDirective, ...ngDevMode ? [{
    debugName: "_toggler"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _menu = contentChild(DropdownMenuDirective, ...ngDevMode ? [{
    debugName: "_menu"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _menuElementRef = contentChild(DropdownMenuDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_menuElementRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  activeTrap = false;
  popperInstance;
  listeners = [];
  hostClasses = computed(() => {
    const direction = this.direction();
    const variant = this.variant();
    return {
      dropdown: (variant === "dropdown" || variant === "nav-item") && !direction,
      [`${direction}`]: !!direction,
      [`${variant}`]: !!variant,
      dropup: direction === "dropup" || direction === "dropup-center",
      show: this.visible()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  // todo: find better solution
  hostStyle = computed(() => {
    return this.variant() === "input-group" ? {
      display: "contents"
    } : {};
  }, ...ngDevMode ? [{
    debugName: "hostStyle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  clickedTarget;
  onHostClick($event) {
    this.clickedTarget = $event.target;
  }
  dropdownStateSubscribe() {
    this.dropdownService.dropdownState$.pipe(filter((state2) => {
      return this === state2.dropdown;
    }), takeUntilDestroyed(this.#destroyRef)).subscribe((state2) => {
      if ("visible" in state2) {
        state2?.visible === "toggle" ? this.toggleDropdown() : this.visible.set(state2.visible);
      }
    });
  }
  toggleDropdown() {
    this.visible.update((visible) => !visible);
  }
  onClick(event) {
    if (!this._toggler()?.elementRef.nativeElement.contains(event.target?.closest("[cDropdownToggle]"))) {
      this.toggleDropdown();
    }
  }
  #togglerEffect = effect(() => {
    const variant = this.variant();
    const _toggler = this._toggler();
    if (variant === "nav-item" && _toggler) {
      this.#renderer.addClass(_toggler.elementRef.nativeElement, "nav-link");
    }
  }, ...ngDevMode ? [{
    debugName: "#togglerEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.setVisibleState(this.visible());
  }
  ngOnDestroy() {
    this.clearListeners();
    this.destroyPopperInstance();
  }
  setVisibleState(value) {
    this.dropdownService.toggle({
      visible: value,
      dropdown: this
    });
  }
  // todo: turn off popper in navbar-nav
  createPopperInstance() {
    const _toggler = this._toggler();
    const _menu = this._menu();
    if (_toggler && _menu) {
      this.#ngZone.runOutsideAngular(() => {
        _menu.elementRef.nativeElement.style.visibility = "hidden";
        _menu.elementRef.nativeElement.style.display = "block";
        if (this.popper()) {
          this.popperInstance = createPopper(_toggler.elementRef.nativeElement, _menu.elementRef.nativeElement, __spreadValues({}, this.popperOptions));
        }
        this.#ngZone.run(() => {
          this.setListeners();
          this.#changeDetectorRef.markForCheck();
          this.#changeDetectorRef.detectChanges();
        });
      });
    }
  }
  destroyPopperInstance() {
    this.clearListeners();
    this.popperInstance?.destroy();
    this.popperInstance = void 0;
    this.#changeDetectorRef.markForCheck();
  }
  setListeners() {
    this.listeners.push(this.#renderer.listen(this.#document, "click", (event) => {
      const target = event.target;
      if (this._menuElementRef()?.nativeElement.contains(event.target)) {
        this.clickedTarget = target;
      }
      if (this._toggler()?.elementRef.nativeElement.contains(event.target)) {
        return;
      }
      const autoClose = this.autoClose();
      if (autoClose === true) {
        this.setVisibleState(false);
        return;
      }
      if (this.clickedTarget === target && autoClose === "inside") {
        this.setVisibleState(false);
        return;
      }
      if (this.clickedTarget !== target && autoClose === "outside") {
        this.setVisibleState(false);
        return;
      }
    }));
    this.listeners.push(this.#renderer.listen(this.#elementRef.nativeElement, "keyup", (event) => {
      if (event.key === "Escape" && this.autoClose() !== false) {
        event.stopPropagation();
        this.setVisibleState(false);
        return;
      }
    }));
    this.listeners.push(this.#renderer.listen(this.#document, "keyup", (event) => {
      if (event.key === "Tab" && this.autoClose() !== false && !this.#elementRef.nativeElement.contains(event.target)) {
        this.setVisibleState(false);
        return;
      }
    }));
  }
  clearListeners() {
    this.listeners.forEach((unListen) => {
      unListen();
    });
    this.listeners.fill(void 0);
    this.listeners = [];
  }
  static \u0275fac = function DropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DropdownComponent,
    selectors: [["c-dropdown"]],
    contentQueries: function DropdownComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx._toggler, DropdownToggleDirective, 5)(dirIndex, ctx._menu, DropdownMenuDirective, 5)(dirIndex, ctx._menuElementRef, DropdownMenuDirective, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    },
    hostVars: 4,
    hostBindings: function DropdownComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DropdownComponent_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.hostStyle());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      alignment: [1, "alignment"],
      autoClose: [1, "autoClose"],
      direction: [1, "direction"],
      placement: [1, "placement"],
      popper: [1, "popper"],
      popperOptionsInput: [1, "popperOptions", "popperOptionsInput"],
      variant: [1, "variant"],
      visibleInput: [1, "visible", "visibleInput"]
    },
    outputs: {
      visibleChange: "visibleChange"
    },
    exportAs: ["cDropdown"],
    features: [\u0275\u0275ProvidersFeature([DropdownService]), \u0275\u0275HostDirectivesFeature([{
      directive: ThemeDirective,
      inputs: ["dark", "dark"]
    }])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function DropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [".dropdown[_nghost-%COMP%]:not(.btn-group), .dropdown   [_nghost-%COMP%]:not(.btn-group), .dropup[_nghost-%COMP%]:not(.btn-group), .dropup   [_nghost-%COMP%]:not(.btn-group){display:block}.dropstart[_nghost-%COMP%]:not(.btn-group), .dropstart   [_nghost-%COMP%]:not(.btn-group), .dropend[_nghost-%COMP%]:not(.btn-group), .dropend   [_nghost-%COMP%]:not(.btn-group){display:inline-flex}.input-group   .dropdown[_nghost-%COMP%]:first-child  :first-child{border-start-end-radius:0;border-end-end-radius:0}.input-group   .dropdown[_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-start-start-radius:0;border-end-start-radius:0}.input-group   .dropdown[_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-start-end-radius:0;border-end-end-radius:0}.input-group   .dropdown[_nghost-%COMP%]:last-child  :first-child{border-start-start-radius:0;border-end-start-radius:0}.input-group   .dropdown[_nghost-%COMP%]:last-child  :first-child:not(:only-of-type){border-start-end-radius:0;border-end-end-radius:0}.input-group   .dropdown[_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-start-start-radius:0;border-end-start-radius:0}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{
      selector: "c-dropdown",
      template: "<ng-content />",
      exportAs: "cDropdown",
      providers: [DropdownService],
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        "[class]": "hostClasses()",
        "[style]": "hostStyle()",
        "(click)": "onHostClick($event)"
      },
      styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(.input-group) :host.dropdown:first-child::ng-deep :first-child{border-start-end-radius:0;border-end-end-radius:0}:host-context(.input-group) :host.dropdown:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-start-start-radius:0;border-end-start-radius:0}:host-context(.input-group) :host.dropdown:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-start-end-radius:0;border-end-end-radius:0}:host-context(.input-group) :host.dropdown:last-child::ng-deep :first-child{border-start-start-radius:0;border-end-start-radius:0}:host-context(.input-group) :host.dropdown:last-child::ng-deep :first-child:not(:only-of-type){border-start-end-radius:0;border-end-end-radius:0}:host-context(.input-group) :host.dropdown:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-start-start-radius:0;border-end-start-radius:0}\n"]
    }]
  }], () => [], {
    alignment: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alignment",
        required: false
      }]
    }],
    autoClose: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "autoClose",
        required: false
      }]
    }],
    direction: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "direction",
        required: false
      }]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    popper: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "popper",
        required: false
      }]
    }],
    popperOptionsInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "popperOptions",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }],
    _toggler: [{
      type: ContentChild,
      args: [forwardRef(() => DropdownToggleDirective), {
        isSignal: true
      }]
    }],
    _menu: [{
      type: ContentChild,
      args: [forwardRef(() => DropdownMenuDirective), {
        isSignal: true
      }]
    }],
    _menuElementRef: [{
      type: ContentChild,
      args: [forwardRef(() => DropdownMenuDirective), __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var DropdownItemDirective = class _DropdownItemDirective {
  #elementRef = inject(ElementRef);
  #dropdownService = inject(DropdownService);
  dropdown = inject(DropdownComponent, {
    optional: true
  });
  /**
   * Set active state to a dropdown-item.
   * @return boolean
   * @default undefined
   */
  active = input(...ngDevMode ? [void 0, {
    debugName: "active"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Configure dropdown-item close dropdown behavior.
   * @return boolean
   * @default true
   */
  autoClose = input(true, ...ngDevMode ? [{
    debugName: "autoClose"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Disables a dropdown-item.
   * @return boolean
   * @default undefined
   */
  disabledInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabledInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "disabled"
  }));
  #disabled = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "#disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.disabledInput,
    computation: (value) => value
  }));
  set disabled(value) {
    this.#disabled.set(value);
  }
  get disabled() {
    return this.#disabled();
  }
  role = input("list-item", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  tabIndexInput = input("0", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabIndexInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "tabIndex"
  }));
  tabIndex = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabIndex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.tabIndexInput,
    computation: (value) => this.disabled ? "-1" : value
  }));
  focus(origin) {
    this.#elementRef?.nativeElement?.focus();
  }
  getLabel() {
    return this.#elementRef?.nativeElement?.textContent.trim();
  }
  ariaCurrent = computed(() => {
    return this.active() ? "true" : null;
  }, ...ngDevMode ? [{
    debugName: "ariaCurrent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return {
      "dropdown-item": true,
      active: this.active(),
      disabled: this.disabled
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onClick($event) {
    this.handleInteraction();
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      this.handleInteraction();
    }
  }
  handleInteraction() {
    if (this.autoClose()) {
      this.#dropdownService.toggle({
        visible: "toggle",
        dropdown: this.dropdown
      });
    }
  }
  static \u0275fac = function DropdownItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownItemDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DropdownItemDirective,
    selectors: [["", "cDropdownItem", ""]],
    hostAttrs: [1, "dropdown-item"],
    hostVars: 6,
    hostBindings: function DropdownItemDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DropdownItemDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keyup", function DropdownItemDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyUp($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", ctx.tabIndex())("aria-current", ctx.ariaCurrent())("aria-disabled", ctx.disabled || null)("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      active: [1, "active"],
      autoClose: [1, "autoClose"],
      disabledInput: [1, "disabled", "disabledInput"],
      role: [1, "role"],
      tabIndexInput: [1, "tabIndex", "tabIndexInput"]
    },
    exportAs: ["cDropdownItem"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownItem]",
      exportAs: "cDropdownItem",
      host: {
        class: "dropdown-item",
        "[class]": "hostClasses()",
        "[attr.tabindex]": "tabIndex()",
        "[attr.aria-current]": "ariaCurrent()",
        "[attr.aria-disabled]": "disabled || null",
        "[attr.role]": "role()",
        "(click)": "onClick($event)",
        "(keyup)": "onKeyUp($event)"
      }
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }],
    autoClose: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "autoClose",
        required: false
      }]
    }],
    disabledInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    tabIndexInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tabIndex",
        required: false
      }]
    }]
  });
})();
var DropdownItemPlainDirective = class _DropdownItemPlainDirective {
  static \u0275fac = function DropdownItemPlainDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownItemPlainDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DropdownItemPlainDirective,
    selectors: [["", "cDropdownItemPlain", ""]],
    hostAttrs: [1, "dropdown-item-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemPlainDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownItemPlain]",
      host: {
        class: "dropdown-item-text"
      }
    }]
  }], null, null);
})();
var DropdownCloseDirective = class _DropdownCloseDirective {
  #dropdownService = inject(DropdownService);
  dropdown = inject(DropdownComponent, {
    optional: true
  });
  /**
   * Disables a dropdown-close directive.
   * @return boolean
   * @default false
   */
  disabledInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabledInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "disabled"
  }));
  disabled = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.disabledInput,
    computation: (value) => value || null
  }));
  dropdownComponent = input(...ngDevMode ? [void 0, {
    debugName: "dropdownComponent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngAfterViewInit() {
    const dropdownComponent = this.dropdownComponent();
    if (dropdownComponent) {
      this.dropdown = dropdownComponent;
      this.#dropdownService = dropdownComponent?.dropdownService;
    }
  }
  tabIndexInput = input(null, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabIndexInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "tabIndex"
  }));
  tabIndex = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabIndex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.tabIndexInput,
    computation: (value) => this.disabled() ? "-1" : value
  }));
  onClick($event) {
    this.handleToggle();
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      this.handleToggle();
    }
  }
  handleToggle() {
    if (!this.disabled()) {
      this.#dropdownService.toggle({
        visible: false,
        dropdown: this.dropdown
      });
    }
  }
  static \u0275fac = function DropdownCloseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownCloseDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DropdownCloseDirective,
    selectors: [["", "cDropdownClose", ""]],
    hostVars: 4,
    hostBindings: function DropdownCloseDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DropdownCloseDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keyup", function DropdownCloseDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyUp($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.disabled() || null)("tabindex", ctx.tabIndex());
        \u0275\u0275classProp("disabled", ctx.disabled());
      }
    },
    inputs: {
      disabledInput: [1, "disabled", "disabledInput"],
      dropdownComponent: [1, "dropdownComponent"],
      tabIndexInput: [1, "tabIndex", "tabIndexInput"]
    },
    exportAs: ["cDropdownClose"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownClose]",
      exportAs: "cDropdownClose",
      host: {
        "[class.disabled]": "disabled()",
        "[attr.aria-disabled]": "disabled() || null",
        "[attr.tabindex]": "tabIndex()",
        "(click)": "onClick($event)",
        "(keyup)": "onKeyUp($event)"
      }
    }]
  }], null, {
    disabledInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    dropdownComponent: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dropdownComponent",
        required: false
      }]
    }],
    tabIndexInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tabIndex",
        required: false
      }]
    }]
  });
})();
var DropdownModule = class _DropdownModule {
  static \u0275fac = function DropdownModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DropdownModule,
    imports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
    exports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DropdownService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
      exports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
      providers: [DropdownService]
    }]
  }], null, null);
})();
var FooterComponent = class _FooterComponent {
  /**
   * Place footer in non-static positions. [docs]
   * @type Positions
   */
  position = input(...ngDevMode ? [void 0, {
    debugName: "position"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default role for footer. [docs]
   * @return string
   * @default 'contentinfo'
   */
  role = input("contentinfo", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const position = this.position();
    return {
      footer: true,
      [`footer-${position}`]: !!position
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FooterComponent,
    selectors: [["c-footer"], ["", "cFooter", ""]],
    hostAttrs: [1, "footer"],
    hostVars: 3,
    hostBindings: function FooterComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      position: [1, "position"],
      role: [1, "role"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "c-footer, [cFooter]",
      template: "<ng-content />",
      host: {
        class: "footer",
        "[class]": "hostClasses()",
        "[attr.role]": "role()"
      }
    }]
  }], null, {
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var FooterModule = class _FooterModule {
  static \u0275fac = function FooterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FooterModule,
    imports: [FooterComponent],
    exports: [FooterComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterModule, [{
    type: NgModule,
    args: [{
      imports: [FooterComponent],
      exports: [FooterComponent]
    }]
  }], null, null);
})();
var FormDirective = class _FormDirective {
  /**
   * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
   * @return boolean
   * @default false
   */
  validated = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "validated"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  static \u0275fac = function FormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormDirective,
    selectors: [["form", "cForm", ""]],
    hostVars: 2,
    hostBindings: function FormDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("was-validated", ctx.validated());
      }
    },
    inputs: {
      validated: [1, "validated"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDirective, [{
    type: Directive,
    args: [{
      selector: "form[cForm]",
      host: {
        "[class.was-validated]": "validated()"
      }
    }]
  }], null, {
    validated: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "validated",
        required: false
      }]
    }]
  });
})();
var FormCheckLabelDirective = class _FormCheckLabelDirective {
  static \u0275fac = function FormCheckLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormCheckLabelDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormCheckLabelDirective,
    selectors: [["label", "cFormCheckLabel", ""]],
    hostAttrs: [1, "form-check-label"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckLabelDirective, [{
    type: Directive,
    args: [{
      selector: "label[cFormCheckLabel]",
      host: {
        class: "form-check-label"
      }
    }]
  }], null, null);
})();
var FormCheckComponent = class _FormCheckComponent {
  static ngAcceptInputType_inline;
  static ngAcceptInputType_reverse;
  static ngAcceptInputType_switch;
  /**
   * Group checkboxes or radios on the same horizontal row.
   * @default false
   */
  inline = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "inline"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Put checkboxes or radios on the opposite side.
   * @default false
   * @since 4.4.7
   */
  reverse = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "reverse"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Size the component large or extra large. Works only with `[switch]="true"` [docs]
   * @default undefined
   */
  sizing = input(...ngDevMode ? [void 0, {
    debugName: "sizing"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Render a toggle switch on for checkbox.
   * @returns boolean
   * @default false
   */
  switch = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "switch"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  formCheckLabel = contentChild(FormCheckLabelDirective, ...ngDevMode ? [{
    debugName: "formCheckLabel"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const sizing = this.sizing();
    const isSwitch = this.switch();
    return {
      "form-check": !!this.formCheckLabel(),
      "form-switch": isSwitch,
      [`form-switch-${sizing}`]: isSwitch && !!sizing,
      "form-check-inline": this.inline(),
      "form-check-reverse": this.reverse()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function FormCheckComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormCheckComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FormCheckComponent,
    selectors: [["c-form-check"]],
    contentQueries: function FormCheckComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.formCheckLabel, FormCheckLabelDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function FormCheckComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      inline: [1, "inline"],
      reverse: [1, "reverse"],
      sizing: [1, "sizing"],
      switch: [1, "switch"]
    },
    exportAs: ["cFormCheck"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function FormCheckComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckComponent, [{
    type: Component,
    args: [{
      selector: "c-form-check",
      template: "<ng-content />",
      exportAs: "cFormCheck",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    inline: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inline",
        required: false
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "reverse",
        required: false
      }]
    }],
    sizing: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "sizing",
        required: false
      }]
    }],
    switch: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "switch",
        required: false
      }]
    }],
    formCheckLabel: [{
      type: ContentChild,
      args: [forwardRef(() => FormCheckLabelDirective), {
        isSignal: true
      }]
    }]
  });
})();
var FormControlDirective = class _FormControlDirective {
  #hostElement = inject(ElementRef);
  /**
   * Size the component small or large.
   * @default undefined
   */
  sizing = input(...ngDevMode ? [void 0, {
    debugName: "sizing"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set component validation state to valid.
   * @default undefined
   */
  valid = input(...ngDevMode ? [void 0, {
    debugName: "valid"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Specifies the type of input element.
   */
  type = input("text", ...ngDevMode ? [{
    debugName: "type"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly`
   * @default false
   */
  plaintext = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "plaintext"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    const type = this.type();
    const isRange = type === "range";
    const plaintext = this.plaintext();
    const sizing = this.sizing();
    const valid = this.valid();
    return {
      "form-control": !isRange && !plaintext,
      "form-control-plaintext": !isRange && plaintext,
      "form-control-color": type === "color",
      "form-range": isRange,
      [`form-control-${sizing}`]: !!sizing && !isRange,
      "is-valid": valid === true,
      "is-invalid": valid === false
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get hostTag() {
    return this.#hostElement.nativeElement.tagName;
  }
  ngOnInit() {
    const hostTag = this.hostTag.toLowerCase();
    if (hostTag !== "input" && hostTag !== "textarea") {
      console.warn(`CoreUI [cFormControl] works with '<input>' and '<textarea>' - not with '<${hostTag}>'`);
    }
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["input", "cFormControl", ""], ["textarea", "cFormControl", ""]],
    hostVars: 3,
    hostBindings: function FormControlDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("type", ctx.type());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      sizing: [1, "sizing"],
      valid: [1, "valid"],
      type: [1, "type"],
      plaintext: [1, "plaintext"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "input[cFormControl], textarea[cFormControl]",
      host: {
        "[class]": "hostClasses()",
        "[attr.type]": "type()"
      }
    }]
  }], null, {
    sizing: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "sizing",
        required: false
      }]
    }],
    valid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "valid",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    plaintext: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "plaintext",
        required: false
      }]
    }]
  });
})();
var FormCheckInputDirective = class _FormCheckInputDirective {
  static ngAcceptInputType_indeterminate;
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  /**
   * Specifies the type of component.
   * @default 'checkbox'
   */
  type = input("checkbox", ...ngDevMode ? [{
    debugName: "type"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set component indeterminate state.
   * @default false
   */
  indeterminateInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "indeterminateInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "indeterminate"
  }));
  #indeterminate = linkedSignal(this.indeterminateInput, ...ngDevMode ? [{
    debugName: "#indeterminate"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #indeterminateEffect = effect(() => {
    if (this.type() === "checkbox") {
      const indeterminate = this.#indeterminate();
      const htmlInputElement = this.#hostElement.nativeElement;
      if (indeterminate) {
        this.#renderer.setProperty(htmlInputElement, "checked", false);
      }
      this.#renderer.setProperty(htmlInputElement, "indeterminate", indeterminate);
    }
  }, ...ngDevMode ? [{
    debugName: "#indeterminateEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get indeterminate() {
    return this.#indeterminate();
  }
  /**
   * Set component validation state to valid.
   * @default undefined
   */
  valid = input(...ngDevMode ? [void 0, {
    debugName: "valid"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const valid = this.valid();
    return {
      "form-check-input": true,
      "is-valid": valid === true,
      "is-invalid": valid === false
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get checked() {
    return this.#hostElement?.nativeElement?.checked;
  }
  static \u0275fac = function FormCheckInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormCheckInputDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormCheckInputDirective,
    selectors: [["input", "cFormCheckInput", ""]],
    hostAttrs: [1, "form-check-input"],
    hostVars: 3,
    hostBindings: function FormCheckInputDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("type", ctx.type());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      type: [1, "type"],
      indeterminateInput: [1, "indeterminate", "indeterminateInput"],
      valid: [1, "valid"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[cFormCheckInput]",
      host: {
        class: "form-check-input",
        "[class]": "hostClasses()",
        "[attr.type]": "type()"
      }
    }]
  }], null, {
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    indeterminateInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "indeterminate",
        required: false
      }]
    }],
    valid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "valid",
        required: false
      }]
    }]
  });
})();
var FormFeedbackComponent = class _FormFeedbackComponent {
  /**
   * If your form layout allows it, you can display validation feedback in a styled tooltip.
   * @default false
   */
  tooltip = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tooltip"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Set component validation state to valid.
   * @default undefined
   */
  valid = input(...ngDevMode ? [void 0, {
    debugName: "valid"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const status = this.valid() === true ? "valid" : "invalid";
    const type = this.tooltip() ? "tooltip" : "feedback";
    return {
      [`${status}-${type}`]: true
      // 'valid-feedback': valid === true && !tooltip,
      // 'valid-tooltip': valid === true && tooltip,
      // 'invalid-feedback': valid !== true && !tooltip,
      // 'invalid-tooltip': valid !== true && tooltip
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function FormFeedbackComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFeedbackComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FormFeedbackComponent,
    selectors: [["c-form-feedback"]],
    hostVars: 2,
    hostBindings: function FormFeedbackComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      tooltip: [1, "tooltip"],
      valid: [1, "valid"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function FormFeedbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFeedbackComponent, [{
    type: Component,
    args: [{
      selector: "c-form-feedback",
      template: "<ng-content />",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    tooltip: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltip",
        required: false
      }]
    }],
    valid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "valid",
        required: false
      }]
    }]
  });
})();
var FormFloatingDirective = class _FormFloatingDirective {
  /**
   * Enable floating labels
   * @dafault boolean
   */
  floating = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "floating"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "cFormFloating"
  }));
  static \u0275fac = function FormFloatingDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFloatingDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormFloatingDirective,
    selectors: [["", "cFormFloating", ""]],
    hostVars: 2,
    hostBindings: function FormFloatingDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("form-floating", ctx.floating());
      }
    },
    inputs: {
      floating: [1, "cFormFloating", "floating"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFloatingDirective, [{
    type: Directive,
    args: [{
      selector: "[cFormFloating]",
      host: {
        "[class.form-floating]": "floating()"
      }
    }]
  }], null, {
    floating: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cFormFloating",
        required: false
      }]
    }]
  });
})();
var FormLabelDirective = class _FormLabelDirective {
  /**
   * For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls.
   * @default ''
   */
  col = input("", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "col"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cLabel"
  }));
  /**
   * Size the label small or large.
   * @default ''
   */
  sizing = input(...ngDevMode ? [void 0, {
    debugName: "sizing"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const col = this.col();
    const sizing = this.sizing();
    return {
      "form-label": true,
      "col-form-label": col === "col",
      [`col-form-label-${sizing}`]: !!sizing && col === "col"
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function FormLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormLabelDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormLabelDirective,
    selectors: [["", "cLabel", ""]],
    hostAttrs: [1, "form-label"],
    hostVars: 2,
    hostBindings: function FormLabelDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      col: [1, "cLabel", "col"],
      sizing: [1, "sizing"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[cLabel]",
      host: {
        class: "form-label",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    col: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cLabel",
        required: false
      }]
    }],
    sizing: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "sizing",
        required: false
      }]
    }]
  });
})();
var FormSelectDirective = class _FormSelectDirective {
  /**
   * Size the component small or large.
   * @default undefined
   */
  sizing = input(...ngDevMode ? [void 0, {
    debugName: "sizing"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set component validation state to valid.
   * @default undefined
   */
  valid = input(...ngDevMode ? [void 0, {
    debugName: "valid"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const sizing = this.sizing();
    const valid = this.valid();
    return {
      "form-select": true,
      [`form-select-${sizing}`]: !!sizing,
      "is-valid": valid === true,
      "is-invalid": valid === false
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function FormSelectDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormSelectDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormSelectDirective,
    selectors: [["select", "cSelect", ""]],
    hostAttrs: [1, "form-select"],
    hostVars: 2,
    hostBindings: function FormSelectDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      sizing: [1, "sizing"],
      valid: [1, "valid"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSelectDirective, [{
    type: Directive,
    args: [{
      selector: "select[cSelect]",
      host: {
        class: "form-select",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    sizing: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "sizing",
        required: false
      }]
    }],
    valid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "valid",
        required: false
      }]
    }]
  });
})();
var FormTextDirective = class _FormTextDirective {
  static \u0275fac = function FormTextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormTextDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormTextDirective,
    selectors: [["", "cFormText", ""]],
    hostAttrs: [1, "form-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cFormText]",
      host: {
        class: "form-text"
      }
    }]
  }], null, null);
})();
var InputGroupComponent = class _InputGroupComponent {
  /**
   * Size the component small or large.
   */
  sizing = input(...ngDevMode ? [void 0, {
    debugName: "sizing"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const sizing = this.sizing();
    return {
      "input-group": true,
      [`input-group-${sizing}`]: !!sizing
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function InputGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroupComponent,
    selectors: [["c-input-group"]],
    hostAttrs: [1, "input-group"],
    hostVars: 2,
    hostBindings: function InputGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      sizing: [1, "sizing"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InputGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-input-group",
      template: "<ng-content />",
      host: {
        class: "input-group",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    sizing: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "sizing",
        required: false
      }]
    }]
  });
})();
var InputGroupTextDirective = class _InputGroupTextDirective {
  static \u0275fac = function InputGroupTextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupTextDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputGroupTextDirective,
    selectors: [["", "cInputGroupText", ""]],
    hostAttrs: [1, "input-group-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cInputGroupText]",
      host: {
        class: "input-group-text"
      }
    }]
  }], null, null);
})();
var FormModule = class _FormModule {
  static \u0275fac = function FormModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormModule,
    imports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective],
    exports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModule, [{
    type: NgModule,
    args: [{
      imports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective],
      exports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective]
    }]
  }], null, null);
})();
var ContainerComponent = class _ContainerComponent {
  /**
   * Set container 100% wide until a breakpoint.
   */
  breakpoint = input("", ...ngDevMode ? [{
    debugName: "breakpoint"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set container 100% wide, spanning the entire width of the viewport.
   * @return boolean
   */
  fluid = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    const breakpoint = this.breakpoint();
    const fluid = this.fluid();
    return {
      container: !fluid && !breakpoint,
      "container-fluid": !!fluid,
      [`container-${breakpoint}`]: !!breakpoint
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ContainerComponent,
    selectors: [["c-container"], ["", "cContainer", ""]],
    hostVars: 2,
    hostBindings: function ContainerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      breakpoint: [1, "breakpoint"],
      fluid: [1, "fluid"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerComponent, [{
    type: Component,
    args: [{
      selector: "c-container, [cContainer]",
      template: "<ng-content />",
      host: {
        "[class]": "hostClasses()"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    breakpoint: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "breakpoint",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }]
  });
})();
var ColDirective = class _ColDirective {
  static ngAcceptInputType_cCol;
  static ngAcceptInputType_xs;
  static ngAcceptInputType_sm;
  static ngAcceptInputType_md;
  static ngAcceptInputType_lg;
  static ngAcceptInputType_xl;
  static ngAcceptInputType_xxl;
  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @return { 'auto' | number |  boolean }
   */
  cCol = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "cCol"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: this.coerceInput
  }));
  xs = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "xs"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: this.coerceInput
  }));
  /**
   * The number of columns/offset/order on small devices (<768px).
   * @return { 'auto' | number |  boolean }
   */
  sm = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "sm"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: this.coerceInput
  }));
  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @return { 'auto' | number |  boolean }
   */
  md = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "md"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: this.coerceInput
  }));
  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @return { 'auto' | number |  boolean }
   */
  lg = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "lg"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: this.coerceInput
  }));
  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @return { 'auto' | number |  boolean }
   */
  xl = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "xl"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: this.coerceInput
  }));
  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @return { 'auto' | number |  boolean }
   */
  xxl = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "xxl"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: this.coerceInput
  }));
  breakpoints = computed(() => {
    return {
      xs: this.xs() || this.cCol(),
      sm: this.sm(),
      md: this.md(),
      lg: this.lg(),
      xl: this.xl(),
      xxl: this.xxl()
    };
  }, ...ngDevMode ? [{
    debugName: "breakpoints"
  }] : (
    /* istanbul ignore next */
    []
  ));
  offset = input(...ngDevMode ? [void 0, {
    debugName: "offset"
  }] : (
    /* istanbul ignore next */
    []
  ));
  order = input(...ngDevMode ? [void 0, {
    debugName: "order"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const classes = {
      col: true
    };
    const breakpoints = this.breakpoints();
    const offsetInput = this.offset();
    const orderInput = this.order();
    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      const value = breakpoints[breakpoint];
      const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
      classes[`col${infix}`] = value === true;
      classes[`col${infix}-${value}`] = typeof value === "number" || typeof value === "string";
    });
    if (typeof offsetInput === "object") {
      const offset2 = __spreadValues({}, offsetInput);
      Object.entries(offset2).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
      });
    } else {
      const offset2 = numberAttribute(offsetInput);
      classes[`offset-${offset2}`] = typeof offset2 === "number" && offset2 > 0 && offset2 <= 11;
    }
    if (typeof orderInput === "object") {
      const order2 = __spreadValues({}, orderInput);
      Object.entries(order2).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`order${infix}-${value}`] = !!value;
      });
    } else {
      const order2 = orderInput;
      classes[`order-${order2}`] = !!order2;
    }
    classes["col"] = !Object.entries(classes).filter((i) => i[0].startsWith("col-") && i[1]).length || breakpoints["xs"] === true;
    return classes;
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  coerceInput(value) {
    if (value === "auto") {
      return value;
    }
    if (value === "" || value === void 0 || value === null) {
      return booleanAttribute(value);
    }
    if (typeof value === "boolean") {
      return value;
    }
    return numberAttribute(value);
  }
  static \u0275fac = function ColDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ColDirective,
    selectors: [["", "cCol", ""]],
    hostVars: 2,
    hostBindings: function ColDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      cCol: [1, "cCol"],
      xs: [1, "xs"],
      sm: [1, "sm"],
      md: [1, "md"],
      lg: [1, "lg"],
      xl: [1, "xl"],
      xxl: [1, "xxl"],
      offset: [1, "offset"],
      order: [1, "order"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColDirective, [{
    type: Directive,
    args: [{
      selector: "[cCol]",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    cCol: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cCol",
        required: false
      }]
    }],
    xs: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "xs",
        required: false
      }]
    }],
    sm: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "sm",
        required: false
      }]
    }],
    md: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "md",
        required: false
      }]
    }],
    lg: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "lg",
        required: false
      }]
    }],
    xl: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "xl",
        required: false
      }]
    }],
    xxl: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "xxl",
        required: false
      }]
    }],
    offset: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "offset",
        required: false
      }]
    }],
    order: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "order",
        required: false
      }]
    }]
  });
})();
var ColComponent = class _ColComponent extends ColDirective {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ColComponent_BaseFactory;
    return function ColComponent_Factory(__ngFactoryType__) {
      return (\u0275ColComponent_BaseFactory || (\u0275ColComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ColComponent)))(__ngFactoryType__ || _ColComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColComponent,
    selectors: [["c-col"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ColComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColComponent, [{
    type: Component,
    args: [{
      selector: "c-col",
      template: "<ng-content />",
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var RowDirective = class _RowDirective {
  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @return { cols: 'auto' | number }
   */
  xs = input(...ngDevMode ? [void 0, {
    debugName: "xs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The number of columns/offset/order on small devices (<768px).
   * @return { cols: 'auto' | number }
   */
  sm = input(...ngDevMode ? [void 0, {
    debugName: "sm"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @return { cols: 'auto' | number }
   */
  md = input(...ngDevMode ? [void 0, {
    debugName: "md"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @return { cols: 'auto' | number }
   */
  lg = input(...ngDevMode ? [void 0, {
    debugName: "lg"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @return { cols: 'auto' | number }
   */
  xl = input(...ngDevMode ? [void 0, {
    debugName: "xl"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @return { cols: 'auto' | number }
   */
  xxl = input(...ngDevMode ? [void 0, {
    debugName: "xxl"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const cols = this.xs();
    const classes = {
      row: true,
      [`row-cols-${cols}`]: !!cols
    };
    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      const value = this[breakpoint]();
      if (typeof value === "number" || typeof value === "string") {
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`row-cols${infix}-${value}`] = !!value;
      }
    });
    return classes;
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function RowDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RowDirective,
    selectors: [["", "cRow", ""]],
    hostAttrs: [1, "row"],
    hostVars: 2,
    hostBindings: function RowDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      xs: [1, "xs"],
      sm: [1, "sm"],
      md: [1, "md"],
      lg: [1, "lg"],
      xl: [1, "xl"],
      xxl: [1, "xxl"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowDirective, [{
    type: Directive,
    args: [{
      selector: "[cRow]",
      host: {
        class: "row",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    xs: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "xs",
        required: false
      }]
    }],
    sm: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "sm",
        required: false
      }]
    }],
    md: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "md",
        required: false
      }]
    }],
    lg: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "lg",
        required: false
      }]
    }],
    xl: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "xl",
        required: false
      }]
    }],
    xxl: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "xxl",
        required: false
      }]
    }]
  });
})();
var RowComponent = class _RowComponent extends RowDirective {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RowComponent_BaseFactory;
    return function RowComponent_Factory(__ngFactoryType__) {
      return (\u0275RowComponent_BaseFactory || (\u0275RowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RowComponent)))(__ngFactoryType__ || _RowComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RowComponent,
    selectors: [["c-row"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function RowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowComponent, [{
    type: Component,
    args: [{
      selector: "c-row",
      template: "<ng-content />"
    }]
  }], null, null);
})();
var GutterDirective = class _GutterDirective {
  /**
   * Define padding between columns to space and align content responsively in the Bootstrap grid system.
   */
  gutter = input({}, ...ngDevMode ? [{
    debugName: "gutter"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    let gutterClass;
    const gutterInput = this.gutter();
    if (typeof gutterInput === "number") {
      gutterClass = _GutterDirective.getGutterClasses({
        g: gutterInput
      });
      return gutterClass;
    }
    {
      const {
        g,
        gx,
        gy
      } = __spreadValues({}, gutterInput);
      gutterClass = _GutterDirective.getGutterClasses({
        g,
        gx,
        gy
      });
    }
    Object.keys(BreakpointInfix).forEach((key) => {
      const gutter = gutterInput[key] ? __spreadValues({}, gutterInput[key]) : void 0;
      if (gutter) {
        const classes = _GutterDirective.getGutterClasses(gutter, key);
        gutterClass = __spreadValues(__spreadValues({}, gutterClass), classes);
      }
    });
    return gutterClass;
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static getGutterClasses(gutter, breakpoint) {
    const {
      g,
      gx,
      gy
    } = __spreadValues({}, gutter);
    const infix = breakpoint ? `-${breakpoint}` : "";
    return {
      [`g${infix}-${g}`]: typeof g === "number",
      [`gx${infix}-${gx}`]: typeof gx === "number",
      [`gy${infix}-${gy}`]: typeof gy === "number"
    };
  }
  static \u0275fac = function GutterDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GutterDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _GutterDirective,
    selectors: [["", "gutter", ""]],
    hostVars: 2,
    hostBindings: function GutterDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      gutter: [1, "gutter"]
    },
    exportAs: ["gutter"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GutterDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[gutter]",
      exportAs: "gutter",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    gutter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "gutter",
        required: false
      }]
    }]
  });
})();
var GridModule = class _GridModule {
  static \u0275fac = function GridModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _GridModule,
    imports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective],
    exports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridModule, [{
    type: NgModule,
    args: [{
      imports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective],
      exports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective]
    }]
  }], null, null);
})();
var HeaderComponent = class _HeaderComponent {
  /**
   * Defines optional container wrapping children elements.
   */
  container = input(...ngDevMode ? [void 0, {
    debugName: "container"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Place header in non-static positions.
   */
  position = input(...ngDevMode ? [void 0, {
    debugName: "position"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default role for header. [docs]
   * @type string
   * @default 'banner'
   */
  role = input("banner", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return !!this.container() ? this.containerClasses() : this.headerClasses();
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  headerClasses = computed(() => {
    const position = this.position();
    return {
      header: true,
      [`header-${position}`]: !!position
    };
  }, ...ngDevMode ? [{
    debugName: "headerClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  containerClasses = computed(() => {
    const container = this.container();
    return {
      container: container === true,
      [`container-${container}`]: typeof container === "string"
    };
  }, ...ngDevMode ? [{
    debugName: "containerClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HeaderComponent,
    selectors: [["c-header"], ["", "c-header", ""]],
    hostVars: 3,
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      container: [1, "container"],
      position: [1, "position"],
      role: [1, "role"]
    },
    exportAs: ["cHeader"],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 1,
    consts: [[3, "class"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, HeaderComponent_Conditional_0_Template, 2, 2, "div", 0)(1, HeaderComponent_Conditional_1_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!!ctx.container() ? 0 : 1);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-header, [c-header]",
      exportAs: "cHeader",
      host: {
        "[attr.role]": "role()",
        "[class]": "hostClasses()"
      },
      template: '@if (!!container()) {\n  <div [class]="headerClasses()">\n    <ng-content />\n  </div>\n} @else {\n  <ng-content />\n}\n'
    }]
  }], null, {
    container: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "container",
        required: false
      }]
    }],
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var HeaderBrandComponent = class _HeaderBrandComponent {
  /**
   * Default role for header-brand. [docs]
   * @return string
   * @default 'button'
   */
  role = input("button", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function HeaderBrandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderBrandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HeaderBrandComponent,
    selectors: [["c-header-brand"]],
    hostAttrs: [1, "header-brand"],
    hostVars: 1,
    hostBindings: function HeaderBrandComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
      }
    },
    inputs: {
      role: [1, "role"]
    },
    exportAs: ["cHeaderBrand"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function HeaderBrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderBrandComponent, [{
    type: Component,
    args: [{
      selector: "c-header-brand",
      template: "<ng-content />",
      exportAs: "cHeaderBrand",
      host: {
        "[attr.role]": "role()",
        class: "header-brand"
      }
    }]
  }], null, {
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var HeaderDividerComponent = class _HeaderDividerComponent {
  static \u0275fac = function HeaderDividerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderDividerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HeaderDividerComponent,
    selectors: [["c-header-divider"], ["", "cHeaderDivider", ""]],
    hostAttrs: [1, "header-divider"],
    decls: 0,
    vars: 0,
    template: function HeaderDividerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderDividerComponent, [{
    type: Component,
    args: [{
      selector: "c-header-divider, [cHeaderDivider]",
      template: ``,
      host: {
        class: "header-divider"
      }
    }]
  }], null, null);
})();
var HeaderNavComponent = class _HeaderNavComponent {
  /**
   * Default role for header-nav. [docs]
   * @return string
   * @default 'navigation'
   */
  role = input("navigation", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function HeaderNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderNavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HeaderNavComponent,
    selectors: [["c-header-nav"]],
    hostAttrs: [1, "header-nav"],
    hostVars: 1,
    hostBindings: function HeaderNavComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
      }
    },
    inputs: {
      role: [1, "role"]
    },
    exportAs: ["cHeaderNav"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function HeaderNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderNavComponent, [{
    type: Component,
    args: [{
      selector: "c-header-nav",
      template: "<ng-content />",
      exportAs: "cHeaderNav",
      host: {
        "[attr.role]": "role()",
        class: "header-nav"
      }
    }]
  }], null, {
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var HeaderTextComponent = class _HeaderTextComponent {
  static \u0275fac = function HeaderTextComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderTextComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HeaderTextComponent,
    selectors: [["c-header-text"], ["", "cHeaderText", ""]],
    hostAttrs: [1, "header-text"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function HeaderTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTextComponent, [{
    type: Component,
    args: [{
      selector: "c-header-text, [cHeaderText]",
      template: "<ng-content />",
      host: {
        class: "header-text"
      }
    }]
  }], null, null);
})();
var HeaderTogglerDirective = class _HeaderTogglerDirective {
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  /**
   * Default type for header-toggler button. [docs]
   * @return string
   * @default 'button'
   */
  type = input("button", ...ngDevMode ? [{
    debugName: "type"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default aria-label attr for header-toggler. [docs]
   * @type string
   * @default 'Toggle navigation'
   */
  ariaLabel = input("Toggle navigation", ...ngDevMode ? [{
    debugName: "ariaLabel"
  }] : (
    /* istanbul ignore next */
    []
  ));
  addDefaultIcon() {
    const span = this.#renderer.createElement("span");
    this.#renderer.addClass(span, "header-toggler-icon");
    this.#renderer.appendChild(this.#hostElement.nativeElement, span);
  }
  ngAfterContentInit() {
    const hasContent = this.#hostElement.nativeElement.childNodes.length > 0;
    if (!hasContent) {
      this.addDefaultIcon();
    }
  }
  static \u0275fac = function HeaderTogglerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderTogglerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _HeaderTogglerDirective,
    selectors: [["", "cHeaderToggler", ""]],
    hostAttrs: [1, "header-toggler"],
    hostVars: 2,
    hostBindings: function HeaderTogglerDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("type", ctx.type())("aria-label", ctx.ariaLabel());
      }
    },
    inputs: {
      type: [1, "type"],
      ariaLabel: [1, "ariaLabel"]
    },
    exportAs: ["cHeaderToggler"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cHeaderToggler]",
      exportAs: "cHeaderToggler",
      host: {
        "[attr.type]": "type()",
        "[attr.aria-label]": "ariaLabel()",
        class: "header-toggler"
      }
    }]
  }], null, {
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }]
  });
})();
var HeaderModule = class _HeaderModule {
  static \u0275fac = function HeaderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _HeaderModule,
    imports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective],
    exports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderModule, [{
    type: NgModule,
    args: [{
      imports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective],
      exports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective]
    }]
  }], null, null);
})();
var ImgDirective = class _ImgDirective {
  /**
   * Set the horizontal aligment.
   * @type {'' | 'start' | 'end' | 'center'}
   */
  align = input("", ...ngDevMode ? [{
    debugName: "align"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Make image responsive.
   * @type boolean
   */
  fluid = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Make image rounded.
   * @type boolean
   */
  rounded = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "rounded"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Give an image a rounded 1px border appearance.
   * @type boolean
   */
  thumbnail = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "thumbnail"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Color for image placeholder.
   */
  placeholderColor = input("transparent", ...ngDevMode ? [{
    debugName: "placeholderColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostStyles = computed(() => {
    return {
      backgroundColor: this.placeholderColor()
    };
  }, ...ngDevMode ? [{
    debugName: "hostStyles"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const align = this.align();
    return {
      [`float-${align}`]: align === "start" || align === "end",
      "d-block": align === "center",
      "mx-auto": align === "center",
      "img-fluid": this.fluid(),
      rounded: this.rounded(),
      "img-thumbnail": this.thumbnail()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ImgDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImgDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ImgDirective,
    selectors: [["", "cImg", ""]],
    hostVars: 4,
    hostBindings: function ImgDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.hostStyles());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      align: [1, "align"],
      fluid: [1, "fluid"],
      rounded: [1, "rounded"],
      thumbnail: [1, "thumbnail"],
      placeholderColor: [1, "placeholderColor"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgDirective, [{
    type: Directive,
    args: [{
      selector: "[cImg]",
      host: {
        "[class]": "hostClasses()",
        "[style]": "hostStyles()"
      }
    }]
  }], null, {
    align: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "align",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "rounded",
        required: false
      }]
    }],
    thumbnail: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "thumbnail",
        required: false
      }]
    }],
    placeholderColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placeholderColor",
        required: false
      }]
    }]
  });
})();
var ImgModule = class _ImgModule {
  static \u0275fac = function ImgModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImgModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ImgModule,
    imports: [ImgDirective],
    exports: [ImgDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgModule, [{
    type: NgModule,
    args: [{
      imports: [ImgDirective],
      exports: [ImgDirective]
    }]
  }], null, null);
})();
var ListGroupDirective = class _ListGroupDirective {
  static ngAcceptInputType_flush;
  /**
   * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
   * @type boolean
   */
  flush = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "flush"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Specify horizontal layout type.
   */
  horizontal = input(...ngDevMode ? [void 0, {
    debugName: "horizontal"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const horizontal = this.horizontal();
    return {
      "list-group": true,
      "list-group-horizontal": horizontal === true || horizontal === "",
      [`list-group-horizontal-${horizontal}`]: !!horizontal && typeof horizontal !== "boolean",
      "list-group-flush": this.flush()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ListGroupDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListGroupDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ListGroupDirective,
    selectors: [["", "cListGroup", ""]],
    hostAttrs: [1, "list-group"],
    hostVars: 2,
    hostBindings: function ListGroupDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      flush: [1, "flush"],
      horizontal: [1, "horizontal"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[cListGroup]",
      host: {
        class: "list-group",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    flush: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "flush",
        required: false
      }]
    }],
    horizontal: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "horizontal",
        required: false
      }]
    }]
  });
})();
var ListGroupItemDirective = class _ListGroupItemDirective {
  static ngAcceptInputType_active;
  static ngAcceptInputType_disabled;
  hostElement = inject(ElementRef);
  /**
   * Toggle the active state for the component.
   * @type InputSignalWithTransform<boolean, unknown>
   */
  active = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "active"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type InputSignal<boolean | undefined>
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set disabled attr for the host element. [docs]
   * @type boolean
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
   */
  tabindex = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabindex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  hostClasses = computed(() => {
    const host = this.hostElement.nativeElement;
    const color = this.color();
    return {
      "list-group-item": true,
      "list-group-item-action": host.nodeName === "A" || host.nodeName === "BUTTON",
      active: this.active(),
      disabled: this._disabled(),
      [`list-group-item-${color}`]: !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _disabled = computed(() => this.disabled(), ...ngDevMode ? [{
    debugName: "_disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaDisabled = computed(() => {
    return this._disabled() ? true : null;
  }, ...ngDevMode ? [{
    debugName: "ariaDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrDisabled = computed(() => {
    return this._disabled() ? "" : null;
  }, ...ngDevMode ? [{
    debugName: "attrDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  tabIndex = computed(() => {
    return this._disabled() ? "-1" : this.tabindex() ?? null;
  }, ...ngDevMode ? [{
    debugName: "tabIndex"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaCurrent = computed(() => {
    return this.active() || null;
  }, ...ngDevMode ? [{
    debugName: "ariaCurrent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ListGroupItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListGroupItemDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ListGroupItemDirective,
    selectors: [["", "cListGroupItem", ""], ["c-list-group-item"]],
    hostVars: 6,
    hostBindings: function ListGroupItemDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.ariaDisabled())("aria-current", ctx.ariaCurrent())("disabled", ctx.attrDisabled())("tabindex", ctx.tabIndex());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      active: [1, "active"],
      color: [1, "color"],
      disabled: [1, "disabled"],
      tabindex: [1, "tabindex"]
    },
    exportAs: ["cListGroupItem"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cListGroupItem], c-list-group-item",
      exportAs: "cListGroupItem",
      host: {
        "[class]": "hostClasses()",
        "[attr.aria-disabled]": "ariaDisabled()",
        "[attr.aria-current]": "ariaCurrent()",
        "[attr.disabled]": "attrDisabled()",
        "[attr.tabindex]": "tabIndex()"
      }
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }],
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }]
  });
})();
var ListGroupModule = class _ListGroupModule {
  static \u0275fac = function ListGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ListGroupModule,
    imports: [ListGroupDirective, ListGroupItemDirective],
    exports: [ListGroupDirective, ListGroupItemDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupModule, [{
    type: NgModule,
    args: [{
      exports: [ListGroupDirective, ListGroupItemDirective],
      imports: [ListGroupDirective, ListGroupItemDirective]
    }]
  }], null, null);
})();
var NavLinkDirective = class _NavLinkDirective {
  static ngAcceptInputType_disabled;
  /**
   * Sets .nav-link class to the host. [docs]
   * @default true
   */
  cNavLink = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "cNavLink"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Toggle the active state for the component. [docs]
   * @default undefined
   */
  active = input(...ngDevMode ? [void 0, {
    debugName: "active"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set disabled attr for the host element. [docs]
   * @default false
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
   */
  tabindex = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabindex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  ariaCurrent = computed(() => {
    return this.active() ? "page" : null;
  }, ...ngDevMode ? [{
    debugName: "ariaCurrent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaDisabled = null;
  attrDisabled = null;
  attrTabindex = null;
  styleCursor = null;
  #disabledEffect = effect(() => {
    const disabled = this.disabled();
    this.ariaDisabled = disabled || null;
    this.attrDisabled = disabled ? "" : null;
    this.attrTabindex = disabled ? -1 : this.tabindex() ?? null;
    this.styleCursor = disabled ? null : "pointer";
  }, ...ngDevMode ? [{
    debugName: "#disabledEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return {
      "nav-link": this.cNavLink(),
      disabled: this.disabled(),
      active: this.active()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function NavLinkDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavLinkDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NavLinkDirective,
    selectors: [["", "cNavLink", ""]],
    hostVars: 8,
    hostBindings: function NavLinkDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.ariaCurrent())("aria-disabled", ctx.ariaDisabled)("disabled", ctx.attrDisabled)("tabindex", ctx.attrTabindex);
        \u0275\u0275classMap(ctx.hostClasses());
        \u0275\u0275styleProp("cursor", ctx.styleCursor);
      }
    },
    inputs: {
      cNavLink: [1, "cNavLink"],
      active: [1, "active"],
      disabled: [1, "disabled"],
      tabindex: [1, "tabindex"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavLink]",
      host: {
        "[class]": "hostClasses()",
        "[attr.aria-current]": "ariaCurrent()",
        "[attr.aria-disabled]": "ariaDisabled",
        "[attr.disabled]": "attrDisabled",
        "[attr.tabindex]": "attrTabindex",
        "[style.cursor]": "styleCursor"
      }
    }]
  }], null, {
    cNavLink: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cNavLink",
        required: false
      }]
    }],
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }]
  });
})();
var NavItemComponent = class _NavItemComponent {
  static \u0275fac = function NavItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavItemComponent,
    selectors: [["c-nav-item"]],
    hostAttrs: [1, "nav-item"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NavItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemComponent, [{
    type: Component,
    args: [{
      selector: "c-nav-item",
      template: "<ng-content />",
      host: {
        class: "nav-item"
      },
      styles: [":host{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}\n"]
    }]
  }], null, null);
})();
var NavComponent = class _NavComponent {
  /**
   * Specify a layout type for component.
   * @default undefined
   */
  layout = input(...ngDevMode ? [void 0, {
    debugName: "layout"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set the nav variant to tabs or pills.
   * @default undefined
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const layout = this.layout();
    const variant = this.variant();
    return {
      nav: true,
      [`nav-${layout}`]: !!layout,
      [`nav-${variant}`]: !!variant
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function NavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavComponent,
    selectors: [["c-nav"]],
    hostAttrs: [1, "nav"],
    hostVars: 2,
    hostBindings: function NavComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      layout: [1, "layout"],
      variant: [1, "variant"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus{outline:0}.nav-underline-border[_nghost-%COMP%]{column-gap:0}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavComponent, [{
    type: Component,
    args: [{
      selector: "c-nav",
      template: "<ng-content />",
      host: {
        class: "nav",
        "[class]": "hostClasses()"
      },
      styles: [":host .nav-link:focus{outline:0}:host.nav-underline-border{column-gap:0}\n"]
    }]
  }], null, {
    layout: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "layout",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }]
  });
})();
var NavModule = class _NavModule {
  static \u0275fac = function NavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NavModule,
    imports: [NavComponent, NavItemComponent, NavLinkDirective],
    exports: [NavComponent, NavItemComponent, NavLinkDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavModule, [{
    type: NgModule,
    args: [{
      imports: [NavComponent, NavItemComponent, NavLinkDirective],
      exports: [NavComponent, NavItemComponent, NavLinkDirective]
    }]
  }], null, null);
})();
var NavbarComponent = class _NavbarComponent {
  #breakpointObserver = inject(BreakpointObserver);
  #document = inject(DOCUMENT);
  #hostElement = inject(ElementRef);
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Defines optional container wrapping children elements.
   */
  container = input(...ngDevMode ? [void 0, {
    debugName: "container"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Defines the responsive breakpoint to determine when content collapses.
   */
  expand = input(...ngDevMode ? [void 0, {
    debugName: "expand"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Place component in non-static positions.
   */
  placement = input(...ngDevMode ? [void 0, {
    debugName: "placement"
  }] : (
    /* istanbul ignore next */
    []
  ));
  role = input("navigation", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  collapse = contentChild(CollapseDirective, ...ngDevMode ? [{
    debugName: "collapse"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const color = this.color();
    const expand = this.expand();
    const expandClassSuffix = expand === true ? "" : `-${expand}`;
    const placement = this.placement();
    return {
      navbar: true,
      [`navbar-expand${expandClassSuffix}`]: !!expand,
      [`bg-${color}`]: !!color,
      [`${placement}`]: !!placement
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  containerClass = computed(() => {
    const container = this.container();
    return `container${container !== true ? "-" + container : ""}`;
  }, ...ngDevMode ? [{
    debugName: "containerClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedStyle = signal("", ...ngDevMode ? [{
    debugName: "computedStyle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #afterEveryRenderFn = afterEveryRender({
    read: () => {
      const expand = this.expand();
      if (typeof expand === "string") {
        const computedStyle = this.#document.defaultView?.getComputedStyle(this.#hostElement.nativeElement)?.getPropertyValue(`--cui-breakpoint-${expand}`) ?? false;
        computedStyle && this.computedStyle.set(computedStyle);
      }
    }
  });
  breakpoint = computed(() => {
    const expand = this.expand();
    if (typeof expand === "string") {
      return this.computedStyle();
    }
    return false;
  }, ...ngDevMode ? [{
    debugName: "breakpoint"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #observer;
  ngAfterContentInit() {
    const breakpoint = this.breakpoint();
    if (breakpoint) {
      const onBreakpoint = `(min-width: ${breakpoint})`;
      this.#observer = this.#breakpointObserver.observe([onBreakpoint]).pipe().subscribe((result) => {
        const collapse = this.collapse();
        if (collapse) {
          const animate2 = collapse.animate();
          collapse.animate.set(false);
          collapse.toggle(false);
          setTimeout(() => {
            collapse.toggle(result.matches);
            setTimeout(() => {
              collapse.animate.set(animate2);
            });
          });
        }
      });
    }
  }
  ngOnDestroy() {
    this.#observer?.unsubscribe();
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavbarComponent,
    selectors: [["c-navbar"]],
    contentQueries: function NavbarComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.collapse, CollapseDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 3,
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "color"],
      container: [1, "container"],
      expand: [1, "expand"],
      placement: [1, "placement"],
      role: [1, "role"]
    },
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: ThemeDirective,
      inputs: ["colorScheme", "colorScheme"]
    }])],
    ngContentSelectors: _c2,
    decls: 5,
    vars: 1,
    consts: [["withContainerTemplate", ""], ["noContainerTemplate", ""], [4, "ngTemplateOutlet"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275template(0, NavbarComponent_ng_container_0_Template, 1, 0, "ng-container", 2)(1, NavbarComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, NavbarComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const withContainerTemplate_r2 = \u0275\u0275reference(2);
        const noContainerTemplate_r3 = \u0275\u0275reference(4);
        \u0275\u0275property("ngTemplateOutlet", ctx.container() ? withContainerTemplate_r2 : noContainerTemplate_r3);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar",
      imports: [NgTemplateOutlet],
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["colorScheme"]
      }],
      host: {
        "[class]": "hostClasses()",
        "[attr.role]": "role()"
      },
      template: '<ng-container *ngTemplateOutlet="container() ? withContainerTemplate : noContainerTemplate" />\n\n<ng-template #withContainerTemplate>\n  <div [class]="containerClass()">\n    <ng-content />\n  </div>\n</ng-template>\n\n<ng-template #noContainerTemplate>\n  <ng-content />\n</ng-template>\n'
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    container: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "container",
        required: false
      }]
    }],
    expand: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "expand",
        required: false
      }]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    collapse: [{
      type: ContentChild,
      args: [forwardRef(() => CollapseDirective), {
        isSignal: true
      }]
    }]
  });
})();
var NavbarBrandDirective = class _NavbarBrandDirective {
  role = input("button", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function NavbarBrandDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarBrandDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NavbarBrandDirective,
    selectors: [["", "cNavbarBrand", ""]],
    hostAttrs: [1, "navbar-brand"],
    hostVars: 1,
    hostBindings: function NavbarBrandDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
      }
    },
    inputs: {
      role: [1, "role"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarBrandDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavbarBrand]",
      host: {
        class: "navbar-brand",
        "[attr.role]": "role()"
      }
    }]
  }], null, {
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var NavbarNavComponent = class _NavbarNavComponent {
  /**
   * Enable vertical scrolling of a collapsed navbar toggleable contents.
   * @type boolean
   */
  scroll = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "scroll"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    return {
      "navbar-nav": true,
      "navbar-nav-scroll": this.scroll()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function NavbarNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarNavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavbarNavComponent,
    selectors: [["c-navbar-nav"]],
    hostVars: 2,
    hostBindings: function NavbarNavComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      scroll: [1, "scroll"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NavbarNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarNavComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar-nav",
      template: "<ng-content />",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    scroll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "scroll",
        required: false
      }]
    }]
  });
})();
var NavbarTextComponent = class _NavbarTextComponent {
  static \u0275fac = function NavbarTextComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarTextComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavbarTextComponent,
    selectors: [["c-navbar-text"]],
    hostAttrs: [1, "navbar-text"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NavbarTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarTextComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar-text",
      template: "<ng-content />",
      host: {
        class: "navbar-text"
      }
    }]
  }], null, null);
})();
var NavbarTogglerDirective = class _NavbarTogglerDirective {
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  constructor() {
    afterNextRender({
      read: () => {
        const hasContent = this.#hostElement.nativeElement.childNodes.length;
        if (!hasContent) {
          this.addDefaultIcon();
        }
      }
    });
  }
  /**
   * Reference to navbar collapse element (via # template variable) . [docs]
   * @type string
   * @default 'button'
   */
  collapseRef = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "collapseRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cNavbarToggler"
  }));
  /**
   * Default type for navbar-toggler. [docs]
   * @type string
   * @default 'button'
   */
  type = input("button", ...ngDevMode ? [{
    debugName: "type"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default aria-label attr for navbar-toggler. [docs]
   * @type string
   * @default 'Toggle navigation'
   */
  ariaLabel = input("Toggle navigation", ...ngDevMode ? [{
    debugName: "ariaLabel"
  }] : (
    /* istanbul ignore next */
    []
  ));
  handleClick($event) {
    const collapseRef = this.collapseRef();
    collapseRef?.toggle(!collapseRef?.visible());
  }
  addDefaultIcon() {
    const span = this.#renderer.createElement("span");
    this.#renderer.addClass(span, "navbar-toggler-icon");
    this.#renderer.appendChild(this.#hostElement.nativeElement, span);
  }
  static \u0275fac = function NavbarTogglerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarTogglerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NavbarTogglerDirective,
    selectors: [["", "cNavbarToggler", ""]],
    hostAttrs: [1, "navbar-toggler"],
    hostVars: 2,
    hostBindings: function NavbarTogglerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NavbarTogglerDirective_click_HostBindingHandler($event) {
          return ctx.handleClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel())("type", ctx.type());
      }
    },
    inputs: {
      collapseRef: [1, "cNavbarToggler", "collapseRef"],
      type: [1, "type"],
      ariaLabel: [1, "ariaLabel"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavbarToggler]",
      host: {
        "[attr.aria-label]": "ariaLabel()",
        "[attr.type]": "type()",
        class: "navbar-toggler",
        "(click)": "handleClick($event)"
      }
    }]
  }], () => [], {
    collapseRef: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cNavbarToggler",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }]
  });
})();
var NavbarModule = class _NavbarModule {
  static \u0275fac = function NavbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NavbarModule,
    imports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective],
    exports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarModule, [{
    type: NgModule,
    args: [{
      exports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective],
      imports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective]
    }]
  }], null, null);
})();
var ModalBodyComponent = class _ModalBodyComponent {
  static \u0275fac = function ModalBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalBodyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ModalBodyComponent,
    selectors: [["c-modal-body"]],
    hostAttrs: [1, "modal-body"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ModalBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-body",
      template: "<ng-content />",
      host: {
        class: "modal-body"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var ModalContentComponent = class _ModalContentComponent {
  static \u0275fac = function ModalContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ModalContentComponent,
    selectors: [["c-modal-content"]],
    hostAttrs: [1, "modal-content"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ModalContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalContentComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-content",
      template: "<ng-content />",
      host: {
        class: "modal-content"
      }
    }]
  }], null, null);
})();
var ModalDialogComponent = class _ModalDialogComponent {
  /**
   * Align the modal in the center or top of the screen.
   * @default undefined
   */
  alignment = input(...ngDevMode ? [void 0, {
    debugName: "alignment"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set modal to covers the entire user viewport.
   * @return {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  fullscreen = input(...ngDevMode ? [void 0, {
    debugName: "fullscreen"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Does the modal dialog itself scroll, or does the whole dialog scroll within the window.
   * @default false
   * @return {boolean}
   */
  scrollable = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "scrollable"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Size the component small, large, or extra large.
   * @default undefined
   * @return {'sm' | 'lg' | 'xl'}
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const fullscreen = this.fullscreen();
    const size = this.size();
    return {
      "modal-dialog": true,
      "modal-dialog-centered": this.alignment() === "center",
      "modal-fullscreen": fullscreen === true,
      [`modal-fullscreen-${fullscreen}-down`]: typeof fullscreen === "string",
      "modal-dialog-scrollable": this.scrollable(),
      [`modal-${size}`]: !!size
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ModalDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ModalDialogComponent,
    selectors: [["c-modal-dialog"]],
    hostAttrs: [1, "modal-dialog"],
    hostVars: 2,
    hostBindings: function ModalDialogComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      alignment: [1, "alignment"],
      fullscreen: [1, "fullscreen"],
      scrollable: [1, "scrollable"],
      size: [1, "size"]
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ModalDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}.modal-dialog-centered[_nghost-%COMP%]{display:flex}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalDialogComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-dialog",
      template: "<ng-content />",
      host: {
        class: "modal-dialog",
        "[class]": "hostClasses()"
      },
      styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"]
    }]
  }], null, {
    alignment: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alignment",
        required: false
      }]
    }],
    fullscreen: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fullscreen",
        required: false
      }]
    }],
    scrollable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "scrollable",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }]
  });
})();
var ModalService = class _ModalService {
  #modalState = new Subject();
  modalState$ = this.#modalState.asObservable();
  toggle(action) {
    this.#modalState.next(action);
  }
  static \u0275fac = function ModalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ModalService,
    factory: _ModalService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ModalToggleDirective = class _ModalToggleDirective {
  #modalService = inject(ModalService);
  /**
   * Html id attr of modal to dismiss.
   * @default undefined
   */
  toggle = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "toggle"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cModalToggle"
  }));
  dismiss($event) {
    $event.preventDefault();
    this.#modalService.toggle({
      show: "toggle",
      id: this.toggle()
    });
  }
  static \u0275fac = function ModalToggleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalToggleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ModalToggleDirective,
    selectors: [["", "cModalToggle", ""]],
    hostBindings: function ModalToggleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ModalToggleDirective_click_HostBindingHandler($event) {
          return ctx.dismiss($event);
        });
      }
    },
    inputs: {
      toggle: [1, "cModalToggle", "toggle"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cModalToggle]",
      host: {
        "(click)": "dismiss($event)"
      }
    }]
  }], null, {
    toggle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cModalToggle",
        required: false
      }]
    }]
  });
})();
var ModalFooterComponent = class _ModalFooterComponent {
  static \u0275fac = function ModalFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalFooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ModalFooterComponent,
    selectors: [["c-modal-footer"]],
    hostAttrs: [1, "modal-footer"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ModalFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-footer",
      template: "<ng-content />",
      host: {
        class: "modal-footer"
      }
    }]
  }], null, null);
})();
var ModalHeaderComponent = class _ModalHeaderComponent {
  static \u0275fac = function ModalHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ModalHeaderComponent,
    selectors: [["c-modal-header"]],
    hostAttrs: [1, "modal-header"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ModalHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-header",
      template: "<ng-content />",
      host: {
        class: "modal-header"
      }
    }]
  }], null, null);
})();
var ModalTitleDirective = class _ModalTitleDirective {
  static \u0275fac = function ModalTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalTitleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ModalTitleDirective,
    selectors: [["", "cModalTitle", ""]],
    hostAttrs: [1, "modal-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cModalTitle]",
      host: {
        class: "modal-title"
      }
    }]
  }], null, null);
})();
var ModalComponent = class _ModalComponent {
  static ngAcceptInputType_ariaModalInput;
  static ngAcceptInputType_scrollable;
  static ngAcceptInputType_visibleInput;
  #document = inject(DOCUMENT);
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  #modalService = inject(ModalService);
  #backdropService = inject(BackdropService);
  #destroyRef = inject(DestroyRef);
  #focusMonitor = inject(FocusMonitor);
  /**
   * Align the modal in the center or top of the screen.
   * @return {'top' | 'center'}
   * @default 'top'
   */
  alignment = input("top", ...ngDevMode ? [{
    debugName: "alignment"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Apply a backdrop on body while modal is open.
   * @return boolean | 'static'
   * @default true
   */
  backdrop = input(true, ...ngDevMode ? [{
    debugName: "backdrop"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set modal to cover the entire user viewport.
   * @return {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   * @default undefined
   */
  fullscreen = input(...ngDevMode ? [void 0, {
    debugName: "fullscreen"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Closes the modal when escape key is pressed.
   * @return boolean
   * @default true
   */
  keyboard = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "keyboard"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  attrId = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "attrId"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "id"
  }));
  get id() {
    return this.attrId();
  }
  /**
   * Size the component small, large, or extra large.
   * @return {'sm' | 'lg' | 'xl'}
   * @default undefined
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Remove animation to create modal that simply appear rather than fade in to view.
   */
  transition = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "transition"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Default role for modal
   * @return string
   * @default 'dialog'
   */
  role = input("dialog", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set aria-modal html attr for modal
   * @type boolean
   * @default null
   */
  ariaModalInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "ariaModalInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "ariaModal"
  }));
  ariaModal = computed(() => {
    return this.visible() || this.ariaModalInput() ? true : null;
  }, ...ngDevMode ? [{
    debugName: "ariaModal"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Create a scrollable modal that allows scrolling the modal body.
   * @return boolean
   * @default false
   */
  scrollable = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "scrollable"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Toggle the visibility of modal component.
   * @return boolean
   * @default false
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  visible = linkedSignal(this.visibleInput, ...ngDevMode ? [{
    debugName: "visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #visibleInputEffect = effect(() => {
    const visible = this.visible();
    untracked(() => {
      this.animateStart();
      this.setBodyStyles(visible);
      this.setBackdrop(this.backdrop() !== false && visible);
      this.visibleChange?.emit(visible);
    });
  }, ...ngDevMode ? [{
    debugName: "#visibleInputEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #activeElement = signal(null, ...ngDevMode ? [{
    debugName: "#activeElement"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #visibleEffect = effect(() => {
    const visible = this.visible();
    const afterViewInit = this.#afterViewInit();
    untracked(() => {
      if (visible && afterViewInit) {
        this.#activeElement.set(this.#document.activeElement);
        setTimeout(() => {
          const focusable = this.modalContentRef()?.nativeElement.querySelectorAll('[tabindex]:not([tabindex="-1"]), button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
          if (focusable?.length) {
            this.#focusMonitor.focusVia(focusable[0], "keyboard");
          }
        });
      } else {
        const activeElement = this.#activeElement();
        if (activeElement && this.#document.contains(activeElement)) {
          this.#focusMonitor.focusVia(activeElement, "keyboard");
          setTimeout(() => {
            this.#activeElement.set(null);
          });
        }
      }
    });
  }, ...ngDevMode ? [{
    debugName: "#visibleEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Event triggered on modal dismiss.
   * @return boolean
   */
  visibleChange = output();
  // @ViewChild(ModalContentComponent, { read: ElementRef }) modalContent!: ElementRef;
  // @ViewChild('modalContentRef', { read: ElementRef }) modalContentRef!: ElementRef;
  // readonly modalContentRef = viewChild(ModalContentComponent, { read: ElementRef });
  modalContentRef = viewChild("modalContentRef", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "modalContentRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  modalDialogRef = viewChild.required(ModalDialogComponent, {
    read: ElementRef
  });
  #modalDialogEffect = effect((OnCleanup) => {
    const modalDialogElement = this.modalDialogRef().nativeElement;
    const removeEventListeners = () => {
      modalDialogElement?.removeEventListener("transitionend", this.#handleTransitionEnd);
    };
    OnCleanup(removeEventListeners);
    modalDialogElement?.addEventListener("transitionend", this.#handleTransitionEnd);
  }, ...ngDevMode ? [{
    debugName: "#modalDialogEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #handleTransitionEnd = (event) => {
    const modalDialogElement = this.modalDialogRef().nativeElement;
    if (event.target === modalDialogElement && event.propertyName === "transform") {
      if (!this.visible()) {
        this.#renderer.setStyle(this.#hostElement.nativeElement, "display", "none");
      }
    }
  };
  #activeBackdrop;
  // private inBoundingClientRect!: boolean;
  hostClasses = computed(() => {
    return {
      modal: true,
      fade: this.transition(),
      show: this.show
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaHidden = computed(() => {
    return this.visible() ? null : true;
  }, ...ngDevMode ? [{
    debugName: "ariaHidden"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get show() {
    return this.visible() && this.#show();
  }
  set show(value) {
    this.#show.set(value);
  }
  #show = signal(false, ...ngDevMode ? [{
    debugName: "#show"
  }] : (
    /* istanbul ignore next */
    []
  ));
  animateStart() {
    if (this.visible()) {
      this.#backdropService.hideScrollbar();
      this.#renderer.setStyle(this.#hostElement.nativeElement, "display", "block");
    } else {
      if (!this.transition()) {
        this.#renderer.setStyle(this.#hostElement.nativeElement, "display", "none");
      }
    }
    setTimeout(() => {
      this.show = this.visible();
    });
  }
  onKeyUpHandler(event) {
    if (event.key === "Escape" && this.keyboard() && this.visible()) {
      if (this.backdrop() === "static") {
        this.setStaticBackdrop();
      } else {
        this.#modalService.toggle({
          show: false,
          modal: this
        });
      }
    }
  }
  mouseDownTarget = null;
  onMouseDownHandler($event) {
    this.mouseDownTarget = $event.target;
  }
  onClickHandler($event) {
    if (this.mouseDownTarget !== $event.target) {
      this.mouseDownTarget = null;
      return;
    }
    const targetElement = $event.target;
    if (targetElement === this.#hostElement.nativeElement) {
      if (this.backdrop() === "static") {
        this.setStaticBackdrop();
        return;
      }
      this.#modalService.toggle({
        show: false,
        modal: this
      });
    }
  }
  ngOnInit() {
    this.stateToggleSubscribe();
  }
  #afterViewInit = signal(false, ...ngDevMode ? [{
    debugName: "#afterViewInit"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngAfterViewInit() {
    this.#afterViewInit.set(true);
  }
  ngOnDestroy() {
    this.#modalService.toggle({
      show: false,
      modal: this
    });
    this.#afterViewInit.set(false);
    this.setBackdrop(false);
  }
  stateToggleSubscribe() {
    this.#modalService.modalState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((action) => {
      if (this === action.modal || this.id === action.id) {
        if ("show" in action) {
          this.visible.update((visible) => action?.show === "toggle" ? !visible : action.show);
        }
      } else {
        if (this.visible()) {
          this.visible.set(false);
        }
      }
    });
  }
  setBackdrop(setBackdrop) {
    this.#activeBackdrop = setBackdrop ? this.#backdropService.setBackdrop("modal") : this.#backdropService.clearBackdrop(this.#activeBackdrop);
  }
  setBodyStyles(open) {
    if (open) {
      if (!!this.backdrop()) {
        this.#renderer.addClass(this.#document.body, "modal-open");
      }
    } else {
      this.#renderer.removeClass(this.#document.body, "modal-open");
    }
  }
  setStaticBackdrop() {
    if (this.transition()) {
      this.#renderer.addClass(this.#hostElement.nativeElement, "modal-static");
      this.#renderer.setStyle(this.#hostElement.nativeElement, "overflow-y", "hidden");
      setTimeout(() => {
        this.#renderer.removeClass(this.#hostElement.nativeElement, "modal-static");
        this.#renderer.removeStyle(this.#hostElement.nativeElement, "overflow-y");
      }, 300);
    }
  }
  static \u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ModalComponent,
    selectors: [["c-modal"]],
    viewQuery: function ModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.modalContentRef, _c6, 5, ElementRef)(ctx.modalDialogRef, ModalDialogComponent, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostAttrs: [1, "modal"],
    hostVars: 8,
    hostBindings: function ModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function ModalComponent_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDownHandler($event);
        })("click", function ModalComponent_click_HostBindingHandler($event) {
          return ctx.onClickHandler($event);
        })("keyup", function ModalComponent_keyup_HostBindingHandler($event) {
          return ctx.onKeyUpHandler($event);
        }, \u0275\u0275resolveDocument);
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.visible() ? ctx.role() : null)("inert", ctx.ariaHidden())("id", ctx.id)("aria-modal", ctx.ariaModal())("aria-hidden", ctx.ariaHidden())("tabindex", -1);
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      alignment: [1, "alignment"],
      backdrop: [1, "backdrop"],
      fullscreen: [1, "fullscreen"],
      keyboard: [1, "keyboard"],
      attrId: [1, "id", "attrId"],
      size: [1, "size"],
      transition: [1, "transition"],
      role: [1, "role"],
      ariaModalInput: [1, "ariaModal", "ariaModalInput"],
      scrollable: [1, "scrollable"],
      visibleInput: [1, "visible", "visibleInput"]
    },
    outputs: {
      visibleChange: "visibleChange"
    },
    exportAs: ["cModal"],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 6,
    consts: [["modalContentRef", ""], [3, "alignment", "fullscreen", "scrollable", "size"], [2, "display", "contents", 3, "cdkTrapFocusAutoCapture", "cdkTrapFocus"]],
    template: function ModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "c-modal-dialog", 1)(1, "c-modal-content")(2, "div", 2, 0);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const isVisible_r1 = ctx.visible();
        \u0275\u0275property("alignment", ctx.alignment())("fullscreen", ctx.fullscreen())("scrollable", ctx.scrollable())("size", ctx.size());
        \u0275\u0275advance(2);
        \u0275\u0275property("cdkTrapFocusAutoCapture", isVisible_r1)("cdkTrapFocus", isVisible_r1);
      }
    },
    dependencies: [ModalDialogComponent, ModalContentComponent, A11yModule, CdkTrapFocus],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "c-modal",
      exportAs: "cModal",
      imports: [ModalDialogComponent, ModalContentComponent, A11yModule],
      host: {
        class: "modal",
        "[class]": "hostClasses()",
        "[attr.role]": "visible() ? role() : null",
        "[attr.inert]": "ariaHidden()",
        "[attr.id]": "id",
        "[attr.aria-modal]": "ariaModal()",
        "[attr.aria-hidden]": "ariaHidden()",
        "[attr.tabindex]": "-1",
        "(mousedown)": "onMouseDownHandler($event)",
        "(click)": "onClickHandler($event)",
        "(document:keyup)": "onKeyUpHandler($event)"
      },
      template: '@let isVisible = visible();\n<c-modal-dialog\n  [alignment]="alignment()"\n  [fullscreen]="fullscreen()"\n  [scrollable]="scrollable()"\n  [size]="size()">\n  <c-modal-content>\n    <div #modalContentRef [cdkTrapFocusAutoCapture]="isVisible" [cdkTrapFocus]="isVisible" style="display: contents;">\n      <ng-content />\n    </div>\n  </c-modal-content>\n</c-modal-dialog>\n'
    }]
  }], null, {
    alignment: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alignment",
        required: false
      }]
    }],
    backdrop: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "backdrop",
        required: false
      }]
    }],
    fullscreen: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fullscreen",
        required: false
      }]
    }],
    keyboard: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "keyboard",
        required: false
      }]
    }],
    attrId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    transition: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transition",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    ariaModalInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ariaModal",
        required: false
      }]
    }],
    scrollable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "scrollable",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }],
    modalContentRef: [{
      type: ViewChild,
      args: ["modalContentRef", __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }],
    modalDialogRef: [{
      type: ViewChild,
      args: [forwardRef(() => ModalDialogComponent), __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var ModalModule = class _ModalModule {
  static \u0275fac = function ModalModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ModalModule,
    imports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
    exports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ModalService],
    imports: [ModalComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalModule, [{
    type: NgModule,
    args: [{
      exports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
      imports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
      providers: [ModalService]
    }]
  }], null, null);
})();
var OffcanvasService = class _OffcanvasService {
  offcanvasState = new Subject();
  offcanvasState$ = this.offcanvasState.asObservable();
  toggle(action) {
    this.offcanvasState.next(action);
  }
  static \u0275fac = function OffcanvasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OffcanvasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OffcanvasService,
    factory: _OffcanvasService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId$1 = 0;
var OffcanvasComponent = class _OffcanvasComponent {
  #document = inject(DOCUMENT);
  #platformId = inject(PLATFORM_ID);
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  #offcanvasService = inject(OffcanvasService);
  #backdropService = inject(BackdropService);
  #breakpointObserver = inject(BreakpointObserver);
  #destroyRef = inject(DestroyRef);
  /**
   * Apply a backdrop on body while offcanvas is open.
   * @return boolean | 'static'
   * @default true
   */
  backdrop = input(true, ...ngDevMode ? [{
    debugName: "backdrop"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Closes the offcanvas when escape key is pressed [docs]
   * @return boolean
   * @default true
   */
  keyboard = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "keyboard"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Components placement, there’s no default placement.
   * @return {'start' | 'end' | 'top' | 'bottom'}
   * @default 'start'
   */
  placement = input("start", ...ngDevMode ? [{
    debugName: "placement"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Responsive offcanvas property hides content outside the viewport from a specified breakpoint and down.
   * @return boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
   * @default true
   * @since 4.3.10
   */
  responsive = input(true, ...ngDevMode ? [{
    debugName: "responsive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = input(`offcanvas-${this.placement()}-${nextId$1++}`, ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default role for offcanvas. [docs]
   * @return string
   * @default 'dialog'
   */
  role = input("dialog", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set aria-modal html attr for offcanvas. [docs]
   * @return boolean
   * @default true
   */
  ariaModal = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "ariaModal"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  #activeBackdrop;
  #backdropClickSubscription;
  #layoutChangeSubscription;
  /**
   * Allow body scrolling while offcanvas is visible.
   * @return boolean
   * @default false
   */
  scroll = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "scroll"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Toggle the visibility of offcanvas component.
   * @return boolean
   * @default false
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  visible = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.visibleInput,
    computation: (value) => value
  }));
  visibleEffect = effect(() => {
    const visible = this.visible();
    this.animateStart(visible);
    if (visible) {
      this.setBackdrop(this.backdrop());
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.layoutChangeSubscribe(visible);
    this.visibleChange?.emit(visible);
  }, ...ngDevMode ? [{
    debugName: "visibleEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Event triggered on visible change.
   * @return <boolean>
   */
  visibleChange = output();
  hostClasses = computed(() => {
    const responsive = this.responsive();
    const placement = this.placement();
    const visible = this.visible();
    return {
      offcanvas: typeof responsive === "boolean",
      [`offcanvas-${responsive}`]: typeof responsive !== "boolean",
      [`offcanvas-${placement}`]: !!placement,
      show: visible
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaHidden = computed(() => {
    return this.visible() ? null : true;
  }, ...ngDevMode ? [{
    debugName: "ariaHidden"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get tabIndex() {
    return "-1";
  }
  get show() {
    return this.visible();
  }
  set show(value) {
    this.visible.set(value);
  }
  get responsiveBreakpoint() {
    const responsive = this.responsive();
    if (typeof responsive !== "string") {
      return false;
    }
    const element = this.#document.documentElement;
    const breakpointValue = this.#document.defaultView?.getComputedStyle(element)?.getPropertyValue(`--cui-breakpoint-${responsive.trim()}`) ?? false;
    return breakpointValue ? `${parseFloat(breakpointValue.trim()) - 0.02}px` : false;
  }
  animateStart(visible = this.visible()) {
    if (visible) {
      if (!this.scroll()) {
        this.#backdropService.hideScrollbar();
      }
      this.#renderer.removeClass(this.#hostElement.nativeElement, "hiding");
      this.#renderer.addClass(this.#hostElement.nativeElement, "showing");
    } else {
      this.#renderer.removeClass(this.#hostElement.nativeElement, "showing");
      this.#renderer.addClass(this.#hostElement.nativeElement, "hiding");
    }
  }
  onKeyDownHandler(event) {
    if (event.key === "Escape" && this.keyboard() && this.visible() && this.backdrop() !== "static") {
      this.#offcanvasService.toggle({
        show: false,
        id: this.id()
      });
    }
  }
  ngOnInit() {
    this.stateToggleSubscribe();
    setTimeout(() => {
      this.#renderer.setStyle(this.#hostElement.nativeElement, "display", "flex");
    });
    this.#hostElement.nativeElement.addEventListener("transitionend", this.#handleTransitionEnd);
  }
  ngOnDestroy() {
    this.#offcanvasService.toggle({
      show: false,
      id: this.id()
    });
    this.#removeEventListeners();
  }
  #removeEventListeners = () => {
    this.#hostElement.nativeElement.removeEventListener("transitionend", this.#handleTransitionEnd);
  };
  #handleTransitionEnd = (event) => {
    const offcanvasElement = this.#hostElement.nativeElement;
    if (event.target === offcanvasElement && event.propertyName === "transform") {
      if (this.visible()) {
        this.#renderer.removeClass(offcanvasElement, "showing");
      } else {
        this.#renderer.removeClass(offcanvasElement, "hiding");
        this.#renderer.removeStyle(this.#document.body, "overflow");
        this.#renderer.removeStyle(this.#document.body, "paddingRight");
      }
    }
  };
  setFocus() {
    if (isPlatformBrowser(this.#platformId)) {
      setTimeout(() => this.#hostElement.nativeElement.focus());
    }
  }
  stateToggleSubscribe() {
    this.#offcanvasService.offcanvasState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((action) => {
      if (this === action.offcanvas || this.id() === action.id) {
        if ("show" in action) {
          this.visible.update((value) => action?.show === "toggle" ? !value : action.show);
        }
      }
    });
  }
  backdropClickSubscribe(subscribe = true) {
    if (subscribe) {
      this.#backdropClickSubscription = this.#backdropService.backdropClick$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((clicked) => {
        this.#offcanvasService.toggle({
          show: !clicked,
          id: this.id()
        });
      });
    } else {
      this.#backdropClickSubscription?.unsubscribe();
    }
  }
  setBackdrop(setBackdrop) {
    this.#activeBackdrop = !!setBackdrop ? this.#backdropService.setBackdrop("offcanvas") : this.#backdropService.clearBackdrop(this.#activeBackdrop);
    setBackdrop === true ? this.backdropClickSubscribe() : this.backdropClickSubscribe(false);
  }
  layoutChangeSubscribe(subscribe = true) {
    if (subscribe) {
      if (!this.responsiveBreakpoint) {
        return;
      }
      const responsiveBreakpoint = `(max-width: ${this.responsiveBreakpoint})`;
      const layoutChanges = this.#breakpointObserver.observe([responsiveBreakpoint]);
      this.#layoutChangeSubscription = layoutChanges.pipe(filter((breakpointState) => !breakpointState.matches), takeUntilDestroyed(this.#destroyRef)).subscribe((breakpointState) => {
        this.visible.set(breakpointState.matches);
      });
    } else {
      this.#layoutChangeSubscription?.unsubscribe();
    }
  }
  static \u0275fac = function OffcanvasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OffcanvasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OffcanvasComponent,
    selectors: [["c-offcanvas"]],
    hostAttrs: ["ngSkipHydration", "true"],
    hostVars: 7,
    hostBindings: function OffcanvasComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function OffcanvasComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDownHandler($event);
        }, \u0275\u0275resolveDocument);
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("inert", ctx.ariaHidden() || null)("role", ctx.role())("aria-modal", ctx.ariaModal())("tabindex", ctx.tabIndex);
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      backdrop: [1, "backdrop"],
      keyboard: [1, "keyboard"],
      placement: [1, "placement"],
      responsive: [1, "responsive"],
      id: [1, "id"],
      role: [1, "role"],
      ariaModal: [1, "ariaModal"],
      scroll: [1, "scroll"],
      visibleInput: [1, "visible", "visibleInput"]
    },
    outputs: {
      visibleChange: "visibleChange"
    },
    exportAs: ["cOffcanvas"],
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: ThemeDirective,
      inputs: ["dark", "dark"]
    }])],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [["cdkTrapFocus", "", "cdkTrapFocusAutoCapture", ""]],
    template: function OffcanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [A11yModule, CdkTrapFocus],
    styles: ["[_nghost-%COMP%]{display:none}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas",
      exportAs: "cOffcanvas",
      imports: [A11yModule],
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        ngSkipHydration: "true",
        "[attr.id]": "id()",
        "[attr.inert]": "ariaHidden() || null",
        "[attr.role]": "role()",
        "[attr.aria-modal]": "ariaModal()",
        "[attr.tabindex]": "tabIndex",
        "[class]": "hostClasses()",
        "(document:keydown)": "onKeyDownHandler($event)"
      },
      template: "<div cdkTrapFocus cdkTrapFocusAutoCapture>\n  <ng-content />\n</div>\n\n",
      styles: [":host{display:none}\n"]
    }]
  }], null, {
    backdrop: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "backdrop",
        required: false
      }]
    }],
    keyboard: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "keyboard",
        required: false
      }]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    responsive: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "responsive",
        required: false
      }]
    }],
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    ariaModal: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ariaModal",
        required: false
      }]
    }],
    scroll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "scroll",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }]
  });
})();
var OffcanvasBodyComponent = class _OffcanvasBodyComponent {
  static \u0275fac = function OffcanvasBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OffcanvasBodyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OffcanvasBodyComponent,
    selectors: [["c-offcanvas-body"]],
    hostAttrs: [1, "offcanvas-body"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function OffcanvasBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas-body",
      template: "<ng-content />",
      host: {
        class: "offcanvas-body"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var OffcanvasHeaderComponent = class _OffcanvasHeaderComponent {
  static \u0275fac = function OffcanvasHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OffcanvasHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OffcanvasHeaderComponent,
    selectors: [["c-offcanvas-header"]],
    hostAttrs: [1, "offcanvas-header"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function OffcanvasHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas-header",
      template: "<ng-content />",
      host: {
        class: "offcanvas-header"
      }
    }]
  }], null, null);
})();
var OffcanvasTitleDirective = class _OffcanvasTitleDirective {
  static \u0275fac = function OffcanvasTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OffcanvasTitleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OffcanvasTitleDirective,
    selectors: [["", "cOffcanvasTitle", ""]],
    hostAttrs: [1, "offcanvas-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cOffcanvasTitle]",
      host: {
        class: "offcanvas-title"
      }
    }]
  }], null, null);
})();
var OffcanvasToggleDirective = class _OffcanvasToggleDirective {
  #offcanvasService = inject(OffcanvasService);
  /**
   * Html id attr of offcanvas to toggle.
   * @return string
   */
  id = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "id"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cOffcanvasToggle"
  }));
  toggleOpen($event) {
    $event.preventDefault();
    this.#offcanvasService.toggle({
      show: "toggle",
      id: this.id()
    });
  }
  static \u0275fac = function OffcanvasToggleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OffcanvasToggleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OffcanvasToggleDirective,
    selectors: [["", "cOffcanvasToggle", ""]],
    hostBindings: function OffcanvasToggleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OffcanvasToggleDirective_click_HostBindingHandler($event) {
          return ctx.toggleOpen($event);
        });
      }
    },
    inputs: {
      id: [1, "cOffcanvasToggle", "id"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cOffcanvasToggle]",
      host: {
        "(click)": "toggleOpen($event)"
      }
    }]
  }], null, {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cOffcanvasToggle",
        required: false
      }]
    }]
  });
})();
var OffcanvasModule = class _OffcanvasModule {
  static \u0275fac = function OffcanvasModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OffcanvasModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OffcanvasModule,
    imports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
    exports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [OffcanvasService, BackdropService],
    imports: [OffcanvasComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasModule, [{
    type: NgModule,
    args: [{
      exports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
      imports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
      providers: [OffcanvasService, BackdropService]
    }]
  }], null, null);
})();
var PageLinkDirective = class _PageLinkDirective {
  static ngAcceptInputType_disabled;
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    return {
      "page-link": true,
      disabled: this.disabled()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function PageLinkDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageLinkDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PageLinkDirective,
    selectors: [["", "cPageLink", ""]],
    hostAttrs: [1, "page-link"],
    hostVars: 2,
    hostBindings: function PageLinkDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      disabled: [1, "disabled"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cPageLink]",
      host: {
        class: "page-link",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }]
  });
})();
var PageItemDirective = class _PageItemDirective {
  static ngAcceptInputType_disabled;
  #renderer = inject(Renderer2);
  /**
   * Toggle the active state for the component.
   * @return boolean
   */
  active = input(...ngDevMode ? [void 0, {
    debugName: "active"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Toggle the disabled state for the component.
   * @return boolean
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  ariaCurrent = computed(() => {
    return this.active() ? "page" : null;
  }, ...ngDevMode ? [{
    debugName: "ariaCurrent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return {
      "page-item": true,
      disabled: this.disabled(),
      active: this.active()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  pageLinkElementRef = contentChild(PageLinkDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "pageLinkElementRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  pageLinkElementRefEffect = effect(() => {
    const pageLinkElementRef = this.pageLinkElementRef();
    const disabled = this.disabled();
    if (!pageLinkElementRef) {
      return;
    }
    const pageLinkElement = pageLinkElementRef.nativeElement;
    if (disabled) {
      this.#renderer.setAttribute(pageLinkElement, "aria-disabled", "true");
      this.#renderer.setAttribute(pageLinkElement, "tabindex", "-1");
    } else {
      this.#renderer.removeAttribute(pageLinkElement, "aria-disabled");
      this.#renderer.removeAttribute(pageLinkElement, "tabindex");
    }
  }, ...ngDevMode ? [{
    debugName: "pageLinkElementRefEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function PageItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageItemDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PageItemDirective,
    selectors: [["", "cPageItem", ""]],
    contentQueries: function PageItemDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.pageLinkElementRef, PageLinkDirective, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "page-item"],
    hostVars: 3,
    hostBindings: function PageItemDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.ariaCurrent());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      active: [1, "active"],
      disabled: [1, "disabled"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cPageItem]",
      host: {
        class: "page-item",
        "[class]": "hostClasses()",
        "[attr.aria-current]": "ariaCurrent()"
      }
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    pageLinkElementRef: [{
      type: ContentChild,
      args: [forwardRef(() => PageLinkDirective), __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var PageItemComponent = class _PageItemComponent extends PageItemDirective {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PageItemComponent_BaseFactory;
    return function PageItemComponent_Factory(__ngFactoryType__) {
      return (\u0275PageItemComponent_BaseFactory || (\u0275PageItemComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PageItemComponent)))(__ngFactoryType__ || _PageItemComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PageItemComponent,
    selectors: [["c-page-item"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function PageItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [_c7]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageItemComponent, [{
    type: Component,
    args: [{
      selector: "c-page-item",
      template: "<ng-content />",
      styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"]
    }]
  }], null, null);
})();
var PaginationComponent = class _PaginationComponent {
  /**
   * Set the alignment of pagination components.
   * @values 'start', 'center', 'end'
   */
  align = input("", ...ngDevMode ? [{
    debugName: "align"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Size the component small or large.
   * @values 'sm', 'lg'
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default role for pagination. [docs]
   * @return string
   * @default 'navigation'
   */
  role = input("navigation", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  paginationClass = computed(() => {
    const size = this.size();
    const align = this.align();
    return {
      pagination: true,
      [`pagination-${size}`]: !!size,
      [`justify-content-${align}`]: !!align
    };
  }, ...ngDevMode ? [{
    debugName: "paginationClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PaginationComponent,
    selectors: [["c-pagination"]],
    hostVars: 1,
    hostBindings: function PaginationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
      }
    },
    inputs: {
      align: [1, "align"],
      size: [1, "size"],
      role: [1, "role"]
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 2,
    template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "ul");
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.paginationClass());
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "c-pagination",
      host: {
        "[attr.role]": "role()"
      },
      template: '<ul [class]="paginationClass()">\n  <ng-content />\n</ul>\n'
    }]
  }], null, {
    align: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "align",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var PaginationModule = class _PaginationModule {
  static \u0275fac = function PaginationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PaginationModule,
    imports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent],
    exports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationModule, [{
    type: NgModule,
    args: [{
      exports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent],
      imports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent]
    }]
  }], null, null);
})();
var PlaceholderDirective = class _PlaceholderDirective {
  /**
   * placeholder toggler
   * @type boolean
   * @default false
   */
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "cPlaceholder"
  }));
  /**
   * Size the placeholder xs, small, large.
   */
  size = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "size"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cPlaceholderSize"
  }));
  ariaHidden = computed(() => {
    return this.visible() ? null : true;
  }, ...ngDevMode ? [{
    debugName: "ariaHidden"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const size = this.size();
    return {
      placeholder: this.visible(),
      [`placeholder-${size}`]: !!size
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function PlaceholderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceholderDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PlaceholderDirective,
    selectors: [["", "cPlaceholder", ""]],
    hostVars: 3,
    hostBindings: function PlaceholderDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", ctx.ariaHidden());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      visible: [1, "cPlaceholder", "visible"],
      size: [1, "cPlaceholderSize", "size"]
    },
    exportAs: ["cPlaceholder"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderDirective, [{
    type: Directive,
    args: [{
      selector: "[cPlaceholder]",
      exportAs: "cPlaceholder",
      host: {
        "[class]": "hostClasses()",
        "[attr.aria-hidden]": "ariaHidden()"
      }
    }]
  }], null, {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPlaceholder",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPlaceholderSize",
        required: false
      }]
    }]
  });
})();
var PlaceholderAnimationDirective = class _PlaceholderAnimationDirective {
  /**
   * Animation type for placeholder
   * @type 'glow' | 'wave'
   * @default undefined
   */
  animation = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "animation"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cPlaceholderAnimation"
  }));
  placeholder = contentChild(PlaceholderDirective, ...ngDevMode ? [{
    debugName: "placeholder"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const animation2 = this.animation();
    return {
      [`placeholder-${animation2}`]: this.placeholder()?.visible() && !!animation2
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function PlaceholderAnimationDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceholderAnimationDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PlaceholderAnimationDirective,
    selectors: [["", "cPlaceholderAnimation", ""]],
    contentQueries: function PlaceholderAnimationDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.placeholder, PlaceholderDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function PlaceholderAnimationDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      animation: [1, "cPlaceholderAnimation", "animation"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderAnimationDirective, [{
    type: Directive,
    args: [{
      selector: "[cPlaceholderAnimation]",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    animation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPlaceholderAnimation",
        required: false
      }]
    }],
    placeholder: [{
      type: ContentChild,
      args: [forwardRef(() => PlaceholderDirective), {
        isSignal: true
      }]
    }]
  });
})();
var PlaceholderModule = class _PlaceholderModule {
  static \u0275fac = function PlaceholderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceholderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PlaceholderModule,
    imports: [PlaceholderDirective, PlaceholderAnimationDirective],
    exports: [PlaceholderDirective, PlaceholderAnimationDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderModule, [{
    type: NgModule,
    args: [{
      imports: [PlaceholderDirective, PlaceholderAnimationDirective],
      exports: [PlaceholderDirective, PlaceholderAnimationDirective]
    }]
  }], null, null);
})();
var PopoverComponent = class _PopoverComponent {
  renderer = inject(Renderer2);
  /**
   * Content of popover
   * @return {string | TemplateRef}
   */
  content = input("", ...ngDevMode ? [{
    debugName: "content"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #contentEffect = effect(() => {
    this.updateView(this.content());
  }, ...ngDevMode ? [{
    debugName: "#contentEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Toggle the visibility of popover component.
   * @return boolean
   */
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  id = input(...ngDevMode ? [void 0, {
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  role = input("tooltip", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  viewContainerRef = viewChild("popoverTemplate", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "viewContainerRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ViewContainerRef
  }));
  textNode;
  hostClasses = computed(() => {
    return {
      popover: true,
      fade: true,
      show: this.visible(),
      "bs-popover-auto": true
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnDestroy() {
    this.clear();
  }
  clear() {
    this.viewContainerRef()?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }
  updateView(content) {
    this.clear();
    if (!content) {
      return;
    }
    if (content instanceof TemplateRef) {
      this.viewContainerRef()?.createEmbeddedView(content);
    } else {
      const textNodeContent = this.renderer.createText(content);
      this.textNode = this.renderer.createElement("div");
      this.renderer.addClass(this.textNode, "popover-body");
      this.renderer.appendChild(this.textNode, textNodeContent);
      const element = this.viewContainerRef()?.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
  static \u0275fac = function PopoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PopoverComponent,
    selectors: [["c-popover"]],
    viewQuery: function PopoverComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.viewContainerRef, _c8, 5, ViewContainerRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "popover", "fade", "bs-popover-auto"],
    hostVars: 4,
    hostBindings: function PopoverComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role())("id", ctx.id());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      content: [1, "content"],
      visible: [1, "visible"],
      id: [1, "id"],
      role: [1, "role"]
    },
    decls: 4,
    vars: 2,
    consts: [["popoverTemplate", ""], ["data-popper-arrow", ""]],
    template: function PopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementContainerStart(0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275domElementContainer(2, null, 0);
        \u0275\u0275domElementContainerEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("popover-arrow", !!ctx.content());
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponent, [{
    type: Component,
    args: [{
      selector: "c-popover",
      host: {
        class: "popover fade bs-popover-auto",
        "[class]": "hostClasses()",
        "[attr.role]": "role()",
        "[attr.id]": "id()"
      },
      template: '<ng-container>\n  <div [class.popover-arrow]="!!content()" data-popper-arrow></div>\n  <ng-container #popoverTemplate />\n</ng-container>\n'
    }]
  }], null, {
    content: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "content",
        required: false
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["popoverTemplate", __spreadProps(__spreadValues({}, {
        read: ViewContainerRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var PopoverDirective = class _PopoverDirective {
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  #viewContainerRef = inject(ViewContainerRef);
  #listenersService = inject(ListenersService);
  #changeDetectorRef = inject(ChangeDetectorRef);
  #intersectionService = inject(IntersectionService);
  #destroyRef = inject(DestroyRef);
  #document = inject(DOCUMENT);
  #timerId1;
  #timerId2;
  /**
   * Content of popover
   * @return {string | TemplateRef}
   */
  content = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "content"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cPopover"
  }));
  #contentEffect = effect(() => {
    if (this.content()) {
      this.destroyTooltipElement();
    }
  }, ...ngDevMode ? [{
    debugName: "#contentEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @return Partial<Options>
   */
  popperOptions = input({}, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "popperOptions"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cPopoverOptions"
  }));
  #popperOptionsEffect = effect(() => {
    this._popperOptions = __spreadValues(__spreadProps(__spreadValues({}, this._popperOptions), {
      placement: this.placement()
    }), this.popperOptions());
  }, ...ngDevMode ? [{
    debugName: "#popperOptionsEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  popperOptionsComputed = computed(() => {
    return __spreadValues({
      placement: this.placement()
    }, this._popperOptions);
  }, ...ngDevMode ? [{
    debugName: "popperOptionsComputed"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   * @return: 'top' | 'bottom' | 'left' | 'right'
   * @default: 'top'
   */
  placement = input("top", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "placement"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cPopoverPlacement"
  }));
  /**
   * ElementRefDirective for positioning the tooltip on reference element
   * @return: ElementRefDirective
   * @default: undefined
   */
  reference = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "reference"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTooltipRef"
  }));
  referenceRef = computed(() => this.reference()?.elementRef ?? this.#hostElement, ...ngDevMode ? [{
    debugName: "referenceRef"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   * @return: Triggers | Triggers[]
   */
  trigger = input("hover", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "trigger"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cPopoverTrigger"
  }));
  /**
   * Toggle the visibility of popover component.
   * @return boolean
   */
  visible = model(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cPopoverVisible"
  }));
  #visibleEffect = afterRenderEffect({
    // this fixes RuntimeError: NG0500: During hydration Angular expected <abc> but found <xyz>.
    // Find more at https://angular.dev/errors/NG0500
    write: () => {
      this.visible() ? this.addTooltipElement() : this.removeTooltipElement();
    }
  });
  get ariaDescribedBy() {
    return this.tooltipId ? this.tooltipId : null;
  }
  tooltip;
  tooltipId;
  tooltipRef;
  popperInstance;
  _popperOptions = {
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, 9]
      }
    }]
  };
  ngAfterViewInit() {
    this.intersectionServiceSubscribe();
  }
  ngOnDestroy() {
    this.clearListeners();
    this.destroyTooltipElement();
  }
  ngOnInit() {
    this.setListeners();
  }
  setListeners() {
    const config = {
      hostElement: this.#hostElement,
      trigger: this.trigger(),
      callbackToggle: () => {
        this.visible.update((visible) => !visible);
      },
      callbackOff: () => {
        this.visible.set(false);
      },
      callbackOn: () => {
        this.visible.set(true);
      }
    };
    this.#listenersService.setListeners(config);
  }
  clearListeners() {
    this.#listenersService.clearListeners();
  }
  intersectionServiceSubscribe() {
    this.#intersectionService.createIntersectionObserver(this.referenceRef());
    this.#intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.referenceRef()), debounceTime(100), finalize(() => {
      this.#intersectionService.unobserve(this.referenceRef());
    }), takeUntilDestroyed(this.#destroyRef)).subscribe((next) => {
      this.visible.set(next.isIntersecting ? this.visible() : false);
    });
  }
  getUID(prefix) {
    let uid = prefix ?? "random-id";
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1e6).toString(10)}`;
    } while (this.#document.getElementById(uid));
    return uid;
  }
  createTooltipElement() {
    if (!this.tooltipRef) {
      this.tooltipRef = this.#viewContainerRef.createComponent(PopoverComponent);
    }
  }
  destroyTooltipElement() {
    this.tooltip?.remove();
    this.tooltipRef?.destroy();
    this.tooltipRef = void 0;
    this.popperInstance?.destroy();
    this.#viewContainerRef?.detach();
    this.#viewContainerRef?.clear();
  }
  addTooltipElement() {
    if (!this.content()) {
      this.destroyTooltipElement();
      return;
    }
    if (!this.tooltipRef) {
      this.createTooltipElement();
    }
    this.tooltipRef?.setInput("content", this.content() ?? "");
    this.tooltip = this.tooltipRef?.location.nativeElement;
    this.#renderer.addClass(this.tooltip, "d-none");
    this.#renderer.addClass(this.tooltip, "fade");
    this.popperInstance?.destroy();
    this.#viewContainerRef.insert(this.tooltipRef.hostView);
    this.#renderer.appendChild(this.#document.body, this.tooltip);
    this.popperInstance = createPopper(this.referenceRef().nativeElement, this.tooltip, __spreadValues({}, this.popperOptionsComputed()));
    if (!this.visible()) {
      this.removeTooltipElement();
      return;
    }
    clearTimeout(this.#timerId2);
    clearTimeout(this.#timerId1);
    this.#timerId1 = setTimeout(() => {
      this.tooltipId = this.getUID("popover");
      this.tooltipRef?.setInput("id", this.tooltipId);
      this.#renderer.removeClass(this.tooltip, "d-none");
      this.tooltipRef?.setInput("visible", this.visible());
      this.popperInstance?.forceUpdate();
      this.#changeDetectorRef?.markForCheck();
      this.#timerId1 = void 0;
    }, 150);
  }
  removeTooltipElement() {
    this.tooltipId = "";
    if (!this.tooltipRef) {
      return;
    }
    clearTimeout(this.#timerId2);
    this.#timerId2 = setTimeout(() => {
      this.#viewContainerRef?.detach();
      this.#timerId2 = void 0;
    }, 300);
    this.tooltipRef.setInput("visible", false);
    this.tooltipRef.setInput("id", void 0);
    this.#changeDetectorRef.markForCheck();
  }
  static \u0275fac = function PopoverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PopoverDirective,
    selectors: [["", "cPopover", ""]],
    hostVars: 1,
    hostBindings: function PopoverDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-describedby", ctx.ariaDescribedBy);
      }
    },
    inputs: {
      content: [1, "cPopover", "content"],
      popperOptions: [1, "cPopoverOptions", "popperOptions"],
      placement: [1, "cPopoverPlacement", "placement"],
      reference: [1, "cTooltipRef", "reference"],
      trigger: [1, "cPopoverTrigger", "trigger"],
      visible: [1, "cPopoverVisible", "visible"]
    },
    outputs: {
      visible: "cPopoverVisibleChange"
    },
    exportAs: ["cPopover"],
    features: [\u0275\u0275ProvidersFeature([ListenersService, IntersectionService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[cPopover]",
      exportAs: "cPopover",
      providers: [ListenersService, IntersectionService],
      host: {
        "[attr.aria-describedby]": "ariaDescribedBy"
      }
    }]
  }], null, {
    content: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPopover",
        required: false
      }]
    }],
    popperOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPopoverOptions",
        required: false
      }]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPopoverPlacement",
        required: false
      }]
    }],
    reference: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTooltipRef",
        required: false
      }]
    }],
    trigger: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPopoverTrigger",
        required: false
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cPopoverVisible",
        required: false
      }]
    }, {
      type: Output,
      args: ["cPopoverVisibleChange"]
    }]
  });
})();
var PopoverModule = class _PopoverModule {
  static \u0275fac = function PopoverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PopoverModule,
    imports: [PopoverDirective, PopoverComponent],
    exports: [PopoverDirective, PopoverComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      exports: [PopoverDirective, PopoverComponent],
      imports: [PopoverDirective, PopoverComponent]
    }]
  }], null, null);
})();
var ProgressService = class _ProgressService {
  stacked = signal(false, ...ngDevMode ? [{
    debugName: "stacked"
  }] : (
    /* istanbul ignore next */
    []
  ));
  value = signal(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  precision = signal(0, ...ngDevMode ? [{
    debugName: "precision"
  }] : (
    /* istanbul ignore next */
    []
  ));
  min = signal(0, ...ngDevMode ? [{
    debugName: "min"
  }] : (
    /* istanbul ignore next */
    []
  ));
  max = signal(100, ...ngDevMode ? [{
    debugName: "max"
  }] : (
    /* istanbul ignore next */
    []
  ));
  percent = computed(() => {
    return +(((this.value() ?? 0) - this.min()) / (this.max() - this.min()) * 100).toFixed(this.precision());
  }, ...ngDevMode ? [{
    debugName: "percent"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ProgressService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressService,
    factory: _ProgressService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressService, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarDirective = class _ProgressBarDirective {
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  #progressService = inject(ProgressService);
  #valuesEffect = effect(() => {
    const host = this.#hostElement.nativeElement;
    const value = this.#progressService.value();
    const percent = this.#progressService.percent();
    const stacked = this.#progressService.stacked();
    if (value === void 0) {
      for (const name of ["aria-valuenow", "aria-valuemax", "aria-valuemin", "role"]) {
        this.#renderer.removeAttribute(host, name);
      }
    } else {
      const {
        min: min2,
        max: max2
      } = this.#progressService;
      this.#renderer.setAttribute(host, "aria-valuenow", String(value));
      this.#renderer.setAttribute(host, "aria-valuemin", String(min2()));
      this.#renderer.setAttribute(host, "aria-valuemax", String(max2()));
      this.#renderer.setAttribute(host, "role", this.role());
    }
    const tagName = host.tagName;
    if (percent >= 0 && (stacked && tagName === "C-PROGRESS" || !stacked && tagName !== "C-PROGRESS")) {
      this.#renderer.setStyle(host, "width", `${percent}%`);
    } else {
      this.#renderer.removeStyle(host, "width");
    }
  }, ...ngDevMode ? [{
    debugName: "#valuesEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Use to animate the stripes right to left via CSS3 animations.
   * @return boolean
   */
  animated = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "animated"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  precision = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "precision"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * The percent value the ProgressBar.
   * @return number
   * @default 0
   */
  value = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "value"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Set the progress bar variant to optional striped.
   * @values 'striped'
   * @default undefined
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The max value of the ProgressBar.
   * @return number
   * @default 100
   */
  max = input(100, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "max"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Set default html role attribute.
   * @return string
   */
  role = input("progressbar", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #serviceEffect = effect(() => {
    this.#progressService.precision.set(this.precision());
    const max2 = this.max();
    this.#progressService.max.set(isNaN(max2) || max2 <= 0 ? 100 : max2);
    const value = this.value();
    this.#progressService.value.set(value && !isNaN(value) ? value : void 0);
  }, ...ngDevMode ? [{
    debugName: "#serviceEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ProgressBarDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ProgressBarDirective,
    selectors: [["", "cProgressBar", ""]],
    inputs: {
      animated: [1, "animated"],
      color: [1, "color"],
      precision: [1, "precision"],
      value: [1, "value"],
      variant: [1, "variant"],
      max: [1, "max"],
      role: [1, "role"]
    },
    exportAs: ["cProgressBar"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarDirective, [{
    type: Directive,
    args: [{
      selector: "[cProgressBar]",
      exportAs: "cProgressBar"
    }]
  }], null, {
    animated: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "animated",
        required: false
      }]
    }],
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    precision: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "precision",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    max: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "max",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var ProgressBarComponent = class _ProgressBarComponent {
  #progressBarDirective = inject(ProgressBarDirective, {
    optional: true
  });
  hostClasses = computed(() => {
    const animated = this.#progressBarDirective?.animated();
    const color = this.#progressBarDirective?.color();
    const variant = this.#progressBarDirective?.variant();
    return {
      "progress-bar": true,
      "progress-bar-animated": !!animated,
      [`progress-bar-${variant}`]: !!variant,
      [`bg-${color}`]: !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ProgressBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBarComponent,
    selectors: [["c-progress-bar"]],
    hostAttrs: [1, "progress-bar"],
    hostVars: 2,
    hostBindings: function ProgressBarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: ProgressBarDirective,
      inputs: ["animated", "animated", "color", "color", "max", "max", "role", "role", "value", "value", "variant", "variant"]
    }])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{
      selector: "c-progress-bar",
      template: "<ng-content />",
      hostDirectives: [{
        directive: ProgressBarDirective,
        inputs: ["animated", "color", "max", "role", "value", "variant"]
      }],
      host: {
        class: "progress-bar",
        "[class]": "hostClasses()"
      }
    }]
  }], null, null);
})();
var ProgressStackedComponent = class _ProgressStackedComponent {
  stacked = input(true, ...ngDevMode ? [{
    debugName: "stacked"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ProgressStackedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressStackedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressStackedComponent,
    selectors: [["c-progress-stacked"]],
    hostVars: 2,
    hostBindings: function ProgressStackedComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("progress-stacked", ctx.stacked());
      }
    },
    inputs: {
      stacked: [1, "stacked"]
    },
    exportAs: ["cProgressStacked"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ProgressStackedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:flex}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressStackedComponent, [{
    type: Component,
    args: [{
      selector: "c-progress-stacked",
      exportAs: "cProgressStacked",
      template: "<ng-content />",
      host: {
        "[class.progress-stacked]": "stacked()"
      },
      styles: [":host{display:flex}\n"]
    }]
  }], null, {
    stacked: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stacked",
        required: false
      }]
    }]
  });
})();
var ProgressComponent = class _ProgressComponent {
  #hostElement = inject(ElementRef);
  progressBarDirective = inject(ProgressBarDirective, {
    optional: true
  });
  #stacked = inject(ProgressStackedComponent, {
    optional: true
  })?.stacked() ?? false;
  #progressService = inject(ProgressService);
  constructor() {
    this.#progressService.stacked.set(this.#stacked);
  }
  stacked = this.#progressService.stacked;
  percent = this.#progressService.percent;
  barValue = this.#progressService.value;
  contentProgressBars = contentChildren(ProgressBarComponent, ...ngDevMode ? [{
    debugName: "contentProgressBars"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
   * @return number
   */
  height = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "height"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Displays thin progress.
   * @return boolean
   */
  thin = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "thin"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Change the default color to white.
   * @return boolean
   */
  white = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "white"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    return {
      progress: true,
      "progress-thin": this.thin(),
      "progress-white": this.white()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostStyle = computed(() => {
    const height = this.height();
    return !!height ? `${height}px` : this.#hostElement?.nativeElement?.style?.height ?? void 0;
  }, ...ngDevMode ? [{
    debugName: "hostStyle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ProgressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressComponent,
    selectors: [["c-progress"]],
    contentQueries: function ProgressComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentProgressBars, ProgressBarComponent, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "progress"],
    hostVars: 4,
    hostBindings: function ProgressComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
        \u0275\u0275styleProp("height", ctx.hostStyle());
      }
    },
    inputs: {
      height: [1, "height"],
      thin: [1, "thin"],
      white: [1, "white"]
    },
    exportAs: ["cProgress"],
    features: [\u0275\u0275ProvidersFeature([ProgressService]), \u0275\u0275HostDirectivesFeature([{
      directive: ProgressBarDirective,
      inputs: ["animated", "animated", "color", "color", "max", "max", "role", "role", "value", "value", "variant", "variant"]
    }])],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 1,
    consts: [["defaultContent", ""], [3, "animated", "variant", "color", "value"], [4, "ngTemplateOutlet"]],
    template: function ProgressComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, ProgressComponent_Conditional_0_Template, 1, 1, "ng-container")(1, ProgressComponent_Conditional_1_Template, 2, 5, "c-progress-bar", 1);
        \u0275\u0275template(2, ProgressComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275conditional(((tmp_1_0 = ctx.contentProgressBars()) == null ? null : tmp_1_0.length) ? 0 : 1);
      }
    },
    dependencies: [ProgressBarComponent, NgTemplateOutlet],
    styles: [".progress-stacked.progress[_nghost-%COMP%], .progress-stacked   .progress[_nghost-%COMP%]{transition:var(--cui-progress-bar-transition)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressComponent, [{
    type: Component,
    args: [{
      selector: "c-progress",
      exportAs: "cProgress",
      imports: [ProgressBarComponent, NgTemplateOutlet],
      hostDirectives: [{
        directive: ProgressBarDirective,
        inputs: ["animated", "color", "max", "role", "value", "variant"]
      }],
      host: {
        class: "progress",
        "[class]": "hostClasses()",
        "[style.height]": "hostStyle()"
      },
      providers: [ProgressService],
      template: '@if (contentProgressBars()?.length) {\n  <ng-container *ngTemplateOutlet="defaultContent" />\n} @else {\n  @let pbd = progressBarDirective;\n  <c-progress-bar [animated]="pbd?.animated()" [variant]="pbd?.variant()" [color]="pbd?.color()" [value]="barValue()">\n    <ng-container *ngTemplateOutlet="defaultContent" />\n  </c-progress-bar>\n}\n\n<ng-template #defaultContent>\n  <ng-content />\n</ng-template>\n\n',
      styles: [":host-context(.progress-stacked).progress{transition:var(--cui-progress-bar-transition)}\n"]
    }]
  }], () => [], {
    contentProgressBars: [{
      type: ContentChildren,
      args: [forwardRef(() => ProgressBarComponent), {
        isSignal: true
      }]
    }],
    height: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "height",
        required: false
      }]
    }],
    thin: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "thin",
        required: false
      }]
    }],
    white: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "white",
        required: false
      }]
    }]
  });
})();
var ProgressModule = class _ProgressModule {
  static \u0275fac = function ProgressModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressModule,
    imports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent],
    exports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressModule, [{
    type: NgModule,
    args: [{
      exports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent],
      imports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent]
    }]
  }], null, null);
})();
var SidebarService = class _SidebarService {
  #sidebarState = new BehaviorSubject({});
  sidebarState$ = this.#sidebarState.asObservable();
  toggle(action) {
    this.#sidebarState.next(action);
  }
  static \u0275fac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SidebarService,
    factory: _SidebarService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SidebarBackdropService = class _SidebarBackdropService {
  #document = inject(DOCUMENT);
  #sidebarService = inject(SidebarService);
  #backdrop;
  renderer;
  #clickListener = () => {
  };
  setBackdrop(sidebar) {
    const backdrop = this.#document.getElementsByClassName("sidebar-backdrop");
    if (backdrop.length === 0) {
      this.#backdrop = this.renderer.createElement("div");
      this.renderer.addClass(this.#backdrop, "sidebar-backdrop");
      this.renderer.appendChild(this.#document.body, this.#backdrop);
      this.#clickListener = this.renderer.listen(this.#backdrop, "click", (e) => {
        this.#sidebarService.toggle({
          toggle: "visible",
          sidebar
        });
      });
    }
    if (this.#backdrop && sidebar.sidebarState.mobile && sidebar.sidebarState.visible) {
      this.renderer.addClass(this.#backdrop, "fade");
      this.renderer.addClass(this.#backdrop, "show");
    } else {
      this.renderer.removeClass(this.#backdrop, "show");
      this.renderer.removeClass(this.#backdrop, "fade");
    }
  }
  clearBackdrop() {
    if (this.#backdrop) {
      this.#clickListener();
      this.renderer.removeChild(this.#document.body, this.#backdrop);
      this.#backdrop = void 0;
    }
  }
  static \u0275fac = function SidebarBackdropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarBackdropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SidebarBackdropService,
    factory: _SidebarBackdropService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarBackdropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SidebarComponent = class _SidebarComponent {
  #document = inject(DOCUMENT);
  #renderer = inject(Renderer2);
  #breakpointObserver = inject(BreakpointObserver);
  #sidebarService = inject(SidebarService);
  #backdropService = inject(SidebarBackdropService);
  #onMobile = false;
  #layoutChangeSubscription;
  #stateToggleSubscription;
  state = signal({
    sidebar: this
  }, ...ngDevMode ? [{
    debugName: "state"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #stateInitial = {
    narrow: false,
    visible: false,
    unfoldable: false
  };
  /**
   * Sets if the color of text should be colored for a light or dark background.
   * @return 'dark' | 'light'
   */
  colorScheme = input(...ngDevMode ? [void 0, {
    debugName: "colorScheme"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets html attribute id.
   * @return string
   */
  id = input(...ngDevMode ? [void 0, {
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Make sidebar narrow.
   * @return boolean
   * @default false
   */
  narrowInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "narrowInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "narrow"
  }));
  #narrow = linkedSignal(this.narrowInput, ...ngDevMode ? [{
    debugName: "#narrow"
  }] : (
    /* istanbul ignore next */
    []
  ));
  set narrow(value) {
    this.#narrow.set(value);
  }
  get narrow() {
    return this.#narrow();
  }
  /**
   * Set sidebar to overlaid variant.
   * @return boolean
   * @default false
   */
  overlaid = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "overlaid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Components placement, there’s no default placement.
   * @return 'start' | 'end'
   */
  placement = input(...ngDevMode ? [void 0, {
    debugName: "placement"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Place sidebar in non-static positions.
   * @return 'fixed' | 'sticky'
   * @default 'fixed'
   */
  position = input("fixed", ...ngDevMode ? [{
    debugName: "position"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Size the component small, large, or extra large.
   * @return 'sm' | 'lg' | 'xl'
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Expand narrowed sidebar on hover.
   * @type boolean
   * @default false
   */
  unfoldableInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "unfoldableInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "unfoldable"
  }));
  unfoldable = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "unfoldable"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: this.unfoldableInput,
    computation: (value) => value
  }));
  /**
   * Toggle the visibility of sidebar component.
   * @type boolean
   * @default false
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  #visible = linkedSignal(this.visibleInput, ...ngDevMode ? [{
    debugName: "#visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #visibleEffect = effect(() => {
    this.visibleChange?.emit(this.#visible());
  }, ...ngDevMode ? [{
    debugName: "#visibleEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  set visible(value) {
    this.#visible.set(value);
  }
  get visible() {
    return this.#visible();
  }
  /**
   * Event emitted on visibility change.
   * @return boolean
   */
  visibleChange = output();
  set sidebarState(value) {
    const newState = value;
    if ("toggle" in newState) {
      if (newState.toggle === "visible") {
        newState.visible = !this.state().visible;
        this.#visible.set(newState.visible);
      } else if (newState.toggle === "unfoldable") {
        newState.unfoldable = !this.state().unfoldable;
        this.unfoldable.set(newState.unfoldable);
      }
    } else {
      this.#visible.update((visible) => (newState.visible ?? visible) && !this.overlaid());
    }
    this.state.update((state2) => __spreadValues(__spreadValues({}, state2), newState));
    this.state().mobile && this.state().visible ? this.#backdropService.setBackdrop(this) : this.#backdropService.clearBackdrop();
  }
  get sidebarState() {
    return __spreadValues({}, this.state());
  }
  get getMobileBreakpoint() {
    const element = this.#document.documentElement;
    const mobileBreakpoint = this.#document.defaultView?.getComputedStyle(element)?.getPropertyValue("--cui-mobile-breakpoint") ?? "md";
    const breakpointValue = this.#document.defaultView?.getComputedStyle(element)?.getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) ?? "768px";
    return `${parseFloat(breakpointValue.trim()) - 0.02}px`;
  }
  constructor() {
    this.#backdropService.renderer = this.#renderer;
  }
  hostClasses = computed(() => {
    const {
      mobile,
      visible
    } = __spreadValues({}, this.sidebarState);
    const unfoldable = this.unfoldable();
    const placement = this.placement();
    const colorScheme = this.colorScheme();
    const size = this.size();
    return {
      sidebar: true,
      "sidebar-fixed": this.position() === "fixed" && !mobile,
      "sidebar-narrow": this.#narrow() && !unfoldable,
      "sidebar-narrow-unfoldable": unfoldable,
      "sidebar-overlaid": this.overlaid(),
      [`sidebar-${placement}`]: !!placement,
      [`sidebar-${colorScheme}`]: !!colorScheme,
      [`sidebar-${size}`]: !!size,
      show: visible,
      // show: visible && this.#onMobile, //todo: check
      hide: !visible
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.setInitialState();
    this.layoutChangeSubscribe();
    this.stateToggleSubscribe();
  }
  ngOnDestroy() {
    this.stateToggleSubscribe(false);
    this.layoutChangeSubscribe(false);
  }
  ngOnChanges(changes) {
    const oldStateMap = new Map(Object.entries(this.state()));
    const newStateMap = /* @__PURE__ */ new Map();
    newStateMap.set("sidebar", this);
    const propList = ["visible", "unfoldable", "narrow"];
    for (const propName in changes) {
      if (propList.includes(propName)) {
        if (changes[propName] && !changes[propName].firstChange) {
          const value = booleanAttribute(changes[propName].currentValue);
          if (oldStateMap.get(propName) !== value) {
            newStateMap.set(propName, value);
          }
        }
      }
    }
    if (newStateMap.size > 1) {
      const state2 = Object.fromEntries(newStateMap.entries());
      this.#sidebarService.toggle(state2);
    }
  }
  setInitialState() {
    this.#stateInitial = {
      narrow: this.#narrow(),
      visible: this.#visible(),
      unfoldable: this.unfoldable()
    };
    this.#sidebarService.toggle(__spreadProps(__spreadValues({}, this.#stateInitial), {
      sidebar: this
    }));
  }
  stateToggleSubscribe(subscribe = true) {
    if (subscribe) {
      this.#stateToggleSubscription = this.#sidebarService.sidebarState$.subscribe((state2) => {
        if (this === state2.sidebar || this.id() === state2.id) {
          this.sidebarState = __spreadValues({}, state2);
        }
      });
    } else {
      this.#stateToggleSubscription?.unsubscribe();
    }
  }
  layoutChangeSubscribe(subscribe = true) {
    const onMobile = `(max-width: ${this.getMobileBreakpoint})`;
    if (subscribe) {
      const layoutChanges = this.#breakpointObserver.observe([onMobile]);
      this.#layoutChangeSubscription = layoutChanges.subscribe((result) => {
        const isOnMobile = result.breakpoints[onMobile];
        const isUnfoldable = isOnMobile ? false : this.unfoldable();
        if (this.#onMobile !== isOnMobile) {
          this.#onMobile = isOnMobile;
          this.#sidebarService.toggle({
            mobile: isOnMobile,
            unfoldable: isUnfoldable,
            visible: isOnMobile ? !isOnMobile : this.#stateInitial.visible,
            sidebar: this
          });
        }
      });
    } else {
      this.#layoutChangeSubscription?.unsubscribe();
    }
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarComponent,
    selectors: [["c-sidebar"]],
    hostAttrs: [1, "sidebar"],
    hostVars: 3,
    hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("inert", !ctx.sidebarState.visible || null);
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      colorScheme: [1, "colorScheme"],
      id: [1, "id"],
      narrowInput: [1, "narrow", "narrowInput"],
      overlaid: [1, "overlaid"],
      placement: [1, "placement"],
      position: [1, "position"],
      size: [1, "size"],
      unfoldableInput: [1, "unfoldable", "unfoldableInput"],
      visibleInput: [1, "visible", "visibleInput"]
    },
    outputs: {
      visibleChange: "visibleChange"
    },
    exportAs: ["cSidebar"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar",
      exportAs: "cSidebar",
      template: "<ng-content />",
      host: {
        class: "sidebar",
        "[class]": "hostClasses()",
        "[attr.inert]": "!this.sidebarState.visible || null"
      }
    }]
  }], () => [], {
    colorScheme: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "colorScheme",
        required: false
      }]
    }],
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    narrowInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "narrow",
        required: false
      }]
    }],
    overlaid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "overlaid",
        required: false
      }]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    unfoldableInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unfoldable",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }]
  });
})();
var SidebarBrandComponent = class _SidebarBrandComponent {
  brandFull = input(...ngDevMode ? [void 0, {
    debugName: "brandFull"
  }] : (
    /* istanbul ignore next */
    []
  ));
  brandNarrow = input(...ngDevMode ? [void 0, {
    debugName: "brandNarrow"
  }] : (
    /* istanbul ignore next */
    []
  ));
  routerLink = input(...ngDevMode ? [void 0, {
    debugName: "routerLink"
  }] : (
    /* istanbul ignore next */
    []
  ));
  brandImg = computed(() => Boolean(this.brandFull() || this.brandNarrow()), ...ngDevMode ? [{
    debugName: "brandImg"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function SidebarBrandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarBrandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarBrandComponent,
    selectors: [["c-sidebar-brand"]],
    hostAttrs: [1, "sidebar-brand"],
    inputs: {
      brandFull: [1, "brandFull"],
      brandNarrow: [1, "brandNarrow"],
      routerLink: [1, "routerLink"]
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [[3, "routerLink"], [3, "cHtmlAttr", "class"], [3, "cHtmlAttr"]],
    template: function SidebarBrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, SidebarBrandComponent_Conditional_0_Template, 3, 3, "a", 0)(1, SidebarBrandComponent_Conditional_1_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.brandImg() ? 0 : 1);
      }
    },
    dependencies: [RouterLink, HtmlAttributesDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarBrandComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-brand",
      imports: [RouterLink, HtmlAttributesDirective],
      host: {
        class: "sidebar-brand"
      },
      template: `@if (brandImg()) {
  <a [routerLink]="routerLink()">
    @if (brandFull()) {
      <img [cHtmlAttr]="brandFull()" [class]="'sidebar-brand-full'">
    }
    @if (brandNarrow()) {
      <img [cHtmlAttr]="brandNarrow()" [class]="'sidebar-brand-narrow'">
    }
  </a>
} @else {
  <ng-content />
}
`
    }]
  }], null, {
    brandFull: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "brandFull",
        required: false
      }]
    }],
    brandNarrow: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "brandNarrow",
        required: false
      }]
    }],
    routerLink: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "routerLink",
        required: false
      }]
    }]
  });
})();
var SidebarToggleDirective = class _SidebarToggleDirective {
  #sidebarService = inject(SidebarService);
  /**
   * Id of sidebar for toggle action.
   * @return string
   */
  id = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "id"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cSidebarToggle"
  }));
  /**
   * Sidebar property name for toggle action.
   *
   * @return 'visible' | 'unfoldable'
   * @default 'visible'
   */
  toggle = input("visible", ...ngDevMode ? [{
    debugName: "toggle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  toggleOpen($event) {
    $event.preventDefault();
    this.#sidebarService.toggle({
      toggle: this.toggle(),
      id: this.id()
    });
  }
  static \u0275fac = function SidebarToggleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarToggleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SidebarToggleDirective,
    selectors: [["", "cSidebarToggle", ""]],
    hostBindings: function SidebarToggleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SidebarToggleDirective_click_HostBindingHandler($event) {
          return ctx.toggleOpen($event);
        });
      }
    },
    inputs: {
      id: [1, "cSidebarToggle", "id"],
      toggle: [1, "toggle"]
    },
    exportAs: ["cSidebarToggle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cSidebarToggle]",
      exportAs: "cSidebarToggle",
      host: {
        "(click)": "toggleOpen($event)"
      }
    }]
  }], null, {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cSidebarToggle",
        required: false
      }]
    }],
    toggle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "toggle",
        required: false
      }]
    }]
  });
})();
var SidebarTogglerDirective = class _SidebarTogglerDirective {
  role = input("button", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get getStyles() {
    return {
      appearance: "button",
      "align-items": "flex-start",
      cursor: "pointer"
    };
  }
  static \u0275fac = function SidebarTogglerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarTogglerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SidebarTogglerDirective,
    selectors: [["", "cSidebarToggler", ""]],
    hostAttrs: [1, "sidebar-toggler"],
    hostVars: 3,
    hostBindings: function SidebarTogglerDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275styleMap(ctx.getStyles);
      }
    },
    inputs: {
      role: [1, "role"]
    },
    features: [\u0275\u0275HostDirectivesFeature([{
      directive: SidebarToggleDirective,
      inputs: ["cSidebarToggle", "cSidebarToggler", "toggle", "toggle"]
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cSidebarToggler]",
      hostDirectives: [{
        directive: SidebarToggleDirective,
        inputs: ["cSidebarToggle: cSidebarToggler", "toggle"]
      }],
      host: {
        "[attr.role]": "role()",
        class: "sidebar-toggler",
        "[style]": "getStyles"
      }
    }]
  }], null, {
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var SidebarHeaderComponent = class _SidebarHeaderComponent {
  static \u0275fac = function SidebarHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarHeaderComponent,
    selectors: [["c-sidebar-header"]],
    hostAttrs: [1, "sidebar-header"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SidebarHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-header",
      template: "<ng-content />",
      host: {
        class: "sidebar-header"
      }
    }]
  }], null, null);
})();
var SidebarFooterComponent = class _SidebarFooterComponent {
  static \u0275fac = function SidebarFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarFooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarFooterComponent,
    selectors: [["c-sidebar-footer"]],
    hostAttrs: [1, "sidebar-footer"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SidebarFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-footer",
      template: "<ng-content />",
      host: {
        class: "sidebar-footer"
      }
    }]
  }], null, null);
})();
var SidebarNavService = class _SidebarNavService {
  static \u0275fac = function SidebarNavService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SidebarNavService,
    factory: _SidebarNavService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavService, [{
    type: Injectable
  }], null, null);
})();
var SidebarNavHelper = class _SidebarNavHelper {
  itemType(item) {
    if (item.divider) {
      return "divider";
    } else if (item.title) {
      return "title";
    } else if (item.children && item.children.length > 0) {
      return "group";
    } else if (item.label) {
      return "label";
    } else if (!Object.keys(item).length) {
      return "empty";
    } else {
      return "link";
    }
  }
  isActive(router, item) {
    return router.isActive(item.url, false);
  }
  hasBadge = (item) => Boolean(item?.badge);
  hasIcon = (item) => Boolean(item?.icon) || item?.icon === "";
  hasIconComponent = (item) => Boolean(item?.iconComponent);
  getIconClass(item) {
    const classes = {
      "nav-icon": true
    };
    const icon = item.icon;
    classes[icon] = this.hasIcon(item);
    return classes;
  }
  static \u0275fac = function SidebarNavHelper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavHelper)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SidebarNavHelper,
    factory: _SidebarNavHelper.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavHelper, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SidebarNavGroupService = class _SidebarNavGroupService {
  sidebarNavGroupState = new BehaviorSubject({});
  sidebarNavGroupState$ = this.sidebarNavGroupState.asObservable();
  toggle(action) {
    this.sidebarNavGroupState.next(action);
  }
  static \u0275fac = function SidebarNavGroupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavGroupService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SidebarNavGroupService,
    factory: _SidebarNavGroupService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavGroupService, [{
    type: Injectable
  }], null, null);
})();
var SidebarNavIconPipe = class _SidebarNavIconPipe {
  transform(item, args) {
    const icon = item.icon;
    return {
      "nav-icon": true,
      [`${icon}`]: !!icon
    };
  }
  static \u0275fac = function SidebarNavIconPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavIconPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "cSidebarNavIcon",
    type: _SidebarNavIconPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavIconPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavIcon"
    }]
  }], null, null);
})();
var SidebarNavBadgePipe = class _SidebarNavBadgePipe {
  transform(item, args) {
    const badge = item.badge;
    return {
      badge: true,
      "ms-auto": true,
      "badge-sm": !badge.size,
      [`badge-${badge.size}`]: !!badge.size,
      [`bg-${badge.color}`]: !!badge.color,
      [`${badge.class}`]: !!badge.class
    };
  }
  static \u0275fac = function SidebarNavBadgePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavBadgePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "cSidebarNavBadge",
    type: _SidebarNavBadgePipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavBadgePipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavBadge"
    }]
  }], null, null);
})();
var SidebarNavLinkPipe = class _SidebarNavLinkPipe {
  transform(item) {
    const disabled = item?.attributes?.disabled;
    return {
      "nav-link": true,
      disabled,
      "btn-link": disabled,
      [`nav-link-${item.variant}`]: !!item.variant
    };
  }
  static \u0275fac = function SidebarNavLinkPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavLinkPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "cSidebarNavLink",
    type: _SidebarNavLinkPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavLink"
    }]
  }], null, null);
})();
var SidebarNavLinkContentComponent = class _SidebarNavLinkContentComponent {
  helper = inject(SidebarNavHelper);
  item = input({}, ...ngDevMode ? [{
    debugName: "item"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function SidebarNavLinkContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavLinkContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarNavLinkContentComponent,
    selectors: [["c-sidebar-nav-link-content"]],
    inputs: {
      item: [1, "item"]
    },
    features: [\u0275\u0275ProvidersFeature([SidebarNavHelper])],
    decls: 2,
    vars: 2,
    template: function SidebarNavLinkContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275conditionalCreate(1, SidebarNavLinkContentComponent_Conditional_1_Template, 2, 1, "ng-container");
      }
      if (rf & 2) {
        const itemLinkContent_r2 = \u0275\u0275storeLet(ctx.item());
        \u0275\u0275advance();
        \u0275\u0275conditional(itemLinkContent_r2 ? 1 : -1);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkContentComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-link-content",
      template: `
    @let itemLinkContent = item();
    @if (itemLinkContent) {
      <ng-container>{{ itemLinkContent?.name ?? '' }}</ng-container>
    }
  `,
      providers: [SidebarNavHelper]
    }]
  }], null, {
    item: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "item",
        required: false
      }]
    }]
  });
})();
var SidebarNavLinkComponent = class _SidebarNavLinkComponent {
  router = inject(Router);
  item = input(...ngDevMode ? [void 0, {
    debugName: "item"
  }] : (
    /* istanbul ignore next */
    []
  ));
  linkClick = output();
  linkType;
  href;
  linkActive;
  url;
  navigationEndObservable;
  navSubscription;
  constructor() {
    const router = this.router;
    this.navigationEndObservable = router.events.pipe(filter((event) => {
      return event instanceof NavigationEnd;
    }), takeUntilDestroyed());
  }
  ngOnInit() {
    const item = this.item() ?? {};
    this.url = typeof item.url === "string" ? item.url : this.router.serializeUrl(this.router.createUrlTree(item.url ?? [""]));
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? "" : item.href || this.url;
    this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
    this.navSubscription = this.navigationEndObservable.subscribe((event) => {
      const itemUrlArray = this.href.split(/[?#(;]/)[0].split("/");
      const urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split("/");
      this.linkActive = itemUrlArray.every((value, index) => value === urlArray[index]);
    });
  }
  ngOnDestroy() {
    this.navSubscription?.unsubscribe();
  }
  getLinkType() {
    return this.isDisabled() ? "disabled" : this.isExternalLink() ? "external" : "link";
  }
  isDisabled() {
    return this.item()?.attributes?.["disabled"];
  }
  isExternalLink() {
    const item = this.item() ?? {};
    const linkPath = Array.isArray(item.url) ? item.url[0] : item.url;
    return !!item.href || linkPath?.substring(0, 4) === "http";
  }
  linkClicked() {
    this.linkClick?.emit();
  }
  static \u0275fac = function SidebarNavLinkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavLinkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarNavLinkComponent,
    selectors: [["c-sidebar-nav-link"]],
    inputs: {
      item: [1, "item"]
    },
    outputs: {
      linkClick: "linkClick"
    },
    features: [\u0275\u0275ProvidersFeature([SidebarNavHelper])],
    decls: 6,
    vars: 3,
    consts: [["iconTemplate", ""], [3, "cHtmlAttr", "class"], [3, "cHtmlAttr", "href", "class"], ["routerLinkActive", "active", 3, "cHtmlAttr", "fragment", "class", "preserveFragment", "queryParamsHandling", "queryParams", "replaceUrl", "routerLinkActiveOptions", "routerLink", "skipLocationChange", "state", "target"], [3, "cHtmlAttr"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "item"], [3, "class"], [3, "click", "cHtmlAttr", "href"], ["routerLinkActive", "active", 3, "click", "cHtmlAttr", "fragment", "preserveFragment", "queryParamsHandling", "queryParams", "replaceUrl", "routerLinkActiveOptions", "routerLink", "skipLocationChange", "state", "target"], [1, "nav-icon"], [3, "cIcon", "customClasses", "name"]],
    template: function SidebarNavLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275conditionalCreate(1, SidebarNavLinkComponent_Case_1_Template, 5, 12, "a", 1)(2, SidebarNavLinkComponent_Case_2_Template, 5, 13, "a", 2)(3, SidebarNavLinkComponent_Case_3_Template, 5, 24, "a", 3);
        \u0275\u0275template(4, SidebarNavLinkComponent_ng_template_4_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275storeLet(ctx.item() ?? \u0275\u0275pureFunction0(2, _c3));
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.linkType) === "disabled" ? 1 : tmp_2_0 === "external" ? 2 : 3);
      }
    },
    dependencies: [RouterModule, RouterLink, RouterLinkActive, HtmlAttributesDirective, IconDirective, SidebarNavLinkContentComponent, NgTemplateOutlet, SidebarNavLinkPipe, SidebarNavBadgePipe, SidebarNavIconPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-link",
      providers: [SidebarNavHelper],
      imports: [RouterModule, HtmlAttributesDirective, IconDirective, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavBadgePipe, SidebarNavIconPipe, NgTemplateOutlet],
      template: `@let linkItem = item() ?? {};

@switch (linkType) {
  @case ('disabled') {
    <a [cHtmlAttr]="linkItem.attributes ?? {}" [class]="linkItem | cSidebarNavLink">
      <ng-container *ngTemplateOutlet="iconTemplate; context: {$implicit: linkItem}" />
      <c-sidebar-nav-link-content [item]="linkItem" />
      @if (linkItem.badge) {
        <span [class]="linkItem | cSidebarNavBadge">{{ linkItem.badge?.text }}</span>
      }
    </a>
  }
  @case ('external') {
    <a (click)="linkClicked()" [cHtmlAttr]="linkItem.attributes ?? {}" [href]="href" [class]="linkItem | cSidebarNavLink">
      <ng-container *ngTemplateOutlet="iconTemplate; context: {$implicit: linkItem}" />
      <c-sidebar-nav-link-content [item]="linkItem" />
      @if (linkItem.badge) {
        <span [class]="linkItem | cSidebarNavBadge">{{ linkItem.badge?.text }}</span>
      }
    </a>
  }
  @default {
    <a (click)="linkClicked()"
       [cHtmlAttr]="linkItem.attributes ?? {}"
       [fragment]="linkItem.linkProps?.fragment"
       [class]="linkItem | cSidebarNavLink"
       [preserveFragment]="linkItem.linkProps?.preserveFragment ?? false"
       [queryParamsHandling]="linkItem.linkProps?.queryParamsHandling"
       [queryParams]="linkItem.linkProps?.queryParams ?? null"
       [replaceUrl]="linkItem.linkProps?.replaceUrl ?? false"
       [routerLinkActiveOptions]="linkItem.linkProps?.routerLinkActiveOptions ?? { exact: false }"
       [routerLink]="linkItem.url"
       [skipLocationChange]="linkItem.linkProps?.skipLocationChange ?? false"
       [state]="linkItem.linkProps?.state ?? {}"
       [target]="linkItem.attributes?.['target']"
       routerLinkActive="active"
    >
      <!--    [class.active]="linkActive"-->
      <ng-container *ngTemplateOutlet="iconTemplate ; context: {$implicit: linkItem}" />
      <c-sidebar-nav-link-content [item]="linkItem" />
      @if (linkItem.badge) {
        <span [class]="linkItem | cSidebarNavBadge">{{ linkItem.badge?.text }}</span>
      }
    </a>
  }
}
<ng-template #iconTemplate let-item>
  <!--  <i *ngIf="item?.icon" [class]="item | cSidebarNavIcon"></i>-->
  @if (item?.icon) {
    <span class="nav-icon">
      <span [class]="item.icon ?? ''"></span>
    </span>
  }
  @if (item?.iconComponent) {
    <svg
      [cIcon]="item.iconComponent?.content"
      [customClasses]="item | cSidebarNavIcon"
      [name]="item.iconComponent?.name"
    ></svg>
  }
  @if (!item?.icon && !item?.iconComponent) {
    <span [class]="item | cSidebarNavIcon"></span>
  }
</ng-template>
`
    }]
  }], () => [], {
    item: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "item",
        required: false
      }]
    }],
    linkClick: [{
      type: Output,
      args: ["linkClick"]
    }]
  });
})();
var SidebarNavLabelComponent = class _SidebarNavLabelComponent {
  helper = inject(SidebarNavHelper);
  item = input({}, ...ngDevMode ? [{
    debugName: "item"
  }] : (
    /* istanbul ignore next */
    []
  ));
  itemClass = computed(() => {
    const classes = {
      "c-nav-label": true,
      "c-active": true
    };
    const itemClass = this.item().class;
    if (itemClass) {
      classes[itemClass] = !!itemClass;
    }
    return classes;
  }, ...ngDevMode ? [{
    debugName: "itemClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  labelIconClass = computed(() => {
    const item = this.item();
    const iconClasses = this.helper.getIconClass(item);
    const variant = `text-${item.label?.variant}`;
    iconClasses[variant] = !!item.label?.variant;
    const labelClass = item.label?.class ?? "";
    iconClasses[labelClass] = !!labelClass;
    return iconClasses;
  }, ...ngDevMode ? [{
    debugName: "labelIconClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function SidebarNavLabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavLabelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarNavLabelComponent,
    selectors: [["c-sidebar-nav-label"]],
    inputs: {
      item: [1, "item"]
    },
    decls: 6,
    vars: 9,
    consts: [[3, "cHtmlAttr", "href"], [3, "class"]],
    template: function SidebarNavLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275elementStart(1, "a", 0);
        \u0275\u0275conditionalCreate(2, SidebarNavLabelComponent_Conditional_2_Template, 1, 2, "i", 1);
        \u0275\u0275elementContainerStart(3);
        \u0275\u0275text(4);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275conditionalCreate(5, SidebarNavLabelComponent_Conditional_5_Template, 3, 5, "span", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const labelItem_r3 = \u0275\u0275storeLet(ctx.item());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.itemClass());
        \u0275\u0275property("href", \u0275\u0275interpolate(labelItem_r3.url), \u0275\u0275sanitizeUrl)("cHtmlAttr", labelItem_r3.attributes);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.helper.hasIcon(labelItem_r3) ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(labelItem_r3.name);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.helper.hasBadge(labelItem_r3) ? 5 : -1);
      }
    },
    dependencies: [HtmlAttributesDirective, SidebarNavBadgePipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLabelComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-label",
      imports: [HtmlAttributesDirective, SidebarNavBadgePipe],
      template: `@let labelItem = item();
<a [cHtmlAttr]="labelItem.attributes"
   [class]="itemClass()"
   href="{{labelItem.url}}">
  @if (helper.hasIcon(labelItem)) {
    <i [class]="labelIconClass()"></i>
  }
  <ng-container>{{ labelItem.name }}</ng-container>
  @if (helper.hasBadge(labelItem)) {
    <span [class]="labelItem | cSidebarNavBadge">{{ labelItem.badge?.text ?? '' }}</span>
  }
</a>
`
    }]
  }], null, {
    item: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "item",
        required: false
      }]
    }]
  });
})();
var SidebarNavTitleComponent = class _SidebarNavTitleComponent {
  #elementRef = inject(ElementRef);
  #renderer = inject(Renderer2);
  item = input(...ngDevMode ? [void 0, {
    debugName: "item"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #itemEffect = effect(() => {
    const item = this.item();
    if (item?.name) {
      const nativeElement = this.#elementRef.nativeElement;
      const name = this.#renderer.createText(item.name);
      if (item?.class) {
        const classes = item.class;
        this.#renderer.addClass(nativeElement, classes);
      }
      if (item?.wrapper) {
        const wrapper = this.#renderer.createElement(item.wrapper.element);
        this.addAttribs(item.wrapper.attributes, wrapper);
        this.#renderer.appendChild(wrapper, name);
        this.#renderer.appendChild(nativeElement, wrapper);
      } else {
        this.#renderer.appendChild(nativeElement, name);
      }
    }
  }, ...ngDevMode ? [{
    debugName: "#itemEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  addAttribs(attribs, element) {
    if (attribs) {
      for (const attr in attribs) {
        if (attr === "style" && typeof attribs[attr] === "object") {
          this.setStyle(attribs[attr], element);
        } else if (attr === "class") {
          this.addClass(attribs[attr], element);
        } else {
          this.setAttrib(attr, attribs[attr], element);
        }
      }
    }
  }
  setStyle(styles, el) {
    for (const style2 in styles) {
      if (style2) {
        this.#renderer.setStyle(el, style2, styles[style2]);
      }
    }
  }
  addClass(classes, el) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.#renderer.addClass(el, element);
    });
  }
  setAttrib(key, value, el) {
    this.#renderer.setAttribute(el, key, value);
  }
  static \u0275fac = function SidebarNavTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavTitleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarNavTitleComponent,
    selectors: [["c-sidebar-nav-title"]],
    inputs: {
      item: [1, "item"]
    },
    decls: 0,
    vars: 0,
    template: function SidebarNavTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavTitleComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-title",
      template: ""
    }]
  }], null, {
    item: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "item",
        required: false
      }]
    }]
  });
})();
var SidebarNavDividerComponent = class _SidebarNavDividerComponent {
  item = input(...ngDevMode ? [void 0, {
    debugName: "item"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function SidebarNavDividerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavDividerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarNavDividerComponent,
    selectors: [["c-sidebar-nav-divider"]],
    inputs: {
      item: [1, "item"]
    },
    decls: 0,
    vars: 0,
    template: function SidebarNavDividerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavDividerComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-divider",
      template: ``
    }]
  }], null, {
    item: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "item",
        required: false
      }]
    }]
  });
})();
var SidebarNavItemClassPipe = class _SidebarNavItemClassPipe {
  helper = inject(SidebarNavHelper);
  // transform(item: any, ...args: any[]): any {
  transform(item, args) {
    const itemType = this.helper.itemType(item);
    let itemClass;
    if (["divider", "title"].includes(itemType)) {
      itemClass = `nav-${itemType}`;
    } else if (itemType === "group") {
      itemClass = "";
    } else {
      itemClass = "nav-item";
    }
    return item.class ? `${itemClass} ${item.class}` : itemClass;
  }
  static \u0275fac = function SidebarNavItemClassPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavItemClassPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "cSidebarNavItemClass",
    type: _SidebarNavItemClassPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavItemClassPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavItemClass"
    }]
  }], null, null);
})();
var SidebarNavGroupComponent = class _SidebarNavGroupComponent {
  #router = inject(Router);
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  #sidebarNavGroupService = inject(SidebarNavGroupService);
  helper = inject(SidebarNavHelper);
  constructor() {
    const router = this.#router;
    this.navigationEndObservable = router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }
  item = input(...ngDevMode ? [void 0, {
    debugName: "item"
  }] : (
    /* istanbul ignore next */
    []
  ));
  dropdownMode = input("path", ...ngDevMode ? [{
    debugName: "dropdownMode"
  }] : (
    /* istanbul ignore next */
    []
  ));
  show = input(...ngDevMode ? [void 0, {
    debugName: "show"
  }] : (
    /* istanbul ignore next */
    []
  ));
  compact = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "compact"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    return {
      "nav-group": true,
      show: this.open()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  sidebarNav = viewChild.required(forwardRef(() => SidebarNavComponent), {
    read: ElementRef
  });
  navigationEndObservable;
  navSubscription;
  navGroupSubscription;
  open = signal(void 0, ...ngDevMode ? [{
    debugName: "open"
  }] : (
    /* istanbul ignore next */
    []
  ));
  navItems = signal([], ...ngDevMode ? [{
    debugName: "navItems"
  }] : (
    /* istanbul ignore next */
    []
  ));
  display = signal({
    display: "block"
  }, ...ngDevMode ? [{
    debugName: "display"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.navItems.set([...this.item()?.children ?? []]);
    this.navSubscription = this.navigationEndObservable.subscribe((event) => {
      if (this.dropdownMode() !== "none") {
        const samePath = this.samePath(event.url);
        this.openGroup(samePath);
      }
    });
    if (this.samePath(this.#router.routerState.snapshot.url)) {
      this.openGroup(true);
    }
    this.navGroupSubscription = this.#sidebarNavGroupService.sidebarNavGroupState$.subscribe((next) => {
      if (this.dropdownMode() === "close" && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
        const url = next.sidebarNavGroup.item()?.url ?? [];
        const normUrl = Array.isArray(url) ? this.#router.createUrlTree(url).toString() : url;
        const itemUrl = this.item()?.url ?? [];
        const normItemUrl = Array.isArray(normUrl) ? this.#router.createUrlTree(normUrl).toString() : normUrl;
        if (normUrl.startsWith(normItemUrl)) {
          return;
        }
        if (this.samePath(this.#router.routerState.snapshot.url)) {
          this.openGroup(true);
          return;
        }
        this.openGroup(false);
      }
    });
  }
  samePath(url) {
    const itemUrl = this.item()?.url ?? [];
    const itemArray = Array.isArray(itemUrl) ? itemUrl : itemUrl.split("/");
    const urlArray = url.split("/");
    return itemArray?.every((value, index) => {
      return value === urlArray[index];
    });
  }
  openGroup(open) {
    this.open.set(open);
  }
  toggleGroup($event) {
    $event.preventDefault();
    this.openGroup(!this.open());
    if (this.open()) {
      this.#sidebarNavGroupService.toggle({
        open: this.open(),
        sidebarNavGroup: this
      });
    }
  }
  ngOnDestroy() {
    this.navSubscription?.unsubscribe();
  }
  onAnimationStart($event) {
    this.display.set({
      display: "block"
    });
    setTimeout(() => {
      const host = this.sidebarNav()?.nativeElement;
      if ($event.toState === "open" && host) {
        this.#renderer.setStyle(host, "height", `${host["scrollHeight"]}px`);
      }
    });
  }
  onAnimationDone($event) {
    setTimeout(() => {
      const host = this.sidebarNav()?.nativeElement;
      if ($event.toState === "open" && host) {
        this.#renderer.setStyle(host, "height", "auto");
      }
      if ($event.toState === "closed") {
        setTimeout(() => {
          this.display.set(null);
        });
      }
    });
  }
  static \u0275fac = function SidebarNavGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarNavGroupComponent,
    selectors: [["c-sidebar-nav-group"]],
    viewQuery: function SidebarNavGroupComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.sidebarNav, SidebarNavComponent, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function SidebarNavGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      item: [1, "item"],
      dropdownMode: [1, "dropdownMode"],
      show: [1, "show"],
      compact: [1, "compact"]
    },
    features: [\u0275\u0275ProvidersFeature([SidebarNavHelper, SidebarNavGroupService])],
    decls: 9,
    vars: 15,
    consts: [["iconTemplate", ""], ["href", "", 1, "nav-link", "nav-group-toggle", 3, "click", "cHtmlAttr"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class"], [3, "compact", "dropdownMode", "groupItems", "navItems"], [1, "nav-icon"], [3, "cIcon", "customClasses", "name"]],
    template: function SidebarNavGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275elementStart(1, "a", 1);
        \u0275\u0275listener("click", function SidebarNavGroupComponent_Template_a_click_1_listener($event) {
          return ctx.toggleGroup($event);
        });
        \u0275\u0275template(2, SidebarNavGroupComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementContainerStart(3);
        \u0275\u0275text(4);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275conditionalCreate(5, SidebarNavGroupComponent_Conditional_5_Template, 3, 5, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "c-sidebar-nav", 4);
        \u0275\u0275listener("@openClose.done", function SidebarNavGroupComponent_Template_c_sidebar_nav_animation_openClose_done_6_listener($event) {
          return ctx.onAnimationDone($event);
        })("@openClose.start", function SidebarNavGroupComponent_Template_c_sidebar_nav_animation_openClose_start_6_listener($event) {
          return ctx.onAnimationStart($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, SidebarNavGroupComponent_ng_template_7_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const iconTemplate_r3 = \u0275\u0275reference(8);
        const grpItem_r4 = \u0275\u0275storeLet(ctx.item());
        \u0275\u0275advance();
        \u0275\u0275property("cHtmlAttr", grpItem_r4 == null ? null : grpItem_r4.attributes);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", iconTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c9, grpItem_r4));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(grpItem_r4 == null ? null : grpItem_r4.name);
        \u0275\u0275advance();
        \u0275\u0275conditional((grpItem_r4 == null ? null : grpItem_r4.badge) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleMap(ctx.display());
        \u0275\u0275property("@openClose", ctx.open() ? "open" : "closed")("compact", ctx.compact())("dropdownMode", ctx.dropdownMode())("groupItems", true)("navItems", ctx.navItems());
      }
    },
    dependencies: () => [HtmlAttributesDirective, IconDirective, NgTemplateOutlet, SidebarNavComponent, SidebarNavIconPipe, SidebarNavBadgePipe],
    styles: [".nav-group-toggle[_ngcontent-%COMP%]{cursor:pointer}.nav-group-items[_ngcontent-%COMP%]{display:block}"],
    data: {
      animation: [trigger("openClose", [state("open", style({
        height: "*"
      })), state("closed", style({
        height: "0px"
      })), transition("open <=> closed", [animate(".15s ease")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-group",
      providers: [SidebarNavHelper, SidebarNavGroupService],
      imports: [HtmlAttributesDirective, IconDirective, NgTemplateOutlet, SidebarNavIconPipe, SidebarNavBadgePipe, forwardRef(() => SidebarNavComponent)],
      animations: [trigger("openClose", [state("open", style({
        height: "*"
      })), state("closed", style({
        height: "0px"
      })), transition("open <=> closed", [animate(".15s ease")])])],
      host: {
        "[class]": "hostClasses()"
      },
      template: `@let grpItem = item();
<a (click)="toggleGroup($event)"
   [cHtmlAttr]="grpItem?.attributes"
   class="nav-link nav-group-toggle"
   href>
  <ng-container *ngTemplateOutlet="iconTemplate ; context: {$implicit: grpItem}" />
  <ng-container>{{ grpItem?.name }}</ng-container>
  @if (grpItem?.badge) {
    <span [class]="grpItem | cSidebarNavBadge">{{ grpItem?.badge?.text }}</span>
  }
</a>
<c-sidebar-nav
  (@openClose.done)="onAnimationDone($event)"
  (@openClose.start)="onAnimationStart($event)"
  [@openClose]="open() ? 'open' : 'closed'"
  [compact]="compact()"
  [dropdownMode]="dropdownMode()"
  [groupItems]="true"
  [navItems]="navItems()"
  [style]="display()"
/>

<ng-template #iconTemplate let-item>
  <!--  <i *ngIf="item?.icon" [class]="item | cSidebarNavIcon"></i>-->
  @if (item?.icon) {
    <span class="nav-icon">
    <span [class]="item.icon ?? ''"></span>
  </span>
  }
  @if (item?.iconComponent) {
    <svg
      [cIcon]="item.iconComponent?.content"
      [customClasses]="item | cSidebarNavIcon"
      [name]="item.iconComponent?.name"
    />
  }
  @if (!item?.icon && !item?.iconComponent) {
    <span [class]="item | cSidebarNavIcon"></span>
  }
</ng-template>
`,
      styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"]
    }]
  }], () => [], {
    item: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "item",
        required: false
      }]
    }],
    dropdownMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dropdownMode",
        required: false
      }]
    }],
    show: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "show",
        required: false
      }]
    }],
    compact: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "compact",
        required: false
      }]
    }],
    sidebarNav: [{
      type: ViewChild,
      args: [forwardRef(() => SidebarNavComponent), __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var SidebarNavComponent = class _SidebarNavComponent {
  sidebar = inject(SidebarComponent, {
    optional: true
  });
  helper = inject(SidebarNavHelper);
  router = inject(Router);
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  #sidebarService = inject(SidebarService);
  navItems = input([], ...ngDevMode ? [{
    debugName: "navItems"
  }] : (
    /* istanbul ignore next */
    []
  ));
  dropdownMode = input("path", ...ngDevMode ? [{
    debugName: "dropdownMode"
  }] : (
    /* istanbul ignore next */
    []
  ));
  groupItems = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "groupItems"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  compact = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "compact"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  role = input("navigation", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const groupItems = this.groupItems();
    return {
      "sidebar-nav": !groupItems,
      "nav-group-items": groupItems,
      compact: groupItems && this.compact()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  // @HostBinding('class.nav-group-items')
  // get sidebarNavGroupItemsClass(): boolean {
  //   return !!this.groupItems;
  // }
  navItemsArray = signal([], ...ngDevMode ? [{
    debugName: "navItemsArray"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnChanges(changes) {
    const navItems = this.navItems();
    this.navItemsArray.set(Array.isArray(navItems) ? navItems.slice() : []);
  }
  hideMobile() {
    if (this.sidebar && this.sidebar.sidebarState.mobile) {
      this.#sidebarService.toggle({
        toggle: "visible",
        sidebar: this.sidebar
      });
    }
  }
  static \u0275fac = function SidebarNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SidebarNavComponent,
    selectors: [["c-sidebar-nav"]],
    hostVars: 3,
    hostBindings: function SidebarNavComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      navItems: [1, "navItems"],
      dropdownMode: [1, "dropdownMode"],
      groupItems: [1, "groupItems"],
      compact: [1, "compact"],
      role: [1, "role"]
    },
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["rla", "routerLinkActive"], ["routerLinkActive", "show", 3, "dropdownMode", "item", "class", "routerLinkActiveOptions", "compact"], [3, "cHtmlAttr", "item", "class"], [3, "item", "class"], ["routerLinkActive", "show", 3, "dropdownMode", "item", "routerLinkActiveOptions", "compact"], [3, "cHtmlAttr", "item"], [3, "item"], [3, "linkClick", "item"]],
    template: function SidebarNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275repeaterCreate(0, SidebarNavComponent_For_1_Template, 6, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275projection(2);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.navItemsArray());
      }
    },
    dependencies: () => [HtmlAttributesDirective, SidebarNavLinkComponent, SidebarNavLabelComponent, SidebarNavTitleComponent, SidebarNavDividerComponent, SidebarNavGroupComponent, RouterModule, RouterLinkActive, SidebarNavItemClassPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav",
      imports: [HtmlAttributesDirective, SidebarNavLinkComponent, SidebarNavLabelComponent, SidebarNavTitleComponent, SidebarNavDividerComponent, forwardRef(() => SidebarNavGroupComponent), SidebarNavItemClassPipe, RouterModule],
      host: {
        "[class]": "hostClasses()",
        "[attr.role]": "role()"
      },
      template: `@for (nItem of navItemsArray(); track nItem) {
  @switch (helper.itemType(nItem)) {
    @case ('group') {
      <c-sidebar-nav-group
        #rla="routerLinkActive"
        [dropdownMode]="dropdownMode()"
        [item]="nItem"
        [class]="nItem | cSidebarNavItemClass"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="show"
        [compact]="compact()"
      />
    }
    @case ('divider') {
      <c-sidebar-nav-divider
        [cHtmlAttr]="nItem.attributes ?? {}"
        [item]="nItem"
        [class]="nItem | cSidebarNavItemClass"
      />
    }
    @case ('title') {
      <c-sidebar-nav-title
        [cHtmlAttr]="nItem.attributes ?? {}"
        [item]="nItem"
        [class]="nItem | cSidebarNavItemClass"
      />
    }
    @case ('label') {
      <c-sidebar-nav-label
        [item]="nItem"
        [class]="nItem | cSidebarNavItemClass"
      />
    }
    @case ('empty') {
      <ng-container />
    }
    @default {
      <c-sidebar-nav-link
        (linkClick)="hideMobile()"
        [item]="nItem"
        [class]="nItem | cSidebarNavItemClass"
      />
    }
  }
}
<ng-content />
`
    }]
  }], null, {
    navItems: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "navItems",
        required: false
      }]
    }],
    dropdownMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dropdownMode",
        required: false
      }]
    }],
    groupItems: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "groupItems",
        required: false
      }]
    }],
    compact: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "compact",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var SidebarModule = class _SidebarModule {
  static \u0275fac = function SidebarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SidebarModule,
    imports: [SidebarComponent, SidebarBrandComponent, SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarNavBadgePipe, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent, SidebarToggleDirective, SidebarTogglerDirective],
    exports: [SidebarComponent, SidebarToggleDirective, SidebarTogglerDirective, SidebarBrandComponent, SidebarNavComponent, SidebarHeaderComponent, SidebarFooterComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SidebarService, SidebarNavHelper, SidebarNavGroupService],
    imports: [SidebarNavComponent, SidebarNavGroupComponent, SidebarNavLinkComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarModule, [{
    type: NgModule,
    args: [{
      imports: [SidebarComponent, SidebarBrandComponent, SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarNavBadgePipe, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent, SidebarToggleDirective, SidebarTogglerDirective],
      exports: [SidebarComponent, SidebarToggleDirective, SidebarTogglerDirective, SidebarBrandComponent, SidebarNavComponent, SidebarHeaderComponent, SidebarFooterComponent],
      providers: [SidebarService, SidebarNavHelper, SidebarNavGroupService]
    }]
  }], null, null);
})();
var SpinnerComponent = class _SpinnerComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Label for accessibility.
   * @type string
   * @default 'Loading...'
   */
  label = input("Loading...", ...ngDevMode ? [{
    debugName: "label"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Size the component small.
   * @return string
   * @values 'sm'
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set the button variant to an outlined button or a ghost button.
   * @values 'border' | 'grow'
   * @default 'border'
   */
  variant = input("border", ...ngDevMode ? [{
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Default role attr for Spinner. [docs]
   * @type string
   * @default 'status'
   */
  role = input("status", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const color = this.color();
    const size = this.size();
    const variant = this.variant();
    return {
      [`spinner-${variant}`]: true,
      [`text-${color}`]: !!color,
      [`spinner-${variant}-${size}`]: !!size
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SpinnerComponent,
    selectors: [["c-spinner"]],
    hostVars: 3,
    hostBindings: function SpinnerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "color"],
      label: [1, "label"],
      size: [1, "size"],
      variant: [1, "variant"],
      role: [1, "role"]
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "visually-hidden"]],
    template: function SpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0, 0, null, SpinnerComponent_ProjectionFallback_0_Template, 2, 1);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{
      selector: "c-spinner",
      host: {
        "[attr.role]": "role()",
        "[class]": "hostClasses()"
      },
      template: '<ng-content>\n  <span class="visually-hidden">{{ label() }}</span>\n</ng-content>\n'
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    label: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "label",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }]
  });
})();
var SpinnerModule = class _SpinnerModule {
  static \u0275fac = function SpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SpinnerModule,
    imports: [SpinnerComponent],
    exports: [SpinnerComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerModule, [{
    type: NgModule,
    args: [{
      exports: [SpinnerComponent],
      imports: [SpinnerComponent]
    }]
  }], null, null);
})();
var TableColorDirective = class _TableColorDirective {
  /**
   * Use contextual color for tables, table rows or individual cells.
   * @return Colors
   */
  color = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "color"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTableColor"
  }));
  hostClasses = computed(() => {
    const color = this.color();
    return {
      [`table-${color}`]: !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function TableColorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableColorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TableColorDirective,
    selectors: [["", "cTableColor", ""]],
    hostVars: 2,
    hostBindings: function TableColorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      color: [1, "cTableColor", "color"]
    },
    exportAs: ["cTableColor"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTableColor]",
      exportAs: "cTableColor",
      host: {
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTableColor",
        required: false
      }]
    }]
  });
})();
var TableActiveDirective = class _TableActiveDirective {
  /**
   * Highlight a table row or cell
   * @return boolean
   */
  active = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "active"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTableActive",
    transform: booleanAttribute
  }));
  static \u0275fac = function TableActiveDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableActiveDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TableActiveDirective,
    selectors: [["", "cTableActive", ""]],
    hostVars: 2,
    hostBindings: function TableActiveDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("table-active", ctx.active());
      }
    },
    inputs: {
      active: [1, "cTableActive", "active"]
    },
    exportAs: ["cTableActive"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableActiveDirective, [{
    type: Directive,
    args: [{
      selector: "[cTableActive]",
      exportAs: "cTableActive",
      host: {
        "[class.table-active]": "active()"
      }
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTableActive",
        required: false
      }]
    }]
  });
})();
var TableDirective = class _TableDirective {
  static ngAcceptInputType_bordered;
  static ngAcceptInputType_borderless;
  static ngAcceptInputType_hover;
  static ngAcceptInputType_small;
  static ngAcceptInputType_striped;
  static ngAcceptInputType_stripedColumns;
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  /**
   * Set the vertical alignment.
   * @return string
   * @values 'bottom' | 'middle' | 'top'
   */
  align = input(...ngDevMode ? [void 0, {
    debugName: "align"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the border color of the component to one of CoreUI’s themed colors.
   * @return Colors
   */
  borderColor = input(...ngDevMode ? [void 0, {
    debugName: "borderColor"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Add borders on all sides of the table and cells.
   * @return boolean
   */
  bordered = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "bordered"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Remove borders on all sides of the table and cells.
   * @return boolean
   */
  borderless = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "borderless"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Put the `<caption>` on the top of the table.
   * @return 'top'
   * @values 'top'
   */
  caption = input(...ngDevMode ? [void 0, {
    debugName: "caption"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @return Colors
   */
  color = input(...ngDevMode ? [void 0, {
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Enable a hover state on table rows within table body.
   * @return boolean
   */
  hover = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "hover"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
   * @values: {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  responsive = input(...ngDevMode ? [void 0, {
    debugName: "responsive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Make table more compact by cutting all cell `padding` in half.
   * @return boolean
   */
  small = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "small"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Add zebra-striping to any table row within the table body.
   * @return boolean
   */
  striped = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "striped"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Add zebra-striping to any table column.
   * @return boolean
   * @since 4.2.4
   */
  stripedColumns = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "stripedColumns"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    const align = this.align();
    const caption = this.caption();
    const borderColor = this.borderColor();
    const bordered = this.bordered();
    const borderless = this.borderless();
    const color = this.color();
    const hover = this.hover();
    const small = this.small();
    const striped = this.striped();
    const stripedColumns = this.stripedColumns();
    return {
      table: true,
      [`align-${align}`]: !!align,
      [`caption-${caption}`]: !!caption,
      [`border-${borderColor}`]: !!borderColor,
      "table-bordered": bordered,
      "table-borderless": borderless,
      [`table-${color}`]: !!color,
      "table-hover": hover,
      "table-sm": small,
      "table-striped": striped,
      "table-striped-columns": stripedColumns
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #responsiveWrapperEffect = afterRenderEffect({
    // this fixes RuntimeError: NG0500: During hydration Angular expected <abc> but found <xyz>.
    // Find more at https://angular.dev/errors/NG0500
    write: () => {
      const responsive = this.responsive();
      if (!!responsive) {
        const nativeElement = this.#hostElement.nativeElement;
        const wrapper = this.#renderer.createElement("div");
        const className = responsive === true ? "table-responsive" : `table-responsive-${responsive}`;
        this.#renderer.addClass(wrapper, className);
        const parentNode = this.#renderer.parentNode(nativeElement);
        this.#renderer.appendChild(parentNode, wrapper);
        this.#renderer.insertBefore(parentNode, wrapper, nativeElement);
        this.#renderer.appendChild(wrapper, nativeElement);
      }
    }
  });
  static \u0275fac = function TableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TableDirective,
    selectors: [["table", "cTable", ""]],
    hostAttrs: [1, "table"],
    hostVars: 2,
    hostBindings: function TableDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      align: [1, "align"],
      borderColor: [1, "borderColor"],
      bordered: [1, "bordered"],
      borderless: [1, "borderless"],
      caption: [1, "caption"],
      color: [1, "color"],
      hover: [1, "hover"],
      responsive: [1, "responsive"],
      small: [1, "small"],
      striped: [1, "striped"],
      stripedColumns: [1, "stripedColumns"]
    },
    exportAs: ["cTable"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableDirective, [{
    type: Directive,
    args: [{
      selector: "table[cTable]",
      exportAs: "cTable",
      host: {
        class: "table",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    align: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "align",
        required: false
      }]
    }],
    borderColor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "borderColor",
        required: false
      }]
    }],
    bordered: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "bordered",
        required: false
      }]
    }],
    borderless: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "borderless",
        required: false
      }]
    }],
    caption: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "caption",
        required: false
      }]
    }],
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    hover: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hover",
        required: false
      }]
    }],
    responsive: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "responsive",
        required: false
      }]
    }],
    small: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "small",
        required: false
      }]
    }],
    striped: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "striped",
        required: false
      }]
    }],
    stripedColumns: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stripedColumns",
        required: false
      }]
    }]
  });
})();
var TableModule = class _TableModule {
  static \u0275fac = function TableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TableModule,
    imports: [TableDirective, TableColorDirective, TableActiveDirective],
    exports: [TableDirective, TableColorDirective, TableActiveDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      exports: [TableDirective, TableColorDirective, TableActiveDirective],
      imports: [TableDirective, TableColorDirective, TableActiveDirective]
    }]
  }], null, null);
})();
var TabService = class _TabService {
  activeTabPaneIdx = new Subject();
  activeTabPaneIdx$ = this.activeTabPaneIdx.asObservable();
  setActiveTabIdx(tabContentState) {
    this.activeTabPaneIdx.next(tabContentState);
  }
  static \u0275fac = function TabService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TabService,
    factory: _TabService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TabPaneComponent = class _TabPaneComponent {
  #changeDetectorRef = inject(ChangeDetectorRef);
  #tabService = inject(TabService);
  constructor() {
    this.subscribeTabService();
  }
  tabPaneIdx;
  tabContent;
  #tabServiceSubscription;
  set active(value) {
    const newValue = booleanAttribute(value);
    if (this.#active !== newValue) {
      this.#active = newValue;
      this.#changeDetectorRef.markForCheck();
    }
  }
  get active() {
    return this.#active;
  }
  #active = false;
  get hostClasses() {
    return {
      "tab-pane": true,
      fade: true,
      show: this.active,
      active: this.active
    };
  }
  role = "tabpanel";
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.#tabServiceSubscription = this.#tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (tabContentState.tabContent === this.tabContent) {
          this.active = tabContentState.activeIdx === this.tabPaneIdx;
        }
      });
    } else {
      this.#tabServiceSubscription?.unsubscribe();
    }
  }
  static \u0275fac = function TabPaneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabPaneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabPaneComponent,
    selectors: [["c-tab-pane"]],
    hostAttrs: [1, "tab-pane"],
    hostVars: 3,
    hostBindings: function TabPaneComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role);
        \u0275\u0275classMap(ctx.hostClasses);
      }
    },
    inputs: {
      role: "role"
    },
    exportAs: ["cTabPane"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function TabPaneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPaneComponent, [{
    type: Component,
    args: [{
      selector: "c-tab-pane",
      template: "<ng-content />",
      exportAs: "cTabPane",
      host: {
        class: "tab-pane"
      },
      styles: [":host{display:block}\n"]
    }]
  }], () => [], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var TabContentComponent = class _TabContentComponent {
  #changeDetectorRef = inject(ChangeDetectorRef);
  #tabService = inject(TabService);
  /**
   * Set active tabPane index
   * @type number
   */
  set activeTabPaneIdx(value) {
    const newValue = value;
    if (this.#activeTabPaneIdx != newValue) {
      this.#activeTabPaneIdx = newValue;
      this.activeTabPaneIdxChange?.emit(newValue);
      this.#changeDetectorRef.markForCheck();
      this.#changeDetectorRef.detectChanges();
    }
  }
  get activeTabPaneIdx() {
    return this.#activeTabPaneIdx;
  }
  #activeTabPaneIdx = -1;
  /**
   * Event emitted on the active tab pane index change.
   */
  activeTabPaneIdxChange = output();
  panes;
  #tabServiceSubscription;
  ngAfterContentInit() {
    this.subscribeTabService();
  }
  ngAfterContentChecked() {
    this.panes?.forEach((tabPane, index) => {
      tabPane.tabContent = this;
      tabPane.tabPaneIdx = index;
    });
    this.refreshTabPaneActive(this.activeTabPaneIdx);
    this.#tabService.setActiveTabIdx({
      tabContent: this,
      activeIdx: this.activeTabPaneIdx
    });
  }
  ngOnChanges(changes) {
    if (changes["activeTabPaneIdx"]?.currentValue) {
      this.#tabService.setActiveTabIdx({
        tabContent: this,
        activeIdx: changes["activeTabPaneIdx"].currentValue
      });
    }
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.#tabServiceSubscription = this.#tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (this === tabContentState.tabContent) {
          this.activeTabPaneIdx = tabContentState.activeIdx;
        }
      });
    } else {
      this.#tabServiceSubscription?.unsubscribe();
    }
  }
  refreshTabPaneActive(idx) {
    this.panes?.forEach((tabPane, index) => {
      tabPane.active = idx === index;
    });
  }
  static \u0275fac = function TabContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabContentComponent,
    selectors: [["c-tab-content"]],
    contentQueries: function TabContentComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, TabPaneComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panes = _t);
      }
    },
    hostAttrs: [1, "tab-content"],
    inputs: {
      activeTabPaneIdx: [2, "activeTabPaneIdx", "activeTabPaneIdx", numberAttribute]
    },
    outputs: {
      activeTabPaneIdxChange: "activeTabPaneIdxChange"
    },
    exportAs: ["cTabContent"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function TabContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentComponent, [{
    type: Component,
    args: [{
      selector: "c-tab-content",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "cTabContent",
      host: {
        class: "tab-content"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    activeTabPaneIdx: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    activeTabPaneIdxChange: [{
      type: Output,
      args: ["activeTabPaneIdxChange"]
    }],
    panes: [{
      type: ContentChildren,
      args: [TabPaneComponent]
    }]
  });
})();
var TabContentRefDirective = class _TabContentRefDirective {
  #changeDetectorRef = inject(ChangeDetectorRef);
  #tabService = inject(TabService);
  constructor() {
    this.subscribeTabService();
  }
  #tabServiceSubscription;
  /**
   * Template Ref
   * @type TemplateRef
   */
  tabContentRef;
  /**
   * Set active state of tab content
   * @type boolean
   * @default false
   */
  set active(value) {
    const newValue = value;
    if (this.#active !== newValue) {
      this.#active = newValue;
      this.#changeDetectorRef.detectChanges();
    }
  }
  get active() {
    return this.#active;
  }
  #active = false;
  /**
   * Set disabled state of tab content
   * @type boolean
   */
  set disabled(value) {
    this.#disabled = value;
  }
  get disabled() {
    return this.#disabled || this.tabPaneIdx >= this.tabContentRef?.panes?.length;
  }
  #disabled = false;
  /**
   * c-tab-pane index respectively
   * @type number
   */
  tabPaneIdx = -1;
  get hostClasses() {
    return {
      active: this.active,
      disabled: this.disabled
    };
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get ariaSelected() {
    return this.active;
  }
  role = "tab";
  get getTabindex() {
    return this.disabled ? "-1" : null;
  }
  ngOnChanges(changes) {
    if (changes["active"]?.currentValue) {
      this.setActiveTabPane();
    }
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.setActiveTabPane();
  }
  setActiveTabPane() {
    setTimeout(() => {
      if (this.tabPaneIdx < this.tabContentRef.panes.length) {
        this.active = true;
        this.#tabService.setActiveTabIdx({
          tabContent: this.tabContentRef,
          activeIdx: this.tabPaneIdx
        });
      } else {
        this.active = false;
      }
    });
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.#tabServiceSubscription = this.#tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (tabContentState.tabContent === this.tabContentRef) {
          this.active = tabContentState.activeIdx === this.tabPaneIdx;
        }
      });
    } else {
      this.#tabServiceSubscription?.unsubscribe();
    }
  }
  static \u0275fac = function TabContentRefDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabContentRefDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TabContentRefDirective,
    selectors: [["", "cTabContent", ""]],
    hostVars: 7,
    hostBindings: function TabContentRefDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function TabContentRefDirective_click_HostBindingHandler($event) {
          return ctx.toggleOpen($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.isDisabled)("disabled", ctx.attrDisabled)("aria-selected", ctx.ariaSelected)("role", ctx.role)("tabindex", ctx.getTabindex);
        \u0275\u0275classMap(ctx.hostClasses);
      }
    },
    inputs: {
      tabContentRef: [0, "cTabContent", "tabContentRef"],
      active: [2, "active", "active", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabPaneIdx: [2, "tabPaneIdx", "tabPaneIdx", numberAttribute],
      role: "role"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentRefDirective, [{
    type: Directive,
    args: [{
      selector: "[cTabContent]"
    }]
  }], () => [], {
    tabContentRef: [{
      type: Input,
      args: ["cTabContent"]
    }],
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabPaneIdx: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    ariaSelected: [{
      type: HostBinding,
      args: ["attr.aria-selected"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    getTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var TabsModule = class _TabsModule {
  static \u0275fac = function TabsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TabsModule,
    imports: [TabContentComponent, TabContentRefDirective, TabPaneComponent],
    exports: [TabContentComponent, TabPaneComponent, TabContentRefDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [TabService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsModule, [{
    type: NgModule,
    args: [{
      imports: [TabContentComponent, TabContentRefDirective, TabPaneComponent],
      exports: [TabContentComponent, TabPaneComponent, TabContentRefDirective],
      providers: [TabService]
    }]
  }], null, null);
})();
var TabsService = class _TabsService {
  activeItem = signal(void 0, ...ngDevMode ? [{
    debugName: "activeItem"
  }] : (
    /* istanbul ignore next */
    []
  ));
  activeItemKey = signal(void 0, ...ngDevMode ? [{
    debugName: "activeItemKey"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = signal(void 0, ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function TabsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TabsService,
    factory: _TabsService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsService, [{
    type: Injectable
  }], null, null);
})();
var nextId2 = 0;
var TabsComponent = class _TabsComponent {
  tabsService = inject(TabsService);
  /**
   * The active item key.
   * @type <string | number | undefined>
   */
  activeItemKey = model(...ngDevMode ? [void 0, {
    debugName: "activeItemKey"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The id attribute
   * @type string
   */
  tabsId = `tabs-${nextId2++}`;
  id = input(this.tabsId, ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #activeItemEffect = effect(() => {
    this.tabsService.id.set(this.id());
    this.tabsService.activeItemKey.set(this.activeItemKey());
  }, ...ngDevMode ? [{
    debugName: "#activeItemEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #tabsServiceEffect = effect(() => {
    this.activeItemKey.set(this.tabsService.activeItemKey());
  }, ...ngDevMode ? [{
    debugName: "#tabsServiceEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function TabsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabsComponent,
    selectors: [["c-tabs"]],
    hostAttrs: [1, "tabs"],
    hostVars: 1,
    hostBindings: function TabsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id());
      }
    },
    inputs: {
      activeItemKey: [1, "activeItemKey"],
      id: [1, "id"]
    },
    outputs: {
      activeItemKey: "activeItemKeyChange"
    },
    exportAs: ["cTabs"],
    features: [\u0275\u0275ProvidersFeature([TabsService])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function TabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabs",
      selector: "c-tabs",
      imports: [],
      template: "<ng-content />",
      providers: [TabsService],
      host: {
        "[id]": "id()",
        class: "tabs"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    activeItemKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "activeItemKey",
        required: false
      }]
    }, {
      type: Output,
      args: ["activeItemKeyChange"]
    }],
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }]
  });
})();
var TabDirective = class _TabDirective {
  #injector = inject(Injector);
  #destroyRef = inject(DestroyRef);
  #elementRef = inject(ElementRef);
  #tabsService = inject(TabsService);
  /**
   * Disabled attribute
   * @return boolean
   * @default false
   */
  disabledInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabledInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "disabled"
  }));
  #disabled = linkedSignal(this.disabledInput, ...ngDevMode ? [{
    debugName: "#disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrDisabled = computed(() => this.#disabled() || null, ...ngDevMode ? [{
    debugName: "attrDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  set disabled(value) {
    this.#disabled.set(value);
  }
  get disabled() {
    return this.#disabled();
  }
  /**
   * Item key.
   * @type string | number
   * @required
   */
  itemKey = input.required(...ngDevMode ? [{
    debugName: "itemKey"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Element id attribute
   * @type string
   * @default undefined
   */
  id = input(...ngDevMode ? [void 0, {
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * aria-controls attribute
   * @type string
   * @default undefined
   */
  ariaControls = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "ariaControls"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "aria-controls"
  }));
  isActive = signal(false, ...ngDevMode ? [{
    debugName: "isActive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    return {
      "nav-link": true,
      active: this.isActive(),
      disabled: this.#disabled()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  propId = computed(() => this.id() ?? `${this.#tabsService.id()}-tab-${this.itemKey()}`, ...ngDevMode ? [{
    debugName: "propId"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrAriaControls = computed(() => this.ariaControls() ?? `${this.#tabsService.id()}-panel-${this.itemKey()}`, ...ngDevMode ? [{
    debugName: "attrAriaControls"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #disabledSignalEffect = effect(() => {
    const disabled = this.#disabled();
    if (!disabled) {
      const click$ = fromEvent(this.#elementRef.nativeElement, "click");
      const focusIn$ = fromEvent(this.#elementRef.nativeElement, "focusin");
      merge(focusIn$, click$).pipe(filter(($event) => !disabled), tap(($event) => {
        this.#tabsService.activeItemKey.set(untracked(this.itemKey));
      }), takeWhile(() => !disabled), takeUntilDestroyed(this.#destroyRef)).subscribe();
    }
  }, ...ngDevMode ? [{
    debugName: "#disabledSignalEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  focus(origin) {
    this.#elementRef.nativeElement.focus();
  }
  ngOnInit() {
    runInInjectionContext(this.#injector, () => {
      effect(() => {
        const isActive = !this.#disabled() && this.#tabsService.activeItemKey() === this.itemKey();
        this.isActive.set(isActive);
      });
    });
  }
  static \u0275fac = function TabDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TabDirective,
    selectors: [["button", "cTab", ""]],
    hostAttrs: ["type", "button", "role", "tab"],
    hostVars: 7,
    hostBindings: function TabDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.propId())("tabIndex", ctx.isActive() ? 0 : -1);
        \u0275\u0275attribute("aria-selected", ctx.isActive())("aria-controls", ctx.attrAriaControls())("disabled", ctx.attrDisabled() || null);
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      disabledInput: [1, "disabled", "disabledInput"],
      itemKey: [1, "itemKey"],
      id: [1, "id"],
      ariaControls: [1, "aria-controls", "ariaControls"]
    },
    exportAs: ["cTab"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabDirective, [{
    type: Directive,
    args: [{
      exportAs: "cTab",
      selector: "button[cTab]",
      host: {
        "[class]": "hostClasses()",
        type: "button",
        role: "tab",
        "[attr.aria-selected]": "isActive()",
        "[attr.aria-controls]": "attrAriaControls()",
        "[attr.disabled]": "attrDisabled() || null",
        "[id]": "propId()",
        "[tabindex]": "isActive() ? 0 : -1"
      }
    }]
  }], null, {
    disabledInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    itemKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "itemKey",
        required: true
      }]
    }],
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    ariaControls: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "aria-controls",
        required: false
      }]
    }]
  });
})();
var TabsListComponent = class _TabsListComponent {
  #destroyRef = inject(DestroyRef);
  #elementRef = inject(ElementRef);
  tabsService = inject(TabsService);
  #rtlService = inject(RtlService);
  #isRtl = signal(false, ...ngDevMode ? [{
    debugName: "#isRtl"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    afterEveryRender({
      read: () => {
        this.#isRtl.set(this.#rtlService.isRTL(this.#elementRef.nativeElement));
      }
    });
  }
  /**
   * Specify a layout type for component.
   * @type 'fill' | 'justified' | undefined
   * @default undefined
   */
  layout = input(...ngDevMode ? [void 0, {
    debugName: "layout"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set the variant to tabs, pills or underline.
   * @type 'pills' | 'tabs' | 'underline' | 'underline-border' | undefined
   * @default undefined
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set the role to tab list.
   * @default 'tablist'
   */
  role = input("tablist", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const layout = this.layout();
    const variant = this.variant();
    return {
      nav: true,
      [`nav-${layout}`]: layout,
      [`nav-${variant}`]: variant
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  tabs = contentChildren(TabDirective, ...ngDevMode ? [{
    debugName: "tabs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #focusKeyManager;
  #tabsEffect = effect(() => {
    const tabs = this.tabs();
    if (tabs.length === 0) {
      return;
    }
    const isRtl = this.#isRtl();
    this.#focusKeyManager = new FocusKeyManager(tabs).skipPredicate((tab) => tab.disabled === true).withHorizontalOrientation(isRtl ? "rtl" : "ltr").withHomeAndEnd().withWrap();
    this.#focusKeyManager.change.pipe(tap((value) => {
      this.tabsService.activeItemKey.set(this.#focusKeyManager.activeItem?.itemKey());
      this.tabsService.activeItem.set(this.#focusKeyManager.activeItem);
    }), takeUntilDestroyed(this.#destroyRef)).subscribe();
    untracked(() => {
      setTimeout(() => {
        const activeItem = tabs.find((tab) => tab.isActive()) ?? tabs.find((tab) => !tab.disabled);
        const activeItemIndex = tabs.findIndex((tab) => tab === activeItem);
        this.#focusKeyManager?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
        this.tabsService.activeItemKey.set(this.#focusKeyManager.activeItem?.itemKey());
        this.tabsService.activeItem.set(this.#focusKeyManager.activeItem);
      });
    });
  }, ...ngDevMode ? [{
    debugName: "#tabsEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #tabsServiceEffect = effect(() => {
    const activeItemIndex = this.tabs().findIndex((tab) => untracked(tab.isActive) && untracked(tab.itemKey) === this.tabsService.activeItemKey());
    this.#focusKeyManager?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
  }, ...ngDevMode ? [{
    debugName: "#tabsServiceEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onKeyDown($event) {
    if (["ArrowLeft", "ArrowRight"].includes($event.key)) {
      this.#focusKeyManager.onKeydown($event);
      return;
    }
    if (["Tab"].includes($event.key)) {
      this.#focusKeyManager?.tabOut.next();
    }
    return;
  }
  static \u0275fac = function TabsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabsListComponent,
    selectors: [["c-tabs-list"]],
    contentQueries: function TabsListComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.tabs, TabDirective, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 3,
    hostBindings: function TabsListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function TabsListComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      layout: [1, "layout"],
      variant: [1, "variant"],
      role: [1, "role"]
    },
    exportAs: ["cTabsList"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function TabsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsListComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabsList",
      selector: "c-tabs-list",
      template: "<ng-content />",
      host: {
        "[attr.role]": "role()",
        "[class]": "hostClasses()",
        "(keydown)": "onKeyDown($event)"
      }
    }]
  }], () => [], {
    layout: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "layout",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    tabs: [{
      type: ContentChildren,
      args: [forwardRef(() => TabDirective), {
        isSignal: true
      }]
    }]
  });
})();
var TabsContentComponent = class _TabsContentComponent {
  static \u0275fac = function TabsContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabsContentComponent,
    selectors: [["c-tabs-content"]],
    hostAttrs: [1, "tab-content"],
    exportAs: ["cTabsContent"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function TabsContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsContentComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabsContent",
      selector: "c-tabs-content",
      template: "<ng-content />",
      host: {
        class: "tab-content"
      }
    }]
  }], null, null);
})();
var TabPanelComponent = class _TabPanelComponent {
  tabsService = inject(TabsService);
  /**
   * aria-labelledby attribute
   * @type string
   * @default undefined
   */
  ariaLabelledBy = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "ariaLabelledBy"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "aria-labelledby"
  }));
  /**
   * Element id attribute
   * @type string
   * @default undefined
   */
  id = input(...ngDevMode ? [void 0, {
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Item key.
   * @type string | number
   * @required
   */
  itemKey = input.required(...ngDevMode ? [{
    debugName: "itemKey"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Element role.
   * @type string
   * @default 'tabpanel'
   */
  role = input("tabpanel", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * tabindex attribute.
   * @type number
   * @default 0
   */
  tabindex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabindex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Enable fade in transition.
   * @type boolean
   * @default true
   */
  transition = input(true, ...ngDevMode ? [{
    debugName: "transition"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * visible change output
   * @type OutputEmitterRef<VisibleChangeEvent>
   */
  visibleChange = output();
  show = signal(false, ...ngDevMode ? [{
    debugName: "show"
  }] : (
    /* istanbul ignore next */
    []
  ));
  visible = computed(() => {
    const visible = this.tabsService.activeItemKey() === this.itemKey() && !this.tabsService.activeItem()?.disabled;
    this.visibleChange?.emit({
      itemKey: this.itemKey(),
      visible
    });
    return visible;
  }, ...ngDevMode ? [{
    debugName: "visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  propId = computed(() => this.id() ?? `${this.tabsService.id()}-panel-${this.itemKey()}`, ...ngDevMode ? [{
    debugName: "propId"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrAriaLabelledBy = computed(() => this.ariaLabelledBy() ?? `${this.tabsService.id()}-tab-${this.itemKey()}`, ...ngDevMode ? [{
    debugName: "attrAriaLabelledBy"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => ({
    "tab-pane": true,
    active: this.show(),
    fade: this.transition(),
    show: this.show(),
    invisible: this.tabsService.activeItem()?.disabled
  }), ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onAnimationDone($event) {
    this.show.set(this.visible());
  }
  static \u0275fac = function TabPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabPanelComponent,
    selectors: [["c-tab-panel"]],
    hostVars: 8,
    hostBindings: function TabPanelComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275syntheticHostListener("@fadeInOut.done", function TabPanelComponent_animation_fadeInOut_done_HostBindingHandler($event) {
          return ctx.onAnimationDone($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx.visible() ? ctx.tabindex() : -1)("id", ctx.propId());
        \u0275\u0275syntheticHostProperty("@.disabled", !ctx.transition())("@fadeInOut", ctx.visible() ? "show" : "hide");
        \u0275\u0275attribute("aria-labelledby", ctx.attrAriaLabelledBy())("role", ctx.role());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      ariaLabelledBy: [1, "aria-labelledby", "ariaLabelledBy"],
      id: [1, "id"],
      itemKey: [1, "itemKey"],
      role: [1, "role"],
      tabindex: [1, "tabindex"],
      transition: [1, "transition"]
    },
    outputs: {
      visibleChange: "visibleChange"
    },
    exportAs: ["cTabPanel"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function TabPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    data: {
      animation: [trigger("fadeInOut", [state("show", style({
        opacity: 1
      })), state("hide", style({
        opacity: 0
      })), state("void", style({
        opacity: 1
      })), transition("* => *", [query("@*", [animateChild()], {
        optional: true
      }), animate("150ms linear")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanelComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabPanel",
      selector: "c-tab-panel",
      template: "<ng-content />",
      host: {
        "[class]": "hostClasses()",
        "[tabindex]": "visible() ? tabindex() : -1",
        "[attr.aria-labelledby]": "attrAriaLabelledBy()",
        "[id]": "propId()",
        "[attr.role]": "role()",
        "[@.disabled]": "!transition()",
        "[@fadeInOut]": 'visible() ? "show" : "hide"',
        "(@fadeInOut.done)": "onAnimationDone($event)"
      },
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1
      })), state("hide", style({
        opacity: 0
      })), state("void", style({
        opacity: 1
      })), transition("* => *", [query("@*", [animateChild()], {
        optional: true
      }), animate("150ms linear")])])]
    }]
  }], null, {
    ariaLabelledBy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "aria-labelledby",
        required: false
      }]
    }],
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    itemKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "itemKey",
        required: true
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }],
    transition: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transition",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }]
  });
})();
var Tabs2Module = class _Tabs2Module {
  static \u0275fac = function Tabs2Module_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tabs2Module)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _Tabs2Module,
    imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
    exports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [TabsService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tabs2Module, [{
    type: NgModule,
    args: [{
      imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
      exports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
      providers: [TabsService]
    }]
  }], null, null);
})();
var ToasterService = class _ToasterService {
  #toasterState = new BehaviorSubject({});
  toasterState$ = this.#toasterState.asObservable();
  setState(state2) {
    this.#toasterState.next(__spreadValues({}, state2));
  }
  static \u0275fac = function ToasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToasterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToasterService,
    factory: _ToasterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ToastComponent = class _ToastComponent {
  changeDetectorRef = inject(ChangeDetectorRef);
  hostElement = inject(ElementRef);
  renderer = inject(Renderer2);
  toasterService = inject(ToasterService);
  dynamic = input(...ngDevMode ? [void 0, {
    debugName: "dynamic"
  }] : (
    /* istanbul ignore next */
    []
  ));
  placementInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "placementInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "placement"
  }));
  get placement() {
    return this.placementInput();
  }
  /**
   * Auto hide the toast.
   * @return boolean
   */
  autohide = input(true, ...ngDevMode ? [{
    debugName: "autohide"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @return Colors
   */
  color = input("", ...ngDevMode ? [{
    debugName: "color"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Delay hiding the toast (ms).
   * @return number
   */
  delay = input(5e3, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "delay"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Apply fade transition to the toast.
   * @return boolean
   */
  fade = input(true, ...ngDevMode ? [{
    debugName: "fade"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Toggle the visibility of component.
   * @return boolean
   */
  visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visibleInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute,
    alias: "visible"
  }));
  #visible = linkedSignal(this.visibleInput, ...ngDevMode ? [{
    debugName: "#visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #visibleEffect = effect(() => {
    const newValue = this.#visible();
    newValue ? this.setTimer() : this.clearTimer();
    this.visibleChange?.emit(newValue);
    this.changeDetectorRef.markForCheck();
  }, ...ngDevMode ? [{
    debugName: "#visibleEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  set visible(value) {
    this.#visible.set(value);
  }
  get visible() {
    return this.#visible();
  }
  /**
   * @ignore
   */
  index = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "index"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Event emitted on visibility change. [docs]
   * @return <boolean>
   */
  visibleChange = output();
  /**
   * Event emitted on timer tick. [docs]
   * @return number
   */
  timer = output();
  timerId;
  clockId;
  clockTimerId;
  _clock;
  get clock() {
    return this._clock;
  }
  set clock(value) {
    this._clock = value;
    this.timer?.emit(this._clock);
    this.changeDetectorRef.markForCheck();
  }
  animationDisabled = computed(() => {
    return !this.fade();
  }, ...ngDevMode ? [{
    debugName: "animationDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get animateType() {
    return this.visible ? "show" : "hide";
  }
  hostClasses = computed(() => {
    const color = this.color();
    return {
      toast: true,
      show: true,
      [`bg-${color}`]: !!color,
      "border-0": !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    if (this.visible) {
      this.toasterService.setState({
        toast: this,
        show: this.visible,
        placement: this.placement
      });
      this.clearTimer();
      this.setTimer();
    }
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  setTimer() {
    this.clearTimer();
    if (this.autohide() && this.visible) {
      this.timerId = this.delay() > 0 ? setTimeout(() => this.onClose(), this.delay()) : void 0;
      this.setClock();
    }
  }
  clearTimer() {
    this.clearClock();
    clearTimeout(this.timerId);
    this.timerId = void 0;
  }
  onClose() {
    this.clearTimer();
    this.toasterService.setState({
      toast: this,
      show: false,
      placement: this.placement
    });
  }
  setClock() {
    this.clearClock();
    this.clock = 0;
    this.clockId = setInterval(() => {
      this.clock += 1;
      this.changeDetectorRef.markForCheck();
    }, 1e3);
    this.clockTimerId = setTimeout(() => {
      this.clearClock();
    }, this.delay());
  }
  clearClock() {
    clearTimeout(this.clockTimerId);
    clearInterval(this.clockId);
    this.clockId = void 0;
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastComponent,
    selectors: [["c-toast"]],
    hostAttrs: [1, "toast", "show"],
    hostVars: 4,
    hostBindings: function ToastComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseover", function ToastComponent_mouseover_HostBindingHandler() {
          return ctx.clearTimer();
        })("mouseout", function ToastComponent_mouseout_HostBindingHandler() {
          return ctx.setTimer();
        });
      }
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@fadeInOut", ctx.animateType)("@.disabled", ctx.animationDisabled());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      dynamic: [1, "dynamic"],
      placementInput: [1, "placement", "placementInput"],
      autohide: [1, "autohide"],
      color: [1, "color"],
      delay: [1, "delay"],
      fade: [1, "fade"],
      visibleInput: [1, "visible", "visibleInput"],
      index: [1, "index"]
    },
    outputs: {
      visibleChange: "visibleChange",
      timer: "timer"
    },
    exportAs: ["cToast"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"],
    data: {
      animation: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("hide => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      }), transition("show => void", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("void => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      })])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{
      selector: "c-toast",
      template: "<ng-content />",
      exportAs: "cToast",
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("hide => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      }), transition("show => void", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("void => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      })])],
      host: {
        class: "toast show",
        "[class]": "hostClasses()",
        "(mouseover)": "clearTimer()",
        "(mouseout)": "setTimer()",
        "[@fadeInOut]": "animateType",
        "[@.disabled]": "animationDisabled()"
      },
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], null, {
    dynamic: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dynamic",
        required: false
      }]
    }],
    placementInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    autohide: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "autohide",
        required: false
      }]
    }],
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }],
    delay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "delay",
        required: false
      }]
    }],
    fade: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fade",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    index: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }],
    timer: [{
      type: Output,
      args: ["timer"]
    }]
  });
})();
var ToastBodyComponent = class _ToastBodyComponent {
  toast = inject(ToastComponent, {
    optional: true
  });
  static \u0275fac = function ToastBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastBodyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastBodyComponent,
    selectors: [["c-toast-body"]],
    hostAttrs: [1, "toast-body"],
    exportAs: ["cToastBody"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ToastBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-toast-body",
      template: "<ng-content />",
      exportAs: "cToastBody",
      host: {
        class: "toast-body"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var ToastCloseDirective = class _ToastCloseDirective {
  #toasterService = inject(ToasterService);
  cToastClose = input(...ngDevMode ? [void 0, {
    debugName: "cToastClose"
  }] : (
    /* istanbul ignore next */
    []
  ));
  toggleOpen($event) {
    $event.preventDefault();
    this.#toasterService.setState({
      show: false,
      toast: this.cToastClose()
    });
  }
  static \u0275fac = function ToastCloseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastCloseDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ToastCloseDirective,
    selectors: [["", "cToastClose", ""]],
    hostBindings: function ToastCloseDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ToastCloseDirective_click_HostBindingHandler($event) {
          return ctx.toggleOpen($event);
        });
      }
    },
    inputs: {
      cToastClose: [1, "cToastClose"]
    },
    exportAs: ["cToastClose"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cToastClose]",
      exportAs: "cToastClose",
      host: {
        "(click)": "toggleOpen($event)"
      }
    }]
  }], null, {
    cToastClose: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cToastClose",
        required: false
      }]
    }]
  });
})();
var ToastHeaderComponent = class _ToastHeaderComponent {
  #toast = inject(ToastComponent, {
    optional: true
  });
  toast = signal(this.#toast ?? void 0, ...ngDevMode ? [{
    debugName: "toast"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Add close button to a toast header
   * @return boolean
   */
  closeButton = input(true, ...ngDevMode ? [{
    debugName: "closeButton"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ToastHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastHeaderComponent,
    selectors: [["c-toast-header"]],
    hostAttrs: [1, "toast-header"],
    inputs: {
      closeButton: [1, "closeButton"]
    },
    exportAs: ["cToastHeader"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [["aria-label", "close", "cButtonClose", "", 1, "ms-auto", 3, "cToastClose", "style"], ["aria-label", "close", "cButtonClose", "", 1, "ms-auto", 3, "cToastClose"]],
    template: function ToastHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275projection(1);
        \u0275\u0275conditionalCreate(2, ToastHeaderComponent_Conditional_2_Template, 1, 4, "button", 0);
        \u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.closeButton() ? 2 : -1);
      }
    },
    dependencies: [ToastCloseDirective, ButtonCloseDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-toast-header",
      exportAs: "cToastHeader",
      imports: [ToastCloseDirective, ButtonCloseDirective],
      host: {
        class: "toast-header"
      },
      template: '<ng-container>\n  <ng-content />\n  @if (closeButton()) {\n    <button [cToastClose]="toast()" [style]="{outline: 0}" aria-label="close" cButtonClose class="ms-auto"></button>\n  }\n</ng-container>\n'
    }]
  }], null, {
    closeButton: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closeButton",
        required: false
      }]
    }]
  });
})();
var ToasterHostDirective = class _ToasterHostDirective {
  viewContainerRef = inject(ViewContainerRef);
  static \u0275fac = function ToasterHostDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToasterHostDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ToasterHostDirective,
    selectors: [["", "cToasterHost", ""]],
    exportAs: ["cToasterHost"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cToasterHost]",
      exportAs: "cToasterHost"
    }]
  }], null, null);
})();
var ToasterPlacement;
(function(ToasterPlacement2) {
  ToasterPlacement2["Static"] = "static";
  ToasterPlacement2["TopStart"] = "top-start";
  ToasterPlacement2["TopCenter"] = "top-center";
  ToasterPlacement2["TopEnd"] = "top-end";
  ToasterPlacement2["MiddleStart"] = "middle-start";
  ToasterPlacement2["MiddleCenter"] = "middle-center";
  ToasterPlacement2["MiddleEnd"] = "middle-end";
  ToasterPlacement2["BottomStart"] = "bottom-start";
  ToasterPlacement2["BottomCenter"] = "bottom-center";
  ToasterPlacement2["BottomEnd"] = "bottom-end";
})(ToasterPlacement || (ToasterPlacement = {}));
var ToasterComponent = class _ToasterComponent {
  #hostElement = inject(ElementRef);
  #renderer = inject(Renderer2);
  #toasterService = inject(ToasterService);
  #destroyRef = inject(DestroyRef);
  placements = Object.values(ToasterPlacement);
  toastsDynamic = [];
  /**
   * Toaster placement
   * @return TToasterPlacement
   */
  placementInput = input(ToasterPlacement.TopEnd, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "placementInput"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "placement"
  }));
  get placement() {
    return this.placementInput();
  }
  /**
   * Toaster position
   * @return (string | 'absolute' | 'fixed' | 'static')
   */
  position = input("absolute", ...ngDevMode ? [{
    debugName: "position"
  }] : (
    /* istanbul ignore next */
    []
  ));
  toasterHost = viewChild.required(ToasterHostDirective);
  contentToasts = contentChildren(ToastComponent, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentToasts"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ViewContainerRef
  }));
  #contentToastsEffect = effect(() => {
    this.contentToasts();
  }, ...ngDevMode ? [{
    debugName: "#contentToastsEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const placement = this.placement;
    const position = this.position();
    return {
      toaster: true,
      "toast-container": true,
      [`position-${position}`]: !!position,
      "top-0": placement.includes("top"),
      "top-50": placement.includes("middle"),
      "bottom-0": placement.includes("bottom"),
      "start-0": placement.includes("start"),
      "start-50": placement.includes("center"),
      "end-0": placement.includes("end"),
      "translate-middle-x": placement.includes("center") && !placement.includes("middle"),
      "translate-middle-y": placement.includes("middle") && !placement.includes("center"),
      "translate-middle": placement.includes("middle") && placement.includes("center")
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.stateToasterSubscribe();
  }
  addToast(toast, props, options) {
    const componentRef = this.toasterHost().viewContainerRef.createComponent(toast, options);
    this.toastsDynamic.push(componentRef);
    const index = this.toastsDynamic.indexOf(componentRef);
    for (const [key, value] of Object.entries(props)) {
      componentRef.setInput(key, value);
    }
    componentRef.setInput("placement", this.placement);
    componentRef.setInput("dynamic", true);
    componentRef.setInput("index", index);
    componentRef.setInput("visible", true);
    componentRef.instance["visibleChange"]?.emit(true);
    componentRef.changeDetectorRef?.detectChanges();
    return componentRef;
  }
  removeToast(state2) {
    this.toastsDynamic?.forEach((item) => {
      if (state2.toast?.dynamic() && item.instance === state2.toast) {
        item.setInput("visible", false);
        item.instance["visibleChange"].emit(false);
        item.destroy();
      }
    });
    this.contentToasts()?.forEach((item) => {
      if (state2.toast && item.element.nativeElement === state2.toast.hostElement.nativeElement) {
        if (!state2.toast.dynamic()) {
          state2.toast.visible = false;
        }
      }
    });
  }
  stateToasterSubscribe() {
    this.#toasterService.toasterState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((state2) => {
      if (state2.show === false) {
        this.removeToast(state2);
      }
    });
  }
  static \u0275fac = function ToasterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToasterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToasterComponent,
    selectors: [["c-toaster"]],
    contentQueries: function ToasterComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentToasts, ToastComponent, 4, ViewContainerRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    viewQuery: function ToasterComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.toasterHost, ToasterHostDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "toaster", "toast-container"],
    hostVars: 2,
    hostBindings: function ToasterComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      placementInput: [1, "placement", "placementInput"],
      position: [1, "position"]
    },
    exportAs: ["cToaster"],
    features: [\u0275\u0275ProvidersFeature([ToasterService])],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [["cToasterHost", ""]],
    template: function ToasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, ToasterComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        \u0275\u0275projection(1);
      }
    },
    dependencies: [ToasterHostDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterComponent, [{
    type: Component,
    args: [{
      selector: "c-toaster",
      exportAs: "cToaster",
      imports: [ToasterHostDirective],
      host: {
        class: "toaster toast-container",
        "[class]": "hostClasses()"
      },
      providers: [ToasterService],
      template: "<ng-template cToasterHost />\n<ng-content />\n"
    }]
  }], null, {
    placementInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    toasterHost: [{
      type: ViewChild,
      args: [forwardRef(() => ToasterHostDirective), {
        isSignal: true
      }]
    }],
    contentToasts: [{
      type: ContentChildren,
      args: [forwardRef(() => ToastComponent), __spreadProps(__spreadValues({}, {
        read: ViewContainerRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule,
    imports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective],
    exports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ToasterService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective],
      providers: [ToasterService],
      exports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective]
    }]
  }], null, null);
})();
var TooltipComponent = class _TooltipComponent {
  renderer = inject(Renderer2);
  /**
   * Content of tooltip
   * @type {string | TemplateRef}
   */
  content = input("", ...ngDevMode ? [{
    debugName: "content"
  }] : (
    /* istanbul ignore next */
    []
  ));
  #contentEffect = effect(() => {
    this.updateView(this.content());
  }, ...ngDevMode ? [{
    debugName: "#contentEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Toggle the visibility of popover component.
   * @type boolean
   */
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  id = input(...ngDevMode ? [void 0, {
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  role = input("tooltip", ...ngDevMode ? [{
    debugName: "role"
  }] : (
    /* istanbul ignore next */
    []
  ));
  viewContainerRef = viewChild("tooltipTemplate", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "viewContainerRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ViewContainerRef
  }));
  textNode;
  hostClasses = computed(() => {
    return {
      tooltip: true,
      fade: true,
      show: this.visible(),
      "bs-tooltip-auto": true
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnDestroy() {
    this.clear();
  }
  clear() {
    this.viewContainerRef()?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }
  updateView(content) {
    this.clear();
    if (!content) {
      return;
    }
    if (content instanceof TemplateRef) {
      this.viewContainerRef()?.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);
      const element = this.viewContainerRef()?.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
  static \u0275fac = function TooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TooltipComponent,
    selectors: [["c-tooltip"]],
    viewQuery: function TooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.viewContainerRef, _c13, 5, ViewContainerRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "tooltip", "fade", "bs-tooltip-auto"],
    hostVars: 4,
    hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role())("id", ctx.id());
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      content: [1, "content"],
      visible: [1, "visible"],
      id: [1, "id"],
      role: [1, "role"]
    },
    decls: 5,
    vars: 0,
    consts: [["tooltipTemplate", ""], ["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]],
    template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementContainerStart(0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275domElementStart(2, "div", 2);
        \u0275\u0275domElementContainer(3, null, 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementContainerEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "c-tooltip",
      host: {
        class: "tooltip fade bs-tooltip-auto",
        "[class]": "hostClasses()",
        "[attr.role]": "role()",
        "[attr.id]": "id()"
      },
      template: '<ng-container>\n  <div class="tooltip-arrow" data-popper-arrow></div>\n  <div class="tooltip-inner">\n    <ng-container #tooltipTemplate />\n  </div>\n</ng-container>\n'
    }]
  }], null, {
    content: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "content",
        required: false
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["tooltipTemplate", __spreadProps(__spreadValues({}, {
        read: ViewContainerRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var TooltipDirective = class _TooltipDirective {
  #renderer = inject(Renderer2);
  #hostElement = inject(ElementRef);
  #viewContainerRef = inject(ViewContainerRef);
  #listenersService = inject(ListenersService);
  #changeDetectorRef = inject(ChangeDetectorRef);
  #intersectionService = inject(IntersectionService);
  #destroyRef = inject(DestroyRef);
  #document = inject(DOCUMENT);
  #timerId1;
  #timerId2;
  /**
   * Content of tooltip
   * @return {string | TemplateRef}
   */
  content = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "content"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTooltip"
  }));
  #contentEffect = effect(() => {
    if (this.content()) {
      this.destroyTooltipElement();
    }
  }, ...ngDevMode ? [{
    debugName: "#contentEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @return Partial<Options>
   */
  popperOptions = input({}, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "popperOptions"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTooltipOptions"
  }));
  #popperOptionsEffect = effect(() => {
    this._popperOptions = __spreadValues(__spreadProps(__spreadValues({}, this._popperOptions), {
      placement: this.placement()
    }), this.popperOptions());
  }, ...ngDevMode ? [{
    debugName: "#popperOptionsEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  popperOptionsComputed = computed(() => {
    return __spreadValues({
      placement: this.placement()
    }, this._popperOptions);
  }, ...ngDevMode ? [{
    debugName: "popperOptionsComputed"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   * @return: 'top' | 'bottom' | 'left' | 'right'
   * @default: 'top'
   */
  placement = input("top", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "placement"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTooltipPlacement"
  }));
  /**
   * ElementRefDirective for positioning the tooltip on reference element
   * @return: ElementRefDirective
   * @default: undefined
   */
  reference = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "reference"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTooltipRef"
  }));
  referenceRef = computed(() => this.reference()?.elementRef ?? this.#hostElement, ...ngDevMode ? [{
    debugName: "referenceRef"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   * @return: 'Triggers | Triggers[]
   */
  trigger = input("hover", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "trigger"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTooltipTrigger"
  }));
  /**
   * Toggle the visibility of tooltip component.
   * @return boolean
   */
  visible = model(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "cTooltipVisible"
  }));
  #visibleEffect = afterRenderEffect({
    // this fixes RuntimeError: NG0500: During hydration Angular expected <abc> but found <xyz>.
    // Find more at https://angular.dev/errors/NG0500
    write: () => {
      this.visible() ? this.addTooltipElement() : this.removeTooltipElement();
    }
  });
  get ariaDescribedBy() {
    return this.tooltipId ? this.tooltipId : null;
  }
  tooltip;
  tooltipId;
  tooltipRef;
  popperInstance;
  _popperOptions = {
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, 5]
      }
    }]
  };
  ngAfterViewInit() {
    this.intersectionServiceSubscribe();
  }
  ngOnDestroy() {
    this.clearListeners();
    this.destroyTooltipElement();
  }
  ngOnInit() {
    this.setListeners();
  }
  setListeners() {
    const config = {
      hostElement: this.#hostElement,
      trigger: this.trigger(),
      callbackToggle: () => {
        this.visible.update((value) => !value);
      },
      callbackOff: () => {
        this.visible.set(false);
      },
      callbackOn: () => {
        this.visible.set(true);
      }
    };
    this.#listenersService.setListeners(config);
  }
  clearListeners() {
    this.#listenersService.clearListeners();
  }
  intersectionServiceSubscribe() {
    this.#intersectionService.createIntersectionObserver(this.referenceRef());
    this.#intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.referenceRef()), debounceTime(100), finalize(() => {
      this.#intersectionService.unobserve(this.referenceRef());
    }), takeUntilDestroyed(this.#destroyRef)).subscribe((next) => {
      this.visible.set(next.isIntersecting ? this.visible() : false);
    });
  }
  getUID(prefix) {
    let uid = prefix ?? "random-id";
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1e6).toString(10)}`;
    } while (this.#document.getElementById(uid));
    return uid;
  }
  createTooltipElement() {
    if (!this.tooltipRef) {
      this.tooltipRef = this.#viewContainerRef.createComponent(TooltipComponent);
    }
  }
  destroyTooltipElement() {
    this.tooltip?.remove();
    this.tooltipRef?.destroy();
    this.tooltipRef = void 0;
    this.popperInstance?.destroy();
    this.#viewContainerRef?.detach();
    this.#viewContainerRef?.clear();
  }
  addTooltipElement() {
    if (!this.content()) {
      this.destroyTooltipElement();
      return;
    }
    if (!this.tooltipRef) {
      this.createTooltipElement();
    }
    this.tooltipRef?.setInput("content", this.content() ?? "");
    this.tooltip = this.tooltipRef?.location.nativeElement;
    this.#renderer.addClass(this.tooltip, "d-none");
    this.#renderer.addClass(this.tooltip, "fade");
    this.popperInstance?.destroy();
    this.#viewContainerRef.insert(this.tooltipRef.hostView);
    this.#renderer.appendChild(this.#document.body, this.tooltip);
    this.popperInstance = createPopper(this.referenceRef().nativeElement, this.tooltip, __spreadValues({}, this.popperOptionsComputed()));
    if (!this.visible()) {
      this.removeTooltipElement();
      return;
    }
    clearTimeout(this.#timerId2);
    clearTimeout(this.#timerId1);
    this.#timerId1 = setTimeout(() => {
      this.tooltipId = this.getUID("tooltip");
      this.tooltipRef?.setInput("id", this.tooltipId);
      this.#renderer.removeClass(this.tooltip, "d-none");
      this.tooltipRef?.setInput("visible", this.visible());
      this.popperInstance?.forceUpdate();
      this.#changeDetectorRef?.markForCheck();
      this.#timerId1 = void 0;
    }, 150);
  }
  removeTooltipElement() {
    this.tooltipId = "";
    if (!this.tooltipRef) {
      return;
    }
    clearTimeout(this.#timerId2);
    this.#timerId2 = setTimeout(() => {
      this.#viewContainerRef?.detach();
      this.#timerId2 = void 0;
    }, 300);
    this.tooltipRef.setInput("visible", false);
    this.tooltipRef.setInput("id", void 0);
    this.#changeDetectorRef.markForCheck();
  }
  static \u0275fac = function TooltipDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TooltipDirective,
    selectors: [["", "cTooltip", ""]],
    hostVars: 1,
    hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-describedby", ctx.ariaDescribedBy);
      }
    },
    inputs: {
      content: [1, "cTooltip", "content"],
      popperOptions: [1, "cTooltipOptions", "popperOptions"],
      placement: [1, "cTooltipPlacement", "placement"],
      reference: [1, "cTooltipRef", "reference"],
      trigger: [1, "cTooltipTrigger", "trigger"],
      visible: [1, "cTooltipVisible", "visible"]
    },
    outputs: {
      visible: "cTooltipVisibleChange"
    },
    exportAs: ["cTooltip"],
    features: [\u0275\u0275ProvidersFeature([ListenersService, IntersectionService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[cTooltip]",
      exportAs: "cTooltip",
      providers: [ListenersService, IntersectionService],
      host: {
        "[attr.aria-describedby]": "ariaDescribedBy"
      }
    }]
  }], null, {
    content: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTooltip",
        required: false
      }]
    }],
    popperOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTooltipOptions",
        required: false
      }]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTooltipPlacement",
        required: false
      }]
    }],
    reference: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTooltipRef",
        required: false
      }]
    }],
    trigger: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTooltipTrigger",
        required: false
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cTooltipVisible",
        required: false
      }]
    }, {
      type: Output,
      args: ["cTooltipVisibleChange"]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static \u0275fac = function TooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TooltipModule,
    imports: [TooltipComponent, TooltipDirective],
    exports: [TooltipComponent, TooltipDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      exports: [TooltipComponent, TooltipDirective],
      imports: [TooltipComponent, TooltipDirective]
    }]
  }], null, null);
})();
var WidgetStatAComponent = class _WidgetStatAComponent extends CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  // override readonly color = input<Colors>();
  /**
   * Title of the widget to display
   * @type string
   */
  title = input(...ngDevMode ? [void 0, {
    debugName: "title"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Value for your widget to display
   * @type string
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  templates = {};
  contentTemplates = contentChildren(TemplateIdDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentTemplates"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: true
  }));
  #contentTemplatesEffect = effect(() => {
    this.contentTemplates().forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }, ...ngDevMode ? [{
    debugName: "#contentTemplatesEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostClasses = computed(() => {
    const color = this.color();
    return {
      card: true,
      [`bg-${color}`]: !!color,
      "text-white": !!color
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get bodyClasses() {
    return {
      "pb-0": true,
      "d-flex": true,
      "justify-content-between": true,
      "align-items-start": true
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WidgetStatAComponent_BaseFactory;
    return function WidgetStatAComponent_Factory(__ngFactoryType__) {
      return (\u0275WidgetStatAComponent_BaseFactory || (\u0275WidgetStatAComponent_BaseFactory = \u0275\u0275getInheritedFactory(_WidgetStatAComponent)))(__ngFactoryType__ || _WidgetStatAComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WidgetStatAComponent,
    selectors: [["c-widget-stat-a"]],
    contentQueries: function WidgetStatAComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplates, TemplateIdDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "card"],
    hostVars: 2,
    hostBindings: function WidgetStatAComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      title: [1, "title"],
      value: [1, "value"]
    },
    exportAs: ["cWidgetStatA"],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c15,
    decls: 15,
    vars: 6,
    consts: [["defaultWidgetTitleTemplate", ""], ["defaultWidgetValueTemplate", ""], ["defaultWidgetChartTemplate", ""], ["defaultWidgetActionTemplate", ""], [1, "fs-4", "fw-semibold"], [4, "ngTemplateOutlet"]],
    template: function WidgetStatAComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c14);
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "c-card-body")(2, "div");
        \u0275\u0275conditionalCreate(3, WidgetStatAComponent_Conditional_3_Template, 2, 1, "div", 4);
        \u0275\u0275conditionalCreate(4, WidgetStatAComponent_Conditional_4_Template, 2, 1, "div");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, WidgetStatAComponent_ng_container_5_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, WidgetStatAComponent_ng_container_6_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(7, WidgetStatAComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, WidgetStatAComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, WidgetStatAComponent_ng_template_11_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, WidgetStatAComponent_ng_template_13_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const defaultWidgetChartTemplate_r4 = \u0275\u0275reference(12);
        const defaultWidgetActionTemplate_r5 = \u0275\u0275reference(14);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.bodyClasses);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!!ctx.value() || (ctx.templates == null ? null : ctx.templates["widgetValueTemplate"]) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!!ctx.title() || (ctx.templates == null ? null : ctx.templates["widgetTitleTemplate"]) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates["widgetActionTemplate"]) || defaultWidgetActionTemplate_r5);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates["widgetChartTemplate"]) || defaultWidgetChartTemplate_r4);
      }
    },
    dependencies: [CardBodyComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatAComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-a",
      exportAs: "cWidgetStatA",
      imports: [CardBodyComponent, NgTemplateOutlet],
      host: {
        class: "card",
        "[class]": "hostClasses()"
      },
      template: `<ng-container>
  <c-card-body [class]="bodyClasses">
    <div>
      @if (!!value() || templates?.['widgetValueTemplate']) {
        <div class="fs-4 fw-semibold">
          <ng-container *ngTemplateOutlet="templates?.['widgetValueTemplate'] || defaultWidgetValueTemplate" />
        </div>
      }
      @if (!!title() || templates?.['widgetTitleTemplate']) {
        <div>
          <ng-container *ngTemplateOutlet="templates?.['widgetTitleTemplate'] || defaultWidgetTitleTemplate" />
        </div>
      }
    </div>
    <ng-container *ngTemplateOutlet="templates?.['widgetActionTemplate'] || defaultWidgetActionTemplate" />
  </c-card-body>
  <ng-container *ngTemplateOutlet="templates?.['widgetChartTemplate'] || defaultWidgetChartTemplate" />
</ng-container>

<ng-template #defaultWidgetTitleTemplate>
  {{ title() }}
</ng-template>

<ng-template #defaultWidgetValueTemplate>
  {{ value() }}
</ng-template>

<ng-template #defaultWidgetChartTemplate>
  <ng-content select=".chart-wrapper" />
</ng-template>

<ng-template #defaultWidgetActionTemplate>
  <ng-content />
</ng-template>
`
    }]
  }], null, {
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [forwardRef(() => TemplateIdDirective), __spreadProps(__spreadValues({}, {
        descendants: true
      }), {
        isSignal: true
      })]
    }]
  });
})();
var WidgetStatBComponent = class _WidgetStatBComponent extends CardComponent {
  constructor() {
    super();
  }
  /**
   * Sets the color context of the component to one of CoreUI themed colors.
   * @type Colors
   */
  // override readonly color: InputSignal<Colors | undefined> = input();
  /**
   * Sets the text-color context of the component to one of CoreUI themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  // override readonly textColor: InputSignal<TextColors | undefined> = input();
  /**
   * Title of the widget to display
   * @type string
   */
  title = input(...ngDevMode ? [void 0, {
    debugName: "title"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Helper text for your widget.
   * @type string
   */
  text = input(...ngDevMode ? [void 0, {
    debugName: "text"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Value for your widget to display
   * @type string
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Invert colors from their default dark shade.
   * @type boolean
   */
  inverse = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "inverse"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hostClasses = computed(() => {
    const color = this.color();
    const textColor = this.textColor();
    return {
      card: true,
      [`bg-${color}`]: !!color,
      [`text-${textColor}`]: !!textColor,
      "text-white": this.inverse()
    };
  }, ...ngDevMode ? [{
    debugName: "hostClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function WidgetStatBComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WidgetStatBComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WidgetStatBComponent,
    selectors: [["c-widget-stat-b"]],
    hostAttrs: [1, "card"],
    hostVars: 2,
    hostBindings: function WidgetStatBComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      title: [1, "title"],
      text: [1, "text"],
      value: [1, "value"],
      inverse: [1, "inverse"]
    },
    exportAs: ["cWidgetStatB"],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 3,
    consts: [[1, "fs-4", "fw-semibold"], [3, "class"]],
    template: function WidgetStatBComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "c-card-body");
        \u0275\u0275conditionalCreate(1, WidgetStatBComponent_Conditional_1_Template, 2, 1, "div", 0);
        \u0275\u0275conditionalCreate(2, WidgetStatBComponent_Conditional_2_Template, 2, 1, "div");
        \u0275\u0275projection(3);
        \u0275\u0275conditionalCreate(4, WidgetStatBComponent_Conditional_4_Template, 2, 3, "small", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!!ctx.value() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!!ctx.title() ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.text() ? 4 : -1);
      }
    },
    dependencies: [CardBodyComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatBComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-b",
      exportAs: "cWidgetStatB",
      imports: [CardBodyComponent],
      host: {
        class: "card",
        "[class]": "hostClasses()"
      },
      template: `<c-card-body>
  @if (!!value()) {
    <div class="fs-4 fw-semibold">{{ value() }}</div>
  }
  @if (!!title()) {
    <div>{{ title() }}</div>
  }
  <ng-content />
  @if (text()) {
    <small [class]="inverse() ? 'text-white text-opacity-75' : 'text-body-secondary'">
      {{ text() }}
    </small>
  }
</c-card-body>
`
    }]
  }], () => [], {
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    text: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "text",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    inverse: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inverse",
        required: false
      }]
    }]
  });
})();
var WidgetStatCComponent = class _WidgetStatCComponent extends CardComponent {
  constructor() {
    super();
  }
  /**
   * Icon for your component.
   * @type string
   */
  icon = input(...ngDevMode ? [void 0, {
    debugName: "icon"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Title of the widget to display
   * @type string
   */
  title = input(...ngDevMode ? [void 0, {
    debugName: "title"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Value for your widget to display
   * @type string|number
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Invert colors from their default dark shade.
   * @type boolean
   */
  inverse = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "inverse"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  templates = {};
  contentTemplates = contentChildren(TemplateIdDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentTemplates"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: true
  }));
  #contentTemplatesEffect = effect(() => {
    this.contentTemplates().forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }, ...ngDevMode ? [{
    debugName: "#contentTemplatesEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hostExtendedClass = computed(() => {
    return __spreadProps(__spreadValues({}, this.hostClasses()), {
      "text-white": this.inverse()
    });
  }, ...ngDevMode ? [{
    debugName: "hostExtendedClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  titleClasses = computed(() => {
    const inverse = this.inverse();
    return {
      "text-body-secondary": !inverse,
      "text-white": inverse,
      "text-opacity-75": inverse,
      [`text-${this.textColor()}`]: !!this.textColor()
    };
  }, ...ngDevMode ? [{
    debugName: "titleClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  valueClasses = computed(() => {
    return __spreadProps(__spreadValues({
      "fs-4": !this.textColor(),
      "fw-semibold": true
    }, this.titleClasses()), {
      "text-opacity-75": false
    });
  }, ...ngDevMode ? [{
    debugName: "valueClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  iconClasses = computed(() => {
    return __spreadValues({
      "mb-4": !this.textColor(),
      "text-end": true
    }, this.titleClasses());
  }, ...ngDevMode ? [{
    debugName: "iconClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function WidgetStatCComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WidgetStatCComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WidgetStatCComponent,
    selectors: [["c-widget-stat-c"]],
    contentQueries: function WidgetStatCComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplates, TemplateIdDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function WidgetStatCComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostExtendedClass());
      }
    },
    inputs: {
      icon: [1, "icon"],
      title: [1, "title"],
      value: [1, "value"],
      inverse: [1, "inverse"]
    },
    exportAs: ["cWidgetStatC"],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 9,
    vars: 4,
    consts: [["defaultWidgetIconTemplate", ""], ["defaultWidgetProgressTemplate", ""], [3, "class"], [4, "ngTemplateOutlet"]],
    template: function WidgetStatCComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "c-card-body");
        \u0275\u0275conditionalCreate(1, WidgetStatCComponent_Conditional_1_Template, 2, 3, "div", 2);
        \u0275\u0275conditionalCreate(2, WidgetStatCComponent_Conditional_2_Template, 2, 3, "div", 2);
        \u0275\u0275conditionalCreate(3, WidgetStatCComponent_Conditional_3_Template, 2, 3, "div", 2);
        \u0275\u0275conditionalCreate(4, WidgetStatCComponent_Conditional_4_Template, 1, 1, "ng-container");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, WidgetStatCComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, WidgetStatCComponent_ng_template_7_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.icon() || (ctx.templates == null ? null : ctx.templates["widgetIconTemplate"]) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!!ctx.value() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!!ctx.title() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.templates == null ? null : ctx.templates["widgetProgressTemplate"]) ? 4 : -1);
      }
    },
    dependencies: [CardBodyComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatCComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-c",
      exportAs: "cWidgetStatC",
      imports: [CardBodyComponent, NgTemplateOutlet],
      host: {
        "[class]": "hostExtendedClass()"
      },
      template: `<c-card-body>
  @if (icon() || templates?.['widgetIconTemplate']) {
    <div [class]="iconClasses()">
      <ng-container *ngTemplateOutlet="templates?.['widgetIconTemplate'] || defaultWidgetIconTemplate" />
    </div>
  }
  @if (!!value()) {
    <div [class]="valueClasses()">
      {{ value() }}
    </div>
  }
  @if (!!title()) {
    <div [class]="titleClasses()">
      {{ title() }}
    </div>
  }
  @if (templates?.['widgetProgressTemplate']) {
    <ng-container *ngTemplateOutlet="templates?.['widgetProgressTemplate'] || defaultWidgetProgressTemplate" />
  }
</c-card-body>

<ng-template #defaultWidgetIconTemplate>
  {{ icon() }}
</ng-template>

<ng-template #defaultWidgetProgressTemplate>
  <ng-content />
</ng-template>
`
    }]
  }], () => [], {
    icon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "icon",
        required: false
      }]
    }],
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    inverse: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inverse",
        required: false
      }]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [forwardRef(() => TemplateIdDirective), __spreadProps(__spreadValues({}, {
        descendants: true
      }), {
        isSignal: true
      })]
    }]
  });
})();
var WidgetStatDComponent = class _WidgetStatDComponent extends CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  // override readonly color = input<Colors>();
  /**
   * Values and subtitles for your component.
   * @type WidgetStatDValue
   */
  values = input(...ngDevMode ? [void 0, {
    debugName: "values"
  }] : (
    /* istanbul ignore next */
    []
  ));
  headerClasses = computed(() => {
    return {
      "position-relative": true,
      "d-flex": true,
      "justify-content-center": true,
      "align-items-center": true,
      [`bg-${this.color()}`]: this.color()
    };
  }, ...ngDevMode ? [{
    debugName: "headerClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WidgetStatDComponent_BaseFactory;
    return function WidgetStatDComponent_Factory(__ngFactoryType__) {
      return (\u0275WidgetStatDComponent_BaseFactory || (\u0275WidgetStatDComponent_BaseFactory = \u0275\u0275getInheritedFactory(_WidgetStatDComponent)))(__ngFactoryType__ || _WidgetStatDComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WidgetStatDComponent,
    selectors: [["c-widget-stat-d"]],
    hostAttrs: [1, "card"],
    inputs: {
      values: [1, "values"]
    },
    exportAs: ["cWidgetStatD"],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 2,
    consts: [["cRow", "", 1, "text-center"], [1, "vr"], [1, "fs-5", "fw-semibold"], [1, "text-uppercase", "text-body-secondary", "small"]],
    template: function WidgetStatDComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "c-card-header");
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "c-card-body", 0);
        \u0275\u0275repeaterCreate(3, WidgetStatDComponent_For_4_Template, 6, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.headerClasses());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.values());
      }
    },
    dependencies: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatDComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-d",
      exportAs: "cWidgetStatD",
      imports: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective],
      host: {
        class: "card"
      },
      template: '<c-card-header [class]="headerClasses()">\n  <ng-content />\n</c-card-header>\n<c-card-body cRow class="text-center">\n  @for (item of values(); track item; let i = $index) {\n    @if (i % 2 !== 0) {\n      <div class="vr"></div>\n    }\n    <c-col>\n      <div class="fs-5 fw-semibold">{{ item.value }}</div>\n      <div class="text-uppercase text-body-secondary small">{{ item.title }}</div>\n    </c-col>\n  }\n</c-card-body>\n'
    }]
  }], null, {
    values: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "values",
        required: false
      }]
    }]
  });
})();
var WidgetStatEComponent = class _WidgetStatEComponent extends CardComponent {
  constructor() {
    super();
  }
  /**
   * Title of the widget to display
   * @type string
   */
  title = input(...ngDevMode ? [void 0, {
    debugName: "title"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Value for your widget to display
   * @type string | number
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  titleClasses = computed(() => {
    const textColor = this.textColor();
    return {
      "text-body-secondary": !textColor,
      small: true,
      "text-uppercase": true,
      "fw-semibold": true,
      [`text-${textColor}`]: !!textColor
    };
  }, ...ngDevMode ? [{
    debugName: "titleClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function WidgetStatEComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WidgetStatEComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WidgetStatEComponent,
    selectors: [["c-widget-stat-e"]],
    inputs: {
      title: [1, "title"],
      value: [1, "value"]
    },
    exportAs: ["cWidgetStatE"],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 2,
    consts: [[1, "text-center"], [3, "class"], [1, "fs-6", "fw-semibold", "py-3"]],
    template: function WidgetStatEComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "c-card-body", 0);
        \u0275\u0275conditionalCreate(1, WidgetStatEComponent_Conditional_1_Template, 2, 3, "div", 1);
        \u0275\u0275conditionalCreate(2, WidgetStatEComponent_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!!ctx.title() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!!ctx.value() ? 2 : -1);
      }
    },
    dependencies: [CardBodyComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatEComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-e",
      exportAs: "cWidgetStatE",
      imports: [CardBodyComponent],
      template: '<c-card-body class="text-center">\n  @if (!!title()) {\n    <div [class]="titleClasses()">{{ title() }}</div>\n  }\n  @if (!!value()) {\n    <div class="fs-6 fw-semibold py-3">{{ value() }}</div>\n  }\n  <ng-content />\n</c-card-body>\n'
    }]
  }], () => [], {
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }]
  });
})();
var WidgetStatFComponent = class _WidgetStatFComponent extends CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  // override readonly color = input<Colors>();
  /**
   * Sets the text-color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  // override readonly textColor = input<TextColors | 'white' | 'muted'>();
  /**
   * Footer for your widget
   * @type string
   */
  footer = input(...ngDevMode ? [void 0, {
    debugName: "footer"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Icon for your widget
   * @type string
   */
  icon = input(...ngDevMode ? [void 0, {
    debugName: "icon"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Set padding of your component.
   * @type boolean
   */
  padding = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "padding"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Title of the widget to display
   * @type string
   */
  title = input(...ngDevMode ? [void 0, {
    debugName: "title"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Value for your widget to display
   * @type string
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  templates = {};
  contentTemplates = contentChildren(TemplateIdDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentTemplates"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: true
  }));
  #contentTemplatesEffect = effect(() => {
    this.contentTemplates().forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }, ...ngDevMode ? [{
    debugName: "#contentTemplatesEffect"
  }] : (
    /* istanbul ignore next */
    []
  ));
  cardBodyClasses = computed(() => {
    return {
      "d-flex": true,
      "align-items-center": true,
      "p-0": !this.padding()
    };
  }, ...ngDevMode ? [{
    debugName: "cardBodyClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  iconClasses = computed(() => {
    const color = this.color();
    const padding = this.padding();
    return {
      "me-3": !this.textColor(),
      "text-white": true,
      [`bg-${color}`]: !!color,
      "p-3": padding,
      "p-4": !padding,
      "rounded-start-1": !padding
    };
  }, ...ngDevMode ? [{
    debugName: "iconClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  titleClasses = computed(() => {
    const textColor = this.textColor();
    return {
      "text-body-secondary": !textColor,
      small: true,
      "text-uppercase": true,
      "fw-semibold": true,
      [`text-${textColor}`]: !!textColor
    };
  }, ...ngDevMode ? [{
    debugName: "titleClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  valueClasses = computed(() => {
    const textColor = this.textColor();
    return {
      "fs-6": !textColor,
      "fw-semibold": true,
      [`text-${textColor}`]: !!textColor
    };
  }, ...ngDevMode ? [{
    debugName: "valueClasses"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WidgetStatFComponent_BaseFactory;
    return function WidgetStatFComponent_Factory(__ngFactoryType__) {
      return (\u0275WidgetStatFComponent_BaseFactory || (\u0275WidgetStatFComponent_BaseFactory = \u0275\u0275getInheritedFactory(_WidgetStatFComponent)))(__ngFactoryType__ || _WidgetStatFComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WidgetStatFComponent,
    selectors: [["c-widget-stat-f"]],
    contentQueries: function WidgetStatFComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplates, TemplateIdDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "card"],
    hostVars: 2,
    hostBindings: function WidgetStatFComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses());
      }
    },
    inputs: {
      footer: [1, "footer"],
      icon: [1, "icon"],
      padding: [1, "padding"],
      title: [1, "title"],
      value: [1, "value"]
    },
    exportAs: ["cWidgetStatB"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 14,
    vars: 12,
    consts: [["defaultWidgetIconTemplate", ""], ["defaultFooterIconTemplate", ""], [4, "ngTemplateOutlet"]],
    template: function WidgetStatFComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "c-card-body")(2, "div");
        \u0275\u0275template(3, WidgetStatFComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "div");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, WidgetStatFComponent_Conditional_9_Template, 2, 1, "c-card-footer");
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(10, WidgetStatFComponent_ng_template_10_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, WidgetStatFComponent_ng_template_12_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const defaultWidgetIconTemplate_r3 = \u0275\u0275reference(11);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cardBodyClasses());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.iconClasses());
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates["widgetIconTemplate"]) || defaultWidgetIconTemplate_r3);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.valueClasses());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.value());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.titleClasses());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.footer() || (ctx.templates == null ? null : ctx.templates["widgetFooterTemplate"]) ? 9 : -1);
      }
    },
    dependencies: [CardBodyComponent, CardFooterComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatFComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-f",
      exportAs: "cWidgetStatB",
      imports: [CardBodyComponent, CardFooterComponent, NgTemplateOutlet],
      host: {
        class: "card",
        "[class]": "hostClasses()"
      },
      template: `<ng-container>
  <c-card-body [class]="cardBodyClasses()">
    <div [class]="iconClasses()">
      <ng-container *ngTemplateOutlet="templates?.['widgetIconTemplate'] || defaultWidgetIconTemplate" />
    </div>
    <div>
      <div [class]="valueClasses()">{{ value() }}</div>
      <div [class]="titleClasses()">{{ title() }}</div>
    </div>
  </c-card-body>
  @if (footer() || templates?.['widgetFooterTemplate']) {
    <c-card-footer>
      <ng-container *ngTemplateOutlet="templates?.['widgetFooterTemplate'] || defaultFooterIconTemplate" />
    </c-card-footer>
  }
</ng-container>

<ng-template #defaultWidgetIconTemplate>
  <span>{{ icon() }}</span>
</ng-template>

<ng-template #defaultFooterIconTemplate>
  <span>{{ footer() }}</span>
</ng-template>
`
    }]
  }], null, {
    footer: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "footer",
        required: false
      }]
    }],
    icon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "icon",
        required: false
      }]
    }],
    padding: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "padding",
        required: false
      }]
    }],
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [forwardRef(() => TemplateIdDirective), __spreadProps(__spreadValues({}, {
        descendants: true
      }), {
        isSignal: true
      })]
    }]
  });
})();
var WidgetModule = class _WidgetModule {
  static \u0275fac = function WidgetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WidgetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _WidgetModule,
    imports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent],
    exports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetModule, [{
    type: NgModule,
    args: [{
      imports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent],
      exports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent]
    }]
  }], null, null);
})();

// src/constants/api.constants.ts
var API_CONSTANTS = {
  // BASE_URL: 'http://172.16.15.109:8080/ApplicativoBadgeVVF', //Luigi Fisso
  BASE_URL: "http://172.16.8.89:8080/ApplicativoBadgeVVF",
  //Server Fisso Remoto
  // BASE_URL: 'http://localhost:8080/ApplicativoBadgeVVF', //Server Fisso Locale
  MOCK_LOGIN: true
};

export {
  takeUntilDestroyed,
  Platform,
  coerceNumberProperty,
  coerceElement,
  TemplateIdDirective,
  ButtonDirective,
  ButtonModule,
  AlertComponent,
  ShadowOnScrollDirective,
  AvatarComponent,
  BadgeComponent,
  BadgeModule,
  BreadcrumbRouterComponent,
  CardComponent,
  CardBodyComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  ColorModeService,
  DropdownMenuDirective,
  DropdownToggleDirective,
  DropdownComponent,
  DropdownItemDirective,
  FooterComponent,
  FormDirective,
  FormControlDirective,
  FormCheckInputDirective,
  FormLabelDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  ContainerComponent,
  ColComponent,
  RowDirective,
  RowComponent,
  GutterDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  ModalBodyComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalComponent,
  ProgressComponent,
  SidebarComponent,
  SidebarBrandComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  SidebarHeaderComponent,
  SidebarFooterComponent,
  SidebarNavComponent,
  SpinnerComponent,
  SpinnerModule,
  TableDirective,
  TableModule,
  ToastComponent,
  ToastBodyComponent,
  ToastHeaderComponent,
  ToasterComponent,
  ToastModule,
  TooltipDirective,
  WidgetStatCComponent,
  API_CONSTANTS
};
//# sourceMappingURL=chunk-7NVYWTLR.js.map
