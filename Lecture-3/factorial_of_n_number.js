let prompt = require('prompt-sync')();

let pr = prompt('Enter the number : ');

if (pr === null) {
    console.log('cancelled');
} else {
    let n = Number(pr);

    if (isNaN(n)) {
        console.log('kuchh soch samaj kar likho');
    } else {
        if (n >= 0) { // Factorial is defined for non-negative numbers
            let fact = 1;

            for (let i = 1; i <= n; i++) {
                fact = fact * i; // Multiply each number to calculate fact
            }

            console.log('fact : ' + fact);
        } else {
            console.log('should be non-negative');
        }
    }
}