// const users = []

function sayHello() {
    console.log("hello");
}

sayHello();

const sayHello2 = () => {
    console.log("hello2");
}

sayHello2();

function sayHelloToPerson(name) {
    console.log("Hello " + name);
}

sayHelloToPerson("Maksym");

const sayHelloToPerson2 = name => { // якщо ми передаємо один аргумент, то душки можна не використовувати => - стрілкова функція
    console.log("Hello2 " + name);
}

sayHelloToPerson2("Maksym");


function sum(a, b) {
    console.log(arguments); // це псевдомасив, який зберігає в собі посилання на дані, які ми передаємо в цю функцію
    return a + b;
}

console.log(sum(5, 7));

const summ = (a, b) => console.log(a + b);

summ(4, 332);


const users = [
    { name: 'Maksym', age: 25, sex: 'male' },
    { name: 'Robert', age: 15, sex: 'male' },
    { name: 'Yulia', age: 28, sex: 'female' },
    { name: 'Hanna', age: 23, sex: 'female' },
    { name: 'Oleg', age: 16, sex: 'male' },
];

// const folteredArr = users.filter((item) => {
//     return item.age > 17;
// })

const folteredArr = users.filter(item => item.age > 17);

console.log(folteredArr);

const usersSex = users.map(item => item.sex === 'male' ? 'Mr.' + item.name : 'Mrs.' + item.name);

console.log(usersSex);


const correctNames = users.map(function (item) {
    return item.sex === 'male' ? 'Mr ' + item.name : 'Mrs ' + item.name
});