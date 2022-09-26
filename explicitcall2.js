var person1={
    name:"Matt",
    greet:function(otherName){
        return "Hi, " + otherName +", I'm "+ this.name+". Nice to meet you!";

    }
}

var person2={
    name:"Tim"
}
//person1 greets person2:
console.log(person1.greet(person2.name)); //"Hi Tim, I'm Matt. Nice to meet you!
// person2 tries to greet person1, but there's a problem...

//console.log(person2.greet(person1.name)); // TypeError: person2.greet is not a function

// person2 doesn't have a greet method! So let's borrow the one from person1...

console.log(person1.greet.call(person2)); // "Hi, undefined, I'm Tim. Nice to meet you!"

// We still need to pass person1's name to the function being called! Let's pass the argument to the function inside of call:

console.log(person1.greet.call(person2, person1.name))