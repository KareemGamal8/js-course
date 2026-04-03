
# 📝 JavaScript Course - DOM Assignments (Based on script.js)

These assignments cover Document Object Model (DOM) logic found in `script.js`, including toggling states, attribute manipulation, conditional logic, and form handling.

---

# 📝 Assignment 1 – Toggle State (Like Button)

## 🎯 Goal:
Learn how to toggle a Boolean state and update styles accordingly.

## 📌 Task:
1. Create a "Like" button and a `likesCount` span.
2. Maintain a `isLiked` variable (boolean) and a `count` variable.
3. Add a click event:
    - If `isLiked` is false, set it to true, increment `count`, and change the button background to red.
    - If `isLiked` is true, set it to false, decrement `count`, and change the button background back to white.
4. Update the `likesCount` text content.

---

# 📝 Assignment 2 – Password Visibility Toggle

## 🎯 Goal:
Practice manipulating element attributes like `type`.

## 📌 Task:
1. Create a password input field and a "Show" button.
2. Add a click event to the button.
3. Check the `type` of the input:
    - If it is `"password"`, change it to `"text"` and set the button text to `"Hide"`.
    - Otherwise, change it back to `"password"` and set the button text to `"Show"`.

---

# 📝 Assignment 3 – Shopping Cart with Max Limit

## 🎯 Goal:
Use conditional logic to prevent certain actions and display error messages.

## 📌 Task:
1. Create an "Add To Cart" button and a counter element.
2. Create an empty `error` paragraph.
3. Set a `productCount` limit (e.g., 5).
4. On button click:
    - If the current count is less than the limit, increment the count and update the UI.
    - If the limit is reached, display a message in the `error` paragraph: `"You can't add more than X items."`

---

# 📝 Assignment 4 – Handling Form Submissions

## 🎯 Goal:
Understand form events and how to retrieve user input.

## 📌 Task:
1. Create an HTML form with `username` and `userAge` inputs and a submit button.
2. Add a `"submit"` event listener to the form.
3. Use `event.preventDefault()` to prevent the page from reloading.
4. Retrieve the values of the inputs and display them in a "Result" element using template literals: `Hello ${name}, your age is ${age}`.

---

# 📝 Assignment 5 – Combining Logic & Styles

## 🎯 Goal:
Implement multiple features in a single interactive component.

## 📌 Task:
1. Combine the logic from previous assignments to create a "Profile Card" toggle.
2. Add a button that, when clicked:
    - Changes its own text (e.g., "Follow" to "Following").
    - Toggles a class or style on a parent container (e.g., changing border color).
    - Increments a "Follower Count" text element.
3. Use `console.log()` to debug and confirm the state changes at each step.
