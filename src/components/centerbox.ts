import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("flex-centerbox")
export class FlexCenterBox extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--flex-centerbox-padding, 0);
      overflow: auto;
    }
    :host(.full-height),
    :host([screen]) {
      min-height: 100vh;
    }
    :host([noscroll]) {
      overflow: hidden;
    }
    :host([inline]) {
      display: inline-flex;
      width: auto;
    }
    :host ::slotted(*) {
      --flex-centerbox-padding: 0;
    }
  `;

  @property({ type: String, reflect: true })
  pd = "0";

  render() {
    if (this.pd) {
      this.style.setProperty("--flex-centerbox-padding", this.pd);
    }
    return html`<div><slot></slot></div>`;
  }
}
