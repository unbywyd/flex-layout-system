import { LitElement } from "lit";
import { BreakpointSize } from "../config";
export declare class FlexGrid extends LitElement {
    static styles: import("lit").CSSResult;
    crop: boolean | null;
    flex: boolean | null;
    compact: boolean | null;
    gap: string | null;
    gapSm: string | null;
    smBp: BreakpointSize;
    render(): import("lit-html").TemplateResult<1>;
}
