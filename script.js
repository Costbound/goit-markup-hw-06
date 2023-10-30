const menuOpenBtn = document.querySelector(".header-menu-link"); 
const menuCloseBtn = document.querySelector(".header-close-btn");
const modalOpenBtn = document.querySelector(".request-button");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const menuWindow = document.querySelector(".header-links-container");
const modalWindow = document.querySelector(".backdrop-container");

menuOpenBtn.addEventListener("mousedown", () => {menuWindow.classList.add("is-open")});
menuCloseBtn.addEventListener("click", () => {menuWindow.classList.remove("is-open")});
modalOpenBtn.addEventListener("click", () => {modalWindow.classList.add("is-open")});
modalCloseBtn.addEventListener ("click", () => {modalWindow.classList.remove("is-open")});

