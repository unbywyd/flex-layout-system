import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { generateRootMediaRules, setVal, setVars } from "../utils/media";
const _window = (typeof window !== "undefined" ? window : {}) as Window;

@customElement("d-box")
export class DisplayBox extends LitElement {
  static override styles = css`
    ${unsafeCSS(generateRootMediaRules([{
    attr: 'display',
    cssProp: 'display',
  }]))}
  `;

  private _resizeListener!: EventListenerOrEventListenerObject;

  @property({ type: String, reflect: true })
  display: string | null = null;

  @property({ type: String, reflect: true })
  media: string | null = null;

  private checkMedia(): boolean {
    if (!_window.matchMedia || !this.media) {
      return true;
    }
    return _window.matchMedia(this.media).matches;
  }

  override connectedCallback() {
    super.connectedCallback();
    if (!this.media) {
      return;
    }
    this._resizeListener = () => {
      this.requestUpdate();
    };
    _window?.addEventListener("resize", this._resizeListener);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._resizeListener) {
      _window?.removeEventListener("resize", this._resizeListener);
    }
  }

  override render() {
    const styleEl = document.createElement("span");
    setVars("display", this.display, 'block', styleEl, false);

    const result = html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
    if (!this.media) {
      return result;
    }
    return this.checkMedia() ? result : html``;
  }
}

