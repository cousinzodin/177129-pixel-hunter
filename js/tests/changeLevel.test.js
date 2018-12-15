import assert from 'assert';
import {changeLevel} from '../game/changeLevel.js';
import {InitialState} from '../data/config.js';


describe(`Check level changer`, () => {
  it(`should change level`, () => {
    assert.strictEqual(changeLevel(InitialState, 2).level, 2);
    assert.strictEqual(changeLevel(InitialState, 0).level, 0);
  });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => changeLevel(InitialState, 15).level, /Level should not more max number/);
    assert.throws(() => changeLevel(InitialState, -1).level, /Level should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => changeLevel(InitialState, []).level, /Level should be of type number/);
    assert.throws(() => changeLevel(InitialState).level, /Level should be of type number/);
  });
});
