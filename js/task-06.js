
const symbolInputEl = document.querySelector('#validation-input');
const symbolInputDataEl = document.querySelector('#validation-input[data-length="6"]');

symbolInputEl.addEventListener('blur', () => {
   if (symbolInputEl.value.length !== +(symbolInputDataEl.dataset.length) && (symbolInputEl.value.length) !== 0) {
      symbolInputEl.classList.remove('valid');
      symbolInputEl.classList.add('invalid');
   } else if (symbolInputEl.value.length === +(symbolInputDataEl.dataset.length)) {
      symbolInputEl.classList.remove('invalid');
      symbolInputEl.classList.add('valid');
   } else {
      symbolInputEl.classList.remove('invalid');
      symbolInputEl.classList.remove('valid');
   }
});