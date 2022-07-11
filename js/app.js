const playButtonElement = document.querySelector('.play-btn-wrapper');
const audioElement = document.querySelector('audio');
const prevButtonElement = document.querySelector('.prev');
const nextButtonElement = document.querySelector('.next');

const audioFiles = [
    {
        src: '1.mp3'
    },
    {
        src: '2.mp3'
    },
    {
        src: '3.mp3'
    },
];

let currentAudioFile = 0;

prevButtonElement.addEventListener('click', () => {
    audioElement.setAttribute('src', './audio/1.mp3')
    audioElement.play();
});

nextButtonElement.addEventListener('click', () => {
    if (currentAudioFile === audioFiles.length - 1) {
        currentAudioFile = 0;
    } else {
        currentAudioFile++;
    }

    console.log(currentAudioFile);
    console.log(audioFiles[currentAudioFile]);

    audioElement.setAttribute('src', `./audio/${audioFiles[currentAudioFile].src}`);
    audioElement.play();
});

playButtonElement.addEventListener('click', () => {
    playButtonElement.classList.toggle('play-btn-wrapper--active');
    
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});

audioElement.addEventListener('playing', () => {
    playButtonElement.classList.add('play-btn-wrapper--active');
});

audioElement.addEventListener('pause', () => {
    playButtonElement.classList.remove('play-btn-wrapper--active');
});

