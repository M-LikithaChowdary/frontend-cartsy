import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

 
const addToCart = (item) => {
  setCartItems(prevItems => {
       return [...prevItems, { ...item, quantity: 1 }];
  });
};

  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(item => item.id === id);
      if (index > -1) {
        const newItems = [...prevItems];
        newItems.splice(index, 1); 
        return newItems;
      }
      return prevItems;
    });
  };

 
  const increaseQty = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};
