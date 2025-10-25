// src/components/MenWalletsPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MenWalletsPage.css';

const menWallets = [
  {
    id: 1,
    name: 'Classic Green Wallet',
    price: 999,
    description: 'Elegant brown leather wallet with coin pocket.',
    image: '/images/mh1.jpeg',
    material: 'Genuine Leather',
    design: 'Bi-fold',
    styleTip: 'Perfect for daily professional use',
  },
  {
    id: 2,
    name: 'Black Slim Wallet',
    price: 799,
    description: 'Minimalist black wallet with card slots.',
    image: '/images/mh2.jpeg',
    material: 'Synthetic',
    design: 'Slim Fit',
    styleTip: 'Ideal for front pocket carry',
  },
  {
    id: 3,
    name: 'Textured RFID Wallet',
    price: 1199,
    description: 'Secure wallet with RFID protection and textured finish.',
    image: '/images/mh3.jpeg',
    material: 'PU Leather',
    design: 'Anti-theft',
    styleTip: 'Use while traveling for safety',
  },
  {
    id: 4,
    name: 'Tan Leather Card Holder',
    price: 499,
    description: 'Compact holder with 6 card slots.',
    image: '/images/mh4.jpeg',
    material: 'Leather',
    design: 'Card Wallet',
    styleTip: 'Best for quick errands',
  },
  {
    id: 5,
    name: 'Multi-Compartment Wallet',
    price: 1499,
    description: 'Spacious wallet with multiple compartments.',
    image: '/images/mh5.jpeg',
    material: 'Faux Leather',
    design: 'Organizer',
    styleTip: 'For those who carry cash and cards',
  },
  {
    id: 6,
    name: 'Designer Zipper Wallet',
    price: 1299,
    description: 'Trendy zipper-style designer wallet.',
    image: '/images/mh6.jpeg',
    material: 'Canvas & Leather',
    design: 'Zipper Closure',
    styleTip: 'Style with smart casuals',
  },
];

function MenWalletsPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Men's Wallets</h2>
      <div className="row">
        {menWallets.map((wallet) => (
          <div className="col-md-4 mb-4" key={wallet.id}>
            <div className="card h-100">
              <img src={wallet.image} alt={wallet.name} className="card-img-top" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{wallet.name}</h5>
                <p className="card-text">{wallet.description}</p>
                <p className="text-success fw-bold">₹{wallet.price}</p>
                <Link
                  to="/product"
                  state={{ product: wallet }}
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

export default MenWalletsPage;
