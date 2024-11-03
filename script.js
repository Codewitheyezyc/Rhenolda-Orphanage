const donateBtnHTML = document.querySelector(".donate-btn");
const btnHTML = document.querySelector(".btn");
const timesIcon = document.querySelector(".times");
const overlayHTML = document.querySelector(".overlay");

// FORM
const formHTML = document.querySelector(".form-container");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const number = document.querySelector(".number");
const amount = document.querySelector(".amount");

const openForm = function () {
  formHTML.classList.remove("hidden");
};
const closeForm = function () {
  formHTML.classList.add("hidden");
};
const overlay = function () {
  overlayHTML.classList.toggle("hidden");
};

donateBtnHTML.addEventListener("click", (e) => {
  e.preventDefault();
  openForm();
  overlay();
});
btnHTML.addEventListener("click", (e) => {
  e.preventDefault();
  openForm();
  overlay();
});

timesIcon.addEventListener("click", (e) => {
  e.preventDefault();
  closeForm();
  overlay();
});

overlayHTML.addEventListener("click", (e) => {
  e.preventDefault();
  closeForm();
  overlay();
});
