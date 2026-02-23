/** -------------------------- Loops -------------------------- */

// DRY => Don't Repeat Yourself

// console.log(2 * 1); // +1
// console.log(2 * 2); // +1
// console.log(2 * 3); // +1
// console.log(2 * 4); // +1
// console.log(2 * 5); // +1
// console.log(2 * 6);
// console.log(2 * 7);
// console.log(2 * 8);
// console.log(2 * 9);
// console.log(2 * 10);

// let i = 1; // Initialization

// i = i + 1; // Increment

// i <= 10; // Condition

// for...loop

// for (let i = 1; i <= 10; i += 1) {
//   console.log(2 * i);
// }

// i = 1 => true => 2 * 1 = 2 => Done => Increment
// i = 2 => true => 2 * 2 = 4 => Done => Increment
// i = 3 => true => 2 * 3 = 6 => Done => Increment
// i = 4 => true => 2 * 4 = 8 => Done => Increment
// i = 10 => true => 2 * 10 = 20 => Done

// let i = 10;

// i = i - 1; // Decrement

// i >= 1;

// for (let i = 10; i >= 1; i -= 1) {
//   console.log(2 * i, "======", i);
// }

// let num = 2;

// num = num + 1;

// num += 1; // num = num +1
// num += 2; // num = num +1

// console.log(num++);
// console.log(num);

// let num = 2;

// num = num + 1;

// num += 1;

// num--;
// num++;

// console.log(num);

// for (let i = 1; i <= 10; i += 1) {
//   if (i > 5) {
//     break;
//   }

//   console.log(2 * i, "=========", i);
// }

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     continue;
//   }

//   console.log(2 * i, "-----------", i);
// }

// break => stop
// continue => skip

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log(3 % 2); // 1
// console.log(2 % 2); // 0

// 3 % 2 => 3 - 1 = 2 => 2/ 2 = 1 => 1

// while - do...while
// let i = 1; // Initialization

// while (i <= 10) {
//   console.log(i * 2);
//   i++;
// }

// do {
//   console.log(i * 2);
//   i++;
// } while (i <= 10);

let num = 4;

// if (num === 5) {
//   console.log("Hello");
// } else if (num === 4) {
//   console.log("Welcome");
// } else {
//   console.log("Hola");
// }

// num === 5
//   ? console.log("Hello")
//   : num === 4
//     ? console.log("Welcome")
//     : console.log("Hola");
