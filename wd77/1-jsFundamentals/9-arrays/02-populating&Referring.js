/*
ARRAYS 
*/

// what is an array?
// has [] brackets
// can hold multiple data types
// arrays can list data types in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
// hidden keys: 0       1           2       3       4   5       6               
// console.log(typeof students);//typeof doesnt tell me my variable is an array -->object
//  console.log(students instanceof Array); // tells me my array is an array
//  console.log(students[2]);
//  console.log(students[1]);
//  console.log(students[6]);

 let name = students[6][1];
 console.log(name);

 console.log(`Hello ${name}, you look nice today!`);

//  recall for-of loop --> gives the values of the array
 let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

// for (f of food){
//     console.log(f + ' is amazing!')
// }

// // array methods
// food.push('Pizza');
// // adds item to end of the array
// console.log(food)

// food.splice(1, 1, 'Bananas');
// console.log(food);

// food.splice(2, 0, 'Sweet Potato Pie');
// //   (where to add, how many items to remove from the add point, what to add)
// console.log(food);

// food.pop(); 
// // removes last item 
// console.log(food);

// food = food.slice (2, 4);
// // console logs 2 position TO (not thru) the 4 position
// console.log(food);

// forEach: allows us to iterate , with loops specifically, and we can directly grab both the elements and their index numbers

// food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is in position ${index}`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music']
movies.push('TheForceAwakens');
console.log(movies);

movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

// let's do the following with an array:
// we will check if we are working with an array
// flip the values within the array (what wsa in index 4 is now in index 0)
// using a method only, let's print the values of the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);

if (arr instanceof Array) {
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}