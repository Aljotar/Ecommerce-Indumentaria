const Usuarios = (JSON.parse(localStorage.getItem("usuarios")) || [] );
const botonInput = document.getElementById('boton');
botonInput.addEventListener("click", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('floatingInput');
    const usuarioInput = document.getElementById('floatingInput2');
    const contrasenalInput = document.getElementById('floatingPassword');    
    const alert = document.querySelector(".alert")
    //const usuarioLogeo = usuarioInput.value
    //if (usuarioInput.value === Usuario.usuario) {
        alert.classList.remove("d-none");
        alert.classList.add("d-block");
        //localStorage.setItem("mailUsuario",usuarioInput.value);
        const nuevoUsuario = {
            email: emailInput.value,
            usuario: usuarioInput.value,
            contrasena: contrasenalInput.value
        }
        Usuarios.push(nuevoUsuario);
    //}
    localStorage.setItem("usuarios", JSON.stringify(Usuarios))
    console.log(Usuarios);
})
