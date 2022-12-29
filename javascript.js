var audioPlayer = document.getElementsByTagName('audio')[0];

var current = 0;

var urls = new Array();

urls[0] = 'audio/billie Eilish - idontwannabeyouanymore.mp3';
urls[1] = 'audio/JVKE - golden hour.mp3';
urls[2] = 'audio/K a m a i t a c h i - O Sol e A Lua.mp3';
urls[3] = 'audio/Enemy.mp3';
urls[4] = 'audio/Coldplay - Hymn For The Weekend.mp3';
urls[5] = 'audio/BLACKPINK - How You Like That.mp3';
urls[6] = 'audio/Ouvi Dizer.mp3';

/*function playSong() {
  audioPlayer.src = urls[current];
  audioPlayer.load();
  audioPlayer.play();
}

function pickSong(num) {
  current = num;
  playSong();
}*/

function nextSong() {
  current++;
  if (current >= urls.length) {
    current = 0;
  }
  playShow();
}

audioPlayer.addEventListener('ended', nextSong, false);
audioPlayer.addEventListener('error', nextSong, true);

var playBtn = document.getElementById('podcast-play');

var pauseBtn = document.getElementById('podcast-pause');

// Play audio & mostra pause btn
var playShow = function() {
  audioPlayer.src = urls[current];
  audioPlayer.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

// Pause audio & mostra play btn
var pauseShow = function() {
  audioPlayer.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};
