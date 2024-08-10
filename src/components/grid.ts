import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BreakpointSize } from "../config";
import { generateRootMediaRules } from "../utils/media";

@customElement("flex-grid")
export class FlexGrid extends LitElement {
  static override styles = css`
    :host {
      box-sizing: border-box;
      display: block;    
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
    ${unsafeCSS(generateRootMediaRules([{
    prop: 'gap',
    css: `--f-g-gap: var(--f-g-gap-sm);`
  }]))}
  `;

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  flex: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  compact: boolean | null = null;

  @property({ type: String, reflect: true })
  gap: string | null = null;

  @property({ type: String, reflect: true, attribute: "gap-sm" })
  gapSm: string | null = null;

  @property({ type: String, reflect: true, attribute: "sm-breakpoint" })
  smBp: BreakpointSize = BreakpointSize.sm;
  override render() {
    const styleEl = document.createElement("span");
    if (this.gap) {
      styleEl.style.setProperty("--f-g-gap", this.gap);
    } else {
      styleEl.style.setProperty("--f-g-gap", "0");
    }

    if (this.gapSm) {
      styleEl.style.setProperty("--f-g-gap-sm", this.gapSm);
    } else {
      styleEl.style.setProperty("--f-g-gap-sm", "0");
    }

    return html`<style>:host {${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
