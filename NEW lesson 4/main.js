// Type coercion - конвертація типів в js. Типи даних можна змінювати в js, немає жосткої типізації;
// типи, які конвертуються в false по дефолту (0, -0, NaN, undefined, null, '', false)
// Конкетанація - добавлення різних типів в рядок


const age = 20;
const IsuserloggedIn = true;

if (age) {
    console.log("true");
}

let num = 14;
let name = " Maksym";

console.log(num + name);

let num1 = 10.9;
let num2 = "2";
let num3 = null;
let num4 = 2;
let text = "Hello";

// console.log(num1 - num2); // коли ми використовуємо віднімання ділення, або множення, то відбувається новертація типів

console.log(text.toLocaleUpperCase()); // працює тільки для string? та пише всі букви з великої
console.log(num1.toFixed()); // працює тільки для number, заукрагляє число
console.log(num + num3);
console.log(num2 === num4); // == - відбувається конвертація і порівнюються числа, === - не відбувається конвертації змінних в одип тип.