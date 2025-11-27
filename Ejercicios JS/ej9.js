//9.crea una función areaRectangulo(base, altura) que retorne el area y otra que muestre el resultado
function areaRectangulo(base, altura) {
    return base * altura
}
function mostrarArea() {
    const base = parseFloat(prompt("Introduce la base del rectángulo:"));
    const altura = parseFloat(prompt("Introduce la altura del rectángulo:"));

    if (isNaN(base) || isNaN(altura)) {
        document.getElementById("resultado").innerHTML = "<h2>Por favor, introduce números válidos.</h2>";
        return;
    }

    const area = areaRectangulo(base, altura);
    document.getElementById("resultado").innerHTML = `<h2>Área: ${area}</h2>`
}
mostrarArea();