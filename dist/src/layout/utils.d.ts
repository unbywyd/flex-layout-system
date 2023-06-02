import { LitElement } from "lit";
export declare class StackedContainer extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class StackedItem extends LitElement {
    static styles: import("lit").CSSResult;
    xa: string | null;
    xb: string | null;
    ya: string | null;
    yb: string | null;
    z: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FitConainer extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FillConainer extends LitElement {
    static styles: import("lit").CSSResult;
    width: string | null;
    height: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class AspectRatio extends LitElement {
    static defaultProps: {
        display: string;
    };
    static styles: import("lit").CSSResult;
    center: boolean;
    ratio: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class SpaceBox extends LitElement {
    static styles: import("lit").CSSResult;
    width: string | null;
    height: string | null;
    pd: string | null;
    mg: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
