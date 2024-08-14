import { LitElement } from "lit";
export declare class DisplayBox extends LitElement {
    static styles: import("lit").CSSResult;
    private _resizeListener;
    d: string | null;
    media: string | null;
    private checkMedia;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class StackedBox extends LitElement {
    static styles: import("lit").CSSResult;
    size: string | null;
    stretch: boolean;
    fw: boolean;
    hf: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class StyleBox extends LitElement {
    static styles: import("lit").CSSResult;
    fit: string | null;
    unstyle: boolean;
    block: boolean;
    d: string | null;
    round: boolean;
    stretch: boolean;
    zi: string | null;
    pos: string | null;
    inset: string | null;
    fill: boolean;
    crop: boolean;
    srOnly: boolean;
    scrollable: boolean;
    ws: string | null;
    color: string | null;
    bgc: string | null;
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
    pi: string | null;
    pb: string | null;
    mi: string | null;
    mb: string | null;
    fg: string | null;
    ratio: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
