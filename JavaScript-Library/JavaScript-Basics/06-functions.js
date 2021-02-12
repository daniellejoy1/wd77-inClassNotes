//1         //2
function hello(){
    //3
    console.log("Hello World")
}
hello(); //invokes the function hello.

hello();
hello();
hello();

function pacersWon(){
    console.log("Pacers won!")
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}

numberEntered (5);
numberEntered (4);
numberEntered (3);
numberEntered (2);
numberEntered (1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

subtractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91)); //0.364

function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(2, 5));

function nameField(firstName, lastName){
    let customerName = firstName + " " + lastName;
    return customerName;
}

console.log(nameField("Danielle", "Joy"));

function priceCalculation(price, quantity){
    let total = (price * quantity) * 1.07;
    return total;
}

console.log(priceCalculation(59.99, 3));
