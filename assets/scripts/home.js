const contenedorFiltro = document.getElementById('divFiltro')
const contenedor = document.getElementById('artcl')

import { crearCheckboxs } from '../module/funciones.js'
import { mostrarTarjeta } from '../module/funciones.js'
import { filtrarPorCategoria } from '../module/funciones.js'
import { filtrarPorNombre } from '../module/funciones.js'
import { mostrarCardError } from '../module/funciones.js'

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then ( respuesta => respuesta.json() )
    .then ( respuesta => {
        const objetoEventos = respuesta
        mostrarTarjeta ( objetoEventos.events, contenedor )
        crearCheckboxs ( objetoEventos.events, contenedorFiltro )
        contenedorFiltro.addEventListener( 'input', suceso => {
            suceso.preventDefault()
            const checked = document.querySelectorAll('input[type=checkbox]:checked')
            const arrayChecked = Array.from( checked ).map( checkbox => checkbox.value)
            const filtradoCategorias = filtrarPorCategoria ( objetoEventos.events, arrayChecked)
            const input = document.getElementById('searchEvento')
            const filtradoNombre = filtrarPorNombre ( filtradoCategorias, input.value)
            if ( filtradoNombre.length == 0 ){
                mostrarCardError(contenedor)
            } else {
                mostrarTarjeta ( filtradoNombre, contenedor )
            }
        })
    })
    .catch( error => console.log(error) )