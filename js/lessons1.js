// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// const name = "ГАЛИНА";
// const age = 35;
// const language = "JAVASCRIPT";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${language}`;

// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН,
// І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Give your name");
// const mail = prompt("Give your mail");
// const tel = prompt("Give your phone number");

// const message = `User ${name} uses ${mail} mail and ${tel} phone number.`;

// console.log(message);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const tivyPrice = Number(prompt("Введіть ціну телевізору")) ;
// const telefonPrice = +prompt("Введіть ціну телефону");
// const tabletPrice = +prompt("Введіть ціну планшету");
// const message = tivyPrice + telefonPrice + tabletPrice;
// console.log(message);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО,
// ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const question = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));

// if (question === 12) {
//     let message = alert(`Вірно`)
// } else {
//     message = alert(`НЕ ЗНАЄТЕ? 12`);
// }
/*
ЗАДАЧА 5
НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО, ЧИ НЕ ПАРНЕ.
*/

// const number = Number(prompt("Введіть число"));
// /if (number % 2 === 0) {
//     console.log("парне")
// }
// else {
//     console.log ("непарне")
// }

// const isParne = number % 2 === 0 ? "парне" : "непарне";
// console.log(isParne);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt("Введіть місяць"));

//  if (month === 12 || month === 1 || month === 2) {
//     console.log("Зима");
//  } else if (month >= 3 && month <= 5) {
//      console.log("Весна");
//  } else if (month >= 6 && month <= 8) {
//      console.log("Літо");
//  } else if (month >= 9 && month <= 11) {
//      console.log("Осінь");
//  } else {
//      console.log("Такого місяця не існує!");
// }
// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

const subskription = prompt('Оберіть період підписки').toLowerCase();

// if (subskription === "день") {
//   console.log(1.99);
// } else if (subskription === "неділя") {
//   console.log(5.99);
// } else if (subskription === "місяць") {
//   console.log(10.99);
// } else if (subskription === "рік") {
//   console.log(100.99);
// } else {
//   console.log("Помилка");
// }

switch (subskription) {
  case 'день':
    console.log(1.99);
    break;
  case 'неділя':
    console.log(5.99);
    break;
  case 'місяць':
    console.log(10.99);
    break;
  case 'рік':
    console.log(100.99);
    break;
  default:
    console.log('Помилка');
}

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// const login = 'sasha';
// const password = 12345;

// const userLogin = prompt('Введіть логін');
// const userPassword = Number(prompt('Введіть пароль'));

// if (userLogin === login && password === userPassword) {
//   console.log('Вірно');
// } else {
//   console.log('Помилка');
// }

// const resolt =
//   userLogin === login && userPassword === password ? 'Вірно' : 'Помилка';
// console.log(resolt);


