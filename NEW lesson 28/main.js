// const date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMonth());
// date.setFullYear(2020)
// console.log(date);

// const options = {
//     weekday: "short", // long означає, що ми передаємо довге значення, ще є short
//     year: "numeric", // numeric означає, що ми передаємо цифрове значення
//     month: "long",
//     day: "numeric",
// };

// console.log(date.toLocaleString("uk-UA", options))

function setExp() {
    const date = new Date()
    date.setDate(date.getDate() + 30)
    localStorage.setItem("exp", date.getTime());
}

function signUp() {
    setExp()
}


signUp()

// date.setDate(date.getDate() + 30) // означає, що ми будемо отримувати підписку на 30 днів
// console.log(date)

document.querySelector(".watch").addEventListener("click", () => {
    const exp = localStorage.getItem("exp");
    const currentDate = new Date().getTime();

    if (!exp || currentDate > exp) {
        alert("You are not subscribed");
    } else {
        alert("You are subscribed");
    }
});


