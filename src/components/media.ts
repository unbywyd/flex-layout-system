import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import "../utils/resize-observer";
import { Base } from "./base";

declare global {
  interface HTMLElement {
    startResizeListener(): void;
    stopResizeListener(): void;
  }
}

@customElement("flex-media")
export class FlexMediaBox extends Base {
  _targetEl: HTMLElement | Window | null = null;
  _resizeListener: any = null;
  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
    }
  `;
  connectedCallback() {
    super.connectedCallback();
    this._targetEl = this.getTargetElement();
    if (this._targetEl instanceof Window) {
      window.addEventListener("resize", (event: any) => {
        this.onResize((event.target as Window).innerWidth);
      });
      this.onResize(window.innerWidth);
    } else {
      this._targetEl.startResizeListener();
      this._resizeListener = (event: any) => {
        this.onResize((event.detail as DOMRectReadOnly).width);
      };
      this._targetEl.addEventListener("resize", this._resizeListener);
    }
  }
  onResize(width: number) {
    this.setMedia(width);
  }
  getTargetElement(): HTMLElement | null | Window {
    if (this.target === "window") return window;
    if (this.target) {
      return document.querySelector(this.target) as HTMLElement;
    }
    return this;
  }
  @property({ type: String, reflect: true })
  breakpoints: string | null = null;

  @property({ type: String, reflect: true })
  target: string | null = null;

  @property({ type: String, reflect: true })
  sizes: string | null = null;

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._targetEl && this._targetEl instanceof HTMLElement) {
      this._targetEl.stopResizeListener();
    } else if (this._resizeListener) {
      window.removeEventListener("resize", this._resizeListener);
    }
  }
  getMediaString(): Array<{
    width: number;
    mode: string;
  }> | null {
    if (!this.breakpoints) {
      return null;
    }
    const regex = /^(\d+\s*,\s*)*\d+$/;

    if (!regex.test(this.breakpoints)) {
      throw new Error(
        "Invalid breakpoints string, must be comma separated list of numbers"
      );
    }

    let availableNames = ["xs", "sm", "md", "lg", "xl", "xxl"];

    const nums = this.breakpoints.split(",").map((item) => {
      return parseInt(item.trim());
    });
    nums.unshift(0);
    if (nums.length > availableNames.length) {
      console.error(
        "Too many breakpoints defined, max is " +
          (availableNames.length - 1) +
          " from sm to xxl"
      );
    }
    let mediaString = [];
    for (let i = 0; i < nums.length; i++) {
      mediaString.push({
        width: nums[i],
        mode: availableNames[i],
      });
    }
    return mediaString;
  }
  setMedia(currentWidth: number) {
    let mediaString = this.getMediaString();

    if (mediaString) {
      let sizes = [];
      for (let i = 0; i < mediaString.length; i++) {
        let { width, mode } = mediaString[i];

        if (currentWidth >= width) {
          sizes.push(mode);
        } else {
          break;
        }
      }

      if (sizes.length) {
        let str = sizes.map((el) => `[${el}]`).join("");
        this.sizes = str;
      }
    }
  }
  render() {
    return html`<slot></slot>`;
  }
}
