const body = document.querySelector(`body`);

export const showPopup = (element) => {
  body.appendChild(element);
};

export const hidePopup = (element) => {
  body.removeChild(element);
};

