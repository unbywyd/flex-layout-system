import { LitElement, html, css } from "lit";
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

  static override styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      margin: var(--f-cs-mg);
      padding: var(--f-cs-pd);
      max-width: var(--f-cs-mw);
    }
    :host([flex]) {
      display: flex;
    }
    :host([crop]) {
      overflow: hidden;
    }
  `;

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  flex: boolean | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  pd: string | null = null;

  override render() {
    const styleEl = document.createElement("span");

    if (this.pd) {
      styleEl.style.setProperty("--f-cs-pd", this.pd);
    } else {
      styleEl.style.setProperty("--f-cs-pd", FlexCanvas.defaultProps.padding);
    }
    if (this.width) {
      styleEl.style.setProperty("--f-cs-mw", this.width);
    } else {
      styleEl.style.setProperty("--f-cs-mw", FlexCanvas.defaultProps.maxWidth);
    }
    if (this.mg) {
      styleEl.style.setProperty("--f-cs-mg", this.mg);
    } else {
      styleEl.style.setProperty("--f-cs-mg", FlexCanvas.defaultProps.margin);
    }
    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
