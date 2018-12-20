import router from '../../../router.js';
import changeScreen from '../../../utils/change-screen';
import {showPopup, hidePopup} from '../../../utils/popup.js';
import {PopupConfirmView} from '../../popups/index';
import GameView from './game-view.js';
import {InitialState, levels} from '../../../data/data.js';
import {changeLevel} from '../../../game/change-level.js';
import {decreaseLives} from '../../../game/decrease-lives';
import {getStats} from '../../../game/score';
import {Limit} from '../../../data/config.js';


export const startGame = () => {

  const saveAnswer = (state, isCorrect) => {
    const newAnswer = isCorrect ? `correct` : `wrong`;
    return Object.assign({}, state, {
      answers: [...state.answers, newAnswer],
    });
  };

  const confirmPopup = new PopupConfirmView(`Подтверждение`, `Вы уверены что хотите начать игру заново?`);

  confirmPopup.onConfirm = () => {
    hidePopup(confirmPopup.element);
    router.showGreeting();
  };

  confirmPopup.onCancel = () => {
    hidePopup(confirmPopup.element);
  };

  const updateGame = (game) => {
    let level = levels[game.level];
    let levelScreen = new GameView(level, game);

    levelScreen.header.buttonBack.onClick = () => {
      showPopup(confirmPopup.element);
    };

    levelScreen.onAnswer = (answer) => {
      game = saveAnswer(game, answer);
      if (!answer) {
        if (game.lives === 0) {
          router.showResult(getStats(game));
          return;
        }
        game = decreaseLives(game);
      }
      game = changeLevel(game, game.level + 1);
      if (game.level >= Limit.LEVELS) {
        router.showResult(getStats(game));
        return;
      }
      updateGame(game);
    };

    changeScreen(levelScreen.element);
  };

  const newGame = Object.assign({}, InitialState, {
    answers: [],
  });
  updateGame(newGame);
};

