// shallow copy - Мілке копіювання створює новий об'єкт, але з копією посилань на властивості вихідного об'єкта. Це означає, що якщо властивості об'єкта самі є об'єктами, обидва об'єкти будуть посилатися на ті самі підоб'єкти. Зміни в підоб'єктах відобразяться в обох об'єктах.
// Мілке копіювання (Shallow Copy): Копіює лише рівень верхніх властивостей. Властивості, що містять об'єкти, залишаються спільними для оригіналу і копії.
// Глибоке копіювання(Deep Copy): Створює повну незалежну копію об'єкта, включаючи всі вкладені об'єкти.
// JSON java script object notation
// JSON.parse та JSON.stringify виконують глибоке копіювання, але не працюють для копіювання функцій і методів.

const obj1 = {
    name: 'Vitaliy',
    age: 27,
    favouriteFood: {
        sweet: 'chocolate',
        taste: 'pazza',
    },
};

// const obj2 = { ...obj1 }; перший спосіб shallow copy, ми створили новий обʼєкт в якому прописали властивості з першого обʼєкта
// const obj2 = Object.assign({ color: "red" }, obj1) // другий спосіб як ми можемо клонувати. Перший аргумент, це обʼєкт з якого ми хочемо почати, а другий це обʼєкт з я ким ми поʼєднюємо
const obj2 = JSON.parse(JSON.stringify(obj1)); // JSON.parse та JSON.stringify виконують глибоке копіювання, але не працюють для копіювання функцій і методів
// Для більш складних об'єктів можна використовувати бібліотеки, наприклад, Lodash: - можна копіювати за допомогою цієї бібліоткеи функції та методів

// obj2.name = 'John';
// obj2.favouriteFood.sweet = 'caramel';

// console.log(JSON.parse(JSON.stringify(obj1)));
// console.log(JSON.stringify(obj1));
// console.log(obj2);

const arr1 = [
    {
        name: 'maksym',
        age: 25,
        sayHello() {
            console.log('Hello');
        }
    },
    { name: 'Denys', age: 22 },
    { name: 'Ivan', age: 12 },
];

const arr3 = [...arr1];
const arr2 = JSON.parse(JSON.stringify(arr1));


arr2.push({
    name: 'rick',
    age: 20
});

console.log(arr3);
console.log(arr2);
console.log(arr1);