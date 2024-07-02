var counter = 0;

function onClickButton(el) {
    counter++;
    el.innerHTML = "You press the button " + counter + " times";
    el.style.background = "red";
    console.log(el.name);
    el.style.color = "#FFF";

    el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
}

function onInput(el) {
    if (el.value == "Hello") {
        alert("Hi there!");
    }
    console.log(el.value);
}