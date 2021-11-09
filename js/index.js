const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = 320;
const height = canvas.height = 480;
const frameWidth = 541;
const frameHeight = 514;
const xPos = 130;
const yPos = 160;
const scale = 0.3;
const fps = 60;
const secondsToUpdate = 1 * fps;

let count = 0;

const sprites = new Image();
sprites.src = "img/spritePrueba.png";

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";


function animate() {
    context.drawImage(
        sprites,
        0,
        0,
        1 * frameWidth,
        frameHeight,
        xPos,
        yPos,
        frameWidth * scale,
        frameHeight * scale
    );
}

function frame() {
    context.clearRect(0, 0, width, height);
    animate();
    requestAnimationFrame(frame);
}

frame();