let diapos = [
    `
      <div class="col-md-12">
            <h1 class="titulo1">¡Hola 208!</h1>
            <hr>
        </div>
        <div class="col-md-6">
            <img class="imgPrincipal" src="img/dinosaurio.JPG">
        </div>
        <div class="col-md-6">
            <ul>
                <li>Mauricio Simón.</li>
                <li>23 años.</li>
                <li>El Pinar 🌲.</li>
            </ul>
        </div>
    `,
    `
    <div class="col-md-12">
                        <h1 class="titulo1">Lo que me gusta</h1>
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3">
                        <img class="imgPrincipal" src="img/tecnologia.webp">
                        <h4>Tecnología 🤖.</h4>
                    </div>
                    <div class="col-md-6 mb-3">
                        <img class="imgPrincipal" src="img/videojuegos.jpg">
                        <h4>Videojuegos 🎮.</h4>
                    </div>
                    <div class="col-md-6">
                        <img class="imgPrincipal" src="img/serie.jpg">
                        <h4>Series 🎥.</h4>
                    </div>
                    <div class="col-md-6">
                        <img class="imgPrincipal" src="img/lirbos.jpg">
                        <h4>A veces leo 👀.</h4>
                    </div>
    `,
    `
    <div class="col-md-12">
                        <h1 class="titulo1">Estudio</h1>
                        <hr>
                    </div>
                    <div class="col-md-6">
                        <img class="imgPrincipal" src="img/fingDaVinci.jpg" alt="">
                        <p>Febrero del 2016, estatua de Leonardo Da Vinci en la FING.</p>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Ingeniería en computación.</li>
                            <li>Dura 5 años.</li>
                            <li>Voy 6 🤣.</li>
                            <li>En algún punto de tercer año.</li>
                        </ul>
                    </div>
    `,
    `
    <div class="col-md-12">
                        <h1 class="titulo1">Voluntariado</h1>
                        <hr>
                    </div>
                    <div class="row mb-1">
                        <div class="col-md-8">
                            <img class="imgPrincipal dm1" src="img/maciel.JPG" alt="">
                        </div>
                        <div class="col-md-4">
                            <p class="dm1P">💉 14 de noviembre, 2019. Actividad por le día mundial de la diabetes Hospital Maciel.</p>
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-8">
                            <img class="imgPrincipal dm1" src="img/idf5k.JPG" alt="">
                        </div>
                        <div class="col-md-4">
                            <p class="dm1P">💉 4 de diciembre, 2019. 5K Congreso de la Federación internacional de diabetes.</p>
                        </div>
                    </div>
    `,
    `
    <div class="col-md-12">
    <h1 class="titulo1">JaP</h1>
    <hr>
</div>
<div class="row mb-1">
    <div class="col-md-6">
        <img class="imgPrincipal" src="img/jsHtmlCss.png" alt="">
    </div>
    <div class="col-md-6">
        <ul>
            <li>No me gusta mucho el desarrollo web 😅.</li>
            <li>Me llama la atención:</li>
            <ul>
                <li>Inteligencia artificial 🧠.</li>
                <li>Seguridad informatica 🔐.</li>
                <a href="https://play.google.com/store/apps/details?id=com.dinouy.flexiblestickman" target="_blank">
                    <li>Desarrollo de videojuegos 🕹.</li>
                </a>
            </ul>
            <li>Me inscribí por la bolsa de trabajo pero me aporto en otras cosas 🤔.</li>
        </ul>
    </div>
</div>
    `,
    `
    <div class="col-md-12">
                        <h1 class="titulo1">Fortalezas</h1>
                        <hr>
                    </div>
                    <div class="row mb-1">
                        <div class="col-md-6">
                            <img class="imgPrincipal" src="img/montaña.jpg" alt="">
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>Conocimiento técnico aceptable.</li>
                                <li>Experiencia trabajando en equipo.</li>
                                <li>Capacidad de aprendizaje autodidacta.</li>
                                <li>Responsable (o eso dice la abuela).</li>
                            </ul>
                        </div>
                    </div>
    `,
    `
    <div class="col-md-12">
    <h1 class="titulo1 red">Debilidades</h1>
    <hr>
</div>
<div class="row">
    <div class="col-md-6">
        <ul>
            <li>Inglés.</li>
            <li>No tengo experiencia laboral.</li>
            <li>Falta de planificación.</li>
            <li>Ocasionalmente impuntual 🙄.</li>
        </ul>
    </div>
    <div class="col-md-6">
        <img class="imgPrincipal" src="img/perrito.jpeg" alt="">
    </div>
</div>
    `,
    `
    <div class="col-md-12">
    <h1 class="titulo1">¿Con que recursos cuento?</h1>
    <hr>
</div>
<div class="row">
    <div class="col-md-6">
        <img class="imgPrincipal" src="img/recursos.jpg" alt="">
    </div>
    <div class="col-md-6">
        <ul>
            <li>Amigos y compañeros de la facultad en el área.</li>
            <li>Gran apoyo familiar.</li>
            <li>Materiales: computadora, internet, espacio.</li>
        </ul>
    </div>
</div>
    `,
    `
    <div class="col-md-12">
                        <h1 class="titulo1">Objetivo: JaP</h1>
                        <hr>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <img class="imgPrincipal" src="img/jap.png" alt="">
                        </div>
                        <div class="col-md-6">
                            <h3>Plan:</h3>
                            <ul>
                                <li>Meterle como un campeón este tiempo que queda.</li>
                            </ul>
                        </div>
                    </div>
    `,
    `
    
    <div class="col-md-12">
    <h1 class="titulo1">Objetivo: FCE</h1>
    <hr>
</div>
<div class="row">
    <div class="col-md-6">
        <img class="imgPrincipal" src="img/uk.webp" alt="">
    </div>
    <div class="col-md-6">
        <h3>Plan:</h3>
        <ul>
            <li>Exponerme al idioma durante el resto del año.</li>
            <li>Intentar ir a una academia en 2022 para preparar los exámenes que san necesarios.</li>
        </ul>
    </div>
</div>
    `,
    `
    <div class="col-md-12">
    <h1 class="titulo1">Objetivo: Primer laburo</h1>
    <hr>
</div>
<div class="row">
    <div class="col-md-6">
        <img class="imgPrincipal" src="img/trabajo.jpg" alt="">
    </div>
    <div class="col-md-6">
        <h3>Plan:</h3>
        <ul>
            <li>Preparar un portfolio durante el resto del 2021.</li>
            <li>Explorar portales de empleo.</li>
            <li>Conocidos en la industria pueden ser utiles para la busqueda.</li>
        </ul>
    </div>
</div>
    `,
    `
    <div class="col-md-12">
    <h1 class="titulo1">Objetivo: Recibirme</h1>
    <hr>
</div>
<div class="row">
    <div class="col-md-6">
        <img class="imgPrincipal" src="img/fingDaVinciViejo.JPG" alt="">
        <p>Febrero del 2116, estatua de Leonardo Da Vinci en la FING.</p>
    </div>
    <div class="col-md-6">
        <h3>Plan:</h3>
        <ul>
            <li>Utilizar herramientas vistas en CT.</li>
            <li>Aprovechar cualquiera de los pasos previos para potenciar el aprendizaje en la carrera.</li>
            <li>Estudiar 😄.</li>
        </ul>
    </div>
</div>
    `,
    `
    <div class="col-md-12">
    <h1 class="titulo1">Reflexión</h1>
    <hr>
</div>
<div class="row">
    <div class="col-md-6">
        <img class="imgPrincipal" src="img/reflexion.jpg" alt="">
    </div>
    <div class="col-md-6">
        <ul>
            <li>Un curso técnico desafiante y entretenido.</li>
            <li>CT me ayudo a identificar donde fallaba y como puedo mejorarlo.</li>
            <li>Me arrepiento no haberle dedicado mas tiempo a Voxy al inicio 😳.</li>
            <li>¡Gracias Ylva, Virginia, Daniel y 208!</li>
        </ul>
    </div>
</div>
    `
];

