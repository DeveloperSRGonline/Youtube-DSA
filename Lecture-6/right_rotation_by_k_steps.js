// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter value of k : "));
// let arr = [1, 2, 3, 4, 5];
// k = k % arr.length; // for efficient program

// for (let j = 1; j <= k; j++) {
//     copy = arr[arr.length-1]
//     for(let i = arr.length-1;i>0;i--){
//         arr[i] = arr[i - 1]
//     }
//     arr[arr.length-1] = copy
// }
// console.log(arr);
//solved by myself only by watching dry run concept


let prompt = require('prompt-sync')()
let arr = [1,2,3,4,5]
let k = Number(prompt('Enter value of k : '))
k = k % arr.length
reverse(0,arr.length-1)
reverse(0,k-1)
reverse(k,arr.length-1)
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