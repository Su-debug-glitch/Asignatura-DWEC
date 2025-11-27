const resultado = document.getElementById('resultado');
let num = 2;
let razon = 3;
let serie = "";

for (let i = 1; i<=100; i++) {
    serie += num + "<br>";
    num *= razon;
}

resultado.innerHTML = serie;