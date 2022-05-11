import React from 'react'

export default function Titulo({titulo, subTit='Subtitulo'}) {
  console.log(titulo);
  console.log(subTit);
  
    return (
    <>
    <h1>{titulo}</h1>
    <h1>{subTit}</h1>
    </>
  )
}
