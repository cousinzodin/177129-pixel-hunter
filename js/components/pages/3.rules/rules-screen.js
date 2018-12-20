import RulesView from './rules-view.js';
import router from '../../../router.js';

export default () => {
  const view = new RulesView();

  view.header.buttonBack.onClick = () => {
    router.showGreeting();
  };

  view.onInput = (value) => {
    view.btnNext.disabled = value ? false : true;
  };

  view.onSubmit = () => {
    router.startGame();
  };

  return view.element;
};
