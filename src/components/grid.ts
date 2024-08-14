import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVars } from "../utils/media";

@customElement("flex-grid")
export class FlexGrid extends LitElement {
  static override styles = css`
    :host {
      box-sizing: border-box;
      padding: var(--f-g-gap, 0);
    }
    :host([centered]) {
        margin: 0 auto;
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
    ${unsafeCSS(generateRootMediaRules([{
    attr: 'gap',
    varName: 'f-g-gap'
  }, {
    attr: 'd',
    cssProp: 'display',
  }]))}  
  `;

  @property({ type: Boolean, reflect: true })
  crop!: boolean;

  @property({ type: Boolean, reflect: true })
  compact!: boolean;

  @property({ type: String, reflect: true })
  gap: string | null = null;

  @property({ type: String, reflect: true })
  d: string | null = null;

  @property({ type: Boolean, reflect: true })
  centered!: boolean;

  override render() {
    const styleEl = document.createElement("span");
    setVars("f-g-gap", this.gap, "0", styleEl, false);
    setVars("display", this.d, "block", styleEl, false);

    return html`<style>:host {${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
