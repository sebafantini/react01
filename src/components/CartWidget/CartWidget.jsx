import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'

export default function CartWidget() {
  return (    
    <>
      <Link to='/cart'>
        <img class="cartIcon" src="/cart.png" alt="cart"  ></img>
      </Link>
    </>

  )
}
