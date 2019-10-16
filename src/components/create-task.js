import Component from './component';
import { createElement } from '../utils';

export default class CreateTask extends Component {
  constructor() {
    super();

    this._data = {
      title: '',
      description: '',
    };

    this._state = {
      validationError: null,
    };

    this._element = null;
    this._onClose = null;
    this._onSubmit = null;

    // Bind method to component context, because this = element, that is undefiend.
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
    this._onTitleChange = this._onTitleChange.bind(this);
    this._onDescriptionChange = this._onDescriptionChange.bind(this);
  }

  _onDescriptionChange(evt) {
    this._data.description = evt.target.value;
  }

  _onTitleChange(evt) {
    this._data.title = evt.target.value;
  }

  _onCloseButtonClick() {
    typeof this._onClose === 'function' && this._onClose();
  }

  // On submit click, update data and call _onSubmit fn if the data has been validated.
  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    if (CreateTask.validateData(this._data, this._state)) {
      this._updateData();
      this.unbind();
      this._reshape();
      this.bind();
    } else {
      typeof this._onSubmit === 'function' && this._onSubmit(this._data);
    }
  }

  _updateData() {
    this._data = {
      title: '',
      description: '',
    };
  }

  // Remove previous card, and draw new card.
  _reshape() {
    const boardTask = document.querySelector('.board-task');
    const prevElement = this._element;
    this._element = createElement(this.template);

    boardTask.replaceChild(this._element, prevElement);
    prevElement.remove();
  }

  set onClose(fn) {
    this._onClose = fn;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  // prettier-ignore
  get template() {
    return `
        <div class="modal"  tabindex="-1" role="dialog" aria-labelledby="createTaskModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Create task</h5>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                 ${this._state.validationError !== null ? `<p class="error-message">${this._state.validationError}</p>` : ''}
                  <label for="task-title" class="col-form-label">Title:</label>
                  <input type="text" class="form-control task-title">
                </div>
                <div class="form-group">
                 ${this._state.validationError !== null ? `<p class="error-message">${this._state.validationError}</p>` : ''}
                  <label for="task-description" class="col-form-label">Description:</label>
                  <textarea class="form-control task-description"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-close btn-danger">Close</button>
              <button type="button" class="btn btn-submit btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    `.trim();
  }

  bind() {
    this._element
      .querySelector('.btn-close')
      .addEventListener('click', this._onCloseButtonClick);
    this._element
      .querySelector('.btn-submit')
      .addEventListener('click', this._onSubmitButtonClick);
    this._element
      .querySelector('.task-title')
      .addEventListener('change', this._onTitleChange);
    this._element
      .querySelector('.task-description')
      .addEventListener('change', this._onDescriptionChange);
  }

  unbind() {
    this._element
      .querySelector('.btn-close')
      .removeEventListener('click', this._onCloseButtonClick);
    this._element
      .querySelector('.btn-submit')
      .removeEventListener('click', this._onSubmitButtonClick);
    this._element
      .querySelector('.task-title')
      .removeEventListener('change', this._onTitleChange);
    this._element
      .querySelector('.task-description')
      .removeEventListener('change', this._onDescriptionChange);
  }

  static validateData(data, outPut) {
    const { title, description } = data;
    if (title.trim() === '' || description.trim() === '') {
      outPut.validationError = 'Fields is empty';
      return true;
    }
    return false;
  }
}
