import {createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) =>{
    // Estados y funciones globales
    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    
    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    
    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].cantidad += item.cantidad;
            updateCart(newCartList);
        } else {
            updateCart([...cartList,item]);
        }
    }

    function updateCart(arr) {
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.cantidad*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.cantidad)
            .reduce((acc,curr) => acc+curr,0)
        );
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    function removeItem(id) {
        let i = cartList.findIndex(el => el.id === id);
        const newCartList = cartList;
        newCartList.splice(i,1);
        updateCart(newCartList);
    }    

    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            vaciarCarrito,
            removeItem,
            totalPrice,
            totalItems
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider