import { Base } from "./base";
export declare class StackedBox extends Base {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class StackedCell extends Base {
    static styles: import("lit").CSSResult;
    xa: string | null;
    xb: string | null;
    ya: string | null;
    yb: string | null;
    z: string | null;
    oc: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FitBox extends Base {
    static styles: import("lit").CSSResult;
    width: string | null;
    height: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class AspectRatio extends Base {
    static defaultProps: {
        display: string;
    };
    static styles: import("lit").CSSResult;
    center: boolean;
    ratio: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class FlexDivider extends Base {
    static styles: import("lit").CSSResult;
    mg: string | null;
    width: string | null;
    color: string | null;
    size: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class SpaceBox extends Base {
    static styles: import("lit").CSSResult;
    width: string | null;
    height: string | null;
    size: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class StyleBox extends Base {
    static styles: import("lit").CSSResult;
    color: string | null;
    scale: string | null;
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
