export class ResizeObserverWrapper {
    constructor(options = {}) {
        this.options = options;
        this.observer = null;
    }
    create() {
        if (this.observer)
            return;
        this.observer = new ResizeObserver((entries) => {
            window.requestAnimationFrame(() => {
                for (let entry of entries) {
                    entry.target.dispatchEvent(new CustomEvent("resize", {
                        detail: entry.contentRect,
                    }));
                }
            });
        });
    }
    addElement(element) {
        var _a, _b;
        this.create();
        if (element instanceof Element && this.observer) {
            this.observer.observe(element, {
                box: ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.resizeObserverOptions) === null || _b === void 0 ? void 0 : _b.box) || "content-box",
            });
        }
    }
    removeElement(element) {
        if (!(element instanceof Element))
            return;
        if (this.observer) {
            this.observer.unobserve(element);
        }
    }
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.observer = null;
    }
}
const resizeObserverInstance = window.FlexResizeObserver
    ? window.FlexResizeObserver
    : new ResizeObserverWrapper();
HTMLElement.prototype.startResizeListener = function () {
    resizeObserverInstance.addElement(this);
};
HTMLElement.prototype.stopResizeListener = function () {
    resizeObserverInstance.removeElement(this);
};
//# sourceMappingURL=resize-observer.js.map