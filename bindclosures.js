function bind(fn,thisArg){
    var outerArgs = Array.prototype.slice.call(arguments)
    var argsWeWant = outerArgs.slice(2) // we don't want the fn and thisArg values! Let's copy from the 2nd index of the arguments array to the end!
    return function(){
        return fn.apply(thisArg, argsWeWant.concat([].slice.call(arguments))) 
        /*/
        remember that the 2nd parameter of apply takes in an array. 
        So we are concatenating (joining) the arguments from the outer  function with the arguments from the inner function 
        to form 1 big array of arguments to be used when the inner function is finally called.
        /*/
    }
}

function add(a,b){
    return a+b;
}

// check out some cool stuff we can do with our bind function now!

console.log(bind(add,this,1,11)()) // 12
bind(add,this)(1,11) // 12
bind(add,this,1)(11) // 12
console.log(bind(add,this,1)(5,6,7,8,9)) // 12 - the rest are ignored!