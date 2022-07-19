import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [show, setShow] = useState(false);


  const handleShow = () => setShow((prev) => !prev);

  const isInCart = (id) => cartItems.find((item => item.id === id))

 

  const addItem = (item, amount) => {

    if (cartItems.some((product) => product.id === item.id)) {
      const copy = [...cartItems];
      const repeatItemIndex = cartItems.findIndex(
        (product) => product.id === item.id
      );
      copy[repeatItemIndex] = {
        ...copy[repeatItemIndex],
        amount: copy[repeatItemIndex].amount + amount,
      };

      setCartItems(copy);
      setCartCount((prev) => prev + amount);
      setShow((prev) => !prev);

    } else {
      setCartItems([...cartItems, { ...item, amount }]);
      setCartCount((prev) => prev + amount);
      setShow((prev) => !prev);
    }
  };



  //borrar item del carrito

const deleteFromCart = product =>{
  const newCart = [...cartItems]
  const productIsInCart = isInCart(product.id)

  if(!productIsInCart){
      return;
  }
  const deleteProduct = newCart.filter(
      prod=>prod.id !== productIsInCart.id)
      setCartItems(deleteProduct)

}


  //borrar todo el carrito 

  const deleteCart = () => { setCartItems([]) }


  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, addItem, show, handleShow, deleteFromCart, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
