/** -------------------------- Functions -------------------------- */

// // Definition
// function printHello() {
//   console.log("Hello User");
// }

// // Call
// printHello();

// function printUserName(name) {
//   console.log(name);
//   console.log("Hello " + name);
//   console.log("=====================");
// }

// printUserName("Kareem");
// printUserName("Ahmed");
// printUserName("Hassan");

// Definition => Parameters
// Call => Arguments

// Regular function
// function sumTwoNumbers(num1, num2, num3) {
//   //   console.log(num1, num2, num3);
//   console.log(num1 + num2);
// }

// Anonymous function
// let sumTwoNumbers = function (num1, num2, num3) {
//   console.log(num1, num2, num3);
//   console.log(num1 + num2);
// };

// sumTwoNumbers(2, 10);
// sumTwoNumbers(4, 7);
// sumTwoNumbers(29, 30);

// Return value
// function sumTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// function multiply() {
//   console.log(sumTwoNumbers(2, 5) * 2);
// }

// multiply();

/**
 * Call multiply
 * console
 * sumTwoNumbers(2, 5) => return => return something (num1 + num2) => (2 + 5) => 7
 * 7 * 2
 * 14
 */

/**
 * Need user age
 * Check user age
 * If user age greater than or equal to 18 => Show "Welcome" in the console
 * else => Show "Too young" in the console
 */

// Check user age => Done
// Need user age => Done
// function checkUserAge(userAge) {
//   // If user age greater than or equal to 18 => Show "Welcome" in the console => Done
//   if (userAge >= 18) {
//     return "Welcome";
//     // else => Show "Too young" in the console => Done
//   } else {
//     return "Too Young";
//   }
// }

// console.log(checkUserAge(16));

/**
 * Need products prices
 * Check expensive prices
 * Loop
 * If price greater than 300 => prices
 */

// Need products prices => Done

// let expensivePrices = [];

// function getExpensivePrices(productsPrices) {
//   for (let i = 0; i < productsPrices.length; i++) {
//     if (productsPrices[i] > 300) {
//       expensivePrices.push(productsPrices[i]);
//     }
//   }

//   return expensivePrices;
// }

// console.log(getExpensivePrices([100, 200, 350, 150, 700, 800]));
