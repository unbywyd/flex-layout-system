var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let StackedBox = class StackedBox extends LitElement {
    constructor() {
        super(...arguments);
        this.crop = null;
    }
    render() {
        return html ` <slot></slot> `;
    }
};
StackedBox.styles = css `
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host ::slotted(*) {
      position: absolute;
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StackedBox.prototype, "crop", void 0);
StackedBox = __decorate([
    customElement("stacked-box")
], StackedBox);
export { StackedBox };
let StackedCell = class StackedCell extends LitElement {
    constructor() {
        super(...arguments);
        this.rel = null;
        this.overlay = null;
        this.stretch = null;
        this.xa = null;
        this.xb = null;
        this.ya = null;
        this.yb = null;
        this.z = null;
        this.overcolor = null;
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.overcolor) {
            styleEl.style.setProperty("--f-sc-oc", this.overcolor);
        }
        else {
            styleEl.style.setProperty("--f-sc-oc", "rgba(0, 0, 0, 0.5)");
        }
        if (this.xa) {
            styleEl.style.setProperty("--f-sc-s", this.xa);
        }
        else {
            styleEl.style.setProperty("--f-sc-s", "auto");
        }
        if (this.xb) {
            styleEl.style.setProperty("--f-sc-e", this.xb);
        }
        else {
            styleEl.style.setProperty("--f-sc-e", "auto");
        }
        if (this.ya) {
            styleEl.style.setProperty("--f-sc-t", this.ya);
        }
        else {
            styleEl.style.setProperty("--f-sc-t", "auto");
        }
        if (this.yb) {
            styleEl.style.setProperty("--f-sc-b", this.yb);
        }
        else {
            styleEl.style.setProperty("--f-sc-b", "auto");
        }
        if (this.z) {
            styleEl.style.setProperty("--f-sc-z", this.z);
        }
        else {
            styleEl.style.setProperty("--f-sc-z", "auto");
        }
        return html `<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
StackedCell.styles = css `
    :host {
      position: absolute;
      box-sizing: border-box;
      inset-inline-start: var(--f-sc-s);
      inset-inline-end: var(--f-sc-e);
      inset-block-start: var(--f-sc-t);
      inset-block-end: var(--f-sc-b);
      z-index: var(--f-sc-z);
    }
    :host([rel]) {
      position: relative;
    }
    :host([overlay]) {
      background: var(--f-sc-oc, rgba(0, 0, 0, 0.5));
    }
    :host([stretch]) {
      inset: 0;
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "rel", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "overlay", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "stretch", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "xa", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "xb", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "ya", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "yb", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "z", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StackedCell.prototype, "overcolor", void 0);
StackedCell = __decorate([
    customElement("stacked-cell")
], StackedCell);
export { StackedCell };
let FitBox = class FitBox extends LitElement {
    constructor() {
        super(...arguments);
        this.stretch = null;
        this.flex = null;
        this.crop = null;
        this.scrollable = null;
        this.center = null;
        this.fill = null;
        this.round = null;
        this.cover = null;
        this.contain = null;
        this.width = null;
        this.height = null;
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.width) {
            styleEl.style.setProperty("--f-fb-w", this.width);
        }
        else {
            styleEl.style.setProperty("--f-fb-w", "100%");
        }
        if (this.height) {
            styleEl.style.setProperty("--f-fb-h", this.height);
        }
        else {
            styleEl.style.setProperty("--f-fb-h", "auto");
        }
        return html `<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
