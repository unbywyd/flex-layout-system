import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Base } from "./base";

@customElement("flex-grid")
export class FlexGrid extends Base {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      padding: var(--f-g-gap, 0);
    }
    :host([flex]) {
      display: flex;
    }

    :host([compact]) {
      padding: 0;
    }
    :host ::slotted(*) {
      --f-g-pd: var(--f-g-gap);
    }
    :host ::slotted(*) {
      margin: 0 calc(-1 * var(--f-g-gap));
    }
    :host ::slotted(*:last-child) {
      margin-bottom: calc(-1 * var(--f-g-gap));
    }
    :host ::slotted(*:first-child) {
      margin-top: calc(-1 * var(--f-g-gap));
    }
  `;

  @property({ type: String, reflect: true })
  gap: string | null = null;
  render() {
    if (this.gap) {
      this.style.setProperty("--f-g-gap", this.gap);
    } else {
      this.style.removeProperty("--f-g-gap");
    }
    return html`<slot></slot>`;
  }
}
