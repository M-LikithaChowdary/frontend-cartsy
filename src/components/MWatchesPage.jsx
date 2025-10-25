// src/components/MenWatchesPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MWatchesPage.css';

const menWatches = [
    {
      id: 1,
      name: 'Rolex Yacht Master II',
      price: 12999,
      description: 'Durable sports watch with waterproof design.',
      image: '/images/mw1.jpeg',  // Replace with actual image file
      material: 'Rubber',
      design: 'Digital Display',
      styleTip: 'Ideal for workouts and outdoor activities',
    },
    {
      id: 2,
      name: 'Round Black Watches',
      price: 2999,
      description: 'Elegant leather strap watch for formal occasions.',
      image: '/images/mw2.jpeg',  // Replace with actual image file
      material: 'Leather',
      design: 'Analog Display',
      styleTip: 'Perfect for business meetings',
    },
    {
      id: 3,
      name: 'Silver Dial Leather Strap Watch',
      price: 5499,
      description: 'Stylish chronograph watch with large dial.',
      image: '/images/mw3.jpeg',  // Replace with actual image file
      material: 'Stainless Steel',
      design: 'Chronograph',
      styleTip: 'Great with casual or semi-formal attire',
    },
    {
      id: 4,
      name: 'Classic Gradient Dial Analog Watch',
      price: 2799,
      description: 'Premium luxury watch with embedded diamonds.',
      image: '/images/mw4.jpeg',  // Replace with actual image file
      material: 'Stainless Steel',
      design: 'Diamond Studded',
      styleTip: 'Perfect for high-end events',
    },
    {
      id: 5,
      name: 'Maverick Analog Watch',
      price: 4299,
      description: 'Multi-functional smartwatch for fitness enthusiasts.',
      image: '/images/mw5.jpeg',  // Replace with actual image file
      material: 'Rubber',
      design: 'Touchscreen Display',
      styleTip: 'Great for both casual and sports activities',
    },
    {
      id: 6,
      name: 'Luxury Watch with Diamond',
      price: 8999,
      description: 'Sleek and minimalistic black watch design.',
      image: '/images/mw6.jpeg',  // Replace with actual image file
      material: 'Stainless Steel',
      design: 'Minimal Dial',
      styleTip: 'Best for everyday wear',
    },
  ];

function MWatchesPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Men's Watches</h2>
      <div className="row">
        {menWatches.map((watch) => (
          <div className="col-md-4 mb-4" key={watch.id}>
            <div className="card h-100">
              <img src={watch.image} alt={watch.name} className="card-img-top" style={{ height: '600px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{watch.name}</h5>
                <p className="card-text">{watch.description}</p>
                <p className="text-success fw-bold">₹{watch.price}</p>
                <Link
                  to="/product"
                  state={{ product: watch }}
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

export default MWatchesPage;
