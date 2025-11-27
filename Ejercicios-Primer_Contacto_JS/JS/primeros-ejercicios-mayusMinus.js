function comprobarMayusMinus(frase) {
    if (frase == frase.toUpperCase()) {
        return "La frase solo tiene mayúsculas";
    } else if (frase == frase.toLowerCase()) {
        return "La frase solo tiene minúsculas";
    } else {
        return "La frase tiene mayúsculas y minúsculas"
    }
}

let frase = prompt("Introduce una frase:");
alert(comprobarMayusMinus(frase));