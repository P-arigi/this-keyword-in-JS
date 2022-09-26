var numbersArray=[1,2,3,4,5];

 var a=Math.max.apply(this,numbersArray)
 console.log(a)

 var arrayToBeFlattened=[1,2,[3,4],[5,6]]
 var a=[].concat.apply([],arrayToBeFlattened)
 console.log(a)