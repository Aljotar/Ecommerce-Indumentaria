const Usuarios = (JSON.parse(localStorage.getItem("usuarios")) || []);
const botonInput = document.getElementById('boton');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const emailInput = document.getElementById('floatingInput');
const usuarioInput = document.getElementById('floatingInput2');
const contrasenalInput = document.getElementById('floatingPassword');
const form = document.getElementById('form');
const error = document.getElementById("error")
const alerta = document.getElementById("alerta")
form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let exRegularMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    error.innerHTML = ""
    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if (apellido.value.length < 3) {
        warnings += `El Apellido no es valido <br>`
        entrar = true
    }
    if (!exRegularMail.test(emailInput.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (contrasenalInput.value.length < 6) {
        warnings += `Contraseña invalida <br>`
        entrar = true
    }
    if (entrar) {
        error.innerHTML = warnings
    }
    else {
        alerta.classList.remove("d-none");
        alerta.classList.add("d-block")
        const nuevoUsuario = {
            nombre: nombre.value,
            apellido: apellido.value,
            email: emailInput.value,
            usuario: usuarioInput.value,
            contrasena: contrasenalInput.value
        }
        Usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(Usuarios))
        document.getElementById("form").reset();
    }
})

