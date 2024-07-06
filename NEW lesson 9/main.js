// з допомогою document можна достукуватися до html елементів сторінки
// addEventListener() - метод, який приймає два значення, і додається до обʼєкта. перший, це як ми активуємо, а друге значення, це колбек функція
// колбек функція - це функція, яка передається аргументом в іншу функцію, і буде викликана в певний момент
// document.querySelector() - достукується тільки до першого елементу, тоді як document.getElementsByClassName('img') - до всіх елементів img
// document.getElementsByClassName('img'[0]); - два аналогічних способа, як достукатися // [0] це щоб достукатися до першої картинки

// const btn = document.getElementById('btn-happines');
// document.getElementById('btn-saddness');

// btn.addEventListener('click', function () {
//     alert("hello")
// })



// const obj = {
//     name: "maksym",
//     sayHello: function () {
//         console.log("hello");
//     }
// }

// obj.sayHello();

// function sayCloseMe() {
//     alert('close me');
// }

// const btn = document.getElementById('btn-saddness');

// btn.addEventListener('click', sayCloseMe);

// document.getElementById('btn-saddness').addEventListener('click', function () {
//     alert("Say hello");
// })
// --------------------------------------------------------------------------------
// document.getElementById('btn-happines').addEventListener('click', function () {
//     document.querySelector('.img').style.display = 'inline';
//     document.getElementById('btn-happines').disabled = true;
//     document.getElementById('btn-saddness').disabled = false;
// })

// document.getElementById('btn-saddness').addEventListener('click', function () {
//     document.querySelector('.img').style.display = 'none';
//     document.getElementById('btn-happines').disabled = false;
//     document.getElementById('btn-saddness').disabled = true;
// })


const img = document.querySelector('.img');
const btnHappines = document.getElementById('btn-happines');
const btnSaddness = document.getElementById('btn-saddness');


btnHappines.addEventListener('click', function () {
    img.style.display = 'inline';
    btnHappines.disabled = true;
    btnSaddness.disabled = false;
})

btnSaddness.addEventListener('click', function () {
    img.style.display = 'none';
    btnHappines.disabled = false;
    btnSaddness.disabled = true;
})





// const obj = {
//     getElementById: function () {
//         console.log(1);
//         return {
//             addEventListener: function () {
//                 console.log(2);
//             },
//         };
//     },
// };

// obj.getElementById().addEventListener()