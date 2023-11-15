import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProducts,setCartProducts] = useState([]);

    useEffect(() => {
    if(cartProducts?.length > 0) {
       localStorage?.setItem('cart',JSON.stringify(cartProducts));
        }
    }, [cartProducts]);
    useEffect(() => {
        if(localStorage && localStorage.getItem('cart')) {
            setCartProducts(JSON.parse(localStorage.getItem('cart')));
        }
    },
         []);

    function addProduct(productId){
        setCartProducts(prev => [...prev,productId]);
    }

    return(
        <CartContext.Provider value={{cartProducts,setCartProducts,addProduct}}>
             {children}
        </CartContext.Provider>
    );
}