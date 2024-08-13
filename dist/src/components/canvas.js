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
import { generateRootMediaRules, setVars } from "../utils/media";
let FlexCanvas = FlexCanvas_1 = class FlexCanvas extends LitElement {
    constructor() {
        super(...arguments);
        this.crop = null;
        this.width = null;
        this.display = FlexCanvas_1.defaultProps.display;
        this.mg = null;
        this.pd = null;
    }
    render() {
        const styleEl = document.createElement("span");
        setVars("display", this.display, FlexCanvas_1.defaultProps.display, styleEl, false);
        setVars("max-width", this.width, FlexCanvas_1.defaultProps.maxWidth, styleEl, false);
        setVars("padding", this.pd, FlexCanvas_1.defaultProps.padding, styleEl, false);
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
      margin: var(--f-cs-mg);
      width: 100%;
    }
    :host([crop]) {
      overflow: hidden;
    }
    ${unsafeCSS(generateRootMediaRules([{
        attr: 'width',
        cssProp: 'max-width',
    }, {
        attr: 'pd',
        cssProp: 'padding',
    }, {
        attr: 'display',
        cssProp: 'display',
    }]))}  
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCanvas.prototype, "crop", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCanvas.prototype, "width", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FlexCanvas.prototype, "display", void 0);
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