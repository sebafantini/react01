import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"

export default function Cart() {
  const { cartList, vaciarCarrito, removeItem, totalPrice } = useCartContext()
  
  async function generarOrden() {

    let orden = {}     
    
    orden.buyer = { name: 'Federico', email: 'f@gmail.com', phone: '023456987' }
    orden.total = totalPrice
    orden.date = new Date().toISOString().slice(0, 10)
        

    console.log(orden.total)

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.title
        const precio = cartItem.price * cartItem.cantidad
        // const cantidad = cartItem.cantidad
        
        return {id, nombre, precio}   
    })   
    
    console.log(orden)

    // Grabo en Firestore el objeto orden
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(()=> vaciarCarrito())

    
    // Actualizar nivel de stock
    const queryCollectionStock = collection(db, 'items')

    const queryActulizarStock =   query(
        queryCollectionStock, 
        where( documentId() , 'in', cartList.map(it => it.id) ) // trae los items presentes en la orden
    )

    const batch = writeBatch(db)
    
    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    }) ))
    .finally(()=> console.log('actulalizado'))

    batch.commit()


  }   

  
  if (cartList.length === 0 ) {
    return (
        <div>
            <h3>No hay productos en el Carrito</h3>
            <Link to='/'>
                <button>Ir al Menu</button>
            </Link>
        </div>
    );
  }
  
  
  return (    
    <div>
      <h3>Este es el Carrito</h3>
      <div>

        {cartList.map(product => 
        <li>{product.title} - price: {product.price} - cantidad: {product.cantidad}  <button onClick={removeItem}>Quitar Producto</button> </li> )}        
        <p>Total: $ {totalPrice}</p>        
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <button onClick={generarOrden} className='btn btn-outline-danger'>Ralizar compra</button>
      </div>    
    </div>
  )
}
