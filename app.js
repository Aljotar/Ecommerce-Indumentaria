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

























