import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

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
        ${unsafeCSS(
    FlexBox.defaultProps.reverse
      ? FlexBox.defaultProps.mode + "-reverse"
      : FlexBox.defaultProps.mode
  )}
      );
      gap: var(--f-b-gap, ${unsafeCSS(FlexBox.defaultProps.gap)});
      justify-content: var(
        --f-b-jc,
        ${unsafeCSS(FlexBox.defaultProps.justifyContent)}
      );
      align-items: var(--f-b-ai, ${unsafeCSS(FlexBox.defaultProps.alignItems)});
      align-content: var(
        --f-b-ac,
        ${unsafeCSS(FlexBox.defaultProps.alignContent)}
      );
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

  override render() {
    const styleEl = document.createElement("span");

    if (this.gap) {
      styleEl.style.setProperty("--f-b-gap", this.gap);
    } else {
      styleEl.style.setProperty("--f-b-gap", FlexBox.defaultProps.gap);
    }
    
    if (this.row && this.column) {
      throw new Error("flex-box cannot be both row and column");
    }
    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
