/*ЗАДАЧА 1
БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
1)створіть масив styles з елементами «Джаз» і «Блюз»
2)добавте «Рок-н-ролл» в кінець
3)замініть значення в середині на «Классика»
4)видаліть перший елемент і виведіть його в консоль
5)вставте «Рэп» і «Регги» на початок масиву

МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл*/

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.splice(1, 1, 'Классика');
// console.log(styles.shift(0));
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// ЗАДАЧА 2
// Напишіть ф - цію logItems(array), яка буде получати масив і використовуючи цикл for ,
// який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const names = ['Mango', 'Poly', 'Ajax'];

// function logItems(array) {
//   for (let arr of array) {
//     console.log( array.indexOf(arr), arr);
//   }
// }

// logItems(names);

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// const numbers = [2, 17, 94, 1, 23, 37];

// let result = numbers[0];
// for (let i = 0; i < numbers.length-1; i++) {
//   if (numbers[i] < result) {
//     result = numbers[i];
//   }

// }
// console.log(result);

// function findSmallestNumber(numbers) {
//   let result = numbers[0];
//   for (let i = 0; i < numbers.length - 1; i++) {
//       if (numbers[i] < result) {
//         result = numbers[i];
//       }
//   }
//   return result;
// }

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор"; //true
// const newString = "Hello"; //false

// const newStr = str.split('');
// newStr.reverse();
// const reverseStr = newStr.join('');

// console.log(str === reverseStr);

// const newStrReverse = newString.split('').reverse().join('');

// console.log(newStrReverse === newString);

//Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// function calculateAverage(...args) {

//     let allArgs = 0;
//     for (const arg of args) {
//         allArgs += arg;

//     }

//     return allArgs / args.length;
// }

// function calculateAverage() {

//     const newArr = Array.from(arguments);

//      let allArgs = 0;
//     for (const arg of newArr) {
//         allArgs += arg;

//     }
//     return allArgs / newArr.length;
// }

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь")); //Привіт Василь
// console.log(greet()); //Привіт гість

// function greet(name = "guest") {
//   return `Hello, ${name}.`;
// }

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = function(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) => {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// };
// const checkNumbers = (a, b) => a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`

// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// console.log(capitalize('the quick brown fox'));// 'The Quick Brown Fox '

// function capitalize(string) {
//   const words = string.split(" ");
//   const array = [];
//   for (let word of words) {
//     let strings = word[0].toUpperCase();
//     let restStrins = word.slice(1);
//     let finalResalt = `${strings}${restStrins}`;
//     array.push(finalResalt);
//   }

//   return array.join(" ");
// }

// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// function addCourse(name) {
//     if (courses.includes(name)) {
//         console.log('У вас уже є такий курс');
//         return;
//     }
//     courses.push(name);
// }

// function removeCourse(name) {
//     if (courses.indexOf(name) === -1) {
//         console.log('Курс з таким іменем не найдено');
//         return;
//     }
//     courses.splice(courses.indexOf(name), 1);
// }

// function updateCourse(oldName, newName) {
//     let index = courses.indexOf(oldName);
//     courses.splice(index, 1, newName);
// }




// console.log(courses);

// ЗАДАЧА 9
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const userKey = Object.keys(user);
// console.log(userKey);

// for (let key of userKey) {
//     console.log(`${key}: ${user[key]}`);    
// }
