export const stopwatch = (delay, tickCallback = () => {}, timerEndCallback = () => {}) => {
  if (typeof delay !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (delay < 0) {
    throw new Error(`Time should not be negative value`);
  }

  let time = delay;

  return {
    tick() {
      if (time > 0) {
        time = time - 1;
        if (time === 0) {
          timerEndCallback();
        } else {
          tickCallback();
        }
      }
    },
    get time() {
      return time;
    }
  };
};

export const startCountdown = (delay, tickCallback = () => {}, timerEndCallback = () => {}) => {
  const timer = stopwatch(delay, tickCallback, timerEndCallback);
  const t = setInterval(function () {
    timer.tick();
    if (timer.time === 0) {
      clearInterval(t);
    }
  }, 1000);
};
