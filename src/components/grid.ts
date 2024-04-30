import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("flex-grid")
export class FlexGrid extends LitElement {
  static override styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      padding: var(--f-g-gap, 0);
    }
    :host([flex]) {
      display: flex;
    }
    :host([crop]) {
      overflow: hidden;
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

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  flex: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  compact: boolean | null = null;

  @property({ type: String, reflect: true })
  gap: string | null = null;
  override render() {
    const styleEl = document.createElement("span");
    if (this.gap) {
      styleEl.style.setProperty("--f-g-gap", this.gap);
    } else {
      styleEl.style.setProperty("--f-g-gap", "0");
    }
    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
