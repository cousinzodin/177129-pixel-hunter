export const getQuestions = (level) => {
  if (level.type === `guessEach`) {
    return `<form class="game__content ${level.questions.length === 1 ? `game__content--wide` : ``}">
    ${level.questions.map((q, i) => `<div class="game__option">
      <img src="${q.image}" alt="Option ${i}" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name="question${i}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name="question${i}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`).join(``)}
  </form>
  `;
  }
  if (level.type === `guessOne`) {
    return `<form class="game__content  game__content--triple">
    ${level.question.options.map((option, i) => `<div class="game__option">
    <img src="${option}" alt="Option ${i}" width="304" height="455">
      </div>`).join(``)}
    </form>
    `;
  }
  return ``;
};

