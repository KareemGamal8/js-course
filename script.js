// Like button

// let likesBtn = document.getElementById("like-btn");
// let likesCount = document.getElementById("likes-count");

// let count = 0; // Likes number

// let isLiked = false;
// // When click button
// likesBtn.addEventListener("click", function () {
//   isLiked = !isLiked;

//   if (isLiked === true) {
//     count++;
//     likesBtn.style.background = "red";
//   } else {
//     count--;
//     likesBtn.style.background = "white";
//   }

//   likesCount.textContent = count;
// });

/**
 * Click on the button.
 * Check isLiked;
 * If isLiked false => isLiked = true / count + 1 => true
 * If isLiked true => isLiked = false / count - 1 => false
 */

// Password Toggle
// let passwordInput = document.querySelector("#password");

// let btnToggle = document.querySelector("#toggle");

// btnToggle.addEventListener("click", function () {
//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//     btnToggle.innerHTML = "Hide";
//   } else {
//     passwordInput.type = "password";
//     btnToggle.innerHTML = "Show";
//   }
// });

// Add To Cart
// let cartBtn = document.getElementsByClassName("addToCart")[0];

// let countEl = document.getElementsByClassName("count")[0];

// let error = document.getElementById("error");

// let count = 0;

// let productCount = 10;

// cartBtn.addEventListener("click", function () {
//   if (count < productCount) {
//     count++;
//     countEl.textContent = count;
//   } else {
//     error.textContent = "You cant add more than " + productCount;
//   }
// });

// count = 0 => count = 1
// count = 1 => count = 2
// count = 2 => count = 3
// count = 3 => count = 4
// count = 4 => count = 5

// User form
// let form = document.getElementById("form");
// let username = document.getElementById("username");
// let userAge = document.getElementById("userAge");
// let result = document.getElementById("result");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   result.textContent = `Hello, ${username.value}, Your age is: ${userAge.value}`;
// });
