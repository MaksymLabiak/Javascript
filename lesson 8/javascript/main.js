var text = document.getElementById("text"); // находження тексту по його ID на сторінці HTML.
text.title = "New text";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "green";

text.innerHTML = "New <br>string";

// document.getElementById("text").style.color = "white";

// var spans = document.getElementsByTagName('span'); - шукає за тегом, таким як span, div?
var spans = document.getElementsByClassName('simple-text');

for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}


