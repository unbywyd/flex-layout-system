import { LitElement } from "lit";
export declare class FlexCanvas extends LitElement {
    static defaultProps: {
        maxWidth: string;
        display: string;
        margin: string;
        padding: string;
    };
    static styles: import("lit").CSSResult;
    width: string | null;
    margin: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
