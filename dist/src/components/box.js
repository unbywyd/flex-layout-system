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
export var EnumAlignContent;
(function (EnumAlignContent) {
    EnumAlignContent["Start"] = "flex-start";
    EnumAlignContent["End"] = "flex-end";
    EnumAlignContent["Center"] = "center";
    EnumAlignContent["SpaceBetween"] = "space-between";
    EnumAlignContent["SpaceAround"] = "space-around";
    EnumAlignContent["SpaceEvenly"] = "space-evenly";
    EnumAlignContent["Stretch"] = "stretch";
})(EnumAlignContent || (EnumAlignContent = {}));
export var EnumAlignItems;
(function (EnumAlignItems) {
    EnumAlignItems["Start"] = "flex-start";
    EnumAlignItems["End"] = "flex-end";
    EnumAlignItems["Center"] = "center";
    EnumAlignItems["Baseline"] = "baseline";
    EnumAlignItems["Stretch"] = "stretch";
})(EnumAlignItems || (EnumAlignItems = {}));
export var EnumJustifyContent;
(function (EnumJustifyContent) {
    EnumJustifyContent["Start"] = "flex-start";
    EnumJustifyContent["End"] = "flex-end";
    EnumJustifyContent["Center"] = "center";
    EnumJustifyContent["SpaceBetween"] = "space-between";
    EnumJustifyContent["SpaceAround"] = "space-around";
    EnumJustifyContent["SpaceEvenly"] = "space-evenly";
})(EnumJustifyContent || (EnumJustifyContent = {}));
let FlexBox = FlexBox_1 = class FlexBox extends LitElement {
    constructor() {
        super(...arguments);
        this.jc = null;
        this.ai = null;
        this.ac = null;
        this.start = null;
        this.end = null;
        this.spread = null;
        this.middle = null;
        this.center = null;
        this.inline = null;
        this.wrap = null;
        this.nowrap = null;
        this.reverse = null;
        this.minh = null;
        this.fullh = null;
        this.fullw = null;
        this.fullscreen = null;
        this.stretch = null;
        this.snug = null;
        this.fill = null;
        this.fit = null;
        this.row = null;
        this.column = null;
        this.gap = null;
    }
    get mode() {
        if (!this.row && !this.column) {
            return FlexBox_1.defaultProps.mode;
        }
        return this.row ? "row" : "column";
    }
    render() {
        const styleEl = document.createElement("span");
        if (this.gap) {
            styleEl.style.setProperty("--f-b-gap", this.gap);
        }
        else {
            styleEl.style.setProperty("--f-b-gap", FlexBox_1.defaultProps.gap);
        }
        if (this.row && this.column) {
            throw new Error("flex-box cannot be both row and column");
        }
        return html `<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
    }
};
FlexBox.defaultProps = {
    reverse: false,
    display: "flex",
    mode: "row",
    gap: "0",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
};
FlexBox.styles = css `
    :host([nowrap]) {
      flex-wrap: nowrap;
    }
    :host([wrap]) {
      flex-wrap: wrap;
    }
    :host([row]) {
      flex-direction: row;
    }
    :host([column]) {
      flex-direction: column;
    }
    :host([reverse][row]) {
      flex-direction: row-reverse;
    }
    :host([reverse][column]) {
      flex-direction: column-reverse;
    }
    :host([inline]) {
      display: inline-flex;
    }
    :host([center]) {
      align-items: center;
      justify-content: center;
    }
    :host([middle]) {
      align-items: center;
    }
    :host([spread]) {
      justify-content: space-between;
    }
    :host([stretch]) {
      align-items: stretch;
    }
    :host([start]) {
      justify-content: flex-start;
      align-items: flex-start;
    }
    :host([end]) {
      justify-content: flex-end;
      align-items: flex-end;
    }
    :host([ai="flex-start"]) {
      align-items: flex-start;
    }
    :host([ai="flex-end"]) {
      align-items: flex-end;
    }
    :host([ai="center"]) {
      align-items: center;
    }
    :host([ai="baseline"]) {
      align-items: baseline;
    }
    :host([ai="stretch"]) {
      align-items: stretch;
    }
    :host([jc="center"]) {
      justify-content: center;
    }
    :host([jc="space-between"]) {
      justify-content: space-between;
    }
    :host([jc="space-around"]) {
      justify-content: space-around;
    }
    :host([jc="space-evenly"]) {
      justify-content: space-evenly;
    }
    :host([jc="start"]) {
      justify-content: flex-start;
    }
    :host([jc="end"]) {
      justify-content: flex-end;
    }
    :host([ac="start"]) {
      align-content: flex-start;
    }
    :host([ac="end"]) {
      align-content: flex-end;
    }
    :host([ac="center"]) {
      align-content: center;
    }
    :host([ac="space-between"]) {
      align-content: space-between;
    }
    :host([ac="space-around"]) {
      align-content: space-around;
    }
    :host([ac="space-evenly"]) {
      align-content: space-evenly;
    }
    :host([ac="stretch"]) {
      align-content: stretch;
    }
    :host {
      box-sizing: border-box;
      display: flex;
      flex-direction: var(
        --f-b-dir,
        ${unsafeCSS(FlexBox_1.defaultProps.reverse
    ? FlexBox_1.defaultProps.mode + "-reverse"
    : FlexBox_1.defaultProps.mode)}
      );
      gap: var(--f-b-gap, ${unsafeCSS(FlexBox_1.defaultProps.gap)});
      justify-content: var(
        --f-b-jc,
        ${unsafeCSS(FlexBox_1.defaultProps.justifyContent)}
      );
      align-items: var(--f-b-ai, ${unsafeCSS(FlexBox_1.defaultProps.alignItems)});
      align-content: var(
        --f-b-ac,
        ${unsafeCSS(FlexBox_1.defaultProps.alignContent)}
      );
    }

    :host([gap]) ::slotted(*) {
      --f-g-pd: 0;
    }

    :host([column][stretch]) ::slotted(*) {
      width: 100%;
    }

    :host([fullscreen]) ::slotted(*) {
      min-height: 100vh;
    }

    :host([minh]) ::slotted(*) {
      min-height: 100%;
    }

    :host([fullh]) ::slotted(*) {
      height: 100%;
    }

    :host([fullw]) ::slotted(*) {
      width: 100%;
    }

    :host([fill]) ::slotted(*:not([priority])) {
      flex: 1 1 auto;
    }
    :host([fit]) ::slotted(*:not([priority])) {
      flex: 1;
    }
    :host([snug]) ::slotted(*:not([priority])) {
      flex: 0;
    }
  `;
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
    __metadata("design:type", Object)
], FlexBox.prototype, "start", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "end", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "spread", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "middle", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "center", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "inline", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "wrap", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "nowrap", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "reverse", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "minh", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "fullh", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "fullw", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "fullscreen", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "stretch", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "snug", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "fill", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "fit", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "row", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "column", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexBox.prototype, "gap", void 0);
FlexBox = FlexBox_1 = __decorate([
    customElement("flex-box")
], FlexBox);
export { FlexBox };
//# sourceMappingURL=box.js.map