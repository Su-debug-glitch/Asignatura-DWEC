// Crea una función en javascript que indique si un número 
// (que introduzca el usuario) es par o impar. 
// AYUDA: para poner si el resto de dividir un numero entre 2 es 0, 
// se hace así: if(numero % 2 == 0)

const boton = document.getElementById("miBoton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    const numero = parseInt(prompt("Introduce un número:"));
    if (isNaN(numero)) {
        alert("Ingresa un número válido");
        resultado.textContent = "";
    } else if (numero % 2 === 0) {
        resultado.textContent = `El número ${numero} es PAR.`;
    } else {
        resultado.textContent = `El número ${numero} es IMPAR.`;
    }
});

