import {POINTS, LIMIT} from "../data/config";

const answerToPoints = {
  correct: POINTS.REWARD,
  wrong: 0,
  fast: POINTS.REWARD + POINTS.BONUS,
  slow: POINTS.REWARD + POINTS.PENALTY
};

export const getScore = (answers, lives) => {
  if (!Array.isArray(answers)) {
    throw new Error(`First argument should be array of answers`);
  }
  if (answers.length > LIMIT.LEVELS) {
    throw new Error(`Answers more than questions`);
  }
  if (lives && answers.length < LIMIT.LEVELS) {
    throw new Error(`game not ended`);
  }
  if (typeof lives !== `number`) {
    throw new Error(`Lifes should be of type number`);
  }
  if (lives < 0) {
    throw new Error(`Lifes should not be negative value`);
  }
  if (answers.length < LIMIT.LEVELS) {
    return -1; // game lost
  }

  const errors = answers.filter((answer) => answer === `wrong`);
  if (errors.length !== LIMIT.LIVES - lives) {
    throw new Error(`Too many wrong answers`);
  }

  let points;
  points = lives * POINTS.BONUS;
  points = points + answers.reduce((sum, answer) => {
    return sum + answerToPoints[answer];
  }, 0);

  return points;
};

export const getStatictic = (game) => {
  const score = getScore(game.answers, game.lives);
  let result = game.answers.reduce(function (count, current) {
    count[current]++;
    return count;
  }, {fast: 0, slow: 0, correct: 0, wrong: 0});

  return {
    answers: game.answers,
    win: score > -1,
    total: score,
    lives: game.lives,
    fast: result.fast,
    slow: result.slow,
    correct: result.correct,
    wrong: result.wrong,
  };
};
