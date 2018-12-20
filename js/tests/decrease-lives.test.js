import assert from 'assert';
import {decreaseLives} from '../game/decrease-lives.js';
import {InitialState} from '../data/config.js';

describe(`Check lives changer`, () => {
  it(`should decrease number of lives by 1`, () => {
    assert.strictEqual(decreaseLives(InitialState).lives, 2);
  });

  it(`should not desrease lives to negative value`, () => {
    assert.throws(() => decreaseLives({
      level: 0,
      lives: 0,
      time: 0
    }).lives, /Number of lives should not be zero or less than zero/);
  });
  it(`should not accept invalid value`, () => {
    assert.throws(() => decreaseLives({
      level: 0,
      lives: 4,
      time: 0
    }).lives, /Number of lives left is bigger than max/);
  });
});
