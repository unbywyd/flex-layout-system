import { BreakpointSize, mediaSizes } from "../config";

export const generateMediaRule = (size: BreakpointSize, css: string) => {
    const sizeValue = `${mediaSizes[size]}px`;
    return `@media screen and (max-width: ${sizeValue}) {:host{${css}}}`;
}

export type RuleObject = {
    prop: string;
    css: string;
}
export type Rule = RuleObject | RuleGenerator;
export type RuleGenerator = (size: BreakpointSize) => string;


export const generateRootMediaRules = (props: Rule[]) => {
    const keys = Object.keys(BreakpointSize);
    let result = "";
    for (const key of keys) {
        const sizeValue = `${mediaSizes[key as BreakpointSize]}px`;
        const before = `@media screen and (max-width: ${sizeValue}) {`
        let center = '';
        for (const propEl of props) {
            if (typeof propEl === 'function') {
                const data = propEl(key as BreakpointSize);
                center += `${data}`
            } else {
                const { prop, css } = propEl;
                center += `:host([sm-breakpoint='${key}'][${prop}-sm]){${css}}`
            }
        }
        const after = `}`
        result += before + center + after;
    }
    console.log(result);
    return result;
}