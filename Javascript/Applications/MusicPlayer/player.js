window.addEventListener("load", init);

var audio;
var slider;
var starttime;
var endtime;

function init(){
    audio = document.getElementById("audio");
    slider = document.getElementById("slider");
    starttime = document.getElementById("starttime");
    endtime = document.getElementById("endtime");
    document.getElementById("play").addEventListener("click", playSong);
    document.getElementById("pause").addEventListener("click", pauseSong);
    slider.addEventListener("change", forwardSong);

    var songList = document.getElementsByClassName("songName");

    for(var i = 0; i<songList.length; i++){
        songList[i].addEventListener("click", changeSong);
    }
}

function changeSong(){
    var songname = event.srcElement.innerHTML;
    console.log(songname);
    audio.currentTime = 0;
    audio.src = 'songs/'+songname + '.mp3';
    // audio.children[0].src = 'songs/'+songname + '.mp3';
    // playSong();
    setInterval(playSong, 1000);
}

function playSong(){
    audio.play();
    slider.value = audio.currentTime;
    starttime.innerHTML = parseInt(audio.currentTime);
    endtime.innerHTML = audio.duration;
}

function pauseSong(){
    audio.pause();
}

function forwardSong(){
    audio.currentTime = slider.value;
}