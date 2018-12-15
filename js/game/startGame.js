import gameScreen from '../templates/pages/game.js';
import resultScreen from '../templates/pages/result.js';
import {changeScreen} from './utils.js';
import {InitialState, levels} from '../data/data.js';
import {changeLevel} from './changeLevel.js';
import {decreaseLives} from './decreaseLives';
import {getStats} from './score';
import {Limit} from '../data/config.js';

const startGame = () => {
  const updateGame = (game) => {
    let level = levels[game.level];
    let levelScreen = gameScreen(game, level);
    changeScreen(levelScreen);

    const form = levelScreen.querySelector(`.game__content`);

    const saveAnswer = (state, isCorrect) => {
      const newAnswer = isCorrect ? `correct` : `wrong`;
      return Object.assign({}, state, {
        answers: [...state.answers, newAnswer],
      });
    };

    const goNextLevel = (answer) => {
      game = saveAnswer(game, answer);
      if (!answer) {
        if (game.lives === 0) {
          changeScreen(resultScreen(getStats(game)));
          return;
        }
        game = decreaseLives(game);
      }
      game = changeLevel(game, game.level + 1);
      if (game.level >= Limit.LEVELS) {
        changeScreen(resultScreen(getStats(game)));
        return;
      }

      updateGame(game);
    };

    if (level.type === `guessOne`) {
      form.addEventListener(`click`, (evt) => {
        let isCorrect = evt.target.getAttribute(`src`) === level.question.answer ? true : false;
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

  const newGame = Object.assign({}, InitialState);
  newGame.answers = [];
  updateGame(newGame);
};

export default startGame;
