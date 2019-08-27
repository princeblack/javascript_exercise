let array = [1,2,3,4,5,6,7,8,9]
const arrayReduc = array.reduce((total,value)=>{
    console.log(total +value);
     value > total ? value : total;
    return total + value
    
},0.05);

console.log(arrayReduc);

let data =["orange","banana","tomato","orange","tomato","mango","tomato","cherry","banana"]

const fruits = data.reduce((total,value)=>{
    if (total[value] == undefined) {
        total[value] = +1;
    }
    else{
        total[value] =  +1
    }
    // console.log(total);
    return total;


},{});
console.log(fruits);

let vals =[1,2,3,4,5,6,7,8,9];

let biggest = vals.reduce((a, b)=>
    b > a ? b : a
);
console.log(biggest);

let sum = vals.reduce((a,b)=> a + b );

console.log(sum);

 