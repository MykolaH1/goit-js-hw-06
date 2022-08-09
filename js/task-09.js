function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorTitleEl = document.querySelector('.color');
const buttonChangeColorEL = document.querySelector('.change-color');





buttonChangeColorEL.addEventListener("click", () => {
  colorTitleEl.textContent = getRandomHexColor();

});