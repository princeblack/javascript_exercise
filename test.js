// var myArry =[["john", 23], ["cat", 2]];

// var removedFormMyArry = myArry.shift()

// console.log(myArry);

// myArry.unshift(["imik",455,"alza"])


// var removedFormMyArry = myArry.pop("john")

// console.log(myArry);

function nextInLine(arr, item) {
    arr.push(item);
    return arr.unshift();
}
var testArr = [1,2,3,4,5,];

console.log("before" + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After" + JSON.stringify(testArr));


 
 