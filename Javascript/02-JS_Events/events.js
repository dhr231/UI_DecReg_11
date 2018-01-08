// window.addEventListener("load", init);
function validate(){
    var name = document.getElementById("box_1");
    // alert("Blur Called...");
    if(name.value == "") {
        document.getElementById("validation").innerHTML = "You cannot leave this field";
        name.style.border = "1px solid red";
    }
    else {
        document.getElementById("validation").innerHTML = "";
        name.style.border = "1px solid green";
    }
}

function validate_1(){
    var name = document.getElementById("box_1");
    // alert("Keypress called...");
    document.getElementById("result").innerHTML = name.value;
}