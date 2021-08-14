let productos = JSON.parse(localStorage.getItem("products")) || [];

function listarProductos() {
    const container = document.getElementById("producto-cards");

    container.innerHTML = "";
    productos.forEach((product) => {

        container.innerHTML += `
        <div class="col-md-3">
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
                        <a href="#" class="link-primary">Añadir a lista de deseos</a>
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