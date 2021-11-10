//canvas settings
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = 320; //ancho canvas
const height = canvas.height = 480; //alto canvas

//sprite settings
const frameWidth = 200; //ancho de cada sprite
const frameHeight = 200; //alto de cada sprite
const xPos = 60; //pos de inicio sprite X (0 izquierda)
const yPos = 160; //pos de inicio sprite Y (0 arriba)
const scale = 1; //escala de sprite
const timeToUpdate = 10; //tiempo de refresco para animacion

let count = 0; //tiempo desde ultima actualizacion de animacion

//carga de hoja de sprites
const sprites = new Image();
sprites.src = "img/spritePrueba1.png";

const State = {
    states: {}, // estados creados
    generateState: function(name, startIndex, endIndex) {
        if (!this.states[name]) {
            this.states[name] = {
                frameIndex: startIndex,
                startIndex: startIndex,
                endIndex: endIndex
            };
        }
    },
    getState: function(name) {
        if (this.states[name]) {
            return this.states[name];
        }
    }
};

//:::: Generar estados ::::

State.generateState('walkRight', 0, 1);

function animate(state) {
    context.drawImage(
        sprites,
        state.frameIndex * frameWidth,
        0,
        frameWidth,
        frameHeight,
        xPos,
        yPos,
        frameWidth * scale,
        frameHeight * scale
    );
    console.log(state);

    count++;
    if (count > timeToUpdate) {
        console.log(state);
        state.frameIndex++;
        count = 0;
    }
    if (state.frameIndex > state.endIndex) {
        state.frameIndex = state.startIndex;
    }
}

function frame() {
    context.clearRect(0, 0, width, height);
    animate(State.getState('walkRight'));
    requestAnimationFrame(frame);
}

frame();