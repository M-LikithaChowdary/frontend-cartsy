import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.contactNo || !phoneRegex.test(formData.contactNo)) newErrors.contactNo = '10-digit number required';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Min 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:1040/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const error = await response.text();
          setApiError(error || 'Registration failed');
        } else {
          navigate('/home');
        }
      } catch (error) {
        setApiError('Server error. Try again later.');
      }
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Register to Cartsy</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {apiError && <div className="alert alert-danger">{apiError}</div>}

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input type="text" className="form-control" name="contactNo" value={formData.contactNo} onChange={handleChange} />
            {errors.contactNo && <div className="text-danger">{errors.contactNo}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>

        <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
