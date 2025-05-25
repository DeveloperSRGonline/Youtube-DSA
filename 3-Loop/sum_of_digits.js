// let prompt = require('prompt-sync')();

let pr = prompt('Enter the number : ');

if (pr === null) {
    console.log('cancelled');
} else {
    let n = Number(pr);

    if (isNaN(n)) {
        console.log('kuchh soch samaj kar likho');
    } else {
        if (n > 0) { // Factorial is defined for non-negative numbers
            let sum = 0; // Initialize sum to 0
            while(n>0){
                let rem = n%10;
                sum = sum + rem;
                n = Math.floor(n/10)
            }
            console.log(sum)
        } else {
            console.log('should be non-negative');
        }
    }
}