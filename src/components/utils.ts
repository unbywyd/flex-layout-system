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
    const styleEl = document.createElement("span");

    if (this.overcolor) {
      styleEl.style.setProperty("--f-sc-oc", this.overcolor);
    } else {
      styleEl.style.setProperty("--f-sc-oc", "rgba(0, 0, 0, 0.5)");
    }
    if (this.xa) {
      styleEl.style.setProperty("--f-sc-s", this.xa);
    } else {
      styleEl.style.setProperty("--f-sc-s", "auto");
    }
    if (this.xb) {
      styleEl.style.setProperty("--f-sc-e", this.xb);
    } else {
      styleEl.style.setProperty("--f-sc-e", "auto");
    }
    if (this.ya) {
      styleEl.style.setProperty("--f-sc-t", this.ya);
    } else {
      styleEl.style.setProperty("--f-sc-t", "auto");
    }
    if (this.yb) {
      styleEl.style.setProperty("--f-sc-b", this.yb);
    } else {
      styleEl.style.setProperty("--f-sc-b", "auto");
    }
    if (this.z) {
      styleEl.style.setProperty("--f-sc-z", this.z);
    } else {
      styleEl.style.setProperty("--f-sc-z", "auto");
    }
    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
  }
}

@customElement("fit-box")
export class FitBox extends LitElement {
  static override styles = css`
    :host {
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
    const styleEl = document.createElement("span");

    if (this.width) {
      styleEl.style.setProperty("--f-fb-w", this.width);
    } else {
      styleEl.style.setProperty("--f-fb-w", "100%");
    }
    if (this.height) {
      styleEl.style.setProperty("--f-fb-h", this.height);
    } else {
      styleEl.style.setProperty("--f-fb-h", "auto");
    }
    return html`<style>:host { ${styleEl.style.cssText}}</style><slot></slot>`;
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
      box-sizing: border-box;
      display: block;
      align-self: center;
    }
    :host([v]) {
      margin-inline: var(--f-divider-m, 0);
      width: var(--f-divider-size, 1px);
      height: var(--f-divider-width, 100%);
    }
    :host([h]) {
      margin-block: var(--f-divider-m, 0);
      height: var(--f-divider-size, 1px);
      width: var(--f-divider-width, 100%);
    }
    :host {
      background-color: var(--f-divider-bg, currentColor);
    }
    :host([stretch][v]) {
      height: auto;      
    }
    :host([stretch][h]) {
      width: auto;
    }
    :host([stretch]) {
      align-self: stretch;
    }
  `;

  @property({ type: Boolean, reflect: true })
  v: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  h: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  stretch: boolean | null = null;

  @property({ type: String, reflect: true })
  mg: string | null = null;

  @property({ type: String, reflect: true })
  color: string | null = null;

  @property({ type: String, reflect: true })
  size: string | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  override render() {
    const styleEl = document.createElement("span");

    if (this.size) {
      styleEl.style.setProperty("--f-divider-size", this.size);
    } else {
      styleEl.style.setProperty("--f-divider-size", `var(--f-divider-fallback-size, 1px)`);
    }
    if (this.width) {
      styleEl.style.setProperty("--f-divider-width", this.width);
    } else {
      styleEl.style.setProperty("--f-divider-width", `var(--f-divider-fallback-width, 100%)`);
    }

    if (this.color) {
      styleEl.style.setProperty("--f-divider-bg", this.color);
    } else {
      styleEl.style.setProperty("--f-divider-bg", `var(--f-divider-fallback-color, currentColor)`);
    }
    if (this.mg) {
      styleEl.style.setProperty("--f-divider-m", this.mg);
    } else {
      styleEl.style.setProperty("--f-divider-m", `var(--f-divider-fallback-margin, 0)`);
    }
    return html`<style>:host {${styleEl.style.cssText}}</style>`;
  }
}

