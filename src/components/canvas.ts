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
        --f-cs-db,
        ${unsafeCSS(FlexCanvas.defaultProps.display)}
      );
      margin: var(--f-cs-mg, ${unsafeCSS(FlexCanvas.defaultProps.margin)});
      max-width: var(--f-cs-mw, ${unsafeCSS(FlexCanvas.defaultProps.maxWidth)});
      padding: var(--f-cs-pd, ${unsafeCSS(FlexCanvas.defaultProps.padding)});
    }
    :host([flex]) {
      display: flex;
    }

    :host ::slotted(*) {
      --f-cs-db: ${unsafeCSS(FlexCanvas.defaultProps.display)};
      --f-cs-mg: ${unsafeCSS(FlexCanvas.defaultProps.margin)};
      --f-cs-mw: ${unsafeCSS(FlexCanvas.defaultProps.maxWidth)};
      --f-cs-pd: ${unsafeCSS(FlexCanvas.defaultProps.padding)};
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
      this.style.setProperty("--f-cs-pd", this.pd);
    }
    if (this.width) {
      this.style.setProperty("--f-cs-mw", this.width);
    }
    if (this.mg) {
      this.style.setProperty("--f-cs-mg", this.mg);
    }
    return html`<slot></slot>`;
  }
}

export type FlexCanvasProps = {
  width?: string;
  mg?: string;
  pd?: string;
  flex?: boolean;
}