let diapoActual = 0;
const CANT_DIAPOS = diapos.length;


document.addEventListener('DOMContentLoaded', function() {

    let diapoContainer = document.getElementById('diapo');
    let numDiapo = document.getElementById('numDiapo');
    let totalDiapo = document.getElementById('totalDiapo');

    totalDiapo.innerHTML = CANT_DIAPOS;

    updateDiapos(diapoContainer, numDiapo, diapoActual);

    window.addEventListener("keydown", function(event) {
        if (event.code === 'KeyQ') {
            if (diapoActual > 0) {
                diapoActual--;
                updateDiapos(diapoContainer, numDiapo, diapoActual);
            }
        }
        if (event.code === 'KeyE') {
            if (diapoActual < CANT_DIAPOS - 1) {
                diapoActual++;
                updateDiapos(diapoContainer, numDiapo, diapoActual);
            }
        }
    }, false);

    document.getElementById('qButton').addEventListener('click', function() {
        if (diapoActual > 0) {
            diapoActual--;
            updateDiapos(diapoContainer, numDiapo, diapoActual);
        }
    });


    document.getElementById('eButton').addEventListener('click', function() {
        if (diapoActual < CANT_DIAPOS - 1) {
            diapoActual++;
            updateDiapos(diapoContainer, numDiapo, diapoActual);
        }
    });

});

function updateDiapos(container, numDiapo, diapoActual) {
    numDiapo.innerHTML = diapoActual + 1;
    container.innerHTML = diapos[diapoActual];
}