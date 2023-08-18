const contenedorFiltro = document.getElementById('divFiltroUpcoming')
const contenedor = document.getElementById('artclUpComing')

import { crearCheckboxs } from '../module/funciones.js'
import { mostrarTarjetaUpComing } from '../module/funciones.js'
import { filtrarPorCategoria } from '../module/funciones.js'
import { filtrarPorNombre } from '../module/funciones.js'
import { mostrarCardError2 } from '../module/funciones.js'

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then ( respuesta => respuesta.json() )
    .then ( respuesta => {
        const objetoEventos = respuesta
        mostrarTarjetaUpComing ( objetoEventos.events, contenedor, objetoEventos.currentDate )
        let eventosParaCheckbox = objetoEventos.events.filter( eventoActual => eventoActual.date > objetoEventos.currentDate)
        crearCheckboxs ( eventosParaCheckbox, contenedorFiltro )
        contenedorFiltro.addEventListener( 'input', suceso => {
            suceso.preventDefault()
            const checked = document.querySelectorAll('input[type=checkbox]:checked')
            const arrayChecked = Array.from( checked ).map( checkbox => checkbox.value)
            const filtradoCategorias = filtrarPorCategoria ( objetoEventos.events, arrayChecked)
            const input = document.getElementById('searchEvento')
            const filtradoNombre = filtrarPorNombre ( filtradoCategorias, input.value)
            if ( filtradoNombre.length == 0 ){
                mostrarCardError2(contenedor)
            } else {
                mostrarTarjetaUpComing ( filtradoNombre, contenedor, objetoEventos.currentDate )
            }
        })
    })
    .catch( error => console.log(error) )