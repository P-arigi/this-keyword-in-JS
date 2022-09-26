/* IMPLICIT BINDING
 
One option is that the function wrapping the keyword this is being called as a method on some object. 
In this case the call-site has some parent object, and according to the implicit binding rule, 
this should refer to this parent object*/

var friend={
    fristName:"Akhila",
    sayHi:function(){
        return this.fristName +" says hi"
    }
}

// the keyword this will refer to friend when we invoke sayHi:
friend.sayHi();

var dog={
    name:"Puppy",
    sleep:function(){
        return this.name+" is sleeping ..zzzzzz"
    }
}
dog.sleep();


var nested={
    number:1,
    anotherObject:{
        anotherNumber:2,
        whatIsTHis:function(){
            return this;
        }
    }
}
nested.anotherObject.whatIsTHis();