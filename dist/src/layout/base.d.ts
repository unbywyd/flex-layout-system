import { LitElement } from "lit";
export declare class Canvas extends LitElement {
    static defaultProps: {
        maxWidth: string;
        display: string;
        margin: string;
        padding: string;
    };
    static styles: import("lit").CSSResult;
    width: string | null;
    margin: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class CenterBox extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class Container extends LitElement {
    static defaultProps: {
        reverse: boolean;
        display: "flex" | "inline-flex";
        mode: "row" | "column";
        wrap: boolean;
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        gap: string;
    };
    get mode(): "row" | "column";
    static styles: import("lit").CSSResult;
    row: boolean | null;
    column: boolean | null;
    gap: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class Grid extends LitElement {
    static styles: import("lit").CSSResult;
    gap: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FlexCell extends LitElement {
    static defaultProps: {
        display: string;
    };
    static styles: import("lit").CSSResult;
    order: number | null;
    grow: number | null;
    shrink: number | null;
    width: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
