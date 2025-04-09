// let prompt = require('prompt-sync')();

let pr = Number(prompt('Enter the number : '));

if (pr === null) {
    console.log('cancelled');
} else {
    let n = Number(pr);

    if (isNaN(n)) {
        console.log('kuchh soch samaj kar likho');
    } else {
        if (n > 0) { // Factorial is defined for non-negative numbers
            //145 -->  1! + 4! + 5! = 145
            let sum = 0;
            let copy = n;
            while(n>0){ // while factorial ka sum nikal ne ke liye
                let rem = n%10;
                let fact = 1;
                for(let i = 1; i<=rem; i++){ // for factorial nikal ne ke liye 
                    fact = fact * i;
                }
                sum = sum + fact
                n = Math.floor(n/10);
            }
            if(copy === sum){
                console.log('Strong number')
            }
            else{
                console.log('not Strong number')
            }
        } else {
            console.log('should be non-negative');
        }
    }
}