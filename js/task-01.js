const listTitleEl = document.querySelectorAll('#categories ul');
console.log(`Number of categories: ${listTitleEl.length}`);


const itemEl = document.querySelectorAll('li.item');
itemEl.forEach(el => {
   console.log(`Category: ${el.querySelector('h2').textContent}`);
   console.log(`Elements: ${el.querySelectorAll('li').length}`);
});

/* 
1)Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
2)Для кожного элемента li.item у спику ul#categories, 
знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
і кількість елементів в категорії (усіх <li>, вкладених в нього).

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5
*/