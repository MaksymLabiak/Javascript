const firstName = 'Maksym';

// lexicalEnvironment: {
// lastName: 'Labiak',
// parentScope: null
//}

function sayHello() {
    const lastName = 'Labiak';

    // lexicalEnvironment: {
    // lastName: 'Labiak'
    // parentScope: global
    //}

    return function () {
        console.log(firstName);
        console.log(lastName);

        // lexicalEnvironment: {
        // parentScope: sayHello
        //}
    };
    // lexicalEnvironment - це коли js створює функуію, окрім самих функцій, створюється 'lexicalEnvironment' 
    // lexicalEnvironment - це перелік всіх локальних змінних даної функції, також має посилання на батьківський scope
    ///// ЗАМИКАННЯ - це здатність функції запамʼятати lexicalEnvironment в якому вона була створена шляхом замикання всієї необхідної для неї інформації в lexicalEnvironment
}

// sayHello()(); 

const helloFunction = sayHello();

// const helloFunction = function() {
//     console.log(firstName);
//     console.log(lastName);
// };


helloFunction();

// console.log(firstName)
// console.log(lastName)

let firstsName = 'Maksym';

function sayHello2() {
    console.log(firstsName);
}

firstsName = 'Andrew';

sayHello2();


