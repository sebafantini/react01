import React from 'react'
import { useEffect, useState } from "react"
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Spinner} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import { getFetch } from '../helpers/getFech';



export default function ItemDetail({detalleId = '1'}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getFetch()  // fetch llamada a una api  
        .then(respuesta=> setProductos(respuesta.filter((prods) => prods.id === detalleId)))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))     
    }, [detalleId])
    
    console.log('en ItemDetail')
    console.log(detalleId)
    
    return (
    <div>
           { loading ? 
                <div>
                    <h2>Cargando...</h2> 
                    <Spinner animation="border" variant="primary" />
                </div>
                
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
                                Calorías [Kcal]: {prod.kcal}
                            </Card.Text>

                            <Card.Text>
                                Bebida en maridaje: {prod.maridaje}
                            </Card.Text>

                            <Card.Text>
                                Precio: ${prod.price}
                            </Card.Text>
                                                                
                        </Card.Body>
                    </Card>
                
                )
                        
            }

    </div>
  )
}
