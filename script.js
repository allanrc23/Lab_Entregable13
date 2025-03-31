function validarFormulario(){
    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('correo').value
    let clave = document.getElementById('clave').value

    if (nombre === "" || email === "" || clave === "") {
           alert('Todos los campos son obligatorios');     
    }
}
