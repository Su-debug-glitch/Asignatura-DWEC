function fechaNac() {
    let fechaNacString = prompt("Introduce tu año de nacimiento")
    let fechaNacNum = Number(fechaNacString)
    let anioActual = new Date().getFullYear()
    let edad = anioActual - fechaNacNum

    let mayorEdad = new Boolean (edad >= 18)

    alert("Tienes " + edad + " años. Mayor de edad: " + mayorEdad.valueOf())
    console.log("Tienes " + edad + " años. Mayor de edad: " + mayorEdad.valueOf())

    document.getElementById('resultado1').textContent = "Tienes " + edad + " años. Mayor de edad: " + mayorEdad.valueOf()
    
}

function caracteresCount() {
    let cadena = String("Me llamo Su y me gusta el desarrollo web");
    let contador = 0;
    let numCaracteres = Number(cadena.length)
    let par;

    for (let i = 0; i < numCaracteres; i++)
    {
        contador++
    }

    if (contador % 2 == 0) {
        par = Boolean(true)
    } else {
        par = Boolean(false)
    }

    document.getElementById('resultado2').innerHTML = 
    "Frase original: " + cadena + "<br>" +
    "Longitud: " + numCaracteres + "<br>" +
    "Es par: " + par;
}

function numeroRandom() {
    let numRandom = Math.floor(Math.random() * 100) + 1;
    let num = Number(numRandom)
    let par;
    let cadena = String("Número generado: ")

    if (num % 2 == 0) {
        par = Boolean(true)
    } else {
        par = Boolean(false)
    }

    document.getElementById('resultado3').innerHTML = cadena + num + ".<br>" + "¿Es par? " + par;
}

function decimalMyorOMenor() {
    let numeroStr = prompt("Introduce un número:");
    let numero = Number.parseFloat(numeroStr);
    let redondeado = Math.round(numero);
    let mensaje = String("El número original es " + numero + " y el número redondeado es " + redondeado);
    
    let parteDecimal = numero - Math.floor(numero);
    let esMayor = new Boolean(parteDecimal >= 0.5);

    document.getElementById('resultado4').innerHTML = mensaje + "<br>" + "¿El valor original tenía parte decimal >= 0.5?: " + esMayor.valueOf();

}

function calcularNota() {
    let usuario = String("Su");
    let notaMedia = Number(9);
    let esMayorA5 = new Boolean(notaMedia >= 5);
    let notaFija = 7;
    let notaMayor = Math.max(notaMedia, notaFija);
    let mensaje = "Nombre: " + usuario + "<br>" + "Nota media: " + notaMedia + "<br>" + "Aprobado: " + esMayorA5.valueOf() + "<br>" + "Nota máxima: " + notaMayor;

    document.getElementById('resultado5').innerHTML = mensaje;

}
















