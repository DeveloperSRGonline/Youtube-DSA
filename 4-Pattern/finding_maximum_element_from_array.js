// // finding max element form array
let array = [10, 2, 46, 234, 3]

let maxElement = array[0];
for(let index = 1; index < array.length; index++){
    if(maxElement < array[index]){
        maxElement = array[index]
    }
}
console.log(maxElement)