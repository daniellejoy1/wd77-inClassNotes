/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let FB =  15
if (FB % 3 == 0 && FB % 5 == 0){
    console.log('Fizz Buzz');
}
 else if (FB % 3 == 0){
    console.log('Fizz');
}
else if (FB % 5 == 0) {
    console.log('Buzz');
}
else {
    console.log('This neither fizzes nor buzzes')
}


switch (true){
case FB % 3 == 0 && FB % 5 == 0:
    console.log('Fizz Buzz');
    break;
case FB % 3 == 0:
    console.log('Fizz');
    break;
case FB % 5 == 0:
    console.log('Buzz');  
    break;     
default:
        console.log('This neither fizzes nor buzzes')      
}  


FB % 3 == 0 && FB % 5 == 0 ? console.log('fizz buzz'):
FB % 3 == 0 ? console.log('fizz'):
FB % 5 == 0 ? console.log('buzz'):
console.log('this neither fizzes nor buzzes');
