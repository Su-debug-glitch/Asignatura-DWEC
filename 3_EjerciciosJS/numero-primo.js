function function1() {
    let valor = parseInt(document.getElementById("valor").value);
    let numeroPrimo = true;

    for (i=1; i<valor; i++) {
        if (valor/i == Math.round(valor/i) && i!=1 && i!=valor) {
            numeroPrimo = false;
            break;
        }
    }

    if (numeroPrimo) {
        document.getElementById("resultado").innerHTML = `El número ${valor} es primo`;
    } else {
        document.getElementById("resultado").innerHTML = `El número ${valor} no es primo`;
    }
}