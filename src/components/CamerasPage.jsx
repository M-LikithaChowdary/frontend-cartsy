// src/components/CamerasPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CamerasPage.css';

const cameras = [
  {
    id: 1,
    name: 'Canon EOS 1500D',
    price: 34999,
    description: '24.1MP DSLR with Wi-Fi and Full HD video.',
    image: '/images/c1.jpeg',
    material: 'Plastic Body',
    design: 'Compact DSLR',
    styleTip: 'Great for beginners',
  },
  {
    id: 2,
    name: 'Nikon D5600',
    price: 51999,
    description: 'Touchscreen DSLR with 39-point AF.',
    image: '/images/c2.jpeg',
    material: 'Polycarbonate',
    design: 'Rotating Display',
    styleTip: 'Ideal for travel photographers',
  },
  {
    id: 3,
    name: 'Sony Alpha ILCE-6100',
    price: 72990,
    description: 'Mirrorless camera with 4K video.',
    image: '/images/c3.jpeg',
    material: 'Metal Body',
    design: 'Lightweight & Compact',
    styleTip: 'Perfect for vlogging',
  },
  {
    id: 4,
    name: 'GoPro Hero 11',
    price: 44990,
    description: 'Waterproof action camera with stabilization.',
    image: '/images/c4.jpeg',
    material: 'Rubberized Finish',
    design: 'Rugged Build',
    styleTip: 'For adventure & sports',
  },
  {
    id: 5,
    name: 'Fujifilm Instax Mini 11',
    price: 5999,
    description: 'Instant camera with fun selfie mode.',
    image: '/images/c5.jpeg',
    material: 'Plastic',
    design: 'Cute & Retro',
    styleTip: 'Great for parties',
  },
  {
    id: 6,
    name: 'Panasonic Lumix G7',
    price: 39999,
    description: '4K mirrorless with interchangeable lenses.',
    image: '/images/c6.jpeg',
    material: 'Magnesium Alloy',
    design: 'DSLR-like Grip',
    styleTip: 'Great for hobbyists',
  },
];

function CamerasPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Cameras</h2>
      <div className="row">
        {cameras.map((camera) => (
          <div className="col-md-4 mb-4" key={camera.id}>
            <div className="card h-100">
              <img src={camera.image} alt={camera.name} className="card-img-top" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{camera.name}</h5>
                <p className="card-text">{camera.description}</p>
                <p className="text-success fw-bold">₹{camera.price}</p>
                <Link
                  to="/product"
                  state={{ product: camera }}
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

export default CamerasPage;
