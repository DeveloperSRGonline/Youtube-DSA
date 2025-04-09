//Array is a collection of values
//js me array me different data types ki values bhi rakh sakte hai

// let arr = [];
// arr.push(100)// ye last me values jodne ka kaam karta hai 
// arr.push(200)
// arr.push("shivam")
// arr.push(false)
// console.log(arr.pop())// ye last se value hatane ka kaam karta hai 
// console.log(arr)
// console.log(arr[0])

// let a = 2;
// console.log(a)

// putting value by using index 

// let arr = []; // ye jo hamne array banaya ye dynamic array 

// arr[0] = 12;
// arr[1] = 18;
// arr[2] = 15;
// arr[3] = 14;
// arr[10] = 54;


// // console.log(arr)

// let a = new Array(3).fill(0);
// console.log(a)

//Array is linear data structure which store multiple values in a contineous manner


// putting values using array
let prompt = require('prompt-sync')();
let arr = new Array(Number(prompt("Enter how big array will be : ")));
for(i=0;i<arr.length;i++){
    arr[i] = Number(prompt('Enter a value : '))
}
// arr[0] = Number(prompt('Enter a value'))
// arr[1] = Number(prompt('Enter a value'))
// arr[2] = Number(prompt('Enter a value'))
// arr[3] = Number(prompt('Enter a value'))
// arr[4] = Number(prompt('Enter a value'))
console.log(arr)