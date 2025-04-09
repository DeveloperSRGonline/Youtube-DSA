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
            let rev = 0;
            while(n>0){
                let rem = n%10;
                rev = rev*10 + rem;
                n = Math.floor(n/10);
            }
            console.log(rev)
        } else {
            console.log('should be non-negative');
        }
    }
}