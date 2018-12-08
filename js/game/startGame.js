import gameScreen from '../templates/pages/game.js';
import resultScreen from '../templates/pages/result.js';
import {changeScreen} from './utils.js';
import {INITIAL_STATE, levels} from '../data/data.js';
import {changeLevel} from './changeLevel.js';
import {decreaseLives} from './decreaseLives';
import {getStatictic} from './score';
import {LIMIT} from '../data/config.js';

// const gameScreen = (state, level) => {
//   const template = `
// ${header(state)}
// <section class="game">
// <p class="game__task">${level.task}</p>
// ${getQuestions(level)}
// ${progress(state.answers)}
// </section>
// `;

//   const element = getElementFromTemplate(template);
//   const btnBack = element.querySelector(`.back`);
//   btnBack.addEventListener(`click`, () => {
//     changeScreen(greetingScreen);
//   });
//   return element;
// };

const startGame = () => {
  const updateGame = (game) => {
    let level = levels[game.level];
    let levelScreen = gameScreen(game, level);
    changeScreen(levelScreen);

    const form = levelScreen.querySelector(`.game__content`);

    const saveAnswer = (state, isCorrect) => {
      const newAnswer = isCorrect ? `correct` : `wrong`;
      const newState = Object.assign({}, state);
      newState.answers.push(newAnswer);
      return newState;
    };

    const goNextLevel = (answer) => {
      game = saveAnswer(game, answer);
      if (!answer) {
        if (game.lives === 0) {
          changeScreen(resultScreen(getStatictic(game)));
          return;
        }
        game = decreaseLives(game);
      }
      game = changeLevel(game, game.level + 1);
      if (game.level >= LIMIT.LEVELS) {
        changeScreen(resultScreen(getStatictic(game)));
        return;
      }

      updateGame(game);
    };

    if (level.type === `guessOne`) {
      form.addEventListener(`click`, (evt) => {
        let isCorrect = evt.target.src === level.question.answer ? true : false;
        goNextLevel(isCorrect);
      });
    }

    if (level.type === `guessEach`) {
      form.addEventListener(`change`, () => {
        const options = Array.from(form.querySelectorAll(`input[type=radio]:checked`));
        if (options.length === level.questions.length) {
          let isCorrect = options.every((option, index) => option.value === level.questions[index].answer);
          goNextLevel(isCorrect);
        }
      });
    }
  };

  const newGame = Object.assign({}, INITIAL_STATE);
  newGame.answers = [];
  updateGame(newGame);
};

export default startGame;
