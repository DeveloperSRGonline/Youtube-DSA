/*
units          price
up to 100      rs.4.2/unit
101 to 200     rs.6/unit
201 to 400     rs.8/unit
more than 400  rs.13/unit

*/

let prompt = require('prompt-sync')();


let unit = Number(prompt('Enter electricity units'))
let amount = 0;
if(unit > 400){
    amount = (unit - 400) * 13;//3900
    unit = 400;
}//400
if(unit > 200 && unit <= 400 ){
    amount += (unit - 200) * 8; //1600
    unit = 200;
}//200
if(unit > 100 && unit <= 200){
    amount += (unit - 100) * 6;//600
    unit = 100;
}//100
    amount += unit * 4;

console.log("Total Electricity Bill: Rs. " + amount);