///엣날 느낌의 코드

// var candyMachine={
//     status:{
//         name:'node',
//         count:5,
//
//     },
//     getCandy:function (){
//         this.status.count--;
//         return this.status.count;
//     },
//
//
// };
//
// var getCandy=candyMachine.getCandy();
// var count= candyMachine.status.count;
// var machine_name=candyMachine.status.name;
//
//
// console.log(getCandy)
// console.log(count)
// console.log(machine_name)
//




// 현대 느낌의 코드



const offtherecord= {
    status:{
        name:'IZONE',
        comeback_count:0,
    },
    go_stage() {
        this.status.comeback_count++;
        return this.status.comeback_count
    },
};

const {go_stage, status: {comeback_count}}= offtherecord

