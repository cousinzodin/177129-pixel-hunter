import {AbstractView} from '../../utils/abstract-view.js';

export default class PopupConfirmView extends AbstractView {
  constructor(title, message) {
    super();
    this.title = title;
    this.message = message;
  }

  get template() {
    return `
    <section class="modal">
    <form class="modal__inner">
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
      <h2 class="modal__title">${this.title}</h2>
      <p class="modal__text">${this.message}</p>
      <div class="modal__button-wrapper">
        <button id="modal-confirm" class="modal__btn">Ок</button>
        <button id="modal-cancel" class="modal__btn">Отмена</button>
      </div>
    </form>
    </section>`;
  }

  bind() {
    const closeButton = this.element.querySelector(`.modal__close`);
    const cancelButton = this.element.querySelector(`#modal-cancel`);
    const confirmButton = this.element.querySelector(`#modal-confirm`);

    const cancelHandler = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      this.onCancel();
    };

    cancelButton.addEventListener(`click`, cancelHandler);
    closeButton.addEventListener(`click`, cancelHandler);

    confirmButton.addEventListener(`click`, (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      this.onConfirm();
    });

  }

  onCancel() {}

  onConfirm() {}
}

