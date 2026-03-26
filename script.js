/** -------------------------- DOM -------------------------- */

// Document Object Model

// let title = document.querySelector("h1");
// let section = document.querySelector("div");
// // let text = document.querySelector("p");

// title.innerText = "Hello, World!";
// title.style.color = "red";
// title.style.fontSize = "32px";
// section.innerHTML = "<h1>Hello</h1>";
// document.dir = "ltr";

// Target elements => Done
let btnIncrement = document.querySelector("button");
let btnDecrement = document.getElementById("btn-decrement");
let title = document.getElementsByClassName("title");

// New variable for the number => Done
let num = 0;

// Add this number to title => Done
title[0].innerHTML = num;

// When click on Button, increase the number
btnIncrement.addEventListener("click", function () {
  num++;
  title[0].innerHTML = num;
});

// When click on Button, Decrease the number
btnDecrement.addEventListener("click", function () {
  if (num > 0) {
    num--;
    title[0].innerHTML = num;
  }
});