@customElement("space-box")
export class SpaceBox extends LitElement {
  static override styles = css`
    :host {
      box-sizing: border-box;
      display: block;
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
    const styleEl = document.createElement("span");

    if (this.width) {
      styleEl.style.setProperty("--f-sbx-w", this.width);
    } else if (!this.size) {
      styleEl.style.setProperty("--f-sbx-w", "100%");
    }
    if (this.height) {
      styleEl.style.setProperty("--f-sbx-h", this.height);
    } else {
      styleEl.style.setProperty("--f-sbx-h", "auto");
    }
    if (this.size) {
      styleEl.style.setProperty("--f-sbx-w", this.size);
      styleEl.style.setProperty("--f-sbx-h", this.size);
    } else {
      if (!this.width) {
        styleEl.style.setProperty("--f-sbx-w", "100%");
      }
      if (!this.height) {
        styleEl.style.setProperty("--f-sbx-h", "auto");
      }
    }
    return html`<style>:host {${styleEl.style.cssText}}</style>`;
  }
}


@customElement("s-box")
export class StyleBox extends LitElement {
  static override styles = css`
    :host {
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
      flex-grow: var(--f-sb-fg);
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

  @property({ type: String, reflect: true })
  display: string | null = null;

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

  @property({ type: String, reflect: true })
  fg: string | null = null;

  override render() {
    const styleEl = document.createElement("span");

    const value = (val: any) => {
      return this.inherit ? "inherit" : val;
    }
    if (this.display) {
      styleEl.style.setProperty("--f-sb-display", this.display);
    } else {
      styleEl.style.setProperty("--f-sb-display", `var(--f-sb-fallback-display, inline-block)`);
    }
    if (this.fg) {
      styleEl.style.setProperty("--f-sb-fg", this.fg);
    } else {
      styleEl.style.setProperty("--f-sb-fg", `var(--f-sb-fallback-color, inherit)`);
    }
    if (this.transform) {
      styleEl.style.setProperty("transform", this.transform);
    } else {
      styleEl.style.removeProperty("transform");
    }
    if (this.bgi) {
      styleEl.style.setProperty("--f-sb-bgi", this.bgi);
    } else {
      styleEl.style.setProperty("--f-sb-bgi", `var(--f-sb-fallback-background-image, ${value("none")})`);
    }
    if (this.bgr) {
      styleEl.style.setProperty("--f-sb-bgr", this.bgr);
    } else {
      styleEl.style.setProperty("--f-sb-bgr", `var(--f-sb-fallback-background-repeat, ${value("no-repeat")})`);
    }
    if (this.bgp) {
      styleEl.style.setProperty("--f-sb-bgp", this.bgp);
    } else {
      styleEl.style.setProperty("--f-sb-bgp", `var(--f-sb-fallback-background-position, ${value("0 0")})`);
    }
    if (this.bgs) {
      styleEl.style.setProperty("--f-sb-bgs", this.bgs);
    } else {
      styleEl.style.setProperty("--f-sb-bgs", `var(--f-sb-fallback-background-size, ${value("auto")})`);
    }
    if (this.bga) {
      styleEl.style.setProperty("--f-sb-bga", this.bga);
    } else {
      styleEl.style.setProperty("--f-sb-bga", `var(--f-sb-fallback-background-attachment, ${value("scroll")})`);
    }
    if (this.bgc) {
      styleEl.style.setProperty("--f-sb-bgc", this.bgc);
    } else {
      styleEl.style.setProperty("--f-sb-bgc", `var(--f-sb-fallback-background-color, ${value("transparent")})`);
    }
    if (this.color) {
      styleEl.style.setProperty("--f-sb-color", this.color);
    } else {
      styleEl.style.setProperty("--f-sb-color", "var(--f-sb-fallback-color, inherit)");
    }

    styleEl.style.setProperty("--f-sb-pis", '0');
    styleEl.style.setProperty("--f-sb-pie", '0');
    styleEl.style.setProperty("--f-sb-pbs", '0');
    styleEl.style.setProperty("--f-sb-pbe", '0');

    styleEl.style.setProperty("--f-sb-mis", '0');
    styleEl.style.setProperty("--f-sb-mie", '0');
    styleEl.style.setProperty("--f-sb-mbs", '0');
    styleEl.style.setProperty("--f-sb-mbe", '0');

    if (this.pd) {
      styleEl.style.setProperty("--f-sb-pis", this.pd);
      styleEl.style.setProperty("--f-sb-pie", this.pd);
      styleEl.style.setProperty("--f-sb-pbs", this.pd);
      styleEl.style.setProperty("--f-sb-pbe", this.pd);
    }
    if (this.mg) {
      styleEl.style.setProperty("--f-sb-mis", this.mg);
      styleEl.style.setProperty("--f-sb-mie", this.mg);
      styleEl.style.setProperty("--f-sb-mbs", this.mg);
      styleEl.style.setProperty("--f-sb-mbe", this.mg);
    }

    if (this.px) {
      styleEl.style.setProperty("--f-sb-pis", this.px);
      styleEl.style.setProperty("--f-sb-pie", this.px);
    }
    if (this.py) {
      styleEl.style.setProperty("--f-sb-pbs", this.py);
      styleEl.style.setProperty("--f-sb-pbe", this.py);
    }
    if (this.mx) {
      styleEl.style.setProperty("--f-sb-mis", this.mx);
      styleEl.style.setProperty("--f-sb-mie", this.mx);
    }
    if (this.my) {
      styleEl.style.setProperty("--f-sb-mbs", this.my);
      styleEl.style.setProperty("--f-sb-mbe", this.my);
    }

    if (this.tt) {
      styleEl.style.setProperty("--f-sb-tt", this.tt);
    } else {
      styleEl.style.setProperty("--f-sb-tt", `var(--f-sb-fallback-text-transform, ${value("none")})`);
    }
    if (this.w) {
      styleEl.style.setProperty("--f-sb-w", this.w);
    } else {
      styleEl.style.setProperty("--f-sb-w", `var(--f-sb-fallback-width, ${value("auto")})`);
    }
    if (this.h) {
      styleEl.style.setProperty("--f-sb-h", this.h);
    } else {
      styleEl.style.setProperty("--f-sb-h", `var(--f-sb-fallback-height, ${value("auto")})`);
    }
    if (this.mw) {
      styleEl.style.setProperty("--f-sb-mw", this.mw);
    } else {
      styleEl.style.setProperty("--f-sb-mw", `var(--f-sb-fallback-min-width, ${value("auto")})`);
    }
    if (this.mxw) {
      styleEl.style.setProperty("--f-sb-mxw", this.mxw);
    } else {
      styleEl.style.setProperty("--f-sb-mxw", `var(--f-sb-fallback-max-width, ${value("auto")})`);
    }
    if (this.mh) {
      styleEl.style.setProperty("--f-sb-mh", this.mh);
    } else {
      styleEl.style.setProperty("--f-sb-mh", `var(--f-sb-fallback-min-height, ${value("auto")})`);
    }
    if (this.mxh) {
      styleEl.style.setProperty("--f-sb-mxh", this.mxh);
    } else {
      styleEl.style.setProperty("--f-sb-mxh", `var(--f-sb-fallback-max-height, ${value("auto")})`);
    }
    if (this.pis) {
      styleEl.style.setProperty("--f-sb-pis", this.pis);
    }
    if (this.pie) {
      styleEl.style.setProperty("--f-sb-pie", this.pie);
    }
    if (this.pbs) {
      styleEl.style.setProperty("--f-sb-pbs", this.pbs);
    }
    if (this.pbe) {
      styleEl.style.setProperty("--f-sb-pbe", this.pbe);
    }
    if (this.mis) {
      styleEl.style.setProperty("--f-sb-mis", this.mis);
    }
    if (this.mie) {
      styleEl.style.setProperty("--f-sb-mie", this.mie);
    }
    if (this.mbs) {
      styleEl.style.setProperty("--f-sb-mbs", this.mbs);
    }
    if (this.mbe) {
      styleEl.style.setProperty("--f-sb-mbe", this.mbe);
    }
    if (this.ta) {
      styleEl.style.setProperty("--f-sb-ta", this.ta);
    } else {
      styleEl.style.setProperty("--f-sb-ta", `var(--f-sb-fallback-text-align, ${value("start")})`);
    }
    if (this.op) {
      styleEl.style.setProperty("--f-sb-op", this.op);
    } else {
      styleEl.style.setProperty("--f-sb-op", `var(--f-sb-fallback-opacity, ${value("1")})`);
    }
    if (this.td) {
      styleEl.style.setProperty("--f-sb-td", this.td);
    } else {
      styleEl.style.setProperty("--f-sb-td", `var(--f-sb-fallback-text-decoration, ${value("none")})`);
    }
    if (this.br) {
      styleEl.style.setProperty("--f-sb-br", this.br);
    } else {
      styleEl.style.setProperty("--f-sb-br", `var(--f-sb-fallback-border-radius, ${value("0")})`);
    }
    if (this.fz) {
      styleEl.style.setProperty("--f-sb-fsz", this.fz);
    } else {
      styleEl.style.setProperty("--f-sb-fsz", `var(--f-sb-fallback-font-size, ${value("1rem")})`);
    }
    if (this.fw) {
      styleEl.style.setProperty("--f-sb-fw", this.fw);
    } else {
      styleEl.style.setProperty("--f-sb-fw", `var(--f-sb-fallback-font-weight, ${value("normal")})`);
    }
    if (this.lh) {
      styleEl.style.setProperty("--f-sb-lh", this.lh);
    } else {
      styleEl.style.setProperty("--f-sb-lh", `var(--f-sb-fallback-line-height, ${value("normal")})`);
    }
    const styles = styleEl.style.cssText;
    return html`<style>:host {${styles}}</style><slot></slot>`;
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
