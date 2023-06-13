/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("stacked-box")
export class StackedBox extends LitElement {
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

export type StackedBoxProps = {
  crop?: boolean;
}

@customElement("stacked-cell")
export class StackedCell extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      box-sizing: border-box;
      inset-inline-start: var(--f-sc-s, auto);
      inset-inline-end: var(--f-sc-e, auto);
      inset-block-start: var(--f-sc-t, auto);
      inset-block-end: var(--f-sc-b, auto);
      z-index: var(--f-sc-z, auto);
    }
    :host([rel]) {
      position: relative;
    }

    :host ::slotted(*) {
      --f-sc-s: auto;
      --f-sc-e: auto;
      --f-sc-t: auto;
      --f-sc-b: auto;
      --f-sc-z: auto;
    }

    :host([overlay]) {
      background: var(--f-sc-oc, rgba(0, 0, 0, 0.5));
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
    if (this.oc) this.style.setProperty("--f-sc-oc", this.oc);
    if (this.xa) this.style.setProperty("--f-sc-s", this.xa);
    if (this.xb) this.style.setProperty("--f-sc-e", this.xb);
    if (this.ya) this.style.setProperty("--f-sc-t", this.ya);
    if (this.yb) this.style.setProperty("--f-sc-b", this.yb);
    if (this.z) this.style.setProperty("--f-sc-z", this.z);
    return html`<slot></slot>`;
  }
}

export type StackedCellProps = {
  rel?: boolean;
  overlay?: boolean;
  stretch?: boolean;
  xa?: string;
  xb?: string;
  ya?: string;
  yb?: string;
  z?: string;
  oc?: string;
}


