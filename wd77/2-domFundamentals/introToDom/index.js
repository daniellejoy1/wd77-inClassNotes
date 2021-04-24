const header = document.getElementById('header')
console.log(header);

header.style.color ='pink';
header.innerText = 'Hello World';

const errorList = document.getElementsByClassName('error-list');
console.log(errorList);

errorList[1].innerText = "I changed error 2";

for(let i = 0; i < errorList.length; i++){
    errorList[i].style.color='red';
}

// Example 2
for(error of errorList){
    error.style.color = 'green';
}

// Example 3 looping forEach // CAN NOT DO

// errorList.forEach((error) => (error.style.color = 'purple'));

const tags = document.getElementsByTagName('p');
console.log(tags);

tags[0].innerText = "I replaced this text!";

const lists = document.getElementsByTagName('li');
console.log(lists);

for (let i = 0; i < lists.length; i++){
lists[i].style.fontStyle = 'italic';
}
// use the for loop to change all items in the array or multiple items in the array without having to code for each array item
eventL

