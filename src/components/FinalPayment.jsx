// src/pages/FinalPayment.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import loadRazorpayScript from './loadRazorpay';

const FinalPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount;

  const handlePayment = async () => {
    if (!amount) {
      alert('Invalid payment amount.');
      navigate('/payment'); // Fallback redirect
      return;
    }

    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_1DP5mmOlF5G5ag',
      amount: amount * 100, // in paise
      currency: 'INR',
      name: 'Cartsy Checkout',
      description: 'Thank you for your purchase',
      image: 'https://yourcompany.com/logo.png',
      handler: function (response) {
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: localStorage.getItem('name') || 'Guest',
        email: 'test@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on('payment.failed', function () {
      alert(`Oops! Something went wrong.\nPayment Failed`);
    });
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h2 style={{ color: 'darkgreen' }}>Click below to complete your payment</h2>
      <button
        onClick={handlePayment}
        style={{
          padding: '12px 24px',
          backgroundColor: '#3399cc',
          color: 'white',
          fontSize: '16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Pay ₹{amount?.toLocaleString()}
      </button>
    </div>
  );
};

export default FinalPayment;
