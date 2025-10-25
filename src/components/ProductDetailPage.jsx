import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { product } = location.state || {};

  const [selectedSize, setSelectedSize] = useState('S');

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found!</h2>
        <button className="btn btn-outline-primary mt-3" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      size: selectedSize,
      id: `${product.id}-${selectedSize}`
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  const handleBuyNow = () => {
    const cartItem = {
      ...product,
      size: selectedSize,
      id: `${product.id}-${selectedSize}`,
      qty: 1 // Add quantity for the payment page
    };
    addToCart(cartItem);
    navigate('/payment', { state: { directPurchase: true } });
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Price: {product.price}</h4>

          <label htmlFor="size" className="form-label">Size:</label>
          <select id="size" className="form-select w-50" value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>

          {product.material && <p><strong>Material:</strong> {product.material}</p>}
          {product.design && <p><strong>Design:</strong> {product.design}</p>}
          {product.styleTip && <p><strong>Style Tip:</strong> {product.styleTip}</p>}

          <div className="mt-3">
            <button className="btn btn-primary me-2" onClick={handleAddToCart}>Add to Cart</button>
            <button className="btn btn-success" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;