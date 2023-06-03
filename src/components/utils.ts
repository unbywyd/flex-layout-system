/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("stacked-container")
export class StackedContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host ::slotted(*) {
      position: absolute;
    }
  `;
  render() {
    return html` <slot></slot> `;
  }
}

@customElement("stacked-cell")
export class StackedItem extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      box-sizing: border-box;
      inset-inline-start: var(--stacked-cell-start, auto);
      inset-inline-end: var(--stacked-cell-end, auto);
      inset-block-start: var(--stacked-cell-top, auto);
      inset-block-end: var(--stacked-cell-bottom, auto);
      z-index: var(--stacked-cell-z-index, auto);
    }
    :host([rel]) {
      position: relative;
    }

    :host ::slotted(*) {
      --stacked-cell-start: auto;
      --stacked-cell-end: auto;
      --stacked-cell-top: auto;
      --stacked-cell-bottom: auto;
      --stacked-cell-z-index: auto;
    }

    :host([overlay]) {
      background: var(--stacked-cell-overlay-color, rgba(0, 0, 0, 0.5));
    }

    :host([stretch]) {
      inset: 0;
    }
  `;

  @property({ type: String, reflect: true })
  xa: string | null = null;

  @property({ type: String, reflect: true })
  xb: string | null = null;

  @property({ type: String, reflect: true })
  ya: string | null = null;

  @property({ type: String, reflect: true })
  yb: string | null = null;

  @property({ type: String, reflect: true })
  z: string | null = null;

  @property({ type: String, reflect: true })
  oc: string | null = null;

  render() {
    if (this.oc)
      this.style.setProperty("--stacked-cell-overlay-color", this.oc);
    if (this.xa) this.style.setProperty("--stacked-cell-start", this.xa);
    if (this.xb) this.style.setProperty("--stacked-cell-end", this.xb);
    if (this.ya) this.style.setProperty("--stacked-cell-top", this.ya);
    if (this.yb) this.style.setProperty("--stacked-cell-bottom", this.yb);
    if (this.z) this.style.setProperty("--stacked-cell-z-index", this.z);
    return html`<slot></slot>`;
  }
}

