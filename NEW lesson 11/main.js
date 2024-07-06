// "Підняття"(hoisting) - це концепція в JavaScript, яка стосується поведінки переміщення оголошень змінних та функцій на початок їх області видимості під час фази компіляції.
// Це означає, що змінні та функції можна використовувати до їх оголошення в коді.
// коли файл .js попадає в браузер, він обробляється в дві фази, перша фаза - компіляція, друга - виконання

// function sayHello() {
// console.log('hello');
// }
// var age; - спочатку ініціалізується зміна зі значенням undefined; а вже потім набуває значення 
// Let і Const Змінні, оголошені з let і const, також піднімаються, але не ініціалізуються і перебувають в "темпоральній мертвій зоні" від початку блоку до моменту оголошення. Доступ до них до оголошення призводить до ReferenceError:
// Function declaration

sayHello();

function sayHello() {
    console.log('hello');
} // - Function declaration - коли ми декларуємо функцію одрузу

// sayHello2();

// const sayHello2 = function () {
//     console.log('hello 2');
// } // - function Expression - коли ми присвоюємо функії деяку

// console.log(age);

// var age = 20;

// console.log(age2);
// console.log(age3);

// const age2 = 25;
// let age3 = 27;

// написати функцію, яка приймає 2 аргументи: масив чисел і число.
// функція повертає кількість повторюваності переданого числа в масиві.
// якщо даного числа там немає, функція повертає текст "Даного числа в масиві немає"

const numbers = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1]
function RepetitionOfNumber(numbersArr, number) {
    let count = 0;

    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] === number) {
            count++;
        }
    }

    if (count === 0) {
        return 'Данного числа в масиві немає';
    } else {
        return count;
    }
}

console.log(RepetitionOfNumber([1, 3, 5, 7, 9, 1, 2, 8, 9, 1], 6));