export const guessOne = (level) => {
  return `<form class="game__content  game__content--triple">
    ${level.question.options.map((option, i) => `<div class="game__option">
    <img src="${option}" alt="Option ${i}" width="304" height="455">
      </div>`).join(``)}
    </form>
    `;
};

