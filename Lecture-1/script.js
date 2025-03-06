/* console.log(a) --> we can access the 'a' because a is "hoisted to the top of the code" , and it will give us undefined which is a value not a error

 var a;  agar ye yaha nahi hota to error deta as "a is not defined"

☑️ -- undefined -> value 
☑️ -- not defined -> error
☑️ -- var se variable banaoge to banne se pahele use #kar paoge 
☑️ -- let se variable banaoge to banne se pahele use #nahikar paoge
☑️ -- to bhaiya aaj se ab se annttt tak "let" ka hi istemal karna hai

 console.log(a) --> it will give an error that "cannot access before initialization"
 
 Q.Sum of integer.
 let a = 10;
 let b = 20; -> although tum bina semicolon lagye bhi kaam chala sakte ho but recommended hai ki use karna hai
console.log(a+b) => it will give 30 in purple in color

 10  -> ye kya hai ye number hai 
"10" -> ye kya hai ye number nahi hai ye number jaisa dikhne wala string hai

☑️ -- 1 + 1 = 2 😐
☑️ -- "1" + "1" = 11 😂

let a = 12; 12 ye number hai 
let b = "13"; "13" ye 13 number jaisa dikhne wala string hai 
console.log(a+b) => it will give --> 1213 

☑️ -- console pe kuchh bhi dekh rahe ho aur vo "blue" color me hai to vo  "number" hoga 
☑️ -- aur agar "black" color me hai to vo "string"

☑️ -- Black -> string
☑️ -- Blue -> number

console.log(typeof(a+b)) // ye output ka type batayega [data type]


Q.Relation between number and string.
number + string = string -|
                          | contatination
string + number = string -|

-- har vo jagah jaha "+" likha ho vaha addition ho raha ho ye jaruri nahi hai vaha concatination bhi ho sakta hai 

Q.Sum and message.
let a = 10;
let b = 20;

console.log("Sum of 10 and 20 is " a + b) => Sum of 10 and 20 is 1020 🤔
console.log("Sum of 10 and 20 is " (a + b)) => Sum of 10 and 20 is 30 🐯
console.log(a + b + " is Sum of 10 and 20") =>30 is Sum of 10 and 20 🐯

-- Type coercion.
console.log("1"+1) => 11 😐
console.log("1"-1) => 0 🤔
console.log("1"*1) => 1 🤔
console.log("1"/1) => 1 🤔

Q.Accept and print the answer.
prompt() --> ye ek function hai
-- prompt jab data pic karta hai user se to vo as a string pic karta hai.

let age = prompt("Enter your age") // take input from user as a string
let age = Number(prompt("Enter your age")) // ise number me lane ke liye aise kar na padta hai

let age = prompt("Enter your age") // 
age = Number(age) // age number ban jayega agar possible ho to agar na ho to NaN print hoga eg.age = shivam -> shivam number me convert nahi ho sakta  
console.log(age) // ise is tarike se bhi kar sakte hai

age = Number(age) // is chij ko hum type casting(ya type conversion) bolte hai 
☑️ -- type casting/ type conversion -> ek type se dusre type me jane ko type casting bolte hai 

Q.Swaping values of two variables.
let a = 10;
let b = 20;

Method 1:
```
let c;
c = a; c = 10, a = 10 -- a ke paas value hai c ke paas bas copy gayi hai 
a = b; a = 20, b = 20 
b = c; b = 10

console.log(a) => 20
console.log(b) => 10
```

Method 2:
```
let a = 10;
let b = 20;

a = a + b; // a = 30
b = a - b; // b = 10
a = a - b; // a = 20, b = 10

console.log(a) => 20
console.log(b) => 10
```

Method 3: Array Destructuring Assignment
```
let a = 10;
let b = 20;

[a, b] = [b, a]; // a = 20, b = 10

console.log(a, b) => 20 10
```

Arithematic operators
let a = 12;
let b = 2;

console.log(a + b) => 14 // + --> Addition 
console.log(a - b) => 10 // - --> Subtraction
console.log(a * b) => 24 // * --> Multiply
console.log(a / b) => 6 // / --> Divide
console.log(a % b) => 0 // % --> Modulus
console.log(a ** b) => 144 // ** --> exponentiation

☑️ -- agar divident ye diviser se chhota hai to divide kar ne ki jaurrat hi nahi hai answer divident hi aayega

eg.
let a = 2;
let b = 12;

console.log(b%a) => answer is "2"

let a = 12;
let b = 2;

console.log(Math.floor(a/b)) // Math.floor se questient ka sirf inter wala part milega

let a = 34563;

console.log(a%10) => answer is "3" // jo bhi akhri digit hoga vo milega
console.log(a%100) => answer is "63"


Last se aakhri digit nikal na:
let a = 123;
console.log(Math.floor(a/10)) // last si ek digit hat jayenge => "12"
console.log(Math.floor(a/100)) // last si do digit hat jayenge => "1"
console.log(Math.floor(a/1000)) // last si do digit hat jayenge => "0"


Relational Operators:
// > < <= >= !== = == === ---> ye javab dete hai true and false
☑️ -- > : Less than
☑️ -- < : Greater than
☑️ -- >= : Greater than equal to
☑️ -- <= : Less than equal to
☑️ -- !== : not equal (strict) not equal in value and type
☑️ -- != : not equal (un-strict) not equal in value
☑️ -- = : assignment operator 
☑️ -- == : equal (un-strict) equal in value
☑️ -- === : equal (strict) equal in type and value @IMPORTANT!!!
☑️ -- && : Logical AND 
☑️ -- || : Logical OR

console.log(10>5) => "true"
console.log(10<5) => "false"
console.log(10=<5) => "false"
console.log(10>=5) => "true"
console.log(10>=10) => "true"
console.log(10 !== 11) => "true"

console.log(10>6 && 5<9) => "true" // && -> ye bolta hai agar dono condition ture ho tab "true" nahi to "false"

console.log(10<6 && 15<9 && 18>9) => "false"

console.log(10>6 || 5<9) => "true" // && -> ye bolta hai agar ek bhi condition ture ho tab "true".

Unary Operator: ++ -- 

a++ -> yane pahele use phir next time change(increment) kar dena 
++a -> yane pahele(increment) change kar dena phir use kar dena 

let i = 11;
i = i++ + ++i; // i = 11 then ++ -> 12 , then ++ -> 13 ,so [12 + 13 = 25]

console.log(i) // 25

Class Work:
let a = 11, b = 12;
let c = a + b + a++ + b++ + ++a + ++b;
    c = 11 + 12 + 11 + 12 + 13 + 14 
console.log("a = " + a) => 13
console.log("b = " + b) => 14
console.log("c = " + c) => 73


IN JS TRUE IS CONSIDERED AS "1" AND FALSE IS CONSIDERED AS "0"
let b = true 
b++;
console.log(b) => 1

let a = 10++;❌  --> let a = 10✅
console.log(a) --> console.log(a++)

let a = 10;
let b = ++(a++) --> a++ = 10 --> ++10 --> it will show an error


Math functions:

Math.floor => chhote value<0.5 0.5>= badi value
console.log(Math.round(10.6)) => 11

console.log(Math.ceil(10.4)) => 11 => yane upper wali value 
console.log(Math.floor(10.4)) => 10 => yane Lower wali value












*/

