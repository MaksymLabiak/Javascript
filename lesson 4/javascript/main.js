// цикли for, while, do while
// цикл буде відбуватися 10 раз, за кожну ітерацію цикла, значення буде збільшуватися на одиницю, і так буде відбуватися до тих пір, поки i не досягне 10
// for(var i = 0; i < 10; i++) {
//     console.log(i);
// } 

// for (var i = 100; i > 5; i /= 2) {
//     console.log(i);
// }

// var j = 1000;
// while(j >= 500) {
//     console.log(j);
//     j -= 100;
// }

// var isHasCar = true;
// while(isHasCar) {

// }

// do while відрізняється тим, що спочатку робить один цикл, потім провіряє умову, а while зразу провіряє умову, тільки потім робить цикл


// var i = 80;
// do {
//     console.log(i);
//     i += 20;
// } while (i < 121);

// for(var i = 10; i <= 20; i++) {
//     if (i % 2 == 0)
//         continue; // break завершує цикл, якщо уиова в continue виконується, то цикл починається спочатку

//     // if (i > 15)
//     //     break;

//     console.log(i);
// }

var arr = [5, 7, 3, 8, 9, 91];

for (var i = 0; i < arr.length; i++) {
    arr[i] *= 2;

    console.log("Element " + (i + 1) + ": " + arr[i]);
}
