import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:1040/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      if (response.ok && text === 'Login successful') {
        navigate('/home');
      } else {
        setError(text || 'Login failed');
      }
    } catch (err) {
      setError('Server error. Try again later.');
    }
  };

  const handleResetPassword = async () => {
    setResetMessage('');
    try {
      const response = await fetch('http://localhost:1040/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail }),
      });

      const text = await response.text();
      if (response.ok) {
        setResetMessage('Password reset email sent.');
      } else {
        setResetMessage(text || 'Failed to send reset email.');
      }
    } catch (err) {
      setResetMessage('Server error. Try again later.');
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Login to Cartsy</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-end">
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => setShowReset(true)}
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        {showReset && (
          <div className="reset-password-form mt-4">
            <h5>Reset Password</h5>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-2"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
            <button onClick={handleResetPassword} className="btn btn-warning">
              Send Reset Email
            </button>
            {resetMessage && <div className="mt-2 text-info">{resetMessage}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;