import { Base } from "./base";
export declare class FlexCell extends Base {
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
