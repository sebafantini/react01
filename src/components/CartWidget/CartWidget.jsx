import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

import './CartWidget.css'

export default function CartWidget() {
  const { cartList, totalItems } = useCartContext()
  return (    
    <>
      <Link to='/cart'>
        <img class="cartIcon" src="/cart.png" alt="cart"  ></img>        
      </Link>
      {cartList.length ===0 ? '' : '(' + totalItems + ')'}
    </>

  )
}
