import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetchFind } from '../helpers/getFech';
import {Spinner} from 'react-bootstrap';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const {detalleId} = useParams()
    const [loading, setLoading] = useState(true)
    console.log(detalleId)

    useEffect(() => {
      getFetchFind(detalleId)  // fetch llamada Find
      //.then(respuesta=> setProducto(respuesta.filter((prods) => prods.id === detalleId)))
      .then(respuesta=> setProducto(respuesta))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))     
  }, [])    
  
  
  return (
    <div>
    <h3>Este es el ItemDetailContainer </h3>
    
    {/* <ItemDetail detalleId = {detalleId}/> */}
    
    { loading ?<div>
                  <h2>Cargando...</h2> 
                  <Spinner animation="border" variant="primary" />
                </div>
              :<ItemDetail producto={producto}  />}
    </div>
    
  )
}
