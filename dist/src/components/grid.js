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
import { BreakpointSize } from "../config";
import { generateRootMediaRules } from "../utils/media";
let FlexGrid = class FlexGrid extends LitElement {
    constructor() {
        super(...arguments);
        this.crop = null;
        this.flex = null;
        this.compact = null;
        this.gap = null;
        this.gapSm = null;
        this.smBp = BreakpointSize.sm;
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.gap) {
            styleEl.style.setProperty("--f-g-gap", this.gap);
        }
        else {
            styleEl.style.setProperty("--f-g-gap", "0");
        }
        if (this.gapSm) {
            styleEl.style.setProperty("--f-g-gap-sm", this.gapSm);
        }
        else {
            styleEl.style.setProperty("--f-g-gap-sm", "0");
        }
        return html `<style>:host {${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
FlexGrid.styles = css `
    :host {
      box-sizing: border-box;
      display: block;    
      padding: var(--f-g-gap, 0);
    }
    :host([flex]) {
      display: flex;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([compact]) {
      padding: 0;
    }
    :host ::slotted(*) {
      --f-g-pd: var(--f-g-gap);
    }
    
    :host ::slotted(*) {
      margin: 0 calc(-1 * var(--f-g-gap));
    }
    :host ::slotted(*:last-child) {
      margin-bottom: calc(-1 * var(--f-g-gap));
    }
    :host ::slotted(*:first-child) {
      margin-top: calc(-1 * var(--f-g-gap));
    }
    ${unsafeCSS(generateRootMediaRules([{
        prop: 'gap',
        css: `--f-g-gap: var(--f-g-gap-sm);`
    }]))}
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexGrid.prototype, "crop", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexGrid.prototype, "flex", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexGrid.prototype, "compact", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexGrid.prototype, "gap", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: "gap-sm" }),
    __metadata("design:type", Object)
], FlexGrid.prototype, "gapSm", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: "sm-breakpoint" }),
    __metadata("design:type", String)
], FlexGrid.prototype, "smBp", void 0);
FlexGrid = __decorate([
    customElement("flex-grid")
], FlexGrid);
export { FlexGrid };
//# sourceMappingURL=grid.js.map