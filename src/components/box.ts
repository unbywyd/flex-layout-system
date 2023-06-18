import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Base } from "./base";

@customElement("flex-box")
export class FlexBox extends Base {
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
  static styles = css`
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
    :host([jc="flex-start"]) {
      justify-content: flex-start;
    }
    :host([jc="flex-end"]) {
      justify-content: flex-end;
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
      display: var(--f-b-db, ${unsafeCSS(FlexBox.defaultProps.display)});
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

    :host ::slotted(*) {
      --f-b-dir: ${unsafeCSS(
        FlexBox.defaultProps.reverse
          ? FlexBox.defaultProps.mode + "-reverse"
          : FlexBox.defaultProps.mode
      )};
      --f-b-db: ${unsafeCSS(FlexBox.defaultProps.display)};
      --f-b-jc: ${unsafeCSS(FlexBox.defaultProps.justifyContent)};
      --f-b-ai: ${unsafeCSS(FlexBox.defaultProps.alignItems)};
      --f-b-ac: ${unsafeCSS(FlexBox.defaultProps.alignContent)};
      --f-b-gap: ${unsafeCSS(FlexBox.defaultProps.gap)};
    }

    :host([column][stretch]) ::slotted(*) {
      width: 100%;
    }

    :host(:not([column])) ::slotted(f-divider:not([h]):not([v])) {
      min-width: var(--f-vd-w, var(--f-divider-size));
      width: var(--f-vd-w, var(--f-divider-size));
      height: var(--f-vd-ops-size, auto);
      margin: 0 var(--f-divider-m, 0);
    }

    :host([column]) ::slotted(f-divider:not([h]):not([v])) {
      min-height: var(--f-divider-h, var(--f-divider-size));
      height: var(--f-divider-h, var(--f-divider-size));
      margin: var(--f-divider-m, 0) 0;
      width: var(--f-vd-ops-size, auto);
      max-width: var(--f-vd-ops-size, 100%);
    }

    :host([column]) ::slotted(f-divider[stretch]:not([h]):not([v])) {
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

  @property({ type: Boolean, reflect: true })
  row: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  column: boolean | null = null;

  @property({ type: String, reflect: true })
  gap: string | null = null;

  render() {
    if (this.gap) {
      this.style.setProperty("--f-b-gap", this.gap);
    }
    if (this.row && this.column) {
      throw new Error("flex-box cannot be both row and column");
    }
    return html`<slot></slot>`;
  }
}
