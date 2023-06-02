export class resizeObserver {
  observer: ResizeObserver | null;
  constructor(
    private options: { resizeObserverOptions?: ResizeObserverOptions } = {}
  ) {
    this.observer = null;
  }
  create() {
    if (this.observer) return;
    this.observer = window.resizeObserver
      ? window.resizeObserver
      : new ResizeObserver((entries) => {
          for (let entry of entries) {
            entry.target.dispatchEvent(
              new CustomEvent("resize", {
                detail: entry.contentRect,
              })
            );
          }
        });
    window.resizeObserver = this.observer;
  }
  addElement(element: Element) {
    this.create();
    if (element instanceof Element) {
      this.observer.observe(element, {
        box: this.options?.resizeObserverOptions?.box || "content-box",
      });
    }
  }
  removeElement(element: Element) {
    if (!(element instanceof Element)) return;
    this.observer.unobserve(element as Element);
  }
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observer = null;
    delete window.resizeObserver;
  }
}
const resizeObserverInstance = new resizeObserver();

HTMLElement.prototype.startResizeListener = function () {
  resizeObserverInstance.addElement(this);
};

HTMLElement.prototype.stopResizeListener = function () {
  resizeObserverInstance.removeElement(this);
};
