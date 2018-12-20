import greetingScreen from '../2.greeting/greeting-screen.js';
import changeScreen from '../../../utils/change-screen.js';
import ResultView from './result-view.js';

export default (stats) => {
  const view = new ResultView(stats);

  view.header.buttonBack.onClick = () => {
    changeScreen(greetingScreen());
  };

  return view.element;
};