@customElement("fit-box")
export class FitBox extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;
      width: var(--f-fb-w, 100%);
      height: var(--f-fb-h, auto);
    }
    :host([flex]) {
      display: flex;
    }
    :host([stretch]) {
      width: 100%;
      height: 100%;
      flex-grow: 1;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([scrollable]) {
      overflow: auto;
    }
    :host([center]) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :host([fill]) ::slotted(*) {
      width: 100%;
      height: 100%;
      --f-fb-w: 100%;
      --f-fb-h: auto;
    }
    :host([round]) {
      overflow: hidden;
      border-radius: 50%;
    }
    :host([cover]) ::slotted(img) {
      object-fit: cover;
      object-position: center;
    }
    :host([contain]) ::slotted(img) {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    :host([stretch][force]) {
      width: 100% !important;
      height: 100% !important;
    }
    :host([force][fill]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
    }
  `;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  render() {
    if (this.width) this.style.setProperty("--f-fb-w", this.width);
    if (this.height) this.style.setProperty("--f-fb-h", this.height);
    return html`<slot></slot>`;
  }
}

export type FitBoxProps = {
  flex?: boolean;
  stretch?: boolean;
  crop?: boolean;
  scrollable?: boolean;
  center?: boolean;
  fill?: boolean;
  round?: boolean;
  cover?: boolean;
  contain?: boolean;
  force?: boolean;
  width?: string;
  height?: string;
}

@customElement("a-ratio")
export class AspectRatio extends LitElement {
  static defaultProps: {
    display: string;
  } = {
    display: "flex",
  };

  static styles = css`
    :host {
      box-sizing: border-box;
      aspect-ratio: var(--f-ar-v, auto);
    }
    :host ::slotted(*) {
      --f-ar-v: auto;
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
      --f-ar-v: 1/1;
    }
    :host([ratio="4/3"]) {
      --f-ar-v: 4/3;
    }
    :host([ratio="16/9"]) {
      --f-ar-v: 16/9;
    }
    :host([ratio="21/9"]) {
      --f-ar-v: 21/9;
    }
    :host([ratio="3/4"]) {
      --f-ar-v: 3/4;
    }
    :host([ratio="9/16"]) {
      --f-ar-v: 9/16;
    }
    :host([ratio="9/21"]) {
      --f-ar-v: 9/21;
    }
    :host([ratio="1/2"]) {
      --f-ar-v: 1/2;
    }
    :host([ratio="2/1"]) {
      --f-ar-v: 2/1;
    }
    :host([ratio="1/3"]) {
      --f-ar-v: 1/3;
    }
    :host([ratio="3/1"]) {
      --f-ar-v: 3/1;
    }
    :host([ratio="1/4"]) {
      --f-ar-v: 1/4;
    }
    :host([ratio="4/1"]) {
      --f-ar-v: 4/1;
    }
    :host([ratio="1/5"]) {
      --f-ar-v: 1/5;
    }
    :host([ratio="5/1"]) {
      --f-ar-v: 5/1;
    }
    :host([ratio="1/6"]) {
      --f-ar-v: 1/6;
    }
    :host([ratio="6/1"]) {
      --f-ar-v: 6/1;
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

export type AspectRatioProps = {
  fit?: boolean;
  center?: boolean;
  ratio?: string;
}

@customElement("flex-divider")
export class FlexDivider extends LitElement {
  static styles = css`
    :host {
      --f-divider-size: 1px;
      --f-divider-bg-dark: rgba(255, 255, 255, 0.12);
      --f-divider-bg-light: rgba(0, 0, 0, 0.12);
      box-sizing: border-box;
      display: var(--f-divider-db, block);
      align-self: center;
    }
    :host([v]) {
      min-width: var(--f-vd-w, var(--f-divider-size));
      width: var(--f-vd-w, var(--f-divider-size));
      height: var(--f-vd-ops-size, auto);
      margin: 0 var(--f-divider-m, 0);
    }

    :host([h]) {
      min-height: var(--f-divider-h, var(--f-divider-size));
      height: var(--f-divider-h, var(--f-divider-size));
      margin: var(--f-divider-m, 0) 0;
      width: var(--f-vd-ops-size, auto);
      max-width: var(--f-vd-ops-size, 100%);
    }
    :host([stretch][h]) {
      width: 100%;
    }
    :host([stretch]) {
      align-self: stretch;
    }

    :host([dark]) {
      background-color: var(
        --f-divider-bg,
        var(--f-divider-fallback-bg-dark, var(--f-divider-bg-dark))
      );
    }
    :host(:not([dark])) {
      background-color: var(
        --f-divider-bg,
        var(--f-divider-fallback-bg-light, var(--f-divider-bg-light))
      );
    }
  `;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  color: string | null = null;

  @property({ type: String, reflect: true })
  size: string | null = null;

  render() {
    if (this.size) this.style.setProperty("--f-vd-ops-size", this.size);
    if (this.color) this.style.setProperty("--f-divider-bg", this.color);
    if (this.width) this.style.setProperty("--f-divider-size", this.width);
    if (this.mg) this.style.setProperty("--f-divider-m", this.mg);
    return html``;
  }
}

export type FlexDividerProps = {
  v?: boolean;
  h?: boolean;
  stretch?: boolean;
  dark?: boolean;
  mg?: string;
  width?: string;
  color?: string;
  size?: string;
}

@customElement("space-box")
export class SpaceBox extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: var(--f-sbx-db, block);
      width: var(--f-sbx-w, 100%);
      height: var(--f-sbx-h, auto);
    }
  `;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  @property({ type: String, reflect: true })
  size: string | null = null;

  render() {
    if (this.width) this.style.setProperty("--f-sbx-w", this.width);
    if (this.height) this.style.setProperty("--f-sbx-h", this.height);
    if (this.size) {
      this.style.setProperty("--f-sbx-w", this.size);
      this.style.setProperty("--f-sbx-h", this.size);
    }
    return html``;
  }
}

export type SpaceBoxProps = {
  width?: string;
  height?: string;
  size?: string;
}

@customElement("s-box")
export class StyleBox extends LitElement {
  static styles = css`
    :host {
      --f-sb-fb-display: var(--f-sb-fallback-display, inline-block);
      --f-sb-fb-fsz: var(--f-sb-fallback-font-size, 1rem);
      --f-sb-fb-lh: var(--f-sb-fallback-line-height, normal);
      --f-sb-fb-fw: var(--f-sb-fallback-font-weight, normal);

      display: var(--f-sb-db, var(--f-sb-fb-display));
      font-size: var(--f-sb-fsz, inherit);
      font-weight: var(--f-sb-fw, inherit);
      line-height: var(--f-sb-lh, inherit);
      box-sizing: border-box;
      width: var(--f-sb-w, auto);
      height: var(--f-sb-h, auto);
      min-width: var(--f-sb-mw, auto);
      max-width: var(--f-sb-mxw, auto);
      min-height: var(--f-sb-mh, auto);
      max-height: var(--f-sb-mxh, auto);
      padding-inline-start: var(--f-sb-pis, var(--f-sb-pd-gb, 0));
      padding-inline-end: var(--f-sb-pie, var(--f-sb-pd-gb, 0));
      padding-block-start: var(--f-sb-pbs, var(--f-sb-pd-gb, 0));
      padding-block-end: var(--f-sb-pbe, var(--f-sb-pd-gb, 0));
      margin-inline-start: var(--f-sb-mis, var(--f-sb-mg-gb, 0));
      margin-inline-end: var(--f-sb-mie, var(--f-sb-mg-gb, 0));
      margin-block-start: var(--f-sb-mbs, var(--f-sb-mg-gb, 0));
      margin-block-end: var(--f-sb-mbe, var(--f-sb-mg-gb, 0));
      text-align: var(--f-sb-ta, start);
      opacity: var(--f-sb-op, 1);
      text-decoration: var(--f-sb-td, none);
      border-radius: var(--f-sb-br, 0);
      text-transform: var(--f-sb-tt, none);
    }

    :host([inline]) {
      display: inline;
    }

    :host([block]) {
      display: block;
    }

    .box {
      --f-sb-w: auto;
      --f-sb-h: auto;
      --f-sb-mw: auto;
      --f-sb-mxw: auto;
      --f-sb-mh: auto;
      --f-sb-mxh: auto;
      --f-sb-pis: 0;
      --f-sb-pie: 0;
      --f-sb-pbs: 0;
      --f-sb-pbe: 0;
      --f-sb-mis: 0;
      --f-sb-mie: 0;
      --f-sb-mbs: 0;
      --f-sb-tt: none;
      --f-sb-td: none;
      --f-sb-mbe: 0;
      --f-sb-ta: start;
      --f-sb-op: 1;
      --f-sb-br: 0;
      --f-sb-fsz: inherit;
      --f-sb-lh: inherit;
      --f-sb-fw: inherit;
    }
    :host([fb]) .box {
      --f-sb-fsz: var(--f-sb-fb-fsz);
      --f-sb-lh: var(--f-sb-fb-lh);
      --f-sb-fw: var(--f-sb-fb-fw);
    }
    :host([fb][td]) ::slotted(*) {
      text-decoration: var(--f-sb-td);
    }
    :host([fb][fz]) ::slotted(*) {
      font-size: var(--f-sb-fsz);
    }
    :host([fb][fw]) ::slotted(*) {
      font-weight: var(--f-sb-fw);
    }
    :host([fb][lh]) ::slotted(*) {
      line-height: var(--f-sb-lh);
    }
    :host([fb][ta]) ::slotted(*) {
      text-align: var(--f-sb-ta);
    }
    :host([fb][tt]) ::slotted(*) {
      text-transform: var(--f-sb-tt);
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
      this.style.setProperty("--f-sb-pd-gb", this.pd);
    }
    if (this.mg) {
      this.style.setProperty("--f-sb-mg-gb", this.mg);
    }

    if (this.px) {
      this.style.setProperty("--f-sb-pis", this.px);
      this.style.setProperty("--f-sb-pie", this.px);
    }
    if (this.py) {
      this.style.setProperty("--f-sb-pbs", this.py);
      this.style.setProperty("--f-sb-pbe", this.py);
    }
    if (this.mx) {
      this.style.setProperty("--f-sb-mis", this.mx);
      this.style.setProperty("--f-sb-mie", this.mx);
    }
    if (this.my) {
      this.style.setProperty("--f-sb-mbs", this.my);
      this.style.setProperty("--f-sb-mbe", this.my);
    }

    if (this.tt) this.style.setProperty("--f-sb-tt", this.tt);
    if (this.w) this.style.setProperty("--f-sb-w", this.w);
    if (this.h) this.style.setProperty("--f-sb-h", this.h);
    if (this.mw) this.style.setProperty("--f-sb-mw", this.mw);
    if (this.mxw) this.style.setProperty("--f-sb-mxw", this.mxw);
    if (this.mh) this.style.setProperty("--f-sb-mh", this.mh);
    if (this.mxh) this.style.setProperty("--f-sb-mxh", this.mxh);
    if (this.pis) this.style.setProperty("--f-sb-pis", this.pis);
    if (this.pie) this.style.setProperty("--f-sb-pie", this.pie);
    if (this.pbs) this.style.setProperty("--f-sb-pbs", this.pbs);
    if (this.pbe) this.style.setProperty("--f-sb-pbe", this.pbe);
    if (this.mis) this.style.setProperty("--f-sb-mis", this.mis);
    if (this.mie) this.style.setProperty("--f-sb-mie", this.mie);
    if (this.mbs) this.style.setProperty("--f-sb-mbs", this.mbs);
    if (this.mbe) this.style.setProperty("--f-sb-mbe", this.mbe);
    if (this.ta) this.style.setProperty("--f-sb-ta", this.ta);
    if (this.op) this.style.setProperty("--f-sb-op", this.op);
    if (this.td) this.style.setProperty("--f-sb-td", this.td);
    if (this.br) this.style.setProperty("--f-sb-br", this.br);

    if (this.fz) this.style.setProperty("--f-sb-fsz", this.fz);
    if (this.fw) this.style.setProperty("--f-sb-fw", this.fw);
    if (this.lh) this.style.setProperty("--f-sb-lh", this.lh);
    return html`<div class="box"><slot></slot></div>`;
  }
}

export type StyleBoxProps = {
  fz?: string;
  fw?: string;
  lh?: string;
  w?: string;
  h?: string;
  mw?: string;
  mxw?: string;
  mh?: string;
  mxh?: string;
  tt?: string;
  pis?: string;
  pie?: string;
  pbs?: string;
  pbe?: string;
  mbs?: string;
  mbe?: string;
  mis?: string;
  mie?: string;
  mg?: string;
  pd?: string;
  ta?: string;
  op?: string;
  td?: string;
  br?: string;
  px?: string;
  py?: string;
  mx?: string;
  my?: string;
  inline?: boolean;
  block?: boolean;
} 
