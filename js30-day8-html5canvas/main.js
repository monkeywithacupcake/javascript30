const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // there is also a 3d context in canvas
// resize the canvas to equal the window resize
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setup some movement behavior
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false; // sets the nothing moving
let lastX = 0;
let lastY = 0;
// this allows us to have a location
let hue = 0;
let direction = false;

function draw(e) {
    if (!isDrawing) return; // no need to draw if not drawing
    // do all drawing on ctx
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue = hue >= 360 ? 0 : hue + 1;
    // change size
    if (ctx.linewidth >= 100 || ctx.linewidth <= 1) {
        direction = !direction;
    }
    ctx.linewidth = direction ? ctx.linewidth + 1 : ctx.linewidth - 1;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
