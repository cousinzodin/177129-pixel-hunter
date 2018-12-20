import assert from 'assert';
import {stopwatch} from '../game/count-time.js';

describe(`Check the stopwatch`, () => {

  let testTimer;

  it(`should count from given number of seconds to 0`, () => {
    testTimer = stopwatch(10, () => {}, () => {});
    testTimer.tick();
    testTimer.tick();
    assert.strictEqual(testTimer.time, 8);
  });

  it(`should not go below 0`, () => {
    testTimer = stopwatch(10, () => {}, () => {});
    let ticks = 13;
    while (ticks > 0) {
      testTimer.tick();
      ticks--;
    }
    assert.strictEqual(testTimer.time, 0);
  });

  it(`should not allow to set invalid value`, () => {
    assert.throws(() => stopwatch(-1), /Time should not be negative value/);
    assert.throws(() => stopwatch([]), /Time should be of type number/);
    assert.throws(() => stopwatch(`Jan 5, 2019 15:37:25`), /Time should be of type number/);
    assert.throws(() => stopwatch(), /Time should be of type number/);
  });

});
