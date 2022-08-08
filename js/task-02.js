const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/*
1)Створить окремий елемент <li>.
Обов'язково використовуй метод document.createElement().
2)Додасть назву інгредієнта як його текстовий вміст.
3)Додасть елементу клас item.
4)Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/


const listEl = document.querySelector('#ingredients');


const ing = ingredients.map(el => {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = el;
  return list;
});

listEl.append(...ing);