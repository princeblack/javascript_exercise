// function match(s1, s2) {
// 	s1 = s1.toLowerCase();
//     s2 = s2.toLowerCase()

//     if (s1 == s2) {
//         return true;
//     } else { 
//         return false
//     }
// }
// console.log(match('maMan','Maman'));

// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// function isEvenOrOdd(num) {
// 	if (num % 2 == 0 ) {
//         return 'even';
//     } else {
//         return "odd";
//     }
// }

// console.log(isEvenOrOdd(3));

// Create a function that takes an array and a string as arguments and return the index of the string.

// function find_index(arr, str) {

                
//                 return arr.indexOf(str)
 
// }
// console.log( find_index(["hi", "edabit", "fgh", "abc"], "fgh"));

// You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wage of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

function programmers(one, two, three) {
   
    let resulte = Math.max(one,two,three) - Math.min(one,two,three);
    return resulte;


}

console.log( programmers(147, 33, 526) ); //➞ 493

console.log(programmers(33, 72, 74)); //➞ 41

console.log(programmers(1, 5, 9) ); //➞ 8


// Write a function that returns true if k^k == n for input (n, k).

// function kToK(n, k) {
// 	if (Math.pow(k,n) / n == n) {
//         console.log(k);
        
//     }else{
//         console.log(false);
        
//     }
// }
// kToK(4, 2) 
// kToK(387420489, 9)

// JavaScript Demo: RegExp.prototype.exec()

let test = RegExp(" suis" , "g");
let motsTrouve = "JE suis LE BOSS DU WEB";

let res = test.exec(motsTrouve);
console.log(res);


