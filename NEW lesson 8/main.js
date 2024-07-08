// у функції ми можемо достукуватися лише до нижчих скоупів, а не навпаки
// глобальний скоуп, все що ми прописуємо в нашому документі
// локальний скоуп, все що ми прописуємо всереді будь-якої функції
// блочний скоуп, це зміні які прописані через ключові слова let прописані в блоках for та if

// let number = 10;
// let firstName = 'maksym';

// function sayHello() {
//     function sayAnotherHello() {
//         function sayOneMoreAnotherHello(num) {
//             console.log(num);
//             number = 12;
//         }
//         sayOneMoreAnotherHello("Maksym");
//     }
//     sayAnotherHello();
// }

// sayHello();
// console.log(number);

var test = 'another value';

if (5 < 10) {
    var test = 'correct';
    console.log(test)
}

console.log(test)

let i = 100;

for (i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);

const people = [
    { name: 'Ross', sex: 'male' },
    { name: 'Monica', sex: 'female' },
    { name: 'Chandler', sex: 'male' },
    { name: 'Phoebe', sex: 'female' },
    { name: 'Joey', sex: 'male' },
    { name: 'Rachel', sex: 'female' },
]

function describeNewness(arr) {
    for (let i = 0; i < arr.length; i++) {
        let person = arr[i];
        if (person === 'male') {
            console.log(person.name + ' handsome')
        } else {
            console.log(person.name + ' beautiful')
        }
    }
}

describeNewness(people);


// const people = [
//     { name: 'Ross', sex: 'male' },
//     { name: 'Monica', sex: 'female' },
//     { name: 'Chandler', sex: 'male' },
//     { name: 'Phoebe', sex: 'female' },
//     { name: 'Joey', sex: 'male' },
//     { name: 'Rachel', sex: 'female' }
// ];

// function describeNewness(personArray) {
//     for (let i = 0; i < personArray.length; i++) {
//         let person = personArray[i];
//         if (person.sex === 'male') {
//             console.log(person.name + ' is handsome');
//         } else {
//             console.log(person.name + ' is beautiful');
//         }
//     }
// }

// describeNewness(people);