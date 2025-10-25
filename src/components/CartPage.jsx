import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const formattedCart = cartItems.map(item => ({
      item: {
        pname: item.name,
        pcost: item.price
      },
      qty: item.quantity
    }));

    localStorage.setItem('cart', JSON.stringify(formattedCart));
    localStorage.setItem('name', 'John Doe'); 
    localStorage.setItem('email', 'johndoe@example.com');

    navigate('/payment');
  };

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="card mb-3 p-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-2">
                  <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h5>{item.name}</h5>
                  <p>Price: ₹{item.price}</p>
                  <p>Size: {item.size}</p>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
                <div className="col-md-2 text-end">
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <button className="btn btn-primary mt-2" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
