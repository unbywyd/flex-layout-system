/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("stacked-box")
export class StackedBox extends LitElement {
  static override styles = css`
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

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  override render() {
    return html` <slot></slot> `;
  }
}

@customElement("stacked-cell")
export class StackedCell extends LitElement {
  static override styles = css`
    :host {
      --f-sc-s: auto;
      --f-sc-e: auto;
      --f-sc-t: auto;
      --f-sc-b: auto;
      --f-sc-z: auto;
      position: absolute;
      box-sizing: border-box;
      inset-inline-start: var(--f-sc-s);
      inset-inline-end: var(--f-sc-e);
      inset-block-start: var(--f-sc-t);
      inset-block-end: var(--f-sc-b);
      z-index: var(--f-sc-z);
    }
    :host([rel]) {
      position: relative;
    }
    :host([overlay]) {
      background: var(--f-sc-oc, rgba(0, 0, 0, 0.5));
    }
    :host([stretch]) {
      inset: 0;
    }
  `;

  @property({ type: Boolean, reflect: true })
  rel: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  overlay: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  stretch: boolean | null = null;

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
  overcolor: string | null = null;

  override render() {
    if (this.overcolor) {
      this.style.setProperty("--f-sc-oc", this.overcolor);
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
export class FitBox extends LitElement {
  static override styles = css`
    :host {
      --f-fb-w: 100%;
      --f-fb-h: auto;
      display: block;
      box-sizing: border-box;
      position: relative;
      width: var(--f-fb-w);
      height: var(--f-fb-h);
    }
    :host([flex]) {
      display: flex;
    }
    :host([stretch]) {
      width: 100% !important;
      height: 100% !important;
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
      width: 100% !important;
      height: 100% !important;
    }
    :host([round]) {
      overflow: hidden;
      border-radius: 50%;
    }
    :host([cover]) ::slotted(img) {
      object-fit: cover;
      object-position: center;
      width: 100% !important;
      height: 100%;
    }
    :host([contain]) ::slotted(img) {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  `;
  @property({ type: Boolean, reflect: true })
  stretch: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  flex: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  scrollable: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  center: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  fill: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  round: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  cover: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  contain: boolean | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  override render() {
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
export class AspectRatio extends LitElement {
  static defaultProps: {
    display: string;
  } = {
    display: "flex",
  };

  static override styles = css`
    :host {
      --f-ar-v: auto;
      box-sizing: border-box;
      aspect-ratio: var(--f-ar-v);
    }
    :host[crop] {
      overflow: hidden;
    }
    :host([fit]) ::slotted(*) {
      width: 100% !important;
      height: 100% !important;
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
  fit: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  center: boolean | null = null;

  @property({ type: String, reflect: true })
  ratio: string | null = null;

  override render() {
    return html`<slot></slot>`;
  }
}

@customElement("flex-divider")
export class FlexDivider extends LitElement {
  static override styles = css`
    :host {
      --f-divider-size: 2px;
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

  @property({ type: Boolean, reflect: true })
  dark: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  v: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  h: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  stretch: boolean | null = null;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  color: string | null = null;

  @property({ type: String, reflect: true })
  size: string | null = null;

  override render() {
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
export class SpaceBox extends LitElement {
  static override styles = css`
    :host {
      --f-sbx-db: block;
      --f-sbx-w: 100%;
      --f-sbx-h: auto;
      box-sizing: border-box;
      display: var(--f-sbx-db);
      width: var(--f-sbx-w);
      height: var(--f-sbx-h);
    }
  `;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  height: string | null = null;

  @property({ type: String, reflect: true })
  size: string | null = null;

  override render() {
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
export class StyleBox extends LitElement {
  static override styles = css`
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
      --f-sb-bgc: var(--f-sb-fallback-background-color, transparent);
      --f-sb-bgi: var(--f-sb-fallback-background-image, none);
      --f-sb-bgr: var(--f-sb-fallback-background-repeat, no-repeat);
      --f-sb-bgp: var(--f-sb-fallback-background-position, 0 0);
      --f-sb-bgs: var(--f-sb-fallback-background-size, auto);
      --f-sb-bga: var(--f-sb-fallback-background-attachment, scroll);
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
      background-color: var(--f-sb-bgc);
      background-image: var(--f-sb-bgi);
      background-repeat: var(--f-sb-bgr);
      background-position: var(--f-sb-bgp);
      background-size: var(--f-sb-bgs);
      background-attachment: var(--f-sb-bga);
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
    :host([nowrap]) {
      white-space: nowrap;
    }
    :host([wrap]) {
      white-space: pre-wrap;
    }
    :host([inline]) {
      --f-sb-display: inline;
    }
    :host([block]) {
      --f-sb-display: block;
    }
    :host([crop]) {
      overflow: hidden;
    }
    :host([scrollable]) {
      overflow: auto;
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

  @property({ type: Boolean, reflect: true })
  inline: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  block: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  crop: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  scrollable: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  inherit: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  nowrap: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  wrap: boolean | null = null;

  @property({ type: String, reflect: true })
  color: string | null = null;

  @property({ type: String, reflect: true })
  bgc: string | null = null;

  @property({ type: String, reflect: true })
  bgi: string | null = null;

  @property({ type: String, reflect: true })
  bgr: string | null = null;

  @property({ type: String, reflect: true })
  bgp: string | null = null;

  @property({ type: String, reflect: true })
  bgs: string | null = null;

  @property({ type: String, reflect: true })
  bga: string | null = null;

  @property({ type: String, reflect: true })
  transform: string | null = null;

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

  override render() {
    if (this.transform) {
      this.style.setProperty("transform", this.transform);
    } else {
      this.style.removeProperty("transform");
    }

    if (this.bgi) {
      this.style.setProperty("--f-sb-bgi", this.bgi);
    } else {
      this.style.removeProperty("--f-sb-bgi");
    }

    if (this.bgr) {
      this.style.setProperty("--f-sb-bgr", this.bgr);
    } else {
      this.style.removeProperty("--f-sb-bgr");
    }

    if (this.bgp) {
      this.style.setProperty("--f-sb-bgp", this.bgp);
    } else {
      this.style.removeProperty("--f-sb-bgp");
    }

    if (this.bgs) {
      this.style.setProperty("--f-sb-bgs", this.bgs);
    } else {
      this.style.removeProperty("--f-sb-bgs");
    }

    if (this.bga) {
      this.style.setProperty("--f-sb-bga", this.bga);
    } else {
      this.style.removeProperty("--f-sb-bga");
    }

    if (this.bgc) {
      this.style.setProperty("--f-sb-bgc", this.bgc);
    } else {
      this.style.removeProperty("--f-sb-bgc");
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
    }
    if (this.pie) {
      this.style.setProperty("--f-sb-pie", this.pie);
    }
    if (this.pbs) {
      this.style.setProperty("--f-sb-pbs", this.pbs);
    }
    if (this.pbe) {
      this.style.setProperty("--f-sb-pbe", this.pbe);
    }
    if (this.mis) {
      this.style.setProperty("--f-sb-mis", this.mis);
    }
    if (this.mie) {
      this.style.setProperty("--f-sb-mie", this.mie);
    }
    if (this.mbs) {
      this.style.setProperty("--f-sb-mbs", this.mbs);
    }
    if (this.mbe) {
      this.style.setProperty("--f-sb-mbe", this.mbe);
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

@customElement("sr-only")
export class ScreenReaderOnly extends LitElement {
  static override styles = css`
    :host {
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
    :host([focusable]:focus) {
      position: relative !important;
      width: auto !important;
      height: auto !important;
      clip: initial !important;
      margin: inherit !important;
      padding: inherit !important;
      border: initial !important;
      overflow: initial !important;
      white-space: initial !important;
    }
  `;

  @property({ type: Boolean, reflect: true })
  focusable: boolean = false;

  override render() {
    return html`<slot></slot>`;
  }
}

@customElement("ltr-only")
export class LtrOnly extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      direction: ltr;
    }
  `;
  override render() {
    return html`<slot></slot>`;
  }
}
