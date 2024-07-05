// Цикл for використовується для повторного виконання блоку коду визначену кількість разів.
// Цикл while виконує блок коду, доки умова залишається істинною.
// Цикл do...while подібний до while, але перевіряє умову після виконання блоку коду, тобто він завжди виконається хоча б один раз.
// Цикл for...of використовується для перебору елементів ітерабельних об'єктів, таких як масиви або рядки.
// Цикл for...in використовується для перебору перелікових властивостей об'єкта (тобто ключів).

const subscribers = [
    { name: 'Andrew', isCloseFriend: true },
    { name: 'Sasha', isCloseFriend: true },
    { name: 'Peter', isCloseFriend: true },
    { name: 'Vitaly', isCloseFriend: true },
    { name: 'Sarah', isCloseFriend: true },
    { name: 'Jessica', isCloseFriend: true },
    { name: 'Gunter', isCloseFriend: true },
    { name: 'Brad', isCloseFriend: true },
];

// for (let i = 0; i < subscribers.length; i++) { // i = 0 - оголошення початкового значення змінної лічильника
//     console.log(subscribers[i])
// }

// for (const item of subscribers) { // такий самий метод як і for, просто спрощує текст item - підставляється на місця кожного елементу масиву, після чого виконується код
//     console.log(item);
// }

// const obj = {
//     name: 'Maksym',
//     age: 18,
//     sex: 'Male',
//     nation: 'Ukraine',
//     hobby: 'Gym'
// }

// for (const key in obj) { // цей метод для перевірки властивості обʼєктів
//     console.log(key);
// }

// console.log(obj[key]) - в цьому випадку це достукування до динамічної властивсті
// console.log(obj.key) - звертання до цієї властивості (ключа)


// let i = 0;

// while (i < subscribers.length) {
//     console.log(subscribers[i]);
//     i++;
// }

let someList = [1, 2, 3, 4, 5, 6];

function squareArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    console.log(arr)
}

squareArr(someList);