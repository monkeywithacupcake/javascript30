

function handleKeyPress(e) {
    // what keycode was pressed?
    console.log(e.keyCode);
    // STYLE STUFF
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    key.classList.add('playing');
    // AUDIO STUFF
    // look for audio with that data-key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){return;} // stop because it is not one of our keys
    // what file is it?
    console.log(audio);
    // if call play when already playing, will not play again
    audio.currentTime = 0; // rewind to start
    // ok now play it
    audio.play();
}

function removeTransition(e) {
    if(e.propertyName !== 'transform'){return;} // just follow transform event
    console.log("this is", this); // check what is this
    // this is the key on which we called "addEventListener"
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // list of all items with class key
// cannot attach a listener to all, but can do it for each
keys.forEach( key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', handleKeyPress);
