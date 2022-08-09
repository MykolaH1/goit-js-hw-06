
const controlInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlInputEl.addEventListener('input', () => {
   textEl.style.fontSize = `${controlInputEl.value}px`;
});
