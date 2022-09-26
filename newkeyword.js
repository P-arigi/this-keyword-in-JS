function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName
}


var name=Person("Elie","Schoppik");
console.log(name);  //undefined.

//we can fix this issue and change the value of the keyword this?
//we use "new" keyword.

var name=new Person("Elie","Schoppik")
console.log(name);
