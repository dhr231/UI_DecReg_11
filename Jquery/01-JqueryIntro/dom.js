$(document).ready(function(){
    var username = $("input[type='text']");

    // username = document.querySelector("input[type='text']");
    // document.querySelector("span").innerHTML = username.value;
    
    $("button").click(function(){
        $("span").html(username.val());
    })
})