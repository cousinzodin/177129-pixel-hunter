"use strict";

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const SCREENS_ORDER = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
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

let current = 0;
const showScreen = (index) => {
  index = index < 0 ? SCREENS_ORDER.length - 1 : index;
  index = index >= SCREENS_ORDER.length ? 0 : index;
  current = index;
  const currentId = SCREENS_ORDER[current];
  appendTemplate(screensDict[currentId], app);
};

showScreen(0);

const body = document.querySelector(`body`);
body.insertAdjacentHTML(`beforeend`, BTNS_TEMPLATE);
const [btnPrev, btnNext] = document.querySelectorAll(`.arrows__btn`);

btnPrev.addEventListener(`click`, () => {
  showScreen(current - 1);
});

btnNext.addEventListener(`click`, () => {
  showScreen(current + 1);
});

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      btnNext.focus();
      showScreen(current + 1);

      break;
    case LEFT_ARROW:
      btnPrev.focus();
      showScreen(current - 1);

      break;
  }
});

