let prompt = require("prompt-sync")();
// let arr = [10, 20, 30, 40, 50];
// arr.push(60)
// console.log(arr[2])

// let s = "sheryians"// behave like an array
// s = s +  " world" // new string ban rahai hai old me koi change nahi ho raha hai
// s.push('s')// it is not an function 
// console.log(s)

// --> string is immutable in nature



// let s = "sheryians"
// console.log(s.length)
// console.log(s.slice(0,4))// -- output : sher
// console.log(s.slice(5,8))// -- output : ian
// console.log(s.slice(-4,s.length))// -- output : ians // we can put negative indes as well in slice
// substring bhi same hai only difference is that it does not accept negative index
// console.log(s.substring(0,4))// -- output : sher 
// console.log(s.substring(0))// -- output : sheryians
// console.log(s.toUpperCase())// -- output : SHERYIANS
// console.log(s.toLowerCase())// -- output : sheryians
// console.log(s.concat(" ","world"))// -- output : sheryians world// ye nai string ban rahi hai // yaha par s sheryians ka use kar raha ho 
// console.log(s)// abhi bhi s me sheryians hi rahega 
// let a = "              shivam               "
// console.log(a.trim())// output : shivam // saare faltu ke spaces ko hata dega 

// console.log(s.charAt(0))// -- output : s
// console.log(s.charCodeAt(0))// -- output : 115 // ascii value of s

// A - 65, B - 66, C - 67, D - 68, E - 69, F - 70, G - 71, H - 72, I - 73, J - 74, K - 75, L - 76, M - 77, N - 78, O - 79, P - 80, Q - 81, R - 82, S - 83, T - 84, U - 85, V - 86, W - 87, X - 88, Y - 89, Z - 90

// a - 97, b - 98, c - 99, d - 100, e - 101, f - 102, g - 103, h - 104, i - 105, j - 106, k - 107, l - 108, m - 109, n - 110, o - 111, p - 112, q - 113, r - 114, s - 115, t - 116, u - 117, v - 118, w - 119, x - 120, y - 121, z - 122

// 0 - 48, 1 - 49, 2 - 50, 3 - 51, 4 - 52, 5 - 53, 6 - 54, 7 - 55, 8 - 56, 9 - 57


// let arr = [10, 20, 30, 40, 50]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for(let i = 0; i < s.length; i++) {
//     console.log(s.charAt(i))
// }

// // printing the string in reverse order
// for(let i = s.length - 1; i >= 0; i--) { 
//     console.log(s.charAt(i))
// }

// reversing the string
// let str = ""
// for(let i = s.length - 1; i >= 0; i--) {
//     str += s.charAt(i)
// }

// console.log(str)// -- output : sniayrehs

// checking if the string is palindrome or not
// palendrome means jo string aage se padhne par aur peeche se padhne par same ho
// for example : "madam", "racecar", "level", "rotor", "civic", "deified", "refer", "repaper", "detartrated", "redivider", "redder", "reviver", "rotator", "sagas", "solos", "tenet", "wow"

// let s = prompt("Enter a string : ")
// inefficient way
// let rev = "";
// for(let i = s.length-1; i >= 0; i--) {
//     rev = rev + s.charAt(i)
// }

// if(rev == s) console.log("palindrome")
// else console.log("not palindrome")

// efficient way
// let ispalindrome = true;
// let i = 0,j = length-1;
// while(i<j){
//     if(s.charAt(i) != s.charAt(j)){
//         ispalindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }

// if(ispalindrome) console.log("palindrome")
// else console.log("not palindrome")

// toggling the case of the string
// let s = prompt("Enter a string : ")
// // console.log(s)

// let toggle = "";
// for(let i = 0; i < s.length-1;i++){
//     let ch = s.charCodeAt(i)

//     if(ch>= 65 && ch <= 90){
//         toggle += String.fromCharCode(ch + 32)
//     }else if(ch >= 97 && ch <= 122){
//         toggle += String.fromCharCode(ch - 32) 
//     }
// }

// console.log(toggle)

// calculating the frequency of each character in the string
// let s = prompt("Enter a string : ")
// let arr = new Array(128).fill(0)// 128 is the size of ascii table

// for(let i = 0; i < arr.length; i++){
//     let indx = s.charCodeAt(i)
//     arr[indx]++ 
// }


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         console.log(String.fromCharCode(i) + " : " + arr[i])
//     }
// }

// for same order as input 
// let s = prompt("Enter a string : ");
// let charFrequency = {};
// let orderedChars = [];

// for (let i = 0; i < s.length; i++) {
//   let char = s[i];
//   if (!charFrequency[char]) {
//     charFrequency[char] = 1;
//     orderedChars.push(char);
//   } else {
//     charFrequency[char]++;
//   }
// }

// for (let i = 0; i < orderedChars.length; i++) {
//   let char = orderedChars[i];
//   console.log(char + " : " + charFrequency[char]);
// }