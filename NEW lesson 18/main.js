// HTTP - це протокол комунікації вашого веб браузера з веб сервером
// fetch — це функція в JavaScript, яка використовується для виконання мережевих запитів(HTTP запитів) до сервера та обробки отриманих відповідей.Вона є частиною стандарту ECMAScript і надає простий та потужний спосіб здійснення AJAX - запитів(асинхронних запитів до сервера без перезавантаження сторінки).


// fetch представник web api браузера

// console.log(1);
// console.log(2);

// fetch повератє проміс. в даному випадку функція fetch, якій ми передаємо ендпоїнт https://jsonplaceholder.typicode.com/todos/1 повертає проміс
// проміс як обʼєкт має метод .then(response => response.json())), цей метод буде виконано, якщо запит пройде успішно.

// console.log(3);
// console.log(4);

// Здійснити http запит на сервіс jsonplaceholder, щоб отримати масив зі 100 постів.
// Вивести на екрна їх у вигляді стилізованого списку новин.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        const list = document.querySelector(".post-list"); // достукуємся до вже створеного списку .post-list
        json.forEach((item, index) => { // перебираємо всі елементи в масиві json (тобто всі масиви з імпортованого fetch)
            // creating element
            const post = document.createElement("li");
            const postIndex = document.createElement("span");
            const postTitle = document.createElement("h4");
            const postText = document.createElement("p");
            const postReadMoreLink = document.createElement("a");

            // adding classes цим елементам
            post.classList.add("post-list-item");
            postIndex.classList.add("post-index");
            postTitle.classList.add("post-title");
            postText.classList.add("post-text");
            postReadMoreLink.classList.add("post-link");

            // content renew
            postIndex.innerHTML = index + 1;
            postTitle.innerHTML = item.title;
            postText.innerHTML = item.body;
            postReadMoreLink.innerHTML = "Read more";

            // insert items into the list
            post.append(postIndex, postTitle, postText, postReadMoreLink); // методом append закидаємо туда всі дані, у нашому випадку в ("li") список
            list.appendChild(post); // робить елемент li дочірнім елементом list
        });
    })
    .catch(error => console.error('Error fetching news:', error));
