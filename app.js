function guardarNombre() {
    var nombre = prompt('¿Cuál es tu nombre?')
    //Creamos la función para que guarde el nombre y no se abra el prompt al cargar la página.
    var botones = document.getElementById("botones") //Creamos una variable botones que está guardando el elemento con ID botones
    botones.innerHTML = `<h1 class='btn-title'>Hola ${nombre}, Haz click para ir a la Trivia Laboratoria.</h1>
    <div class='container-btn'>
    <a href='triviahistoria.html' class='btn-trivia1'>Historia</a>
    <a href='triviamusica.html' class='btn-trivia2'>Música</a>
    </div>`
    //InnerHtml es parte del DOM e incrusta HTML dentro del elemento.
}

if (window.location.pathname == "/triviahistoria.html") {
    let preguntas = document.getElementById('preguntas')
    let numPregunta = 1;
    let respuestasCorrectas = 0;

    preguntas.innerHTML = `<button class="comenzar" onClick="pregunta(${numPregunta})">Empieza la trivia de Historia</button>`

    function pregunta(pregunta) {
        if (pregunta == 1) {
            preguntas.innerHTML = `
<h1>¿Quién pintó la monalisa?</h1>
<label><input type="radio" name="respuesta">Miguel Angelo</label><br>
<label><input type="radio" name="respuesta">Leonardo DaVinci</label><br>
<label><input type="radio" name="respuesta">Leonardo DiCaprio</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 2) {
            preguntas.innerHTML = `
<h1>¿En qué año terminó la segunda guerra mundial?</h1>
<label><input type="radio" name="respuesta">1945</label><br>
<label><input type="radio" name="respuesta">1975</label><br>
<label><input type="radio" name="respuesta">1944</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 3) {
            preguntas.innerHTML = `
<h1>¿Cuándo ocurrió el "Grito de Independencia" en Colombia?</h1>
<label><input type="radio" name="respuesta">7 de Agosto de 1819</label><br>
<label><input type="radio" name="respuesta">4 de Julio de 1776</label><br>
<label><input type="radio" name="respuesta">20 de Julio de 1810</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 4) {
            preguntas.innerHTML = `
<h1>¿Quién fue el primer humano en pisar la luna?</h1>
<label><input type="radio" name="respuesta">Neil Armstrong</label><br>
<label><input type="radio" name="respuesta">Yuri Gagarin</label><br>
<label><input type="radio" name="respuesta">Buzz Aldrin</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 5) {
            preguntas.innerHTML = `
<h1>¿Quién escribió "La Odisea"?</h1>
<label><input type="radio" name="respuesta">Sócrates</label><br>
<label><input type="radio" name="respuesta">Homero</label><br>
<label><input type="radio" name="respuesta">Platón</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        }
    }



    function enviar(num) {
        let respuesta = document.getElementsByName('respuesta')
        if (num == 1) {
            if (respuesta[1].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Leonardo DaVinci"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Leonardo DaVinci"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 2) {
            if (respuesta[0].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "1945"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "1945"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 3) {
            if (respuesta[2].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "20 de Julio de 1810"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "20 de Julio de 1810"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 4) {
            if (respuesta[0].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Neil Armstrong"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Neil Armstrong"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 5) {
            if (respuesta[1].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Homero"</p><button class="siguiente" onClick="finalizar(${respuestasCorrectas})">Finalizar</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Homero"</p><button class="siguiente" onClick="finalizar(${respuestasCorrectas})">Finalizar</button>`
            }
        }
    }

    function finalizar(respuestasCorrectas) {
        if (respuestasCorrectas >= 3) {
            preguntas.innerHTML = `<h1>¡Felicitaciones! Obtuviste un puntaje de ${respuestasCorrectas}/5</h1><br>
            <a href="./index.html">Vuelve al inicio</a>`
        } else {
            preguntas.innerHTML = `<h1>¡Qué pena! Obtuviste un puntaje de ${respuestasCorrectas}/5</h1><br>
            <a href="./index.html">Vuelve al inicio</a>`
        }
    }
}

