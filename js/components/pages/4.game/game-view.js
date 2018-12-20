import {AbstractView} from '../../../utils/abstract-view.js';
import {guessOne, guessEach, HeaderView, progress} from '../../shared/index.js';

const getQuestions = (level) => {
  if (level.type === `guessEach`) {
    const wide = level.questions.length === 1 ? true : false;
    return guessEach(level, wide);
  }
  if (level.type === `guessOne`) {
    return guessOne(level);
  }
  return ``;
};

export default class GameView extends AbstractView {
  constructor(level, state) {
    super();
    this.level = level;
    this.state = state;
    this.header = new HeaderView(this.state);
    this.element.insertBefore(this.header.element, this.element.firstChild);
  }

  get template() {
    return `
    <section class="game">
    <p class="game__task">${this.level.task}</p>
    ${getQuestions(this.level)}
    ${progress(this.state.answers)}
    </section>
    `;
  }

  onClick() {}

  onAnswer() {}

  bind() {
    const form = this.element.querySelector(`.game__content`);
    if (this.level.type === `guessOne`) {
      form.addEventListener(`click`, (evt) => {
        let isCorrect = evt.target.getAttribute(`src`) === this.level.question.answer ? true : false;
        this.onAnswer(isCorrect);
      });
    }

    if (this.level.type === `guessEach`) {
      form.addEventListener(`change`, () => {
        const options = Array.from(form.querySelectorAll(`input[type=radio]:checked`));
        if (options.length === this.level.questions.length) {
          let isCorrect = options.every((option, index) => option.value === this.level.questions[index].answer);
          this.onAnswer(isCorrect);
        }
      });
    }

  }
}
