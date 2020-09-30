// 화살표함수



function add1(x,y){

    return x+y;
}
const add2=(x,y) =>{

    return x+y;

};


const  add3 = (x,y) => x+y;


const  add4 = (x,y)=> (x+y);

function  not1(x){
    return !x;
}


const not2=x=>!x;

console.log(add1(5,2))

console.log(add2(5,2))

console.log(add3(5,2))

console.log(add4(5,2))
console.log(not1(1))

console.log(not2(3))

