import {AbstractView} from '../../../utils/abstract-view.js';
import {HeaderView} from '../../shared/index.js';


export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.header = new HeaderView();
    this.element.insertBefore(this.header.element, this.element.firstChild);
  }

  get template() {
    return `
    <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
    </section>
    `;
  }

  onSubmit() {}

  onInput() {}

  onClick() {}

  bind() {

    const form = this.element.querySelector(`.rules__form`);
    [this.nameField, this.btnNext] = form.elements;

    this.nameField.addEventListener(`input`, (e) => {
      this.onInput(e.target.value);
    });

    form.addEventListener(`submit`, (e) => {
      e.preventDefault();
      this.onSubmit(e.target.value);
    });
  }
}
