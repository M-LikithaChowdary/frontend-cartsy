import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsListPage.css'; // you can create minimal styling

function ProductsListPage() {
  const navigate = useNavigate();

  const products = [
    
  ];

  const handleProductClick = (product) => {
    navigate('/product-detail', { state: { product } });
  };

  return (
    <div className="products-list-page">
      {products.map((product, index) => (
        <div key={index} className="product-card" onClick={() => handleProductClick(product)}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsListPage;
