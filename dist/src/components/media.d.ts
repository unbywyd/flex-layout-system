import "../utils/resize-observer";
import { Base } from "./base";
declare global {
    interface HTMLElement {
        startResizeListener(): void;
        stopResizeListener(): void;
    }
}
export declare class FlexMediaBox extends Base {
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
export type FlexMediaProps = {
    breakpoints?: string;
    target?: string;
    readonly sizes?: string;
};
