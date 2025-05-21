// Time Complexity - {n^2}
// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter value of k : "));
// let arr = [1, 2, 3, 4, 5];
// k = k % arr.length;// for efficient program

// for (let j = 1; j <= k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);
//solved by myself only by watching dry run concept



// another way {with extra space}

// let arr = [1, 2, 3, 4, 5];
// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter value of k : "));
// let temp = new Array(arr.length);
// k = k % arr.length; // for efficient program

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);//[3,4,5,1,2]


//block swap reverse algorithm {without extra space and without n^2 time complexity}

let prompt = require('prompt-sync')()
let arr = [1,2,3,4,5]
let k = Number(prompt('Enter value of k : '))
k = k % arr.length
reverse(0,k-1)
reverse(k,arr.length-1)
reverse(0,arr.length-1)
function reverse(i,j){
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
console.log(arr)

//47:42 