@customElement("fit-container")
export class FitConainer extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
    :host ::slotted(img) {
      max-width: 100%;
      object-fit: contain;
    }
    :host([flex]) {
      display: flex;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([scrollable]) {
      overflow: auto;
    }
    :host ::slotted(fill-container) {
      width: 100%;
      height: 100%;
    }
  `;
  render() {
    return html` <slot></slot> `;
  }
}

@customElement("fill-container")
export class FillConainer extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;
      width: var(--fill-container-width, 100%);
      height: var(--fill-container-height, auto);
    }
    :host([flex]) {
      display: flex;
    }
    :host([stretch]) {
      width: 100%;
      height: 100%;
    }
    :host([center]) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :host ::slotted(*) {
      width: 100%;
      height: 100%;
      --fill-container-width: 100%;
      --fill-container-height: auto;
    }
    :host([force]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
    }
    :host ::slotted(img) {
      object-fit: contain;
      object-position: center;
      height: auto;
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }
    :host([cover]) ::slotted(img) {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    :host([round]) {
      overflow: hidden;
      border-radius: 50%;
    }
    :host([round]) ::slotted(img) {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  render() {
    if (this.width)
      this.style.setProperty("--fill-container-width", this.width);
    if (this.height)
      this.style.setProperty("--fill-container-height", this.height);
    return html`<slot></slot>`;
  }
}

@customElement("aspect-ratio")
export class AspectRatio extends LitElement {
  static defaultProps: {
    display: string;
  } = {
    display: "flex",
  };

  static styles = css`
    :host {
      box-sizing: border-box;
      aspect-ratio: var(--aspect-ratio, auto);
    }
    :host ::slotted(*) {
      --aspect-ratio: auto;
    }
    :host([fit]) ::slotted(*) {
      width: 100%;
      height: 100%;
    }
    :host([center]) ::slotted(img) {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
    :host([center]) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    :host([ratio="1/1"]) {
      --aspect-ratio: 1/1;
    }
    :host([ratio="4/3"]) {
      --aspect-ratio: 4/3;
    }
    :host([ratio="16/9"]) {
      --aspect-ratio: 16/9;
    }
    :host([ratio="21/9"]) {
      --aspect-ratio: 21/9;
    }
    :host([ratio="3/4"]) {
      --aspect-ratio: 3/4;
    }
    :host([ratio="9/16"]) {
      --aspect-ratio: 9/16;
    }
    :host([ratio="9/21"]) {
      --aspect-ratio: 9/21;
    }
    :host([ratio="1/2"]) {
      --aspect-ratio: 1/2;
    }
    :host([ratio="2/1"]) {
      --aspect-ratio: 2/1;
    }
    :host([ratio="1/3"]) {
      --aspect-ratio: 1/3;
    }
    :host([ratio="3/1"]) {
      --aspect-ratio: 3/1;
    }
    :host([ratio="1/4"]) {
      --aspect-ratio: 1/4;
    }
    :host([ratio="4/1"]) {
      --aspect-ratio: 4/1;
    }
    :host([ratio="1/5"]) {
      --aspect-ratio: 1/5;
    }
    :host([ratio="5/1"]) {
      --aspect-ratio: 5/1;
    }
    :host([ratio="1/6"]) {
      --aspect-ratio: 1/6;
    }
    :host([ratio="6/1"]) {
      --aspect-ratio: 6/1;
    }
  `;

  @property({ type: Boolean, reflect: true })
  center: boolean = true;

  @property({ type: String, reflect: true })
  ratio: string | null = null;

  render() {
    return html`<slot></slot>`;
  }
}

@customElement("space-box")
export class SpaceBox extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: var(--sbox-display, block);
      width: var(--sbox-width, 100%) !important;
      height: var(--sbox-height, auto) !important;
      padding-inline-start: var(--sbox-pis, var(--sbox-pd-gb, 0));
      padding-inline-end: var(--sbox-pie, var(--sbox-pd-gb, 0));
      padding-block-start: var(--sbox-pbs, var(--sbox-pd-gb, 0));
      padding-block-end: var(--sbox-pbe, var(--sbox-pd-gb, 0));
      margin-inline-start: var(--sbox-mis, var(--sbox-mg-gb, 0));
      margin-inline-end: var(--sbox-mie, var(--sbox-mg-gb, 0));
      margin-block-start: var(--sbox-mbs, var(--sbox-mg-gb, 0));
      margin-block-end: var(--sbox-mbe, var(--sbox-mg-gb, 0));
    }

    :host ::slotted(*) {
      --sbox-width: 100%;
      --sbox-height: auto;
      --sbox-padding: 0;
      --sbox-margin: 0;
      --sbox-pd-gb: 0;
      --sbox-mg-gb: 0;
      --sbox-pis: 0;
      --sbox-pie: 0;
      --sbox-pbs: 0;
      --sbox-pbe: 0;
      --sbox-mis: 0;
      --sbox-mie: 0;
      --sbox-mbs: 0;
      --sbox-mbe: 0;
    }
  `;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  @property({ type: String, reflect: true })
  pd: string | null = null;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  pis: string | null = null;

  @property({ type: String, reflect: true })
  px: string | null = null;

  @property({ type: String, reflect: true })
  py: string | null = null;

  @property({ type: String, reflect: true })
  mx: string | null = null;

  @property({ type: String, reflect: true })
  my: string | null = null;

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

  render() {
    if (this.width) this.style.setProperty("--sbox-width", this.width);
    if (this.height) this.style.setProperty("--sbox-height", this.height);
    if (this.pd) {
      this.style.setProperty("--sbox-pd-gb", this.pd);
    }
    if (this.mg) {
      this.style.setProperty("--sbox-mg-gb", this.mg);
    }
    if (this.px) {
      this.style.setProperty("--sbox-pis", this.px);
      this.style.setProperty("--sbox-pie", this.px);
    }
    if (this.py) {
      this.style.setProperty("--sbox-pbs", this.py);
      this.style.setProperty("--sbox-pbe", this.py);
    }
    if (this.mx) {
      this.style.setProperty("--sbox-mis", this.mx);
      this.style.setProperty("--sbox-mie", this.mx);
    }
    if (this.my) {
      this.style.setProperty("--sbox-mbs", this.my);
      this.style.setProperty("--sbox-mbe", this.my);
    }
    if (this.pis) this.style.setProperty("--sbox-pis", this.pis);
    if (this.pie) this.style.setProperty("--sbox-pie", this.pie);
    if (this.pbs) this.style.setProperty("--sbox-pbs", this.pbs);
    if (this.pbe) this.style.setProperty("--sbox-pbe", this.pbe);

    if (this.mis) this.style.setProperty("--sbox-mis", this.mis);
    if (this.mie) this.style.setProperty("--sbox-mie", this.mie);
    if (this.mbs) this.style.setProperty("--sbox-mbs", this.mbs);
    if (this.mbe) this.style.setProperty("--sbox-mbe", this.mbe);

    return html`<slot></slot>`;
  }
}

@customElement("s-box")
export class StyleBox extends LitElement {
  static styles = css`
    :host {
      --s-box-fb-display: var(--s-box-fallback-display, inline-block);
      --s-box-fb-fsz: var(--s-box-fallback-font-size, 1rem);
      --s-box-fb-lh: var(--s-box-fallback-line-height, normal);
      --s-box-fb-fw: var(--s-box-fallback-font-weight, normal);

      display: var(--s-box-display, var(--s-box-fb-display));
      font-size: var(--s-box-fsz, inherit);
      font-weight: var(--s-box-fw, inherit);
      line-height: var(--s-box-lh, inherit);
      box-sizing: border-box;
      width: var(--s-box-w, auto);
      height: var(--s-box-h, auto);
      min-width: var(--s-box-mw, auto);
      max-width: var(--s-box-mxw, auto);
      min-height: var(--s-box-mh, auto);
      max-height: var(--s-box-mxh, auto);
      padding-inline-start: var(--s-box-pis, var(--s-box-pd-gb, 0));
      padding-inline-end: var(--s-box-pie, var(--s-box-pd-gb, 0));
      padding-block-start: var(--s-box-pbs, var(--s-box-pd-gb, 0));
      padding-block-end: var(--s-box-pbe, var(--s-box-pd-gb, 0));
      margin-inline-start: var(--s-box-mis, var(--s-box-mg-gb, 0));
      margin-inline-end: var(--s-box-mie, var(--s-box-mg-gb, 0));
      margin-block-start: var(--s-box-mbs, var(--s-box-mg-gb, 0));
      margin-block-end: var(--s-box-mbe, var(--s-box-mg-gb, 0));
      text-align: var(--s-box-ta, start);
      opacity: var(--s-box-op, 1);
      text-decoration: var(--s-box-td, none);
      border-radius: var(--s-box-br, 0);
      text-transform: var(--s-box-tt, none);
    }

    :host([inline]) {
      display: inline;
    }

    :host([block]) {
      display: block;
    }

    .box {
      --s-box-display: inherit;
      --s-box-w: auto;
      --s-box-h: auto;
      --s-box-mw: auto;
      --s-box-mxw: auto;
      --s-box-mh: auto;
      --s-box-mxh: auto;
      --s-box-pis: 0;
      --s-box-pie: 0;
      --s-box-pbs: 0;
      --s-box-pbe: 0;
      --s-box-mis: 0;
      --s-box-mie: 0;
      --s-box-mbs: 0;
      --s-box-tt: none;
      --s-box-mbe: 0;
      --s-box-ta: start;
      --s-box-op: 1;
      --s-box-td: none;
      --s-box-br: 0;
      --s-box-fsz: inherit;
      --s-box-lh: inherit;
      --s-box-fw: inherit;
    }
    :host([fallback]) .box {
      --s-box-fsz: var(--s-box-fb-fsz);
      --s-box-lh: var(--s-box-fb-lh);
      --s-box-fw: var(--s-box-fb-fw);
    }
    :host([fallback][td]) ::slotted(*) {
      text-decoration: var(--s-box-td);
    }
    :host([fallback][fz]) ::slotted(*) {
      font-size: var(--s-box-fsz);
    }
    :host([fallback][fw]) ::slotted(*) {
      font-weight: var(--s-box-fw);
    }
    :host([fallback][lh]) ::slotted(*) {
      line-height: var(--s-box-lh);
    }
    :host([fallback][ta]) ::slotted(*) {
      text-align: var(--s-box-ta);
    }
    :host([fallback][tt]) ::slotted(*) {
      text-transform: var(--s-box-tt);
    }
  `;

  @property({ type: String, reflect: true })
  fz: string | null = null;

  @property({ type: String, reflect: true })
  fw: string | null = null;

  @property({ type: String, reflect: true })
  lh: string | null = null;

  @property({ type: String, reflect: true })
  w: string | null = null;

  @property({ type: String, reflect: true })
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
  px: string | null = null;

  @property({ type: String, reflect: true })
  py: string | null = null;

  @property({ type: String, reflect: true })
  mx: string | null = null;

  @property({ type: String, reflect: true })
  my: string | null = null;

  render() {
    if (this.pd) {
      this.style.setProperty("--s-box-pd-gb", this.pd);
    }
    if (this.mg) {
      this.style.setProperty("--s-box-mg-gb", this.mg);
    }

    if (this.px) {
      this.style.setProperty("--s-box-pis", this.px);
      this.style.setProperty("--s-box-pie", this.px);
    }
    if (this.py) {
      this.style.setProperty("--s-box-pbs", this.py);
      this.style.setProperty("--s-box-pbe", this.py);
    }
    if (this.mx) {
      this.style.setProperty("--s-box-mis", this.mx);
      this.style.setProperty("--s-box-mie", this.mx);
    }
    if (this.my) {
      this.style.setProperty("--s-box-mbs", this.my);
      this.style.setProperty("--s-box-mbe", this.my);
    }

    if (this.tt) this.style.setProperty("--s-box-tt", this.tt);
    if (this.w) this.style.setProperty("--s-box-w", this.w);
    if (this.h) this.style.setProperty("--s-box-h", this.h);
    if (this.mw) this.style.setProperty("--s-box-mw", this.mw);
    if (this.mxw) this.style.setProperty("--s-box-mxw", this.mxw);
    if (this.mh) this.style.setProperty("--s-box-mh", this.mh);
    if (this.mxh) this.style.setProperty("--s-box-mxh", this.mxh);
    if (this.pis) this.style.setProperty("--s-box-pis", this.pis);
    if (this.pie) this.style.setProperty("--s-box-pie", this.pie);
    if (this.pbs) this.style.setProperty("--s-box-pbs", this.pbs);
    if (this.pbe) this.style.setProperty("--s-box-pbe", this.pbe);
    if (this.mis) this.style.setProperty("--s-box-mis", this.mis);
    if (this.mie) this.style.setProperty("--s-box-mie", this.mie);
    if (this.mbs) this.style.setProperty("--s-box-mbs", this.mbs);
    if (this.mbe) this.style.setProperty("--s-box-mbe", this.mbe);
    if (this.ta) this.style.setProperty("--s-box-ta", this.ta);
    if (this.op) this.style.setProperty("--s-box-op", this.op);
    if (this.td) this.style.setProperty("--s-box-td", this.td);
    if (this.br) this.style.setProperty("--s-box-br", this.br);

    if (this.fz) this.style.setProperty("--s-box-fsz", this.fz);
    if (this.fw) this.style.setProperty("--s-box-fw", this.fw);
    if (this.lh) this.style.setProperty("--s-box-lh", this.lh);
    return html`<div class="box"><slot></slot></div>`;
  }
}
