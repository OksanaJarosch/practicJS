// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// const name = "ГАЛИНА";
// const age = 35;
// const language = "JAVASCRIPT";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${language}`;

// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Give your name");
// const mail = prompt("Give your mail");
// const tel = prompt("Give your phone number");

// const message = `User ${name} uses ${mail} mail and ${tel} phone number.`;

// console.log(message);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

const tivyPrice = Number(prompt("Введіть ціну телевізору")) ;
const telefonPrice = +prompt("Введіть ціну телефону");
const tabletPrice = +prompt("Введіть ціну планшету");
const message = tivyPrice + telefonPrice + tabletPrice;
console.log(message);
