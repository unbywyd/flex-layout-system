export enum BreakpointSize {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    xxl = "xxl"
}
export type MediaSizes = {
    [key in BreakpointSize]: number;
}
export const mediaSizes: MediaSizes = {
    xs: 780,
    sm: 1024,
    md: 1280,
    lg: 1440,
    xl: 1920,
    xxl: 2560
}