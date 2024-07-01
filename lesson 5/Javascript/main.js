// alert("What a beautiful life!"); - вікно, коли заходиш на сайт
// var data = confirm("Are you alone?"); // - вікно з двома виборами, ок та cancel
// if (data) {
//     alert("We can help you!");
// } else {
//     alert("We are happy for you!")
// };

// prompt("How old are you?"); //можна получити значення від користувача
// var data = prompt("How old are you?");
// console.log(data);

var person = null;
if (confirm("Are you sure?")) {
    person = prompt("Enter your name");
    alert("Hello, " + person);
} else {
    alert("you press 'Cancel'")
};




