/*Strict Mode
To prevent ourselves from creating variables in the global scope, we can add the text "use strict" to enable strict mode. This was created in ES5 to prevent developers from making mistakes and instead of silent errors, strict mode will throw errors. You can read more about it here.

If strict mode is enabled, the default binding of this is undefined.*/

"use strict"

function outer() {
    return this;
}

outer(); // undefined

function info(){
    this.data = "something";
}

info() // Uncaught TypeError: Cannot set property 'data' of undefined
// this is happening since `this` is being set to undefined
// and we can not access properties on undefined!