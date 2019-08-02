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

// Global vs  Local Scope in Function
var outerWear = "sleep";

function myOutfit() {
    let outerWear = "string"
    return outerWear;
}
console.log(myOutfit());

//  return a value form a function with return

function minusSeven(num) {
    num+= - 7;
    return console.log(num);
    ;
}
minusSeven(20)

// Understanding Undefined Value Returned Form a Function
// Assignment with a return Value
 var sum = 0;
 function addThree(){
     sum = sum + 4;
     console.log(sum + " is the sum");
 }
  function addfive(num){
      return (num + sum) / 2;
  }
   console.log(addfive(50));
   sum = addfive(10);
   addThree();

//    Stand in line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
 var testArr = [1,2,3,4,5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log("==============");
  console.log(nextInLine(testArr,6));
  console.log("After: " + JSON.stringify(testArr));

//   Boolean Values
function welcomeToBooleans(){
    return true;
}
console.log(welcomeToBooleans());
 
// Use Conditional Logic With If Statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes that was True";
    }
    return "false, it's not True";
}
console.log(trueOrFalse());

// Comparison with the Equality Operator
function testEqual(val) {
    if (val == 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

// Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict("10"));

// Pratice comparing Differenct values

function compareEquality(a,b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10,"10"));

// Comparison with the Inequality Operator
function testNotEqual(a) {
    if (a != 9) {
        return "Not Equal";
    }
    return " Equal";
}
console.log(testNotEqual("9"));

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(a) {
    if (a !== 91) {
        return "Not Equal";
    }
    return " Equal";
}
console.log(testStrictNotEqual(91));

// Golf Code
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }else if (strokes <= par -2) {
        return names [1]
    }else if (strokes == par -1) {
        return names [2]
    }else if (strokes == par ) {
        return names [3]
    }else if (strokes == par + 1) {
        return names [4]
    }else if (strokes == par + 2) {
        return names [5]
    }else if (strokes >= par + 3) {
        return names [6]
    }
}
console.log(golfScore(5,8));

// switch statements

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            return answer = "Alpha";
            break;
        case 2:
            return answer = "Beta";
            break;
        case 3:
            return answer = "Gamma";
            break;
        case 4:
            return answer = "Delta";
            break;
        default:
            return answer = "what ?";
            break;
    }
}
console.log(caseInSwitch(2));
