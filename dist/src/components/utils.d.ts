import { LitElement } from "lit";
export declare class StackedBox extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
export type StackedBoxProps = {
    crop?: boolean;
};
export declare class StackedCell extends LitElement {
    static styles: import("lit").CSSResult;
    xa: string | null;
    xb: string | null;
    ya: string | null;
    yb: string | null;
    z: string | null;
    oc: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type StackedCellProps = {
    rel?: boolean;
    overlay?: boolean;
    stretch?: boolean;
    xa?: string;
    xb?: string;
    ya?: string;
    yb?: string;
    z?: string;
    oc?: string;
};
export declare class FitBox extends LitElement {
    static styles: import("lit").CSSResult;
    width: string | null;
    height: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type FitBoxProps = {
    flex?: boolean;
    stretch?: boolean;
    crop?: boolean;
    scrollable?: boolean;
    center?: boolean;
    fill?: boolean;
    round?: boolean;
    cover?: boolean;
    contain?: boolean;
    force?: boolean;
    width?: string;
    height?: string;
};
export declare class AspectRatio extends LitElement {
    static defaultProps: {
        display: string;
    };
    static styles: import("lit").CSSResult;
    center: boolean;
    ratio: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type AspectRatioProps = {
    fit?: boolean;
    center?: boolean;
    ratio?: string;
};
export declare class FlexDivider extends LitElement {
    static styles: import("lit").CSSResult;
    mg: string | null;
    width: string | null;
    color: string | null;
    size: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type FlexDividerProps = {
    v?: boolean;
    h?: boolean;
    stretch?: boolean;
    dark?: boolean;
    mg?: string;
    width?: string;
    color?: string;
    size?: string;
};
export declare class SpaceBox extends LitElement {
    static styles: import("lit").CSSResult;
    width: string | null;
    height: string | null;
    size: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type SpaceBoxProps = {
    width?: string;
    height?: string;
    size?: string;
};
export declare class StyleBox extends LitElement {
    static styles: import("lit").CSSResult;
    fz: string | null;
    fw: string | null;
    lh: string | null;
    w: string | null;
    h: string | null;
    mw: string | null;
    mxw: string | null;
    mh: string | null;
    tt: string | null;
    mxh: string | null;
    pis: string | null;
    pie: string | null;
    pbs: string | null;
    pbe: string | null;
    mbs: string | null;
    mbe: string | null;
    mis: string | null;
    mie: string | null;
    mg: string | null;
    pd: string | null;
    ta: string | null;
    op: string | null;
    td: string | null;
    br: string | null;
    px: string | null;
    py: string | null;
    mx: string | null;
    my: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type StyleBoxProps = {
    fz?: string;
    fw?: string;
    lh?: string;
    w?: string;
    h?: string;
    mw?: string;
    mxw?: string;
    mh?: string;
    mxh?: string;
    tt?: string;
    pis?: string;
    pie?: string;
    pbs?: string;
    pbe?: string;
    mbs?: string;
    mbe?: string;
    mis?: string;
    mie?: string;
    mg?: string;
    pd?: string;
    ta?: string;
    op?: string;
    td?: string;
    br?: string;
    px?: string;
    py?: string;
    mx?: string;
    my?: string;
    inline?: boolean;
    block?: boolean;
};
