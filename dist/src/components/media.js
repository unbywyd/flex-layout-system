var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../utils/resize-observer";
export const MediaSizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
const _window = (typeof window !== "undefined" ? window : {});
let FlexMedia = class FlexMedia extends LitElement {
    constructor() {
        super(...arguments);
        this._targetEl = null;
        this._resizeListener = null;
        this.breakpoints = null;
        this.target = null;
        this.sizes = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this._targetEl = this.getTargetElement();
        if (this._targetEl instanceof Window) {
            this._resizeListener = (event) => {
                this.onResize(event.target.innerWidth);
            };
            _window === null || _window === void 0 ? void 0 : _window.addEventListener("resize", this._resizeListener);
            this.onResize(_window === null || _window === void 0 ? void 0 : _window.innerWidth);
        }
        else {
            if (this._targetEl) {
                this._targetEl.startResizeListener();
            }
            this._resizeListener = (event) => {
                this.onResize(event.detail.width);
            };
            if (this._targetEl) {
                this._targetEl.addEventListener("resize", this._resizeListener);
            }
        }
    }
    onResize(width) {
        this.setMedia(width);
    }
    getTargetElement() {
        if (this.target === "window")
            return _window;
        if (this.target) {
            return document.querySelector(this.target);
        }
        return this;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._targetEl && this._targetEl instanceof HTMLElement) {
            this._targetEl.stopResizeListener();
        }
        else if (this._resizeListener) {
            _window === null || _window === void 0 ? void 0 : _window.removeEventListener("resize", this._resizeListener);
        }
    }
    getMediaString() {
        if (!this.breakpoints) {
            return null;
        }
        const regex = /^(\d+\s*,\s*)*\d+$/;
        if (!regex.test(this.breakpoints)) {
            throw new Error("Invalid breakpoints string, must be comma separated list of numbers");
        }
        let availableNames = MediaSizes;
        const nums = this.breakpoints.split(",").map((item) => {
            return parseInt(item.trim());
        });
        nums.unshift(0);
        if (nums.length > availableNames.length) {
            console.error("Too many breakpoints defined, max is " +
                (availableNames.length - 1) +
                " from sm to xxl");
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
    setMedia(currentWidth) {
        let mediaString = this.getMediaString();
        if (mediaString) {
            let sizes = [];
            for (let i = 0; i < mediaString.length; i++) {
                let { width, mode } = mediaString[i];
                if (currentWidth >= width) {
                    sizes.push(mode);
                }
                else {
                    break;
                }
            }
            if (sizes.length) {
                let str = sizes.map((el) => `[${el}]`).join("");
                this.sizes = str;
            }
        }
        else {
            this.sizes = null;
        }
    }
    render() {
        return html `<slot></slot>`;
    }
};
FlexMedia.styles = css `
    :host {
      box-sizing: border-box;
      display: block;
    }
  `;
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexMedia.prototype, "breakpoints", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexMedia.prototype, "target", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FlexMedia.prototype, "sizes", void 0);
FlexMedia = __decorate([
    customElement("flex-media")
], FlexMedia);
export { FlexMedia };
//# sourceMappingURL=media.js.map