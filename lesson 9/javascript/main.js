function checkForm(el) {

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    // console.log(name + " - " + pass + " - " + repass + " - " + state);

    var fail = "";

    if (name == "" || pass == "" || state == "") {
        fail = "Fill in all the lines in the form";
    } else if (name.length <= 1 || name.length > 50) {
        fail = "Pass the write name";
    } else if (pass != repass) {
        fail = "Passwords are different";
    } else if (pass.split("&").length > 1) {
        fail = "invalid password";
    }

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("All data is filled correctly");
        window.location = 'https://chatgpt.com';
    }
}