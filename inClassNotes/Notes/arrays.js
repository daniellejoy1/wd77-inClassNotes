/*
ARRAYS
*/
// !WE USE ARRAYS TO STORE MULTIPLE VALUES WITHIN AN ARRAY
let array = [ 'value1', 'value2', 'value3'];
//! This is how to target specific values in an array
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

//! if we dont know the length of the array, we can use the .length method to find out

// console.log(array.length);

//! we can creat array objects using the Array() constructor

// let test = new Array();
// console.log(test);

// let test2 = new Array(3);
// console.log(test2);

// console.log(test2.length);

// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// array.forEach((value) => console.log(value))

// array.forEach((value) => {
//     console.log(value)
// })

//! array.forEach(function (value){
//     console.log(value);
// })

//! array.unshift will add a new element at the beginning of an array
// console.log(array.unshift('value0'));
// array.shift will remove the element at the beginning of the array
// console.log(array.shift);

//! array.map transforms the elements in the orginal array by calling the given function once for each element in the array
// console.log(array.map((value) => value.toUpperCase()));

//! array .filter creates a new array with only the elements that pass the test in the given function
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.filter(value => value.startsWith('l')));

//! array .find returns the first element in the array that passes a test given as a function
// console.log(shoppingList.find(value => value.startsWith('l')));

//! array .reduce executes a given function for each value of the array and returns a single value
// let costs = [2.00, 3.00, 4.00, 13.00];
// console.log(costs.reduce((total, cost) => total + cost));

let costs = [1, 1, 1, 1, 1, 1];
// console.log(costs.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 10));

//! array.includes determines whether an array has a specific element
// console.log(shoppingList.includes('limes'));
// console.log (shoppingList.includes('salt'));

//! array.indexOf searches our array for a specific element and return the first index of it
//! it will return -1 if not found
// console.log(shoppingList.indexOf(('lemons')));
// console.log(shoppingList.indexOf(('salt')));

//! array.findIndex returns the index of the first index in an array that passes the test in a given function
// returns -1 if not found
// console.log(shoppingList.findIndex(value => value.startsWith('g')));
// console.log(shoppingList.findIndex(value => value.startsWith('y')));

//! array.every checks if all the elements in an array pass a test given as a function. If there is 1 element that returns false the function returns false and DOES NOT continue to check the rest of the elements. 
// console.log(shoppingList.every (value => value.length > 1));
// console.log(shoppingList.every(value => value.startsWith('c')));


//!array.concat merges two or more arrays and returns a new array
let anotherList = ['salt', 'mint leaves', 'olives'];
// console.log(shoppingList.concat(anotherList));

//! array.slice will select a part of an array and return a new array. We can select the element by providing a start and end argument which will be indicated by the index. it will not include the end argument (TO NOT THRU).
// console.log(shoppingList.slice(1, 3));

//! array.splice add/remove elements in an array and returns the removes elements. first argument takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. optional third argument takes in new elements to be added to the array
// shoppingList.splice(2, 2);
// console.log(shoppingList)

// shoppingList.splice(2, 1, 'cherries', 'salt', anotherList);
// console.log(shoppingList)

// ! array.sort sorts the items in an array. The sort order can be alphabetic or numeric, ascending or descending. By default, sort orders the values as strings in alphabetical and ascending order. 
//! it can take in a compare functions which indicates if you want it to be ascending or descending

// console.log(shoppingList.sort());

//! descending order
let nums = [21, -9, 15, 1000];
// console.log(nums.sort((a, b) => b - a));

//! ascending order
// console.log(nums.sort((a, b) => a-b));

//! array.reverse returns the specified array reversed
// console.log(shoppingList.reverse());

//! array.tostring will convert an array to a string
// console.log(shoppingList.toString());

//! Array.join converts the elements of an array into a string. Can accept an optional parameter, 'separator', which indicates how the element will be separated. The default separator is a comma
console.log() 




