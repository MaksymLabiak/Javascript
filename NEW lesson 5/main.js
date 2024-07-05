// Functions - функції
// 10-12 рядок, це оголошення функції, її створення. name - це аргумент функції. Ми вказали функції, що вона очікує на аргумент, яким вона в подальшому буде маніпулювати в самій функції
// 20 виклик функції, в дужках передаємо значення, яке ця функція має прийняти
// alert('hello'); // вбудована функція
// console.log("Hello"); // це метод
// const userName = "Maksym"
// const ages = 20;
// const genders = "male";

// function sayHello(name, age, gender) {
//     // name ==== userName, age === ages, gender === genders
//     alert("hello, dear user " + name);
//     if (age < 18) {
//         alert("You are to young");
//     }
//     if (gender === "male") {
//         alert("Welcome to the club buddy");
//     }
// }
// sayHello(userName, ages, genders);
// // sayHello("Oleg", age, gender);

// const userName2 = "Maksym2"

// function createUserName(name) {
//     const result = name.toUpperCase();
//     return result;
// }

// // const userName = createUserName();
// console.log(createUserName(userName2));


const UserName = "Maksym";

function upperName(name) {
    const result = name.toUpperCase();
    return result;
    // return name.toUpperCase(); - це скорочений варіант коду
}

console.log(upperName(UserName));
// console.log(UserName.toLocaleUpperCase());

function sayHello(greetings) { // function declaration
    alert(greetings);
}

sayHello("Hi there");

const sayHello2 = function sayHello(greetings) { // function expression
    alert(greetings);
}

sayHello2("Czeszcz")

const car = {
    speed: 100,          // Властивість speed з значенням 100
    color: "blue",       // Властивість color з значенням "blue"
    drive: function () {  // Властивість drive, яка є функцією
        console.log("I love to drive");  // Виводить "I love to drive" в консоль
    }
};

// Виклик методу drive об'єкта car
car.drive();  // Виведе "I love to drive". car - створили обʼєкт, а в ньому властивості drive надали функцію 

/*
function returnSmth() {
    console.log(1);
    console.log(1);
    console.log(1);
    return "Hello"; // Функція повертає "Hello"
}

const greeting = returnSmth(); // Значення "Hello" зберігається у змінну greeting

console.log(greeting);
*/