import Component from './component';
import { createElement } from '../utils';

export default class Task extends Component {
  constructor(data) {
    super();
    this._data = {
      title: data.title,
      description: data.description,
    };

    this._element = null;
    this._onEdit = null;
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  _onEditButtonClick(evt) {
    if (evt.target.classList.contains('edit-btn')) {
      typeof this._onEdit === 'function' && this._onEdit();
    }
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header">
            <button type="button" class="btn btn-link text-dark edit-btn">Edit</button>
            <button type="button" class="btn btn-link text-dark">Favorite</button>
            <button type="button" class="btn btn-link text-dark">Archive</button>
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title">${this._data.title}</h5>
            <p class="card-text">
              ${this._data.description}
            </p>
          </div>
    </div>`.trim();
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  bind() {
    this._element.addEventListener('click', this._onEditButtonClick);
  }

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }

  unbind() {
    this._element.removeEventListener('click', this._onEditButtonClick);
  }

  update(data) {
    this._data = {
      title: data.title,
      description: data.description,
    };
  }
}
