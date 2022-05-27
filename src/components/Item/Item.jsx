import React, { useState } from 'react'

import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';

//export default function Item({id='1', title='Cuscus de Pollo', price='200', pictureUrl='cuscus.jpg'}) {
export default function Item({prod}) {    
  return (
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

                    <Link to ={`/detalle/${prod.id}`}>
                        <Button variant="primary" size="lg" >                        
                            Detalle
                        </Button>                
                    </Link>                                    
                </Card.Body>
            </Card>
  )
}
