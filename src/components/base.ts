import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export class Base extends LitElement {
  @property({ type: String })
  className = "";

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("className")) {
      this._updateClass();
    }
  }

  _updateClass() {
    this.className
      .split(" ")
      .filter(Boolean)
      .forEach((cls) => {
        this.classList.add(cls);
      });
  }
}
