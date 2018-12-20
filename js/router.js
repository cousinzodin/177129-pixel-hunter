import changeScreen from './utils/change-screen';
import {InitialState} from './data/data.js';
import {
  greetingScreen,
  introScreen,
  startGame,
  rulesScreen,
  resultScreen
} from './components/pages/index.js';

export default class Router {

  static showIntro() {
    changeScreen(introScreen());
  }

  static showGreeting() {
    changeScreen(greetingScreen());
  }

  static showRules() {
    changeScreen(rulesScreen());
  }

  static startGame() {
    startGame(InitialState);
  }

  static showResult(stats) {
    changeScreen(resultScreen(stats));
  }

}

