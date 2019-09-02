import Component from './component';
import { createElement } from '../utils';

export default class EditTask extends Component {
  constructor() {
    super();
    this._element = null;
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
  }

  get template() {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
          <form class="card-form">
            <div class="card-header">
              <input type="text" class="form-control text-dark" value="Header" />
            </div>
            <div class="card-body text-dark">
              <h5 class="card-title">
                <input type="text" class="form-control text-dark" value="Primary card title" />
              </h5>
              <p class="card-text">
                <textarea class="form-control" aria-label="With textarea" style="height: 10rem;" placeholder="Some quick example text to build on the card title and make up the bulk of the card's content."></textarea>
              </p>
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </form>
      </div>`.trim();
  }
  bind() {
    this._element
      .querySelector('.card-form')
      .addEventListener('submit', this._onSubmitButtonClick);
  }
  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }
}
