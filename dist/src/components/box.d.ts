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
    column: boolean;
    jc: string | null;
    ai: string | null;
    ac: string | null;
    start: boolean;
    end: boolean;
    centered: boolean;
    center: boolean;
    mh: string | null;
    mw: string | null;
    h: string | null;
    w: string | null;
    wf: boolean;
    hf: boolean;
    gap: string | null;
    dn: string;
    d: string;
    wrap: string;
    render(): import("lit-html").TemplateResult<1>;
}
