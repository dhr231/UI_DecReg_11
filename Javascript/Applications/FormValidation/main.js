window.addEventListener("load", init);

var username;

function init(){
    username = document.getElementById("box_1");
    email = document.getElementById("box_2");
    passwrd = document.getElementById("box_3");
    conf_passwrd = document.getElementById("box_4");
    num = document.getElementById("box_5");
    file = document.getElementById("file");

    span = document.getElementsByTagName("span");

    username.addEventListener("blur", validate);
}

function validate(){
    span[0].innerHTML = "Please fill this field";
}