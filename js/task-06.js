'use strict';




const symbolInputEl = document.querySelector('input');
const symbolInputDataEl = document.querySelector('input[data-length = "6"]');

symbolInputEl.addEventListener('blur', () => {
   if (symbolInputEl.value.length !== Number(symbolInputDataEl.dataset.length)) {
      symbolInputEl.classList.remove('valid');
      symbolInputEl.classList.add('invalid');
   } else {
      symbolInputEl.classList.remove('invalid');
      symbolInputEl.classList.add('valid');
   }
});