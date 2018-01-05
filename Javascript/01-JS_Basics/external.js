// Event Binding

// HTML and CSS will load first 
window.addEventListener("load", init);


// document.getElementById("btn").addEventListener("click", function(){
//     var name = document.getElementById("box_1").value;
//     document.getElementById("title").innerHTML += name;
//     var x = document.getElementById("title").innerHTML;
//     console.log(x);
// })

function init(){
    document.getElementById("btn").addEventListener("click", greet);
}


function greet(){
    var name = document.getElementById("box_1").value;
    // document.getElementById("title").innerHTML += name;
    document.getElementById("output").innerHTML = name;
    var x = document.getElementById("title").innerHTML;
    console.log(x);
}