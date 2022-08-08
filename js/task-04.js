/*
1) Створи змінну counterValue, в якій буде зберігатися поточне значення 
лічильника та ініціалізуй її значенням 0.
2) Додай слухачів кліків до кнопок, всередині яких збільшуй 
або зменшуй значення лічильника.
3) Оновлюй інтерфейс новим значенням змінної counterValue.
*/


const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementEl.addEventListener('click', () => {
   counterValue -=1;
   valueEl.textContent = counterValue;
});

incrementEl.addEventListener('click', () => {
   counterValue += 1;
   valueEl.textContent = counterValue;
});