import Component from './component';

export default class CreateTask extends Component {
  constructor() {
    super();

    this._element = null;
    this._onClose = null;
    this._onSubmit = null;
    // Bind method to component context, because this = element, that is undefiend
  }

  /*  _onCloseButtonClick() {
    typeof this._onClose === 'function' && this._onClose();
  }
 */
  // On submit click, update data and call _onSubmit fn. See presenter.js.
  /*  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    typeof this._onSubmit === 'function' && this._onSubmit(this._data);
  } */

  set onClose(fn) {
    this._onClose = fn;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

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
                  <label for="recipient-name" class="col-form-label">Header:</label>
                  <input type="text" class="form-control" id="task-header">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="task-description"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    `.trim();
  }

  bind() {}

  unbind() {}
}
