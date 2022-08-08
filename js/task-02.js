const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/*
Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

//створюю функцію для списку
const makelist = () => {
  //Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
  const listEl = document.createElement('li');
  //Додасть елементу клас item.
  listEl.classList.add('item');


}

const test = makelist(ingredients[0]);
console.log(test);










//шукаю чи є ul
//const listEl = document.querySelector('#ingredients');



//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//const list = document.createElement('li');


//Додасть назву інгредієнта як його текстовий вміст.



//Додасть елементу клас item.
//list.classList.add('item');


//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
//listEl.append(list);

