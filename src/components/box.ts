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
    :host([wrap='']) {
      flex-wrap: wrap;
    }
    :host([column]) {
      flex-direction: column;
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
    :host([wf]) ::slotted(*) {
      width: 100%;
    }
    :host([hf]) ::slotted(*) {
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
    attr: 'dn',
    cssProp: 'flex-direction',
  }, {
    attr: 'd',
    cssProp: 'display',
  }, {
    attr: 'wrap',
    cssProp: 'flex-wrap',
  }, {
    attr: 'w',
    cssProp: 'width',
  }, {
    attr: 'h',
    cssProp: 'height',
  }, {
    attr: 'mh',
    cssProp: 'min-height',
  }, {
    attr: 'mw',
    cssProp: 'min-width'
  }]))}
  `;

  @property({ type: Boolean })
  column!: boolean;

  @property({ type: String, reflect: true })
  jc: string | null = null;

  @property({ type: String, reflect: true })
  ai: string | null = null;

  @property({ type: String, reflect: true })
  ac: string | null = null;

  @property({ type: Boolean, reflect: true })
  start!: boolean;

  @property({ type: Boolean, reflect: true })
  end!: boolean;

  @property({ type: Boolean, reflect: true })
  centered!: boolean;

  @property({ type: Boolean, reflect: true })
  center!: boolean;

  @property({ type: String, reflect: true })
  mh: string | null = null;

  @property({ type: String, reflect: true })
  mw: string | null = null;

  @property({ type: String, reflect: true })
  h: string | null = null;

  @property({ type: String, reflect: true })
  w: string | null = null;

  @property({ type: Boolean, reflect: true })
  wf!: boolean;

  @property({ type: Boolean, reflect: true })
  hf!: boolean;

  @property({ type: String, reflect: true })
  gap: string | null = null;

  @property({ type: String, reflect: true })
  dn: string = FlexBox.defaultProps.direction;

  @property({ type: String, reflect: true })
  d: string = FlexBox.defaultProps.display;

  @property({ type: String, reflect: true })
  wrap: string = FlexBox.defaultProps.wrap;

  override render() {
    const styleEl = document.createElement("span");
    setVars("display", this.d, FlexBox.defaultProps.display, styleEl, false);
    setVars("flex-direction", this.dn, FlexBox.defaultProps.direction, styleEl);
    setVars("flex-wrap", this.wrap, FlexBox.defaultProps.wrap, styleEl);
    setVars("justify-content", this.jc, FlexBox.defaultProps.justifyContent, styleEl);
    setVars("align-items", this.ai, FlexBox.defaultProps.alignItems, styleEl);
    setVars("align-content", this.ac, FlexBox.defaultProps.alignContent, styleEl);
    setVars("gap", this.gap, FlexBox.defaultProps.gap, styleEl);
    setVars("width", this.w, "auto", styleEl);
    setVars("height", this.h, "auto", styleEl);
    setVars("min-height", this.mh, 'auto', styleEl);
    setVars("min-width", this.mw, 'auto', styleEl);

    return html`<style>:host{${styleEl.style.cssText} } </style><slot></slot > `;
  }
}
