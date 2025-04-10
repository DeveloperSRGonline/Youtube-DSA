//calculating sum of all element of array
let array = [10, 20, 30, 40, 50];
let totalSum = 0;
for(let index = 1; index < array.length; index++){
    totalSum = totalSum + array[index];
}

console.log(totalSum)