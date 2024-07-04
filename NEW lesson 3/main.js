// Operators - оператори

// Арефмитичні оператори

const num1 = 10;
const num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // ділення з остачею

// Assignment operator - оператори призначення

let num3 = 50;
num3 += 30; // num3 = num3 + 30; 
console.log(num3);

// Comparison operators - оператори порівняння

const isUserLoggedIn = false;
const age = 18;
let name = "Maksym";

if (age === 18 && name === "Maksym" && !isUserLoggedIn) {
    alert("You are allowed to visit our site");
}

// Logical operators (&& - AND, || - OR, ! - NOT)

// String operators

name += " is my name";

console.log(name);

// Delete

var obj = {
    name2: "Maksym",
    age2: 25,
    sex: "male"
}

delete obj.sex;

console.log(obj);