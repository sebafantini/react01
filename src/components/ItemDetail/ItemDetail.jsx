import React, { useContext } from 'react'
import { useEffect, useState } from "react"
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Spinner} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';


import BuyButtons from '../BuyButtons/BuyButtons';
import { getFetch } from '../helpers/getFech';
import ItemCount from '../ItemCount/ItemCount';



//export default function ItemDetail({detalleId = '1'}) {
export default function ItemDetail({producto}) {    
    //const [productos, setProductos] = useState([])
    //const [loading, setLoading] = useState(true)
    const [inputType, setInputType] = useState('itemCount')
    
    const {addToCart, cartList} = useCartContext()
    

    function onAdd(quantity) {        
        setInputType('buyButtons');
        console.log(quantity)
        //addToCart( { ...prod, cantidad: quantity } )        
        addToCart( { ...producto, cantidad: quantity } )        
    }
    console.log(cartList)

    // useEffect(() => {
    //     getFetch()  // fetch llamada a una api  
    //     .then(respuesta=> setProductos(respuesta.filter((prods) => prods.id === detalleId)))
    //     .catch((err)=> console.log(err))
    //     .finally(()=>setLoading(false))     
    // }, [detalleId])
    
    //console.log('en ItemDetail')
    //console.log(detalleId)
    
    return (
    <div>
           
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                    ID_Productoucto: {producto.id}
                    </Card.Text>

                    <Card.Text>
                        Calorías [Kcal]: {producto.kcal}
                    </Card.Text>

                    <Card.Text>
                        Bebida en maridaje: {producto.maridaje}
                    </Card.Text>

                    <Card.Text>
                        Precio: ${producto.price}
                    </Card.Text>
                    {inputType === 'itemCount' ?
                        <ItemCount stockDisponible={5} cantidadInicial={1} onAdd={onAdd}/>:
                        <BuyButtons/>}                                                        

                </Card.Body>
            </Card>
           
           {/* { loading ? 
                <div>
                    <h2>Cargando...</h2> 
                    <Spinner animation="border" variant="primary" />
                </div>
                
                : 
                productos.map((producto) =>  
                                
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.pictureUrl} />
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>
                            ID_Productoucto: {producto.id}
                            </Card.Text>

                            <Card.Text>
                                Calorías [Kcal]: {producto.kcal}
                            </Card.Text>

                            <Card.Text>
                                Bebida en maridaje: {producto.maridaje}
                            </Card.Text>

                            <Card.Text>
                                Precio: ${producto.price}
                            </Card.Text>
                            {inputType === 'itemCount' ?
                                <ItemCount stockDisponible={5} cantidadInicial={1} onAdd={onAdd}/>:
                                <BuyButtons/>}                                                        

                        </Card.Body>
                    </Card>
                
                )
                        
            } */}

    </div>
    )
}
