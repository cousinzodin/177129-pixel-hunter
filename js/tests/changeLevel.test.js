import assert from 'assert';
import {changeLevel} from '../game/changeLevel.js';
import {INITIAL_STATE} from '../data/config.js';


describe(`Check level changer`, () => {
  it(`should change level`, () => {
    assert.strictEqual(changeLevel(INITIAL_STATE, 2).level, 2);
    assert.strictEqual(changeLevel(INITIAL_STATE, 0).level, 0);
  });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, 15).level, /Level should not more max number/);
    assert.throws(() => changeLevel(INITIAL_STATE, -1).level, /Level should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, []).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_STATE).level, /Level should be of type number/);
  });
});
