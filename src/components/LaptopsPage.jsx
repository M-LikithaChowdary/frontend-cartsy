// src/components/LaptopsPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LaptopsPage.css';

const laptops = [
  {
    id: 1,
    name: 'HP Pavilion 14',
    price: 56999,
    description: 'Lightweight laptop with Intel i5 processor.',
    image: '/images/l1.jpeg',
    material: 'Aluminum',
    design: 'Slim Bezel Display',
    styleTip: 'Perfect for students',
  },
  {
    id: 2,
    name: 'Apple MacBook Air M2',
    price: 94999,
    description: 'Powerful and ultra-portable with M2 chip.',
    image: '/images/l2.jpeg',
    material: 'Aluminum Unibody',
    design: 'Retina Display',
    styleTip: 'Best for professionals',
  },
  {
    id: 3,
    name: 'Dell Inspiron 15',
    price: 48499,
    description: 'Reliable performance with large screen.',
    image: '/images/l3.jpeg',
    material: 'Plastic Body',
    design: 'FHD Display',
    styleTip: 'Ideal for office work',
  },
  {
    id: 4,
    name: 'Lenovo IdeaPad Gaming 3',
    price: 62999,
    description: 'Gaming laptop with Ryzen 5 and RTX GPU.',
    image: '/images/l4.jpeg',
    material: 'Plastic Build',
    design: 'Backlit Keyboard',
    styleTip: 'Great for gamers',
  },
  {
    id: 5,
    name: 'ASUS VivoBook 14',
    price: 42999,
    description: 'Compact laptop with fast SSD storage.',
    image: '/images/l5.jpeg',
    material: 'Textured Finish',
    design: 'NanoEdge Display',
    styleTip: 'Easy to carry and work',
  },
  {
    id: 6,
    name: 'Acer Aspire 7',
    price: 57499,
    description: 'Performance laptop with dedicated graphics.',
    image: '/images/l6.jpeg',
    material: 'Metal Top',
    design: 'Slim & Powerful',
    styleTip: 'Perfect for multitasking',
  },
];

function LaptopsPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Laptops</h2>
      <div className="row">
        {laptops.map((laptop) => (
          <div className="col-md-4 mb-4" key={laptop.id}>
            <div className="card h-100">
              <img src={laptop.image} alt={laptop.name} className="card-img-top" style={{ height: '400px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{laptop.name}</h5>
                <p className="card-text">{laptop.description}</p>
                <p className="text-success fw-bold">₹{laptop.price}</p>
                <Link
                  to="/product"
                  state={{ product: laptop }}
                  className="btn btn-primary"
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

export default LaptopsPage;
