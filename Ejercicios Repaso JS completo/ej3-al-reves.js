function textoAlReves() {
    let cadena = document.getElementById('fraseBefore').value;
    let alReves = "";
    let x = cadena.length - 1;

    while (x >= 0) {
        alReves = alReves + cadena.charAt(x);
        x--;
    }
    document.getElementById('fraseAfter').value = alReves;
}
