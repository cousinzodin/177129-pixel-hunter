"use strict";

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const SCREENS_IDS = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`]; // all screens in the right order
const BTNS_TEMPLATE = `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>`;

const app = document.querySelector(`#main`);

const screensDict = {};
Array.from(document.querySelectorAll(`template`)).
  forEach((template) => {
    screensDict[template.id] = template.content;
  });

const appendTemplate = (content, container) => {
  container.innerHTML = ``;
  const shadow = document.createElement(`div`);
  shadow.appendChild(content.cloneNode(true));
  const element = shadow.cloneNode(true);
  container.appendChild(element.cloneNode(true));
};

const showScreenById = (id) => {
  if (screensDict[id]) {
    appendTemplate(screensDict[id], app);
  } else {
    selectScreen(0);
  }
};

let current = 0;
const selectScreen = (screen) => {
  screen = screen < 0 ? SCREENS_IDS.length - 1 : screen;
  screen = screen >= SCREENS_IDS.length ? 0 : screen;
  location.hash = SCREENS_IDS[screen];
  current = screen;
};

const body = document.querySelector(`body`);
body.insertAdjacentHTML(`beforeend`, BTNS_TEMPLATE);
const [btnPrev, btnNext] = document.querySelectorAll(`.arrows__btn`);

const onHashChange = () => {
  if (location.hash) {
    showScreenById(location.hash.substring(1));
  } else {
    selectScreen(0);
  }
};

btnPrev.addEventListener(`click`, () => {
  selectScreen(current - 1);
});

btnNext.addEventListener(`click`, () => {
  selectScreen(current + 1);
});

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      btnNext.focus();
      selectScreen(current + 1);
      break;
    case LEFT_ARROW:
      btnPrev.focus();
      selectScreen(current - 1);
      break;
  }
});

window.addEventListener(`hashchange`, onHashChange);
document.addEventListener(`DOMContentLoaded`, onHashChange);
