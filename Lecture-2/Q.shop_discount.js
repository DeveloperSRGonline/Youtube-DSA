// amount         discount
// 0-5000            0%
//5001 - 7000       5%
//7001 - 9000       10%
//more than 9000    20%

let prompt = require('prompt-sync')();
let amount = Number(prompt('Enter the amount:'));
if(amount > 0 && amount <= 5000){
    console.log('no discount 😭')
}else if(amount > 5000 && amount <= 7000){
    console.log(Math.floor((5*amount)/100));
}