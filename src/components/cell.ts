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
    attr: 'd',
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
    attr: 'g',
    cssProp: 'flex-grow',
  }, {
    attr: 'sh',
    cssProp: 'flex-shrink',
  }, {
    attr: 'w',
    cssProp: 'width',
  }, {
    attr: 'h',
    cssProp: 'height',
  }, {
    attr: 'bs',
    cssProp: 'flex-basis',
  }]))}
  `;

  @property({ type: Boolean, reflect: true })
  center!: boolean;

  @property({ type: Boolean, reflect: true })
  fill!: boolean;

  @property({ type: Boolean, reflect: true })
  fit!: boolean;

  @property({ type: Boolean, reflect: true })
  snug!: boolean;

  @property({ type: Boolean, reflect: true })
  auto!: boolean;

  @property({ type: Boolean, reflect: true })
  stretch!: boolean;

  @property({ type: String, reflect: true })
  d: string = FlexCell.defaultProps.display;

  @property({ type: String, reflect: true })
  as: string | null = null;

  @property({ type: Number, reflect: true })
  order: number | null = null;

  @property({ type: Number, reflect: true })
  g: number | null = null;

  @property({ type: Number, reflect: true })
  sh: number | null = null;

  @property({ type: String, reflect: true })
  w: string | null = null;

  @property({ type: String, reflect: true })
  h: string | null = null;

  @property({ type: String, reflect: true })
  bs: string | null = null;

  @property({ type: String, reflect: true })
  pd: string | null = null;

  override render() {
    const styleEl = document.createElement("span");
    setVars("display", this.d, FlexCell.defaultProps.display, styleEl, false);
    setVars("align-self", this.as, FlexCell.defaultProps.align, styleEl);
    setVars("order", this.order, FlexCell.defaultProps.order, styleEl);
    setVars("flex-grow", this.g, FlexCell.defaultProps.grow, styleEl);
    setVars("flex-shrink", this.sh, FlexCell.defaultProps.shrink, styleEl);
    setVars("width", this.w, FlexCell.defaultProps.width, styleEl);
    setVars("height", this.h, FlexCell.defaultProps.height, styleEl);
    setVars("flex-basis", this.bs, FlexCell.defaultProps.basis, styleEl);
    setVars("padding", this.pd, "0", styleEl, false);

    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}
