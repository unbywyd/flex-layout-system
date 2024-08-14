import { LitElement } from "lit";
export declare class FlexCell extends LitElement {
    static defaultProps: {
        display: string;
        align: string;
        order: number;
        grow: number;
        shrink: number;
        height: string;
        basis: string;
        width: string;
    };
    static styles: import("lit").CSSResult;
    center: boolean;
    fill: boolean;
    fit: boolean;
    snug: boolean;
    auto: boolean;
    stretch: boolean;
    d: string;
    as: string | null;
    order: number | null;
    g: number | null;
    sh: number | null;
    w: string | null;
    h: string | null;
    bs: string | null;
    pd: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
