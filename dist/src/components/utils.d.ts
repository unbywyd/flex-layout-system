import { LitElement } from "lit";
export declare class StackedBox extends LitElement {
    static styles: import("lit").CSSResult;
    crop: boolean | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class StackedCell extends LitElement {
    static styles: import("lit").CSSResult;
    rel: boolean | null;
    overlay: boolean | null;
    stretch: boolean | null;
    xa: string | null;
    xb: string | null;
    ya: string | null;
    yb: string | null;
    z: string | null;
    overcolor: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FitBox extends LitElement {
    static styles: import("lit").CSSResult;
    stretch: boolean | null;
    flex: boolean | null;
    crop: boolean | null;
    scrollable: boolean | null;
    center: boolean | null;
    fill: boolean | null;
    round: boolean | null;
    cover: boolean | null;
    contain: boolean | null;
    width: string | null;
    height: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class AspectRatio extends LitElement {
    static defaultProps: {
        display: string;
    };
    static styles: import("lit").CSSResult;
    fit: boolean | null;
    crop: boolean | null;
    center: boolean | null;
    ratio: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FlexDivider extends LitElement {
    static styles: import("lit").CSSResult;
    v: boolean | null;
    h: boolean | null;
    stretch: boolean | null;
    mg: string | null;
    color: string | null;
    size: string | null;
    width: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class SpaceBox extends LitElement {
    static styles: import("lit").CSSResult;
    width: string | null;
    height: string | null;
    size: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class StyleBox extends LitElement {
    static styles: import("lit").CSSResult;
    display: string | null;
    inline: boolean | null;
    block: boolean | null;
    crop: boolean | null;
    scrollable: boolean | null;
    inherit: boolean | null;
    nowrap: boolean | null;
    wrap: boolean | null;
    color: string | null;
    bgc: string | null;
    bgi: string | null;
    bgr: string | null;
    bgp: string | null;
    bgs: string | null;
    bga: string | null;
    transform: string | null;
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
    fg: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class ScreenReaderOnly extends LitElement {
    static styles: import("lit").CSSResult;
    focusable: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class LtrOnly extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
