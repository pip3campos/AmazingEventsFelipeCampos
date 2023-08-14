const contenedorFiltro = document.getElementById('divFiltroUpcoming')

const categorias = Array.from( new Set( data.events.map( evento => evento.category ).flat() ) )

const templateOptions = categorias.reduce( ( template, categoria ) => template + `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="checkbox${categoria.replace(' ', '')}" value="${categoria}">
    <label class="form-check-label" for="checkbox${categoria.replace(' ', '')}">${categoria}</label>
</div>`, "" )

const stringInner = templateOptions + `
<div class="d-flex" role="search">
    <div class="d-flex" role="search">
        <input id="searchEvento" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
    </div>
</div>`

contenedorFiltro.innerHTML = stringInner

const contenedor = document.getElementById('artclUpComing')

function crearTarjeta (evento){
    return `<section class="card col-11 col-sm-3">
    <img class="card-img-top img-fluid" src="${evento.image}" alt="">
    <div class="card-body d-flex flex-column">
        <h2 class="card-title">${evento.name}</h2>
        <p class="card-text">${evento.description}</p>
        <div class="d-flex justify-content-around align-items-center">
            <h3 class="card-title">$${evento.price}</h3>
            <a class="btn btn-danger" href="./details.html?id=${evento._id}">Details</a>
        </div>
    </div>
</section>`
}

let eventos = data.events

function mostrarTarjeta ( listaDeEventos, contenedor){
    let template = ''
    for (const evento of listaDeEventos){
        if ( evento.date > data.currentDate ){
            template += crearTarjeta(evento)
        }
    }
    contenedor.innerHTML = template
}

mostrarTarjeta ( eventos, contenedor )

function filtrarPorCategoria ( listaDeEventos, arrayDeCategorias ){
    if ( arrayDeCategorias.length == 0 ){
        return listaDeEventos
    } else {
        const filtrado = listaDeEventos.filter( evento => arrayDeCategorias.includes( evento.category ) )
        return filtrado
    }
}

function filtrarPorNombre ( listaDeEventos, nombre){
    const filtrado = listaDeEventos.filter( evento => evento.name.toLowerCase().includes ( nombre.toLowerCase() ) )
    return filtrado
}

contenedorFiltro.addEventListener( 'input', suceso => {
    suceso.preventDefault()
    const checked = document.querySelectorAll('input[type=checkbox]:checked')
    const arrayChecked = Array.from( checked ).map( checkbox => checkbox.value)
    const filtradoCategorias = filtrarPorCategoria ( data.events, arrayChecked)
    const input = document.getElementById('searchEvento')
    const filtradoNombre = filtrarPorNombre ( filtradoCategorias, input.value)
    if ( filtradoNombre.length == 0 ){
        contenedor.innerHTML = `<section class="card col-11 col-sm-3">
        <img class="card-img-top img-fluid" src="../images/error_search.png" alt="">
        <div class="card-body d-flex flex-column">
            <h2 class="card-title">No results found</h2>
            <p class="card-text">We couldn't find what you searched for.</p>
            <div class="d-flex justify-content-around align-items-center">
                <h3 class="card-title">Try searching again</h3>
            </div>
        </div>
    </section>`
    } else {
        mostrarTarjeta ( filtradoNombre, contenedor )
    }
})