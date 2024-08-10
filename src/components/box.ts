import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BreakpointSize } from "../config";
import { generateRootMediaRules } from "../utils/media";

export enum EnumAlignContent {
  Start = "flex-start",
  End = "flex-end",
  Center = "center",
  SpaceBetween = "space-between",
  SpaceAround = "space-around",
  SpaceEvenly = "space-evenly",
  Stretch = "stretch",
}

export enum EnumAlignItems {
  Start = "flex-start",
  End = "flex-end",
  Center = "center",
  Baseline = "baseline",
  Stretch = "stretch",
}

export enum EnumJustifyContent {
  Start = "flex-start",
  End = "flex-end",
  Center = "center",
  SpaceBetween = "space-between",
  SpaceAround = "space-around",
  SpaceEvenly = "space-evenly",
}

@customElement("flex-box")
export class FlexBox extends LitElement {
  static defaultProps: {
    reverse: boolean;
    display: "flex" | "inline-flex";
    mode: "row" | "column";
    justifyContent: string;
    alignItems: string;
    alignContent: string;
    gap: string;
  } = {
      reverse: false,
      display: "flex",
      mode: "row",
      gap: "0",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
    };
  get mode() {
    if (!this.row && !this.column) {
      return FlexBox.defaultProps.mode;
    }
    return this.row ? "row" : "column";
  }
  static override styles = css`   

    :host {
      box-sizing: border-box;
      --f-b-display: ${unsafeCSS(FlexBox.defaultProps.display)};
      display: var(--f-b-display);

      --f-b-wrap: wrap;
      flex-wrap: var(--f-b-wrap);     

      --f-b-dir: ${unsafeCSS(FlexBox.defaultProps.reverse ? FlexBox.defaultProps.mode + "-reverse" : FlexBox.defaultProps.mode)};
      flex-direction: var(--f-b-dir);
      gap: var(--f-b-gap, ${unsafeCSS(FlexBox.defaultProps.gap)});

      --f-b-jc: ${unsafeCSS(FlexBox.defaultProps.justifyContent)};
      justify-content: var(--f-b-jc);

      --f-b-ai: ${unsafeCSS(FlexBox.defaultProps.alignItems)};      
      align-items: var(--f-b-ai);

      --f-b-ac: ${unsafeCSS(FlexBox.defaultProps.alignContent)};
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
  (size: BreakpointSize) => {
    return `:host([sm-breakpoint='${size}'][reverse-sm][column]), :host([sm-breakpoint='${size}'][reverse-sm][column-sm]) {--f-b-dir: column-reverse;} :host([sm-breakpoint='${size}'][reverse-sm][row]), :host([sm-breakpoint='${size}'][reverse-sm]:not([column]):not([column-sm])) {--f-b-dir: row-reverse;}`
  }
  ]))}
  `;

  @property({ type: String, reflect: true })
  jc: EnumJustifyContent | null = null;

  @property({ type: String, reflect: true })
  ai: EnumAlignItems | null = null;

  @property({ type: String, reflect: true })
  ac: EnumAlignContent | null = null;

  @property({ type: Boolean, reflect: true })
  start: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  end: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  spread: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  middle: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  center: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  inline: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  wrap: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  nowrap: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  reverse: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  minh: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fullh: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fullw: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fullscreen: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  stretch: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  snug: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fill: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fit: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  row: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  column: boolean | null = null;

  @property({ type: String, reflect: true })
  gap: string | null = null;

  @property({ type: String, reflect: true, attribute: "sm-breakpoint" })
  smBp: BreakpointSize = BreakpointSize.sm;

  @property({ type: String, reflect: false, attribute: "gap-sm" })
  gapSm: string | null = null;

  @property({ type: Boolean, reflect: false, attribute: "column-sm" })
  columnSm: boolean | null = null;

  @property({ type: Boolean, reflect: false, attribute: "row-sm" })
  rowSm: boolean | null = null;

  @property({ type: String, reflect: false, attribute: "jc-sm" })
  jcSm: EnumJustifyContent | null = null;

  @property({ type: String, reflect: false, attribute: "ai-sm" })
  aiSm: EnumAlignItems | null = null;

  @property({ type: String, reflect: false, attribute: "ac-sm" })
  acSm: EnumAlignContent | null = null;

  @property({ type: Boolean, reflect: false, attribute: "wrap-sm" })
  wrapSm: boolean | null = null;

  @property({ type: Boolean, reflect: false, attribute: "nowrap-sm" })
  nowrapSm: boolean | null = null;

  @property({ type: Boolean, reflect: false, attribute: "reverse-sm" })
  reverseSm: boolean | null = null;


  override render() {
    const styleEl = document.createElement("span");

    if (this.gap) {
      styleEl.style.setProperty("--f-b-gap", this.gap);
    } else {
      styleEl.style.setProperty("--f-b-gap", FlexBox.defaultProps.gap);
    }

    if (this.gapSm) {
      styleEl.style.setProperty("--f-b-gap-sm", this.gapSm);
    } else {
      styleEl.style.setProperty("--f-b-gap-sm", FlexBox.defaultProps.gap);
    }

    if (this.jcSm) {
      styleEl.style.setProperty("--f-b-jc-sm", this.jcSm);
    } else {
      styleEl.style.setProperty("--f-b-jc-sm", FlexBox.defaultProps.justifyContent);
    }

    if (this.aiSm) {
      styleEl.style.setProperty("--f-b-ai-sm", this.aiSm);
    } else {
      styleEl.style.setProperty("--f-b-ai-sm", FlexBox.defaultProps.alignItems);
    }

    if (this.acSm) {
      styleEl.style.setProperty("--f-b-ac-sm", this.acSm);
    } else {
      styleEl.style.setProperty("--f-b-ac-sm", FlexBox.defaultProps.alignContent);
    }

    if (this.row && this.column) {
      throw new Error("flex-box cannot be both row and column");
    }

    return html`<style>:host{${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
