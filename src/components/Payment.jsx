// src/pages/Payment.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useContext(CartContext);
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    if (location.state?.directPurchase) {
      setCurrentCart([cartItems[cartItems.length - 1]]);
    } else {
      setCurrentCart(cartItems);
    }
  }, [cartItems, location.state]);

  const totalAmount = currentCart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  const handleProceed = () => {
  navigate('/checkout', { state: { amount: totalAmount } }); // Pass amount to Checkout
};


  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Invoice</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={cellStyle}>#</th>
            <th style={cellStyle}>Product Name</th>
            <th style={cellStyle}>Price</th>
            <th style={cellStyle}>Size</th>
            <th style={cellStyle}>Quantity</th>
            <th style={cellStyle}>Total</th>
          </tr>
        </thead>
        <tbody>
          {currentCart.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>₹{item.price}</td>
              <td style={cellStyle}>{item.size}</td>
              <td style={cellStyle}>{item.qty || 1}</td>
              <td style={cellStyle}>₹{(item.price * (item.qty || 1)).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'right', fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }}>
        Total Amount: ₹{totalAmount.toLocaleString()}
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={handleProceed}
          style={buttonStyle}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#3399cc',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Payment;
