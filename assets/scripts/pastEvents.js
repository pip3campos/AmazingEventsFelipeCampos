const contenedorFiltro = document.getElementById('divFiltroPast')
const contenedor = document.getElementById('artclPast')

import { crearCheckboxs } from '../module/funciones.js'
import { mostrarTarjetaPast } from '../module/funciones.js'
import { filtrarPorCategoria } from '../module/funciones.js'
import { filtrarPorNombre } from '../module/funciones.js'
import { mostrarCardError2 } from '../module/funciones.js'

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then ( respuesta => respuesta.json() )
    .then ( respuesta => {
        const objetoEventos = respuesta
        mostrarTarjetaPast ( objetoEventos.events, contenedor, objetoEventos.currentDate )
        crearCheckboxs ( objetoEventos.events, contenedorFiltro )
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
                mostrarTarjetaPast ( filtradoNombre, contenedor, objetoEventos.currentDate )
            }
        })
    })
    .catch( error => console.log(error) )