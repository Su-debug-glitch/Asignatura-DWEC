//11. Crea una función que reciba un número y devuelva su cuadrado. 
//Pide al usuario que introduzca un número mediante un prompt 
//y muestra el resultado en pantalla.

function numAlCuadrado(numero) {
    return numero*numero
}

let entradaUsuario = parseInt(prompt("Introduce un número:"));
if (isNaN(entradaUsuario)) {
    alert("Por favor, introduce un número válido.")
} else {
    let resultado = numAlCuadrado(entradaUsuario)
    document.write("El cuadrado de " + entradaUsuario + " es " + resultado);
}