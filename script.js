const burger = document.querySelector(".menu");
const nav = document.querySelector(".link-list");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});
