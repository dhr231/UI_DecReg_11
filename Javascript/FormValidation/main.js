window.addEventListener("load", init);

var username;

function init(){
    username = document.getElementById("box_1");
    email = document.getElementById("box_2");
    passwrd = document.getElementById("box_3");
    conf_passwrd = document.getElementById("box_4");
    num = document.getElementById("box_5");
    file = document.getElementById("file");
    pwdSpan = document.getElementById("pwdStrength");

    span = document.getElementsByTagName("span");

    username.addEventListener("blur", validate);
    passwrd.addEventListener("keyup", passwordStrength);
    conf_passwrd.addEventListener('keyup', confirmPassword);
    file.addEventListener("change", fileUpload);
    email.addEventListener("keyup", emailValidation);
}

function validate(){
    span[0].innerHTML = "Please fill this field";
}

function passwordStrength(){
    if(passwrd.value.length == 0){
        span[2].innerHTML = "Please fill this field";
    }
    else if(passwrd.value.length > 0 && passwrd.value.length <= 4){
        span[2].innerHTML = "Weak Password";
        pwdSpan.className = 'weak';
    }
    else if(passwrd.value.length > 4 && passwrd.value.length <= 8){
        span[2].innerHTML = "Average Password";
        pwdSpan.className = 'average';
    }
    else {
        span[2].innerHTML = "Strong Password";
        pwdSpan.className = 'strong';
    }
}

function confirmPassword(){
    if(passwrd.value == conf_passwrd.value){
        span[4].innerHTML = "Password Match";
    }
    else {
        span[4].innerHTML = "Password do not Match";
    }
}

function fileUpload(){
    var image = document.getElementById("image");
    imgName = file.files[0].name;
    image.src = "images/" + imgName;
    image.style.display = "block";
}

function emailValidation(){
    str = email.value;
    // if(isEmpty(str)){
    //     span[1].innerHTML = "Fill this field";
    // }
    // else {
    //     span[1].innerHTML = " ";
    // }

    if(isBlank(str)){
        span[1].innerHTML = "Fill this field";
    }
    else {
        span[1].innerHTML = " ";
    }

    if(checkMail(str)){
        span[1].innerHTML = "Proceed";
    }
    else {
        span[1].innerHTML = "Email is not valid";
    }
}

function isEmpty(str){
    return (str == undefined || str == null || str == "") ? true : false;
}

function isBlank(str){
    return (!str || /^\s*$/.test(str));
}

function checkMail(str){
    return (/(\w+[@]+\w+[.]+\w+)$/.test(str));
}

function stopRedirection(){
    event.preventDefault();
}