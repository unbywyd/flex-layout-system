import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVars } from "../utils/media";

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
      margin: var(--f-cs-mg);
      width: 100%;
    }
    :host([crop]) {
      overflow: hidden;
    }
    ${unsafeCSS(generateRootMediaRules([{
      attr: 'width',
      cssProp: 'max-width',
    }, {
      attr: 'pd',
      cssProp: 'padding',
    }, {
      attr: 'display',
      cssProp: 'display',
    }]))}  
  `;

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  display: string = FlexCanvas.defaultProps.display;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  pd: string | null = null;

  override render() {
    const styleEl = document.createElement("span");
    setVars("display", this.display, FlexCanvas.defaultProps.display, styleEl, false);
    setVars("max-width", this.width, FlexCanvas.defaultProps.maxWidth, styleEl, false);
    setVars("padding", this.pd, FlexCanvas.defaultProps.padding, styleEl, false);

    if (this.mg) {
      styleEl.style.setProperty("--f-cs-mg", this.mg);
    } else {
      styleEl.style.setProperty("--f-cs-mg", FlexCanvas.defaultProps.margin);
    }
    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
