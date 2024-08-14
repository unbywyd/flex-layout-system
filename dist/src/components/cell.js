var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FlexCell_1;
import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVars } from "../utils/media";
let FlexCell = FlexCell_1 = class FlexCell extends LitElement {
    constructor() {
        super(...arguments);
        this.d = FlexCell_1.defaultProps.display;
        this.as = null;
        this.order = null;
        this.g = null;
        this.sh = null;
        this.w = null;
        this.h = null;
        this.bs = null;
        this.pd = null;
    }
    render() {
        const styleEl = document.createElement("span");
        setVars("display", this.d, FlexCell_1.defaultProps.display, styleEl, false);
        setVars("align-self", this.as, FlexCell_1.defaultProps.align, styleEl);
        setVars("order", this.order, FlexCell_1.defaultProps.order, styleEl);
        setVars("flex-grow", this.g, FlexCell_1.defaultProps.grow, styleEl);
        setVars("flex-shrink", this.sh, FlexCell_1.defaultProps.shrink, styleEl);
        setVars("width", this.w, FlexCell_1.defaultProps.width, styleEl);
        setVars("height", this.h, FlexCell_1.defaultProps.height, styleEl);
        setVars("flex-basis", this.bs, FlexCell_1.defaultProps.basis, styleEl);
        setVars("padding", this.pd, "0", styleEl, false);
        return html `<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
FlexCell.defaultProps = {
    basis: "auto",
    display: "block",
    align: "stretch",
    order: 0,
    grow: 0,
    shrink: 0,
    height: "auto",
    width: "auto",
};
FlexCell.styles = css `
    :host {
      box-sizing: border-box;
      padding: var(--f-g-pd, 0);
    }      
    :host([crop]) {
      overflow: hidden;
    }
    :host([fill]) {
      flex: 1 1 auto;
    }
    :host([fit]) {
      flex: 1;
    }
    :host([snug]) {
      flex: 0;
    }
    :host([auto]) {
      flex: 0 1 auto;
    }
    :host([stretch]) {
      flex-grow: 1;
    }
    :host([center]) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ${unsafeCSS(generateRootMediaRules([{
        attr: 'd',
        cssProp: 'display',
    }, {
        attr: 'as',
        cssProp: 'align-self',
    }, {
        attr: 'pd',
        cssProp: 'padding',
    }, {
        attr: 'order',
        cssProp: 'order',
    }, {
        attr: 'g',
        cssProp: 'flex-grow',
    }, {
        attr: 'sh',
        cssProp: 'flex-shrink',
    }, {
        attr: 'w',
        cssProp: 'width',
    }, {
        attr: 'h',
        cssProp: 'height',
    }, {
        attr: 'bs',
        cssProp: 'flex-basis',
    }]))}
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexCell.prototype, "center", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexCell.prototype, "fill", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexCell.prototype, "fit", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexCell.prototype, "snug", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexCell.prototype, "auto", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexCell.prototype, "stretch", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FlexCell.prototype, "d", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "as", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "order", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "g", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "sh", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "w", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "h", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "bs", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "pd", void 0);
FlexCell = FlexCell_1 = __decorate([
    customElement("flex-cell")
], FlexCell);
export { FlexCell };
//# sourceMappingURL=cell.js.map