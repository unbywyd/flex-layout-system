import { LitElement } from "lit";
export declare class Base extends LitElement {
    className: string;
    _latestClasses: string[];
    updated(changedProperties: Map<string, unknown>): void;
    _updateClass(): void;
}
