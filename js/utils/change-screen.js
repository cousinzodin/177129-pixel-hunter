
const app = document.querySelector(`#main`);

export default (element) => {
  app.innerHTML = ``;
  app.appendChild(element);
};
