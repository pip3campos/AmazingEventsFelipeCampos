let parametros = location.search
let objetoURL = new URLSearchParams(parametros)
let idEvento = objetoURL.get('id')
let eventoSeleccionado = data.events.find( objetoEvento => objetoEvento._id == idEvento )
const contenedor = document.getElementById('secDet')

function crearTarjeta (evento){
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

function mostrarTarjeta ( evento, contenedor ){
    contenedor.innerHTML = crearTarjeta(evento)
}

mostrarTarjeta ( eventoSeleccionado, contenedor )