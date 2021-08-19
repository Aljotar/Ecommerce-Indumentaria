let productos = JSON.parse(localStorage.getItem("products")) || [];
function listarProductos() {
    const container = document.getElementById("producto-cards");
    container.innerHTML = "";
    productos.forEach((product) => {
        container.innerHTML += `
        <div class="col-6 col-sm-4 col-md-3 p-2">
            <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                    <img src="${product.url}"
                        alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                    <div class="category">
                        <button type="button" class="btn btn-primary compra">Comprar</button>
                    </div>
                    <div class="title-product">
                        <h3>${product.producto}</h3>
                    </div>
                    <div class="description-prod">
                        <p>${product.descripcion}</p>
                    </div>
                    <div class="card-footer">
                        <div class="wcf-left"><span class="price">$${product.precio}</span></div>
                        <button href="#" class="link-primary add" onclick="agregarFav(${product.id})" >Añadir a favoritos</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
    })
}
listarProductos();

let favoritos = JSON.parse(localStorage.getItem("favs")) || [];

function agregarFav(id){
    const favorito = productos.find((item)=>{ 
        return item.id === id        
    })
    favoritos.push(favorito);
    localStorage.setItem("favs", JSON.stringify(favoritos));
    listaDeseados();
}

function listaDeseados() {
    console.log(favoritos);
    const tablaDeseos = document.getElementById("lista_deseos")
    const tablaContenido = favoritos.map((fav, index) => {
        return `<table class="table">
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
                        src="${fav.url}"
                        class="img-thumbnail" alt="..."></th>
                <td>
                    <p>${fav.producto}</p>
                    <p>Talle:</p>
                </td>
                <td>$${fav.precio}</td>
                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-trash-fill eliminar_carrito" viewBox="0 0 16 16" onclick="eliminarFav(${fav.id})">
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
    })
    tablaDeseos.innerHTML = tablaContenido.join("");
}
listaDeseados();

function eliminarFav(id){
    const favoritosFiltrados = favoritos.filter((item)=> item.id !== id);
    favoritos = favoritosFiltrados;
    localStorage.setItem("favs", JSON.stringify(favoritos));
    listaDeseados();
}