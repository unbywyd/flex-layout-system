export declare class resizeObserver {
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
