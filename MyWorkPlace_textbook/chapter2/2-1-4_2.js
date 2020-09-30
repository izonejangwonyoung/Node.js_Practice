// var relationship1={
//     name : 'zero',
//     friends:['nero','hero','xero'],
//     logFriends:function (){
//
//         var that=this; //relationship1을 가르키는 this를 that에 저장
//         this.friends.forEach(function (friend){
//             console.log(that.name, friend);
//         });
//     },
//
//
// };
// relationship1.logFriends();
//



const relationship2={
    team_name:'IZONE',
    last_name: ['WonYoung','ChaeWon','YeaNa','YuJin'],
    logName(){
        this.last_name.forEach(last_name=>{
            console.log(this.team_name,last_name);
        });

    },
};
relationship2.logName();