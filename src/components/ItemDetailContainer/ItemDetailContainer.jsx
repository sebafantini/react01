import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const {detalleId} = useParams()
    console.log(detalleId)
  return (
    <div>
    <h3>Este es el ItemDetailContainer </h3>
    
    <ItemDetail detalleId = {detalleId}/>
    </div>
    
  )
}
