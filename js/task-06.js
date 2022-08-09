
const symbolInputEl = document.querySelector('#validation-input');
const symbolInputDataEl = document.querySelector('#validation-input[data-length="6"]');

symbolInputEl.addEventListener('blur', () => {
   if (symbolInputEl.value.length <= Number(symbolInputDataEl.dataset.length)) {
      symbolInputEl.classList.remove('valid');
      symbolInputEl.classList.add('invalid');
   } else {
      symbolInputEl.classList.remove('invalid');
      symbolInputEl.classList.add('valid');
   }
});