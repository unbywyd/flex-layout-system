import { LitElement } from "lit";
import { BreakpointSize } from "../config";
export declare enum EnumAlignContent {
    Start = "flex-start",
    End = "flex-end",
    Center = "center",
    SpaceBetween = "space-between",
    SpaceAround = "space-around",
    SpaceEvenly = "space-evenly",
    Stretch = "stretch"
}
export declare enum EnumAlignItems {
    Start = "flex-start",
    End = "flex-end",
    Center = "center",
    Baseline = "baseline",
    Stretch = "stretch"
}
export declare enum EnumJustifyContent {
    Start = "flex-start",
    End = "flex-end",
    Center = "center",
    SpaceBetween = "space-between",
    SpaceAround = "space-around",
    SpaceEvenly = "space-evenly"
}
export declare class FlexBox extends LitElement {
    static defaultProps: {
        reverse: boolean;
        display: "flex" | "inline-flex";
        mode: "row" | "column";
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        gap: string;
    };
    get mode(): "row" | "column";
    static styles: import("lit").CSSResult;
    jc: EnumJustifyContent | null;
    ai: EnumAlignItems | null;
    ac: EnumAlignContent | null;
    start: boolean | null;
    end: boolean | null;
    spread: boolean | null;
    middle: boolean | null;
    center: boolean | null;
    inline: boolean | null;
    wrap: boolean | null;
    nowrap: boolean | null;
    reverse: boolean | null;
    minh: boolean | null;
    fullh: boolean | null;
    fullw: boolean | null;
    fullscreen: boolean | null;
    stretch: boolean | null;
    snug: boolean | null;
    fill: boolean | null;
    fit: boolean | null;
    row: boolean | null;
    column: boolean | null;
    gap: string | null;
    smBp: BreakpointSize;
    gapSm: string | null;
    columnSm: boolean | null;
    rowSm: boolean | null;
    jcSm: EnumJustifyContent | null;
    aiSm: EnumAlignItems | null;
    acSm: EnumAlignContent | null;
    wrapSm: boolean | null;
    nowrapSm: boolean | null;
    reverseSm: boolean | null;
    render(): import("lit-html").TemplateResult<1>;
}
