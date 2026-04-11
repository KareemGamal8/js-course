# 📝 JavaScript Course – Browser Object Model (BOM) Assignments

These new assignments focus on the Browser Object Model (BOM), allowing you to explore and manipulate browser-specific objects such as `window`, `navigator`, `screen`, `location`, and `history`. Each task builds on concepts from `script.js` and encourages hands‑on interaction with the browser environment.

---

## 📝 Assignment 1 – Window Size Detector

### 🎯 Goal
Learn how to read and react to the browser window dimensions using the `window` object.

### 📌 Task
1. Create a `<div>` that displays the current `window.innerWidth` and `window.innerHeight`.
2. Add a `resize` event listener on `window` that updates the displayed dimensions in real‑time.
3. Style the `<div>` with a subtle gradient background and rounded corners.
4. Ensure the values are formatted as `Width: XXXpx, Height: YYYpx`.

---

## 📝 Assignment 2 – Navigator Information Panel

### 🎯 Goal
Explore the `navigator` object to retrieve browser and platform details.

### 📌 Task
1. Create a section that shows:
   - `navigator.userAgent`
   - `navigator.language`
   - `navigator.platform`
2. Add a button labeled "Refresh Info" that re‑reads the values (useful if the user changes language settings).
3. Use a monospaced font for the displayed data and add a light‑shadow effect.

---

## 📝 Assignment 3 – Screen Properties Viewer

### 🎯 Goal
Display screen‑related properties using the `screen` object.

### 📌 Task
1. Show the following in a card layout:
   - `screen.width` and `screen.height`
   - `screen.availWidth` and `screen.availHeight`
   - `screen.pixelDepth`
2. Include a toggle button that switches the card between a compact view (only width/height) and an expanded view (all properties).
3. Apply a glass‑morphism effect to the card for a modern look.

---

## 📝 Assignment 4 – Location Navigator

### 🎯 Goal
Manipulate the page URL and navigate using the `location` object.

### 📌 Task
1. Display the current URL (`location.href`) and pathname (`location.pathname`).
2. Add two buttons:
   - **"Go to Home"** – sets `location.href` to `/`.
   - **"Add Query"** – appends a query string `?ref=bom` to the current URL without reloading (use `history.pushState`).
3. Show a small notification (e.g., a toast) confirming each navigation action.

---

## 📝 Assignment 5 – History Stack Controller

### 🎯 Goal
Interact with the browser history using the `history` object.

### 📌 Task
1. Create three buttons:
   - **"Back"** – calls `history.back()`.
   - **"Forward"** – calls `history.forward()`.
   - **"Go 2 Steps Back"** – calls `history.go(-2)`.
2. Display the current history length (`history.length`).
3. When any button is clicked, log the action to the console and show a temporary overlay indicating the navigation direction.

---

*Feel free to experiment with additional BOM features such as `window.scrollY`, `navigator.geolocation`, or `window.performance` once you’ve completed these assignments.*
