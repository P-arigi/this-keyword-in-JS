function add(a,b){
    return a+b;
}
var partialAdd=add.bind(this,8)
console.log(partialAdd(6))