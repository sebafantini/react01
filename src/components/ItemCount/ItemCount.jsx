import React, { useState } from 'react'

import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';




export default function ItemCount({stockDisponible=5, cantidadInicial=1, onAdd}) {

    
    const [stock, setStock] =useState(stockDisponible);    
    const [count, setCount] =useState(cantidadInicial);    
    function suma() {        
            if (stock > 0 & stock > count) {
                setCount(count+1);
                //console.log(count);                        
            }
    }
    function resta() {        
        if (stock > 0 & count > 1) {
            setCount(count-1);
            //console.log(count);            
        }
    }
    
    function addItem() {
        onAdd(count);
    }    
    
    return (
                <div>
                 Stock disponible: {stock}
                
                <InputGroup className="mb-3">
                    <Button variant="danger" onClick={resta}>-</Button>                                        
                    <FormControl aria-label="cantidad" value= {count} />
                    <Button variant="success"onClick={suma} >+</Button>            
                </InputGroup>    
                
                <Button variant="primary" size="lg" onClick={addItem}>
                    Confirmar Compra
                </Button>
                </div>  
   
    )
}
