import {AbstractView} from '../../../utils/abstract-view.js';
import {HeaderView, progress} from '../../shared/index.js';
import {Points} from '../../../data/config.js';

export default class ResultView extends AbstractView {
  constructor(stats) {
    super();
    this.stats = stats;
    this.header = new HeaderView();
    this.element.insertBefore(this.header.element, this.element.firstChild);
  }

  get template() {
    return `
    <section class="result">
    <h2 class="result__title">${this.stats.win ? `Победа!` : `Повезет в другой раз!`}</h2>
    ${this.stats.win ? `<table class="result__table">
      <tr>
        <td class="result__number"><!--1.--></td>
        <td colspan="2">
        ${progress(this.stats.answers)}
        </td>
        <td class="result_points">× ${Points.REWARD}</td>
        <td class="result__total">${this.stats.correctPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${this.stats.fast} <span class="stats__result stats__result--fast"></span></td>
        <td class="result_points">× ${Points.BONUS}</td>
        <td class="result__total">${this.stats.fastPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.stats.lives} <span class="stats__result stats__result--alive"></span></td>
        <td class="result_points">× ${Points.BONUS}</td>
        <td class="result__total">${this.stats.livesPoints}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${this.stats.slow} <span class="stats__result stats__result--slow"></span></td>
        <td class="result_points">× ${Points.PENALTY}</td>
        <td class="result__total">${this.stats.slowPoints}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.stats.total}</td>
      </tr>
    </table>` : `<table class="result__table">
      <tr>
        <td class="result__number"><!--2.--></td>
        <td>
        ${progress(this.stats.answers)}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>

    </section>`}`;
  }

}
