//What is the value of the keyword this in the following example:
var data=this;
console.log(data);

//2.What does this function output? Why?
function logThis(){
    return this;
}
console.log(logThis());

//3 What does this function output? Why?
var instructor={
    firstName:"Tim",
    sayHi:function(){
        console.log("hello! " + this.firstName);
    }
}
console.log(instructor.sayHi())

//4.What does this function output? Why?
var instructor={
    firstName:"Tim",
    info:{
        catOwner:true,
        boatOwner:true
    },
    displayInfo:function(){
        console.log("Cat owner?" + this.catOwner)
    }
}
console.log(instructor.displayInfo())

//5.What does this function output? Why?

var instructor={
    firstName:"Tim",
    info:{
        catOwner:true,
        boatOwner:true,
        displayLocation:function(){
            return this.data.location;

        },
        data:{
            location:"Oakland"
        }
    },
}
console.log(instructor.info.displayLocation())

var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

console.log(instructor.info.data.logLocation())
//Here we get the error because logLocation() is not a 
//function.