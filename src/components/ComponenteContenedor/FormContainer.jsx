import React from 'react'
import Formulario from '../Formulario/Formulario'
import Titulo from '../Titulo/Titulo'

export default function FormContainer() {
    const titulo ='titulo de form';
    const subTitulo ='subTitulo de form';
    function saludo() {
        //console.log('saludo')
      }    
  return (
    <>
        <Titulo titulo={titulo} subTit={subTitulo}/>
        <Formulario saludo ={saludo} place = 'ingresar el dato'/>
    </>
  )
}
