/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Base } from "./base";

@customElement("stacked-box")
export class StackedBox extends Base {
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
export class StackedCell extends Base {
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
    if (this.oc) {
      this.style.setProperty("--f-sc-oc", this.oc);
    } else {
      this.style.removeProperty("--f-sc-oc");
    }
    if (this.xa) {
      this.style.setProperty("--f-sc-s", this.xa);
    } else {
      this.style.removeProperty("--f-sc-s");
    }
    if (this.xb) {
      this.style.setProperty("--f-sc-e", this.xb);
    } else {
      this.style.removeProperty("--f-sc-e");
    }
    if (this.ya) {
      this.style.setProperty("--f-sc-t", this.ya);
    } else {
      this.style.removeProperty("--f-sc-t");
    }
    if (this.yb) {
      this.style.setProperty("--f-sc-b", this.yb);
    } else {
      this.style.removeProperty("--f-sc-b");
    }
    if (this.z) {
      this.style.setProperty("--f-sc-z", this.z);
    } else {
      this.style.removeProperty("--f-sc-z");
    }
    return html`<slot></slot>`;
  }
}

@customElement("fit-box")
export class FitBox extends Base {
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
    if (this.width) {
      this.style.setProperty("--f-fb-w", this.width);
    } else {
      this.style.removeProperty("--f-fb-w");
    }
    if (this.height) {
      this.style.setProperty("--f-fb-h", this.height);
    } else {
      this.style.removeProperty("--f-fb-h");
    }
    return html`<slot></slot>`;
  }
}

@customElement("a-ratio")
export class AspectRatio extends Base {
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

@customElement("flex-divider")
export class FlexDivider extends Base {
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
    if (this.size) {
      this.style.setProperty("--f-vd-ops-size", this.size);
    } else {
      this.style.removeProperty("--f-vd-ops-size");
    }
    if (this.color) {
      this.style.setProperty("--f-divider-bg", this.color);
    } else {
      this.style.removeProperty("--f-divider-bg");
    }
    if (this.width) {
      this.style.setProperty("--f-divider-size", this.width);
    } else {
      this.style.removeProperty("--f-divider-size");
    }
    if (this.mg) {
      this.style.setProperty("--f-divider-m", this.mg);
    } else {
      this.style.removeProperty("--f-divider-m");
    }
    return html``;
  }
}

@customElement("space-box")
export class SpaceBox extends Base {
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
    if (this.size) {
      this.style.setProperty("--f-sbx-w", this.size);
      this.style.setProperty("--f-sbx-h", this.size);
    } else {
      this.style.removeProperty("--f-sbx-w");
      this.style.removeProperty("--f-sbx-h");
    }

    if (this.width) {
      this.style.setProperty("--f-sbx-w", this.width);
    } else if (!this.size) {
      this.style.removeProperty("--f-sbx-w");
    }
    if (this.height) {
      this.style.setProperty("--f-sbx-h", this.height);
    } else {
      this.style.removeProperty("--f-sbx-h");
    }
    return html``;
  }
}

