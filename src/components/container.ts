import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("flex-container")
export class FlexContainer extends LitElement {
  static defaultProps: {
    reverse: boolean;
    display: "flex" | "inline-flex";
    mode: "row" | "column";
    wrap: boolean;
    justifyContent: string;
    alignItems: string;
    alignContent: string;
    gap: string;
  } = {
    reverse: false,
    display: "flex",
    mode: "row",
    wrap: true,
    gap: "0",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  };
  get mode() {
    if (!this.row && !this.column) {
      return FlexContainer.defaultProps.mode;
    }
    return this.row ? "row" : "column";
  }
  static styles = css`
    :host([nowrap]) {
      flex-wrap: nowrap;
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
      display: var(
        --flex-container-display,
        ${unsafeCSS(FlexContainer.defaultProps.display)}
      );
      flex-direction: var(
        --flex-container-direction,
        ${unsafeCSS(
          FlexContainer.defaultProps.reverse
            ? FlexContainer.defaultProps.mode + "-reverse"
            : FlexContainer.defaultProps.mode
        )}
      );
      gap: var(
        --flex-container-gap,
        ${unsafeCSS(FlexContainer.defaultProps.gap)}
      );
      flex-wrap: var(
        --flex-container-wrap,
        ${unsafeCSS(FlexContainer.defaultProps.wrap ? "wrap" : "nowrap")}
      );
      justify-content: var(
        --flex-container-justify-content,
        ${unsafeCSS(FlexContainer.defaultProps.justifyContent)}
      );
      align-items: var(
        --flex-container-align-items,
        ${unsafeCSS(FlexContainer.defaultProps.alignItems)}
      );
      align-content: var(
        --flex-container-align-content,
        ${unsafeCSS(FlexContainer.defaultProps.alignContent)}
      );
    }

    :host ::slotted(*) {
      --flex-container-display: ${unsafeCSS(
        FlexContainer.defaultProps.display
      )};
      --flex-container-wrap: ${unsafeCSS(
        FlexContainer.defaultProps.wrap ? "wrap" : "nowrap"
      )};
      --flex-container-justify-content: ${unsafeCSS(
        FlexContainer.defaultProps.justifyContent
      )};
      --flex-container-align-items: ${unsafeCSS(
        FlexContainer.defaultProps.alignItems
      )};
      --flex-container-align-content: ${unsafeCSS(
        FlexContainer.defaultProps.alignContent
      )};
      --flex-container-gap: ${unsafeCSS(FlexContainer.defaultProps.gap)};
    }

    :host([column][stretch]) ::slotted(*) {
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
      this.style.setProperty("--flex-container-gap", this.gap);
    }
    if (this.row && this.column) {
      throw new Error("flex-container cannot be both row and column");
    }
    return html`<slot></slot>`;
  }
}
