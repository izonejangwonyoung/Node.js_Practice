const {odd,even}=require('./var')
const checkNumber=require('./func')

function checkStringOddOrEven(str){
    if(str.length%2==0){
        return even
    }
    return odd;
}


console.log(checkNumber(20));
console.log(checkStringOddOrEven('hello'));