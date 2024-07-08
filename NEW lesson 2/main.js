const isUserLoggedIn = false;

// If Else operator

// if (isUserLoggedIn) {
//     alert('You are logged in');
// } else {
//     alert('You are not logged in');
// }

// isUserLoggedIn ? alert('You are logged in') : alert('You are not logged in')

// Ternary operator

// isUserLoggedIn ? alert('You are logged in') : alert('You are not logged in'); // те саме що і зверху, просто скорочена версія. Тернарний оператор

// Switch operator - перевіряє оператори, чи він набуває значення в значені case. Відрізняється тим, що шукає зі всього списку, а оператор IF по черзі перевіряє?

const age = 30;

switch (age) {
    case 10:
        alert('Happy birthday, you are a ten!');
        break;
    case 20:
        alert('Happy birthday, you are a twenty!');
        break;
    case 30:
        alert('Happy birthday, you are a thirty!');
        break;
    default:
        alert('You are not a ten, twenty, or thirty!')
}

