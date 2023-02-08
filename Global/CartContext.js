import React, { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const  CartContext = createContext();

const CartProvider=({children})=>{
    const items=useSelector(state=>state.cart);
    const dispatch = useDispatch();
    

    return(
        <CartContext.Provider
        value={{ 
            items 
         }}
        >
        { children }
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider};