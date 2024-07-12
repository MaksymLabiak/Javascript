// OOP - classes
// this означає приналежність до класу. тобто щоб не приписувати Chart.height, ми прописуємо this.height
// Наслідування/Inheritance - цей принцип дає нам можливість на основі батьківських класів наслідувати саб класи (дочірні класи)
// Поліморфізм/Polymorphism - це можливість надання сабкласам перезаписувати методи батьківських класів, у яких вони їх вспактували
//Інкапсуляція/Encapsulation - це можливість приховати методі та властивості класів, для того щоб ми не мали можливості модифікувати їх в новостворених обʼєктах

class Chart {
    constructor(height, background, hasBorder) {
        this.height = height;
        this.background = background;
        this.hasBorder = hasBorder;
    }
}

// Наслідування/Inheritance

class ChartClickable extends Chart { // створення дочірного класу, який наслідує властивості
    #isClickable = true;
    handleClick() {
        console.log("click");
    }
    getIsClickble() {
        return this.#isClickable;
    }
}

// Поліморфізм/Polymorphism
// super - довзволяє достукатися до батьківського елементу

class ChartClickableSecond extends ChartClickable {
    handleClick() {
        super.handleClick();
        console.log("Second click");
    }
}

//Інкапсуляція/Encapsulation
// # - робить властивість приватною, це означає, що ми не зможемо поміняти обʼєкт як const
// але тепер ми не маємо доступу до #isClickable, оскільки вона приватна, щоб виправити це, потрібно створити метод з функцією return this.#isClickable;

// Абстракція/Abstraction - це спосіб приховування імплементації, і показу лише функціоналу

new Chart("400px", "red", true); // коли ми достукуємся до класу через ключове слово new, ми таким чином викликаємо функцію конструктор, яка запише всі передані дані в новвостворений обʼєкт
new chartClickable("400px", "red", true);

function renderChart(chartData) {
    const charsContainer = document.querySelector(".chars-container");
    const chart = document.createElement("div");
    chart.classList.add("chart");
    chart.style.height = chartData.height;
    chart.style.background = chartData.background;
    if (chartData.hasBorder) {
        chart.style.border = "2px solid black";
    }
    if (chartData.getIsClickble()) {
        chart.addEventListener("click", chartData.handleClick)
    }
    charsContainer.appendChild(chart);
}

const chartClickable = new ChartClickable("200px", "blue", true);
// chartClickable.isClickable = false;
renderChart(new Chart("400px", "red", true));
renderChart(new ChartClickable("200px", "blue", true));
renderChart(new ChartClickableSecond("100px", "yellow", true));







