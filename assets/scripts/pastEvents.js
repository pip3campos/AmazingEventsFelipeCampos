const contenedor = document.getElementById('artclPast')

function crearTarjeta (evento){
    return `<section class="card col-11 col-sm-3">
    <img class="card-img-top img-fluid" src="${evento.image}" alt="">
    <div class="card-body d-flex flex-column">
        <h2 class="card-title">${evento.name}</h2>
        <p class="card-text">${evento.description}</p>
        <div class="d-flex justify-content-around align-items-center">
            <h3 class="card-title">$${evento.price}</h3>
            <a class="btn btn-danger" href="./details.html">Details</a>
        </div>
    </div>
</section>`
}

function mostrarTarjeta ( listaDeDatos, contenedor){
    let template = ''
    for (const evento of listaDeDatos.events){
        if ( listaDeDatos.currentDate > evento.date ){
            template += crearTarjeta(evento)
        }
    }
    contenedor.innerHTML = template
}

mostrarTarjeta ( data, contenedor )