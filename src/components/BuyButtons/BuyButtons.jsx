import React from 'react'
import { Link } from "react-router-dom";

export default function BuyButtons() {
  return (
    <div >
            <Link to='/cart'>
                <button className="primary">Ver pedido</button>
            </Link>
            <Link to='/'>
                <button className="primary">Volver al menú</button>
            </Link>
    </div>
  )
}
