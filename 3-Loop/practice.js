// guess the number program 

let random = Math.floor(Math.random() * 100) + 1;

let guess = -1;
while (guess !== random) {
    guess = Number(prompt("Guess the Number"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Try again between 1 - 100");
        continue;
    }

    if (guess > random) {
        console.log("Too high, try again");
    } else if (guess < random) {
        console.log("Too low, try again");
    } else {
        console.log("Congrats 🎉 The number was", guess);
    }
}
