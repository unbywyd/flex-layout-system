var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVal, setVars } from "../utils/media";
const _window = (typeof window !== "undefined" ? window : {});
let DisplayBox = class DisplayBox extends LitElement {
    constructor() {
        super(...arguments);
        this.d = null;
        this.media = null;
    }
    checkMedia() {
        if (!_window.matchMedia || !this.media) {
            return true;
        }
        return _window.matchMedia(this.media).matches;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.media) {
            return;
        }
        this._resizeListener = () => {
            this.requestUpdate();
        };
        _window === null || _window === void 0 ? void 0 : _window.addEventListener("resize", this._resizeListener);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._resizeListener) {
            _window === null || _window === void 0 ? void 0 : _window.removeEventListener("resize", this._resizeListener);
        }
    }
    render() {
        const styleEl = document.createElement("span");
        setVars("display", this.d, 'block', styleEl, false);
        const result = html `<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
        if (!this.media) {
            return result;
        }
        return this.checkMedia() ? result : html ``;
    }
};
DisplayBox.styles = css `
    ${unsafeCSS(generateRootMediaRules([{
        attr: 'd',
        cssProp: 'display',
    }]))}
  `;
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], DisplayBox.prototype, "d", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], DisplayBox.prototype, "media", void 0);
DisplayBox = __decorate([
    customElement("d-box")
], DisplayBox);
export { DisplayBox };
let StackedBox = class StackedBox extends LitElement {
    constructor() {
        super(...arguments);
        this.size = null;
    }
    render() {
        const styleEl = document.createElement("span");
        setVars("width", this.size, 'auto', styleEl);
        setVars("height", this.size, 'auto', styleEl);
        return html `<style>:host { ${styleEl.style.cssText}}</style>`;
    }
};
StackedBox.styles = css `
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;      
      flex: 0 0 auto;
    }
    :host([wf]) {
      width: 100%;      
    }
    :host([hf]) {
      width: 100%;      
    }
    :host([stretch]) {
      flex: 1 1 auto;    
    } 
    ${unsafeCSS(generateRootMediaRules([{
        attr: 'size',
        cssProp: 'width',
    }, {
        attr: 'size',
        cssProp: 'height',
    }]))}
  `;
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StackedBox.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StackedBox.prototype, "stretch", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StackedBox.prototype, "fw", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StackedBox.prototype, "hf", void 0);
StackedBox = __decorate([
    customElement("space-box")
], StackedBox);
export { StackedBox };
let StyleBox = class StyleBox extends LitElement {
    constructor() {
        super(...arguments);
        this.fit = null;
        this.unstyle = false;
        this.d = null;
        this.zi = null;
        this.pos = null;
        this.inset = null;
        this.ws = null;
        this.color = null;
        this.bgc = null;
        this.fz = null;
        this.fw = null;
        this.lh = null;
        this.w = null;
        this.h = null;
        this.mw = null;
        this.mxw = null;
        this.mh = null;
        this.tt = null;
        this.mxh = null;
        this.pis = null;
        this.pie = null;
        this.pbs = null;
        this.pbe = null;
        this.mbs = null;
        this.mbe = null;
        this.mis = null;
        this.mie = null;
        this.mg = null;
        this.pd = null;
        this.ta = null;
        this.op = null;
        this.td = null;
        this.br = null;
        this.pi = null;
        this.pb = null;
        this.mi = null;
        this.mb = null;
        this.fg = null;
        this.ratio = null;
    }
    render() {
        const styleEl = document.createElement("span");
        setVars('display', this.d, 'inline-block', styleEl, false);
        setVars("width", this.w, 'auto', styleEl);
        setVars("height", this.h, 'auto', styleEl);
        setVars("aspect-ratio", this.ratio, 'auto', styleEl);
        setVars("font-size", this.fz, 'inherit', styleEl);
        setVars("text-align", this.ta, 'inherit', styleEl);
        setVars("padding", this.pd, '0', styleEl);
        setVars("margin", this.mg, '0', styleEl);
        setVars("inset", this.inset, 'auto', styleEl);
        setVars("position", this.pos, 'static', styleEl);
        setVars("padding-inline-start", this.pis, '0', styleEl);
        setVars("padding-inline-end", this.pie, '0', styleEl);
        setVars("padding-block-start", this.pbs, '0', styleEl);
        setVars("padding-block-end", this.pbe, '0', styleEl);
        setVars("margin-inline-start", this.mis, '0', styleEl);
        setVars("margin-inline-end", this.mie, '0', styleEl);
        setVars("margin-block-start", this.mbs, '0', styleEl);
        setVars("margin-block-end", this.mbe, '0', styleEl);
        setVars("padding-inline", this.pi, '0', styleEl);
        setVars("padding-block", this.pb, '0', styleEl);
        setVars("margin-inline", this.mi, '0', styleEl);
        setVars("margin-block", this.mb, '0', styleEl);
        setVars("line-height", this.lh, 'normal', styleEl);
        setVars("font-weight", this.fw, 'normal', styleEl);
        setVars("min-width", this.mw, "auto", styleEl);
        setVars("min-height", this.mh, "auto", styleEl);
        setVars("max-width", this.mxw, "none", styleEl);
        setVars("max-height", this.mxh, "none", styleEl);
        setVars("border-radius", this.br, "0", styleEl);
        setVars("flex-grow", this.fg, '0', styleEl);
        setVal("background-color", this.bgc, styleEl);
        setVal("color", this.color, styleEl);
        setVal("text-decoration", this.td, styleEl);
        setVal("text-transform", this.tt, styleEl);
        setVal("white-space", this.ws, styleEl);
        setVal("opacity", this.op, styleEl);
        setVal("z-index", this.zi, styleEl);
        const styles = styleEl.style.cssText;
        let cssRules = `:host{${styles}}`;
        if (this.fit) {
            cssRules += `:host([fit]) {--f-sb-object-fit: ${this.fit} }`;
        }
        return html `<style>${unsafeCSS(cssRules)}</style><slot></slot>`;
    }
};
StyleBox.styles = css `
      :host { 
      --f-sb-object-fit: cover;
      box-sizing: border-box;    
    }
    :host([block]) {
      display: block;
    }
    :host([center]) {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }   
    :host([object-fit]) ::slotted(img), :host([object-fit]) ::slotted(video) {
      object-fit: var(--f-sb-object-fit);
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-position: center;
    }  
    :host([fill]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
    }
    :host([round]) {
      overflow: hidden;
      border-radius: 50%;
    }
    :host([unstyle]) ::slotted(*) {
      all: unset;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([stretch]) {
      width: 100% !important;
      height: 100% !important;
      flex-grow: 1;
    }
    :host([scrollable]) {
      overflow: auto;
    }
    :host([sr-only]) {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border-width: 0 !important;
    }    
    ${unsafeCSS(generateRootMediaRules([{
        attr: 'd',
        cssProp: 'display',
    }, {
        attr: 'w',
        cssProp: 'width',
    }, {
        attr: 'h',
        cssProp: 'height',
    }, {
        attr: 'ratio',
        cssProp: 'aspect-ratio',
    }, {
        attr: 'fz',
        cssProp: 'font-size',
    }, {
        attr: 'ta',
        cssProp: 'text-align',
    }, {
        attr: 'pd',
        cssProp: 'padding',
    }, {
        attr: 'mg',
        cssProp: 'margin',
    }, {
        attr: 'inset',
        cssProp: 'inset',
    }, {
        attr: 'pos',
        cssProp: 'position',
    }, {
        attr: 'pi',
        cssProp: 'padding-inline',
    }, {
        attr: 'pb',
        cssProp: 'padding-block',
    }, {
        attr: 'mi',
        cssProp: 'margin-inline',
    }, {
        attr: 'mb',
        cssProp: 'margin-block',
    }, {
        attr: 'pis',
        cssProp: 'padding-inline-start',
    }, {
        attr: 'pie',
        cssProp: 'padding-inline-end',
    }, {
        attr: 'pbs',
        cssProp: 'padding-block-start',
    }, {
        attr: 'pbe',
        cssProp: 'padding-block-end',
    }, {
        attr: 'mis',
        cssProp: 'margin-inline-start',
    }, {
        attr: 'mie',
        cssProp: 'margin-inline-end',
    }, {
        attr: 'mbs',
        cssProp: 'margin-block-start',
    }, {
        attr: 'mbe',
        cssProp: 'margin-block-end',
    }, {
        attr: 'lh',
        cssProp: 'line-height',
    }, {
        attr: 'fw',
        cssProp: 'font-weight',
    }, {
        attr: 'mw',
        cssProp: 'min-width',
    }, {
        attr: 'mh',
        cssProp: 'min-height',
    }, {
        attr: 'mxw',
        cssProp: 'max-width',
    }, {
        attr: 'mxh',
        cssProp: 'max-height',
    }, {
        attr: 'br',
        cssProp: 'border-radius',
    }, {
        attr: 'fg',
        cssProp: 'flex-grow',
    }]))}
  `;
__decorate([
    property({ type: String, reflect: true, attribute: "fit" }),
    __metadata("design:type", Object)
], StyleBox.prototype, "fit", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "unstyle", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "block", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "d", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "round", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "stretch", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "zi", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pos", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "inset", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "fill", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "crop", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: "sr-only" }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "srOnly", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], StyleBox.prototype, "scrollable", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "ws", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "color", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "bgc", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "fz", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "fw", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "lh", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "w", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "h", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mw", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mxw", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mh", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "tt", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mxh", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pis", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pie", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pbs", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pbe", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mbs", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mbe", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mis", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mie", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mg", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pd", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "ta", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "op", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "td", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "br", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pi", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "pb", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mi", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mb", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "fg", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "ratio", void 0);
StyleBox = __decorate([
    customElement("s-box")
], StyleBox);
export { StyleBox };
//# sourceMappingURL=utils.js.map