import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Base } from "./base";

@customElement("flex-cell")
export class FlexCell extends Base {
  static defaultProps: {
    display: string;
  } = {
    display: "block",
  };
  static styles = css`
    :host {
      box-sizing: border-box;
      display: var(--f-c-db, ${unsafeCSS(FlexCell.defaultProps.display)});
      padding: var(--f-g-pd, 0);
      flex-basis: var(--f-c-b, auto);
      max-width: var(--f-c-b, none);
      order: var(--f-c-o, 0);
      flex-grow: var(--f-c-g, 0);
      flex-shrink: var(--f-c-sh, 1);
    }
    ::slotted(*) {
      --f-g-pd: 0;
      --f-c-db: ${unsafeCSS(FlexCell.defaultProps.display)};
      --f-c-b: auto;
      --f-c-o: 0;
      --f-c-g: 0;
      --f-c-sh: 1;
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
    :host([order="0"]) {
      order: 0;
    }
    :host([order="1"]) {
      order: 1;
    }
    :host([order="2"]) {
      order: 2;
    }
    :host([order="3"]) {
      order: 3;
    }
    :host([order="4"]) {
      order: 4;
    }
    :host([order="5"]) {
      order: 5;
    }
    :host([order="6"]) {
      order: 6;
    }
    :host([order="7"]) {
      order: 7;
    }
    :host([order="8"]) {
      order: 8;
    }
    :host([order="9"]) {
      order: 9;
    }
    :host([order="10"]) {
      order: 10;
    }
    :host([grow="0"]) {
      flex-grow: 0;
    }
    :host([grow="1"]) {
      flex-grow: 1;
    }
    :host([grow="2"]) {
      flex-grow: 2;
    }
    :host([grow="3"]) {
      flex-grow: 3;
    }
    :host([grow="4"]) {
      flex-grow: 4;
    }
    :host([grow="5"]) {
      flex-grow: 5;
    }
    :host([grow="6"]) {
      flex-grow: 6;
    }
    :host([grow="7"]) {
      flex-grow: 7;
    }
    :host([grow="8"]) {
      flex-grow: 8;
    }
    :host([grow="9"]) {
      flex-grow: 9;
    }
    :host([grow="10"]) {
      flex-grow: 10;
    }
    :host([shrink="0"]) {
      flex-shrink: 0;
    }
    :host([shrink="1"]) {
      flex-shrink: 1;
    }
    :host([shrink="2"]) {
      flex-shrink: 2;
    }
    :host([shrink="3"]) {
      flex-shrink: 3;
    }
    :host([shrink="4"]) {
      flex-shrink: 4;
    }
    :host([shrink="5"]) {
      flex-shrink: 5;
    }
    :host([shrink="6"]) {
      flex-shrink: 6;
    }
    :host([shrink="7"]) {
      flex-shrink: 7;
    }
    :host([shrink="8"]) {
      flex-shrink: 8;
    }
    :host([shrink="9"]) {
      flex-shrink: 9;
    }
    :host([shrink="10"]) {
      flex-shrink: 10;
    }
  `;

  @property({ type: Number, reflect: true })
  order: number | null = null;

  @property({ type: Number, reflect: true })
  grow: number | null = null;

  @property({ type: Number, reflect: true })
  shrink: number | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  render() {
    if (this.width) {
      this.style.setProperty("--f-c-b", this.width);
    }
    if ((this.order && this.order < 0) || this.order > 10) {
      this.style.setProperty("--f-c-o", this.order.toString());
    }
    if ((this.grow && this.grow > 10) || this.grow < 0) {
      this.style.setProperty("--f-c-g", this.grow.toString());
    }
    if ((this.shrink && this.shrink > 10) || this.shrink < 0) {
      this.style.setProperty("--f-c-sh", this.shrink.toString());
    }
    return html`<slot></slot>`;
  }
}
