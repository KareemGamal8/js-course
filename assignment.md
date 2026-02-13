# � JavaScript Course Assignments

These assignments cover the core fundamentals of JavaScript including Numbers, Strings, Variables, and Logic.

---

# 📝 Assignment 1 – Math Mastery

## 🎯 Goal:

Practice mathematical operators and operator precedence.

## 📌 Task:

Solve the following using JavaScript:

1. What is the result of `10 + 20 / 2 * 3`? Explain the order of execution.
2. Calculate **7 to the power of 4** and print the result.
3. Find the **remainder** when `27` is divided by `4`.

---

# 📝 Assignment 2 – String to Number

## 🎯 Goal:

Practice different ways to convert strings to numbers.

## 📌 Task:

Given the following variables:
`let price = "100";`
`let tax = "15.5";`

1. Convert `price` to a number using the **unary plus (+)** and add `20` to it.
2. Convert `tax` to a number using **Number()** and add `price` to it.
3. What happens if you try to convert `"Hello10"` to a number? Show the result.

---

# 📝 Assignment 3 – Parsing and Fixing

## 🎯 Goal:

Practice `parseInt()`, `parseFloat()`, and `toFixed()`.

## 📌 Task:

1. Use a method to extract the integer `20` from the string `"20.55 pixels"`.
2. Use a method to extract the float `15.5` from the string `"15.5 USD"`.
3. Given `let salary = 5500.8765;`, format it to show only **2 decimal places** (Expected: `5500.88`).

---

# 📝 Assignment 4 – The Math Object

## 🎯 Goal:

Practice rounding methods (`round`, `ceil`, `floor`).

## 📌 Task:

Given the variable `let grade = 74.2;`:

1. Use `Math.round()` on `grade` and print the outcome.
2. Use `Math.ceil()` on `grade` and print the outcome.
3. Use `Math.floor()` on `grade` and print the outcome.
4. Explain the difference between `Math.ceil()` and `Math.round()`.

---

# 📝 Assignment 5 – Large Numbers & Randomness

## 🎯 Goal:

Practice `toLocaleString()` and `Math.random()`.

## 📌 Task:

1. Given `let views = 1500000;`, use a method to format this number with commas (Expected: `"1,500,000"`).
2. Write a single line of code to generate a **random number** between 0 and 1.
3. **Challenge**: How can you generate a random number between 1 and 10? (Hint: use `Math.random()` and `Math.floor()`).

---

# 📝 Assignment 6 – Variables & Constants

## 🎯 Goal:

Understand the difference between `let` and `const`.

## 📌 Task:

1. Declare a variable `userName` using `let` and assign it "Kareem". Change it to "Gamal".
2. Declare a variable `birthYear` using `const`. Try to change it and observe the error in the console.
3. Explain why we use `const` for things that shouldn't change.

---

# 📝 Assignment 7 – String Basics & Methods

## 🎯 Goal:

Practice common string methods and template literals.

## 📌 Task:

1. Given `let message = "   I Love JavaScript   ";`:
   - Remove the extra spaces from both sides.
   - Convert the whole string to **Uppercase**.
   - Check if the string **ends with** "SCRIPT".
2. Use **Template Literals** to print: `The language is JavaScript and it has 10 characters` (Calculate the length dynamically using `.length`).

---

# 📝 Assignment 8 – Comparison Operators

## 🎯 Goal:

Practice comparison logic and the difference between `==` and `===`.

## 📌 Task:

1. Given `let x = 10; let y = "10";`:
   - What is the result of `x == y`? Why?
   - What is the result of `x === y`? Why?
2. Compare two numbers: `20` and `15`. Print `true` if 20 is greater than or equal to 15.
3. Use the Not operator `!==` to check if `10` is not equal to `20`.

---

# 📝 Assignment 9 – Logical Operators

## 🎯 Goal:

Combine conditions using `&&` (AND), `||` (OR), and `!` (NOT).

## 📌 Task:

1. Write a condition that checks if a number `age` is **greater than 18 AND less than 60**.
2. Write a condition that checks if a user is an **admin OR a moderator**.
3. What is the result of `!(10 > 5)`? Explain.

---

# 📝 Assignment 10 – Type Casting & Booleans

## 🎯 Goal:

Understand how JavaScript handles different types in expressions.

## 📌 Task:

1. What is the result of `true + true` and `true + false`? Why does this happen?
2. Use `isNaN()` to check if the variable `let pass = "12345";` is NOT a number after converting it.
3. Convert the number `0` and the string `""` to Boolean. What are the results? (Truthy vs Falsy).
