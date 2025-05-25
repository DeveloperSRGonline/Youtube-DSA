// putting values using array
let prompt = require('prompt-sync')();
let array = new Array(Number(prompt("Enter how big array will be : ")));
for(index = 0; index < array.length; index++){
    array[index] = Number(prompt('Enter a value : '))
}