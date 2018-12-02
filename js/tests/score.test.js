import {assert} from 'chai';
import {score} from '../game/score';
import {Mock} from './mock';
import {LIMIT, POINTS} from '../config';

const maxPoints = LIMIT.LEVELS * POINTS.REWARD + LIMIT.LIVES * POINTS.BONUS;
const minPoints = (LIMIT.LEVELS - LIMIT.LIVES) * (POINTS.REWARD + POINTS.PENALTY);
const maxPointsWithBonuses = LIMIT.LEVELS * (POINTS.REWARD + POINTS.BONUS) + LIMIT.LIVES * POINTS.BONUS;
const slowPoints = LIMIT.LEVELS * (POINTS.REWARD + POINTS.PENALTY) + LIMIT.LIVES * POINTS.BONUS;
const thoWrongPoints = (LIMIT.LEVELS - 2) * POINTS.REWARD + POINTS.BONUS;

describe(`calculating score`, () => {
  describe(`should caclulate points`, () => {
    it(`should return correct points if all answers correct`, () => {
      assert.equal(maxPoints, score(Mock.answers.allCorrect, LIMIT.LIVES));
    });
    it(`should return correct points if all answers slow`, () => {
      assert.equal(slowPoints, score(Mock.answers.allSlow, LIMIT.LIVES));
    });
    it(`should return correct points if two lives spent`, () => {
      assert.equal(thoWrongPoints, score(Mock.answers.twoWrong, 1));
    });
    it(`should return minimum points if all answers slow and all lives spent`, () => {
      assert.equal(minPoints, score(Mock.answers.worst, 0));
    });
    it(`should return maximum points with maximum bonuses if all answers correct and fast and al lives intact`, () => {
      assert.equal(maxPointsWithBonuses, score(Mock.answers.allFast, LIMIT.LIVES));
    });
  });
  it(`should return -1 if player did not pass all levels`, () => {
    assert.equal(-1, score(Mock.answers.notComplete, 0));
    assert.equal(-1, score(Mock.answers.allWrong, 0));
  });
  it(`should not accept answers with more errors then spent lives`, () => {
    assert.throws(() => score(Mock.answers.invalid, 0).level, /Too many wrong answers/);
    assert.throws(() => score(Mock.answers.invalid, 3).level, /Too many wrong answers/);
    assert.throws(() => score(Mock.answers.twoWrong, 3).level, /Too many wrong answers/);
    assert.throws(() => score(Mock.answers.twoWrong, 2).level, /Too many wrong answers/);
  });
  it(`should not accept invalid values`, () => {
    assert.throws(() => score(25, 3).level, /First argument should be array of answers/);
    assert.throws(() => score(Mock.answers.allCorrect, true).level, /Lifes should be of type number/);
    assert.throws(() => score(Mock.answers.allCorrect, -1), /Lifes should not be negative value/);
  });
});
