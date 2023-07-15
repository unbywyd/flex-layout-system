import { LitElement } from "lit";
export declare enum EnumAlignSelf {
    Start = "flex-start",
    End = "flex-end",
    Center = "center",
    Baseline = "baseline",
    Stretch = "stretch",
    Auto = "auto",
    Normal = "normal",
    Unset = "unset"
}
export declare class FlexCell extends LitElement {
    static defaultProps: {
        display: string;
    };
    static styles: import("lit").CSSResult;
    scrollable: boolean | null;
    flex: boolean | null;
    iflex: boolean | null;
    iblock: boolean | null;
    fill: boolean | null;
    fit: boolean | null;
    snug: boolean | null;
    auto: boolean | null;
    stretch: boolean | null;
    as: EnumAlignSelf | null;
    order: number | null;
    grow: number | null;
    shrink: number | null;
    width: string | null;
    basis: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
