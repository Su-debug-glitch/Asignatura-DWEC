function validarSiNumero(numero) {
    if ((!/^([0-9])*$/.test(numero))) {
        alert('El valor ' + numero + ' no es un número.');
        return false;
    }
    return true;
}

function enviarForm() {
    let nombre = document.getElementById('nombre').value.trim();
    let apellido1 = document.getElementById('apellido1').value.trim();
    let apellido2 = document.getElementById('apellido2').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let email = document.getElementById('email').value.trim();
    let tarjeta = document.getElementById('tarjeta').value;
    let numTarjeta = document.getElementById('numTarjeta').value;
    let nombreUs = document.getElementById('nombreUs').value.trim();
    let password = document.getElementById('password').value;
    let passwordVerif = document.getElementById('passwordVerif').value;

    
    if (!nombre || !apellido1 || !apellido2 || !telefono || !email || !numTarjeta || !nombreUs || !password || !passwordVerif) {
            alert("⚠️ No se puede dejar ningún campo vacío");
            return;
        }

    if (!validarSiNumero(numTarjeta)) {
        return;
    }

    if (password !== passwordVerif) {
        alert("Las contraseñas no coinciden");
        return;
    }

    let infoVerificada = 
    `Registro completado:
    NOMBRE COMPLETO: ${nombre} ${apellido1} ${apellido2}
    TELÉFONO: ${telefono}
    EMAIL: ${email}
    TARJETA: ${tarjeta}
    Nº TARJETA: ${numTarjeta}
    USUARIO: ${nombreUs}`;
    
    alert(infoVerificada);
}
