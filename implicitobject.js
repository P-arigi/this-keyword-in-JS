var person={
    firstName:"Akhila",
    sayHi:function(){
        return "Hi " + this.firstName
    },
    determineContext:function(){
        return this===person
    }
}
person.sayHi();
person.determineContext();




var person={
    firstName:"Akhila",
    sayHi:function(){
        return "Hi " + this.firstName
    },
    determineContext:function(){
        return this===person
    },
    dog:{
        sayHello:function(){
            return "Hello " + this.firstName

        },
        determineContext:function(){
            return this===person;
        }
    }
}

person.sayHi();
person.determineContext();
person.dog.sayHello();
person.dog.determineContext();