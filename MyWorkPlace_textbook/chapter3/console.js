const boolean =true;
const number=1;
const string='abc';
const obj={
    outside:{
        inside:{
            key:'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string,number,boolean);
console.error('에러 메시지는 여기에 담을 수 있습니다.')
console.table([{name:'최예나',birth: 1999},{name:'김채원',birth: 2000}]);

console.dir(obj,{colors:false,depth:2});
console.dir(obj,{colors:true,depth:1});

console.time('시간 측정');
for(let i=0; i<100000; i++){}
console.timeEnd('시간 측정');


function b() {
    console.trace('에러 위치 추적');
}
function a(){
    b();
}
a();

console.timeEnd('전체시간')