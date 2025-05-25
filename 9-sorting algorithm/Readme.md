# JavaScript Basics & DSA Interview Prep: Sorting Algorithms

## 🚀 1. Bubble Sort

### ✅ Description
- Repeatedly compares adjacent elements and swaps them if they are in the wrong order.
- Largest element "bubbles" to the end in each pass.

### 🧠 JavaScript Code

```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
```

### ⏱️ Time & Space Complexity

| Case       | Time Complexity | Space Complexity |
|------------|-----------------|------------------|
| Best       | O(n)            | O(1)             |
| Average    | O(n²)           | O(1)             |
| Worst      | O(n²)           | O(1)             |

---

## 🚀 2. Selection Sort

### ✅ Description
- Selects the minimum element from the unsorted part and swaps it with the first unsorted element.

### 🧠 JavaScript Code

```js
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}
```

### ⏱️ Time & Space Complexity

| Case       | Time Complexity | Space Complexity |
|------------|-----------------|------------------|
| Best       | O(n²)           | O(1)             |
| Average    | O(n²)           | O(1)             |
| Worst      | O(n²)           | O(1)             |

---

## 🚀 3. Insertion Sort

### ✅ Description
- Builds the sorted array one element at a time by inserting the element at the correct position.

### 🧠 JavaScript Code

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

### ⏱️ Time & Space Complexity

| Case       | Time Complexity | Space Complexity |
|------------|-----------------|------------------|
| Best       | O(n)            | O(1)             |
| Average    | O(n²)           | O(1)             |
| Worst      | O(n²)           | O(1)             |

---

## 📌 Interview Questions

### Q1: Which sorting algorithm is best for small datasets?
**A:** Insertion Sort, due to its simplicity and efficiency on nearly sorted arrays.

### Q2: When would you prefer Selection Sort?
**A:** When memory writes are costly, as it makes minimum swaps.

### Q3: What's the main drawback of Bubble Sort?
**A:** Poor performance (O(n²)) on large datasets due to repeated passes.

### Q4: Is any of these sorting algorithms stable?
**A:** Bubble Sort and Insertion Sort are stable; Selection Sort is not.

### Q5: Can you sort an array without using any extra space?
**A:** Yes, all three are **in-place** sorting algorithms (O(1) space).

---

## 🔁 Practice Inputs

```js
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log(selectionSort([29, 10, 14, 37, 14]));
console.log(insertionSort([5, 2, 9, 1, 5, 6]));
```

---

## 📚 Summary Table

| Algorithm      | Best     | Average  | Worst    | Space | Stable | Adaptive |
|----------------|----------|----------|----------|--------|--------|----------|
| Bubble Sort    | O(n)     | O(n²)    | O(n²)    | O(1)   | Yes    | Yes      |
| Selection Sort | O(n²)    | O(n²)    | O(n²)    | O(1)   | No     | No       |
| Insertion Sort | O(n)     | O(n²)    | O(n²)    | O(1)   | Yes    | Yes      |
