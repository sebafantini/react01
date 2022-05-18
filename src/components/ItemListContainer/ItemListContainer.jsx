import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer({greeting}) {

  function onAdd(cantidad){
    console.log('Se seleccionaron ' , cantidad, 'unidades')
  }  
  
  return (
    <div>
      <h3>Este es el ItemListContainer </h3>
      <h2>{greeting}</h2>
      <ItemList/>
      {
      /*
        <h3>Calculo pedido:</h3>
        <ItemCount stockDisponible={8} cantidadInicial={1} onAdd={onAdd}/>
        */
        }
    </div>
  )
}
