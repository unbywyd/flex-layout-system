export var BreakpointSize;
(function (BreakpointSize) {
    BreakpointSize["xs"] = "xs";
    BreakpointSize["sm"] = "sm";
    BreakpointSize["md"] = "md";
    BreakpointSize["lg"] = "lg";
    BreakpointSize["xl"] = "xl";
    BreakpointSize["xxl"] = "xxl";
})(BreakpointSize || (BreakpointSize = {}));
export const mediaSizes = {
    xs: 780,
    sm: 1024,
    md: 1280,
    lg: 1440,
    xl: 1920,
    xxl: 2560
};
const _window = (typeof window !== "undefined" ? window : {});
export const getMediaSizes = () => {
    const defaultSizes = _window.DEFAULT_MEDIA_SIZES;
    if (defaultSizes && typeof defaultSizes === "object" && defaultSizes !== null) {
        return Object.keys(mediaSizes).reduce((acc, key) => {
            const value = defaultSizes[key];
            if (typeof value === "number") {
                acc[key] = value;
            }
            return acc;
        }, { ...mediaSizes });
    }
    return mediaSizes;
};
//# sourceMappingURL=config.js.map