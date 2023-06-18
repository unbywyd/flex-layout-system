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
export type FlexBoxProps = {
    row?: boolean;
    column?: boolean;
    gap?: string;
    nowrap?: boolean;
    fill?: boolean;
    fit?: boolean;
    snug?: boolean;
    reverse?: boolean;
    inline?: boolean;
    center?: boolean;
    start?: boolean;
    end?: boolean;
    stretch?: boolean;
    spread?: boolean;
    middle?: boolean;
    ai?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    ac?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";
    jc?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
};
