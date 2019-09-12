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


// function additiveInverse(arr) {
//     let res = [];
// 	arr.map((x)=>{
//         let firstX = x;
//         x = x *2;
//         let total = x *2
        
//         if (x - (total + firstX) > x) {
//             x= x - (total - firstX)
//             res.push(x)
            
//         }else{
//            x= x - (total - firstX)
//            res.push(x)
//         }
//     })
//     return res
// }
function additiveInverse(arr) {
	return arr.map(x => x * -1);	
}

console.log(additiveInverse([5, -7, 8, 3]));
 //➞ [-5, 7, -8, -3]

// additiveInverse([1, 1, 1, 1, 1]) //➞ [-1, -1, -1, -1, -1]

// additiveInverse([-5, -25, 35]) //➞ [5, 25, -35]

