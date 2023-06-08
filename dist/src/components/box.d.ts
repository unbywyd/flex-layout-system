import { LitElement } from "lit";
export declare class FlexBox extends LitElement {
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
