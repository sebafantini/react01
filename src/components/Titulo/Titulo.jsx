import React from 'react'

export default function Titulo({titulo = 'Titulo', subTit='Subtitulo'}) {
  //console.log(titulo);
  //console.log(subTit);
  
    return (
    <>
    <h1 style={{color:'blue'}}>{titulo}</h1>
    <h2>{subTit}</h2>
    </>
  )
}
