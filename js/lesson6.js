// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ , 
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

const BASE_URL = "https://pixabay.com/api/";
const KEY = "39616729-48f7c3a0adac5813f5f0e61de";
const container = document.querySelector(".js-container");

fetch(`${BASE_URL}?key=${KEY}`)
.then(response => {
    if(!response.ok){
        throw new Error (response.statusText)
    }
    return response.json();
})
.then(data => createMarkup(data.hits))
.catch(err => console.log(err))

//largeImageURL

function createMarkup(arr) {
   const div = document.createElement("div");
   arr.forEach( (el) => {
const photo = document.createElement("img");
photo.src = el.largeImageURL;
photo.width = 400;
div.appendChild(photo);
   })
container.appendChild(div);
}