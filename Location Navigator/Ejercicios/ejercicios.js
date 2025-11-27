function mostrarTitulo() {
    let titulo = document.title
    document.getElementById('resultado1').innerText = titulo
}

function mostrarInfoDocument() {
    let salida = '';

      // Acceso al array de formularios
    salida += 'Número de formularios: ' + document.forms.length + '\n';
        for(let i=0; i < document.forms.length; i++) {
            salida += 'Formulario ' + (i+1) + ' name: ' + document.forms[i].name + '\n';
        // Acceso a campos por name
            for(let j=0; j < document.forms[i].elements.length; j++) {
            salida += '  Campo: ' + document.forms[i].elements[j].name + '\n';
        }
    }
    document.getElementById("salida").textContent = salida;
}

function mostrarEnlaces() {
    let salida = '';

    salida += '\nNúmero de enlaces: ' + document.links.length + '\n';
        for(let k=0; k < document.links.length; k++) {
            salida += 'Enlace ' + (k+1) + ' href: ' + document.links[k].href + '\n';
    }

    document.getElementById("salida2").textContent = salida;
}

function cookiesHabilitadas() {
    let cookies = (navigator.cookieEnabled ? "si" : "no")
    document.getElementById('cookies').textContent = cookies
}

function cambiarTitulo() {
    document.title = "Título nuevo"
    document.getElementById('tituloNuevo').textContent = document.title
}