@customElement("s-box")
export class StyleBox extends Base {
  static styles = css`
    :host {
      --f-sb-pis: 0;
      --f-sb-pie: 0;
      --f-sb-mis: 0;
      --f-sb-mie: 0;
      --f-sb-pbs: 0;
      --f-sb-pbe: 0;
      --f-sb-mbs: 0;
      --f-sb-mbe: 0;
      --f-sb-display: var(--f-sb-fallback-display, inline-block);
      --f-sb-color: var(--f-sb-fallback-color, inherit);
      --f-sb-fsz: var(--f-sb-fallback-font-size, 1rem);

      --f-sb-lh: var(--f-sb-fallback-line-height, normal);
      --f-sb-fw: var(--f-sb-fallback-font-weight, normal);
      --f-sb-tt: var(--f-sb-fallback-text-transform, none);
      --f-sb-td: var(--f-sb-fallback-text-decoration, none);

      --f-sb-w: var(--f-sb-fallback-width, auto);
      --f-sb-h: var(--f-sb-fallback-height, auto);
      --f-sb-mw: var(--f-sb-fallback-min-width, auto);
      --f-sb-mxw: var(--f-sb-fallback-max-width, auto);
      --f-sb-mh: var(--f-sb-fallback-min-height, auto);
      --f-sb-mxh: var(--f-sb-fallback-max-height, auto);

      --f-sb-ta: var(--f-sb-fallback-text-align, start);
      --f-sb-op: var(--f-sb-fallback-opacity, 1);
      --f-sb-br: var(--f-sb-fallback-border-radius, 0);

      box-sizing: border-box;
      display: var(--f-sb-display);
      color: var(--f-sb-color);
      font-size: var(--f-sb-fsz);
      line-height: var(--f-sb-lh);
      font-weight: var(--f-sb-fw);
      text-decoration: var(--f-sb-td);
      text-transform: var(--f-sb-tt);

      width: var(--f-sb-w);
      height: var(--f-sb-h);
      min-width: var(--f-sb-mw);
      max-width: var(--f-sb-mxw);
      min-height: var(--f-sb-mh);
      max-height: var(--f-sb-mxh);

      text-align: var(--f-sb-ta);
      opacity: var(--f-sb-op);
      border-radius: var(--f-sb-br);

      padding-inline-start: var(--f-sb-pis);
      padding-inline-end: var(--f-sb-pie);
      padding-block-start: var(--f-sb-pbs);
      padding-block-end: var(--f-sb-pbe);
      margin-inline-start: var(--f-sb-mis);
      margin-inline-end: var(--f-sb-mie);
      margin-block-start: var(--f-sb-mbs);
      margin-block-end: var(--f-sb-mbe);
    }

    :host([inline]) {
      --f-sb-display: inline;
    }
    :host([block]) {
      --f-sb-display: block;
    }

    :host([inherit][td]) ::slotted(*) {
      text-decoration: inherit;
    }
    :host([inherit][fz]) ::slotted(*) {
      font-size: inherit;
    }
    :host([inherit][fw]) ::slotted(*) {
      font-weight: inherit;
    }
    :host([inherit][lh]) ::slotted(*) {
      line-height: inherit;
    }
    :host([inherit][ta]) ::slotted(*) {
      text-align: inherit;
    }
    :host([inherit][tt]) ::slotted(*) {
      text-transform: inherit;
    }
  `;

  @property({ type: String, reflect: true })
  color: string | null = null;

  @property({ type: String, reflect: true })
  scale: string | null = null;

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
    if (this.scale) {
      this.style.setProperty("transform", `scale(${this.scale})`);
    } else {
      // check if scale is set, remote it
      let transform = this.style.getPropertyValue("transform");
      if (transform) {
        transform = transform.replace(/scale\((.*)\)/g, "");
        if (transform.trim() === "") {
          this.style.removeProperty("transform");
        } else {
          this.style.setProperty("transform", transform);
        }
      }
    }
    if (this.color) {
      this.style.setProperty("--f-sb-color", this.color);
    } else {
      this.style.removeProperty("--f-sb-color");
    }
    this.style.removeProperty("--f-sb-pis");
    this.style.removeProperty("--f-sb-pie");
    this.style.removeProperty("--f-sb-pbs");
    this.style.removeProperty("--f-sb-pbe");
    this.style.removeProperty("--f-sb-mis");
    this.style.removeProperty("--f-sb-mie");
    this.style.removeProperty("--f-sb-mbs");
    this.style.removeProperty("--f-sb-mbe");

