import {Points, Limit} from "../data/config";

const answerToPoints = {
  correct: Points.REWARD,
  wrong: 0,
  fast: Points.REWARD + Points.BONUS,
  slow: Points.REWARD + Points.PENALTY
};

export const getScore = (answers, lives) => {
  if (!Array.isArray(answers)) {
    throw new Error(`First argument should be array of answers`);
  }
  if (answers.length > Limit.LEVELS) {
    throw new Error(`Answers more than questions`);
  }
  if (lives && answers.length < Limit.LEVELS) {
    throw new Error(`game not ended`);
  }
  if (typeof lives !== `number` || !Number.isInteger(lives)) {
    throw new Error(`Lifes should be integer`);
  }
  if (lives < 0) {
    throw new Error(`Lifes should not be negative value`);
  }
  if (answers.length < Limit.LEVELS) {
    return -1; // game lost
  }

  const errors = answers.filter((answer) => answer === `wrong`);
  if (errors.length !== Limit.LIVES - lives) {
    throw new Error(`Too many wrong answers`);
  }

  let points;
  points = answers.reduce((sum, answer) => sum + answerToPoints[answer], lives * Points.BONUS);
  return points;
};

export const getStats = (game) => {
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
    slowPoints: result.slow * Points.PENALTY,
    livesPoints: game.lives * Points.BONUS,
    fastPoints: result.fast * Points.BONUS,
    correctPoints: result.correct * Points.REWARD,
  };
};
