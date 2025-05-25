// ghatiya version for reversing an array
let arr = [10,20,30,40,50,60];
let temp = new Array(arr.length);

let j = 0;
for(let i = arr.length - 1; i >= 0; i--){
    temp[j] =  arr[i];
    j++;
}   
console.log(temp)