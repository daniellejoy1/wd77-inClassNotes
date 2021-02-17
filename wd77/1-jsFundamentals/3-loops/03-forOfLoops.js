/* 
FOR OF LOOPS

must be iterable (numbered)
*/

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1}

// for (item of student){
//     console.log(item);
// } *CODE BREAKS*

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}

// forOf gives value back vs number in array