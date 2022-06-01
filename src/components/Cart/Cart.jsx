import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


export default function Cart() {
  const { cartList, vaciarCarrito, removeItem, totalPrice } = useCartContext()
  
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
      </div>    
    </div>
  )
}
