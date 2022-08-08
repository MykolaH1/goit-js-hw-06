/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input 
(подія input), підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/


const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');


userNameInput.addEventListener('input', () => {
   if (userNameInput.value === '') {
      return userNameOutput.textContent = 'Anonymous';
   } 
      return userNameOutput.textContent = userNameInput.value;
});