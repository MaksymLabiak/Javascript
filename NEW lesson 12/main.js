// масив являє собою окремий клас структури даних, це не тільки обʼєкт.

const users = [
    { name: 'Maksym', age: 25, sex: 'male' },
    { name: 'Robert', age: 15, sex: 'male' },
    { name: 'Yulia', age: 28, sex: 'female' },
    { name: 'Hanna', age: 23, sex: 'female' },
    { name: 'Oleg', age: 16, sex: 'male' },
];

// for (let item of users) {
//     console.log(item);
// }

const count = {
    men: 0,
    women: 0
};

users.forEach(function (element2, index) {
    if (element2.sex === 'male') {
        count.men++;
    } else {
        count.women++;
    }
    // element2.sex === 'male' ? count.men++ : count.women++
}); // element2 дає нам доступ до кожного з елементів, друга. Спосіб forEach - дає нам змогу пробігтися по всьому масиву, і зробити що завгодно з елементами

console.log(count);

const adultUsers = users.filter(function (item) { //даний метод .filter, фільтрує відповідно до заданої умови і повертає відповідний масив 
    return item.age >= 18;
});

console.log(adultUsers);

const correctNames = users.map(function (item) { // даний метод бери масив, якимось чином змінює його, та повертає нове значення в масив
    return item.sex === 'male' ? 'Mr ' + item.name : 'Mrs ' + item.name
});

console.log(correctNames);

const summ = users.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.age;
}, 0);

console.log(summ / users.length);

// 1. accumulator = 0, currentValue = 25
// 2. accumulator = 25, currentValue = 15

const foundObj = users.find(function (item) {
    return item.name === 'Oleg'
}) // find відрізняється від фільтра тим, що може повернути тільки одне унікальне значення

console.log(foundObj);

// ще є методи .some .every .findIndex