const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/*
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

1)Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
2)Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/

//пошукати ул
const galleryEl = document.querySelector('.gallery');

const makeGallery = ({url, alt, width = 200} = {}) => {
  return `
  <li class="gallery_item">
    <img src="${url}" alt="${alt}" width="${width}">
  </li>
  `;

};
//перебрав масив
const galleryCardArr = images.map(el => {
  return makeGallery(el);
});

//вставка карток на сторінку
galleryEl.insertAdjacentHTML('afterbegin', galleryCardArr.join(''));


//додаю флекси і якісь дані цсс
galleryEl.style.display = 'flex';
galleryEl.style.justifyContent = 'space-between';
galleryEl.style.listStyle = 'none';









/*
const makeGallery = ({url, alt, width = 200} = {}) => {
  //створюю лі
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('gallery_item');
  //створюю зображення
  const imgEl = document.createElement('img');

  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.width = width;
  listItemEl.append(imgEl);

  return listItemEl;
};


const galleryCardArr = images.map(el => {
  return makeGallery(el);
});


//вставка карток на сторінку

galleryEl.append(...galleryCardArr);
*/







//створити лі та додати її клас
// const listItemEl = document.createElement('li');
// listItemEl.classList.add('gallery_item');

//створити зображення з  альтернативним текстом
// const imgEl = document.createElement('images');

// imgEl.url = url;
// imgEl.alt = alt;

// listItemEl.append(imgEl);
//вставити все з ул
