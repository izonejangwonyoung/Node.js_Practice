const timeout =setTimeout(()=> {
    console.log('1.5초 후 실행');
},1500);

const interval =setInterval(()=> {
    console.log('1초마다 실행');
}, 1000);

const timeout2=setTimeout(()=>{
    console.log('실행되지 않았습니다.');
},3000)

setTimeout(()=> {
    clearTimeout(timeout2); ///클리어 함수들은 모두 아이디를 반환한다. 이걳을 사용하여 타이머를 취소할 수 있는 것이다.
    clearInterval(interval);/// 위와 동일하다
},5000);

const immediate=setImmediate(()=>{
    console.log('즉시 실행');
});

const immediate2=setImmediate(()=> {
    console.log('실행되지 않습니다. ');

});

clearImmediate(immediate2)



