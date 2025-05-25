// H.W
// all negative on the left and all positive in the right side
let arr = [-2,4,-3,1,-4,8,9,5,-6,1,-8,0-9,1]

let i = 0, j = 0;
while(i<arr.length){
    if(arr[i]<0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
    i++
}
console.log(arr)