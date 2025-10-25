// src/components/MenClothingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MClothingPage.css';

const menClothing = [
  {
    id: 1,
    name: 'Formal Blazer',
    price: 799,
    description: 'Comfortable cotton t-shirt perfect for casual outings.',
    image: '/images/mc1.jpeg',
    material: 'Cotton',
    design: 'Round Neck',
    styleTip: 'Pair with jeans or shorts',
  },
  {
    id: 2,
    name: 'Traditional Kurta',
    price: 1499,
    description: 'Elegant formal shirt for office wear or meetings.',
    image: '/images/mc2.jpeg',
    material: 'Polyester Blend',
    design: 'Slim Fit',
    styleTip: 'Great with dress pants or chinos',
  },
  {
    id: 3,
    name: 'Formal Shirt',
    price: 2299,
    description: 'Stylish denim jacket for a cool, casual look.',
    image: '/images/mc3.jpeg',
    material: 'Denim',
    design: 'Button Down',
    styleTip: 'Perfect for evening hangouts',
  },
  {
    id: 4,
    name: 'Casual Shirt',
    price: 1799,
    description: 'Cozy hoodie sweatshirt for cold weather.',
    image: '/images/mc4.jpeg',
    material: 'Fleece',
    design: 'Pullover Hoodie',
    styleTip: 'Pair with joggers or jeans',
  },
  {
    id: 5,
    name: 'Casual T-Shirt',
    price: 999,
    description: 'Comfortable track pants for exercise or casual wear.',
    image: '/images/mc5.jpeg',
    material: 'Polyester',
    design: 'Elastic Waistband',
    styleTip: 'Great for the gym or lounging at home',
  },
  {
    id: 6,
    name: 'Denim Jacket',
    price: 799,
    description: 'Classic v-neck t-shirt for a relaxed fit.',
    image: '/images/mc6.jpeg',
    material: 'Cotton',
    design: 'V-Neck',
    styleTip: 'Best with chinos or shorts',
  },
  {
    id: 7,
    name: 'Jeans',
    price: 799,
    description: 'Classic v-neck t-shirt for a relaxed fit.',
    image: '/images/mc7.jpeg',
    material: 'Cotton',
    design: 'V-Neck',
    styleTip: 'Best with chinos or shorts',
  },
  {
    id: 8,
    name: 'Chinos',
    price: 999,
    description: 'Classic v-neck t-shirt for a relaxed fit.',
    image: '/images/mc8.jpeg',
    material: 'Cotton',
    design: 'V-Neck',
    styleTip: 'Best with chinos or shorts',
  },
  {
    id: 9,
    name: 'Joggers',
    price: 1199,
    description: 'Classic v-neck t-shirt for a relaxed fit.',
    image: '/images/mc9.jpeg',
    material: 'Cotton',
    design: 'V-Neck',
    styleTip: 'Best with chinos or shorts',
  },
];

function MClothingPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Men's Clothing</h2>
      <div className="row">
        {menClothing.map((clothing) => (
          <div className="col-md-4 mb-4" key={clothing.id}>
            <div className="card h-100">
              <img src={clothing.image} alt={clothing.name} className="card-img-top" style={{ height: '600px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{clothing.name}</h5>
                <p className="card-text">{clothing.description}</p>
                <p className="text-success fw-bold">₹{clothing.price}</p>
                <Link
                  to="/product"
                  state={{ product: clothing }}
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

export default MClothingPage;
