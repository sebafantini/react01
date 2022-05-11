import React from 'react'
import Titulo from '../Titulo/Titulo'

export default function Formulario() {
  return (
    <div>
        <Titulo titulo='Soy el titulo del imput' subTit='Soy el Subtitulo del input'/>
        <input type="text"/>
        <button>Saludo</button>
    </div>
    
  )
}
