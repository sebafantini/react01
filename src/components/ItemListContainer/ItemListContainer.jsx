import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer({greeting}) {

  const{categoriaId} = useParams()

  //console.log(categoriaId)

  function onAdd(cantidad){
    //console.log('Se seleccionaron ' , cantidad, 'unidades')
  }  
  
  return (
    <div class="container-fluid">
      <h3>Seleccione alguna opción de nuestro Menú</h3>
      
      {/*<h2>{greeting}</h2>*/}
      <ItemList categoriaId={categoriaId}/>
      {
      /*
        <h3>Calculo pedido:</h3>
        <ItemCount stockDisponible={8} cantidadInicial={1} onAdd={onAdd}/>
        */
        }
    </div>
  )
}
