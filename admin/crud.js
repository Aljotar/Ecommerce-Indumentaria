const productoImput = document.getElementById("producto")
const descripcionImput = document.getElementById("descripcion")
const precioImput = document.getElementById("precio")
const urlImput = document.getElementById("url")
// const tbody = document.getElementById("tBody")
const modalProducto = document.getElementById("modalProducto")
const modalPrecio = document.getElementById("modalPrecio")
const modalDescripcion = document.getElementById("modalDescripcion")
const modalUrl = document.getElementById("modalUrl")
const btnCloseModal = document.getElementById("btnCloseModal")
let productos = JSON.parse(localStorage.getItem("products")) || [];
let id = 0;
function agregarProducto(event) {
    event.preventDefault()
    const producto = productoImput.value;
    const descripcion = descripcionImput.value;
    const precio = precioImput.value
    const url = urlImput.value

    
    const nuevoProducto = {
        producto: producto,
        descripcion: descripcion,
        precio: precio,
        url: url,
        id: id,
    }
    id++
    // productos = [...productos, nuevoProducto]
    productos.push(nuevoProducto)

    const productosJson = JSON.stringify(productos)

    localStorage.setItem("products", productosJson)

    event.target.reset();
    
    btnCloseModal.click();
    listarEnTabla()  
}
function listarEnTabla() {
    const tablaAdmin = document.getElementById("tBody")
    const filasProducto = productos.map((p, index) =>`                                               
        <tr>
            <th scope="row">${index+1}</th>
            <td>${p.producto}</td>
            <td>${p.precio}</td>
            <td>${p.descripcion}</td>
            <td><button onclick = "setearIdModal(${p.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Editar</button><button onclick ="eliminarProducto(${p.id})" class="btn btn-danger mx-1">eliminar</button></td>
        </tr>`
    )
    tablaAdmin.innerHTML = filasProducto.join("");
    console.log(tablaAdmin)
    console.log(productos)
}
function eliminarProducto(id) {
    const productosFiltrados = productos.filter(producto => id !== producto.id);
    productos = productosFiltrados;
    localStorage.setItem("products", JSON.stringify(productos))
    listarEnTabla();
}
let idModal = "";
function setearIdModal(id){
    idModal= id;
}
function editarProducto() {
    console.log("productos antes: ", productos)
    const producto = productos.find((producto) => idModal === producto.id)
    const productoEditado = {...producto, producto: modalProducto.value, precio:modalPrecio.value, descripcion:modalDescripcion.value, url:modalUrl.value}
    function productoEditadoMap(producto){
        if (producto.id===productoEditado.id) {
            return ({...producto, ...productoEditado})
        } else {
            return producto
        }
    }
    const productosActualizados = productos.map(productoEditadoMap)
    productos=productosActualizados;
    localStorage.setItem("products", JSON.stringify(productos))
    listarEnTabla();
}
window.addEventListener("DOMContentLoaded", mostrar);
function mostrar() {
    let animacion = document.querySelector('.fondotabla');
    animacion.style.animation = 'logo 1s ease-in-out';

}
listarEnTabla()

const admin1 = {
    Usuario: "Admin",
    Contraseña: "123456"
}
const alert = document.querySelector(".alert");
const login = document.querySelector(".login");
const userNameAdmin = document.querySelector(".userNameAdmin");
const passAdmin = document.querySelector(".passAdmin");
const botonAdmin = document.querySelector(".botonAdmin");
botonAdmin.addEventListener("click", loginAdmin);
function loginAdmin(e) {
    e.preventDefault();
    if (userNameAdmin.value == admin1.Usuario && passAdmin.value == admin1.Contraseña){
        login.style.animation = "login 3s ease"
        login.classList.add("d-none");
        document.querySelector(".modal-content").reset()
    }
    else{
        alert.classList.add("d-block");
        alert.classList.remove("d-none");
        document.querySelector(".modal-content").reset()
    }

}

