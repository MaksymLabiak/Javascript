var number = 15;
var isHasHouse = true;

if (number == 15 && isHasHouse) { // >, <, ==, >=, <=, !=, || - одна з умов має бути виконана, && - всі умови мають бути виконані
    console.log("Ок");
} else if (number < 10) {
    console.log("OK1");
} else if (number == 7) {
    console.log("7!");
} else if (number >= 12) {
    console.log("more than 12");
} else {
    console.log("not Ок (else)");
}

var stroka = "word";

switch(stroka) {
    case "4":
         console.log("Змінна зі значенням 4");
         break;
    case "45":
        console.log("Змінна зі значенням 45");
        break;
    case "wors":
        console.log("Змінна зі значенням <word>");
        break;
    default:
        console.log("нічого не підійшло, default");
        break;
}