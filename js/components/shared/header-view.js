import ButtonBackView from './btn-back-view.js';
import {Limit} from "../../data/config";
import timer from './timer-template.js';
import lives from './lives-template.js';
import {AbstractView} from '../../utils/abstract-view.js';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.buttonBack = new ButtonBackView();
    this.header = this.element.querySelector(`.header`);
    this.header.insertBefore(this.buttonBack.element, this.header.firstChild);
  }

  get template() {
    return `<header class="header">
      ${this.state ? timer(this.state.time) + lives(this.state.lives, Limit.LIVES) : ``}
      </header>`;
  }
}
