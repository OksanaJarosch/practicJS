// Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

const header = document.querySelector("header");
const nav = document.querySelector(".nav");
console.log(header.clientHeight);
console.log(header.clientWidth);

const clientHeight = header.clientHeight;

window.addEventListener("scroll", fixedNav);
function fixedNav() {
  if (scrollY > clientHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}
