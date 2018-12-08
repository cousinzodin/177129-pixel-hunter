import {getElementFromTemplate} from '../../game/utils.js';
import {getQuestions} from './questions.js';
import header from '../shared/header.js';
import progress from '../shared/progress.js';
import greetingScreen from './greeting.js';
import {changeScreen} from '../../game/utils.js';

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
