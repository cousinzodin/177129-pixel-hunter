import assert from 'assert';
import {getScore} from '../game/score';
import {Mock} from './mock';
import {Limit, Points} from '../data/config';

const TestPoints = {
  LIVES_BONUS: Points.BONUS,
  CORRECT_ANSWER: Points.REWARD,
  FAST_ANSWER: Points.REWARD + Points.BONUS,
  SLOW_ANSWER: Points.REWARD + Points.PENALTY,
};

const calcPoints = ({lives = 0, correct = 0, fast = 0, slow = 0} = {}) => {
  return lives * TestPoints.LIVES_BONUS
    + correct * TestPoints.CORRECT_ANSWER
    + fast * TestPoints.FAST_ANSWER
    + slow * TestPoints.SLOW_ANSWER;
};

const minPoints = calcPoints({lives: 0, slow: 7});
const maxPoints = calcPoints({lives: 3, correct: 10});
const twoWrongPoints = calcPoints({lives: 1, correct: 8});
const maxPointsWithBonuses = calcPoints({lives: 3, fast: 10});
const slowPoints = calcPoints({lives: 3, slow: 10});

describe(`calculating score`, () => {

  describe(`should caclulate Points`, () => {

    it(`should return correct points if all answers correct`, () => {
      assert.strictEqual(getScore(Mock.answers.allCorrect, Limit.LIVES), maxPoints);
    });

    it(`should return correct points if all answers slow`, () => {
      assert.strictEqual(getScore(Mock.answers.allSlow, Limit.LIVES), slowPoints);
    });

    it(`should return correct points if two lives spent`, () => {
      assert.strictEqual(getScore(Mock.answers.twoWrong, 1), twoWrongPoints);
    });

    it(`should return minimum points if all answers slow and all lives spent`, () => {
      assert.strictEqual(getScore(Mock.answers.worst, 0), minPoints);
    });

    it(`should return maximum Points with maximum bonuses if all answers correct and fast and al lives intact`, () => {
      assert.strictEqual(getScore(Mock.answers.allFast, Limit.LIVES), maxPointsWithBonuses);
    });
  });

  it(`should return -1 if player did not pass all levels`, () => {
    assert.strictEqual(getScore(Mock.answers.notComplete, 0), -1);
    assert.strictEqual(getScore(Mock.answers.allWrong, 0), -1);
  });

  it(`should not accept answers with more errors then spent lives`, () => {
    assert.throws(() => getScore(Mock.answers.invalid, 0).level, /Too many wrong answers/);
    assert.throws(() => getScore(Mock.answers.invalid, 3).level, /Too many wrong answers/);
    assert.throws(() => getScore(Mock.answers.twoWrong, 3).level, /Too many wrong answers/);
    assert.throws(() => getScore(Mock.answers.twoWrong, 2).level, /Too many wrong answers/);
  });

  it(`should not accept invalid values`, () => {
    assert.throws(() => getScore(25, 3).level, /First argument should be array of answers/);
    assert.throws(() => getScore(Mock.answers.allCorrect, true).level, /Lifes should be integer/);
    assert.throws(() => getScore(Mock.answers.allCorrect, 1.1).level, /Lifes should be integer/);
    assert.throws(() => getScore(Mock.answers.allCorrect, -1), /Lifes should not be negative value/);
  });
});
