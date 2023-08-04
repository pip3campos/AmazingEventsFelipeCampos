const contenedor = document.getElementById('artcl')

function crearTarjeta (evento){
    return `<section class="card col-11 col-sm-3">
    <img class="card-img-top" src="${evento.image}" alt="">
    <div class="card-body">
        <h2 class="card-title">${evento.name}</h2>
        <p class="card-text">${evento.description}</p>
        <div class="d-flex justify-content-between">
            <h3 class="card-title">${evento.price}</h3>
            <a class="btn" href="./assets/pages/details.html">Details</a>
        </div>
    </div>
</section>`
}

function mostrarTarjeta ( listaDeDatos, contenedor){
    let template = ''
    for (const evento of listaDeDatos.events){
        template += crearTarjeta(evento)
    }
    contenedor.innerHTML = template
}

mostrarTarjeta ( data, contenedor )




{/* <section class="card col-11 col-sm-3">
    <img class="card-img-top" src="${tarjeta.imagen}" alt="">
    <div class="card-body">
        <h2 class="card-title">${}</h2>
        <p class="card-text">${}</p>
        <div class="d-flex justify-content-between">
            <h3 class="card-title">${}</h3>
            <a class="btn" href="./assets/pages/details.html">Details</a>
        </div>
    </div>
</section> */}
