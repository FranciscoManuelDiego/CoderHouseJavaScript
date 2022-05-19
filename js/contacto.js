let formulario = document.getElementById("formulariocontacto")
let arrayUsuarios = []

// objeto ingresado en el formulario
formulario.addEventListener('submit', (e)=> {
    e.preventDefault()
    let usuario = document.getElementById('usuario').value
    let email = document.getElementById('email').value
    let usuarioIngresado = {usuario: usuario,  email: email}
    if (usuario === "" && email=== "") {
        Swal.fire({
            icon: 'error',
            title: ':(',
            text: 'No introduciste información',
            footer: 'Asegurate de completar los campos!'
        })
    } else{
        Swal.fire({
            icon: 'success',
            title: ':)',
            text: 'Almacenaste tu mail y Usuario en local Storage',
        })
        arrayUsuarios.push(usuarioIngresado)
        console.log(arrayUsuarios)
        localStorage.setItem("UsuariosIngresados" , JSON.stringify(arrayUsuarios))
    }
    formulario.reset()
})



