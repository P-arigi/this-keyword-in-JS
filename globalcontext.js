console.log(this)  //window
function whatIsThis(){
    return this;
}

function variablesInThis(){
    this.person="Akhila"
}
console.log(person);  //Akhila
whatIsThis()  //window