window.addEventListener("load", init);

var num_1;
var num_2;
var result = 0;
function init(){
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    document.getElementById("btn_1").addEventListener("click", add);
    document.getElementById("btn_2").addEventListener("click", sub);
}

function add(){
    result = parseInt(num_1.value) + parseInt(num_2.value);
    document.getElementById("result").innerHTML = result;
}

function sub(){
    result = num_1.value - num_2.value;
    document.getElementById("result").innerHTML = result;
}