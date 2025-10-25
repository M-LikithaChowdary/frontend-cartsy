// src/components/JewelleryPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './WJewelleryPage.css';

const jewelleryItems = [
  {
    id: 1,
    name: 'Earrings',
    price: 1200,
    description: 'Perfect for weddings and special events.',
    image: '/images/wj1.jpeg',
    material: 'Gold-plated',
    design: 'Classic',
    styleTip: 'Pairs beautifully with sarees.',
  },
  {
    id: 2,
    name: 'Ring',
    price: 499,
    description: 'Simple and stylish everyday wear.',
    image: '/images/wj2.jpeg',
    material: 'Silver',
    design: 'Minimalist',
    styleTip: 'Great with casual wear.',
  },
  {
    id: 3,
    name: 'Bracelet',
    price: 799,
    description: 'Traditional bangles with a modern twist.',
    image: '/images/wj3.jpeg',
    material: 'Metal alloy',
    design: 'Ethnic',
    styleTip: 'Best with ethnic attire.',
  },
  {
    id: 4,
    name: 'Necklace set',
    price: 2999,
    description: 'Stylish and sparkling.',
    image: '/images/wj4.jpeg',
    material: 'Imitation Diamond',
    design: 'Elegant',
    styleTip: 'Perfect for formal dinners.',
  },
  {
    id: 5,
    name: 'Pearl Pendant',
    price: 1499,
    description: 'Graceful pearl pendant necklace.',
    image: '/images/wj5.jpeg',
    material: 'Pearl',
    design: 'Modern',
    styleTip: 'Looks stunning on solid colors.',
  },
  {
    id: 6,
    name: 'Stud earrings',
    price: 1899,
    description: 'Trendy choker for parties.',
    image: '/images/wj6.jpeg',
    material: 'Beaded',
    design: 'Tribal',
    styleTip: 'Try with off-shoulder tops.',
  },
  { id: 7, name: 'Kundan Maang Tikka', price: 999, description: 'Elegant headpiece for festive occasions.', image: '/images/wj7.jpeg', material: 'Gold-plated with Kundan stones', design: 'Traditional', styleTip: 'Wear with lehengas or sarees.' },
{ id: 8, name: 'Anklet Pair', price: 699, description: 'Delicate anklets with tiny bells.', image: '/images/wj8.jpeg', material: 'Silver-plated', design: 'Boho', styleTip: 'Perfect with skirts or ethnic dresses.' },
{ id: 9, name: 'Statement Choker', price: 1699, description: 'Bold choker to make a statement.', image: '/images/wj9.jpeg', material: 'Mixed metals and stones', design: 'Contemporary', styleTip: 'Ideal for deep-neck dresses.' },
{ id: 10, name: 'Adjustable Toe Rings', price: 399, description: 'Comfortable and stylish.', image: '/images/wj10.jpeg', material: 'Stainless Steel', design: 'Simple', styleTip: 'Great for barefoot ethnic looks.' }

];

function WJewelleryPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Jewellery Collection</h2>
      <div className="row">
        {jewelleryItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <div className="text-success fw-bold mb-2">₹{item.price}</div>
                <Link
                  to="/product"
                  state={{ product: item }}
                  className="btn btn-outline-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WJewelleryPage;