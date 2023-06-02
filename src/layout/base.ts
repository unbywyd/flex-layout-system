/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("flex-canvas")
export class Canvas extends LitElement {
  static defaultProps: {
    maxWidth: string;
    display: string;
    margin: string;
    padding: string;
  } = {
    maxWidth: "1400px",
    display: "block",
    margin: "0 auto",
    padding: "0",
  };

  static styles = css`
    :host {
      box-sizing: border-box;
      display: var(
        --flex-canvas-display,
        ${unsafeCSS(Canvas.defaultProps.display)}
      );
      margin: var(
        --flex-canvas-margin,
        ${unsafeCSS(Canvas.defaultProps.margin)}
      );
      max-width: var(
        --flex-canvas-max-width,
        ${unsafeCSS(Canvas.defaultProps.maxWidth)}
      );
      padding: var(--flex-canvas-padding, Canvas.defaultProps.padding);
    }

    :host ::slotted(*) {
      --flex-canvas-display: ${unsafeCSS(Canvas.defaultProps.display)};
      --flex-canvas-margin: ${unsafeCSS(Canvas.defaultProps.margin)};
      --flex-canvas-max-width: ${unsafeCSS(Canvas.defaultProps.maxWidth)};
      --flex-canvas-padding: ${unsafeCSS(Canvas.defaultProps.padding)};
    }
  `;

  @property({ type: String, reflect: true })
  width: string | null = null;

  @property({ type: String, reflect: true })
  margin: string | null = null;

  render() {
    if (this.width) {
      this.style.setProperty("--flex-container-max-width", this.width);
    }
    if (this.margin) {
      this.style.setProperty("--flex-container-margin", this.margin);
    }
    return html`<slot></slot>`;
  }
}

