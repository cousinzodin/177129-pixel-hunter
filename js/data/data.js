import {Limit} from "./config";
import images from "./images.js";

export const INITIAL_STATE = {
  level: 0,
  time: Limit.TIME,
  lives: Limit.LIVES,
  answers: [],
};

export const levels = [
  {
    type: `guessOne`,
    task: `Найдите рисунок среди изображений`,
    question: {
      options: [
        images.photos[1],
        images.paintings[2],
        images.photos[2],
      ],
      answer: images.paintings[2],
    }
  },
  {
    type: `guessEach`,
    task: `Угадайте, фото или рисунок?`,
    questions: [
      {
        image: images.photos[0],
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
        image: images.photos[1],
        options: [`photo`, `paint`],
        answer: `photo`,
      },
      {
        image: images.paintings[2],
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
        images.photos[1],
        images.paintings[2],
        images.photos[2],
      ],
      answer: images.paintings[2],
    }
  },
  {
    type: `guessEach`,
    task: `Угадайте, фото или рисунок?`,
    questions: [
      {
        image: images.photos[0],
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
        image: images.photos[1],
        options: [`photo`, `paint`],
        answer: `photo`,
      },
      {
        image: images.paintings[2],
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
        images.photos[1],
        images.paintings[2],
        images.photos[2],
      ],
      answer: images.paintings[2],
    }
  },
  {
    type: `guessEach`,
    task: `Угадайте, фото или рисунок?`,
    questions: [
      {
        image: images.photos[0],
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
        image: images.photos[1],
        options: [`photo`, `paint`],
        answer: `photo`,
      },
      {
        image: images.paintings[2],
        options: [`photo`, `paint`],
        answer: `paint`,
      },
    ],
  },
  {
    type: `guessEach`,
    task: `Угадайте для каждого изображения, фото или рисунок?`,
    questions: [
      {
        image: images.photos[1],
        options: [`photo`, `paint`],
        answer: `photo`,
      },
      {
        image: images.paintings[2],
        options: [`photo`, `paint`],
        answer: `paint`,
      },
    ],
  },
];

