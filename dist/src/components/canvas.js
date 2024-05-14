var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FlexCanvas_1;
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let FlexCanvas = FlexCanvas_1 = class FlexCanvas extends LitElement {
    constructor() {
        super(...arguments);
        this.crop = null;
        this.flex = null;
        this.width = null;
        this.mg = null;
        this.pd = null;
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.pd) {
            styleEl.style.setProperty("--f-cs-pd", this.pd);
        }
        else {
            styleEl.style.setProperty("--f-cs-pd", FlexCanvas_1.defaultProps.padding);
        }
        if (this.width) {
            styleEl.style.setProperty("--f-cs-mw", this.width);
        }
        else {
            styleEl.style.setProperty("--f-cs-mw", FlexCanvas_1.defaultProps.maxWidth);
        }
        if (this.mg) {
            styleEl.style.setProperty("--f-cs-mg", this.mg);
        }
        else {
            styleEl.style.setProperty("--f-cs-mg", FlexCanvas_1.defaultProps.margin);
        }
        return html `<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
FlexCanvas.defaultProps = {
    maxWidth: "1400px",
    display: "block",
    margin: "0 auto",
    padding: "0",
};
FlexCanvas.styles = css `
    :host {
      box-sizing: border-box;
      display: block;
      margin: var(--f-cs-mg);
      padding: var(--f-cs-pd);
      max-width: var(--f-cs-mw);
    }
    :host([flex]) {
      display: flex;
    }
    :host([crop]) {
      overflow: hidden;
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCanvas.prototype, "crop", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCanvas.prototype, "flex", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCanvas.prototype, "width", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCanvas.prototype, "mg", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCanvas.prototype, "pd", void 0);
FlexCanvas = FlexCanvas_1 = __decorate([
    customElement("flex-canvas")
], FlexCanvas);
export { FlexCanvas };
//# sourceMappingURL=canvas.js.map