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
    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight" class="list-group-item list-group-item-action bg-dark">Perfil</a>
    <a href="#"  class="list-group-item list-group-item-action bg-dark">Mis pedidos</a>
    <a href="#" class="list-group-item list-group-item-action bg-dark">Favoritos</a>
  </div>
    </div>
  </div>
</div>
<div class="offcanvas offcanvas1 offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header text-center bg-dark">
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg>
    <h5 id="offcanvasRightLabel">${usuario[i].usuario}</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body body">
    <div class="container mt-5">
      <div class="row perfilNombreBg">
        <div class="col-3 perfilNombre">
          <p>Nombre:</p>
        </div>
        <div class="col-8 userNombre d-flex">
          <p>${usuario[i].nombre}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pencil-square mt-3" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row perfilNombreBg">
        <div class="col-3 perfilNombre">
        <p>Apellido:</p>
      </div>
      <div class="col-8 userNombre d-flex">
        <p>${usuario[i].apellido}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pencil-square mt-3" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
      </div>
    </div>
  </div>
  <div class="container mt-5">
  <div class="row perfilNombreBg">
    <div class="col-3 perfilNombre">
    <p>Mail:</p>
  </div>
  <div class="col-8 userNombre d-flex">
    <p>${usuario[i].email}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pencil-square mt-3" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>
  </div>
</div>
</div>
<div class="container mt-5">
<div class="row perfilNombreBg">
  <div class="col-3 perfilNombre">
  <p>Contraseña:</p>
</div>
<div class="col-8 userNombre d-flex">
  <p>${usuario[i].contrasena}</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pencil-square mt-3" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>
</div>
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



