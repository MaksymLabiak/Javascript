// Math

// console.log(Math);
// console.log(Math.PI) // виводить на екран число 3.14
// console.log(Math.max(1, 2, 4, 100, 200, 300, 7)) // виводить на екран найбільше число
// console.log(Math.min(1, 2, 4, 100, 200, 300, 7)) // виводить на екран найменше число
// console.log(Math.pow(2, 4)) // виводить на екран 2 в степені 4
// console.log(Math.sqrt(9)) // виводить на екран корінь 9
// console.log(Math.abs(-5)) // виводить на екран 5
// console.log(Math.round(4.5)) // виводить на екран 5
// console.log(Math.ceil(4.5)) // виводить на екран 5
// console.log(Math.floor(4.5)) // виводить на екран 4
// console.log(Math.random()) // виводить на екран випадкове число від 0 до 1
// console.log(Math.floor(Math.random() * 10) + 1) // виводить на екран випадкове число від 1 до 10

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderCircles() {
    const container = document.querySelector(".circles-list");
    container.innerHTML = "";
    const colors = ["#f00", "#0f0", "#00f"];
    for (let i = 0; i < 100; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        const randomLeftOffSet = getRandomInt(0, container.clientWidth);
        const randomTopOffSet = getRandomInt(0, container.clientHeight);
        const randomColor = getRandomInt(0, 2);
        circle.style.left = `${randomLeftOffSet}px`;
        circle.style.top = `${randomTopOffSet}px`;
        circle.style.backgroundColor = colors[randomColor];
        container.appendChild(circle);
    }
}

document.querySelector(".btn").addEventListener("click", renderCircles);