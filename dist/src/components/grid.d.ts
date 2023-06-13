import { LitElement } from "lit";
export declare class FlexGrid extends LitElement {
    static styles: import("lit").CSSResult;
    gap: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type FlexGridProps = {
    gap?: string;
    compact?: boolean;
    flex?: boolean;
};
