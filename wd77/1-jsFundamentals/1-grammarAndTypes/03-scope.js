/*
SCOPE

1-grammarAnd Types
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

var x = 12;

function scope(){
    var x = 33; //variables inside of the function only exist inside of the function
    var y = 10; 
    console.log(x)
}
scope(); //logs 33
console.log(y); //only exists locally inside the function. must be console logged in function to show up outside the function when function is called 
console.log (x); // logs 12

//exampler 2:

var x = 12;

function scope (){
    x = 33
    console.log(x);
}
scope()
console.log(x);

//example 3:

var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x);
    }
    scopeInner();
    console.log(x);
}
scope();
console.log(x);

//example 4 contrasts with 5:
var x = 12

function scope(){
var x = 33;
if (true){
    let x = 45;
    console.log(x)
}
console.log(x);
}
scope();
console.log(x);

// example 5 contrasts with 4

var x = 12

function scope(){
    var x = 33;
    if(true){
        var x = 45;
        console.log(x)
    }
    console.log(x); //45 ->var doesnt obey 'block'scope
}
scope();
console.log(x);