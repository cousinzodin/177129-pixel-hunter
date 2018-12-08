import {LIMIT} from "../data/config";

export const changeLevel = (state, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level > LIMIT.LEVELS) {
    throw new Error(`Level should not more max number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  const newGame = Object.assign({}, state, {
    level
  });
  return newGame;
};
