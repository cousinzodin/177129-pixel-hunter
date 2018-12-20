import {AbstractView} from '../../utils/abstract-view.js';

export default class PopupAlertView extends AbstractView {
  constructor(title, message) {
    super();
    this.title = title;
    this.message = message;
  }

  get template() {
    return `
<section class="modal">
<div class="modal__inner">
  <h2 class="modal__title">${this.title}</h2>
  <p class="modal__text modal__text--error">${this.message}</p>
</div>
</section>`;
  }
}

