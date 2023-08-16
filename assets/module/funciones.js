export function crearCheckboxs ( eventos, contenedor ){
    const categorias = Array.from( new Set( eventos.map( evento => evento.category ).flat() ) )
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
    contenedor.innerHTML = stringInner
}

function crearTarjeta (evento){
    return `<section class="card col-11 col-sm-3">
    <img class="card-img-top img-fluid" src="${evento.image}" alt="">
    <div class="card-body d-flex flex-column">
        <h2 class="card-title">${evento.name}</h2>
        <p class="card-text">${evento.description}</p>
        <div class="d-flex justify-content-around align-items-center">
            <h3 class="card-title">$${evento.price}</h3>
            <a class="btn btn-danger" href="./assets/pages/details.html?id=${evento._id}">Details</a>
        </div>
    </div>
</section>`
}

export function mostrarTarjeta ( listaDeEventos, contenedor){
    let template = ''
    for (const evento of listaDeEventos){
        template += crearTarjeta(evento)
    }
    contenedor.innerHTML = template
}

export function mostrarTarjetaUpComing ( listaDeEventos, contenedor, fechaActual){
    let template = ''
    for (const evento of listaDeEventos){
        if ( evento.date > fechaActual ){
            template += crearTarjeta(evento)
        }
    }
    contenedor.innerHTML = template
}

export function mostrarTarjetaPast ( listaDeEventos, contenedor, fechaActual){
    let template = ''
    for (const evento of listaDeEventos){
        if ( fechaActual > evento.date ){
            template += crearTarjeta(evento)
        }
    }
    contenedor.innerHTML = template
}

export function filtrarPorCategoria ( listaDeEventos, arrayDeCategorias ){
    if ( arrayDeCategorias.length == 0 ){
        return listaDeEventos
    } else {
        const filtrado = listaDeEventos.filter( evento => arrayDeCategorias.includes( evento.category ) )
        return filtrado
    }
}

export function filtrarPorNombre ( listaDeEventos, nombre){
    const filtrado = listaDeEventos.filter( evento => evento.name.toLowerCase().includes ( nombre.toLowerCase() ) )
    return filtrado
}

export function mostrarCardError (contenedor){
    contenedor.innerHTML = `<section class="card col-11 col-sm-3">
    <img class="card-img-top img-fluid" src="./assets/images/error_search.png" alt="">
    <div class="card-body d-flex flex-column">
        <h2 class="card-title">No results found</h2>
        <p class="card-text">We couldn't find what you searched for.</p>
        <div class="d-flex justify-content-around align-items-center">
            <h3 class="card-title">Try searching again</h3>
        </div>
    </div>
</section>`
}

export function mostrarCardError2 (contenedor){
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
}

function crearTarjetaDetails (evento){
    return `<div class="d-flex justify-content-center align-items-center"><img id="imgDet" class="img-fluid" src="${evento.image}" alt=""></div>
    <div>
        <h2>${evento.name}</h2>
        <ul>
            <li>Date: ${evento.date}</li>
            <li>Description: ${evento.description}</li>
            <li>Category: ${evento.category}</li>
            <li>Place: ${evento.place}</li>
            <li>Capacity: ${evento.capacity}</li>
            <li>Price: ${evento.price}</li>
        </ul>
    </div>`
}

export function mostrarTarjetaDetails ( evento, contenedor ){
    contenedor.innerHTML = crearTarjetaDetails(evento)
}