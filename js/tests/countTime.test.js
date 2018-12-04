import {assert} from 'chai';
import {stopwatch} from '../game/countTime.js';

describe(`Check the stopwatch`, () => {
  const testTimer = stopwatch(10, () => {}, () => {});

  testTimer.tick();
  testTimer.tick();

  it(`should count from given number of seconds to 0`, () => {
    assert.equal(testTimer.time, 8);
  });

  it(`should not go below 0`, () => {
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    assert.equal(testTimer.time, 0);
  });

  it(`should not allow to set invalid value`, () => {
    assert.throws(() => stopwatch(-1), /Time should not be negative value/);
    assert.throws(() => stopwatch([]), /Time should be of type number/);
    assert.throws(() => stopwatch(`Jan 5, 2019 15:37:25`), /Time should be of type number/);
    assert.throws(() => stopwatch(), /Time should be of type number/);
  });

});
