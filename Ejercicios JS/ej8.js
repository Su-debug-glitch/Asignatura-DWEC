//8.crea una función saludar que devuelva un mensaje y lo muestre
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("miSaludo");
    const resultado = document.getElementById("resultado");
    const tarjeta = document.getElementById("tarjeta");
    const input = document.getElementById("nombreInput");

    boton.addEventListener("click", () => {
        const nombre = input.value.trim();

        resultado.classList.remove("mostrar");

        if (nombre !== "") {
            resultado.textContent = `¡Hola, ${nombre})}! 💫`;
        } else {
            resultado.textContent = "Por favor, escribe tu nombre 😊";
        }

        // Forzamos un pequeño retraso para que la animación se reinicie
        setTimeout(() => {
            resultado.classList.add("mostrar");
        }, 50);
    });
});
