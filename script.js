/** -------------------------- Object -------------------------- */

let usersNames = ["Kareem", "Ahmed", "Mohamed"];

// let userAges = [25, 24, 32];

// let usersCities = ["Luxor", "Egypt", "Alex"];

// let user1Name = "Kareem";

// let user1Age = 25;

// let user1City = "Luxor";

// let user = {
//   name: "Kareem", // Property
//   age: 25,
//   city: "Luxor",
// };

// obj = {
//     key: value // Property
// }

// console.log(user);

// // Dot notation
// console.log(user.name, user.age, user.city);

// // Bracket notation
// console.log(user["name"], user["age"], user["city"]);

// Array of objects
// let users = [
//   {
//     name: "Kareem",
//     age: 25,
//     city: "Luxor",
//   },
//   {
//     name: "Ahmed",
//     age: 23,
//     city: "Cairo",
//   },
//   {
//     name: "Mohamed",
//     age: 26,
//     city: "Alex",
//   },
// ];

// console.log(users[1].name);

// console.log(users[1]["name"]);

// let product = {
//   name: "Samsung",
//   category: "Mobile",
//   price: 3000,
// };

// function getProduct(product) {
//   console.log("Product =>", product.name, product.category, product.price);
// }

// getProduct(product);

// Add new property
// product.discount = 10;
// product["discount"] = 10;

// Edit property
// product.name = "Oppo";
// product["name"] = "Oppo";

// console.log(product);
// console.log(product.name);

// console.log(usersNames.length);

// console.log(usersNames.join(" "));

// console.log(typeof usersNames);

// let product = {
//   name: "Samsung", // Property
//   category: "Mobile",
//   price: 3000,
//   //   getProductDetails: function () {
//   //     console.log(
//   //       `Product name: ${product.name} - Product category: ${product.category} - Product price: ${product.price}`,
//   //     );
//   //   }, // Method,
//   getProductDetails() {
//     console.log(
//       `Product name: ${product.name} - Product category: ${product.category} - Product price: ${product.price}`,
//     );
//   },
// };

// console.log(product.name);
// product.getProductDetails();

// let products = [
//   {
//     name: "Samsung",
//     category: "Mobile",
//     price: 3000,
//   },
//   {
//     name: "Jacket",
//     category: "Clothes",
//     price: 1000,
//   },
//   {
//     name: "Keyboard",
//     category: "Electronics",
//     price: 500,
//   },
// ];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].category);
// }

// Array => List of items
// Object => Single item

// Products => Array
// Single product => object

// let product = {
//   name: "Samsung",
//   category: "Mobile",
//   price: 3000,
// };

// let objectKey = "name";

// console.log(product.name);
// console.log(product["name"]);
// console.log(product[objectKey]);
// console.log(product.objectKey);

// let square = function (n) {
//   return n * n;
// };

// console.log(square(5));

function calculateRectangleArea(width, height) {
  return width * height;
}

console.log(calculateRectangleArea(12, 6));
