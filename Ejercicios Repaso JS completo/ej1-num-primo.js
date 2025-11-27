
let contador = 0

    for (let num = 2; num<=100; num++) {
        let esPrimo = true;

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            contador++
        }
    }


let resultado = "La cantidad de números primos es: " + contador;
document.getElementById('resultado').textContent = resultado