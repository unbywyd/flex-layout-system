import { LitElement } from "lit";
import "../utils/resize-observer";
declare global {
    interface HTMLElement {
        startResizeListener(): void;
        stopResizeListener(): void;
    }
}
export declare class FlexMedia extends LitElement {
    _targetEl: HTMLElement | Window | null;
    _resizeListener: any;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    onResize(width: number): void;
    getTargetElement(): HTMLElement | null | Window;
    breakpoints: string | null;
    target: string | null;
    sizes: string | null;
    disconnectedCallback(): void;
    getMediaString(): Array<{
        width: number;
        mode: string;
    }> | null;
    setMedia(currentWidth: number): void;
    render(): import("lit-html").TemplateResult<1>;
}
