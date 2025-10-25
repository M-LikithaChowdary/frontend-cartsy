// src/components/KidsFootwearPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './KidsFootwearPage.css';

const kidsFootwear = [
  {
    id: 1,
    name: 'Peach Flower Shoes',
    price: 999,
    description: 'Colorful sneakers with light-up soles.',
    image: '/images/kf1.jpg',
    material: 'Mesh & Rubber',
    design: 'Velcro Strap',
    styleTip: 'Fun for outdoor play!',
  },
  {
    id: 2,
    name: 'Cartoon Flip-Flops',
    price: 299,
    description: 'Cute flip-flops with cartoon characters.',
    image: '/images/kf2.jpg',
    material: 'PVC',
    design: 'Toe Strap',
    styleTip: 'Perfect for the beach 🏖️',
  },
  {
    id: 3,
    name: 'Boys Sports Shoes',
    price: 599,
    description: 'Elegant flats for little girls.',
    image: '/images/kf3.jpg',
    material: 'Synthetic',
    design: 'Bow Accent',
    styleTip: 'Great with party dresses 🎀',
  },
  {
    id: 4,
    name: 'Light-Up Sneakers',
    price: 499,
    description: 'Comfortable sandals for everyday wear.',
    image: '/images/kf4.jpg',
    material: 'PU',
    design: 'Adjustable Straps',
    styleTip: 'Ideal for casual outings',
  },
  {
    id: 5,
    name: 'Kids Clogs',
    price: 399,
    description: 'Easy-to-wear colorful clogs.',
    image: '/images/kf5.jpg',
    material: 'EVA',
    design: 'Slip-On',
    styleTip: 'Perfect for indoor fun',
  },
  {
    id: 6,
    name: 'Unicorn Print Shoes',
    price: 799,
    description: 'Magical shoes with unicorn design.',
    image: '/images/kf6.jpg',
    material: 'Fabric & Rubber',
    design: 'Slip-On Style',
    styleTip: 'Cute and comfy!',
  },
];

function KidsFootwearPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Kids' Footwear</h2>
      <div className="row">
        {kidsFootwear.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '400px', objectFit: 'cover' }} />
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

export default KidsFootwearPage;
