declare global {
    interface Window {
        FlexResizeObserver: ResizeObserverWrapper;
    }
}
export declare class ResizeObserverWrapper {
    private options;
    observer: ResizeObserver | null;
    constructor(options?: {
        resizeObserverOptions?: ResizeObserverOptions;
    });
    create(): void;
    addElement(element: Element): void;
    removeElement(element: Element): void;
    destroy(): void;
}
