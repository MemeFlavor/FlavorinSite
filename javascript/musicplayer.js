import musicplayer from '../music/music.json' with { type: 'json' };

function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

let audioFlavorIndex = getRandomInt(0, Object.keys(musicplayer).length - 1)
let audioFlavorData = musicplayer[audioFlavorIndex]
let audioFlavorUpdate = false

const audioFlavorPlayer = new Audio(audioFlavorData.audio);

const audioFlavorControlProgress = document.querySelector('.music__playback-progress')
const audioFlavorControlPlay = document.querySelector('.music__playback-controls-btn--play')
const audioFlavorControlPrev = document.querySelector('.music__playback-controls-btn--prev')
const audioFlavorControlNext = document.querySelector('.music__playback-controls-btn--next')
const audioFlavorControls = document.querySelectorAll('.music__playback-controls-btn svg')

const audioFlavorTimeCur = document.querySelector('.music__playback-time--current')
const audioFlavorTimeEnd = document.querySelector('.music__playback-time--duration')

const audioFlavorAlbumLink = document.querySelector('.music__album-link')
const audioFlavorAlbumCover = document.querySelector('.music__album-cover')
const audioFlavorDescTitle = document.querySelector('.music__album-title')
const audioFlavorDescTitleText = document.querySelector('.music__album-title span')
const audioFlavorDescAuthor = document.querySelector('.music__album-artists')

/* Event Listener */

function updateSong() {
     audioFlavorData = musicplayer[audioFlavorIndex]
     audioFlavorPlayer.src = audioFlavorData.audio
     audioFlavorPlayer.volume = 0.4;

     for (let controls of audioFlavorControls) {
          controls.setAttribute('fill', audioFlavorData.color);
     }
     audioFlavorAlbumCover.setAttribute('src', audioFlavorData.cover)
     audioFlavorAlbumLink.setAttribute('href', audioFlavorData.link)

     audioFlavorControlProgress.value = 0
     audioFlavorControlProgress.style.setProperty('--progress-color', audioFlavorData.color)
     audioFlavorControlProgress.style.setProperty('--progress-background', '0%');

     if (audioFlavorData.overflowing == true) {
          audioFlavorDescTitle.classList.add('music__album-title--overflowing')
     } else {
          audioFlavorDescTitle.classList.remove('music__album-title--overflowing')
     }
     audioFlavorDescTitleText.textContent = audioFlavorData.title
     audioFlavorDescAuthor.textContent = audioFlavorData.album
}

function timeFormat(time) {
     const padZero = (nums) => {
          return (nums < 10) ? "0" + nums : nums;
     };

     const minutes = padZero(parseInt((time / (60)) % 60))
     const seconds = padZero(parseInt((time) % 60))
     return `${minutes}:${seconds}`
}

updateSong()

audioFlavorPlayer.addEventListener('loadedmetadata', () => {
     audioFlavorTimeEnd.textContent = timeFormat(audioFlavorPlayer.duration)
})
audioFlavorPlayer.addEventListener('timeupdate', () => {
     if (audioFlavorUpdate == true) {
          return
     }

     let progress = (audioFlavorPlayer.currentTime / audioFlavorPlayer.duration) * 100
     progress = Number.isNaN(progress) ? 0 : progress
     
     audioFlavorControlProgress.value = progress
     audioFlavorControlProgress.style.setProperty('--progress-background', `${progress}%`);
     audioFlavorTimeCur.textContent = timeFormat(audioFlavorPlayer.currentTime)
})

audioFlavorControlProgress.addEventListener('input', () => {
     const progressCurTime = audioFlavorControlProgress.valueAsNumber - parseInt(audioFlavorControlProgress.min)
     const progressMaxTime = parseInt(audioFlavorControlProgress.max) - parseInt(audioFlavorControlProgress.min)
     const progressTime = progressCurTime / progressMaxTime;

     let progress = progressTime * 100
     progress = Number.isNaN(progress) ? 0 : progress

     audioFlavorControlProgress.value = progress
     audioFlavorControlProgress.style.setProperty('--progress-background', `${progress}%`);
     audioFlavorUpdate = true
})
audioFlavorControlProgress.addEventListener("change", () => {
     if (!audioFlavorPlayer.paused && audioFlavorPlayer.currentTime < audioFlavorPlayer.duration) {
          audioFlavorPlayer.play();
     }

     audioFlavorPlayer.currentTime = (audioFlavorControlProgress.value * audioFlavorPlayer.duration) / 100
     audioFlavorUpdate = false
})

audioFlavorControlPlay.addEventListener('click', () => {
     if (audioFlavorPlayer.paused) {
          audioFlavorPlayer.play()
     } else {
          audioFlavorPlayer.pause();
     }
})
audioFlavorControlPrev.addEventListener('click', () => {
     if (audioFlavorIndex == 0) return;
     audioFlavorIndex--;

     updateSong()
})
audioFlavorControlNext.addEventListener('click', () => {
     if (audioFlavorIndex >= Object.keys(musicplayer).length) return;
     audioFlavorIndex++;

     updateSong()
})