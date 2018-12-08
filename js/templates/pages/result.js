import {changeScreen, getElementFromTemplate} from '../../game/utils.js';
import greetingScreen from './greeting.js';
import header from '../shared/header.js';
import progress from '../shared/progress.js';
import {Points} from '../../data/config.js';

export default (stats) => {
  const template = `
${header()}
<section class="result">
<h2 class="result__title">${stats.win ? `Победа!` : `Повезет в другой раз!`}</h2>
${stats.win ? `<table class="result__table">
  <tr>
    <td class="result__number"><!--1.--></td>
    <td colspan="2">
    ${progress(stats.answers)}
    </td>
    <td class="result_points">× 100</td>
    <td class="result__total">${stats.correct * Points.REWARD}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${stats.fast} <span class="stats__result stats__result--fast"></span></td>
    <td class="result_points">× ${Points.BONUS}</td>
    <td class="result__total">${stats.fast * Points.BONUS}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${stats.lives} <span class="stats__result stats__result--alive"></span></td>
    <td class="result_points">× ${Points.BONUS}</td>
    <td class="result__total">${stats.lives * Points.BONUS}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${stats.slow} <span class="stats__result stats__result--slow"></span></td>
    <td class="result_points">× ${Points.PENALTY}</td>
    <td class="result__total">${stats.slow * Points.PENALTY}</td>
  </tr>
  <tr>
    <td colspan="5" class="result__total  result__total--final">${stats.total}</td>
  </tr>
</table>` : `<table class="result__table">
  <tr>
    <td class="result__number"><!--2.--></td>
    <td>
    ${progress(stats.answers)}
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>

</section>`}`;

  const element = getElementFromTemplate(template);
  const btnBack = element.querySelector(`.back`);

  btnBack.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  return element;
};

