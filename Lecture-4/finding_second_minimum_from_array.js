// H.W
//finding second minimum from element
let arr = [1, 8, 55, 44, 45, 34, 23, 2];

if (arr.length < 2) {
  console.log(
    "Array must have at least two elements to find the second minimum."
  );
} else {
  let min = Math.min(arr[0], arr[1]);
  let smin = Math.max(arr[0], arr[1]);
  let i;
  for (i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
      smin = min;
      min = arr[i];
    } else if (arr[i] < smin && arr[i] !== min) {
      smin = arr[i];
    }
  }
}