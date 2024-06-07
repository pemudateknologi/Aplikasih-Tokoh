/** @format */

/** @format */

const btnPopup = document.getElementById("btn-popup");
const popup = document.querySelector(".popup");
const delet = document.querySelector("a");
const body = document.body;
const containerPopup = document.querySelector(".container-popup");
const settins = document.querySelector(".settings a");
const slider = document.querySelector(".slider");
const humbuger = document.querySelector(".logo a");

humbuger.addEventListener("click", function () {
  slider.classList.toggle("active");
});

btnPopup.addEventListener("click", function () {
  popup.remove("popup");
  containerPopup.remove("container-popup");
});
delet.addEventListener("click", function () {
  body.remove("body");
});
settins.addEventListener("click", function () {
  settins.classList.toggle("active");
});

const dataBarang = document.getElementById("data-barang");
const home = document.querySelector(".container-home");

dataBarang.addEventListener("click", function () {
  home.remove("container-home");
});
