import { Base } from "./base";
export declare class FlexGrid extends Base {
    static styles: import("lit").CSSResult;
    gap: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
export type FlexGridProps = {
    gap?: string;
    compact?: boolean;
    flex?: boolean;
};
