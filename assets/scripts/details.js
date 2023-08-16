let parametros = location.search
let objetoURL = new URLSearchParams(parametros)
let idEvento = objetoURL.get('id')
const contenedor = document.getElementById('secDet')

import { mostrarTarjetaDetails } from '../module/funciones.js'

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then ( respuesta => respuesta.json() )
    .then ( respuesta => {
        const objetoEventos = respuesta
        let eventoSeleccionado = objetoEventos.events.find( objetoEvento => objetoEvento._id == idEvento )
        mostrarTarjetaDetails ( eventoSeleccionado, contenedor )
    })
    .catch( error => console.log(error) )