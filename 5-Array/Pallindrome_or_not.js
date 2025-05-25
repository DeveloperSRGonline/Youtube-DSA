let prompt = require('prompt-sync')();
let s = prompt('Enter a string : ')

//sasta tarika
// let rev = '';
// for(let i = s.length-1;i >= 0; i--){
//     rev = rev + s.charAt(i);
// }
// if(rev == s) console.log('Pallindrome')
// else console.log('No pallindrome')


// Mentos tarika(efficient way)
let ispallindrome = true;
let i = 0; j = s.length-1;
while(i<j){
    if(s.charAt(i) != s.charAt(j)){
        ispallindrome = false;
        break;
    }
    i++;
    j--
}
if(ispallindrome) console.log('pallindrome')
else console.log('no pallindrome')