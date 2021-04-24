/*

HOISTING
There are two phases when we run our code
    -creation phase:any variable (var, let, const) and function in our code are stored in memory
    -Execution phase:Values are assigned to the variables and functions that are in memory during the create phase

What's on the left of the = sign is stored to memory during the create phase, what's on the right is assigned during the execute phase
    (create)    (execute)
let variable = value;

*/

let num = 12
console.log(num)

sayHi();

function sayHi() {
    console.log('hello');
    let hi = 'hola!';
    console.log(hi);
}

let varFunc = function () {
    console.log('testing, testing.');
}
varFunc();
