//right rotation of elements by one
let arr = [1,2,3,4,5]

copy = arr[arr.length-1]

for(let i = arr.length-1; i>0;i--){
    arr[i] = arr[i-1]
}
arr[0] = copy

console.log(arr)