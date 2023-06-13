import { LitElement } from "lit";
export declare class FlexCell extends LitElement {
    static defaultProps: {
        display: string;
    };
    static styles: import("lit").CSSResult;
    order: number | null;
    grow: number | null;
    shrink: number | null;
    width: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type FlexCellProps = {
    order?: number;
    grow?: number;
    shrink?: number;
    width?: string;
    fill?: boolean;
    fit?: boolean;
    snug?: boolean;
    auto?: boolean;
    stretch?: boolean;
    scrollable?: boolean;
    flex?: boolean;
    iflex?: boolean;
    iblock?: boolean;
};
