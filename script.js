/** ================ High Order Functions (HOF) ================ **/
/**
 * map()
 * forEach()
 * filter()
 * find()
 * some()
 * every
 */

// Map
let numbers = [1, 2, 3, 4, 5, 6];

let newNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(newNumbers);

// const usersDiv = document.getElementById("users");

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ahmed" },
//   { id: 3, name: "Kareem" },
// ];

// usersDiv.innerHTML = users.map((user, index) => {
//   return `
//     <div key={${index}>
//         <h2>${user.id}</h2>
//         <h2>${user.name}</h2>
//         <p></p>
//     </div>
//     `;
// });

// forEach
// const newNumbers = numbers.forEach((num, index) => {
//   return num * 3;
// });

// console.log(newNumbers)

// Filter
// let newNumbers = numbers.filter((num) => {
//   return num > 3;
// });

// console.log(newNumbers);

// Find
// let newNumbers = numbers.find((num) => {
//   return num <= 2;
// });

// console.log(newNumbers);

// Some - Every
// const numbers = [35, 40, 30, 24];

// const newNumbers = numbers.some((item) => item < 25);
// const newNumbers = numbers.some((item) => item > 25);

// console.log(newNumbers);
