import { BreakpointSize, mediaSizes } from "../config";
export const generateMediaRule = (size, css) => {
    const sizeValue = `${mediaSizes[size]}px`;
    return `@media screen and (max-width: ${sizeValue}) {:host{${css}}}`;
};
export const generateRootMediaRules = (props) => {
    const keys = Object.keys(BreakpointSize);
    let result = "";
    for (const key of keys) {
        const sizeValue = `${mediaSizes[key]}px`;
        const before = `@media screen and (max-width: ${sizeValue}) {`;
        let center = '';
        for (const propEl of props) {
            if (typeof propEl === 'function') {
                const data = propEl(key);
                center += `${data}`;
            }
            else {
                const { prop, css } = propEl;
                center += `:host([sm-breakpoint='${key}'][${prop}-sm]){${css}}`;
            }
        }
        const after = `}`;
        result += before + center + after;
    }
    console.log(result);
    return result;
};
//# sourceMappingURL=media.js.map