var arr = [5, true, 1, "stroka", 5.7, 0, -100];
arr[3] = "word";
arr[0] = true
console.log(arr[0] + " - " + arr[3]);
console.log(arr.length); // довжина елемента

var matrix = [ 
    [5, true], [1, "stroka"], [5.7, 0, -100] 
];

matrix[1][1] = 90;// перші квадратні дужки - це для пошуку елементу, в нашому випадку 1 це [1, "stroka"], другі квадратні дужки, шукають елемент всередині масиву


console.log(matrix);
