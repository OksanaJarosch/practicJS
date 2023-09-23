// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// const BASE_URL = "https://pixabay.com/api/";
// const KEY = "39616729-48f7c3a0adac5813f5f0e61de";
// const container = document.querySelector(".js-container");

// fetch(`${BASE_URL}?key=${KEY}`)
// .then(response => {
//     if(!response.ok){
//         throw new Error (response.statusText)
//     }
//     return response.json();
// })
// .then(data => createMarkup(data.hits))
// .catch(err => console.log(err))

// //largeImageURL

// function createMarkup(arr) {
//    const div = document.createElement("div");
//    arr.forEach( (el) => {
// const photo = document.createElement("img");
// photo.src = el.largeImageURL;
// photo.width = 400;
// div.appendChild(photo);
//    })
// container.appendChild(div);
// }

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const containerEl = document.querySelector("#container-el");

// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(event) {
//     event.preventDefault()
//     const result = input.value;

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${result}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json();
//         })
//         .then(data =>
//             renderColection(data.drinks))
//         .catch(error =>
//             console.log(error))
//         }

// function markup({ strDrinkThumb, strInstructions, strDrink }) {
//     const createMarkup = `<div class="drink">
//         <h2 class="drink-name">${strDrink}</h2>
//         <img src="${strDrinkThumb}" alt="${strDrink}" />
//         <p class="instruction">${strInstructions}</p>
//       </div>`
//     containerEl.insertAdjacentHTML("beforeend", createMarkup)
// }

// function renderColection(arr) {
//     arr.forEach(el =>
//         markup(el))
// }


// strInstructions - instruction
// strDrinkThumb - img
// strDrink - name


// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
//
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const containerEl = document.querySelector("#container-el");
const buttonMore = document.querySelector(".more-btn")
let currentConst = 1;

buttonMore.addEventListener("click", handlerSubmit)

function handlerSubmit(event) {
    event.preventDefault()
    const result = input.value;
    fetch(`https://api.github.com/search/users?q=${result}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&per_page=5&page=${currentConst}`)
    .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
    })
        .then(data => {
            if (data.items.length > 0) {
                renderColection(data.items)
                currentConst++
            } else {
                alert("No results")
            }
        })
        // .then(data => renderColection(data.items))
    .catch(error => console.log(error))
}



form.addEventListener("submit", handlerSubmit) 

function markup({ login, avatar_url, html_url }) {
    const createMarkup = `<div class="drink">
        <h2 class="drink-name">${login}</h2>
        <img src="${avatar_url}" alt="${login}" />
        <a href="${html_url}">Link</a>
      </div>`
    containerEl.insertAdjacentHTML("beforeend", createMarkup)
}

function renderColection(arr) {
    arr.forEach(el =>
        markup(el))
}