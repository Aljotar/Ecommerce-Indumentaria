const loginUsuario = document.getElementById("loginUsuario");
const loginContrasena = document.getElementById("loginContrasena");
const form = document.getElementById("form");
const signin = document.getElementById("signin");

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
      const usuarioLogueado = document.querySelector(".usuario_logueado")
      usuarioLogueado.innerHTML =`
          <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
  ${usuario[i].usuario}
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body text-black" style="width: 300px;">
    <div class="list-group">
    <p href="#" class="list-group-item list-group-item-action active" aria-current="true">
    Bienvenido ${usuario[i].usuario}
    </p>
    <a href="#" class="list-group-item list-group-item-action bg-dark">Perfil</a>
    <a href="#" class="list-group-item list-group-item-action bg-dark">Mis pedidos</a>
    <a href="#" class="list-group-item list-group-item-action bg-dark">Favoritos</a>
  </div>
    </div>
  </div>
</div>`;
          
      form.reset();

      break;
    }
  }
  if (acceso === false) {
    alert("ertertertertert")
    form.reset();
  }
  if (acceso = true){
    const login = document.querySelector(".login");
    login.classList.add("d-none");
  }
}



