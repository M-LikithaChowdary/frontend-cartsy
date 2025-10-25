// src/components/MenJewelleryPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MenJewelleryPage.css';

const menJewellery = [
  {
    id: 1,
    name: 'Platinum Luxe Chain',
    price: 1299,
    description: 'A bold, high-shine chain with a luxe finish, perfect for elevated daily wear.',
    image: '/images/mj1.jpg',
    material: 'Sterling Silver',
    design: 'Cuban Link',
    styleTip: 'Looks cool with t-shirts and hoodies',
  },
  {
    id: 2,
    name: 'Onyx Minimal Bracelet',
    price: 599,
    description: 'A sleek, understated piece featuring matte onyx-black beads.',
    image: '/images/mj2.jpg',
    material: 'Natural Stone',
    design: 'Stretch Fit',
    styleTip: 'Great with casual and ethnic wear',
  },
  {
    id: 3,
    name: 'Eclipse Kada',
    price: 999,
    description: 'Modern traditional kada with dual rings resembling an eclipse—elegant and clean.',
    image: '/images/mj3.jpg',
    material: 'Alloy with Gold Polish',
    design: 'Open End',
    styleTip: 'Pair with ethnic kurtas',
  },
  {
    id: 4,
    name: 'Rebel Cuff',
    price: 799,
    description: 'Chunky black leather with a bold metallic stud—a fierce style statement.',
    image: '/images/mj4.jpg',
    material: 'Genuine Leather',
    design: 'Adjustable Strap',
    styleTip: 'Adds edge to streetwear looks',
  },
  {
    id: 5,
    name: 'Chrome Cuban Chain',
    price: 499,
    description: 'Thick, polished Cuban chain with a high-gloss finish, ideal for bold looks.',
    image: '/images/mj5.jpg',
    material: 'Stainless Steel',
    design: 'Polished Finish',
    styleTip: 'Subtle and stylish for daily wear',
  },
  {
    id: 6,
    name: 'Grace Pendant Chain',
    price: 899,
    description: 'A slender silver chain with a refined cross charm, combining faith and finesse.',
    image: '/images/mj6.jpg',
    material: 'Metal Alloy',
    design: 'Pendant Style',
    styleTip: 'Goes well with layered outfits',
  },
];

function MenJewelleryPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Men's Jewellery</h2>
      <div className="row">
        {menJewellery.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '500px', objectFit: 'cover' }} />
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

export default MenJewelleryPage;
