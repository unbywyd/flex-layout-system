import { LitElement } from "lit";
export declare enum EnumBoxType {
    row = "row",
    column = "column",
    rowReverse = "row-reverse",
    columnReverse = "column-reverse"
}
export declare enum EnumWrapType {
    nowrap = "nowrap",
    wrap = "wrap"
}
export declare class FlexBox extends LitElement {
    static defaultProps: {
        reverse: boolean;
        display: "flex" | "inline-flex";
        direction: EnumBoxType;
        justifyContent: string;
        wrap: EnumWrapType;
        alignItems: string;
        alignContent: string;
        gap: string;
    };
    static styles: import("lit").CSSResult;
    jc: string | null;
    ai: string | null;
    ac: string | null;
    start: boolean | null;
    end: boolean | null;
    centered: boolean | null;
    center: boolean | null;
    minHeight: string | null;
    minWidth: string | null;
    height: string | null;
    width: string | null;
    wFill: boolean | null;
    hFill: boolean | null;
    gap: string | null;
    direction: string;
    display: string;
    wrap: string;
    render(): import("lit-html").TemplateResult<1>;
}