    if (this.pd) {
      this.style.setProperty("--f-sb-pis", this.pd);
      this.style.setProperty("--f-sb-pie", this.pd);
      this.style.setProperty("--f-sb-pbs", this.pd);
      this.style.setProperty("--f-sb-pbe", this.pd);
    }
    if (this.mg) {
      this.style.setProperty("--f-sb-mis", this.mg);
      this.style.setProperty("--f-sb-mie", this.mg);
      this.style.setProperty("--f-sb-mbs", this.mg);
      this.style.setProperty("--f-sb-mbe", this.mg);
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

    if (this.tt) {
      this.style.setProperty("--f-sb-tt", this.tt);
    } else {
      this.style.removeProperty("--f-sb-tt");
    }
    if (this.w) {
      this.style.setProperty("--f-sb-w", this.w);
    } else {
      this.style.removeProperty("--f-sb-w");
    }
    if (this.h) {
      this.style.setProperty("--f-sb-h", this.h);
    } else {
      this.style.removeProperty("--f-sb-h");
    }
    if (this.mw) {
      this.style.setProperty("--f-sb-mw", this.mw);
    } else {
      this.style.removeProperty("--f-sb-mw");
    }
    if (this.mxw) {
      this.style.setProperty("--f-sb-mxw", this.mxw);
    } else {
      this.style.removeProperty("--f-sb-mxw");
    }
    if (this.mh) {
      this.style.setProperty("--f-sb-mh", this.mh);
    } else {
      this.style.removeProperty("--f-sb-mh");
    }
    if (this.mxh) {
      this.style.setProperty("--f-sb-mxh", this.mxh);
    } else {
      this.style.removeProperty("--f-sb-mxh");
    }
    if (this.pis) {
      this.style.setProperty("--f-sb-pis", this.pis);
    } else {
      this.style.removeProperty("--f-sb-pis");
    }
    if (this.pie) {
      this.style.setProperty("--f-sb-pie", this.pie);
    } else {
      this.style.removeProperty("--f-sb-pie");
    }
    if (this.pbs) {
      this.style.setProperty("--f-sb-pbs", this.pbs);
    } else {
      this.style.removeProperty("--f-sb-pbs");
    }
    if (this.pbe) {
      this.style.setProperty("--f-sb-pbe", this.pbe);
    } else {
      this.style.removeProperty("--f-sb-pbe");
    }
    if (this.mis) {
      this.style.setProperty("--f-sb-mis", this.mis);
    } else {
      this.style.removeProperty("--f-sb-mis");
    }
    if (this.mie) {
      this.style.setProperty("--f-sb-mie", this.mie);
    } else {
      this.style.removeProperty("--f-sb-mie");
    }
    if (this.mbs) {
      this.style.setProperty("--f-sb-mbs", this.mbs);
    } else {
      this.style.removeProperty("--f-sb-mbs");
    }
    if (this.mbe) {
      this.style.setProperty("--f-sb-mbe", this.mbe);
    } else {
      this.style.removeProperty("--f-sb-mbe");
    }
    if (this.ta) {
      this.style.setProperty("--f-sb-ta", this.ta);
    } else {
      this.style.removeProperty("--f-sb-ta");
    }
    if (this.op) {
      this.style.setProperty("--f-sb-op", this.op);
    } else {
      this.style.removeProperty("--f-sb-op");
    }
    if (this.td) {
      this.style.setProperty("--f-sb-td", this.td);
    } else {
      this.style.removeProperty("--f-sb-td");
    }
    if (this.br) {
      this.style.setProperty("--f-sb-br", this.br);
    } else {
      this.style.removeProperty("--f-sb-br");
    }
    if (this.fz) {
      this.style.setProperty("--f-sb-fsz", this.fz);
    } else {
      this.style.removeProperty("--f-sb-fsz");
    }
    if (this.fw) {
      this.style.setProperty("--f-sb-fw", this.fw);
    } else {
      this.style.removeProperty("--f-sb-fw");
    }
    if (this.lh) {
      this.style.setProperty("--f-sb-lh", this.lh);
    } else {
      this.style.removeProperty("--f-sb-lh");
    }
    return html`<slot></slot>`;
  }
}
