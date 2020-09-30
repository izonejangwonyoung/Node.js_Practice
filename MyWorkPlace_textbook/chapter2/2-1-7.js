///프로미스... 일단 따라해보자





const condition= true;
const promise=new Promise((resolve,reject)=> {
    if(condition){
        resolve('성공')

    }else{
        reject('실패');

    }


});

//다른 코드가 들어갈 수 있음


promise
    .then((message)=> {

        console.log(message);
    })
    .catch((error)=>{

        console.error(error);

    })
    .finally(()=>{
        console.log('무조건')
        })