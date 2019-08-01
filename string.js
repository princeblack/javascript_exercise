var oustr = "I come first. ";
oustr += " I come second. ";
// oustr += prompt("test")
console.log(oustr);
// alert(oustr);

var someAdjective = " worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective
console.log(myStr);

//  length of string

var lastNameLength = 0;
var lastName = "lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

// bracket notation to find first character in string

let firstLetterOfLastName = "";
let lastName2 = "Lovelace" ;
firstLetterOfLastName = lastName2[2] ;
console.log(firstLetterOfLastName);

// string immutability

var myStr2 = "hello world";
myStr2 = myStr2.replace(myStr2[0],"z");
console.log(myStr2);
let secondMyStr = myStr2[4];
console.log(secondMyStr);

// bracket notation to find nth character in string

var firstName = "ada";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

secondLetterOfFirstName = firstName[firstName.length -2];
console.log(secondLetterOfFirstName);

let test2 = firstName.length;
console.log(test2);

// Store multiple values with arrays
var myArray = [[50,60,70],["jhjdfg",14,57]];
let myData = myArray[1][0];
console.log(myData);

// Modify Array Data With Indexes
myArray [0][1] = 150 ;
myArray [1][0] = "moi";
console.log(myArray);

// access Multi-Dimensional Array With Indexes
myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12],13,14]];
console.log(myArray);
myData = myArray[3][2];
console.log(myData);

// manipulation Array With push()
myArray.push(["dog",25,56,[45,565,8541,527,]]);
console.log(myArray);

// manipulate Arraqy With pop()
let removeFormArray = myArray.pop([]);
console.log(myArray);
console.log("==================================");
console.log(removeFormArray);
console.log("==================================");

// manipulate Arraqy With shift()
var removeWithShift = removeFormArray.shift();
console.log(removeFormArray);
console.log("==================================");
console.log(removeWithShift);
console.log("==================================");

// manipulate Arraqy With unshift()
console.log(myStr2);
myArray.unshift([125,45,45,50]);
console.log(myArray);

// Shopping list
var myList = [["cereal", 3],["milk", 2] ,["bananas", 3],["juice",4],["eggs", 10]];
console.log(myList);

// write Reusable Code with Functions
function functionWithArgs(a, b) {
    console.log(a * b);
}
functionWithArgs(415,25)

// global Scope and Functions
let myGlobal = 20;
let oopsGlobal = 10;
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal :" + myGlobal + " ";
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output); 
}
fun2()

// Local Scope and Function

function myLocalScope() {
    var myVar = "je suis le boss"
    console.log(myVar);
}
myLocalScope()