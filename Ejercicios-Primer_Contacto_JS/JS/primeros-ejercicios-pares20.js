function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function mostrarPares() {
    let texto = "Los números pares del 1 al 20 son:\n";
    let contador = 0;

    for (let i = 1; i<=20; i++) {
        if (esPar(i)) {
            texto += i + ", ";
            contador++
        }
    }

    texto += "\nTotal de pares: " + contador;
    document.getElementById("resultado").innerText = texto;
}

document.getElementById("botonPares").onclick = mostrarPares;