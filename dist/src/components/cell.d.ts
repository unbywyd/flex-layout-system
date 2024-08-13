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
    center: boolean | null;
    fill: boolean | null;
    fit: boolean | null;
    snug: boolean | null;
    auto: boolean | null;
    stretch: boolean | null;
    display: string;
    as: string | null;
    order: number | null;
    grow: number | null;
    shrink: number | null;
    width: string | null;
    height: string | null;
    basis: string | null;
    pd: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
