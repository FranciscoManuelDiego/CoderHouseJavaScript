let formulario = document.getElementById("formulariocontacto")
let arrayUsuarios = []


document.getElementById("botonenviar").addEventListener( 'click', (e) => {
    alert("Enviaste tu usuario al Local Storage!")
})

// objeto ingresado en el formulario
formulario.addEventListener('submit', (e)=> {
    e.preventDefault()
    let usuario = document.getElementById('usuario').value
    let email = document.getElementById('email').value
    let usuarioIngresado = {usuario: usuario,  email: email}
    arrayUsuarios.push(usuarioIngresado)
    console.log(arrayUsuarios)
    localStorage.setItem("UsuariosIngresados" , JSON.stringify(arrayUsuarios))
    formulario.reset()
})



