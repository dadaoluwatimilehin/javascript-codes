// control structure in js is essential for controlling the flow of 
// execution in your code .They allow you to dicates how your 
// program should respond based on conditions.

// 1. conditional statement
// conditional statement are used to execute a block of code based on a condition.
// condition is true or false.

// a. if statement
let temperature = 30;
if (temperature > 25) {
    console.log("It's hot day!");
} else {
    console.log('It is a cold day')
}
const isAdmin = false;
const isSuperUser = true;
if (isAdmin || isSuperUser) {
    console.log("You  can have  access to the app");
}


// write if statement  that checks if someone  has paid school fees
// and have good health before the person can 
// have access to the class, else the person should go home.
// your program should print out access to the class or you should go home.


const hasPaidSchoolFees = true;
const hasGoodHealth = true;
if (hasPaidSchoolFees && hasGoodHealth) {
    console.log("You can have access to the class");
}else {
    console.log("You should go home");
}

let age = 25;
if ( age > 25) {
    console.log("Your age is above 25");
}else if (age < 25){
    console.log("Your age is below 25");
}else {
    console.log('Your age is 25');
}


let fruit = "apple";
if (fruit === "banana") {
    console.log ( "we have banana in the store")
}else if (fruit === "orange") {
console.log("we have orange in the store")
}else if (fruit === "coconut"){
    console.log("we have coconut in the store")
}else if(fruit === "apple"){
    console.log("we have apple in the store")
}else {
    console.log("we don't have the fruit in the store")
}

let fruit1 = "apple";
switch (fruit1) {
    case "banana":
        console.log("it is banana ");
        break;
    case "apple":
        console.log("it is apple");
        break;
    case "coconut":
        console.log("it is  coconut");
        break;
    case "orange":
        console.log("it is orange");
        break;
    default:
        console.log("we don't have any fruit");
}


let  age1 = 25;
switch (age1) {
    case age1 > 25 :
        console.log("your age is above 25");
        break;
    case age1 < 25 :
        console.log("your age is below 25");
        break;
    default:
        console.log("your is 25");
}


const actions = ["start", "stop", "pause"];
let userAction = "start"
let isLoggedIn = true;
switch(true){
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction);
        break;
        case actions.includes(userAction) && !isLoggedIn:
            console.log("please log in to perform  this action:")
            break;
    default:
        console.log("No valid case found.")
}

