/*Explicit Binding - when we want to explicitly set the context for the keyword this
To explicitly bind the keyword this we can use one of three functions: call, apply, or bind.
 These functions allow us to set the value of the keyword this to be whatever we want
*/

var animal={
    introduce:function(){
        return this.name+ " is a " +this.type + " and says "+this.sound + "!";

    }
};
var whiskey={
    name:"Whiskey",
    type:"dog",
    sound:"woof"
};

var moxie={
    name:"Moxie",
    type:"cat",
    sound:"meow"
};
// set the thisArg to be the object whiskey
console.log(animal.introduce.call(whiskey));
console.log(animal.introduce.call(moxie));