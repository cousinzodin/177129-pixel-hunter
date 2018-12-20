import GreetingView from './greeting-view.js';
import router from '../../../router.js';

export default () => {
  const view = new GreetingView();
  view.onClick = () => {
    router.showRules();
  };

  return view.element;
};

