//4. Declara dos edades y muestra quién es mayor o si son iguales usando if...else if...else.

let edad1 = 10
let edad2 = 20

function esMayor() {
    if (edad1 > edad2) {
        console.log("El primero es mayor")
    } else if (edad1 == edad2) {
        console.log("Tenéis la misma edad")
    } else {
        console.log("El segundo es mayor")
    }
}
esMayor();