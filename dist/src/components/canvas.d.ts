import { Base } from "./base";
export declare class FlexCanvas extends Base {
    static defaultProps: {
        maxWidth: string;
        display: string;
        margin: string;
        padding: string;
    };
    static styles: import("lit").CSSResult;
    width: string | null;
    mg: string | null;
    pd: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
