import { LitElement } from "lit";
export declare class FlexGrid extends LitElement {
    static styles: import("lit").CSSResult;
    crop: boolean;
    compact: boolean;
    gap: string | null;
    d: string | null;
    centered: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
