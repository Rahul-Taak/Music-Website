console.log("Welcome to iMusic");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Kahani Suno-Kaifi Khalil", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Baarish Ki Jaaye-B Praak", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "SANAK-Badshah", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kesariya-Arijit Singh", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Lut Gaye-Jubin N", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Jhoome Jo Pathaan-AS-SK", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Pasoori-Ali Sethi-Shae Gill", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Ashq Na Ho-Arijit Singh", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Phir Bhi Tumko Chaahunga-AS", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Behti Hawa Sa Tha Woh-Shaan", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Raataan Lambiyan-Jubin N", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Teri mitti-B Praak", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function updateVolume(volume) {
    audioElement.volume = volume;
  }

var currentYear = new Date().getFullYear();
document.getElementById("fdate").innerHTML = "Created By Rahul Taak <br><hr>Copyright &copy; " + currentYear + " | All Rights Reserved";

