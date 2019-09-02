import Component from './component';
import { createElement } from '../utils';

export default class Task extends Component {
  constructor() {
    super();
    this._element = null;
  }

  get template() {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header">
            <button type="button" class="btn btn-link text-dark">Edit</button>
            <button type="button" class="btn btn-link text-dark">Favorite</button>
            <button type="button" class="btn btn-link text-dark">Archive</button>
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
    </div>`.trim();
  }

  render() {
    this._element = createElement(this.template);
    return this._element;
  }

  bind() {}
}
