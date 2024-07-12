// Async/Await 

// async та await — це ключові слова в JavaScript, які допомагають працювати з асинхронним кодом. Вони дозволяють писати асинхронний код, який виглядає і поводиться як синхронний, що робить його більш читабельним та зрозумілим.
// в асинхронному коду, ми виловлювали помилки за допомогою .then .catch, в сихроному коді ми використовуємо try catch


// function fetchUsers() {
//     return fetch("https://jsonplaceholder.typicode.com/users/1")
//         .then((response) => response.json())
//         .then((user) => user);
// }

// //асинхронний варіант коду

// // function sayHello() { 
// //     fetchUsers().then((data) => {
// //         alert('Hello ' + data.name)
// //     })
// // }

// // синхронний варіант коду

// async function sayHello() {
//     try {
//         const user = await fetchUsers();
//         console.log(user);
//         console.log('Hello ' + user.name)
//     } catch (error) {
//         console.log(error);
//     }
// }

// sayHello();

/*
Зробити запит на API https://jsonplaceholder.typicode.com/users/
щоб отримати доступ до масиву з 10-ма фейковими користувачами і вивести його у вигляді списку на екран. 
Додати на сайт текстове поле, при введені тексту в якому буде відбуватися фільтрація користувачів за іменем.
Наприклад, коли ми вводимо імʼя "Johb" або які так починаються.
*/

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(json => {
//         const button = document.querySelector(".btn")
//         const userList = document.querySelector(".user-list")
//         json.forEach(item, index) => {
//             const user = document.createElement("li")
//             const userText = document.createElement("h4")
//         }
//     })

async function fetchUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json();
}

async function renderList() {
    const users = await fetchUsers();
    const ul = document.querySelector(".users-list")
    for (const user of users) {
        const li = document.createElement("li");
        li.classList.add("users-list-item");
        li.innerHTML = user.name;
        ul.appendChild(li);
    }
}

function filterUsers(e) {
    const userListItems = document.getElementsByClassName("users-list-name");
    if (e.target.value.length === 0) {
        [...document.getElementsByClassName("hidden")].forEach((item) => {
            item.classList.remove("hidden");
        });
        return;
    }
    for (const user of userListItems) {
        if (!user.innerHTML.startsWith(e.target.value)) {
            user.classList.add("hidden");
        } else {
            user.classList.remove("hidden");
        }
    }
}

renderList();

document.querySelector(".input").addEventListener("keyup", filterUsers);
