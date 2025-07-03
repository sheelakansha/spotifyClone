
const song = new Audio('./images/Locksmith.mpeg');


const playBtn = document.querySelector('.fa-play');
const progressBar = document.querySelector('.progress-bar');
const volumeSlider = document.querySelector('.volume');
const currTime = document.querySelector('.curr-time');
const totTime = document.querySelector('.tot-time');

let isPlaying = false;


function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}


playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        song.play();
        isPlaying = true;
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    } else {
        song.pause();
        isPlaying = false;
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
});


song.addEventListener('timeupdate', () => {
    const progress = (song.currentTime / song.duration) * 100;
    progressBar.value = progress;

    currTime.textContent = formatTime(song.currentTime);
    totTime.textContent = formatTime(song.duration);
});


progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * song.duration;
    song.currentTime = seekTime;
});


volumeSlider.addEventListener('input', () => {
    song.volume = volumeSlider.value / 100;
});