let Currentmusic = 0;
const Music = document.querySelector("#audio");
const Songname = document.querySelector(".songName");
const Artistname = document.querySelector(".artistName");
const Disk = document.querySelector(".disk");
const Currenttime = document.querySelector(".currentTime");
const Songduration = document.querySelector(".songDuration");
const Seekbar = document.querySelector("#seekBar");
const Volume = document.querySelector("#volume");
const Prebtn = document.querySelector(".preBtn");
const Nextbtn = document.querySelector(".nexBtn");
const Playbtn = document.querySelector(".playBtn");




// Play btn configrations;
Playbtn.addEventListener("click", () => {
    Disk.classList.toggle("play");
    Playbtn.classList.toggle("pause");

    if (Playbtn.className.includes("pause")) {
        Music.pause();
    }
    else {
        Music.play();
    }
});

const setMusic = (i) => {
    Seekbar.value = 0;
    const Song = Songs[i];
    Currentmusic = i;
    Songname.innerHTML = Song.songName;
    Artistname.innerHTML = Song.artistName;
    Disk.style.backgroundImage = `url("${Song.cover}")`
    Music.src = Song.path;
    Currenttime.innerHTML = "00:00";

    setTimeout(() => {
        Seekbar.max = Music.duration;
        Songduration.innerHTML = Time(Music.duration);

    },500);
}
setMusic(0);

const Time = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }

    return `${min}:${sec}`
}


setInterval(() => {
    Seekbar.value = Music.currentTime;
    Currenttime.innerHTML = Time(Music.currentTime)
    if (Music.currentTime == Seekbar.max) {
        Nextbtn.click();
    }
}, 500);

Seekbar.addEventListener("change", () => {
    Music.currentTime = Seekbar.value;
})

Volume.addEventListener("change",()=>{
    Music.volume = Volume.value/90;
})

const playMusic = () => {
    Playbtn.classList.remove("pause");
    Disk.classList.add("play");
    Music.play();
    
}

Nextbtn.addEventListener("click", () => {
    if(Currentmusic >= Songs.length-1) {
        Currentmusic = 0;
    }
    else {
        Currentmusic++
    }
    setMusic(Currentmusic);
    playMusic();
})

Prebtn.addEventListener("click", () => {
    if (Currentmusic <= Songs.length - 1) {
        Currentmusic = 0;
    }
    else {
        Currentmusic++
    }
    setMusic(Currentmusic);
    playMusic();
})










