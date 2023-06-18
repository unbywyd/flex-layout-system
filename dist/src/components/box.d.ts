import { Base } from "./base";
export declare class FlexBox extends Base {
    static defaultProps: {
        reverse: boolean;
        display: "flex" | "inline-flex";
        mode: "row" | "column";
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        gap: string;
    };
    get mode(): "row" | "column";
    static styles: import("lit").CSSResult;
    row: boolean | null;
    column: boolean | null;
    gap: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
