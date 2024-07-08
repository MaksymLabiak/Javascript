// ключова різниця між примітивами і обʼєктами
// Примітивні типи даних
// string
// number
// boolean
// undefined
// bigInt
// symbol

// Примітивні типи даних зберігаються в стеку, тоді як об'єкти зберігаються в хіпі. Посилання на об'єкти зберігаються в стеку, а самі об'єкти та їхні властивості - в хіпі, що дозволяє змінювати їхні властивості.
// Примітивні типи даних зберігаються в стеку, що дозволяє їм бути швидкими та легко копійованими за значенням. Об'єкти зберігаються в хіпі, тоді як посилання на них зберігаються в стеку. Це дозволяє змінювати властивості об'єктів через різні посилання на один і той же об'єкт.

// let number = 10;
// let number2 = number;

// number = 50;
// console.log(number2);

// const obj = {
//     name: 'Maksym',
//     age: 26
// }

// const obj2 = obj;

// obj.name = 'Denys';
// obj.age = 21;

// console.log(obj);
// console.log(obj2);

const obj1 = {
    name: 'Maksym'
}

const obj2 = {
    name: 'Maksym'
}

console.log(obj1 === obj2); // прирівнюється посилання на памʼять

const obj = 10;
const obj3 = 10;

console.log(obj === obj3);

//Об'єкти: Порівнюються за посиланням (референцією).
// Примітиви: Порівнюються за значенням.

const groupA = [
    'FC Arsenal London',
    'FC Real Madrid',
    'FC bayern Munich',
    'FC Milan'
];

// function createTeamsForCaledarPage(teams) {
//     teams.forEach((element, index) => {
//         const onlyClubName = element.split(' ')[1];
//         teams[index] = onlyClubName;
//     });
//     return teams;
// }

function createTeamsForCaledarPage(teams) {
    return teams.map(item => item.split(' ')[1]);
}

// const newArr = [...groupA]; - ми створили масив, в який ми запхали значення масиву через ..., якщо без spread operator (...) то буде змінюватися і оригінальний масив

console.log(createTeamsForCaledarPage(groupA)); // поганий варіант, оскільки при виконання функції, ми передаємо посилання на масив, тому значення міняються
console.log(groupA);