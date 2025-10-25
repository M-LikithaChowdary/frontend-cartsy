// src/components/MusicalInstrumentsPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MusicalInstrumentsPage.css';

const instruments = [
  {
    id: 1,
    name: 'Yamaha Acoustic Guitar',
    price: 9499,
    description: 'Full-size acoustic guitar with spruce top.',
    image: '/images/mu1.jpeg',
    material: 'Wood',
    design: 'Dreadnought Body',
    styleTip: 'Great for beginners and pros',
  },
  {
    id: 2,
    name: 'Casio CTK Keyboard',
    price: 7299,
    description: '61-key digital keyboard with rhythms and tones.',
    image: '/images/mu2.jpeg',
    material: 'Plastic Body',
    design: 'Compact Design',
    styleTip: 'Ideal for learners and composers',
  },
  {
    id: 3,
    name: 'Tabla Set with Case',
    price: 5999,
    description: 'Brass bayan and wooden dayan with tuning hammer.',
    image: '/images/mu3.jpeg',
    material: 'Wood & Brass',
    design: 'Traditional',
    styleTip: 'Perfect for classical music lovers',
  },
  {
    id: 4,
    name: 'Violin with Bow',
    price: 6299,
    description: 'Acoustic violin with rosin and case.',
    image: '/images/mu4.jpeg',
    material: 'Spruce & Maple',
    design: 'Natural Finish',
    styleTip: 'Best for orchestral practice',
  },
  {
    id: 5,
    name: 'Electronic Drum Kit',
    price: 18999,
    description: '8-piece setup with headphone and pedal support.',
    image: '/images/mu5.jpeg',
    material: 'Metal & Rubber Pads',
    design: 'Digital Interface',
    styleTip: 'Perfect for home studios',
  },
  {
    id: 6,
    name: 'Flute in C Scale',
    price: 1299,
    description: 'Professional bamboo flute with soft tone.',
    image: '/images/mu6.jpeg',
    material: 'Bamboo',
    design: 'Handcrafted',
    styleTip: 'Good for meditation and practice',
  },
];

function MusicalInstrumentsPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Musical Instruments</h2>
      <div className="row">
        {instruments.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '600px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="text-success fw-bold">₹{item.price}</p>
                <Link
                  to="/product"
                  state={{ product: item }}
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

export default MusicalInstrumentsPage;
