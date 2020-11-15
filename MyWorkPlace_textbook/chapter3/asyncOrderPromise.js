const fs =require('fs').promises;

console.log('시작');
fs.readFile('./readme2.txt')
.then((data)=> {
    console.log('number1',data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data)=> {
    console.log('number2',data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data)=> {
    console.log('number3',data.toString());
console.log('END');
})
.catch((err)=>{
    console.err(err);
});