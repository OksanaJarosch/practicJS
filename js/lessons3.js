// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//     const name = prompt("user name")
//     callback(name);
// }

// function greet(name) {
//     console.log(`Привіт ${name}`)
// }

// letMeSeeYourName(greet);
// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// const makeProduct = (name, price, callbcak) => {
//   const product = { name, price, id: Date.now() }
//   callbcak(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Холодильник", 10000, showProduct);

// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },

  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },

  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
// 1)получити масив вчених які народились у 19ст;

// const filteredArray = scientists
//   .filter(({ born }) => born >= 1800 && born < 1900)
//   .map(({ name, surname }) => `${name} ${surname}`);
// console.log(filteredArray);

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// const filteredAge = scientists.reduce(
//   (acc, nextelement) => acc + (nextelement.dead - nextelement.born),
//   0
// );
// console.log(filteredAge / scientists.length);

// 3) відсортувати по алфавіту;

// const sortArr = [...scientists].sort((a, b) => (a.name > b.name) ? 1 : -1);

// console.log(sortArr);

// 4)відсортувати по кількості прожитих років;

// const ageArrSort = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born)).map(({ born, dead }) => { return dead - born });
// console.log(ageArrSort);

// 5) відфільтрувати, хто народився в 15, 16, 17ст;

// const filteredArray = scientists.filter(scientist => scientist.born >= 1400 && scientist.born < 1700).map(({name, born }) => `${name} ${born}`)
// console.log(filteredArray);

// 6)знайти рік народження Albert Einstein;
// const yearOfBorn = scientists.find(({ name, surname }) => name === 'Albert' && surname === 'Einstein');
// console.log(yearOfBorn.born);

// 7)визначити, чи усі вчені працювали у 19ст;

// const isWorking = scientists.every(({ born }) => born >= 1800 && born <= 1882);
// console.log(isWorking);

// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };

// function Person(firstName, lastName, age, gender, interest) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interest = interest;

//   Person.prototype.bio = function () {
//     console.log(`Привіт ${this.firstName} ${this.lastName} мені ${this.age} років. Мені подобається ${this.interest}`);
//   }

//   this.greeting= function () {
//     console.log(`Привіт, я ${this.firstName} ${this.lastName}`);
//   }
// }

// const myPerson = new Person("Artem", "Skyba", 27, "Male", "Programming");

// console.log(myPerson);
// myPerson.bio();
// myPerson.greeting();

// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

class User {
  constructor(username, age, numberOfPosts) {
    this.username = username;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
  }
  getInfo() {
    return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }
  greeting = () => {
    console.log(
      `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
    );
  };
}

const user = new User("Arseniy", 15, 13);

console.log(user);
// user.getInfo();

class Person extends User {
  constructor(username, age, numberOfPosts) {
    super(username, age, numberOfPosts);
  }
}

const person = new Person("Olha", 40, 12);
console.log(person.getInfo());
