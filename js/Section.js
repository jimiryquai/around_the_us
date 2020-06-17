export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.append(item);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderer() {
    this.clear();

    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
