let prompt = require('prompt-sync')();
let day = Number(prompt('Enter a day : '));

switch (day) {
  case 1:
    console.log('mondey');
    break;

  case 2:
    console.log('Tuesday');
    break;

  default:
    console.log('Invalid');
    break;
}


// 🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯
switch (true) {
  case 10 < 6:
    console.log('hello');
    break;
  case 10 > 6:
    console.log('hey');
    break;

  default:
    break;
}


// 🤯 khel hai beta 
let num = (0.1 + 0.2);// Invalid (default chalega)
// let num = (0.1 + 0.2).toFixed(1);

switch (num) {
    case 0.3: console.log('hello')
    break;

    case 0.5: console.log('hello')
    break;

    default: console.log('Invalid')
        break;
}
