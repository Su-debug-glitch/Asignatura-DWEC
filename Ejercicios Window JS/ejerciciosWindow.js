function tieneTitulo () {
    let titulo = document.title
    let resultado = ""
    if (titulo !== "") {
        resultado = titulo.length
    } else {
        resultado = "No hay título"
    }
    document.getElementById('resultado1').innerHTML = "El título es: " + titulo + " y el total de caracteres es: " + resultado
}


function saludo() {
    let nombre = prompt("Ingresa tu nombre para recibir un saludo:")
    
    if (nombre && nombre.trim() !== "") {
        alert("¡Hola, " + nombre + "!")
        document.getElementById('resultado2').innerHTML = "¡Hola, " + nombre + "!"
        return;
    } 
    
    let continuar = window.confirm("¿Deseas continuar sin nombre?") 
    
    if (continuar) {
        document.getElementById('resultado2').innerHTML = "Hola, tú"
    } else {
        document.getElementById("resultado2").innerHTML = "ADÍOS"
    }
}

function mostrarURL() {
    let url = window.location.href

    if (url.includes('google')) {
        document.getElementById('resultado3').innerHTML = "La url " + url + " contiene la palabra google."
    } else
    {
        document.getElementById('resultado3').innerHTML = "La url " + url + " NO contiene la palabra google"
    }
}

function abrirVentana() {
    let ventana = window.open("about:blank", "_blank")
    ventana.name = "NuevoNombre"

    let contenido = ""
    for (let i = 1; i <= 3; i++) {
    contenido  += `<p> ${ventana.name} </p>`
    }

    ventana.document.body.innerHTML = contenido
}

function mostrarFrames() {
    let ventana = window.open("about:blank", "_blank")
    let frames = ventana.frames.length

    ventana.document.write("Cantidad de frames: " + frames)
}

function mostrarDate() {
    let horaActual = new Date().getHours();

    if (horaActual % 2 === 0) {
        window.name = "Hora-par"
        document.getElementById('resultado6').innerHTML = "Hora par: " + horaActual
    } else {
        window.name = "Hora-impar"
        document.getElementById('resultado6').innerHTML = "Hora impar: " + horaActual
    }
}

let intervalo;
let intervaloActivo;
function iniciarIntervalo() {
    intervaloActivo = true;
    intervalo = window.setInterval(posicionPantalla, 1000)
    
}
function posicionPantalla() {
    document.getElementById('resultado7').innerHTML = 
    "Posición de la ventana en X= " + window.screenX + ", Y = " + window.screenY
}

function stopInterval() {
    intervaloActivo = false;
    window.clearInterval(intervalo)
    document.getElementById('resultado7').innerHTML = "Intervalo detenido."
}

function contieneVocales() {
    let nombreVentana = window.name
    let vocales = "aeiouAEIOU"
    let contieneVocal = false
    for (let i = 0; i < nombreVentana.length; i++) {
        if (vocales.includes(nombreVentana[i])) {
            contieneVocal = true
            break;
        }
    }

    if (contieneVocal) {
        document.getElementById('resultado8').innerHTML = "El nombre de la ventana contiene vocales."
    } else {
        document.getElementById('resultado8').innerHTML = "El nombre de la ventana NO contiene vocales.";
    }

}

function cerrarVentana() {
    let pregunta = window.confirm("¿Quieres cerrar la ventana actual?")
    if (pregunta) {
        window.close()
    } else {
        document.title = "Cancelado"
        document.getElementById('resultado9').innerHTML = "Cancelado"
    }
}


