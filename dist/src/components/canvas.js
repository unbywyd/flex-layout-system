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
import { LitElement, html, css, unsafeCSS } from "lit";
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
        if (this.pd) {
            this.style.setProperty("--f-cs-pd", this.pd);
        }
        else {
            this.style.removeProperty("--f-cs-pd");
        }
        if (this.width) {
            this.style.setProperty("--f-cs-mw", this.width);
        }
        else {
            this.style.removeProperty("--f-cs-mw");
        }
        if (this.mg) {
            this.style.setProperty("--f-cs-mg", this.mg);
        }
        else {
            this.style.removeProperty("--f-cs-mg");
        }
        return html `<slot></slot>`;
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
      display: var(--f-cs-db, ${unsafeCSS(FlexCanvas_1.defaultProps.display)});
      margin: var(--f-cs-mg, ${unsafeCSS(FlexCanvas_1.defaultProps.margin)});
      max-width: var(--f-cs-mw, ${unsafeCSS(FlexCanvas_1.defaultProps.maxWidth)});
      padding: var(--f-cs-pd, ${unsafeCSS(FlexCanvas_1.defaultProps.padding)});
    }
    :host([flex]) {
      display: flex;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host ::slotted(*) {
      --f-cs-db: ${unsafeCSS(FlexCanvas_1.defaultProps.display)};
      --f-cs-mg: ${unsafeCSS(FlexCanvas_1.defaultProps.margin)};
      --f-cs-mw: ${unsafeCSS(FlexCanvas_1.defaultProps.maxWidth)};
      --f-cs-pd: ${unsafeCSS(FlexCanvas_1.defaultProps.padding)};
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