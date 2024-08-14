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
import { generateRootMediaRules, setVars } from "../utils/media";
let FlexGrid = class FlexGrid extends LitElement {
    constructor() {
        super(...arguments);
        this.gap = null;
        this.d = null;
    }
    render() {
        const styleEl = document.createElement("span");
        setVars("f-g-gap", this.gap, "0", styleEl, false);
        setVars("display", this.d, "block", styleEl, false);
        return html `<style>:host {${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
FlexGrid.styles = css `
    :host {
      box-sizing: border-box;
      padding: var(--f-g-gap, 0);
    }
    :host([centered]) {
        margin: 0 auto;
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
        attr: 'gap',
        varName: 'f-g-gap'
    }, {
        attr: 'd',
        cssProp: 'display',
    }]))}  
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexGrid.prototype, "crop", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexGrid.prototype, "compact", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexGrid.prototype, "gap", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexGrid.prototype, "d", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexGrid.prototype, "centered", void 0);
FlexGrid = __decorate([
    customElement("flex-grid")
], FlexGrid);
export { FlexGrid };
//# sourceMappingURL=grid.js.map