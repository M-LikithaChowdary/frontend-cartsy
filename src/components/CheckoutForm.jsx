import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || 0;

  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'Card',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.pincode.trim()) newErrors.pincode = 'Pincode is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:1040/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        if (form.paymentMethod === 'COD') {
          alert('Order Successful');
          navigate('/');
        } else {
          navigate('/final-payment', { state: { amount } });
        }
      } else {
        console.error('Failed to save checkout data');
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{
      backgroundColor: '#a07451',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'darkgreen' }}>Enter Your Details</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px' }}
              />
              {errors.name && <p style={{ color: 'red', margin: 0 }}>{errors.name}</p>}
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px' }}
              />
              {errors.address && <p style={{ color: 'red', margin: 0 }}>{errors.address}</p>}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px' }}
              />
              {errors.city && <p style={{ color: 'red', margin: 0 }}>{errors.city}</p>}
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px' }}
              />
              {errors.pincode && <p style={{ color: 'red', margin: 0 }}>{errors.pincode}</p>}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <label style={{ whiteSpace: 'nowrap' }}>Payment Method:</label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              style={{ flex: 1, padding: '10px' }}
            >
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
              <option value="Netbanking">Netbanking</option>
              <option value="COD">Cash on Delivery</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#3399cc',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
