import Component from './component';
import { createElement } from '../utils';

export default class EditTask extends Component {
  constructor(data) {
    super();
    this._data = {
      title: data.title,
      description: data.description,
    };

    this._element = null;
    this._onSubmit = null;
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onTitleChange = this._onTitleChange.bind(this);
    this._onDescriptionChange = this._onDescriptionChange.bind(this);
  }

  _onTitleChange(evt) {
    if (evt.target.classList.contains('title-input')) {
      this._data.title = evt.target.value;
    }
  }

  _onDescriptionChange(evt) {
    if (evt.target.classList.contains('description-input')) {
      this._data.description = evt.target.value;
    }
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('card-form')) {
      return typeof this._onSubmit === 'function' && this._onSubmit(this._data);
    }
    return this.update(this._data);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
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
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </form>
      </div>`.trim();
  }

  bind() {
    this._element.addEventListener('submit', this._onSubmitButtonClick);
    this._element.addEventListener('change', this._onTitleChange);
    this._element.addEventListener('change', this._onDescriptionChange);
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }

  unbind() {
    this._element.removeEventListener('submit', this._onSubmitButtonClick);
    this._element.removeEventListener('change', this._onTitleChange);
    this._element.removeEventListener('change', this._onDescriptionChange);
  }

  update(data) {
    this._title = data.title;
    this._description = data.description;
  }
}
