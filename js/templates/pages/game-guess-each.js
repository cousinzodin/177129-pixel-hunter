export const guessEach = (level, isWide) => {
  return `<form class="game__content ${isWide ? `game__content--wide` : ``}">
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
};

