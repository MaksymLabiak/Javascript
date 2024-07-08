// ARRAYS - масиви, це колекція певних даних

// const subscribers = [
//     { name: 'user1', age: 20, profession: 'millioner' },
//     { name: 'user2', age: 23, profession: 'footballer' }
// ];

// console.log(subscribers.length)

// const haveYouJustGotSubscriber = true;
// if (haveYouJustGotSubscriber) {
//     subscribers.push({ name: 'user3', age: 43, profession: 'Police Officer' }) // назва масива.push добавляє елемент в кінець цього масиву
//     subscribers.unshift({ name: 'user0', age: 43, profession: 'Fireman' }) // назва масива.unshift добавляє елемент на початок цього масиву
//     subscribers.pop() // видаляє останній елемент
//     subscribers.splice(0, 1, { name: 'user3', age: 43, profession: 'Police Officer' }); // 0 - це вибір елементу в масиві, 1 - це скільки елементів буде видалено дальше, і дальше можна вказати обʼєкт або дані, які ми хочемо добавити
// }

// console.log(subscribers) // subscribers[1] - ми звертаємося до другого елементу в масиві

// написати функцію, яка аргументом приймає масив даних, а саме підписників, і виводить на екран за допомогою функції alert, якщо у вас підписників більше 100

const followers = [
    { name: "user1", age: 20 },
    { name: "user2", age: 20 },
    { name: "user3", age: 20 },
    { name: "user4", age: 20 },
    { name: "user5", age: 20 },
    { name: "user6", age: 20 },
    { name: "user7", age: 20 },
    { name: "user8", age: 20 },
    { name: "user9", age: 20 },
    { name: "user10", age: 20 },
]

// function congratsIfMoreThan100(count) {
//     if (count.length >= 10) {
//         alert('You have more than 100 subscribers');
//     }
// }

const congratsIfMoreThan100 = count => count.length >= 10 ? alert('You have more than 10 subscribers') : NaN

congratsIfMoreThan100(followers);
