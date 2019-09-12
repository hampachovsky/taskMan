import Component from './component';

export default class EditTask extends Component {
  constructor(data) {
    super();
    this._data = {
      title: data.title,
      description: data.description,
      isFavorite: data.isFavorite,
      isArchive: data.isArchive,
    };

    this._element = null;
    this._onSubmit = null;
    this._onDelete = null;

    this._addToArchive = this._addToFavorite.bind(this);
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onTitleChange = this._onTitleChange.bind(this);
    this._onDescriptionChange = this._onDescriptionChange.bind(this);
    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
    this._addToFavorite = this._addToFavorite.bind(this);
  }

  _addToArchive() {
    this._data.isArchive = !this._data.isArchive;
  }

  _addToFavorite() {
    this._data.isFavorite = !this._data.isFavorite;
  }

  _onDeleteButtonClick() {
    typeof this._onDelete === 'function' && this._onDelete();
  }

  _onTitleChange(evt) {
    this._data.title = evt.target.value;
  }

  _onDescriptionChange(evt) {
    this._data.description = evt.target.value;
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    typeof this._onSubmit === 'function' && this._onSubmit(this._data);
    return this.update(this._data);
  }

  set onDelete(fn) {
    this._onDelete = fn;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return `
    <div class="card border-dark mb-3" style="max-width: 20rem;">
          <form class="card-form">
            <div class="card-header">
              Header
            </div>
            <div class="card-body text-dark">
              <h5 class="card-title">
                <input type="text" class="form-control title-input text-dark" value="${this._data.title}" />
              </h5>
              <p class="card-text">
                <textarea class="form-control description-input" aria-label="With textarea" style="height: 10rem;">${this._data.description}</textarea>
              </p>
              <button type="submit" class="btn btn-success btn-submit">Submit</button>
              <button type="button" class="btn btn-danger btn-delete">Delete</button>
              <button type="button" class="btn btn-info btn-favorite">Favorite</button>
              <button type="button" class="btn btn-secondary mt-2 btn-archive">Archive</button>
            </div>
          </form>
      </div>`.trim();
  }

  bind() {
    this._element
      .querySelector('.card-form')
      .addEventListener('submit', this._onSubmitButtonClick);
    this._element
      .querySelector('.title-input')
      .addEventListener('change', this._onTitleChange);
    this._element
      .querySelector('.description-input')
      .addEventListener('change', this._onDescriptionChange);
    this._element
      .querySelector('.btn-delete')
      .addEventListener('click', this._onDeleteButtonClick);
    this._element
      .querySelector('.btn-favorite')
      .addEventListener('click', this._addToFavorite);
    this._element
      .querySelector('.btn-archive')
      .addEventListener('click', this._addToArchive);
  }

  unbind() {
    this._element
      .querySelector('.card-form')
      .removeEventListener('submit', this._onSubmitButtonClick);
    this._element
      .querySelector('.title-input')
      .removeEventListener('change', this._onTitleChange);
    this._element
      .querySelector('.description-input')
      .removeEventListener('change', this._onDescriptionChange);
    this._element
      .querySelector('.btn-delete')
      .removeEventListener('click', this._onDeleteButtonClick);
    this._element
      .querySelector('.btn-favorite')
      .removeEventListener('click', this._addToFavorite);
    this._element
      .querySelector('.btn-archive')
      .removeEventListener('click', this._addToArchive);
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
