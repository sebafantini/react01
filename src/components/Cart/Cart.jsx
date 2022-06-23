import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Group} from 'react-bootstrap';

import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"

export default function Cart() {
  const { cartList, vaciarCarrito, removeItem, totalPrice } = useCartContext()
  const [idCompraCompleta, setIdCompraCompleta] = useState('')

  
  
  const [customerData, setCustomerData] = useState({});
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email2Error, setEmail2Error] = useState(false);
  //const {clearCart, createOrder} = UseCartContext();

  const handleChange = (e) => {
      setCustomerData({
          ...customerData,
          [e.target.name]: e.target.value
      });
  }
  const confirmarCompra = () => {
      setNameError(!customerData.name);
      setPhoneError(!customerData.phone);
      setEmailError(!customerData.email);
      setEmail2Error(!(customerData.email2 === customerData.email));
      if (customerData.name && customerData.phone && customerData.email && (customerData.email2 === customerData.email)) {
          //createOrder(customerData);
          generarOrden();

      }
  }




  async function generarOrden() {

    let orden = {}     
    //console.log('aca estoy')
    orden.buyer = { name: customerData.name, email: customerData.email, phone: customerData.phone }
    orden.total = totalPrice
    orden.date = new Date().toISOString().slice(0, 10)
        

    //console.log(orden.total)

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.title
        const precio = cartItem.price * cartItem.cantidad
        // const cantidad = cartItem.cantidad
        
        return {id, nombre, precio}   
    })   
    
    //console.log(orden)

    // Grabo en Firestore el objeto orden
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    
    addDoc(queryCollection, orden)    
    .then(function(resp) {
      //console.log(resp.id)
      setIdCompraCompleta(resp.id);      
    })
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
    //.finally(()=> console.log('actulalizado'))

    batch.commit()


  }   




  if (cartList.length === 0 ) {
    return (
        <div>               
            { idCompraCompleta ==='' ?                 
                <h3>No hay productos en el Carrito</h3>  
                : 
                <div>
                  <h3>Gracias por tu compra {customerData.name}!</h3>  
                  <p></p>
                  <h4>Tu nro. de pedido es: {idCompraCompleta}</h4>
                  <p></p>
                </div>                        
            }            
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

       <div>
          <form action="" >
                  <input className="" name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Nombre" />
                  {nameError && <span className="cartForm__error">Debe ingresar un nombre</span>}
                  <p></p>
                  <input className="" name="phone" onChange={(e) => handleChange(e)} type="tel" placeholder="Teléfono" />
                  {phoneError && <span className="cartForm__error">Debe ingresar un teléfono</span>}
                  <p></p>
                  <input className="" name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Correo eléctronico" />
                  {emailError && <span className="cartForm__error">Debe ingresar un correo electrónico</span>}
                  <p></p>
                  <input className="" name="email2" onChange={(e) => handleChange(e)} type="email" placeholder="Repita correo electrónico" />
                  {email2Error && <span className="cartForm__error">El correo electrónico no coincide</span>}                  
                  <p></p>
          </form>
        </div>

        <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar carrito</button>
        <button onClick={confirmarCompra}  className='btn btn-outline-success'>Ralizar compra</button>
      </div>    
    </div>
  )
}