@customElement("flex-centerbox")
export class CenterBox extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    :host(.full-height) {
      min-height: 100vh;
    }
  `;
  render() {
    return html`<div><slot></slot></div>`;
  }
}

@customElement("flex-container")
export class Container extends LitElement {
  static defaultProps: {
    reverse: boolean;
    display: "flex" | "inline-flex";
    mode: "row" | "column";
    wrap: boolean;
    justifyContent: string;
    alignItems: string;
    alignContent: string;
    gap: string;
  } = {
    reverse: false,
    display: "flex",
    mode: "row",
    wrap: true,
    gap: "0",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  };
  get mode() {
    if (!this.row && !this.column) {
      return Container.defaultProps.mode;
    }
    return this.row ? "row" : "column";
  }
  static styles = css`
    :host([nowrap]) {
      flex-wrap: nowrap;
    }
    :host([row]) {
      flex-direction: row;
    }
    :host([column]) {
      flex-direction: column;
    }
    :host([reverse][row]) {
      flex-direction: row-reverse;
    }
    :host([reverse][column]) {
      flex-direction: column-reverse;
    }
    :host([inline]) {
      display: inline-flex;
    }
    :host([center]) {
      align-items: center;
      justify-content: center;
    }
    :host([middle]) {
      align-items: center;
    }
    :host([spread]) {
      justify-content: space-between;
    }
    :host([start]) {
      justify-content: flex-start;
      align-items: flex-start;
    }
    :host([end]) {
      justify-content: flex-end;
      align-items: flex-end;
    }
    :host([ai="flex-start"]) {
      align-items: flex-start;
    }
    :host([ai="flex-end"]) {
      align-items: flex-end;
    }
    :host([ai="center"]) {
      align-items: center;
    }
    :host([ai="baseline"]) {
      align-items: baseline;
    }
    :host([ai="stretch"]) {
      align-items: stretch;
    }
    :host([jc="flex-start"]) {
      justify-content: flex-start;
    }
    :host([jc="flex-end"]) {
      justify-content: flex-end;
    }
    :host([jc="center"]) {
      justify-content: center;
    }
    :host([jc="space-between"]) {
      justify-content: space-between;
    }
    :host([jc="space-around"]) {
      justify-content: space-around;
    }
    :host([jc="space-evenly"]) {
      justify-content: space-evenly;
    }
    :host([jc="start"]) {
      justify-content: flex-start;
    }
    :host([jc="end"]) {
      justify-content: flex-end;
    }
    :host([ac="start"]) {
      align-content: flex-start;
    }
    :host([ac="end"]) {
      align-content: flex-end;
    }
    :host([ac="center"]) {
      align-content: center;
    }
    :host([ac="space-between"]) {
      align-content: space-between;
    }
    :host([ac="space-around"]) {
      align-content: space-around;
    }
    :host([ac="space-evenly"]) {
      align-content: space-evenly;
    }
    :host([ac="stretch"]) {
      align-content: stretch;
    }
    :host {
      box-sizing: border-box;
      display: var(
        --flex-container-display,
        ${unsafeCSS(Container.defaultProps.display)}
      );
      flex-direction: var(
        --flex-container-direction,
        ${unsafeCSS(
          Container.defaultProps.reverse
            ? Container.defaultProps.mode + "-reverse"
            : Container.defaultProps.mode
        )}
      );
      gap: var(--flex-container-gap, ${unsafeCSS(Container.defaultProps.gap)});
      flex-wrap: var(
        --flex-container-wrap,
        ${unsafeCSS(Container.defaultProps.wrap ? "wrap" : "nowrap")}
      );
      justify-content: var(
        --flex-container-justify-content,
        ${unsafeCSS(Container.defaultProps.justifyContent)}
      );
      align-items: var(
        --flex-container-align-items,
        ${unsafeCSS(Container.defaultProps.alignItems)}
      );
      align-content: var(
        --flex-container-align-content,
        ${unsafeCSS(Container.defaultProps.alignContent)}
      );
    }

    :host ::slotted(*) {
      --flex-container-display: ${unsafeCSS(Container.defaultProps.display)};
      --flex-container-wrap: ${unsafeCSS(
        Container.defaultProps.wrap ? "wrap" : "nowrap"
      )};
      --flex-container-justify-content: ${unsafeCSS(
        Container.defaultProps.justifyContent
      )};
      --flex-container-align-items: ${unsafeCSS(
        Container.defaultProps.alignItems
      )};
      --flex-container-align-content: ${unsafeCSS(
        Container.defaultProps.alignContent
      )};
      --flex-container-gap: ${unsafeCSS(Container.defaultProps.gap)};
    }

    :host([fill]) ::slotted(flex-cell:not([priority])) {
      flex: 1 1 auto;
    }
    :host([fit]) ::slotted(flex-cell:not([priority])) {
      flex: 1;
    }
    :host([snug]) ::slotted(flex-cell:not([priority])) {
      flex: 0;
    }
  `;

  @property({ type: Boolean, reflect: true })
  row: boolean | null = null;

  @property({ type: Boolean, reflect: true })
  column: boolean | null = null;

  @property({ type: String, reflect: true })
  gap: string | null = null;

  render() {
    if (this.gap) {
      this.style.setProperty("--flex-container-gap", this.gap);
    }
    if (this.row && this.column) {
      throw new Error("flex-container cannot be both row and column");
    }
    return html`<slot></slot>`;
  }
}

@customElement("flex-grid")
export class Grid extends LitElement {
  static styles = css`
    :host { 
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      padding: var(--flex-grid-gap, 0);
    }
    :host([flex]) {
      display: flex;
    }
    :host ::slotted(flex-container) {
      --flex-grid-padding: var(--flex-grid-gap);
    }
    :host ::slotted(flex-container) {
      margin: calc(-1 * var(--flex-grid-gap));
    }
  `;

  @property({ type: String, reflect: true })
  gap: string | null = null;
  render() {
    if (this.gap) {
      this.style.setProperty("--flex-grid-gap", this.gap);
    }
    return html`<slot></slot>`;
  }
}

@customElement("flex-cell")
export class FlexCell extends LitElement {
  static defaultProps: {
    display: string;
  } = {
    display: "block",
  };
  static styles = css`
    :host {
      box-sizing: border-box;
      display: var(
        --flex-cell-display,
        ${unsafeCSS(FlexCell.defaultProps.display)}
      );
      padding: var(--flex-grid-padding, 0);
      flex-basis: var(--flex-cell-basis, auto);
      max-width: var(--flex-cell-basis, none);
      order: var(--flex-cell-order, 0);
      flex-grow: var(--flex-cell-grow, 0);
      flex-shrink: var(--flex-cell-shrink, 1);
    }
    ::slotted(*) {
      --flex-grid-padding: 0;
      --flex-cell-display: ${unsafeCSS(FlexCell.defaultProps.display)};
      --flex-cell-basis: auto;
      --flex-cell-order: 0;
      --flex-cell-grow: 0;
      --flex-cell-shrink: 1;
    }
    :host(.cell-1) {
      flex-basis: 8.3333333333%;
      max-width: 8.3333333333%;
    }
    :host(.cell-2) {
      flex-basis: 16.6666666667%;
      max-width: 16.6666666667%;
    }
    :host(.cell-3) {
      flex-basis: 25%;
      max-width: 25%;
    }
    :host(.cell-4) {
      flex-basis: 33.3333333333%;
      max-width: 33.3333333333%;
    }
    :host(.cell-5) {
      flex-basis: 41.6666666667%;
      max-width: 41.6666666667%;
    }
    :host(.cell-6) {
      flex-basis: 50%;
      max-width: 50%;
    }
    :host(.cell-7) {
      flex-basis: 58.3333333333%;
      max-width: 58.3333333333%;
    }
    :host(.cell-8) {
      flex-basis: 66.6666666667%;
      max-width: 66.6666666667%;
    }
    :host(.cell-9) {
      flex-basis: 75%;
      max-width: 75%;
    }
    :host(.cell-10) {
      flex-basis: 83.3333333333%;
      max-width: 83.3333333333%;
    }
    :host(.cell-11) {
      flex-basis: 91.6666666667%;
      max-width: 91.6666666667%;
    }
    :host(.cell-12) {
      flex-basis: 100%;
      max-width: 100%;
    }
    :host([flex]) {
      display: flex;
    }
    :host([iflex]) {
      display: inline-flex;
    }
    :host([iblock]) {
      display: inline-block;
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
    :host([order="0"]) {
      order: 0;
    }
    :host([order="1"]) {
      order: 1;
    }
    :host([order="2"]) {
      order: 2;
    }
    :host([order="3"]) {
      order: 3;
    }
    :host([order="4"]) {
      order: 4;
    }
    :host([order="5"]) {
      order: 5;
    }
    :host([order="6"]) {
      order: 6;
    }
    :host([order="7"]) {
      order: 7;
    }
    :host([order="8"]) {
      order: 8;
    }
    :host([order="9"]) {
      order: 9;
    }
    :host([order="10"]) {
      order: 10;
    }
    :host([grow="0"]) {
      flex-grow: 0;
    }
    :host([grow="1"]) {
      flex-grow: 1;
    }
    :host([grow="2"]) {
      flex-grow: 2;
    }
    :host([grow="3"]) {
      flex-grow: 3;
    }
    :host([grow="4"]) {
      flex-grow: 4;
    }
    :host([grow="5"]) {
      flex-grow: 5;
    }
    :host([grow="6"]) {
      flex-grow: 6;
    }
    :host([grow="7"]) {
      flex-grow: 7;
    }
    :host([grow="8"]) {
      flex-grow: 8;
    }
    :host([grow="9"]) {
      flex-grow: 9;
    }
    :host([grow="10"]) {
      flex-grow: 10;
    }
    :host([shrink="0"]) {
      flex-shrink: 0;
    }
    :host([shrink="1"]) {
      flex-shrink: 1;
    }
    :host([shrink="2"]) {
      flex-shrink: 2;
    }
    :host([shrink="3"]) {
      flex-shrink: 3;
    }
    :host([shrink="4"]) {
      flex-shrink: 4;
    }
    :host([shrink="5"]) {
      flex-shrink: 5;
    }
    :host([shrink="6"]) {
      flex-shrink: 6;
    }
    :host([shrink="7"]) {
      flex-shrink: 7;
    }
    :host([shrink="8"]) {
      flex-shrink: 8;
    }
    :host([shrink="9"]) {
      flex-shrink: 9;
    }
    :host([shrink="10"]) {
      flex-shrink: 10;
    }
  `;

  @property({ type: Number, reflect: true })
  order: number | null = null;

  @property({ type: Number, reflect: true })
  grow: number | null = null;

  @property({ type: Number, reflect: true })
  shrink: number | null = null;

  @property({ type: String, reflect: true })
  width: string | null = null;

  render() {
    if (this.width) {
      this.style.setProperty("--flex-cell-basis", this.width);
    }
    if ((this.order && this.order < 0) || this.order > 10) {
      this.style.setProperty("--flex-cell-order", this.order.toString());
    }
    if ((this.grow && this.grow > 10) || this.grow < 0) {
      this.style.setProperty("--flex-cell-grow", this.grow.toString());
    }
    if ((this.shrink && this.shrink > 10) || this.shrink < 0) {
      this.style.setProperty("--flex-cell-shrink", this.shrink.toString());
    }
    return html`<slot></slot>`;
  }
}
