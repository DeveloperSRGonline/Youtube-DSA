// H.W
// finding minimum element form array
let array = [10, 2, 46, 234, 3]

let minElement = array[0];
for(let index = 1; index < array.length; index++){
    if(minElement > array[index]){
        minElement = array[index]
    }
}
console.log(minElement)