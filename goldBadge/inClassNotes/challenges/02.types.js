/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

var myObj = {
    myFaveShow: 'I love Lost!',
    isLostGreat: true,
    positionOnTopTenList: 5,
    lostArray: [4, 8, 15, 16, 23, 42],
} 
console.log(myObj)

var myObj = {
    myFaveShow: 'I love Lost!',
    isLostGreat: true,
    positionOnTopTenList: 5,
    lostArray: [4, 8, 15, 16, 23, 42],
} 
console.log(myObj);

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

console.log(typeof myObj.myFaveShow);
 
let typeValue = typeof myObj.myFaveShow;
console.log(typeValue);

// var person = {fname:"John", lname:"Doe", age:25};

/*var text = "";
var x;
for (x in person) {
  text += person[x];
}
*/

var myObj = {
    myFaveShow: 'I love Lost!',
    isLostGreat: true,
    num: 5,
    lostArray: [4, 8, 15, 16, 23, 42],
} 
typeValue = typeof myObj.num

typeValue == 'number' ? console.log('number'):
typeValue == 'boolean' ? console.log('boolean'):
typeValue == 'string' ? console.log ('string'):
typeValue == 'object' ? console.log ('object'):
console.log('What are you?')