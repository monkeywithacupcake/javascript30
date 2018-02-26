const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// when this finishes, it will trigger transition end, and fire toggle active!
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
