import React from 'react'
import { useCartContext } from '../../context/CartContext'


export default function Cart() {
  const { cartList, vaciarCarrito } = useCartContext()
  return (
    
    <div>
      <h3>Este es el Carrito</h3>
      <div>
        {cartList.map(product => <li>{product.title} - price: {product.price} - cantidad: {product.cantidad}</li> )}
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
      </div>    
    </div>
  )
}
