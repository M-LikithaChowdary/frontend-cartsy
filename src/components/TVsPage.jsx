// src/components/TVsPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './TVsPage.css';

const tvs = [
  {
    id: 1,
    name: 'Samsung 43" 4K Smart TV',
    price: 32999,
    description: 'UHD LED TV with voice control and smart apps.',
    image: '/images/tv1.jpeg',
    material: 'Plastic Frame',
    design: 'Slim Bezel Design',
    styleTip: 'Great for living rooms',
  },
  {
    id: 2,
    name: 'LG 55" OLED TV',
    price: 129999,
    description: 'OLED TV with AI ThinQ and Dolby Vision.',
    image: '/images/tv2.jpeg',
    material: 'Metal Stand',
    design: 'Ultra-slim',
    styleTip: 'Perfect for home theaters',
  },
  {
    id: 3,
    name: 'Sony Bravia 50" 4K TV',
    price: 64999,
    description: '4K HDR Smart Android TV.',
    image: '/images/tv3.jpeg',
    material: 'Aluminum Frame',
    design: 'Minimalistic',
    styleTip: 'Ideal for binge watchers',
  },
  {
    id: 4,
    name: 'Mi 40" Full HD Smart TV',
    price: 23999,
    description: 'Smart TV with PatchWall and Google Assistant.',
    image: '/images/tv4.jpeg',
    material: 'Plastic',
    design: 'Bezel-less Display',
    styleTip: 'Good for budget homes',
  },
  {
    id: 5,
    name: 'TCL 55" 4K Android TV',
    price: 39999,
    description: 'Dolby Audio, Android OS, Voice Control.',
    image: '/images/tv5.jpeg',
    material: 'Plastic Stand',
    design: 'Curved Screen',
    styleTip: 'Adds a modern touch',
  },
  {
    id: 6,
    name: 'OnePlus 50" Q1 TV',
    price: 52999,
    description: 'QLED display with powerful speakers.',
    image: '/images/tv6.jpeg',
    material: 'Premium Metal',
    design: 'Bold & Elegant',
    styleTip: 'Best for premium interiors',
  },
];

function TVsPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Televisions</h2>
      <div className="row">
        {tvs.map((tv) => (
          <div className="col-md-4 mb-4" key={tv.id}>
            <div className="card h-100">
              <img src={tv.image} alt={tv.name} className="card-img-top" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{tv.name}</h5>
                <p className="card-text">{tv.description}</p>
                <p className="text-success fw-bold">₹{tv.price}</p>
                <Link
                  to="/product"
                  state={{ product: tv }}
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

export default TVsPage;
