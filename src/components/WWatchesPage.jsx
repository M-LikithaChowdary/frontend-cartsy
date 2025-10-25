// src/components/WatchesPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './WWatchesPage.css';

const watches = [
  {
    id: 1,
    name: 'Golden Aura',
    price: 2999,
    description: 'Suggests elegance and radiance, perfect for a classy event.',
    image: '/images/ww1.jpeg',
    material: 'Alloy',
    design: 'Classic Round',
    styleTip: 'Great with traditional wear',
  },
  {
    id: 2,
    name: ' Moonlight Charm',
    price: 2499,
    description: 'Evokes a soft, minimalist elegance with a modern twist.',
    image: '/images/ww2.jpeg',
    material: 'Stainless Steel',
    design: 'Minimal Dial',
    styleTip: 'Perfect for formal outfits',
  },
  {
    id: 3,
    name: 'Blush Luxe',
    price: 3199,
    description: 'Highlights the trendy rose gold with a luxurious vibe.',
    image: '/images/ww3.jpeg',
    material: 'Metal',
    design: 'Crystal Embellished',
    styleTip: 'Match with party dresses',
  },
  {
    id: 4,
    name: 'Active Edge',
    price: 1999,
    description: 'Captures the sleek, modern fitness-focused style.',
    image: '/images/ww4.jpeg',
    material: 'Rubber',
    design: 'Digital Display',
    styleTip: 'Use during workouts',
  },
  {
    id: 5,
    name: 'Royal Sparkle',
    price: 4999,
    description: 'Emphasizes the rich, dazzling stonework and elegance.',
    image: '/images/ww5.jpeg',
    material: 'Synthetic',
    design: 'Diamond Studded',
    styleTip: 'Wear at formal events',
  },
  {
    id: 6,
    name: 'Classic Grace',
    price: 1699,
    description: 'Reflects the timeless, simple design perfect for daily wear.',
    image: '/images/ww6.jpeg',
    material: 'Leather',
    design: 'Analog Display',
    styleTip: 'Best with casual wear',
  },
  { id: 7, name: 'Midnight Glow', price: 2899, description: 'A sophisticated black dial with luminous accents.', image: '/images/ww7.jpeg', material: 'Stainless Steel', design: 'Glow-in-the-dark', styleTip: 'Ideal for evening wear and parties.' },
{ id: 8, name: 'Sporty Chrono', price: 2499, description: 'A rugged yet stylish watch with multiple functions.', image: '/images/ww8.jpeg', material: 'Silicone', design: 'Chronograph', styleTip: 'Perfect for outdoor adventures.' },
{ id: 9, name: 'Emerald Spark', price: 3799, description: 'A stunning green gemstone embedded design for a vibrant look.', image: '/images/ww9.jpeg', material: 'Gold-plated', design: 'Gemstone Embellished', styleTip: 'Pair with elegant evening gowns.' },
{ id: 10, name: 'Silver Stripes', price: 1599, description: 'A sleek silver band with a minimalistic design.', image: '/images/ww10.jpeg', material: 'Stainless Steel', design: 'Minimalist', styleTip: 'Great for both casual and formal events.' }

];

function WWatchesPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Women's Watches</h2>
      <div className="row">
        {watches.map((watch) => (
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

export default WWatchesPage;
