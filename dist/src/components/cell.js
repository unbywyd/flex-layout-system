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
export var EnumAlignSelf;
(function (EnumAlignSelf) {
    EnumAlignSelf["Start"] = "flex-start";
    EnumAlignSelf["End"] = "flex-end";
    EnumAlignSelf["Center"] = "center";
    EnumAlignSelf["Baseline"] = "baseline";
    EnumAlignSelf["Stretch"] = "stretch";
    EnumAlignSelf["Auto"] = "auto";
    EnumAlignSelf["Normal"] = "normal";
    EnumAlignSelf["Unset"] = "unset";
})(EnumAlignSelf || (EnumAlignSelf = {}));
let FlexCell = class FlexCell extends LitElement {
    constructor() {
        super(...arguments);
        this.scrollable = null;
        this.flex = null;
        this.iflex = null;
        this.iblock = null;
        this.fill = null;
        this.fit = null;
        this.snug = null;
        this.auto = null;
        this.stretch = null;
        this.as = null;
        this.order = null;
        this.grow = null;
        this.shrink = null;
        this.width = null;
        this.basis = null;
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.width) {
            styleEl.style.setProperty("--f-c-b", this.width);
            styleEl.style.setProperty("--f-c-mw", this.width);
            styleEl.style.setProperty("--f-c-minw", this.width);
        }
        else {
            styleEl.style.setProperty("--f-c-b", 'auto');
            styleEl.style.setProperty("--f-c-mw", 'none');
            styleEl.style.setProperty("--f-c-minw", '0');
        }
        if (this.basis) {
            styleEl.style.setProperty("--f-c-b", this.basis);
        }
        else if (!this.width) {
            styleEl.style.setProperty("--f-c-b", 'auto');
        }
        if (this.order !== null) {
            styleEl.style.setProperty("--f-c-o", this.order.toString());
        }
        else {
            styleEl.style.setProperty("--f-c-o", '0');
        }
        if (this.grow !== null) {
            styleEl.style.setProperty("--f-c-g", this.grow.toString());
        }
        else {
            styleEl.style.setProperty("--f-c-g", '0');
        }
        if (this.shrink !== null) {
            styleEl.style.setProperty("--f-c-sh", this.shrink.toString());
        }
        else {
            styleEl.style.setProperty("--f-c-sh", '1');
        }
        return html `<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
FlexCell.defaultProps = {
    display: "block",
};
FlexCell.styles = css `
    :host {
      box-sizing: border-box;
      display: var(--f-c-db);
      padding: var(--f-g-pd, 0);
      flex-basis: var(--f-c-b);
      max-width: var(--f-c-mw);
      min-width: var(--f-c-minw, 0);
      order: var(--f-c-o);
      flex-grow: var(--f-c-g);
      flex-shrink: var(--f-c-sh);
    }
    :host([as="center"]) {
      align-self: center;
    }
    :host([as="start"]) {
      align-self: flex-start;
    }
    :host([as="end"]) {
      align-self: flex-end;
    }
    :host([as="stretch"]) {
      align-self: stretch;
    }
    :host([as="baseline"]) {
      align-self: baseline;
    }
    :host([as="auto"]) {
      align-self: auto;
    }
    :host([as="normal"]) {
      align-self: normal;
    }
    :host([as="unset"]) {
      align-self: unset;
    }

    :host(.cell-1) {
      flex-basis: 8.3333333333%;
      max-width: 8.3333333333%;
    }
    :host(.cell-2) {
      flex-basis: 16.6666666667%;
      max-width: 16.6666666667%;
    }
    :host(.cell-3) {
      flex-basis: 25%;
      max-width: 25%;
    }
    :host(.cell-4) {
      flex-basis: 33.3333333333%;
      max-width: 33.3333333333%;
    }
    :host([scrollable]:not([flex])) {
      flex-grow: 1;
      overflow: auto;
    }
    :host([scrollable][flex]) {
      min-height: 0;
      flex-grow: 1;
    }
    :host([scrollable][flex]) ::slotted(*) {
      overflow: auto;
    }
    :host(.cell-5) {
      flex-basis: 41.6666666667%;
      max-width: 41.6666666667%;
    }
    :host(.cell-6) {
      flex-basis: 50%;
      max-width: 50%;
    }
    :host(.cell-7) {
      flex-basis: 58.3333333333%;
      max-width: 58.3333333333%;
    }
    :host(.cell-8) {
      flex-basis: 66.6666666667%;
      max-width: 66.6666666667%;
    }
    :host(.cell-9) {
      flex-basis: 75%;
      max-width: 75%;
    }
    :host(.cell-10) {
      flex-basis: 83.3333333333%;
      max-width: 83.3333333333%;
    }
    :host(.cell-11) {
      flex-basis: 91.6666666667%;
      max-width: 91.6666666667%;
    }
    :host(.cell-12) {
      flex-basis: 100%;
      max-width: 100%;
    }
    :host([flex]) {
      display: flex;
    }
    :host([iflex]) {
      display: inline-flex;
    }
    :host([iblock]) {
      display: inline-block;
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
  `;
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "scrollable", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "flex", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "iflex", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "iblock", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "fill", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "fit", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "snug", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "auto", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "stretch", void 0);
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
], FlexCell.prototype, "grow", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "shrink", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "width", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexCell.prototype, "basis", void 0);
FlexCell = __decorate([
    customElement("flex-cell")
], FlexCell);
export { FlexCell };
//# sourceMappingURL=cell.js.map