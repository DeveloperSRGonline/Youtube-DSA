/*
units          price
up to 100      rs.4.2/unit
101 to 200     rs.6/unit
201 to 400     rs.8/unit
more than 400  rs.13/unit

*/

let prompt = require('prompt-sync')();

let units = Number(prompt('Enter Electricity units'));//700
let amount = 0;

if(units > 400){
    amount += (units - 400) * 13;
    units = 400;
}
if(units > 200 && units <= 400){
    amount += (units - 200) * 8;
    units = 200;
}
if(units > 100 && units <= 200){
    amount += (units - 100) * 6;
    units = 100;
}

amount += units * 4;

console.log("Total Electricity Bill: Rs. " + amount);