$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
window.addEventListener("DOMContentLoaded", mostrar);
function mostrar() {
    let animacion = document.querySelector('.logo');
    animacion.style.animation = 'logo 2s ease';

}
window.addEventListener("DOMContentLoaded", menu);
function menu() {
    let animacion = document.querySelector('.nav_menu');

    //console.log(posicionXbox1);
    //let tamañoPantalla = window.innerHeight;
    animacion.style.animation = 'nav_ani 2s ease'
}
window.addEventListener('scroll', function () {
    let animacionProduct = document.querySelector('.card-estilo');
    let animacion = animacionProduct.getBoundingClientRect().top;
    let animacionProduct1 = document.getElementById('card-estilo2');
    let animacion2 = animacionProduct1.getBoundingClientRect().top;
    let animacionProduct2 = document.getElementById('card-estilo3');
    let animacion3 = animacionProduct2.getBoundingClientRect().top;
    let animacionProduct3 = document.querySelector('.card2-estilo');
    let animacion4 = animacionProduct3.getBoundingClientRect().top;
    let animacionProduct4 = document.getElementById('card2-estilo1');
    let animacion5 = animacionProduct4.getBoundingClientRect().top;
    let animacionProduct5 = document.getElementById('card2-estilo2');
    let animacion6 = animacionProduct5.getBoundingClientRect().top;

    //console.log(animacion); 
    if (animacion < 1000) {
        animacionProduct.style.animation = 'ani_product 2.5s ease-out'
    }
    if (animacion2 < 1000) {
        animacionProduct1.style.animation = 'ani_product1 2.5s ease-out'
    }
    if (animacion3 < 1000) {
        animacionProduct2.style.animation = 'ani_product2 2.5s ease-out'
    }
    if (animacion4 < 1150) {
        animacionProduct3.style.animation = 'ani_card 1.5s ease-out'
    }
    if (animacion5 < 1150) {
        animacionProduct4.style.animation = 'ani_card 1.5s ease-out'
    }
    if (animacion6 < 1150) {
        animacionProduct5.style.animation = 'ani_card 1.5s ease-out'
    }
})
const menuInterno = document.getElementById("menu2");
const menu_interno = document.querySelector(".menu_interno")
const menu3 = document.querySelector(".menu3");
menuInterno.addEventListener('mouseover', mostrarMenu)
function mostrarMenu() {
    menu_interno.classList.add("d-block");
    menu_interno.classList.remove("d-none");
}
menu_interno.addEventListener('mouseleave', ocultarMenu);
function ocultarMenu() {
    menu_interno.classList.remove("d-block");
    menu_interno.classList.add("d-none");
}
menu3.addEventListener('mouseleave', ocultarMenu);
function ocultarMenu() {
    menu_interno.classList.remove("d-block");
    menu_interno.classList.add("d-none");
}
const login = document.querySelector(".login")
const userLogin = document.querySelector(".usuario_logo");
userLogin.addEventListener('mouseover', mostrarLogin);
function mostrarLogin() {
    login.classList.remove("d-none");
    login.classList.add("d-block");
}
const loginInterno = document.getElementById("carrito");
loginInterno.addEventListener('mouseenter', ocultarMenu);
function ocultarMenu() {
    login.classList.remove("d-block");
    login.classList.add("d-none");
}
const loginInterno1 = document.getElementById("contacto");
loginInterno1.addEventListener('mouseenter', ocultarMenu);
function ocultarMenu() {
    login.classList.remove("d-block");
    login.classList.add("d-none");
}
login.addEventListener('mouseleave', ocultarMenu);
function ocultarMenu() {
    login.classList.remove("d-block");
    login.classList.add("d-none");
}
let products = JSON.parse(localStorage.getItem("products")) || [];
const agregarDeseados = document.querySelector(".add");
agregarDeseados.addEventListener("click", listaDeseados)
function listaDeseados() {
    const tablaDeseos = document.getElementById("lista_deseos")
    tablaDeseos.innerHTML = `<table class="table">
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Eliminar/Comprar</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><img
                    src="${products.url}"
                    class="img-thumbnail" alt="..."></th>
            <td>
                <p>${products.producto}</p>
                <p>Talle:</p>
            </td>
            <td>$${products.precio}</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-trash-fill eliminar_carrito" viewBox="0 0 16 16">
                    <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill m-2 carrito_comprar" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></td>
        </tr>
    </tbody>
</table>
    `
}
























