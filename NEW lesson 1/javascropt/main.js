/*
Змінні

let greetingsForUsers = "Hello my dear user!" // змінні завжди починаються з маленької, і щоб написати наступне слово, ми пишемо його з великої букви - це називається cammle case

greetingsForUsers = "Hello my friend!"

const greetingsForUsers2 = "Hello my dear user!"

alert(greetingsForUsers);

*/
// Типи даних - Data types (Примітивні типи даних)

// String - текст
const greetings = "Hello users";
console.log(greetings);
console.log(typeof greetings);

// Number - цілі числа
const num = 100;
console.log(num);
console.log(typeof num);

// Boolean - true or false
const boolTrue = true;
const boolFalse = false;
console.log(boolTrue);
console.log(boolFalse);

// Null - це значення, яке ми задали і воно нічого немає, використовується, щоб в майбутньому змінити його

let someNullValue = null;
console.log(someNullValue);

// Undefined - відсутність значення

let someUndefinedValue;
console.log(someUndefinedValue);

// Object - name (властивість або ключ обʼєкта), Vitaliy (значення). ми не можемо саме значення обʼєкта змінити, але можемо змінити властивості обʼєкта
const obj = {
    name: 'Vitaliy',
    age: 26,
    hobby: 'Football',
    gender: 'male'
};

// obj.name: 'Vitaliy';
// obj.age: 26;

console.log(obj);

// Big int
const bigINT = 9999999999999999999n;
console.log(bigINT);
console.log(typeof bigINT);

// Symbol 

let sym = Symbol('description');

