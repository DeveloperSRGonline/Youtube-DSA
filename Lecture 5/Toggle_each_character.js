// yane aisa samjho ki character small mein hai to capital me karo and capatal mein hai toh small mein karo
// aBcDEfgH --- AbCdeFGh

let prompt = require('prompt-sync')()
let s = prompt('Enter a string : ')

let toggle = ''
for(let i = 0; i<s.length;i++){
    let ch = s.charCodeAt(i)

    if(ch>=65 && ch<=90){
        toggle = toggle + String.fromCharCode(ch + 32); 
    }else if(ch>=97 && ch<=122){
        toggle = toggle + String.fromCharCode(ch - 32)
    }
}
console.log(toggle)