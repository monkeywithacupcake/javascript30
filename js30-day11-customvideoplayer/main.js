// Get elements

// blargh...after I got started...and set up to handle th button and click toggling, I realized that my python http server is just not letting me interact with the player, so i can't test and learn. Ended up just watching the video...making sure it made sense, and then pasting in the rest of the code.
// main player
const player = document.querySelector('.player');
// all the stuff about the player that we need
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build functions
function togglePlay() {
    console.log('toggleplay');
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function toggleButtonIcon() {
    console.log('toggleButtonIcon');
    const icon = this.paused ? '►' : '❚ ❚'; // copied from answer
    toggle.textContent = icon;
}

// just pasted code:
function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


// build the player

// if click on screen viewer or the toggle play button, call togglePlay
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

// whenever the vidoe is playing/pausing, we can change the button icon
video.addEventListener('play', toggleButtonIcon);
video.addEventListener('pause', toggleButtonIcon);


// just pasted code:
// update the percent
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
