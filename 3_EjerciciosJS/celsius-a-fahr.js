function calculo() {
    let valor = parseInt(document.getElementById("grados").value);
    let resultado = (valor*(9/5)) + 32;

    document.getElementById("resultado").innerHTML = valor + " ºC es equivalente a " + resultado + " ºF en Fahrenheit";
}

function limpiar() {
    document.getElementById("resultado").value = "";
    document.getElementById("grados").value = "";
}
