export declare enum BreakpointSize {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    xxl = "xxl"
}
export type MediaSizes = {
    [key in BreakpointSize]: number;
};
export declare const mediaSizes: MediaSizes;
