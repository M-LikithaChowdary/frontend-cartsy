// src/components/MobilesPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MobilesPage.css';

const mobiles = [
  {
    id: 1,
    name: 'Samsung Galaxy A14',
    price: 13499,
    description: 'Affordable smartphone with AMOLED display.',
    image: '/images/m1.jpeg',
    material: 'Plastic Body',
    design: 'Infinity-V Display',
    styleTip: 'Great for casual users',
  },
  {
    id: 2,
    name: 'iPhone 13',
    price: 58999,
    description: 'Powerful iPhone with A15 Bionic chip.',
    image: '/images/m2.jpeg',
    material: 'Aluminum & Glass',
    design: 'Super Retina XDR',
    styleTip: 'Ideal for photography lovers',
  },
  {
    id: 3,
    name: 'Redmi Note 12',
    price: 16999,
    description: 'Mid-range phone with 120Hz AMOLED display.',
    image: '/images/m3.jpeg',
    material: 'Polycarbonate',
    design: 'Slim & Sleek',
    styleTip: 'Perfect for gaming and media',
  },
  {
    id: 4,
    name: 'OnePlus Nord CE 3 Lite',
    price: 19999,
    description: 'Balanced performance and premium design.',
    image: '/images/m4.jpeg',
    material: 'Glass Front',
    design: 'Punch-hole Camera',
    styleTip: 'Stylish and modern',
  },
  {
    id: 5,
    name: 'Realme Narzo 60',
    price: 14499,
    description: 'Smooth performance and elegant look.',
    image: '/images/m5.jpeg',
    material: 'Plastic Back',
    design: 'Round Camera Bump',
    styleTip: 'Everyday use and multitasking',
  },
  {
    id: 6,
    name: 'Moto G73 5G',
    price: 17999,
    description: 'Clean UI with strong battery life.',
    image: '/images/m6.jpeg',
    material: 'Matte Finish',
    design: 'Edge Display',
    styleTip: 'Ideal for clean Android lovers',
  },
];

function MobilesPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mobiles</h2>
      <div className="row">
        {mobiles.map((mobile) => (
          <div className="col-md-4 mb-4" key={mobile.id}>
            <div className="card h-100">
              <img src={mobile.image} alt={mobile.name} className="card-img-top" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{mobile.name}</h5>
                <p className="card-text">{mobile.description}</p>
                <p className="text-success fw-bold">₹{mobile.price}</p>
                <Link
                  to="/product"
                  state={{ product: mobile }}
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

export default MobilesPage;
