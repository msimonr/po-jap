document.addEventListener('DOMContentLoaded', function() {
    //canvas settings
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = 400; //ancho canvas
    const height = canvas.height = 200; //alto canvas

    //sprite settings
    const player = {
        frameWidth: 200, //ancho de cada sprite
        frameHeight: 200, //alto de cada sprite
        xPos: 60, //pos de inicio sprite X (0 izquierda)
        yPos: 100, //pos de inicio sprite Y (0 arriba)
        scale: 0.5, //escala de sprite
        sprites: undefined
    };

    //Animacion
    const timeToUpdate = 10; //tiempo de refresco para animacion
    let count = 0; //tiempo desde ultima actualizacion de animacion
    let estados = [];

    //carga de hoja de sprites
    player.sprites = new Image();
    player.sprites.src = "img/spritePrueba1.png";

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
    State.generateState('walkLeft', 0, 1); //TODO: Cambiar pos de sprites.
    State.generateState('idle', 0, 0);

    function animate() {
        let state = estados[0];
        context.drawImage(
            player.sprites,
            state.frameIndex * player.frameWidth,
            0,
            player.frameWidth,
            player.frameHeight,
            player.xPos,
            player.yPos,
            player.frameWidth * player.scale,
            player.frameHeight * player.scale
        );
        count++;
        if (count > timeToUpdate) {
            state.frameIndex++;
            count = 0;
        }
        if (state.frameIndex > state.endIndex) {
            state.frameIndex = state.startIndex;
        }
    }

    function frame() {
        context.clearRect(0, 0, width, height);
        animate();
        requestAnimationFrame(frame);
    }

    estados[0] = State.getState('idle');
    frame();

    window.addEventListener("keydown", function(event) {
        console.log(event.code);
        if (event.code === 'ArrowRight') {
            estados[0] = State.getState('walkRight');
            if (player.xPos < width - player.frameWidth * player.scale) {
                player.xPos += 1;
            }
        }
        if (event.code === 'ArrowLeft') {
            estados[0] = State.getState('walkLeft');
            if (player.xPos > 0) {
                player.xPos -= 1;
            }
        }
    }, false);

    window.addEventListener("keyup", function(event) {
        estados[0] = State.getState('idle');
    }, false);

});