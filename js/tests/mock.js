const games = (repeat, result) => new Array(repeat).fill(result);

export const Mock = {
  answers: {
    notComplete: [...games(4, `correct`)],
    allWrong: [...games(4, `wrong`)],
    allCorrect: [...games(10, `correct`)],
    allFast: [...games(10, `fast`)],
    allSlow: [...games(10, `slow`)],
    worst: [
      ...games(3, `wrong`),
      ...games(7, `slow`),
    ],
    twoWrong: [
      ...games(2, `wrong`),
      ...games(8, `correct`),
    ],
    invalid: [
      ...games(4, `wrong`),
      ...games(6, `slow`),
    ],
  },
  answeprs: {
    notComplete: [`correct`, `correct`, `correct`, `correct`],
    allWrong: [`wrong`, `wrong`, `wrong`, `wrong`],
    allCorrect: [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`],
    allFast: [`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`],
    allSlow: [`slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`],
    worst: [`wrong`, `wrong`, `wrong`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`],
    twoWrong: [`wrong`, `wrong`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`],
    invalid: [`wrong`, `wrong`, `wrong`, `wrong`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`],
  }
};
