let array = [1,2,3,4,5,6,7,8,9]

function isEven(num) {
    if (num % 2 == 0) {
        console.log(num % 2 ==0);
        
        return true;
    }else{
        return false;
    }
}

console.log(array.filter(isEven));
