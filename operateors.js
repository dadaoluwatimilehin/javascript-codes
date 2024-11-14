// operators in js are special symbols that perform operations on one or more
// files in our js file system

// 1. arithmatic operation
// addtion
let sum = 5 + 3;
console.log(sum)

// subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product)

// division
let quotient = product / 4;
console.log(quotient)

// modulus
let remainder = quotient % 3;
console.log(remainder);

// Assignment operators
// these operators assign values to variables

// assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5;
y += 1;
console.log(y)

// subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3.comparison operators
// these operators compare two values and return a boolean value

// Equal 
console.log(5 == "5"); 

// strict equal
console.log(5 === "5");

// Not Equal
console.log(5 != "5" );

// strict Not Equal
console.log(5 !== "5");
let n = 3
let h = 2

console.log(n != h)

// strict not equal
console.log( 5 !=="5")
let u ="solo"
let v = 10
console.log(u !== v)

// Greater than
console.log(10 > 5);
let g = 12
let k = 10
let f = g + k
console.log(k > g)

// Less than
console.log(3 < 2)
let l = 12
let i = 10
let w = l - i
console.log(f < w)

// Greater than and equal 
console.log(4 >= 5)
let d = 6
let a = 6
let b = d * 2
console.log(d >= a)

let o = a - 3

console.log(b >= o)

// using logical operators declare four variables that logs boolean value  on
// console.
//  using comments on the vs code editor explain the meaning and how


const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive);

const IsAdult = true;
const IsHungery = false

const canEnter = IsAdult && IsHungery;
console.log(canEnter);

// || operator
const knowsHTML = false;
const knowsCSS = true;
const canDesignWebsite = knowsHTML || knowsCSS;
console.log(canDesignWebsite);


const isAdmin = false;
const isSuperUser = false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage);
