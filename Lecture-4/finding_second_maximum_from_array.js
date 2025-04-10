//finding second maximum form array
// let arr = [1, 8, 55, 44, 45, 34, 23, 2];

let max = Math.max(arr[0],arr[1])
let smax = Math.min(arr[0],arr[1])

for(let i = 2; i < arr.length; i++){
    if(arr[i]>max){
        smax = max;
        max = arr[i];
    }else if(arr[i]>smax){
        smax = arr[i];
    }
}
console.log(smax)