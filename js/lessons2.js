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

