import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVars } from "../utils/media";

export enum EnumBoxType {
  row = "row",
  column = "column",
  rowReverse = "row-reverse",
  columnReverse = "column-reverse",
}

export enum EnumWrapType {
  nowrap = "nowrap",
  wrap = "wrap",
}

@customElement("flex-box")
export class FlexBox extends LitElement {
  static defaultProps: {
    reverse: boolean;
    display: "flex" | "inline-flex";
    direction: EnumBoxType;
    justifyContent: string;
    wrap: EnumWrapType;
    alignItems: string;
    alignContent: string;
    gap: string;
  } = {
      reverse: false,
      display: "flex",
      direction: EnumBoxType.row,
      gap: "0",
      wrap: EnumWrapType.nowrap,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
    };
  static override styles = css`
    :host {
      box-sizing: border-box;
    }
    :host([centered]) {
      margin: 0 auto;
    }
    :host([center]) {
      align-items: center;
      justify-content: center;
    }
    :host([start]) {
      justify-content: flex-start;
      align-items: flex-start;
    }
    :host([end]) {
      justify-content: flex-end;
      align-items: flex-end;
    }
    :host([gap]) ::slotted(*) {
      --f-g-pd: 0 !important;
    }
    :host([w-fill]) ::slotted(*) {
      width: 100%;
    }
    :host([h-fill]) ::slotted(*) {
      height: 100%;
    }
    ${unsafeCSS(generateRootMediaRules([{
    attr: 'jc',
    cssProp: 'justify-content',
  }, {
    attr: 'gap',
    cssProp: 'gap',
  }, {
    attr: 'ai',
    cssProp: 'align-items',
  }, {
    attr: 'ac',
    cssProp: 'align-content',
  }, {
    attr: 'direction',
    cssProp: 'flex-direction',
  }, {
    attr: 'display',
    cssProp: 'display',
  }, {
    attr: 'wrap',
    cssProp: 'flex-wrap',
  }, {
    attr: 'width',
    cssProp: 'width',
  }, {
    attr: 'height',
    cssProp: 'height',
  }, {
    attr: 'mh',
    cssProp: 'min-height',
  }, {
    attr: 'mw',
    cssProp: 'min-width'
  }]))}
  `;

  @property({ type: String, reflect: true })
  jc: string | null = null;

  @property({ type: String, reflect: true })
  ai: string | null = null;

  @property({ type: String, reflect: true })
  ac: string | null = null;

  @property({ type: Boolean, reflect: true })
  start: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  end: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  centered: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  center: boolean | null = null;

  @property({ type: String, reflect: true, attribute: 'mh' })
  minHeight: string | null = null;

  @property({ type: String, reflect: true, attribute: 'mw' })
  minWidth: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: Boolean, reflect: true, attribute: 'w-fill' })
  wFill: boolean | null = null;

  @property({ type: Boolean, reflect: true, attribute: 'h-fill' })
  hFill: boolean | null = null;

  @property({ type: String, reflect: true })
  gap: string | null = null;

  @property({ type: String, reflect: true })
  direction: string = FlexBox.defaultProps.direction;

  @property({ type: String, reflect: true })
  display: string = FlexBox.defaultProps.display;

  @property({ type: String, reflect: true })
  wrap: string = FlexBox.defaultProps.wrap;

  override render() {
    const styleEl = document.createElement("span");
    setVars("display", this.display, FlexBox.defaultProps.display, styleEl, false);
    setVars("flex-direction", this.direction, FlexBox.defaultProps.direction, styleEl);
    setVars("flex-wrap", this.wrap, FlexBox.defaultProps.wrap, styleEl);
    setVars("justify-content", this.jc, FlexBox.defaultProps.justifyContent, styleEl);
    setVars("align-items", this.ai, FlexBox.defaultProps.alignItems, styleEl);
    setVars("align-content", this.ac, FlexBox.defaultProps.alignContent, styleEl);
    setVars("gap", this.gap, FlexBox.defaultProps.gap, styleEl);
    setVars("width", this.width, "auto", styleEl);
    setVars("height", this.height, "auto", styleEl);
    setVars("min-height", this.minHeight, 'auto', styleEl);
    setVars("min-width", this.minWidth, 'auto', styleEl);

    return html`<style>:host{${styleEl.style.cssText} } </style><slot></slot > `;
  }
}
