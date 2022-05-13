import React from 'react'
import Item from '../Item/Item'
import { useEffect, useState } from "react"

const productos = [
    { id: '1', title: 'Curry de Pollo', price: 1200, pictureUrl:'curry_pollo.JPG'},
    { id: '2', title: 'Cuscus de Verduras', price: 1300, pictureUrl:'cuscus.jpg' },
    { id: '3', title: 'Asado', price: 1400, pictureUrl:'asado.JPG' },
    { id: '4', title: 'Verduras Grilladas',  price: 1500, pictureUrl:'verduras.JPG' }
  ]

const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve( productos )        
    }, 2000)
})

     

export default function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch  // fetch llamada a una api  
        .then(respuesta=> setProductos(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))     
    }, [])
    
    console.log(productos)

    return (

    <div>
            
            {/* <ItemCount onAdd={ onAdd  } /> */}
            {/* // [<li key=0>1</li>, <li>2</li>, <li>3</li>, <li>4</li>] */}
            { loading ? 
                <h2>Cargando...</h2> 
                : 
            productos.map((prod) =>  <Item id={prod.id} title={prod.title} price={prod.price} pictureUrl={prod.pictureUrl}/>  )
                        
            }

            {/* <button onClick={()=> setBool(!bool)}>click</button>            */}
        </div>



  )
}
