import { BreakpointSize } from "../config";
export type RuleObject = {
    attr: string;
    varName?: string;
    cssProp?: string;
    isImportant?: boolean;
};
export type Rule = RuleObject;
export declare const generateRootMediaRules: (props: Rule[]) => string;
export type ParsedMediaProp = {
    [key in BreakpointSize]: string | null;
};
export declare const parsePropValue: (str: string | null, defaultValue: string) => {
    props: ParsedMediaProp;
    defaultValue: string;
};
export declare const setVars: (cssProp: string, propValue: string | null | number, valDefault: any, el: HTMLElement, skipInit?: boolean) => void;
export declare function generateUniqueClass(prefix?: string): string;
export declare const setVal: (cssProp: string, propValue: string | null, el: HTMLElement) => void;
