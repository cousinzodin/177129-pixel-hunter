
const LIMIT = {
  LEVELS: 10,
  LIVES: 3,
  TIME: 30,
};

const INITIAL_STATE = {
  level: 0,
  time: LIMIT.TIME,
  lives: LIMIT.LIVES,
  points: 0,
  answers: [],
};

const POINTS = {
  REWARD: 100,
  BONUS: 50,
  PENALTY: -50,
};

const SPEED = {
  SLOW: 20,
  FAST: 10,
};

export {POINTS, SPEED, INITIAL_STATE, LIMIT};

