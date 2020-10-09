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
        console.log('무조건 출력되어야하는 부분')
        })




promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })

    .catch((error) => {
        console.error(error);
    });