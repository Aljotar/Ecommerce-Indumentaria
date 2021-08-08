const loginUsuario = document.getElementById("loginUsuario")
const loginContrasena = document.getElementById("loginContrasena")
const form = document.getElementById("form")
const signin = document.getElementById("signin")
let usuario = (JSON.parse(localStorage.getItem("usuarios")) || []);
form.addEventListener("submit", e => {
    e.preventDefault()
})
signin.addEventListener("click", tomarUsuario)
function tomarUsuario() {
    let acceso = false;
    for (let i = 0; i < usuario.length; i++) {
        if (loginUsuario.value == usuario[i].usuario && loginContrasena.value == usuario[i].contrasena) {
            acceso = true;
            const usuarioLogueado = document.getElementById("usuario_logueado")
            usuarioLogueado.innerHTML = `
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              ${usuario[i].usuario}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>`;
            break;
        }
    }
    if (acceso === false) {
        alert("ertertertertert")
        form.reset();


    }
}