FitBox.styles = css `
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;
      width: var(--f-fb-w);
      height: var(--f-fb-h);
    }
    :host([flex]) {
      display: flex;
    }
    :host([stretch]) {
      width: 100% !important;
      height: 100% !important;
      flex-grow: 1;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([scrollable]) {
      overflow: auto;
    }
    :host([center]) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :host([fill]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
    }
    :host([round]) {
      overflow: hidden;
      border-radius: 50%;
    }
    :host([cover]) ::slotted(img) {
      object-fit: cover;
      object-position: center;
      width: 100% !important;
      height: 100%;
    }
    :host([contain]) ::slotted(img) {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "stretch", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "flex", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "crop", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "scrollable", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "center", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "fill", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "round", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "cover", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "contain", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "width", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FitBox.prototype, "height", void 0);
FitBox = __decorate([
    customElement("fit-box")
], FitBox);
export { FitBox };
let AspectRatio = class AspectRatio extends LitElement {
    constructor() {
        super(...arguments);
        this.fit = null;
        this.crop = null;
        this.center = null;
        this.ratio = null;
    }
    render() {
        return html `<slot></slot>`;
    }
};
AspectRatio.defaultProps = {
    display: "flex",
};
AspectRatio.styles = css `
    :host {
      --f-ar-v: auto;
      box-sizing: border-box;
      aspect-ratio: var(--f-ar-v);
    }
    :host[crop] {
      overflow: hidden;
    }
    :host([fit]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
    }
    :host([center]) ::slotted(img) {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
    :host([center]) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    :host([ratio="1/1"]) {
      --f-ar-v: 1/1;
    }
    :host([ratio="4/3"]) {
      --f-ar-v: 4/3;
    }
    :host([ratio="16/9"]) {
      --f-ar-v: 16/9;
    }
    :host([ratio="21/9"]) {
      --f-ar-v: 21/9;
    }
    :host([ratio="3/4"]) {
      --f-ar-v: 3/4;
    }
    :host([ratio="9/16"]) {
      --f-ar-v: 9/16;
    }
    :host([ratio="9/21"]) {
      --f-ar-v: 9/21;
    }
    :host([ratio="1/2"]) {
      --f-ar-v: 1/2;
    }
    :host([ratio="2/1"]) {
      --f-ar-v: 2/1;
    }
    :host([ratio="1/3"]) {
      --f-ar-v: 1/3;
    }
    :host([ratio="3/1"]) {
      --f-ar-v: 3/1;
    }
    :host([ratio="1/4"]) {
      --f-ar-v: 1/4;
    }
    :host([ratio="4/1"]) {
      --f-ar-v: 4/1;
    }
    :host([ratio="1/5"]) {
      --f-ar-v: 1/5;
    }
    :host([ratio="5/1"]) {
      --f-ar-v: 5/1;
    }
    :host([ratio="1/6"]) {
      --f-ar-v: 1/6;
    }
    :host([ratio="6/1"]) {
      --f-ar-v: 6/1;
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], AspectRatio.prototype, "fit", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], AspectRatio.prototype, "crop", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], AspectRatio.prototype, "center", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], AspectRatio.prototype, "ratio", void 0);
AspectRatio = __decorate([
    customElement("a-ratio")
], AspectRatio);
export { AspectRatio };
let FlexDivider = class FlexDivider extends LitElement {
    constructor() {
        super(...arguments);
        this.v = null;
        this.h = null;
        this.stretch = null;
        this.mg = null;
        this.color = null;
        this.size = null;
        this.width = null;
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.size) {
            styleEl.style.setProperty("--f-divider-size", this.size);
        }
        else {
            styleEl.style.setProperty("--f-divider-size", `var(--f-divider-fallback-size, 1px)`);
        }
        if (this.width) {
            styleEl.style.setProperty("--f-divider-width", this.width);
        }
        else {
            styleEl.style.setProperty("--f-divider-width", `var(--f-divider-fallback-width, 100%)`);
        }
        if (this.color) {
            styleEl.style.setProperty("--f-divider-bg", this.color);
        }
        else {
            styleEl.style.setProperty("--f-divider-bg", `var(--f-divider-fallback-color, currentColor)`);
        }
        if (this.mg) {
            styleEl.style.setProperty("--f-divider-m", this.mg);
        }
        else {
            styleEl.style.setProperty("--f-divider-m", `var(--f-divider-fallback-margin, 0)`);
        }
        return html `<style>:host {${styleEl.style.cssText}}</style>`;
    }
};
FlexDivider.styles = css `
    :host {    
      box-sizing: border-box;
      display: block;
      align-self: center;
    }
    :host([v]) {
      margin-inline: var(--f-divider-m, 0);
      width: var(--f-divider-size, 1px);
      height: var(--f-divider-width, 100%);
    }
    :host([h]) {
      margin-block: var(--f-divider-m, 0);
      height: var(--f-divider-size, 1px);
      width: var(--f-divider-width, 100%);
    }
    :host {
      background-color: var(--f-divider-bg, currentColor);
    }
    :host([stretch][v]) {
      height: auto;      
    }
    :host([stretch][h]) {
      width: auto;
    }
    :host([stretch]) {
      align-self: stretch;
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexDivider.prototype, "v", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexDivider.prototype, "h", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexDivider.prototype, "stretch", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexDivider.prototype, "mg", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexDivider.prototype, "color", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexDivider.prototype, "size", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexDivider.prototype, "width", void 0);
FlexDivider = __decorate([
    customElement("flex-divider")
], FlexDivider);
export { FlexDivider };
let SpaceBox = class SpaceBox extends LitElement {
    constructor() {
        super(...arguments);
        this.width = null;
        this.height = null;
        this.size = null;
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.width) {
            styleEl.style.setProperty("--f-sbx-w", this.width);
        }
        else if (!this.size) {
            styleEl.style.setProperty("--f-sbx-w", "100%");
        }
        if (this.height) {
            styleEl.style.setProperty("--f-sbx-h", this.height);
        }
        else {
            styleEl.style.setProperty("--f-sbx-h", "auto");
        }
        if (this.size) {
            styleEl.style.setProperty("--f-sbx-w", this.size);
            styleEl.style.setProperty("--f-sbx-h", this.size);
        }
        else {
            if (!this.width) {
                styleEl.style.setProperty("--f-sbx-w", "100%");
            }
            if (!this.height) {
                styleEl.style.setProperty("--f-sbx-h", "auto");
            }
        }
        return html `<style>:host {${styleEl.style.cssText}}</style>`;
    }
};
SpaceBox.styles = css `
    :host {
      box-sizing: border-box;
      display: block;
      width: var(--f-sbx-w);
      height: var(--f-sbx-h);
    }
  `;
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], SpaceBox.prototype, "width", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], SpaceBox.prototype, "height", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], SpaceBox.prototype, "size", void 0);
SpaceBox = __decorate([
    customElement("space-box")
], SpaceBox);
export { SpaceBox };
let StyleBox = class StyleBox extends LitElement {
    constructor() {
        super(...arguments);
        this.display = null;
        this.inline = null;
        this.block = null;
        this.crop = null;
        this.scrollable = null;
        this.inherit = null;
        this.nowrap = null;
        this.wrap = null;
        this.color = null;
        this.bgc = null;
        this.bgi = null;
        this.bgr = null;
        this.bgp = null;
        this.bgs = null;
        this.bga = null;
        this.transform = null;
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
        this.px = null;
        this.py = null;
        this.mx = null;
        this.my = null;
        this.fg = null;
    }
    render() {
        const styleEl = document.createElement("span");
        const value = (val) => {
            return this.inherit ? "inherit" : val;
        };
        if (this.display) {
            styleEl.style.setProperty("--f-sb-display", this.display);
        }
        else {
            styleEl.style.setProperty("--f-sb-display", `var(--f-sb-fallback-display, inline-block)`);
        }
        if (this.fg) {
            styleEl.style.setProperty("--f-sb-fg", this.fg);
        }
        else {
            styleEl.style.setProperty("--f-sb-fg", `var(--f-sb-fallback-color, inherit)`);
        }
        if (this.transform) {
            styleEl.style.setProperty("transform", this.transform);
        }
        else {
            styleEl.style.removeProperty("transform");
        }
        if (this.bgi) {
            styleEl.style.setProperty("--f-sb-bgi", this.bgi);
        }
        else {
            styleEl.style.setProperty("--f-sb-bgi", `var(--f-sb-fallback-background-image, ${value("none")})`);
        }
        if (this.bgr) {
            styleEl.style.setProperty("--f-sb-bgr", this.bgr);
        }
        else {
            styleEl.style.setProperty("--f-sb-bgr", `var(--f-sb-fallback-background-repeat, ${value("no-repeat")})`);
        }
        if (this.bgp) {
            styleEl.style.setProperty("--f-sb-bgp", this.bgp);
        }
        else {
            styleEl.style.setProperty("--f-sb-bgp", `var(--f-sb-fallback-background-position, ${value("0 0")})`);
        }
        if (this.bgs) {
            styleEl.style.setProperty("--f-sb-bgs", this.bgs);
        }
        else {
            styleEl.style.setProperty("--f-sb-bgs", `var(--f-sb-fallback-background-size, ${value("auto")})`);
        }
        if (this.bga) {
            styleEl.style.setProperty("--f-sb-bga", this.bga);
        }
        else {
            styleEl.style.setProperty("--f-sb-bga", `var(--f-sb-fallback-background-attachment, ${value("scroll")})`);
        }
        if (this.bgc) {
            styleEl.style.setProperty("--f-sb-bgc", this.bgc);
        }
        else {
            styleEl.style.setProperty("--f-sb-bgc", `var(--f-sb-fallback-background-color, ${value("transparent")})`);
        }
        if (this.color) {
            styleEl.style.setProperty("--f-sb-color", this.color);
        }
        else {
            styleEl.style.setProperty("--f-sb-color", "var(--f-sb-fallback-color, inherit)");
        }
        styleEl.style.setProperty("--f-sb-pis", '0');
        styleEl.style.setProperty("--f-sb-pie", '0');
        styleEl.style.setProperty("--f-sb-pbs", '0');
        styleEl.style.setProperty("--f-sb-pbe", '0');
        styleEl.style.setProperty("--f-sb-mis", '0');
        styleEl.style.setProperty("--f-sb-mie", '0');
        styleEl.style.setProperty("--f-sb-mbs", '0');
        styleEl.style.setProperty("--f-sb-mbe", '0');
        if (this.pd) {
            styleEl.style.setProperty("--f-sb-pis", this.pd);
            styleEl.style.setProperty("--f-sb-pie", this.pd);
            styleEl.style.setProperty("--f-sb-pbs", this.pd);
            styleEl.style.setProperty("--f-sb-pbe", this.pd);
        }
        if (this.mg) {
            styleEl.style.setProperty("--f-sb-mis", this.mg);
            styleEl.style.setProperty("--f-sb-mie", this.mg);
            styleEl.style.setProperty("--f-sb-mbs", this.mg);
            styleEl.style.setProperty("--f-sb-mbe", this.mg);
        }
        if (this.px) {
            styleEl.style.setProperty("--f-sb-pis", this.px);
            styleEl.style.setProperty("--f-sb-pie", this.px);
        }
        if (this.py) {
            styleEl.style.setProperty("--f-sb-pbs", this.py);
            styleEl.style.setProperty("--f-sb-pbe", this.py);
        }
        if (this.mx) {
            styleEl.style.setProperty("--f-sb-mis", this.mx);
            styleEl.style.setProperty("--f-sb-mie", this.mx);
        }
        if (this.my) {
            styleEl.style.setProperty("--f-sb-mbs", this.my);
            styleEl.style.setProperty("--f-sb-mbe", this.my);
        }
        if (this.tt) {
            styleEl.style.setProperty("--f-sb-tt", this.tt);
        }
        else {
            styleEl.style.setProperty("--f-sb-tt", `var(--f-sb-fallback-text-transform, ${value("none")})`);
        }
        if (this.w) {
            styleEl.style.setProperty("--f-sb-w", this.w);
        }
        else {
            styleEl.style.setProperty("--f-sb-w", `var(--f-sb-fallback-width, ${value("auto")})`);
        }
        if (this.h) {
            styleEl.style.setProperty("--f-sb-h", this.h);
        }
        else {
            styleEl.style.setProperty("--f-sb-h", `var(--f-sb-fallback-height, ${value("auto")})`);
        }
        if (this.mw) {
            styleEl.style.setProperty("--f-sb-mw", this.mw);
        }
        else {
            styleEl.style.setProperty("--f-sb-mw", `var(--f-sb-fallback-min-width, ${value("auto")})`);
        }
        if (this.mxw) {
            styleEl.style.setProperty("--f-sb-mxw", this.mxw);
        }
        else {
            styleEl.style.setProperty("--f-sb-mxw", `var(--f-sb-fallback-max-width, ${value("auto")})`);
        }
        if (this.mh) {
            styleEl.style.setProperty("--f-sb-mh", this.mh);
        }
        else {
            styleEl.style.setProperty("--f-sb-mh", `var(--f-sb-fallback-min-height, ${value("auto")})`);
        }
        if (this.mxh) {
            styleEl.style.setProperty("--f-sb-mxh", this.mxh);
        }
        else {
            styleEl.style.setProperty("--f-sb-mxh", `var(--f-sb-fallback-max-height, ${value("auto")})`);
        }
        if (this.pis) {
            styleEl.style.setProperty("--f-sb-pis", this.pis);
        }
        if (this.pie) {
            styleEl.style.setProperty("--f-sb-pie", this.pie);
        }
        if (this.pbs) {
            styleEl.style.setProperty("--f-sb-pbs", this.pbs);
        }
        if (this.pbe) {
            styleEl.style.setProperty("--f-sb-pbe", this.pbe);
        }
        if (this.mis) {
            styleEl.style.setProperty("--f-sb-mis", this.mis);
        }
        if (this.mie) {
            styleEl.style.setProperty("--f-sb-mie", this.mie);
        }
        if (this.mbs) {
            styleEl.style.setProperty("--f-sb-mbs", this.mbs);
        }
        if (this.mbe) {
            styleEl.style.setProperty("--f-sb-mbe", this.mbe);
        }
        if (this.ta) {
            styleEl.style.setProperty("--f-sb-ta", this.ta);
        }
        else {
            styleEl.style.setProperty("--f-sb-ta", `var(--f-sb-fallback-text-align, ${value("start")})`);
        }
        if (this.op) {
            styleEl.style.setProperty("--f-sb-op", this.op);
        }
        else {
            styleEl.style.setProperty("--f-sb-op", `var(--f-sb-fallback-opacity, ${value("1")})`);
        }
        if (this.td) {
            styleEl.style.setProperty("--f-sb-td", this.td);
        }
        else {
            styleEl.style.setProperty("--f-sb-td", `var(--f-sb-fallback-text-decoration, ${value("none")})`);
        }
        if (this.br) {
            styleEl.style.setProperty("--f-sb-br", this.br);
        }
        else {
            styleEl.style.setProperty("--f-sb-br", `var(--f-sb-fallback-border-radius, ${value("0")})`);
        }
        if (this.fz) {
            styleEl.style.setProperty("--f-sb-fsz", this.fz);
        }
        else {
            styleEl.style.setProperty("--f-sb-fsz", `var(--f-sb-fallback-font-size, ${value("1rem")})`);
        }
        if (this.fw) {
            styleEl.style.setProperty("--f-sb-fw", this.fw);
        }
        else {
            styleEl.style.setProperty("--f-sb-fw", `var(--f-sb-fallback-font-weight, ${value("normal")})`);
        }
        if (this.lh) {
            styleEl.style.setProperty("--f-sb-lh", this.lh);
        }
        else {
            styleEl.style.setProperty("--f-sb-lh", `var(--f-sb-fallback-line-height, ${value("normal")})`);
        }
        const styles = styleEl.style.cssText;
        return html `<style>:host {${styles}}</style><slot></slot>`;
    }
};
StyleBox.styles = css `
    :host {
      box-sizing: border-box;
      display: var(--f-sb-display);
      color: var(--f-sb-color);
      background-color: var(--f-sb-bgc);
      background-image: var(--f-sb-bgi);
      background-repeat: var(--f-sb-bgr);
      background-position: var(--f-sb-bgp);
      background-size: var(--f-sb-bgs);
      background-attachment: var(--f-sb-bga);
      font-size: var(--f-sb-fsz);
      line-height: var(--f-sb-lh);
      font-weight: var(--f-sb-fw);
      text-decoration: var(--f-sb-td);
      text-transform: var(--f-sb-tt);
      flex-grow: var(--f-sb-fg);
      width: var(--f-sb-w);
      height: var(--f-sb-h);
      min-width: var(--f-sb-mw);
      max-width: var(--f-sb-mxw);
      min-height: var(--f-sb-mh);
      max-height: var(--f-sb-mxh);

      text-align: var(--f-sb-ta);
      opacity: var(--f-sb-op);
      border-radius: var(--f-sb-br);

      padding-inline-start: var(--f-sb-pis);
      padding-inline-end: var(--f-sb-pie);
      padding-block-start: var(--f-sb-pbs);
      padding-block-end: var(--f-sb-pbe);
      margin-inline-start: var(--f-sb-mis);
      margin-inline-end: var(--f-sb-mie);
      margin-block-start: var(--f-sb-mbs);
      margin-block-end: var(--f-sb-mbe);
    }
    :host([nowrap]) {
      white-space: nowrap;
    }
    :host([wrap]) {
      white-space: pre-wrap;
    }
    :host([inline]) {
      --f-sb-display: inline;
    }
    :host([block]) {
      --f-sb-display: block;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([scrollable]) {
      overflow: auto;
    }
    :host([inherit][td]) ::slotted(*) {
      text-decoration: inherit;
    }
    :host([inherit][fz]) ::slotted(*) {
      font-size: inherit;
    }
    :host([inherit][fw]) ::slotted(*) {
      font-weight: inherit;
    }
    :host([inherit][lh]) ::slotted(*) {
      line-height: inherit;
    }
    :host([inherit][ta]) ::slotted(*) {
      text-align: inherit;
    }
    :host([inherit][tt]) ::slotted(*) {
      text-transform: inherit;
    }
  `;
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "display", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "inline", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "block", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "crop", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "scrollable", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "inherit", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "nowrap", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "wrap", void 0);
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
], StyleBox.prototype, "bgi", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "bgr", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "bgp", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "bgs", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "bga", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "transform", void 0);
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
], StyleBox.prototype, "px", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "py", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "mx", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "my", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], StyleBox.prototype, "fg", void 0);
StyleBox = __decorate([
    customElement("s-box")
], StyleBox);
export { StyleBox };
let ScreenReaderOnly = class ScreenReaderOnly extends LitElement {
    constructor() {
        super(...arguments);
        this.focusable = false;
    }
    render() {
        return html `<slot></slot>`;
    }
};
ScreenReaderOnly.styles = css `
    :host {
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
    :host([focusable]:focus) {
      position: relative !important;
      width: auto !important;
      height: auto !important;
      clip: initial !important;
      margin: inherit !important;
      padding: inherit !important;
      border: initial !important;
      overflow: initial !important;
      white-space: initial !important;
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], ScreenReaderOnly.prototype, "focusable", void 0);
ScreenReaderOnly = __decorate([
    customElement("sr-only")
], ScreenReaderOnly);
export { ScreenReaderOnly };
let LtrOnly = class LtrOnly extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
LtrOnly.styles = css `
    :host {
      display: inline-block;
      direction: ltr;
    }
  `;
LtrOnly = __decorate([
    customElement("ltr-only")
], LtrOnly);
export { LtrOnly };
//# sourceMappingURL=utils.js.map