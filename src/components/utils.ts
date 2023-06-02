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

@customElement("stacked-item")
export class StackedItem extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      box-sizing: border-box;
      inset-inline-start: var(--stacked-item-start, auto);
      inset-inline-end: var(--stacked-item-end, auto);
      inset-block-start: var(--stacked-item-top, auto);
      inset-block-end: var(--stacked-item-bottom, auto);
      z-index: var(--stacked-item-z-index, auto);
    }
    :host([rel]) {
      position: relative;
    }

    :host ::slotted(*) {
      --stacked-item-start: auto;
      --stacked-item-end: auto;
      --stacked-item-top: auto;
      --stacked-item-bottom: auto;
      --stacked-item-z-index: auto;
    }

    :host([stretch]) {
      inset-inline-start: 0;
      inset-inline-end: 0;
      inset-block-start: 0;
      inset-block-end: 0;
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

  render() {
    if (this.xa) this.style.setProperty("--stacked-item-start", this.xa);
    if (this.xb) this.style.setProperty("--stacked-item-end", this.xb);
    if (this.ya) this.style.setProperty("--stacked-item-top", this.ya);
    if (this.yb) this.style.setProperty("--stacked-item-bottom", this.yb);
    if (this.z) this.style.setProperty("--stacked-item-z-index", this.z);

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
    :host([flex]) {
      display: flex;
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
    :host ::slotted(*) {
      width: 100%;
      height: 100%;
      --fill-container-width: 100%;
      --fill-container-height: auto;
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
      display: block;
      width: var(--space-box-width, 100%);
      height: var(--space-box-height, auto);
      padding: var(--space-box-padding, 0);
      margin: var(--space-box-margin, 0);
    }

    :host ::slotted(*) {
      --space-box-width: 100%;
      --space-box-height: auto;
      --space-box-padding: 0;
      --space-box-margin: 0;
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

  render() {
    if (this.width) this.style.setProperty("--space-box-width", this.width);
    if (this.height) this.style.setProperty("--space-box-height", this.height);
    if (this.pd) this.style.setProperty("--space-box-padding", this.pd);
    if (this.mg) this.style.setProperty("--space-box-margin", this.mg);
    return html`<slot></slot>`;
  }
}
