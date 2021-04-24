/*
* BRONZE
- Using a FOR OF loop, console.log the name of each pie from the pies array using string interpolation.
*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']
/* 
* SILVER
- Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
- Use google to search for an array method that checks if an array includes a certain value
*/
/* 
* GOLD
- Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.
*/

/*for (pie of pies){
    console.log (pie)
}*/
/*
for (pie of pies){
if (pie == 'apple' || pie == 'blueberry' || pie == 'peach' || pie == 'cherry'){
    console.log(`the ${pie} pie is a fruit pie!`);
}
else {
    console.log(`the ${pie} pie is not a fruit pie :(`);
}
}*/

for (pie of pies){
    if (pie == 'apple' || pie == 'blueberry' || pie == 'peach' || pie == 'cherry'){
        console.log(`the ${pie} pie is a fruit pie!`);
    }
    else {
        console.log(`the ${pie} pie is not a fruit pie :(`);
    }
    }