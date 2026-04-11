/** ---------------------------- BOM ---------------------------- */
// console.log(window);

// window.console.log(1);

// console.log(1);

// alert("Product has been deleted successfully!");

// let confirmProduct = confirm("Are you sure you want to delete this product?");

// console.log(confirmProduct);

// let username = prompt("What is your name?");

// let userAge = prompt("How old are u?");

// console.log(username);

// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 3000);

// console.log(3);

// let time = setTimeout(function () {
//   console.log(2);
// }, 5000);

// clearTimeout(time);

// setInterval(function () {
//   console.log("Kareem");
// }, 3000);

// let time = setInterval(function () {
//   console.log(4);
// }, 3000);

// clearInterval(time);

// second => 1 2 3 4
// Mille second "ms" => 1 => 1000 , 2 => 2000

// console.log(location);

// let reload = window.document.getElementById("reload");

// reload.addEventListener("click", function () {
//   // Location.replace => No back or forward
//   location.replace("https://www.w3schools.com/html/default.asp");
//   // Location.assign => back & forward
//   location.assign("https://www.w3schools.com/html/default.asp");
// });

// History
// console.log(history);

// history.forward() // To the next page
// history.back() // To the prev page
// history.go() // Numbers (positive + => Forward, negative - => back)

// Local & Session storage
// let userNameInput = document.getElementById("username");
// let userAgeInput = document.getElementById("userAge");
// let addBtn = document.getElementById("add");
// let welcomeMessage = document.getElementById("welcome");

// let message = "";

// if (message) {
//   welcomeMessage.innerText = message;
// }

// addBtn.addEventListener("click", function () {
//   localStorage.setItem("name", userNameInput.value);
//   localStorage.setItem("age", userAgeInput.value);
//   message = `Welcome, ${localStorage.getItem("name")}, your age is ${localStorage.getItem("age")}`;
//   welcomeMessage.innerText = message;
// });

// localStorage.setItem("name", "Kareem");
// localStorage.setItem("age", 24);

// console.log(typeof localStorage.getItem("name"));

// console.log(typeof localStorage.getItem("age"));

// localStorage.setItem("numbers", [1, 2, 3, 4, 5]);

// console.log(localStorage.getItem("numbers"));

// console.log(typeof localStorage.getItem("numbers"));

// localStorage.setItem("product", {
//   title: "Iphone",
//   price: 15,
// });

// JSON - JavaScript Object Notation

// localStorage.setItem("numbers", JSON.stringify([1, 2, 3, 4, 5]));

// localStorage.setItem(
//   "product",
//   JSON.stringify({
//     title: "Iphone",
//     price: 15,
//   }),
// );

// console.log(localStorage.getItem("product"));
// console.log(typeof localStorage.getItem("product"));

// let product = JSON.parse(localStorage.getItem("product"));
// console.log(product);
// console.log(typeof product);

// let deleteNameBtn = document.querySelectorAll(".delete-name")[0];

// deleteNameBtn.addEventListener("click", function () {
//   localStorage.removeItem("name");
// });

// let clearSession = document.querySelectorAll(".clear")[0];

// clearSession.addEventListener("click", function () {
//   localStorage.clear();
// });

let addNameBtn = document.querySelectorAll(".add-name")[0];

addNameBtn.addEventListener("click", function () {
  sessionStorage.setItem("name", "Kareem");
});
