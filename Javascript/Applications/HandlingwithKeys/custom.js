window.addEventListener("load", init);

var audio;

function init(){
    audio = document.getElementById("audio");
    document.getElementById("audio_control").addEventListener("keyup", controls);
    // console.log(audio.currentTime);
}

function controls(){
    audio.currentTime += 5;
    // console.log(audio.currentTime);
}