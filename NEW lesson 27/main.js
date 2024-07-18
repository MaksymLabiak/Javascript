// Recursion

// Рекурсія - це метод програмування, при якому функція викликає сама себе для розв'язання задачі. 
// Рекурсія використовується для розбиття складних проблем на менші підзадачі одного типу. 
// Це дозволяє спрощувати структуру алгоритмів та вирішувати завдання, які важко реалізувати за допомогою ітеративних підходів.

const array = [1, 1, [2, 2], [[3, [4, 5, [0]], 3], 2]]

function contactArrRecursive(items) {
    const flattened = [];

    items.forEach((item) => {
        if (Array.isArray(item)) {
            flattened.push(...contactArrRecursive(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}
console.log(contactArrRecursive(array));


function countDown(number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}

function countDownRecursive(number) {
    if (number <= 0) {
        console.log("Count down done");
        return;
    }
    console.log(number);
    countDownRecursive(number - 1);
}


countDown(10);
countDownRecursive(45);