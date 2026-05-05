/**
 * Var / let / const
 * Arrow Functions
 * Template Literals
 * Default Parameters
 * Short-hand properties
 * Ternary Operator
 */

/** Var / let / const */
// 1) Access before initial
// console.log(x);
// var x = 5; // undefined
// let x = 5; // Reference Error
// const x = 5; // Reference Error

// 2) Redeclare
// var z = 6;

// var z = 7; => 7

// let z = 6;

// let z = 7; => Error

// const z = 6;

// const z = 7; => Error

// console.log(z);

// 3) Re-assign
// var x = 5;

// x = 6; => 6

// let x = 5;

// x = 6; => 6

// const x = 5;

// x = 6; => Error

// console.log(x);

// const x = 5;

// x = 6;

// const user = { name: "Kareem", age: 24 };

// user.name = "Ahmed";

// user.address = "Egypt";

// user = { name: "Kareem", age: 24, address: "Egypt" }; => Error

// { name: "Kareem", age: 24 }

// { name: "Kareem", age: 24, address: "Egypt" }

// user = { name: "Ahmed", age: 24 };

// console.log(user);

/** Arrow function */
// Regular
// function sum(a, b) {
//   console.log(a + b);
// }

// Anonymous
// const sum = function (a, b) {
//   console.log(a + b);
// };

// Arrow
// const sum = _ => console.log("Kareem");

// sum(5);

/** Template Literals */

// let name = "Kareem Gamal";
// let name = "Kareem";

// let age = 25;
// Concat
// console.log("Welcome" + " " + name + " " + "Your age is " + age);

// Template Literals
// console.log(`Welcome ${name}, Your age is ${age}`);

/** Default Parameters */
// const showName = (name = "Kareem", age, address = "Egypt") => {
//   console.log(`Hello, ${name}, age: ${age}, address: ${address}`);
// };

// showName(undefined, 15);
// undefined => قيمة غير موجودة
// null => قيمة فارغة

/** Object Shorthand */
// const name = "Kareem",
//   age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user);

/** Ternary Operator */
// let score = 80;

// let result;

// if (score >= 50 && score < 90) {
//   console.log("Pass");
// } else if (score >= 90 && score < 100) {
//   console.log("Excellent");
// } else if (score >= 100) {
//   console.log("So Good");
// } else {
//   console.log("Fail");
// }

// score >= 50 && score < 90
//   ? console.log("Pass")
//   : score >= 90
//     ? console.log("Excellent")
//     : score >= 100
//       ? console.log("So Good")
//       : console.log("Fail");

// if (score >= 50 && score < 90) {
//   console.log("Pass");
// }

// score >= 50 && score < 90 ? console.log("Pass") : null;

/**
 * Let, var and const with scopes
 * Nullish operator
 * Arrow functions
 */
