// Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(date1, date2) {
   return(date2 - date1) / (1000*60*60*24);   
}

getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) //➞ 6
  getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  ) //➞ 3
  getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
  ) //➞ 10

//   A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.


function additiveInverse(arr) {
    let res = [];
	arr.map((x)=>{
        let firstX = x;
        x = x *2;
        let total = x *2
        
        if (x - (total + firstX) > x) {
            x= x - (total - firstX)
            res.push(x)
            
        }else{
           x= x - (total - firstX)
           res.push(x)
        }
    })
    return res
}

function additiveInverse1(arr) {
	return arr.map(x => x * -1);	
}
additiveInverse([5, -7, 8, 3]) //➞ [-5, 7, -8, -3]
// additiveInverse([1, 1, 1, 1, 1]) //➞ [-1, -1, -1, -1, -1]
// additiveInverse([-5, -25, 35]) //➞ [5, 25, -35]

// Create a function that returns true if two arrays contain identical values, and false otherwise.
// To solve this question, your friend initially wrote the following code (see this challenge):

function checkEquals(arr1, arr2) {
	if (arr1.join(",") == arr2.join(",")) {
  	return true
 	} else {
  	return false
 	}
}

checkEquals([1, 2], [1, 3]);
 //➞ false
checkEquals([1, 2], [1, 2])
///➞ true
checkEquals([4, 5, 6], [4, 5, 6])
///➞ true
checkEquals([4, 7, 6], [4, 5, 6])
///➞ false
checkEquals([1, 12], [11, 2]) 
//➞ false

// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A getter for title that returns: "Title: " + the instance title.
// A getter for the author that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle =()=>{
      return `Title: ${this.title}`;
    };
    this.getAuthor =()=>{
      return `Author: ${this.author}`
    }
    
}
const PP = new Book('Pride and Prejudice','Jane Austen');
const H = new Book('Hamlet','William Shakespeare');
const WP = new Book('War and Peace',' Leo Tolstoy');


// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]

function correctStream(user, correct) {
  let res = [];
  user.map((x )=>{
    if (correct.indexOf(x) > -1) {
      res.push(1)
    }else{
      res.push(-1)
    }
  })  
  return res
}

correctStream(
  ["it", "is", "find"],
  ["it", "is", "fine"]
) //➞ [1, 1, -1]