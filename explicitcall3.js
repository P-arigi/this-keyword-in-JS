/*One of the most common use cases for call is to convert an array-like object into an actual array. 
Take a look at the following example:*/

function sumArgumentsIncorrectly(){
    return  arguments.reduce(function(acc,next){
        return acc+next;
    },0);

}
sumArgumentsIncorrectly(1,2,3,4,5) // this throws a type error because the arguments "array-like object" does not contain the method reduce!

function sumArgumentsIncorrectly(){
  // we are going to use the slice method which makes copies of arrays, but instead of making a copy of
  // [], we will use the arguments array as the context that we want slice to be called in. We can
  // immediately attach reduce and we are good to go!
  
    return[].slice.call(arguments).reduce(function(acc,next){
        return acc+next;
    },0)
}
console.log(sumArgumentsIncorrectly(1,2,3,4,5))