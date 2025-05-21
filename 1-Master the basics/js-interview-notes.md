
# 🧠 JavaScript Basics & Interview Prep

## ✅ 1. Sum of Two Integers
<details>
<summary>Click to expand</summary>

```js
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20)); // Output: 30
```

**💬 Interviewer May Ask:**
> What happens if one value is a string?

**✅ Answer:**
If one operand is a string and the other is a number, JavaScript coerces the number into a string and performs string concatenation.  
Example: `"10" + 5` results in `"105"`.

</details>

---

## ✅ 2. Relation Between Integer and String (Type Coercion)
<details>
<summary>Click to expand</summary>

```js
console.log("10" + 2); // "102"
console.log("10" - 2); // 8
console.log("10" * 2); // 20
console.log("ten" * 2); // NaN
```

**💬 Interviewer May Ask:**
> What is type coercion in JavaScript?

**✅ Answer:**
Type coercion is when JavaScript automatically converts one data type to another.

- `"10" + 2` becomes `"102"` (string concatenation)
- `"10" - 2` becomes `8` (numeric coercion)
- `"ten" * 2` results in `NaN` because "ten" is not a number.

</details>

---

## ✅ 3. Sum and Message (with Type Coercion)
<details>
<summary>Click to expand</summary>

```js
let a = 5, b = 10;
let message = "The sum is: " + (a + b);
console.log(message); // The sum is: 15
```

**💬 Interviewer May Ask:**
> What happens if you remove the parentheses?

**✅ Answer:**
```js
"The sum is: " + a + b // "The sum is: 510"
```
Because concatenation happens left to right.

</details>

---

## ✅ 4. Greet the User and Input/Output
<details>
<summary>Click to expand</summary>

```js
let name = prompt("Enter your name:");
alert("Hello, " + name + "!");
```

**✅ You Can Explain:**
We use `prompt()` to get user input and `alert()` to show output.

</details>

---

## ✅ 5. Accept Input and Print Sum
<details>
<summary>Click to expand</summary>

```js
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
console.log("Sum:", a + b);
```

**✅ Explain:**
`prompt()` returns a string, so we use `parseInt()` to convert it to a number.

</details>

---

## ✅ 6. Swap Two Variables (3 Methods)
<details>
<summary>Click to expand</summary>

### 🔁 Method 1: Using a third variable

```js
let a = 10, b = 20;
let temp = a;
a = b;
b = temp;
```

### 🔁 Method 2: Without third variable

```js
a = a + b;
b = a - b;
a = a - b;
```

### 🔁 Method 3: Destructuring (Modern JS)

```js
[a, b] = [b, a];
```

</details>

---

## ✅ 7. Operators and Interview Questions
<details>
<summary>Click to expand</summary>

### 🔸 Arithmetic Operators

```js
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");
```

### 🔸 Relational Operators

```js
console.log("5" == 5);  // true
console.log("5" === 5); // false
```

### 🔸 Logical Operators

```js
let age = 20;
let hasID = true;
console.log(age > 18 && hasID); // true
```

### 🔸 Unary Operators

```js
let x = 5;
console.log(x++); // 5
console.log(++x); // 7
```

</details>

---

## 🧠 Interview-Level Questions
<details>
<summary>Click to expand</summary>

**Q1: What is type coercion?**  
✅ It's JavaScript’s automatic conversion from one data type to another.

**Q2: Output of `console.log(0 == false)`?**  
✅ `true` (because of type coercion)

**Q3: Difference between `==` and `===`?**  
✅ `==` checks value only, `===` checks value and type.

**Q4: Truthy and Falsy values?**  
✅ Falsy: 0, "", null, undefined, false, NaN

**Q5: Why `NaN === NaN` is false?**  
✅ NaN is not equal to anything, even itself.

**Q6: Output of `console.log(!!"Hello")`?**  
✅ `true` — "Hello" is truthy

**Q7: `let x = "5"; let y = 2; console.log(x * y);`**  
✅ Output: `10`

**Q8: Function to check if number divisible by 3 and 5**

```js
function check(num) {
  return num % 3 === 0 && num % 5 === 0;
}
```

**Q9: Implicit vs Explicit conversion?**  
✅ Implicit: automatic (e.g. `"5" * 2` → 10)  
✅ Explicit: manual (e.g. `Number("5")`)

</details>

---

## 🧩 BONUS PRACTICE CHALLENGES
<details>
<summary>Click to expand</summary>

- Create a calculator using `prompt()` and `alert()`
- Write a function that returns `"Even"` or `"Odd"`
- Make a number guessing game using `prompt()`
- Try swapping 3 variables without using a 4th one

</details>
