
const Limit = {
  LEVELS: 10,
  LIVES: 3,
  TIME: 30,
};

const INITIAL_STATE = {
  level: 0,
  time: Limit.TIME,
  lives: Limit.LIVES,
  Points: 0,
  answers: [],
};

const Points = {
  REWARD: 100,
  BONUS: 50,
  PENALTY: -50,
};

const Speed = {
  SLOW: 20,
  FAST: 10,
};

export {Points, Speed, INITIAL_STATE, Limit};

