import {getElementFromTemplate} from '../../game/utils.js';
import {getQuestions} from './questions.js';
import header from '../shared/header.js';
import progress from '../shared/progress.js';
import greetingScreen from './greeting.js';
import resultScreen from './result.js';
import {changeScreen} from '../../game/utils.js';
import {INITIAL_STATE, levels} from '../../data/data.js';
import {changeLevel} from '../../game/changeLevel.js';
import {decreaseLives} from '../../game/decreaseLives';
import {getStatictic} from '../../game/score';
import {LIMIT} from '../../data/config.js';

export default (state, level) => {
  const template = `
${header(state)}
<section class="game">
<p class="game__task">${level.task}</p>
${getQuestions(level)}
${progress(state.answers)}
</section>
`;

  const element = getElementFromTemplate(template);
  const btnBack = element.querySelector(`.back`);
  btnBack.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });
  return element;
};

// const gameStart = () => {
//   const updateGame = (game) => {
//     let level = levels[game.level];
//     let levelScreen = gameScreen(game, level);
//     changeScreen(levelScreen);

//     const form = levelScreen.querySelector(`.game__content`);

//     const saveAnswer = (state, isCorrect) => {
//       const newAnswer = isCorrect ? `correct` : `wrong`;
//       const newState = Object.assign({}, state);
//       newState.answers.push(newAnswer);
//       return newState;
//     };

//     const goNextLevel = (answer) => {
//       game = saveAnswer(game, answer);
//       if (!answer) {
//         if (game.lives === 0) {
//           changeScreen(resultScreen(getStatictic(game)));
//           return;
//         }
//         game = decreaseLives(game);
//       }
//       game = changeLevel(game, game.level + 1);
//       if (game.level >= LIMIT.LEVELS) {
//         changeScreen(resultScreen(getStatictic(game)));
//         return;
//       }

//       updateGame(game);
//     };

//     if (level.type === `guessOne`) {
//       form.addEventListener(`click`, (evt) => {
//         let isCorrect = evt.target.src === level.question.answer ? true : false;
//         goNextLevel(isCorrect);
//       });
//     }

//     if (level.type === `guessEach`) {
//       form.addEventListener(`change`, () => {
//         const options = Array.from(form.querySelectorAll(`input[type=radio]:checked`));
//         if (options.length === level.questions.length) {
//           let isCorrect = options.every((option, index) => option.value === level.questions[index].answer);
//           goNextLevel(isCorrect);
//         }
//       });
//     }
//   };

//   const newGame = Object.assign({}, INITIAL_STATE);
//   newGame.answers = [];
//   updateGame(newGame);
// };

// export default gameStart;
