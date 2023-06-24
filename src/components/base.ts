import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export class Base extends LitElement {
  @property({ type: String })
  className = "";
  _latestClasses: string[] = [];
  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("className")) {
      this._updateClass();
    }
  }

  _updateClass() {
    if (this._latestClasses.length > 0) {
      this._latestClasses.forEach((cls) => {
        this.classList.remove(cls);
        this._latestClasses = this._latestClasses.filter((c) => c !== cls);
      });
    }
    if (this.className) {
      this._latestClasses = this.className.split(" ").filter(Boolean);

      this._latestClasses.forEach((cls) => {
        this.classList.add(cls);
      });
    }
  }
}
