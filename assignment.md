# 📝 JavaScript Course – Assignments

## 🚀 General JavaScript & ES6 Problem Solving

### 🟢 Beginner Level (3 Problems)

#### 1. The Discount Calculator
Create an arrow function `calculateDiscount(price, customerType)` that takes a price and a customer type.
- **Rules:**
  - `VIP`: 20% discount.
  - `Premium`: 10% discount.
  - `Regular`: 5% discount.
  - If no type is provided, default it to `Regular`.
- **Requirement:** Use a **Ternary Operator** and **Template Literals** to return: `"The final price for a [Type] customer is [Price]$"`.

#### 2. Smart Greeting System
Create a function `greetUser(name, timeOfDay)` where:
- `name` defaults to `"Guest"`.
- `timeOfDay` defaults to `"Day"`.
- **Requirement:** Return a string like: `"Good [Time], [Name]! Welcome to our website."` using **Template Literals**.

#### 3. Grade Evaluator
Create a function `evaluateGrade(score)` that uses `if/else` or `ternary` to return a status:
- `score >= 90`: "Excellent"
- `score >= 80`: "Very Good"
- `score >= 50`: "Pass"
- `score < 50`: "Fail"
- **Bonus:** Use **Arrow Function** syntax.

---

### 🟡 Intermediate Level (1 Problem)

#### 4. Array Stats Generator
Create a function `getArrayStats(numbers)` that takes an array of numbers.
- **Requirement:** 
  - Use a **Loop** (`for` or `while`) to calculate the **Sum** of all numbers.
  - Calculate the **Average**.
  - Return an **Object** containing both `sum` and `average` using **Object Shorthand Properties**.
- **Example Input:** `[10, 20, 30, 40]`
- **Example Output:** `{ sum: 100, average: 25 }`
