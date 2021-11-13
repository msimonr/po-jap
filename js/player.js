document.addEventListener('DOMContentLoaded', function() {
    //canvas settings
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = 400; //ancho canvas
    const height = canvas.height = 200; //alto canvas

    //sprite settings
    const player = {
        frameWidth: 200, //ancho de cada sprite
        frameHeight: 400, //alto de cada sprite
        xPos: 60, //pos de inicio sprite X (0 izquierda)
        yPos: 20, //pos de inicio sprite Y (0 arriba)
        scale: 0.45, //escala de sprite
        sprites: undefined
    };

    //Animacion
    let count = 0; //tiempo desde ultima actualizacion de animacion
    let estados = [];

    //carga de hoja de sprites
    player.sprites = new Image();
    player.sprites.src = "img/maurisSpriteSheet.png";

    //carga parlante
    let parlante = new Image();
    parlante.src = "img/parlante.png";

    const State = {
        states: {}, // estados creados
        generateState: function(name, startIndex, endIndex, timeToUpdate) {
            if (!this.states[name]) {
                this.states[name] = {
                    frameIndex: startIndex,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    timeToUpdate: timeToUpdate
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

    State.generateState('walkRight', 4, 5, 15);
    State.generateState('walkLeft', 6, 7, 15);
    State.generateState('idle', 0, 3, 80);

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
        if (count > state.timeToUpdate) {
            state.frameIndex++;
            count = 0;
        }
        if (state.frameIndex > state.endIndex) {
            state.frameIndex = state.startIndex;
        }
    }

    function frame() {
        let paredY = 160;
        context.clearRect(0, 0, width, height);
        context.fillStyle = "#3d200a"
        context.fillRect(0, paredY, width, height);
        context.fillStyle = "#ababab"
        context.fillRect(0, 0, width, paredY);
        animate();
        context.drawImage(parlante, 10, 153, 50, 50);
        context.drawImage(parlante, 340, 153, 50, 50);
        requestAnimationFrame(frame);
    }

    estados[0] = State.getState('idle');
    frame();

    window.addEventListener("keydown", function(event) {
        console.log(event.code);
        if (event.code === 'ArrowRight') {
            estados[0] = State.getState('walkRight');
            if (player.xPos < width - player.frameWidth * player.scale) {
                player.xPos += 3;
            }
        }
        if (event.code === 'ArrowLeft') {
            estados[0] = State.getState('walkLeft');
            if (player.xPos > 0) {
                player.xPos -= 3;
            }
        }
    }, false);

    window.addEventListener("keyup", function(event) {
        estados[0] = State.getState('idle');
    }, false);

});