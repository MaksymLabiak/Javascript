// var date = new Date();

// // показує поточний час

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// // date.setHours(23);
// // date.setMinutes(2);
// console.log("Time " + date.getHours() + ":" + date.getMinutes())

// var arr = [12, 35, 7, 8, 9];
// console.log(arr.length);
// console.log(arr.join(", "));
// console.log(arr.sort());
// console.log(arr.reverse().join(", "));
// var stroka = arr.reverse().join(", ");

// console.log(stroka.split(", "));

class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    info() {
        console.log('Human: ' + this.name + 'age: ' + this.age)
    }
}

var alex = new Person("Alex", 45, true);
var bob = new Person("Bob", 15, false);

alex.name = "alex2"
alex.age = 34

console.log(alex.age);
console.log(bob.age);

alex.info();
bob.info();