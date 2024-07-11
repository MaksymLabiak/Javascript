// Promises

// У JavaScript "проміси" (promises) - це об'єкти, які використовуються для обробки асинхронних операцій. Вони дозволяють виконувати код, який потребує часу (наприклад, запити до сервера), і отримувати результат або обробляти помилки після завершення операції.
// функція fetch повертає нам проміс, до якого ми можемо застосовувати метод .then

// Promise має три стани:

// Pending(очікування): Початковий стан, обіцянка ще не виконана і не відхилена.
// Fulfilled(виконано): Операція завершилася успішно.
// Rejected(відхилено): Операція завершилася з помилкою.


// fetch('https://fsdfqwe.com').then()

// const promise = new Promise((resolve, reject) => {
//     const isUserLoggedIn = true;
//     if (isUserLoggedIn) {
//         setTimeout(() => resolve('User is logged in'), 2000)
//     } else
//         setTimeout(() => reject('Sorry, you are not logged in'), 2000)
// })

// // promise.then(data => console.log(data));  // це виводить, якщо зміна яку ми задали, буде true
// // promise.catch(error => console.log(error)); // це виводить, якщо зміна яку ми задали, буде false
// // ------
// promise
//     .then(data => { // відбудеться тоді, коли буде виконано успішно перший проміс, в параметр буде передано те, що в 18 рядку було виконано, там де resolve
//         return new Promise((resolve, reject) => {
//             if (5 < 10) {
//                 resolve(data + "in promise 2");
//             } else {
//                 reject('error is nested Promise');
//             }
//         });
//     })
//     .then(data2 => console.log(data2))
//     .catch(error => console.log('Error:', error));


// promise.then().catch // повертає метод then
// .finnaly(() => console.log('Hello')) - відбувається в любому випадку, незалежно від того, чи який результат .then чи .catch

function getPostsById(id) {
    const result = {
        id,
        name: '',
        posts: []
    };

    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                const foundUser = users.find(user => user.id === id);
                if (foundUser) {
                    result.name = foundUser.name;
                    console.log(result);

                    fetch("https://jsonplaceholder.typicode.com/posts")
                        .then(response => response.json())
                        .then(posts => {
                            result.posts = posts.filter(post => post.userId === id);
                            console.log(result);
                            resolve(result);
                        })

                } else {
                    reject(new Error(`User with id ${id} not found`));
                }
            })
    });
}

getPostsById(4)
    .then(result => console.log('Final result:', result))
    .catch(error => console.log('Error:', error));
