//variables globales
let operando1;
let operando2;
let operacion;

function init() {
    let resultado = document.getElementById('resultado');
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let porcentaje = document.getElementById('porcentaje');
    let ce = document.getElementById('ce');
    let fraccion = document.getElementById('fraccion');
    let exponente = document.getElementById('exponente');
    let raizCuadrada = document.getElementById('raizCuadrada');
    let coma = document.getElementById('coma');


//eventos de click
uno.onclick = function(e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
coma.onclick = function(e) {
    if (!resultado.textContent.includes(".")) {
        resultado.textContent = resultado.textContent + ".";
    }
}
porcentaje.onclick = function(e) {
    operando1 = resultado.textContent;
    operacion = "%";
    limpiar();
}
suma.onclick = function(e){
    operando1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operando1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operando1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operando1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operando2 = resultado.textContent;
    resolver();
}
reset.onclick = function(e){
    resetear();
}
ce.onclick = function(e) {
    limpiar();
}
fraccion.onclick = function(e) {
    if (resultado.textContent !== 0 && resultado.textContent !== "") {
        resultado.textContent = 1 / parseFloat(resultado.textContent);
    }
}
raizCuadrada.onclick = function(e) {
    if (resultado.textContent !== "") {
        let valor = parseFloat(resultado.textContent);
        if (valor >= 0) {
            resultado.textContent = Math.sqrt(valor);
        } else {
            resultado.textContent = "Error";
        }
    }
}

//funciones
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operando1 = 0;
    operando2 = 0;
    operacion = "";
}
function resolver(){
    let res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(operando1) + parseFloat(operando2);
        break;
        case "-":
        res = parseFloat(operando1) - parseFloat(operando2);
        break;
        case "*":
        res = parseFloat(operando1) * parseFloat(operando2);
        break;
        case "/":
        res = parseFloat(operando1) / parseFloat(operando2);
        break;
        case "%":
        res = (parseFloat(operando1) * parseFloat(operando2) / 100);
        break;

}
    resetear();
    resultado.textContent = res;
}
}