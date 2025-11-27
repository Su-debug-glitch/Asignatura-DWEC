//10.crea una función que reciba una palabra y cuente las vocales. Usa for y una condición if
function contarVocales(palabra) {
    let contador = 0;
    let vocales = "aeiouAEIOU"

    for (let letra of palabra) {
        if(vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
console.log("Vocales: ", contarVocales("hola"))