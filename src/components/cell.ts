import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export enum EnumAlignSelf {
  Start = "flex-start",
  End = "flex-end",
  Center = "center",
  Baseline = "baseline",
  Stretch = "stretch",
  Auto = "auto",
  Normal = "normal",
  Unset = "unset",
}

@customElement("flex-cell")
export class FlexCell extends LitElement {
  static defaultProps: {
    display: string;
  } = {
      display: "block",
    };
  static override styles = css`
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
    :host([crop]) {
      overflow: hidden;
    }
    :host([stretchild]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
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
    :host([center]) {
      justify-content: center;
      align-items: center;
    }
  `;

  @property({ type: Boolean, reflect: true })
  center: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  scrollable: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  flex: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  stretchild: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  iflex: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  iblock: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fill: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fit: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  snug: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  auto: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  stretch: boolean | null = null;

  @property({ type: String, reflect: true })
  as: EnumAlignSelf | null = null;

  @property({ type: Number, reflect: true })
  order: number | null = null;

  @property({ type: Number, reflect: true })
  grow: number | null = null;

  @property({ type: Number, reflect: true })
  shrink: number | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  basis: string | null = null;

  override render() {
    const styleEl = document.createElement("span");

    if (this.width) {
      styleEl.style.setProperty("--f-c-b", this.width);
      styleEl.style.setProperty("--f-c-mw", this.width);
      styleEl.style.setProperty("--f-c-minw", this.width);
    } else {
      styleEl.style.setProperty("--f-c-b", 'auto');
      styleEl.style.setProperty("--f-c-mw", 'none');
      styleEl.style.setProperty("--f-c-minw", '0');
    }
    if (this.basis) {
      styleEl.style.setProperty("--f-c-b", this.basis);
    } else if (!this.width) {
      styleEl.style.setProperty("--f-c-b", 'auto');
    }
    if (this.order !== null) {
      styleEl.style.setProperty("--f-c-o", this.order.toString());
    } else {
      styleEl.style.setProperty("--f-c-o", '0');
    }
    if (this.grow !== null) {
      styleEl.style.setProperty("--f-c-g", this.grow.toString());
    } else {
      styleEl.style.setProperty("--f-c-g", '0');
    }
    if (this.shrink !== null) {
      styleEl.style.setProperty("--f-c-sh", this.shrink.toString());
    } else {
      styleEl.style.setProperty("--f-c-sh", '1');
    }
    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
