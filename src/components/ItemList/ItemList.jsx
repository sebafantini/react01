import React from 'react'
import Item from '../Item/Item'
import { useEffect, useState, useContext } from "react"
import {Spinner} from 'react-bootstrap';
import {doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import { getFetch } from '../helpers/getFech'


/*const productos = [
    { id: '1', title: 'Curry de Pollo', price: 1200, pictureUrl:'curry_pollo.JPG'},
    { id: '2', title: 'Cuscus de Verduras', price: 1300, pictureUrl:'cuscus.jpg' },
    { id: '3', title: 'Asado', price: 1400, pictureUrl:'asado.JPG' },
    { id: '4', title: 'Verduras Grilladas',  price: 1500, pictureUrl:'verduras.JPG' }
  ]

const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve( productos )        
    }, 2000)
})*/

     

export default function ItemList({categoriaId}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //const [producto, setProducto] = useState([])
    
 //   useEffect(() =>{
//        const db = getFirestore()
//        const dbQuery = doc(db, 'items', 'HgyBccXeLc0tAov7hQR3')
//        getDoc(dbQuery)
//        .then(resp => setProducto({id: resp.id, ...resp.data() }))
//    },[])


//    useEffect(() =>{
//        const db = getFirestore()
        //const dbQueryCollection = doc(db, 'items')
        //getDocs(dbQueryCollection)        
        //.then(resp => setProductos( resp.docs.map(iten => ({id: resp.id, ...resp.data() })) ))
    //},[])

    useEffect(() => {
        if (categoriaId) {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProductos(respuesta.filter((prods) => prods.category === categoriaId)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProductos(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [categoriaId])


    console.log('En item list')
    console.log(categoriaId)
    //console.log(producto)
    return (

    <div class="flex-direction: row">
            
            {/* <ItemCount onAdd={ onAdd  } /> */}
            {/* // [<li key=0>1</li>, <li>2</li>, <li>3</li>, <li>4</li>] */}
            { loading ?                 
                <div>
                    <h2>Cargando...</h2> 
                    <Spinner animation="border" variant="primary" />
                </div>
                : 
            //productos.map((prod) =>  <Item id={prod.id} title={prod.title} price={prod.price} pictureUrl={prod.pictureUrl}/>  )
            productos.map((prod) =>  <Item key={prod.id} prod={prod}/>  )
                        
            }

            {/* <button onClick={()=> setBool(!bool)}>click</button>            */}
        </div>



  )
}
