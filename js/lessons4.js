// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// js/
// export default [
//     {
//       name: 'pajero',
//       img: "https://smart-style.com.ua/uploads/mitsubishi-pajero-2011.jpg",
//       price: 950000,
//       description: "Широкий вибір комплектацій дозволяє підібрати автомобіль під ваші потреби та стиль життя. Тип привода, потужність двигуна та кількість місць у салоні — порівняти комплектації та ціни стало ще простіше.",
//     },

//{
//     name: 'jeep',
//     img: "https://ukravto.ua/files/Text/190225_JEEP_NEW_CHEROKEE_9.jpg",
//     price: 1200000,
//     description:
//       'Як і всі моделі Jeep - володіє безпрецедентним поєднанням ходових якостей, комфортності та міського шику. 2,4-літровий бензиновий двигун в поєднанні з шестиступінчастою автоматичною коробкою передач, яка відрізняється плавністю перемикання.',

//   },
//   {
//     name: 'toyota',
//     img: "https://molbuk.ua/uploads/posts/2021-06/1623319390_toyota_camry.jpg",
//     price: 999000,
//     description:
//       'Оснащений тихим самозарядним гібридним двигуном об’ємом 2,5 літра, автомобіль забезпечує значний крутний момент на низьких оборотах і феноменальну потужність на високих, а також краще реагування на дії водія та легше прискорення.',
//   },
// {
//     name: 'range rover',
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UDUbCd6nzB5lO33DgkvyXJD4OOoKEsCemg&usqp=CAU",
//     price: 5328000,
//     description:
//       'Редуктивний характер дизайну не містить зайвих деталей, що створює форму, яка демонструє захоплюючий дух сучасності. Це найбажаніший Range Rover серед усіх існуючих.',
//   },
// ];

// html/
// <ul class="js-goods"></ul>

// import cars from "./date/cars.js"

// const listEl = document.querySelector('.js-goods');

// function createElements ({name, img, price, description}){
// const oneCar = document.createElement('li');
// const title = document.createElement('h2');
// const photo = document.createElement('img');
// const carPrice = document.createElement('p');
// const text = document.createElement('p');

// title.textContent = name;
// photo.src = img;
// photo.width = 300;
// carPrice.textContent = price;
// text.textContent = description;

// oneCar.append(photo, title, carPrice, text);
// return oneCar;
// }

// const elements = cars.map(createElements);
// listEl.append(...elements);

// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// const formEl = document.querySelector('.form');
// const inputPrice = document.querySelector('#price');
// const quantityPrice = document.querySelector('#quantity');
// const totalPrice = document.querySelector('.text-right');
// const spanText = document.querySelector('.amount');

// formEl.addEventListener('input', calc);
// function calc() {
//     spanText.textContent = quantityPrice.value;
//     const calcTotal = inputPrice.value * quantityPrice.value;
//     console.log(calcTotal);
//     totalPrice.textContent = calcTotal;
// }

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)

const instruments = [
  {
    id: 1,
    img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
    name: "Молоток",
    price: 150,
  },
  {
    id: 2,
    img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
    name: "Перфоратор",
    price: 3000,
  },
  {
    id: 3,
    img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
    name: "Рівень",
    price: 2000,
  },
];

const markup = document.querySelector(".js-list");

function createMarkup() {
  const result = instruments
    .map(({ id, img, name, price }) => {
      return `    <li data-id = ${id}>
      <img src="${img}" alt="${name}">
      <h2>${name}</h2>
      <p>${price}</p>
    </li>`;
    })
    .join("");
  console.log(result);
  markup.insertAdjacentHTML("beforeend", result);
}

createMarkup();
