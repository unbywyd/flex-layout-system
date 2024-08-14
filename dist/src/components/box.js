var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FlexBox_1;
import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVars } from "../utils/media";
export var EnumBoxType;
(function (EnumBoxType) {
    EnumBoxType["row"] = "row";
    EnumBoxType["column"] = "column";
    EnumBoxType["rowReverse"] = "row-reverse";
    EnumBoxType["columnReverse"] = "column-reverse";
})(EnumBoxType || (EnumBoxType = {}));
export var EnumWrapType;
(function (EnumWrapType) {
    EnumWrapType["nowrap"] = "nowrap";
    EnumWrapType["wrap"] = "wrap";
})(EnumWrapType || (EnumWrapType = {}));
let FlexBox = FlexBox_1 = class FlexBox extends LitElement {
    constructor() {
        super(...arguments);
        this.jc = null;
        this.ai = null;
        this.ac = null;
        this.mh = null;
        this.mw = null;
        this.h = null;
        this.w = null;
        this.gap = null;
        this.dn = FlexBox_1.defaultProps.direction;
        this.d = FlexBox_1.defaultProps.display;
        this.wrap = FlexBox_1.defaultProps.wrap;
    }
    render() {
        const styleEl = document.createElement("span");
        setVars("display", this.d, FlexBox_1.defaultProps.display, styleEl, false);
        setVars("flex-direction", this.dn, FlexBox_1.defaultProps.direction, styleEl);
        setVars("flex-wrap", this.wrap, FlexBox_1.defaultProps.wrap, styleEl);
        setVars("justify-content", this.jc, FlexBox_1.defaultProps.justifyContent, styleEl);
        setVars("align-items", this.ai, FlexBox_1.defaultProps.alignItems, styleEl);
        setVars("align-content", this.ac, FlexBox_1.defaultProps.alignContent, styleEl);
        setVars("gap", this.gap, FlexBox_1.defaultProps.gap, styleEl);
        setVars("width", this.w, "auto", styleEl);
        setVars("height", this.h, "auto", styleEl);
        setVars("min-height", this.mh, 'auto', styleEl);
        setVars("min-width", this.mw, 'auto', styleEl);
        return html `<style>:host{${styleEl.style.cssText} } </style><slot></slot > `;
    }
};
FlexBox.defaultProps = {
    reverse: false,
    display: "flex",
    direction: EnumBoxType.row,
    gap: "0",
    wrap: EnumWrapType.nowrap,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
};
FlexBox.styles = css `
    :host {
      box-sizing: border-box;
    }
    :host([centered]) {
      margin: 0 auto;
    }  
    :host([wrap='']) {
      flex-wrap: wrap;
    }
    :host([column]) {
      flex-direction: column;
    }
    :host([center]) {
      align-items: center;
      justify-content: center;
    }
    :host([start]) {
      justify-content: flex-start;
      align-items: flex-start;
    }
    :host([end]) {
      justify-content: flex-end;
      align-items: flex-end;
    }
    :host([gap]) ::slotted(*) {
      --f-g-pd: 0 !important;
    }
    :host([wf]) ::slotted(*) {
      width: 100%;
    }
    :host([hf]) ::slotted(*) {
      height: 100%;
    }
    ${unsafeCSS(generateRootMediaRules([{
        attr: 'jc',
        cssProp: 'justify-content',
    }, {
        attr: 'gap',
        cssProp: 'gap',
    }, {
        attr: 'ai',
        cssProp: 'align-items',
    }, {
        attr: 'ac',
        cssProp: 'align-content',
    }, {
        attr: 'dn',
        cssProp: 'flex-direction',
    }, {
        attr: 'd',
        cssProp: 'display',
    }, {
        attr: 'wrap',
        cssProp: 'flex-wrap',
    }, {
        attr: 'w',
        cssProp: 'width',
    }, {
        attr: 'h',
        cssProp: 'height',
    }, {
        attr: 'mh',
        cssProp: 'min-height',
    }, {
        attr: 'mw',
        cssProp: 'min-width'
    }]))}
  `;
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], FlexBox.prototype, "column", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "jc", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "ai", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "ac", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexBox.prototype, "start", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexBox.prototype, "end", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexBox.prototype, "centered", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexBox.prototype, "center", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "mh", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "mw", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "h", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "w", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexBox.prototype, "wf", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], FlexBox.prototype, "hf", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "gap", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FlexBox.prototype, "dn", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FlexBox.prototype, "d", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FlexBox.prototype, "wrap", void 0);
FlexBox = FlexBox_1 = __decorate([
    customElement("flex-box")
], FlexBox);
export { FlexBox };
//# sourceMappingURL=box.js.map