//par ye bohat hi bekar tarika hai 
let s = 'Sheryians'
let rev = '';

for(let i = s.length-1;i >= 0; i--){
    rev = rev + s.charAt(i);
}

console.log(rev)