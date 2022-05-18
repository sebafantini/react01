import React from 'react'
import { useEffect, useState } from "react"
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

const productos = [
    { id: '1', title: 'Curry de Pollo', price: 1200, pictureUrl:'curry_pollo.JPG'},
  ]

const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve( productos )        
    }, 2000)
})

export default function ItemDetail() {
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
           { loading ? 
                <h2>Cargando...</h2> 
                : 
                productos.map((prod) =>  
                                
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={prod.pictureUrl} />
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>
                            ID_Producto: {prod.id}
                            </Card.Text>

                            <Card.Text>
                            Precio: ${prod.price}
                            </Card.Text>
                                                                
                            <Button variant="primary" size="lg" >
                                Detalle
                            </Button>                
                        </Card.Body>
                    </Card>
                
                )
                        
            }

    </div>
  )
}
