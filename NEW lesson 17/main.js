// Asynchronous Javascript - асинхроний javascript 
// Асинхронний JavaScript відноситься до написання коду, який може виконуватися в неконкурентному режимі, що дозволяє програмі продовжувати виконувати інші завдання, не чекаючи завершення попереднього завдання. Це дуже корисно для роботи з операціями вводу-виводу, такими як завантаження даних з сервера, читання файлів, таймери та обробка подій.
// Callbacks - Колбек - це функція, яка передається іншій функції як аргумент і викликається після завершення асинхронної операції.
// Promises - Проміс - це об'єкт, який представляє майбутній результат асинхронної операції. Проміси мають три стани: очікування (pending), виконаний (fulfilled), відхилений (rejected).
// Async/Await - Async/Await - це синтаксичний цукор над промісами, що дозволяє писати асинхронний код так, ніби він є синхронним.

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// function

setTimeout(() => { // це web api браузера, і її виконання переноситься на пізніше
    console.log('Hello from setTimeout');
}, 1000);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(5);
console.log(6);

function SayHello() {
    console.log('Say hello');
}

SayHello();

console.log(7);
console.log(8);
console.log(9);

// Statement 1
// Statement 2
// Statement 3 - takes time - database
// Statement 4
// Statement 3 