@customElement("space-box")
export class StackedBox extends LitElement {
  static override styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;      
      flex: 0 0 auto;
    }
    :host([w-full]) {
      width: 100%;      
    }
    :host([stretch]) {
      flex: 1 1 auto;    
    } 
    ${unsafeCSS(generateRootMediaRules([{
    attr: 'size',
    cssProp: 'width',
  }, {
    attr: 'size',
    cssProp: 'height',
  }]))}
  `;

  @property({ type: String, reflect: true })
  size: string | null = null;

  @property({ type: Boolean, reflect: true })
  stretch!: boolean;

  @property({ type: Boolean, reflect: true, attribute: "w-full" })
  wFull!: boolean;

  override render() {
    const styleEl = document.createElement("span");
    setVars("width", this.size, 'auto', styleEl);
    setVars("height", this.size, 'auto', styleEl);
    return html`<style>:host { ${styleEl.style.cssText}}</style>`;
  }
}

@customElement("s-box")
export class StyleBox extends LitElement {
  static override styles = css`
      :host { 
      --f-sb-object-fit: cover;
      box-sizing: border-box;    
    }
    :host([block]) {
      display: block;
    }
    :host([center]) {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }   
    :host([object-fit]) ::slotted(img), :host([object-fit]) ::slotted(video) {
      object-fit: var(--f-sb-object-fit);
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-position: center;
    }  
    :host([fill]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
    }
    :host([round]) {
      overflow: hidden;
      border-radius: 50%;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([stretch]) {
      width: 100% !important;
      height: 100% !important;
      flex-grow: 1;
    }
    :host([scrollable]) {
      overflow: auto;
    }
    :host([sr-only]) {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border-width: 0 !important;
    }    
    ${unsafeCSS(generateRootMediaRules([{
    attr: 'display',
    cssProp: 'display',
  }, {
    attr: 'width',
    cssProp: 'width',
  }, {
    attr: 'height',
    cssProp: 'height',
  }, {
    attr: 'ratio',
    cssProp: 'aspect-ratio',
  }, {
    attr: 'fz',
    cssProp: 'font-size',
  }, {
    attr: 'ta',
    cssProp: 'text-align',
  }, {
    attr: 'pd',
    cssProp: 'padding',
  }, {
    attr: 'mg',
    cssProp: 'margin',
  }, {
    attr: 'inset',
    cssProp: 'inset',
  }, {
    attr: 'pos',
    cssProp: 'position',
  }, {
    attr: 'pi',
    cssProp: 'padding-inline',
  }, {
    attr: 'pb',
    cssProp: 'padding-block',
  }, {
    attr: 'mi',
    cssProp: 'margin-inline',
  }, {
    attr: 'mb',
    cssProp: 'margin-block',
  }, {
    attr: 'pis',
    cssProp: 'padding-inline-start',
  }, {
    attr: 'pie',
    cssProp: 'padding-inline-end',
  }, {
    attr: 'pbs',
    cssProp: 'padding-block-start',
  }, {
    attr: 'pbe',
    cssProp: 'padding-block-end',
  }, {
    attr: 'mis',
    cssProp: 'margin-inline-start',
  }, {
    attr: 'mie',
    cssProp: 'margin-inline-end',
  }, {
    attr: 'mbs',
    cssProp: 'margin-block-start',
  }, {
    attr: 'mbe',
    cssProp: 'margin-block-end',
  }, {
    attr: 'lh',
    cssProp: 'line-height',
  }, {
    attr: 'fw',
    cssProp: 'font-weight',
  }, {
    attr: 'mw',
    cssProp: 'min-width',
  }, {
    attr: 'mh',
    cssProp: 'min-height',
  }, {
    attr: 'mxw',
    cssProp: 'max-width',
  }, {
    attr: 'mxh',
    cssProp: 'max-height',
  }, {
    attr: 'br',
    cssProp: 'border-radius',
  }, {
    attr: 'fg',
    cssProp: 'flex-grow',
  }]))}
  `;
  @property({ type: String, reflect: true, attribute: "fit" })
  objectFit: string | null = null;

  @property({ type: Boolean, reflect: true })
  block!: boolean;

  @property({ type: String, reflect: true })
  display: string | null = null;

  @property({ type: Boolean, reflect: true })
  round!: boolean;

  @property({ type: Boolean, reflect: true })
  stretch!: boolean;

  @property({ type: Boolean, reflect: true })
  zi: string | null = null;

  @property({ type: String, reflect: true })
  pos: string | null = null;

  @property({ type: String, reflect: true })
  inset: string | null = null;

  @property({ type: Boolean, reflect: true })
  fill!: boolean;

  @property({ type: Boolean, reflect: true })
  crop!: boolean;

  @property({ type: Boolean, reflect: true, attribute: "sr-only" })
  srOnly!: boolean;

  @property({ type: Boolean, reflect: true })
  scrollable!: boolean;

  @property({ type: String, reflect: true })
  whiteSpace: string | null = null;

  @property({ type: String, reflect: true })
  color: string | null = null;

  @property({ type: String, reflect: true })
  bgc: string | null = null;

  @property({ type: String, reflect: true })
  fz: string | null = null;

  @property({ type: String, reflect: true })
  fw: string | null = null;

  @property({ type: String, reflect: true })
  lh: string | null = null;

  @property({ type: String, reflect: true, attribute: "width" })
  w: string | null = null;

  @property({ type: String, reflect: true, attribute: 'height' })
  h: string | null = null;

  @property({ type: String, reflect: true })
  mw: string | null = null;

  @property({ type: String, reflect: true })
  mxw: string | null = null;

  @property({ type: String, reflect: true })
  mh: string | null = null;

  @property({ type: String, reflect: true })
  tt: string | null = null;

  @property({ type: String, reflect: true })
  mxh: string | null = null;

  @property({ type: String, reflect: true })
  pis: string | null = null;

  @property({ type: String, reflect: true })
  pie: string | null = null;

  @property({ type: String, reflect: true })
  pbs: string | null = null;

  @property({ type: String, reflect: true })
  pbe: string | null = null;

  @property({ type: String, reflect: true })
  mbs: string | null = null;

  @property({ type: String, reflect: true })
  mbe: string | null = null;

  @property({ type: String, reflect: true })
  mis: string | null = null;

  @property({ type: String, reflect: true })
  mie: string | null = null;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  pd: string | null = null;

  @property({ type: String, reflect: true })
  ta: string | null = null;

  @property({ type: String, reflect: true })
  op: string | null = null;

  @property({ type: String, reflect: true })
  td: string | null = null;

  @property({ type: String, reflect: true })
  br: string | null = null;

  @property({ type: String, reflect: true })
  pi: string | null = null;

  @property({ type: String, reflect: true })
  pb: string | null = null;

  @property({ type: String, reflect: true })
  mi: string | null = null;

  @property({ type: String, reflect: true })
  mb: string | null = null;

  @property({ type: String, reflect: true })
  fg: string | null = null;

  @property({ type: String, reflect: true })
  ratio: string | null = null;

  override render() {
    const styleEl = document.createElement("span");
    setVars('display', this.display, 'inline-block', styleEl, false);
    setVars("width", this.w, 'auto', styleEl);
    setVars("height", this.h, 'auto', styleEl);
    setVars("aspect-ratio", this.ratio, 'auto', styleEl);
    setVars("font-size", this.fz, 'inherit', styleEl);
    setVars("text-align", this.ta, 'inherit', styleEl);
    setVars("padding", this.pd, '0', styleEl);
    setVars("margin", this.mg, '0', styleEl);
    setVars("inset", this.inset, 'auto', styleEl);
    setVars("position", this.pos, 'static', styleEl);

    setVars("padding-inline-start", this.pis, '0', styleEl);
    setVars("padding-inline-end", this.pie, '0', styleEl);
    setVars("padding-block-start", this.pbs, '0', styleEl);
    setVars("padding-block-end", this.pbe, '0', styleEl);
    setVars("margin-inline-start", this.mis, '0', styleEl);
    setVars("margin-inline-end", this.mie, '0', styleEl);
    setVars("margin-block-start", this.mbs, '0', styleEl);
    setVars("margin-block-end", this.mbe, '0', styleEl);
    setVars("padding-inline", this.pi, '0', styleEl);
    setVars("padding-block", this.pb, '0', styleEl);
    setVars("margin-inline", this.mi, '0', styleEl);
    setVars("margin-block", this.mb, '0', styleEl);
    setVars("line-height", this.lh, 'normal', styleEl);
    setVars("font-weight", this.fw, 'normal', styleEl);
    setVars("min-width", this.mw, "auto", styleEl);
    setVars("min-height", this.mh, "auto", styleEl);
    setVars("max-width", this.mxw, "none", styleEl);
    setVars("max-height", this.mxh, "none", styleEl);
    setVars("border-radius", this.br, "0", styleEl);
    setVars("flex-grow", this.fg, '0', styleEl);

    setVal("background-color", this.bgc, styleEl);
    setVal("color", this.color, styleEl);
    setVal("text-decoration", this.td, styleEl);
    setVal("text-transform", this.tt, styleEl);
    setVal("white-space", this.whiteSpace, styleEl);
    setVal("opacity", this.op, styleEl);
    setVal("z-index", this.zi, styleEl);

    const styles = styleEl.style.cssText;
    let cssRules = `:host{${styles}}`;
    if (this.objectFit) {
      cssRules += `:host([fit]) {--f-sb-object-fit: ${this.objectFit} }`;
    }
    return html`<style>${unsafeCSS(cssRules)}</style><slot></slot>`;
  }
}