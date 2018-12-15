import {Limit} from "./config";

export const InitialState = Object.freeze({
  level: 0,
  time: Limit.TIME,
  lives: Limit.LIVES,
  answers: [],
});

export const levels = [
  {
    type: `guessOne`,
    task: `Найдите фото среди изображений`,
    question: {
      options: [
        `img/question-1-1.jpg`, // photo
        `img/question-1-2.jpg`,
        `img/question-1-3.jpg`,
      ],
      answer: `img/question-1-1.jpg`,
    }
  },
  {
    type: `guessEach`,
    task: `Угадайте для каждого изображения, фото или рисунок?`,
    questions: [
      {
        image: `img/question-2-1.jpg`, // photo
        options: [`photo`, `paint`],
        answer: `photo`,
      },
      {
        image: `img/question-2-2.jpg`, // paint
        options: [`photo`, `paint`],
        answer: `paint`,
      },
    ],
  },
  {
    type: `guessEach`,
    task: `Угадайте, фото или рисунок?`,
    questions: [
      {
        image: `img/question-3-1.jpg`, // paint
        options: [`photo`, `paint`],
        answer: `paint`,
      }
    ],
  },
  {
    type: `guessOne`,
    task: `Найдите фото среди изображений`,
    question: {
      options: [
        `img/question-4-1.jpg`, // paint
        `img/question-4-2.jpg`, // paint
        `img/question-4-3.jpg`, // photo
      ],
      answer: `img/question-4-3.jpg`,
    }
  },
  {
    type: `guessEach`,
    task: `Угадайте для каждого изображения, фото или рисунок?`,
    questions: [
      {
        image: `img/question-5-1.jpg`, // photo
        options: [`photo`, `paint`],
        answer: `photo`,
      },
      {
        image: `img/question-5-2.jpg`, // paint
        options: [`photo`, `paint`],
        answer: `paint`,
      },
    ],
  },
  {
    type: `guessOne`,
    task: `Найдите рисунок среди изображений`,
    question: {
      options: [
        `img/question-6-1.jpg`,
        `img/question-6-2.jpg`, // paint
        `img/question-6-3.jpg`,
      ],
      answer: `img/question-6-2.jpg`,
    }
  },
  {
    type: `guessEach`,
    task: `Угадайте, фото или рисунок?`,
    questions: [
      {
        image: `img/question-7-1.jpg`, // paint
        options: [`photo`, `paint`],
        answer: `paint`,
      }
    ],
  },
  {
    type: `guessEach`,
    task: `Угадайте для каждого изображения, фото или рисунок?`,
    questions: [
      {
        image: `img/question-8-1.jpg`, // photo
        options: [`photo`, `paint`],
        answer: `photo`,
      },
      {
        image: `img/question-8-2.jpg`, // paint
        options: [`photo`, `paint`],
        answer: `paint`,
      },
    ],
  },
  {
    type: `guessEach`,
    task: `Угадайте, фото или рисунок?`,
    questions: [
      {
        image: `img/question-9-1.jpg`, // photo
        options: [`photo`, `paint`],
        answer: `photo`,
      }
    ],
  },
  {
    type: `guessEach`,
    task: `Угадайте для каждого изображения, фото или рисунок?`,
    questions: [
      {
        image: `img/question-10-1.jpg`, // paint
        options: [`photo`, `paint`],
        answer: `paint`,
      },
      {
        image: `img/question-10-2.jpg`, // paint
        options: [`photo`, `paint`],
        answer: `paint`,
      },
    ],
  },
];
