import React from 'react'
import Titulo from '../Titulo/Titulo'

export default function Formulario({saludo, place}) {
  return (
    <div>        
        <form>
            <input type="text" placeholder={place}/>
            <button onClick={saludo}>Saludo</button>
        </form>
    </div>
    
  )
}
