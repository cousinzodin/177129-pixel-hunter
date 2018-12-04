export const Mock = {
  answers: {
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
