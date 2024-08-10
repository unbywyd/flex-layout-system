import { BreakpointSize } from "../config";
export declare const generateMediaRule: (size: BreakpointSize, css: string) => string;
export type RuleObject = {
    prop: string;
    css: string;
};
export type Rule = RuleObject | RuleGenerator;
export type RuleGenerator = (size: BreakpointSize) => string;
export declare const generateRootMediaRules: (props: Rule[]) => string;
