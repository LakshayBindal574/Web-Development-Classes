//Scope and closuer, HOF

//Scope
   //|-->Functional - Accessable only to function
   //|-->Global - Access from anywhere
   //|-->Block   - Access Only within a block
let a=10;
let b=20;

function greet(){
    //This variable is function scope we can't access this outside the function
    let a = 10;
    console.log(a);//Its a valid syntax
}

