import React, { useState } from 'react'

import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item({id='1', title='Cuscus de Pollo', price='200', pictureUrl='cuscus.jpg'}) {
  return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       ID_Producto: {id}
                    </Card.Text>

                    <Card.Text>
                       Precio: ${price}
                    </Card.Text>

                    <Link to ={`/detalle/${id}`}>
                        <Button variant="primary" size="lg" >                        
                            Detalle
                        </Button>                
                    </Link>                                    
                </Card.Body>
            </Card>
  )
}
