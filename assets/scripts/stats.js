const tabla1 = document.getElementById('tabla1')
const tabla2 = document.getElementById('tabla2')
const tabla3 = document.getElementById('tabla3')

import { imprimirTabla1 } from '../module/funciones.js'
import { imprimirTabla2 } from '../module/funciones.js'
import { imprimirTabla3 } from '../module/funciones.js'

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then ( respuesta => respuesta.json() )
    .then ( respuesta => {
        const objetoEventos = respuesta
        imprimirTabla1 ( objetoEventos )
        imprimirTabla2 ( objetoEventos )
        imprimirTabla3 ( objetoEventos )
    })