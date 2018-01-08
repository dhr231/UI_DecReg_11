window.addEventListener("load", init);

var audio;
var slider;

function init(){
    audio = document.getElementById("audio");
    slider = document.getElementById("slider");
    document.getElementById("play").addEventListener("click", playSong);
    document.getElementById("pause").addEventListener("click", pauseSong);
    slider.addEventListener("change", forwardSong);
}

function playSong(){
    audio.play();
    setInterval(function(){
        slider.value = audio.currentTime;
    }, 1000);
}

function pauseSong(){
    audio.pause();
}

function forwardSong(){
    audio.currentTime = slider.value;
}