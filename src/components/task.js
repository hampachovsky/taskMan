import Component from './component';

export default class Task extends Component {
  constructor(data) {
    super();
    this._data = {
      title: data.title,
      description: data.description,
      isFavorite: data.isFavorite,
      isArchive: data.isArchive,
    };

    this._element = null;
    this._onEdit = null;
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  _onEditButtonClick() {
    typeof this._onEdit === 'function' && this._onEdit();
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header">
            <button type="button" class="btn btn-link text-dark edit-btn">Edit</button>
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title">${this._data.title}</h5>
            <p class="card-text">
              ${this._data.description}
            </p>
          </div>
    </div>`.trim();
  }

  bind() {
    this._element
      .querySelector('.edit-btn')
      .addEventListener('click', this._onEditButtonClick);
  }

  unbind() {
    this._element
      .querySelector('.edit-btn')
      .removeEventListener('click', this._onEditButtonClick);
  }

  update(data) {
    this._data = {
      title: data.title,
      description: data.description,
      isFavorite: data.isFavorite,
      isArchive: data.isArchive,
    };
  }
}
