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
import { BreakpointSize } from "../config";
import { generateRootMediaRules } from "../utils/media";
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
        this.smBp = BreakpointSize.sm;
        this.gapSm = null;
        this.columnSm = null;
        this.rowSm = null;
        this.jcSm = null;
        this.aiSm = null;
        this.acSm = null;
        this.wrapSm = null;
        this.nowrapSm = null;
        this.reverseSm = null;
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
        if (this.gapSm) {
            styleEl.style.setProperty("--f-b-gap-sm", this.gapSm);
        }
        else {
            styleEl.style.setProperty("--f-b-gap-sm", FlexBox_1.defaultProps.gap);
        }
        if (this.jcSm) {
            styleEl.style.setProperty("--f-b-jc-sm", this.jcSm);
        }
        else {
            styleEl.style.setProperty("--f-b-jc-sm", FlexBox_1.defaultProps.justifyContent);
        }
        if (this.aiSm) {
            styleEl.style.setProperty("--f-b-ai-sm", this.aiSm);
        }
        else {
            styleEl.style.setProperty("--f-b-ai-sm", FlexBox_1.defaultProps.alignItems);
        }
        if (this.acSm) {
            styleEl.style.setProperty("--f-b-ac-sm", this.acSm);
        }
        else {
            styleEl.style.setProperty("--f-b-ac-sm", FlexBox_1.defaultProps.alignContent);
        }
        if (this.row && this.column) {
            throw new Error("flex-box cannot be both row and column");
        }
        return html `<style>:host{${styleEl.style.cssText}}</style><slot></slot>`;
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

    :host {
      box-sizing: border-box;
      --f-b-display: ${unsafeCSS(FlexBox_1.defaultProps.display)};
      display: var(--f-b-display);

      --f-b-wrap: wrap;
      flex-wrap: var(--f-b-wrap);     

      --f-b-dir: ${unsafeCSS(FlexBox_1.defaultProps.reverse ? FlexBox_1.defaultProps.mode + "-reverse" : FlexBox_1.defaultProps.mode)};
      flex-direction: var(--f-b-dir);
      gap: var(--f-b-gap, ${unsafeCSS(FlexBox_1.defaultProps.gap)});

      --f-b-jc: ${unsafeCSS(FlexBox_1.defaultProps.justifyContent)};
      justify-content: var(--f-b-jc);

      --f-b-ai: ${unsafeCSS(FlexBox_1.defaultProps.alignItems)};      
      align-items: var(--f-b-ai);

      --f-b-ac: ${unsafeCSS(FlexBox_1.defaultProps.alignContent)};
      align-content: var(--f-b-ac);
    }
    :host([inline]) {
      --f-b-display: inline-flex;
    }
  
    :host([center]) {
      --f-b-ai: center;
      --f-b-jc: center;
    }
    :host([middle]) {
      --f-b-ai: center;
    }
    :host([spread]) {
      --f-b-jc: space-between;
    }
    :host([stretch]) {
      --f-b-ai: stretch;
    }
    :host([start]) {
      --f-b-jc: flex-start;
      --f-b-ai: flex-start;
    }
    :host([end]) {
      --f-b-jc: flex-end;
      --f-b-ai: flex-end;
    }


    :host([jc="center"]) {
      --f-b-jc: center;
    }
    :host([jc="space-between"]) {
      --f-b-jc: space-between;
    }
    :host([jc="space-around"]) {
      --f-b-jc: space-around;
    }
    :host([jc="space-evenly"]) {
      --f-b-jc: space-evenly;
    }
    :host([jc="start"]) {
      --f-b-jc: flex-start;
    }
    :host([jc="end"]) {
      --f-b-jc: flex-end;
    }

    :host([ai="flex-start"]) {
      --f-b-ai: flex-start;
    }
    :host([ai="flex-end"]) {
      --f-b-ai: flex-end;
    }
    :host([ai="center"]) {
      --f-b-ai: center;
    }
    :host([ai="baseline"]) {
      --f-b-ai: baseline;
    }
    :host([ai="stretch"]) {
      --f-b-ai: stretch;
    }

    :host([ac="start"]) {
      --f-b-ac: flex-start;
    }
    :host([ac="end"]) {
      --f-b-ac: flex-end;
    }
    :host([ac="center"]) {
      --f-b-ac: center;
    }
    :host([ac="space-between"]) {
      --f-b-ac: space-between;
    }
    :host([ac="space-around"]) {
      --f-b-ac: space-around;
    }
    :host([ac="space-evenly"]) {
      --f-b-ac: space-evenly;
    }
    :host([ac="stretch"]) {
      --f-b-ac: stretch;
    }

    :host([nowrap]) {
      --f-b-wrap: nowrap;
    }
    :host([wrap]) {
      --f-b-wrap: wrap;
    }

    :host([row]) {
      --f-b-dir: row;
    }
    :host([column]) {
      --f-b-dir: column;
    }
    :host([reverse][row]), :host([reverse]:not([column])) {
      --f-b-dir: row-reverse;
    }
    :host([reverse][column]) {
      --f-b-dir: column-reverse;
    }

    :host([gap]) ::slotted(*) {
      --f-g-pd: 0;
      --f-g-gap-sm: 0;
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
    ${unsafeCSS(generateRootMediaRules([{
        prop: "column",
        css: "--f-b-dir: column;"
    }, {
        prop: "row",
        css: "--f-b-dir: row;"
    }, {
        prop: "wrap",
        css: "--f-b-wrap: wrap;"
    }, {
        prop: "nowrap",
        css: "--f-b-wrap: nowrap;"
    }, {
        prop: 'gap',
        css: `--f-b-gap: var(--f-b-gap-sm);`
    }, {
        prop: 'jc',
        css: `--f-b-jc: var(--f-b-jc-sm);`
    },
    {
        prop: 'ai',
        css: `--f-b-ai: var(--f-b-ai-sm);`
    },
    {
        prop: 'ac',
        css: `--f-b-ac: var(--f-b-ac-sm);`
    },
    (size) => {
        return `:host([sm-breakpoint='${size}'][reverse-sm][column]), :host([sm-breakpoint='${size}'][reverse-sm][column-sm]) {--f-b-dir: column-reverse;} :host([sm-breakpoint='${size}'][reverse-sm][row]), :host([sm-breakpoint='${size}'][reverse-sm]:not([column]):not([column-sm])) {--f-b-dir: row-reverse;}`;
    }
]))}
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
__decorate([
    property({ type: String, reflect: true, attribute: "sm-breakpoint" }),
    __metadata("design:type", String)
], FlexBox.prototype, "smBp", void 0);
__decorate([
    property({ type: String, reflect: false, attribute: "gap-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "gapSm", void 0);
__decorate([
    property({ type: Boolean, reflect: false, attribute: "column-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "columnSm", void 0);
__decorate([
    property({ type: Boolean, reflect: false, attribute: "row-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "rowSm", void 0);
__decorate([
    property({ type: String, reflect: false, attribute: "jc-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "jcSm", void 0);
__decorate([
    property({ type: String, reflect: false, attribute: "ai-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "aiSm", void 0);
__decorate([
    property({ type: String, reflect: false, attribute: "ac-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "acSm", void 0);
__decorate([
    property({ type: Boolean, reflect: false, attribute: "wrap-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "wrapSm", void 0);
__decorate([
    property({ type: Boolean, reflect: false, attribute: "nowrap-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "nowrapSm", void 0);
__decorate([
    property({ type: Boolean, reflect: false, attribute: "reverse-sm" }),
    __metadata("design:type", Object)
], FlexBox.prototype, "reverseSm", void 0);
FlexBox = FlexBox_1 = __decorate([
    customElement("flex-box")
], FlexBox);
export { FlexBox };
//# sourceMappingURL=box.js.map