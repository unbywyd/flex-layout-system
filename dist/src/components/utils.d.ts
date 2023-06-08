import { LitElement } from "lit";
export declare class StackedBox extends LitElement {
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
    oc: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FitBox extends LitElement {
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
export declare class HorizontalDivider extends LitElement {
    static styles: import("lit").CSSResult;
    mg: string | null;
    width: string | null;
    color: string | null;
    size: string | null;
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
