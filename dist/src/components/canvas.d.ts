import { LitElement } from "lit";
export declare class FlexCanvas extends LitElement {
    static defaultProps: {
        maxWidth: string;
        display: string;
        margin: string;
        padding: string;
    };
    static styles: import("lit").CSSResult;
    crop: boolean | null;
    flex: boolean | null;
    width: string | null;
    mg: string | null;
    pd: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
