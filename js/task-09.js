function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorTitleEl = document.querySelector('.color');
const buttonChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');




buttonChangeColorEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorTitleEl.textContent = color;
  bodyEl.style.backgroundColor = color;
});