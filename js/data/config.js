
const Limit = {
  LEVELS: 10,
  LIVES: 3,
  TIME: 30,
};

const InitialState = {
  level: 0,
  time: Limit.TIME,
  lives: Limit.LIVES,
  points: 0,
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

export {Points, Speed, InitialState, Limit};

