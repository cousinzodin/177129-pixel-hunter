const app = document.querySelector(`#main`);

export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const changeScreen = (element) => {
  app.innerHTML = ``;
  app.appendChild(element);
};
