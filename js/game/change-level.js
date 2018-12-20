import {Limit} from "../data/config";

export const changeLevel = (state, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level > Limit.LEVELS) {
    throw new Error(`Level should not more max number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  return Object.assign({}, state, {
    level
  });
};
