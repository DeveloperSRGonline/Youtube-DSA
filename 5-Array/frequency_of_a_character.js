// hello
/*
h - 1
e - 1
l - 2
o - 1
*/

let prompt = require('prompt-sync')()
let s = prompt('Enter a string  : ')
let arr = new Array(128).fill(0);

for(let i = 0;i<s.length;i++){
    let indx = s.charCodeAt(i);
    arr[indx] = arr[indx] + 1
}

for(let i = 0;i<arr.length;i++){
    if(arr[i]>0){
        console.log(String.fromCharCode(i) + ' appears ' + arr[i] + " times")
    }    
}


// optimized version (with frequency in sequence)
// let prompt = require('prompt-sync')();
// let s = prompt('Enter a string  : ');
// let frequencyMap = new Map();

// for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (frequencyMap.has(char)) {
//         frequencyMap.set(char, frequencyMap.get(char) + 1);
//     } else {
//         frequencyMap.set(char, 1);
//     }
// }

// frequencyMap.forEach((value, key) => {
//     console.log(key + ' appears ' + value + ' times');
// });
