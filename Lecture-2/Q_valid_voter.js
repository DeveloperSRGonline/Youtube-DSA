let prompt = require('prompt-sync')();
var ans = Number(prompt('What is your age ?'))
// console.log(ans);

if(isNaN(ans)){
     console.log('wrong input⚠️');
}else if(ans>=18){
    console.log("you can vote ✅")
}else{
    console.log("you can not vote ❌")
}