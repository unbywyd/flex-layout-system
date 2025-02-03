import { BreakpointSize, getMediaSizes } from "../config";

export type RuleObject = {
    attr: string;
    varName?: string;
    cssProp?: string;
    isImportant?: boolean;
}
export type Rule = RuleObject;

export const generateRootMediaRules = (props: Rule[]) => {
    const mediaSizes = getMediaSizes();
    const keys = Object.keys(BreakpointSize) as BreakpointSize[];
    let result = "";

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const minSizeValue = i > 0 ? `${mediaSizes[keys[i - 1]] + 1}px` : null;
        const maxSizeValue = i < keys.length - 1 ? `${mediaSizes[key]}px` : null;

        let mediaQuery = "";
        if (minSizeValue && maxSizeValue) {
            mediaQuery = `@media screen and (min-width: ${minSizeValue}) and (max-width: ${maxSizeValue}) {`;
        } else if (minSizeValue) {
            mediaQuery = `@media screen and (min-width: ${minSizeValue}) {`;
        } else if (maxSizeValue) {
            mediaQuery = `@media screen and (max-width: ${maxSizeValue}) {`;
        }

        let center = '';
        for (const propEl of props) {
            const { attr, cssProp, varName, isImportant } = propEl;
            const _varName = varName ? varName : `f-${cssProp}`;
            const importantFlag = isImportant ? ' !important' : '';
            center += `:host([${attr}]){--${_varName}: var(--${_varName}-${key})${importantFlag};}`;
        }

        const after = `}`;
        result += mediaQuery + center + after;
    }

    return result;
};


export type ParsedMediaProp = {
    [key in BreakpointSize]: string | null;
}


export const parsePropValue = (str: string | null, defaultValue: string): {
    props: ParsedMediaProp,
    defaultValue: string
} => {
    const defaultProp: ParsedMediaProp = {
        xs: null,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        xxl: null
    };

    if (!str || str.trim() === "") {
        return {
            props: {
                xs: defaultValue,
                sm: defaultValue,
                md: defaultValue,
                lg: defaultValue,
                xl: defaultValue,
                xxl: defaultValue
            },
            defaultValue
        }
    }


    const segments = str.split(',').map(segment => segment.trim());

    let _defaultValue = defaultValue;

    for (const segment of segments) {
        const parts = segment.split(/\s+/).map(part => part.trim());
        if (parts.length === 1) {
            _defaultValue = parts[0];
        } else if (parts.length === 2) {
            const [first, second] = parts;
            if (Object.values(BreakpointSize).includes(first as BreakpointSize)) {
                defaultProp[first as BreakpointSize] = second;
            } else if (Object.values(BreakpointSize).includes(second as BreakpointSize)) {
                defaultProp[second as BreakpointSize] = first;
            }
        }
    }

    const breakpoints: BreakpointSize[] = [BreakpointSize.xs, BreakpointSize.sm, BreakpointSize.md, BreakpointSize.lg, BreakpointSize.xl, BreakpointSize.xxl];

    for (let i = 0; i < breakpoints.length; i++) {
        const key = breakpoints[i];
        if (!defaultProp[key]) {
            for (let j = i + 1; j < breakpoints.length; j++) {
                const nextKey = breakpoints[j];
                if (defaultProp[nextKey]) {
                    defaultProp[key] = defaultProp[nextKey]!;
                    break;
                }
            }
            if (!defaultProp[key]) {
                defaultProp[key] = _defaultValue as string;
            }
        }
    }

    return { props: defaultProp, defaultValue: _defaultValue };
};

export const setVars = (cssProp: string, propValue: string | null | number, valDefault: any, el: HTMLElement, skipInit = true) => {
    const { defaultValue, props } = parsePropValue(propValue !== null ? propValue?.toString() : null, valDefault);
    if (!propValue && skipInit) {
        return;
    }
    const isCssVar = cssProp.startsWith('f-');
    const varName = isCssVar ? cssProp : `f-${cssProp}`;
    if (defaultValue !== null && defaultValue !== undefined) {
        el.style.setProperty(`--${varName}`, defaultValue);
    }
    if (!isCssVar) {
        el.style.setProperty(`${cssProp}`, `var(--${varName})`);
    }
    for (const key in props) {
        el.style.setProperty(`--${varName}-${key}`, props[key as BreakpointSize]);
    }
}

export function generateUniqueClass(prefix = 'f') {
    const randomString = Math.random().toString(36).substring(2, 10);
    return prefix + '_' + randomString;
}

export const setVal = (cssProp: string, propValue: string | null, el: HTMLElement) => {
    if (propValue) {
        el.style.setProperty(`${cssProp}`, `${propValue}`);
    }
}