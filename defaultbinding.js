/*  Default Binding
 You can think of this as the last possible option when all other rules do not apply. 
 The default binding exists when the keyword this is in the global context*/

 var thing=this;  //It will show window
 thing;

 function outer(){
    return this;
 }
 outer()