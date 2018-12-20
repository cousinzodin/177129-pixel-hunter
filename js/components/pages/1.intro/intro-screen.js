import router from '../../../router.js';
import IntroView from './intro-view.js';

export default () => {
  const view = new IntroView();
  view.onClick = () => {
    router.showGreeting();
  };

  return view.element;
};
