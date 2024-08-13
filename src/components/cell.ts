import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVars } from "../utils/media";

@customElement("flex-cell")
export class FlexCell extends LitElement {
  static defaultProps: {
    display: string;
    align: string;
    order: number;
    grow: number;
    shrink: number;
    height: string;
    basis: string;
    width: string;
  } = {
      basis: "auto",
      display: "block",
      align: "stretch",
      order: 0,
      grow: 0,
      shrink: 0,
      height: "auto",
      width: "auto",
    };
  static override styles = css`
    :host {
      box-sizing: border-box;
      padding: var(--f-g-pd, 0);
    }      
    :host([crop]) {
      overflow: hidden;
    }
    :host([fill]) {
      flex: 1 1 auto;
    }
    :host([fit]) {
      flex: 1;
    }
    :host([snug]) {
      flex: 0;
    }
    :host([auto]) {
      flex: 0 1 auto;
    }
    :host([stretch]) {
      flex-grow: 1;
    }
    :host([center]) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ${unsafeCSS(generateRootMediaRules([{
    attr: 'display',
    cssProp: 'display',
  }, {
    attr: 'as',
    cssProp: 'align-self',
  }, {
    attr: 'pd',
    cssProp: 'padding',
  }, {
    attr: 'order',
    cssProp: 'order',
  }, {
    attr: 'grow',
    cssProp: 'flex-grow',
  }, {
    attr: 'shrink',
    cssProp: 'flex-shrink',
  }, {
    attr: 'width',
    cssProp: 'width',
  }, {
    attr: 'height',
    cssProp: 'height',
  }, {
    attr: 'basis',
    cssProp: 'flex-basis',
  }]))}
  `;

  @property({ type: Boolean, reflect: true })
  center: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fill: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fit: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  snug: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  auto: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  stretch: boolean | null = null;

  @property({ type: String, reflect: true })
  display: string = FlexCell.defaultProps.display;

  @property({ type: String, reflect: true })
  as: string | null = null;

  @property({ type: Number, reflect: true })
  order: number | null = null;

  @property({ type: Number, reflect: true })
  grow: number | null = null;

  @property({ type: Number, reflect: true })
  shrink: number | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  @property({ type: String, reflect: true })
  basis: string | null = null;

  @property({ type: String, reflect: true })
  pd: string | null = null;

  override render() {
    const styleEl = document.createElement("span");
    setVars("display", this.display, FlexCell.defaultProps.display, styleEl, false);
    setVars("align-self", this.as, FlexCell.defaultProps.align, styleEl);
    setVars("order", this.order, FlexCell.defaultProps.order, styleEl);
    setVars("flex-grow", this.grow, FlexCell.defaultProps.grow, styleEl);
    setVars("flex-shrink", this.shrink, FlexCell.defaultProps.shrink, styleEl);
    setVars("width", this.width, FlexCell.defaultProps.width, styleEl);
    setVars("height", this.height, FlexCell.defaultProps.height, styleEl);
    setVars("flex-basis", this.basis, FlexCell.defaultProps.basis, styleEl);
    setVars("padding", this.pd, "0", styleEl, false);

    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
