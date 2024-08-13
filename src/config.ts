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
const _window = (typeof window !== "undefined" ? window : {}) as Window;

export const getMediaSizes = (): MediaSizes => {
    const defaultSizes = (_window as any).DEFAULT_MEDIA_SIZES;

    if (defaultSizes && typeof defaultSizes === "object" && defaultSizes !== null) {
        return Object.keys(mediaSizes).reduce((acc, key) => {
            const value = defaultSizes[key];
            if (typeof value === "number") {
                acc[key as keyof MediaSizes] = value;
            }
            return acc;
        }, { ...mediaSizes });
    }

    return mediaSizes;
};