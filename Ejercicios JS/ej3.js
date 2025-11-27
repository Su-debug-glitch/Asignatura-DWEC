//3.pide un número, determina si es positivo, negativo o 0

let numero;
numero = parseInt(prompt("Introduce un número:"));

if (numero > 0) {
    console.log("Número positivo")
} else if (numero < 0) {
    console.log("Número negativo")
} else {
    console.log("El número es cero")
}
