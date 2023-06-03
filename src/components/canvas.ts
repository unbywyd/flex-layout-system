import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("flex-canvas")
export class FlexCanvas extends LitElement {
  static defaultProps: {
    maxWidth: string;
    display: string;
    margin: string;
    padding: string;
  } = {
    maxWidth: "1400px",
    display: "block",
    margin: "0 auto",
    padding: "0",
  };

  static styles = css`
    :host {
      box-sizing: border-box;
      display: var(
        --flex-canvas-display,
        ${unsafeCSS(FlexCanvas.defaultProps.display)}
      );
      margin: var(
        --flex-canvas-margin,
        ${unsafeCSS(FlexCanvas.defaultProps.margin)}
      );
      max-width: var(
        --flex-canvas-max-width,
        ${unsafeCSS(FlexCanvas.defaultProps.maxWidth)}
      );
      padding: var(
        --flex-canvas-padding,
        ${unsafeCSS(FlexCanvas.defaultProps.padding)}
      );
    }
    :host([flex]) {
      display: flex;
    }

    :host ::slotted(*) {
      --flex-canvas-display: ${unsafeCSS(FlexCanvas.defaultProps.display)};
      --flex-canvas-margin: ${unsafeCSS(FlexCanvas.defaultProps.margin)};
      --flex-canvas-max-width: ${unsafeCSS(FlexCanvas.defaultProps.maxWidth)};
      --flex-canvas-padding: ${unsafeCSS(FlexCanvas.defaultProps.padding)};
    }
  `;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  pd: string | null = null;

  render() {
    if (this.pd) {
      this.style.setProperty("--flex-canvas-padding", this.pd);
    }
    if (this.width) {
      this.style.setProperty("--flex-canvas-max-width", this.width);
    }
    if (this.mg) {
      this.style.setProperty("--flex-canvas-margin", this.mg);
    }
    return html`<slot></slot>`;
  }
}
