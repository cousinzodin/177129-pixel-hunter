import {LIMIT} from "../data/config";

export const decreaseLives = (state) => {

  if (state.lives <= 0) {
    throw new Error(`Number of lives should not be zero or less than zero`);
  }

  if (state.lives > LIMIT.LIVES) {
    throw new Error(`Number of lives left is bigger than max`);
  }

  const newGame = Object.assign({}, state);
  newGame.lives = newGame.lives - 1;

  return newGame;
};
