function infoUsuario() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let localidad = document.getElementById("localidad").value;
    alert("Nombre: " + nombre + "\nApellidos: " + apellidos + "\nEdad: " + edad + "\nLocalidad: " + localidad);

}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("edad").selectedIndex = 0;
}