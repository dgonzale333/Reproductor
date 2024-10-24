import { playList } from "./playlist.js"

const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')
const skip1 = document.getElementById('skip1')
const skip2 = document.getElementById('skip2')

play.addEventListener('click', () => audio.play())
pause.addEventListener('click', () => audio.pause())
rewind.addEventListener('click', () => audio.currentTime -= 10)
forward.addEventListener('click', () => audio.currentTime += 10)
stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})

let currentSong = 0;

function skipSong() {
    const loadSong = playList[currentSong];

    document.getElementById('imgSong').src = loadSong.img;
    document.getElementById('nameArtist').textContent = loadSong.artist; // Corregido
    document.getElementById('nameSong').textContent = loadSong.title;   // Corregido
    audio.src = loadSong.song;
    audio.load();
}

skipSong();

skip1.addEventListener('click', () => {
    currentSong = (currentSong > 0) ? currentSong - 1 : playList.length - 1;
    skipSong();
});

skip2.addEventListener('click', () => {
    currentSong = (currentSong + 1) % playList.length;
    skipSong();
});

// Para avanzar a la siguiente canción automáticamente
audio.addEventListener('ended', () => {
    currentSong = (currentSong + 1) % playList.length;
    skipSong();
});



