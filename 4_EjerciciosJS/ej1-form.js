function validarFormulario() {
    if(document.getElementById("nombre").value.trim() === "")
    {
        alert("El campo Nombre es obligatorio.")
        return false;
    }
    let nombre = document.getElementById("nombre").value.trim();
    
    if (document.getElementById("email").value.trim() === "") {
        alert("El campo Email es obligatorio");
        return false;
    }
    let email = document.getElementById("email").value.trim();

    if (!email.includes("@")) {
        alert('El email debe contener "@" ');
        return false;
    }

    if (document.getElementById("password").length > 0 && document.getElementById("password").length < 6) {
        alert("El Password debe tener al menos 6 caracteres")
        return false;
    }
    let password = document.getElementById("password").value;

    if (document.getElementById("comentarios").value === "") {
        alert("El campo Comentarios es obligatorio");
        return false;
    }
    let comentarios = document.getElementById("comentarios").value.trim();

    if (comentarios.length > 50) {
        alert("Los comentarios no pueden tener más de 50 caracteres.")
        return false;
    }

    if(!document.getElementById("condiciones").checked) {
        alert("Debes aceptar las condiciones.")
        return false;
    }
    let condiciones = document.getElementById("condiciones").checked;

    alert("Formulario enviado correctamente")
}

