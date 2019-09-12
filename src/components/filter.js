import Component from './component';

export default class Filter extends Component {
  constructor(data) {
    super();
    this._data = {
      caption: data.caption,
    };

    this._element = null;
    this._onFilter = null;
    this._onFilterClick = this._onFilterClick.bind(this);
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  _onFilterClick() {
    this._onFilter();
  }

  get template() {
    return `
        <li class="nav-item">
          <button type="button" style="color: white" class="btn btn-link ${this._data.caption}-btn">${this._data.caption}</button>
        </li>
      `.trim();
  }

  bind() {
    this._element
      .querySelector(`.${this._data.caption}-btn`)
      .addEventListener('click', this._onFilterClick);
  }

  unbind() {
    this._element
      .querySelector(`.${this._data.caption}-btn`)
      .removeEventListener('click', this._onFilterClick);
  }
}
