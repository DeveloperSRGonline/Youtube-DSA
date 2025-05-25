// amount         discount
// 0-5000            0%
//5001 - 7000       5%
//7001 - 9000       10%
//more than 9000    20%

let prompt = require('prompt-sync')();
let amount = Number(prompt('Enter the amount:'));

// broot force way
if(amount > 0 && amount <= 5000){
    console.log('no discount 😭')
}else if(amount > 5000 && amount <= 7000){
    console.log(amount - Math.floor((5*amount)/100),'😊');
}else if(amount > 7000 && amount <= 9000){
    console.log(amount - Math.floor((10*amount)/100),'😁');
}else if(amount > 9000){
    console.log(amount - Math.floor((20*amount)/100),'😀');
}else{
    console.log('Kya kar rahe ho bhai sah input do na...🤔')
}

// optimized way

let dis;
if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5000 && amount <= 7000) {
  dis = 5;
} else if (amount > 7000 && amount <= 9000) {
  dis = 10;
} else if (amount > 9000) {
  dis = 20;
} else if(amount < 0 || isNaN(amount)) {
  console.log('Kya kar rahe ho bhai sah input do na...🤔');
}
console.log(amount - Math.floor((dis * amount) / 100));



// efficent way 
let paisa = Number(prompt('What is the final paisa?'));

if (isNaN(paisa) || paisa < 0) {
    console.log(paisa < 0 ? 'Amount cannot be negative.' : 'Invalid input. Please enter a numeric value.');
} else {
    let dis = paisa > 9000 ? 20 : paisa > 7000 ? 10 : paisa > 5000 ? 5 : 0;
    console.log(paisa - Math.floor((dis * paisa) / 100));
}