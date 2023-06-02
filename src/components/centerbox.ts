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
    }
    :host(.full-height) {
      min-height: 100vh;
    }
  `;
  render() {
    return html`<div><slot></slot></div>`;
  }
}
