//7. Dado un número, usa un bucle for para mostrar su tabla de multiplicar del 1 al 10.

function multiplicar1A10() {
    numero = parseInt(prompt("Introduce un número para ver su tabla de multiplicar del 1 al 10"))
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido")
        return;
    } 

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<h2>Tabla del ${numero}</h2>`

    for (let i = 1; i <=10; i++) {
       let linea = `${numero} x ${i} = ${numero * i}`;
        resultado.innerHTML += linea + "<br>";
    }
}

window.onload = function() {
    setTimeout(multiplicar1A10, 900);
};