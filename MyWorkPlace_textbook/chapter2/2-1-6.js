////클래스 문법.. 프로토타입 기반임. 프로토타입 기반 문법을 보기 좋게 클래스로 바꾼 것이라고 생각하면 됨




var Human= function(type){
    this.type=type || 'human';
};

Human.isHuman= function (human){
    return human instanceof Human;
}


Human.prototype.breathe=function (){

    alert('h-a-a-a-a-a-m');
};

var Zero=function (type,firstName, lastName){
    Human.apply(this,arguments);
    this.firstName=firstName;
    this.last_name=lastName;
};

Zero.prototype=Object.create(Human.prototype);
Zero.prototype.constructor=Zero;
Zero.prototype.sayName=function (){
    alert(this.firstName+''+this.last_name);

    };

var oldZero = new Zero('human','zero','cho');
Human.isHuman(oldZero);







///위 코드를 클래스 기반 코드로 변경
class Human {
    constructor(type='human') {
        this.type=type;
    }
    static isHuman(human){
        return human instanceof Human;
    }

    breathe(){
        alert('iz-one')

    }

}

class Zero extends Human{
    constructor(type,fistName,lastName) {
        super(type);
        this.firstName=fistName;
        this.last_name=lastName;
    }


    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.last_name}`);
    }

}


const newZero=new Zero('human','zero','cho')


Human.isHuman(newZero);//////TRUE