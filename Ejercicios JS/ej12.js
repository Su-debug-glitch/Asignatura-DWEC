//12. Diseña una función que reciba un número límite 
//y muestre todos los números pares desde 2 hasta ese límite. 
// Solicita el límite al usuario con un prompt.

function numerosPares(limite) {

    if (isNaN(limite) || limite < 2) {
        alert("Introduce un número válido mayor o igual a 2.");
        return;
    }

    let resultado = "Números pares hasta " + limite + ":<br>";

    for(let i = 2; i <= limite; i+=2) {
        resultado += i + ", ";
    }

    document.write(resultado)
}

let entrada = parseInt(prompt("Introduce el límite hasta el que quieres ver los números pares"));
numerosPares(entrada);