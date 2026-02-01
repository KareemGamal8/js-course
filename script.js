// console.log(3 * 1);
// console.log(3 * 2);
// console.log(3 * 3);
// console.log(3 * 4);
// console.log(3 * 5);

// Variables
// var num = 5;

// console.log(num * 1);
// console.log(num * 2);
// console.log(num * 3);
// console.log(num * 4);
// console.log(num * 5);

// var user_name = "Kareem"; // Declaration + Initialization - Assign

// var userAgeAndNumber; // Declaration

// userAgeAndNumber = 25; //Initialization - Assign

// var UserAddress = "Egypt";

// console.log(UserAddress);

// var - let - const

// 1- Access variable before initialization
// console.log(x);

// var x = 5; // undefined

// let x = 5; // Reference error

// const x = 5; // Reference error

// 2- Same variables "Re-declare"
// var x = 5;
// var x = 6; // Working

// let x = 6;
// let x = 7; // Error

// const x = 6;
// const x = 7; // Error

// console.log(x);

// Re-assign
// var x = 5;
// x = 6; // Working

// let x = 5;
// x = 6; // Working

// const x = 5;
// x = 6; // Error
// console.log(x);

// Data types
// Primitive data types
let a = 5; // number
let b = "Kareem"; // string
let c = true; // boolean
let x = false; // boolean
let d = undefined; // undefined
let e = null; // object

// Reference data types
let f = ["a", 1, true]; // Array "Object"
let g = {
  name: "kareem",
  age: 25,
}; // "Object"
let w = function sum() {
  console.log(1 + 1);
}; // Function "object"

console.log(typeof a, typeof b, typeof c, typeof x, typeof d, typeof e);
