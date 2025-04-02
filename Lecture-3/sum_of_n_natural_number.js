// Q.Sum of n natural number (1,2,3,4,5,6,7,...)

// let prompt = require('prompt-sync')();
// User se ek number input lene ke liye prompt karte hain
let pr = prompt('Enter the number : ');

// Check karte hain agar user ne prompt cancel kar diya
if (pr === null) {
    console.log('cancelled'); // Agar user cancel kare to 'cancelled' print karein
} else {
    // Input ko number me convert karte hain
    let n = Number(pr);

    // Check karte hain agar input valid number nahi hai
    if (isNaN(n)) {
        console.log('kuchh soch samaj kar likho'); // Invalid input ke liye error message print karein
    } else {
        // Check karte hain agar number positive hai
        if (n > 0) {
            let sum = 0; // Sum ko 0 se initialize karte hain

            // Pehle n natural numbers ka sum calculate karte hain
            for (let i = 0; i <= n; i++) {
                sum = sum + i; // Har number ko sum me add karte hain
            }

            // Calculated sum ko print karte hain
            console.log('sum : ' + sum);
        } else {
            // Agar number positive nahi hai to error message print karein
            console.log('should be positive and more than zero');
        }
    }
}
