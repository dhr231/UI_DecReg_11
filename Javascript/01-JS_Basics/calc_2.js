window.addEventListener("load", init);

var num_1;
var num_2;
var result = 0;
function init(){
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    // document.getElementById("btn_1").addEventListener("click", calculator);
    // document.getElementById("btn_2").addEventListener("click", calculator);
    // document.getElementById("btn_3").addEventListener("click", calculator);
    // document.getElementById("btn_4").addEventListener("click", calculator);
    buttons = document.getElementsByTagName("button");
    // buttons.addEventListener("click", calculator);
    // console.log(typeof(buttons));
    // console.log(buttons);
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", calculator);
    }
}

function calculator(){
    // var element = event.srcElement.innerHTML;
    // console.log(element);

    var opr = event.srcElement.value;

    result = eval(num_1.value + opr + num_2.value);
    document.getElementById("result").innerHTML = result;

    // if(element == "Add"){
    //     result = parseInt(num_1.value) + parseInt(num_2.value);
    //     document.getElementById("result").innerHTML = result;
    // }
    // else if(element == "Sub") {
    //     result = parseInt(num_1.value) - parseInt(num_2.value);
    //     document.getElementById("result").innerHTML = result;
    // }

}