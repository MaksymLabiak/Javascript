const button = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');

button.addEventListener("click", () => {
    const li = document.createElement('li'); // створюємо елемент li в html
    li.className = 'todo-list-item'; // надаємо цьому класу імʼя 'todo-list-item'
    li.innerText = input.value; // надаємо значення в li такого самого, як і в input, щоб текст був однаковий
    input.value = '';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
});
