import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("flex-grid")
export class FlexGrid extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      padding: var(--flex-grid-gap, 0);
    }
    :host([flex]) {
      display: flex;
    }
    :host ::slotted(flex-container) {
      --flex-grid-padding: var(--flex-grid-gap);
    }
    :host ::slotted(flex-container) {
      margin: calc(-1 * var(--flex-grid-gap));
    }
  `;

  @property({ type: String, reflect: true })
  gap: string | null = null;
  render() {
    if (this.gap) {
      this.style.setProperty("--flex-grid-gap", this.gap);
    }
    return html`<slot></slot>`;
  }
}
